import {main} from '../../../sein-game/core/error-chain';

Component({
  data: {
    info: ''
  },
  props: {
    onGetCanvas: () => null,
    onGameCreated: () => {}
  },
  game: null,
  async didMount() {
    const canvas = this.props.onGetCanvas();
    this.game = await main(canvas);
    this.props.onGameCreated(this.game, '核心基础', '异常链');

    this.game.event.add('Info', info => this.setData({info}));
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
