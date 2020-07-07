import {main} from '../../../sein-game/render/fog';

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
    this.props.onGameCreated(this.game, '渲染', '雾');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
