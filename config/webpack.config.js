var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')//生成html文件
var ExtractTextPlugin = require('extract-text-webpack-plugin')//css样式从js文件中分离出来
var webpack = require('webpack')

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  devtool: "source-map",//生成错误地址，方便调试,https://doc.webpack-china.org/configuration/devtool/

  entry: path.resolve('','./src/main.js'),//入口文件

  output: {
    path: path.resolve('', './build'),
    filename: '[name].js',
  },//出口

  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: 8010,//端口
  },//https://www.cnblogs.com/grimm/p/5770829.html

  resolve: {
    extensions: ['.js', '.jsx'],//文件类型自动识别
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", 'css')
      },
      //解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // 在开发环境使用 style-loader
          fallback: "style-loader"
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',//从原文件中生成新的html模板
      inject: true,//js的生成位置，true，默认尾部
    }),//在编译目录生成html，https://segmentfault.com/a/1190000007294861

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),//代码压缩，开发环境慎用

    extractSass, //提取出来的样式放在style.css文件中
  ]
}