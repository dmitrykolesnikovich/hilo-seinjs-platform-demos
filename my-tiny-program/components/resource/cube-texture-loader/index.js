import {main} from '../../../sein-game/resource/cube-texture-loader';

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
    this.props.onGameCreated(this.game, '资源管理', '立方体纹理加载器');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
