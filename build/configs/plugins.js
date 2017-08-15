import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  html: new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../../src/index.html'),
    title: 'Hot Module Replacement'
  }),
  common: new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].min.js',
  }),
  uglify: new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false,
    }
  }),
  hot: new webpack.HotModuleReplacementPlugin()
};
