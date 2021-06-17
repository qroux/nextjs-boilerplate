import { actionTypes } from './appTypes';
import Cookies from 'js-cookie';
import { genExpiration } from '../utils';

export const switchTheme = (dispatch: Function) => async (current: any) => {
  dispatch({ type: actionTypes.SWITCH_THEME });

  Cookies.set('DARK_MODE', current, {
    expires: genExpiration(),
    sameSite: 'strict',
  });
};
