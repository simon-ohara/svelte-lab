const
  rollup = require('rollup'),
  resolve = require('rollup-plugin-node-resolve'),
  svelte = require('rollup-plugin-svelte'),
  autoPreprocess = require('svelte-preprocess');

exports.process = (...args) => {
  const
    compiled = {},
    [, input] = args;

  rollup
    .rollup({ input, plugins: [svelte({ preprocess: autoPreprocess() }), resolve()] })
    .then(bundle => bundle.generate({ format: 'cjs', sourcemap: true }))
    .then(({ output }) => {
      output.reduce((carry, record) => Object.assign(carry, record), compiled);
    })
    .catch((error) => {
      throw error;
    });

  // OSX sometimes throws an `Abort trap: 6` during the deasync loop
  // Used here as "jest transform processes" must by synchronous
  // https://github.com/facebook/jest/issues/2711
  require('deasync').loopWhile(() => !compiled.code && !compiled.map);

  return compiled;
};
