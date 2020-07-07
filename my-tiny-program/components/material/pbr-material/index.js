import {main} from '../../../sein-game/material/pbr-material';

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
    this.props.onGameCreated(this.game, '材质系统', 'PBR材质');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
