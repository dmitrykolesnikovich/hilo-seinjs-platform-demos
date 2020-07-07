import {main} from '../../../sein-game/resource/gltf-loader';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '资源管理', name: 'GlTF加载器'});
    },
  }
});
