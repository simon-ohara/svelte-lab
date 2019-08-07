const { basename } = require('path');
const { compile, preprocess } = require('svelte/compiler');
const ExtendedPreprocess = require('svelte-preprocess');

exports.process = (source, filename) => {
  const options = {
    accessors: true,
    css: false,
    filename: basename(filename),
    format: 'cjs',
  };

  const compiled = {};

  preprocess(source, ExtendedPreprocess(), options)
    .then(({ code }) => compile(code, options))
    .then(({ js }) => Object.assign(compiled, js))
    .catch(err => { throw err });

  require('deasync').loopWhile(() => !compiled.code && !compiled.map);
  return compiled;
};
