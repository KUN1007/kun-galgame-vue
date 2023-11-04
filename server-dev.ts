import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url'

import Koa from 'koa'
import koaConnect from 'koa-connect'

import { createServer as createViteServer } from 'vite'

const HOST_NAME = '127.0.0.1'
const APP_PORT = 1007

const __dirname = path.dirname(fileURLToPath(import.meta.url))

;(async () => {
  const app = new Koa()

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      watch: {
        // During tests we edit the files too fast and sometimes chokidar
        // misses change events, so enforce polling for consistency
        usePolling: true,
        interval: 100,
      },
    },
  })

  app.use(koaConnect(vite.middlewares))

  app.use(async (ctx) => {
    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )

      template = await vite.transformIndexHtml(ctx.path, template)

      const { render } = await vite.ssrLoadModule('/src/entry-server.ts')

      const [renderedHtml, state] = await render(ctx, {})

      const html = template
        .replace('<!--ssr-outlet-->', renderedHtml)
        .replace('<!--pinia-state-->', state)

      ctx.type = 'text/html'
      ctx.body = html
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      ctx.throw(500, e as Error)
    }
  })

  app.listen(APP_PORT, () => {
    console.log(`Server is listening in http://${HOST_NAME}:${APP_PORT}`)
  })
})()
