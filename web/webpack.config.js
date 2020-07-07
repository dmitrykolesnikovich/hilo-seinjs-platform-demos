/**
 * @File   : webpack.config.js
 * @Author : 瞬光 (shunguang.dty@alibaba-inc.com)
 * @Date   : Mon Sep 02 2019
 * @Description: 
 */
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Mode = 'development';
const isDev = Mode !== 'production';

const outPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: Mode,
  devtool: 'none',

  entry: {
    main: [
      isDev && 'webpack-dev-server/client?/',
      isDev && 'webpack/hot/dev-server',
      './web/index.ts'
    ].filter(s => !!s)
  },

  output: {
    path: outPath,
    filename: '[name].[hash].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|mp4)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 15000,
          }
        }
      },
      {
        test: /\.(gltf|glb)$/,
        use: {
          loader: 'seinjs-gltf-loader',
          options: {
            compress: {
              enabled: false,
              excludes: [/miku/g]
            },
            glb: {
              enabled: false
            },
            base64: {
              enabled: false
            }
          }
        }
      },
      {
        test: /\.atlas$/,
        use: {
          loader: 'seinjs-atlas-loader',
          options: {
            base64: {
              enabled: false
            }
          },
        }
      },
    ]
  },

  optimization: {
    splitChunks: {
      minChunks: 1,
      cacheGroups: {
        seinjs: {
          name: 'seinjs',
          chunks: 'initial',
          test: m => {
            if (m.external) {
              return false;
            }

            return m.rawRequest === 'seinjs' || m.rawRequest === 'seinjs-orig';
          },
          priority: 2
        },
        common: {
          name: 'common',
          chunks: 'initial',
          test: /(node_modules|utils)/,
          priority: 1
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(
      ['*'],
      {root: outPath}
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(Mode)
      }
    }),
    isDev && new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './web/index.html'
      }),
  ].filter(s => !!s)
};
