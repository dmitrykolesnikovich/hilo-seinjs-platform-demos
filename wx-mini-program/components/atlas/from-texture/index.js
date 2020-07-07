import {main} from '../../../sein-game/atlas/from-texture';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '图集', name: '通过纹理创建'});
    },
  }
});
