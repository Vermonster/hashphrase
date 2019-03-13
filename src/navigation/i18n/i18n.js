import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Localization } from 'expo';

import es from './es';
import en from './en';

const currentLocale = Localization.locale;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es,
    },
    lng: currentLocale,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
