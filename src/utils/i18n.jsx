import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import languageEN from '../locate/en.json';
import languageRU from '../locate/ru.json';

let userLang = navigator.language || navigator.userLanguage;
userLang = userLang === 'en-US' ? 'en' : 'ru';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEN,
      ru: languageRU,
    },
    lng: window.localStorage.getItem('i18nextLng') || userLang,
    fallbackLng: 'ru',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });
export default i18n;
