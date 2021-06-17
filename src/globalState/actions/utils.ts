export const genExpiration = () => {
  const expiration = new Date();
  expiration.setMinutes(expiration.getMinutes() + 60);
  return expiration;
};
