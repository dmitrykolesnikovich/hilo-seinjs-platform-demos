import {main} from '../../../sein-game/camera/camera-orbit-control';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '摄像机', name: '绕轨相机控制器'});
    },
  }
});
