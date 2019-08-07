module.exports = {
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.svelte$': '<rootDir>/test/jest-support/transform-svelte.js',
    '^.+\\.js$': 'babel-jest'
  }
};
