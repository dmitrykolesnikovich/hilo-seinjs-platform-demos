import {main} from '../../../sein-game/resource/atlas-loader';

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
    this.props.onGameCreated(this.game, '资源管理', '图集加载器');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
