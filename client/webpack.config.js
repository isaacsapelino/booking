const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
    {
      test: /\.(js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    },
    
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: /node_modules/,
      use: ['file-loader?name=[name].[ext]'] 
    }
  ]
},
devServer: {
    historyApiFallback: true,
    port: 5000,
    compress: true,
},
plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  })
 ]
};