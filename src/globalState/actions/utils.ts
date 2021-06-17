import Cookies from 'js-cookie';

export const genExpiration = () => {
  const expiration = new Date();
  expiration.setMinutes(expiration.getMinutes() + 60);
  return expiration;
};

export const fetchUserToken = () => {
  const cookie = Cookies.get('AUTH_JWT_TOKEN');
  return !cookie || cookie === 'false' ? undefined : cookie;
};
