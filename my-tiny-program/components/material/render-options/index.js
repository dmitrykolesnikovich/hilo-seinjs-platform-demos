import {main} from '../../../sein-game/material/render-options';

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
    this.props.onGameCreated(this.game, '材质系统', '修改渲染配置');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
