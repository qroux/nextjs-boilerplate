import createDataContext from './createDataContext';
import { actionTypes } from '../actions/app/appTypes';
import { switchTheme } from '../actions/app/appActions';
import Cookies from 'js-cookie';

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  AppReducer,
  { switchTheme },
  { lang: 'en', darkMode: false }
);
