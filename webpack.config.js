const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



module.exports = {
  entry: './src/Landing_page.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({})
    ]
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'dist'),
    port: 4200
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/Landing_page.pug'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css' 
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
        
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
      
    ]
  }
}