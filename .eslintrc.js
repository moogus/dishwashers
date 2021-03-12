module.exports = {
  root: true,
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', 
  ],
  parserOptions:  {
    ecmaVersion:  2018, 
    sourceType:  'module', 
    ecmaFeatures: {
        jsx:  true, 
      },
  },
  settings:  {
    react:  {
      version:  'detect',
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
