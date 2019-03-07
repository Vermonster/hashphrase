import i18n from 'i18n-js';
import { Localization } from 'expo';

import es from './es';
import en from './en';

i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.translations = { en, es };
i18n.locale = Localization.locale;

i18n.translations = {
  en,
  es,
};

export default i18n;
