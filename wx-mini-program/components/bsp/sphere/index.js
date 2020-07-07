import {main} from '../../../sein-game/bsp/sphere';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '基础几何体', name: '球体'});
    },
  }
});
