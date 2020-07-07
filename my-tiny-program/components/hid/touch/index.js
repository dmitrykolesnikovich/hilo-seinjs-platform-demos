import {main} from '../../../sein-game/hid/touch';

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
    this.props.onGameCreated(this.game, '人体接口设备', '触摸');

    this.game.event.add('Info', info => this.setData({info}));
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
