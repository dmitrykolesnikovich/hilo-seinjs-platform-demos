import {main} from '../../../sein-game/core/scene-component-compose';

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
    this.props.onGameCreated(this.game, '核心基础', '场景组件组合');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
