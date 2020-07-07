import {main} from '../../../sein-game/physic/pick';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '物理系统', name: '拾取'});
    },
  }
});
