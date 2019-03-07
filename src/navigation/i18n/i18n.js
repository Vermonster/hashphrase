<<<<<<< HEAD
import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
=======
import i18n from 'i18n-js';
>>>>>>> update i18n to use new libraries and structure
import { Localization } from 'expo';

import es from './es';
import en from './en';

<<<<<<< HEAD
const languageDetector = {
  type: 'languageDetector',
  detect: () => Localization.locale,
  init: Function.prototype,
  cacheUserLanguage: Function.prototype,
};

i18n
  .use(reactI18nextModule)
  .use(languageDetector)
  .init({
    resources: {
      en,
      es,
    },
    interpolation: {
      escapeValue: false,
    },
  });
=======
i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.translations = { en, es };
i18n.locale = Localization.locale;

i18n.translations = {
  en,
  es,
};
>>>>>>> update i18n to use new libraries and structure

export default i18n;
