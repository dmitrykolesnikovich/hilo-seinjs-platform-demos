import {main} from '../../../sein-game/core/life-cycle';

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
    this.props.onGameCreated(this.game, '核心基础', '生命周期');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
