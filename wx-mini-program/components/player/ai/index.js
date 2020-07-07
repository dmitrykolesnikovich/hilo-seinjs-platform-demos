import {main} from '../../../sein-game/player/ai';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '玩家系统', name: 'AI'});
    },
  }
});
