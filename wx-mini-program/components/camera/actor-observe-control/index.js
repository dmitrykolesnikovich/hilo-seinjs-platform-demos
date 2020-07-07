import {main} from '../../../sein-game/camera/actor-observe-control';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '摄像机', name: 'Actor观察控制器'});
    },
  }
});
