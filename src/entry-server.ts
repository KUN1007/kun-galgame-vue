import { createApp } from './main'

import { createKUNGalgameRouter } from './router'
import { setupPinia } from './store'
import i18n from '@/language/i18n'

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
): Promise<[string, string, string]> => {
  const { app } = createApp()

  // router
  const router = createKUNGalgameRouter()
  app.use(router)
  await router.push(ctx.path)
  await router.isReady()

  // pinia
  const pinia = setupPinia()
  app.use(pinia)
  const state = JSON.stringify(pinia.state.value)

  // i18n
  app.use(i18n)

  const renderCtx: { modules?: string[] } = {}

  const renderedHtml = await renderToString(app, renderCtx)

  const preloadLinks = renderPreloadLinks(renderCtx.modules, manifest)

  return [renderedHtml, state, preloadLinks]
}
