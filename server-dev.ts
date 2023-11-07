import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url'

import Koa from 'koa'
import koaConnect from 'koa-connect'

import { createServer as createViteServer } from 'vite'

const HOST_NAME = '127.0.0.1'
const APP_PORT = 1007

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Inject teleports in template
const injectTeleports = (
  html: string,
  teleports: {
    '#teleported': string
  }
) => {
  // if (teleports) {
  //   for (const [target, content] of Object.entries(teleports)) {
  //     if (['head', 'body', 'html'].includes(target)) {
  //       const replacement = `</${target}>`
  //       html = html.replace(replacement, content + replacement)
  //     } else {
  //       const replacement = ` id="${target.replace('#', '')}">`
  //       html = html.replace(replacement, replacement + content)
  //     }
  //   }
  // }
  //
  // return html
  return html.replace('<!--teleports-->', teleports['#teleported'])
}

;(async () => {
  const app = new Koa()

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      watch: {
        // During tests we edit the files too fast and sometimes chokidar
        // misses change events, so enforce polling for consistency
        usePolling: true,
        interval: 107,
      },
      hmr: {
        port: hmrPort,
      },
    },
    appType: 'custom',
  })

  // 解析accept-language
  function parseAcceptLanguage(acceptLanguage: string) {
    const languages = acceptLanguage.split(',')
    const language = languages[0]
    const country = language.split('-')[1]
    return { language, country }
  }

  app.use(koaConnect(vite.middlewares))

  app.use(async (ctx) => {
    const { language, country } = parseAcceptLanguage(
      ctx.request.headers['accept-language'] as string
    )
    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )

      template = await vite.transformIndexHtml(ctx.path, template)

      const { render } = await vite.ssrLoadModule('/src/entry-server.ts')

      const [renderedHtml, renderedPinia, renderedLinks, renderedTeleports] =
        await render(
          ctx,
          {},
          {
            language,
            country,
          }
        )

      const html = injectTeleports(template, renderedTeleports)
        .replace('<!--preload-links-->', renderedLinks)
        .replace('<!--ssr-outlet-->', renderedHtml)
        .replace('__pinia', renderedPinia)

      ctx.type = 'text/html'
      ctx.body = html
    } catch (e) {
      vite && vite.ssrFixStacktrace(e as Error)
      ctx.throw(500, e as Error)
    }
  })

  app.listen(APP_PORT, () => {
    console.log(`Server is listening on http://${HOST_NAME}:${APP_PORT}`)
  })
})()
