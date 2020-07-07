import {main} from '../../../sein-game/player/player';

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
    this.props.onGameCreated(this.game, '玩家系统', '自定义玩家');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
