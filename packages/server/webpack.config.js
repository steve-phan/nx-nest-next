const { join } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./src/main.ts'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'main.js',
    path: join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
