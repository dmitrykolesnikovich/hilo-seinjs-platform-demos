/**
 * @File   : webpack.dev.config.js
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : Wed Jul 24 2019
 * @Description: 
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Publisher = require('@alipay/seinjs-alipay-cdn-publisher');

const SeinJSPlatformPlugin = require('./webpack-platform-plugin/lib/index');

const Platform = process.env.SIENJS_PLATFORM;
const Mode = process.env.NODE_ENV;
const isDev = Mode !== 'production';
const outPath = path.resolve(__dirname, `./${Platform}/sein-game`);

const publisher = new Publisher({
  // 必选，资源仓库前缀，建议项目名
  prefix: 'seinjs-tiny-program',
  // 可选，发布到内网还是公网，默认内网
  // 内网为`internal`，公网为`public`
  mode: 'public',
  // forMyTinyProgram: true
});

console.log(Platform, Mode);

module.exports = {
  mode: Mode,
  devtool: 'none',

  output: {
    path: outPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/sein-game/',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      'seinjs-tiny-program-hud': path.resolve(__dirname, './tiny-program-hud/src')
    }
  },

  externals: {
    'fs': true,
    'path': true,
  },
  
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          },
          {
            loader: 'tslint-loader',
            query: {
              configFile: path.resolve(__dirname, './tslintConfig.js')
            }
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
          loader: 'seinjs-url-loader',
          options: {
            base64: {
              enabled: false
            },
            publish: {
              enabled: true,
              excludes: [],
              publisher
            }
          }
        }
      },
      {
        test: /\.(gltf|glb)$/,
        use: {
          loader: 'seinjs-gltf-loader',
          options: {
            compress: {
              enabled: true
            },
            glb: {
              enabled: false
            },
            base64: {
              enabled: false
            },
            publish: {
              enabled: true,
              excludes: [],
              publisher
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
            },
            publish: {
              enabled: true,
              excludes: [],
              publisher
            }
          }
        }
      }
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
    new SeinJSPlatformPlugin({platform: Platform})
  ]
};
