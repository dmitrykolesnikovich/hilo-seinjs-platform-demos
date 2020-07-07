import {main} from '../../../sein-game/dispatch/single-level';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '场景调度', name: '单关卡游戏'});
    },
  }
});
