import {main} from '../../../sein-game/core/error-chain';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '核心基础', name: '异常链'});
    },
  }
});
