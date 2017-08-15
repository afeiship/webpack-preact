import autoprefixer from 'autoprefixer';

export default {
  jsx: {
    test: /\.jsx?/i,
    loader: 'babel-loader',
    exclude: /node_modules\/*/,
  },
  scss: {
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader" // creates style nodes from JS strings
      },
      {
        loader: "css-loader" // translates CSS into CommonJS
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: ['last 2 version', 'Explorer >= 10', 'Android >= 4']
            })
          ]
        }
      },
      {
        loader: "sass-loader" // compiles Sass to CSS
      }
    ]
  },
  image: {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader']
  }
}
