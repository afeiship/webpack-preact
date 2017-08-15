import path from 'path';
import webpack from 'webpack';
import AssetsWebpackPlugin from 'assets-webpack-plugin';

export default {
  output: {
    path: path.resolve(__dirname, '../dist/vendors'),
    filename: '[name].[hash].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../dist/vendors/manifest.json'),
      name: '[name]_library',
      context: __dirname,
    })
  ],
  entry: {
    vendors: [
      'preact'
    ]
  },
}
