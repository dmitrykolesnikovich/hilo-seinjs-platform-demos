import {main} from '../../../sein-game/physic/disable';

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
    this.props.onGameCreated(this.game, '物理系统', '停止运作');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
