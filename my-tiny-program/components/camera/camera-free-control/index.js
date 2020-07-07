import {main} from '../../../sein-game/camera/camera-free-control';

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
    this.props.onGameCreated(this.game, '摄像机', '自由相机控制器');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
