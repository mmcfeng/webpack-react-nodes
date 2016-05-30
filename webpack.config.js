const webpack = require('webpack');

module.exports = {
     entry: './app/app.js',
     output: {
         path: './build',
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