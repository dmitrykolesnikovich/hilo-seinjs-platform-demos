import {main} from '../../../sein-game/gpu-particle-system/custom-trajectory';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: 'GPU粒子系统', name: '自定义轨迹'});
    },
  }
});
