const { basename } = require('path');
const { compile, preprocess } = require('svelte/compiler');
const ExtendedPreprocess = require('svelte-preprocess');

const INTEROP = 'Object.defineProperty(exports, "__esModule", { value: true });';

exports.process = (source, filename) => {
  const
    compiled = {},
    options = {
      accessors: true,
      css: false,
      filename: basename(filename),
      format: 'cjs',
      dev: true,
    };

  preprocess(source, ExtendedPreprocess(), options)
    .then(({ code }) => compile(code, options))
    .then(({ js: { code, map }}) => Object.assign(compiled, {
      code: code.concat(INTEROP),
      map
    }))
    .catch(err => { throw err });

  require('deasync').loopWhile(() => !compiled.code && !compiled.map);

  return compiled;
};
