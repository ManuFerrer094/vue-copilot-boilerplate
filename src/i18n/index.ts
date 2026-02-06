import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

const savedLocale = localStorage.getItem('user-locale')
const defaultLocale = savedLocale || navigator.language.split('-')[0] || 'en'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
})

export default i18n
