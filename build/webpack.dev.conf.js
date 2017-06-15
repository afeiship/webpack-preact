const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:'./src/index.js',
  output:{
    path: path.join(__dirname ,'..','dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test:/\.jsx?/i,
        loader:'babel-loader',
        options: {
          presets:['env'],
          plugins:[
            ['transform-react-jsx',{ pragma:'h' }]
          ]
        }
      }
    ]
  },

  //devtools:
  devtool:'source-map',
  devServer:{
    contentBase: path.join(__dirname,'..','src'),
    compress:true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Power-by":"Fei-WEBPACK"
    }
  }
};
