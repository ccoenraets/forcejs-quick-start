const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};


// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
//     entry: './app.js',
//     output: {
//         filename: 'app.bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 }
//             }
//         ]
//     },
//     stats: {
//         colors: true
//     },
//     devtool: 'source-map'
// };