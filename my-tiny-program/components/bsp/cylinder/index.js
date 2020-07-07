import {main} from '../../../sein-game/bsp/cylinder';

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
    this.props.onGameCreated(this.game, '基础几何体', '圆柱体');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
