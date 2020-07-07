import {main} from '../../../sein-game/hid/touch';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '人体接口设备', name: '触摸'});
    },
  }
});
