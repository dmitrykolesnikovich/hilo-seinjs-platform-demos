import {main} from '../../../sein-game/physic/collision-events';

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
    this.props.onGameCreated(this.game, '物理系统', '碰撞事件');

    this.game.event.add('Info', info => this.setData({info}));
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
