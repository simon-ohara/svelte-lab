# Exploring Svelte UI Framework with TDD

This is an attempt to explore and/or create suitable tooling to achieve a development workflow with Svelte in a TDD fashion.

It aims to use the following technologies:

* [Typescript](https://www.typescriptlang.org/)
* [Svelte](https://svelte.dev/)
* [Sass](https://sass-lang.com/)
* [Jest](https://jestjs.io/en/)
* [Webpack](https://webpack.js.org/)

## Quickstart

To run the lab and see the compiled output:

```bash
git clone git@github.com:simon-ohara/svelte-lab.git
cd svelte-lab
npm i && npm start
```

Visit: http://localhost:8080


## Development

During development the test runner should be run in watch mode:

```bash
npm run test:watch
```

This will watch everything (including `.svelte` files) in the `src/` directory and all `spec` files in the `test/` directory.

Modules from the `src/` should be imported using the `@/` prefix:

```javascript
import MySvelteComponent from '@/path/inside/src/my-svelte-component.svelte'
import MyTSModule from '@/path/inside/src/my-ts-module' // note no extension
import MyESModule from '@/path/inside/src/my-es-module' // note no extension
```

The test runner will re-run when any of the files inside the two direcotries change.

