import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Localization } from 'expo';

import es from './es';
import en from './en';

const languageDetector = {
  type: 'languageDetector',
  detect: () => Localization.locale,
  init: Function.prototype,
  cacheUserLanguage: Function.prototype,
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en,
      es,
    },
    fallbackLng: 'en',
    debug: true,
    appendNamespaceToCIMode: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
