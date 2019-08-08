const { basename, resolve } = require('path');
const { compile, preprocess } = require('svelte/compiler');
const ExtendedPreprocess = require('svelte-preprocess');

const INTEROP = 'Object.defineProperty(exports, "__esModule", { value: true });';

exports.process = (source, filename) => {
  const compiled = {};

  const options = {
    compiler: {
      accessors: true,
      css: false,
      filename: basename(filename),
      format: 'cjs',
      dev: true,
    },

    extended: {
      typescript: {
        tsconfigPath: resolve(__dirname, '../../', 'config/tsconfig.json')
      }
    }
  };

  preprocess(source, ExtendedPreprocess(options.extended), options.compiler)
    .then(({ code }) => compile(code, options.compiler))
    .then(({ js: { code, map }}) => Object.assign(compiled, {
      code: code.concat(INTEROP),
      map
    }))
    .catch(err => { throw err });

  require('deasync').loopWhile(() => !compiled.code && !compiled.map);

  return compiled;
};
