import en from './locales/en.json';
import es from './locales/es.json';

function locale(
  state = {
    locale: 'en',
    locales: {
      en,
      es
    }
  },
  action
) {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        ...state,
        locale: action.locale
      };
    case 'LOAD_LOCALES': {
      return {
        ...state,
        locales: action.locales
      };
    }
    default:
      return state;
  }
}

export default locale;
