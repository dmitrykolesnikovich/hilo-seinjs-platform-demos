import {main} from '../../../sein-game/material/render-options';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '材质系统', name: '修改渲染配置'});
    },
  }
});
