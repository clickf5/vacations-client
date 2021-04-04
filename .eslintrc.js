module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'functional',
  ],
  settings: {
    'import/resolver': [
      'node',
      'webpack',
    ],
    jest: { version: 26 },
  },
  rules: {
    'import/extensions': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'functional/no-conditional-statement': 0,
    'functional/no-expression-statement': 0,
    'functional/immutable-data': 0,
    'functional/functional-parameters': 0,
    'functional/no-try-statement': 0,
    'functional/no-throw-statement': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
  },
};
