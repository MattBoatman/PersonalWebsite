import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from './locales/en/translations.json';
import enWork from './locales/en/work.json';
import es from './locales/es/translations.json';
import esWork from './locales/es/work.json';
import * as moment from 'moment';
import 'moment/locale/es';

i18n.use(reactI18nextModule).init({
  fallbackLng: 'en',
  interpolation: {
    format: (value, form, lng) => {
      if (value instanceof Date) {
        moment.locale(lng);
        return moment(value).format(form);
      }
      return value;
    }
  },
  resources: {
    en: { translations: en, work: enWork },
    es: { translations: es, work: esWork }
  },
  ns: ['translations', 'work'],
  defaultNS: 'translations',
  debug: true,

  react: {
    wait: true
  }
});

export default i18n;
