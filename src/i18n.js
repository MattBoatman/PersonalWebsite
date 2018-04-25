import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from './locales/en/translations.json';
import es from './locales/es/translations.json';
i18n.use(reactI18nextModule).init({
  fallbackLng: 'en',
  resources: {
    en: { translations: en },
    es: { translations: es }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  debug: true,

  react: {
    wait: true
  }
});

export default i18n;
