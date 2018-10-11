import i18n from 'i18next';
import Expo from 'expo';
import { reactI18nextModule } from 'react-i18next';
// import { en } from './en.js';
// import { es } from './es.js';

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
      en: {
        translations: {
          createPassword: {
            title: 'Loplop',
            message: 'Generated password was copied to the clipboard.',
            label: 'Label...',
            password: 'Master Password...',
          },
        },
      },
    },
    es: {
      translations: {
        createPassword: {
          title: 'Loplop',
          message: 'Contraseña generada ha sido copiado al clipboard.',
          label: 'Etiqueta...',
          password: 'Contraseña general...',
        },
      },
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
