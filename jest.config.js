module.exports = {
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
  },

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.css$': '<rootDir>/jest/styleTransForm.js',
  },

  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  transformIgnorePatterns: ['node_modules'],

  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/jest/setUpJest.js',
  ],
};
