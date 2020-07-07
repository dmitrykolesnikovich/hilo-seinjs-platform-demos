/**
 * @File   : index.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 2019/7/25 上午11:06:59
 * @Description:
 */
Page({
  data: {
    current: ''
  },
  canvas: null,
  game: null,
  onReady() {
    // my.request({
    //   url: 'https://httpbin.org/image/png',
    //   dataType: 'arraybuffer',
    //   success: (res) => {
    //     console.log('xxxxxxx', res);
    //   },
    // });

    // setTimeout(() => {
    //   const worker = my.createWorker('test.worker.js');
    //   console.log(worker);
    //   const buffer = new Float32Array([1, 2, 3, 4]);

    //   worker.onMessage((e) => {
    //     console.log('dataxxx', e);
    //   });

    //   worker.postMessage({type: 'test', buffer}, [buffer]);
    // }, 10000);
  },
  onHide() {
    console.log('hide');
    if (this.game) {
      this.game.pause();
    }
  },
  onShow() {
    console.log('show');
    if (this.game) {
      this.game.resume();
    }
  },
  onUnload() {
    console.log('unload');
    if (this.game) {
      this.game.destroy();
    }
  },
  onSeinCanvasCreated(canvas) {
    this.canvas = canvas;
    console.log('onSeinCanvasCreated', canvas);

    this.onSelectDemo('start', 'start');
    // this.onSelectDemo('atlas', 'allocate-release');
  },
  onSelectDemo(category, id) {
    console.log(category, id);

    if (this.data.current === `${category}-${id}`) {
      return;l
    }

    if (this.game) {
      this.game.destroy();
    }

    this.setData({current: `${category}-${id}`});
  },
  onGetCanvas() {
    console.log('onGetCanvas', this.canvas);
    return this.canvas;
  },
  onGameCreated(game, category, name) {
    this.game = game;
    console.log('onGameCreated', category, name, this.game);
  }
});
