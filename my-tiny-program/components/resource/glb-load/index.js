import {main} from '../../../sein-game/resource/glb-load';

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
    this.props.onGameCreated(this.game, '资源管理', 'GLB模型加载');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
