import {main} from '../../../sein-game/material/khr-technique-webgl';

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
    this.props.onGameCreated(this.game, '材质系统', 'KHRTechnique扩展');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
