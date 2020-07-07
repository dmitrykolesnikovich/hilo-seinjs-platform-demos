import {main} from '../../../sein-game/event/custom-trigger';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '事件系统', name: '自定义触发器'});
    },
  }
});
