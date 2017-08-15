import path from 'path';
import {rules, plugins, extensions, alias, dev} from './webpack.config.babel';


export default {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [rules.jsx, rules.scss, rules.image]
  },
  plugins: [plugins.html, plugins.common, plugins.uglify, plugins.hot],
  resolve: {
    extensions, alias
  },
  //devtools:
  devtool: dev.devtool,
  devServer: dev.devServer
};
