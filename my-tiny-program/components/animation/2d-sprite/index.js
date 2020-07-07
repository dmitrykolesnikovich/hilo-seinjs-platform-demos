import {main} from '../../../sein-game/animation/2d-sprite';

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
    this.props.onGameCreated(this.game, '动画系统', '2D精灵');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
