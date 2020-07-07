/**
 * @File   : webpack.dev.config.js
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : Wed Jul 24 2019
 * @Description: 
 */
const Platform = process.env.SIENJS_PLATFORM;
const path = require('path');
const webpackConfig = require('./webpack.common.config');

let entry;

if (Platform === 'my-tiny-program' || Platform === 'wx-mini-program') {
  const config = require('./config');

  entry = {};
  config.forEach(category => {
    category.list.forEach(({id}) => {
      entry[`${category.id}/${id}`] = path.resolve(__dirname, 'game', category.id, id, 'index.ts');
    });
  });
} else {
  entry = {index: path.resolve(__dirname, 'my-tiny-game', 'index.ts')};
}

webpackConfig.entry = entry;
module.exports = webpackConfig;
