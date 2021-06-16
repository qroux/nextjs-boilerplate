import createDataContext from './createDataContext';

const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  AuthReducer,
  {},
  { authenticated: false }
);
