var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry:path.resolve(__dirname,'./src/index.js'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js?[hash:6]'
  },
  devServer:{
    contentBase:'dist',
    inline:true,
    port:8080,
    stats:{
      colors:true
    }
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        loader:extractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        include:path.resolve(__dirname,'src')
      },
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader?modules',
        include:path.resolve(__dirname,'src')
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'陈小珍的webpackTask',
      template:'./src/index.html'
    }),
    new extractTextPlugin("style.css"),
    new openBrowserPlugin({url:'http://localhost:8080/'}),
    new webpack.BannerPlugin('作者：陈小珍\n日期：2017-03-08\n协议：MIT')
  ]
}

module.exports = config
