import { createI18n } from 'vue-i18n'
import en from './en/en.json'
import vi from './vi/vi.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || navigator.languages || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
  },
})

export default i18n
