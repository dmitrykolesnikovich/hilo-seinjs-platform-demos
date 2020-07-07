import {main} from '../../../sein-game/start/start';

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
    this.props.onGameCreated(this.game, '开始', '开始');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
