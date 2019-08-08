const path = require('path');
const { defaults: ts } = require('ts-jest/presets');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },

  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/config/tsconfig.json'
    }
  },

  transform: {
    '^.+\\.svelte$': '<rootDir>/test/jest-support/transform-svelte.js',
    '^.+\\.js$': 'babel-jest',
    ...ts.transform,
  }
};
