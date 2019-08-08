const path = require('path');

const tsconfigFile = path.resolve(__dirname, 'tsconfig.json');

module.exports = {
  name: 'svelte-lab-bundle',
  entry: path.resolve(__dirname, '../src/index.ts'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['.js', '.svelte', '.json', '.ts'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: require('svelte-preprocess')({
              typescript: { tsconfigFile }
            })
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: tsconfigFile,
          }
        }
      },
    ]
  }
};
