import { actionTypes } from './appTypes';
import AuthApi from '../../../services/Axios';

export const switchTheme = (dispatch: Function) => async () => {
  dispatch({ type: actionTypes.SWITCH_THEME });
};
