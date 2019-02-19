import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'Extension Name': 'Just Mute It!',
        'Delete Button': 'Delete',
        'Hidden Status Content': 'This content is hidden based on your muted words.',
      }
    },
    'zh-cn': {
      translations: {
        'Extension Name': '豆瓣广播关键词屏蔽插件',
        'Delete': '删除',
        'Hidden Status Content': '该广播已被屏蔽。'
      }
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true,
    bindI18n: 'languageChanged loaded',
  }
});

export default i18n;
