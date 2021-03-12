const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer(); 

const APP = 'src';
const APP_ROOT = path.resolve(__dirname, APP);
const BUILD_DIR = 'dist';

module.exports = {
  mode: 'development',
  entry: [path.resolve(APP_ROOT, 'index.tsx')],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, BUILD_DIR),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
       {
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader',
        options: {
            getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(APP_ROOT, 'index.html'),
    }),
    new CheckerPlugin()
  ],
  devServer: {
    port: 3000,
    hot: true,
    host: '127.0.0.1',
    contentBase: path.resolve(__dirname, APP),
    historyApiFallback: true,
  },
};
