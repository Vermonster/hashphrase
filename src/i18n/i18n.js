import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { Localization } from 'expo';

import es from './es';
import en from './en';
import zh from './zh';

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
      zh,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
