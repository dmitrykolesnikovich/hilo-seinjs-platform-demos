import {main} from '../../../sein-game/camera/actor-observe-control';

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
    this.props.onGameCreated(this.game, '摄像机', 'Actor观察控制器');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
