import createDataContext from './createDataContext';

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  AppReducer,
  {},
  { darkMode: true }
);
