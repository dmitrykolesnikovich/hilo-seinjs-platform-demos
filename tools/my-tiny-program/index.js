import {main} from '../../../sein-game/{{CATEGORY_ID}}/{{DEMO_ID}}';

Component({
  data: {},
  props: {
    onGetCanvas: () => null,
    onGameCreated: () => {}
  },
  game: null,
  async didMount() {
    const canvas = this.props.onGetCanvas();
    this.game = await main(canvas);
    this.props.onGameCreated(this.game, '{{CATEGORY_NAME}}', '{{DEMO_NAME}}');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
