var path = require('path');

var web = {
  entry: {
    client: path.resolve(__dirname, "src/client.jsx")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?stage=0'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

var node = {
  entry: {
    server: path.resolve(__dirname, "src/server.jsx")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      {
        test: /.+\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?stage=0'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css/locals'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  target: "node"
};

module.exports = [node, web];
