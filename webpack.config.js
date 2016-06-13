const webpack = require('webpack');
const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
     entry: {
       app : PATHS.app
     },
     output: {
      path: PATHS.build,
      filename: 'app.min.js',
     },
     module: {
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
     plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
 }
