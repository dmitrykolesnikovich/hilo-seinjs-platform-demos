import {main} from '../../../sein-game/light/shadow';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '灯光', name: '实时阴影'});
    },
  }
});
