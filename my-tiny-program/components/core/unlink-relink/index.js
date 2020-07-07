import {main} from '../../../sein-game/core/unlink-relink';

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
    this.props.onGameCreated(this.game, '核心基础', 'UnLink与ReLink');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
