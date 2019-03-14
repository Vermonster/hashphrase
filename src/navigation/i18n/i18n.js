import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
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
<<<<<<< HEAD
  .use(reactI18nextModule)
=======
  .use(initReactI18next)
>>>>>>> wip i18n
  .use(languageDetector)
  .init({
    resources: {
      en,
      es,
    },
<<<<<<< HEAD
=======
    fallbackLng: 'en',
    debug: true,
    appendNamespaceToCIMode: true,

>>>>>>> wip i18n
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
