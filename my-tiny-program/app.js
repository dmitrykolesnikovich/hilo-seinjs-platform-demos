/**
 * @File   : app.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 2019/7/25 上午10:58:15
 * @Description:
 */
// my.call("setScreenOrientation", {orientation: 'landscape', beta: true});

import './sein-game/seinjs';
import './sein-game/common';

App({
  onLaunch(options) {
    console.log('App Launch', options);
    // console.log('getSystemInfoSync', my.getSystemInfoSync());
    // console.log('SDKVersion', my.SDKVersion);
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  }
});
