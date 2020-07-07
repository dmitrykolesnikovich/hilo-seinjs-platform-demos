import {main} from '../../../sein-game/dispatch/multiple-world';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '场景调度', name: '多世界游戏'});
    },
  }
});
