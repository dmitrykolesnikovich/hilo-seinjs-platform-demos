import {main} from '../../../sein-game/animation/combination';

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
    this.props.onGameCreated(this.game, '动画系统', '动画组合');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
