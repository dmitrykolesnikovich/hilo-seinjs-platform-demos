import {main} from '../../../sein-game/gpu-particle-system/sphere-emitter';

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
    this.props.onGameCreated(this.game, 'GPU粒子系统', '球体发射器');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
