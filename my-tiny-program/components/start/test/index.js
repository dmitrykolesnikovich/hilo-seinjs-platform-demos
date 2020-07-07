/**
 * @File   : index.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 2019/7/25 上午11:06:59
 * @Description:
 */
import {main} from '../../../sein-game/start';

Component({
  data: {},
  props: {
    canvas: null,
    onGameCreated: () => {}
  },
  game: null,
  async didMount() {
    this.game = await main(this.props.canvas);
    this.props.onGameCreated(this.game, 'core', 'start');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
