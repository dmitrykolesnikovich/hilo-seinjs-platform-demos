import {main} from '../../../sein-game/physic/pick';

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
    this.props.onGameCreated(this.game, '物理系统', '拾取');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
