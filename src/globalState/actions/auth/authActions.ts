import { actionTypes } from './authTypes';
import AuthApi from '../../../services/Axios';
import { formTypes } from '../../../components/types/formTypes';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { genExpiration } from '../utils';

export const authUser = (dispatch: Function) => async ({
  type,
  email,
  password,
}: {
  type: string;
  email: string;
  password: string;
}) => {
  try {
    const path = type === formTypes.REGISTER ? 'signup' : 'login';
    const response = await AuthApi.post(path, { email, password });

    dispatch({ type: actionTypes.AUTH_USER, payload: response.data.token });

    Cookies.set('AUTH_JWT_TOKEN', response.data.token, {
      expires: genExpiration(),
      sameSite: 'strict',
    });

    Router.push('/');
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: err.response.data.error,
    });
  }
};

export const resetAuthError = (dispatch: Function) => async () => {
  dispatch({ type: actionTypes.RESET_AUTH_ERROR });
};

export const fetchUserToken = (dispatch: Function) => async () => {
  const cookie = Cookies.get('AUTH_JWT_TOKEN');
  const result = !cookie || cookie === 'false' ? undefined : cookie;

  if (result) dispatch({ type: actionTypes.AUTH_USER, payload: cookie });
};
