import {main} from '../../../sein-game/dispatch/multiple-level';

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
    this.props.onGameCreated(this.game, '场景调度', '多关卡游戏');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
