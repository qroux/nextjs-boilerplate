import createDataContext from './createDataContext';
import { types } from '../actions/types';

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case types.SWITCH_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const switchTheme = (dispatch: Function) => async () => {
  dispatch({ type: types.SWITCH_THEME });
};

export const { Context, Provider } = createDataContext(
  AppReducer,
  { switchTheme },
  { lang: 'en', darkMode: true }
);
