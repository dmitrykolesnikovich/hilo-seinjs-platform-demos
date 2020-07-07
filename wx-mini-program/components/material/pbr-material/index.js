import {main} from '../../../sein-game/material/pbr-material';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '材质系统', name: 'PBR材质'});
    },
  }
});
