import {main} from '../../../sein-game/camera/perspective-camera';

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
    this.props.onGameCreated(this.game, '摄像机', '透视摄像机');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
