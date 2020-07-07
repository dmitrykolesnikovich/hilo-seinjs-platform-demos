import {main} from '../../../sein-game/atlas/allocate-release';

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
    this.props.onGameCreated(this.game, '图集', '动态分配释放');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
