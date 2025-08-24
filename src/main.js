import './assets/styles/main.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './lang/i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    darkModeSelector: '.p-dark',
  },
})
app.mount('#app')
