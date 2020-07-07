import {main} from '../../../sein-game/atlas/from-grid';

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
    this.props.onGameCreated(this.game, '图集', '通过格子创建');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
