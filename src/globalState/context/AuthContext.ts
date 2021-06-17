import createDataContext from './createDataContext';
import { actionTypes } from '../actions/auth/authTypes';
import { authUser } from '../actions/auth/authActions';
import Cookies from 'js-cookie';

// UTILS
const fetchCookie = () => {
  const cookie = Cookies.get('AUTH_JWT_TOKEN');
  return !cookie || cookie === 'false' ? undefined : cookie;
};

const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return {
        ...state,
        errorMsg: '',
        token: action.payload,
      };
    case actionTypes.AUTH_ERROR:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  AuthReducer,
  { authUser },
  { errorMsg: '', token: fetchCookie() }
);
