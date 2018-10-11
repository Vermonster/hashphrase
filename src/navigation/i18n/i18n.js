import i18n from 'i18next';
import Expo from 'expo';
import { reactI18nextModule } from 'react-i18next';
import es from './es';
import en from './en';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => Expo.Util.getCurrentLocaleAsync()
    .then((lng) => { cb(lng.replace('_', '-')); }),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      en,
      es,
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
    debug: true,
  });

export default i18n;
