import {main} from '../../../sein-game/player/ai';

Component({
  data: {
    state: ''
  },
  props: {
    onGetCanvas: () => null,
    onGameCreated: () => {}
  },
  game: null,
  async didMount() {
    const canvas = this.props.onGetCanvas();
    this.game = await main(canvas);
    this.props.onGameCreated(this.game, '玩家系统', 'AI');

    this.game.event.add('UpdateState', state => this.updateState(state));
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    updateState(state) {
      if (state.hp === 0) {
        this.setData({state: `You dead! Kill: ${state.killNum}`});
      } else {
        this.setData({state: `HP: ${state.hp} Kill: ${state.killNum}`});
      }
    },
  }
});
