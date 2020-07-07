import {main} from '../../../sein-game/material/custom-semantic';

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
    this.props.onGameCreated(this.game, '材质系统', '自定义Semantic');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
