var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var uglifyPlugin = webpack.optimize.UglifyJsPlugin

var config = {
  entry:path.resolve(__dirname,'./src/index.js'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
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
        loader:'style-loader!css-loader',
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
    new uglifyPlugin({
      compress:false
    }),
    new webpack.BannerPlugin('作者：陈小珍\n日期：2017-03-08\n协议：MIT')
  ]
}

module.exports = config
