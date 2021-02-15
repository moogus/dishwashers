module.exports = {
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileMock.js',
  },

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/styleTransForm.js',
  },

  roots: ['<rootDir>/app'],
  testMatch: ['<rootDir>/app/**/*.spec.js'],
  transformIgnorePatterns: ['node_modules'],

  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/setUpJest.js',
  ],
};
