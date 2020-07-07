import {main} from '../../../sein-game/gpu-particle-system/edge-emitter';

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
    this.props.onGameCreated(this.game, 'GPU粒子系统', '边界发射器');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
