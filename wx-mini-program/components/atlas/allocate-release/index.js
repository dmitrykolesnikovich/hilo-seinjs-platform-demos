import {main} from '../../../sein-game/atlas/allocate-release';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '图集', name: '动态分配释放'});
    },
  }
});
