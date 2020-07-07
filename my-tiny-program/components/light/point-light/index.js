import {main} from '../../../sein-game/light/point-light';

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
    this.props.onGameCreated(this.game, '灯光', '点光');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
