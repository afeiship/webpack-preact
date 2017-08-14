const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          presets: [
            'env', 'es2015', 'stage-0'
          ],
          plugins: [
            [
              'transform-react-jsx', {
                pragma: 'h'
              }
            ]
          ]
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'..','src/index.html'),
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve:{
    alias:{
      images:path.resolve(__dirname,'..', 'src/assets/images'),
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //devtools:
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    hot: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Power-by": "Fei-WEBPACK"
    }
  }
};
