import {main} from '../../../sein-game/resource/cancel';

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
    this.props.onGameCreated(this.game, '资源管理', '取消加载');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
