module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // roots: [
  //   '<rootDir>/src',
  // ],

  // globals: {
  //   'ts-jest': {
  //     isolatedModules: true
  //     diagnostics: false
  //   }
  // },

  transform: {
    '^.+\\.ts$': 'ts-jest',
    // '^.+\\.spec.js$': 'babel-jest'
  },
};
