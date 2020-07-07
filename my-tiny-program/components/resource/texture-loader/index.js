import {main} from '../../../sein-game/resource/texture-loader';

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
    this.props.onGameCreated(this.game, '资源管理', '纹理加载器');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
