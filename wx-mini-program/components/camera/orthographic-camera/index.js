import {main} from '../../../sein-game/camera/orthographic-camera';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '摄像机', name: '正交摄像机'});
    },
  }
});
