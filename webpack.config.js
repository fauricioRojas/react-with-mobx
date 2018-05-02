const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const ENV = process.env.npm_lifecycle_event;
const PORT = 3000;

const PATHS = {
  app: path.join(__dirname, 'src/app.js'),
  dist: path.join(__dirname, 'dist'),
  template: path.join(__dirname, 'src/index.html')
};

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules')
    ]
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: PATHS.template,
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  }
};

if (ENV === 'start') {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      contentBase: PATHS.dist,
      historyApiFallback: true,
      hot: true,
      inline: true,
      open: true,
      stats: 'errors-only',
      port: PORT,
      openPage: ''
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
} else if (ENV === 'build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  });
}
