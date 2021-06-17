import createDataContext from './createDataContext';
import { actionTypes } from '../actions/auth/authTypes';
import { authUser, fetchUserToken } from '../actions/auth/authActions';

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
  { authUser, fetchUserToken },
  { errorMsg: '', token: '' }
);
