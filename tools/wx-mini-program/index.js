import {main} from '../../../sein-game/{{CATEGORY_ID}}/{{DEMO_ID}}';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '{{CATEGORY_NAME}}', name: '{{DEMO_NAME}}'});
    },
  }
});
