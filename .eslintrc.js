module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:react/recommended', 'react-app'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      alias: [],
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-anonymous-default-export': 'off',
  },
  plugins: ['react', 'better-styled-components'],
  globals: {
    __PATH_PREFIX__: true,
    jest: true,
    describe: true,
    test: true,
    expect: true,
    beforeEach: true,
    beforeAll: true,
    afterEach: true,
    afterAll: true,
    it: true,
    fetch: true,
  },
};
