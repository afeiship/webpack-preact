import path from 'path';

export default {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    hot: true,
    stats: 'errors-only',
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Power-by": "Fei-WEBPACK"
    }
  }
}
