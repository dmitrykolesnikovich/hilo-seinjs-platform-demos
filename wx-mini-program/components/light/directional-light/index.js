import {main} from '../../../sein-game/light/directional-light';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '灯光', name: '平行光'});
    },
  }
});
