const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = process.env.npm_lifecycle_event;
const PORT = 3000;

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  template: path.join(__dirname, 'src/index.html'),
  vendor: path.join(__dirname, 'src/vendor.js')
};

const common = {
  entry: {
    app: PATHS.app,
    vendor: PATHS.vendor
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
    filename: '[name].[hash].js'
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: PATHS.template,
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      }
    }),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader?cacheDirectory',
        include: PATHS.app
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
