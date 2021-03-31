const host = '';
const prefix = 'api/v1';

export default {
  usersPath: () => [host, prefix, 'users'].join('/'),
  userPath: (id) => [host, prefix, 'user', id].join('/'),
  signInPath: () => [host, prefix, 'signin'].join('/'),
  signUpPath: () => [host, prefix, 'signup'].join('/'),
  signOutPath: () => [host, prefix, 'signout'].join('/'),
  whoAmIPath: () => [host, prefix, 'whoami'].join('/'),
};
