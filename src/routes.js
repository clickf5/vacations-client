const host = '';
const prefix = 'api/v1';

export default {
  usersPath: () => [host, prefix, 'users'].join('/'),
  userPath: (id) => [host, prefix, 'user', id].join('/'),
  approvePath: (id) => [host, prefix, 'user', id, 'approve'].join('/'),
  dismissPath: (id) => [host, prefix, 'user', id, 'dismiss'].join('/'),
  signInPath: () => [host, prefix, 'signin'].join('/'),
  signUpPath: () => [host, prefix, 'signup'].join('/'),
  signOutPath: () => [host, prefix, 'signout'].join('/'),
  whoAmIPath: () => [host, prefix, 'whoami'].join('/'),
};
