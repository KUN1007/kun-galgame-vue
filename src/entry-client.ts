import { createApp } from './main'
import i18n from '@/language/i18n'
import '@/styles/index.scss'

const { app, router, pinia } = createApp()

app.use(router)
app.use(i18n)

if (window.__INITIAL_STATE__) {
  pinia.state.value = JSON.parse(window.__INITIAL_STATE__)
}

router.isReady().then(() => {
  app.mount('#app')
  console.log('hydrated')
})
