import {main} from '../../../sein-game/animation/2d-sprite';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '动画系统', name: '2D精灵'});
    },
  }
});
