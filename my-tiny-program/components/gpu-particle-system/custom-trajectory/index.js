import {main} from '../../../sein-game/gpu-particle-system/custom-trajectory';

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
    this.props.onGameCreated(this.game, 'GPU粒子系统', '自定义轨迹');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
