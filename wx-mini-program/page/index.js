//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: '',
    canvasHeight: 0,
    sidebarHeight: 0,
    sidebarTop: 0
  },
  canvas: null,
  game: null,
  onLoad() {
    console.log('load');
    this.setData({
      canvasHeight: wx.window.innerHeight / 2,
      sidebarHeight: wx.window.innerHeight / 2,
      sidebarTop: wx.window.innerHeight / 2
    });
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
  onSeinCanvasCreated({detail: canvas}) {
    this.canvas = canvas;
    console.log('onSeinCanvasCreated');

    this.onSelectDemo({detail: {category: 'start', id: 'start'}});
  },
  onSelectDemo({detail}) {
    const {category, id} = detail;
    console.log(category, id);

    if (this.data.current === `${category}-${id}`) {
      return;
    }

    if (this.game) {
      this.game.destroy();
    }

    this.setData({current: `${category}-${id}`}, () => {
      const comp = this.selectComponent(`#${category}-${id}`);
      comp.start(this.canvas);
    });
  },
  onGameCreated({detail}) {
    const {game, category, name} = detail;
    this.game = game;
    console.log('onGameCreated', category, name);
  }
})
