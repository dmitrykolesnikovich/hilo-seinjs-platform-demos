import {main} from '../../../sein-game/post-processing-system/bloom';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '后处理系统', name: '泛光'});
    },
  }
});
