import { basename } from 'path'
import { createApp } from './main'

import { renderToString } from '@vue/server-renderer'

import type { ParameterizedContext } from 'koa'

import '@/styles/index.scss'

const renderPreloadLink = (file: string) => {
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href="${file}">`
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`
  } else if (file.endsWith('.png')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`
  } else {
    // TODO
    return ''
  }
}

const renderPreloadLinks = (
  modules: undefined | string[],
  manifest: Record<string, string[]>
) => {
  let links = ''
  const seen = new Set()
  if (modules === undefined) throw new Error()

  modules.forEach((id) => {
    const files = manifest[id]
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file)
          const filename = basename(file)
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile)
              seen.add(depFile)
            }
          }
          links += renderPreloadLink(file)
        }
      })
    }
  })
  return links
}

export const render = async (
  ctx: ParameterizedContext,
  manifest: Record<string, string[]>
): Promise<[string, string]> => {
  const { app, router } = createApp()

  app.use(router)
  await router.push(ctx.path)
  await router.isReady()

  const renderCtx: { modules?: string[] } = {}

  const renderedHtml = await renderToString(app, renderCtx)

  const preloadLinks = renderPreloadLinks(renderCtx.modules, manifest)

  return [renderedHtml, preloadLinks]
}
