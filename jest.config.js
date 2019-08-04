const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '^.+\\.svelte$': '<rootDir>/test/jest-support/transform-svelte.js',
    '^.+\\.js$': 'babel-jest'
  },

  coveragePathIgnorePatterns: [
    ...defaults.coveragePathIgnorePatterns,
    '/test/jest-support/',
    '/node_modules/svelte/internal/*'
  ]
};
