const cssnext = require('postcss-cssnext');
const precss = require('precss');

module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: '.',
    publicPath: './dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss'
      }
    ]
  },
  postcss: function () {
    return [
      precss,
      cssnext
    ];
  }
}
