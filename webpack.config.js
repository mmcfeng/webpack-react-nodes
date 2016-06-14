const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry : {
    app : PATHS.app
  },
  output : {
    path : PATHS.build,
    filename : 'app.min.js'
  },
  module : {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },{
        test: /\.css$/,
        loader: "style!css"
      },{
        test:/\.html/,
        loader:'html'
      }]
    },
    plugins : [
      
    ]
}

if (TARGET==='start'||!TARGET) {
  module.exports = merge(common,{
    devServer : {
      contentBase: PATHS.build,
      historyApiFallback: true, 
      hot: true, 
      inline: true, 
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST, 
      port: process.env.PORT 
    },
    plugins : [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
};
if (TARGET==='build') {
  module.exports = merge(common,{})
};

