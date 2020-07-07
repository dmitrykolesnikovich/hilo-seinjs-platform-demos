import {main} from '../../../sein-game/post-processing-system/bloom';

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
    this.props.onGameCreated(this.game, '后处理系统', '泛光');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
