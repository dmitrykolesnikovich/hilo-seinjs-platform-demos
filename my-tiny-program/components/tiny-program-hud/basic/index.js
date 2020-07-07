import {main} from '../../../sein-game/tiny-program-hud/basic';

Component({
  data: {
    inited: false
  },
  props: {
    onGetCanvas: () => null,
    onGameCreated: () => {}
  },
  game: null,
  linedObj1: null,
  linedObj2: null,
  async didMount() {
    const canvas = this.props.onGetCanvas();
    this.game = await main(canvas);

    this.game.event.add('LevelDidCreateActors', () => {
      this.linedObj1 = my.Sein.findActorByName(this.game.world, 'Sphere');
      this.linedObj2 = my.Sein.findActorByName(this.game.world, 'Sphere2');
      this.setData({inited: true});
    });

    this.props.onGameCreated(this.game, '小程序HUD', '基础');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onGetGame() {
      return this.game;
    },
    onGetLinkedObject1() {
      return this.linedObj1;
    },
    onGetLinkedObject2() {
      return this.linedObj2;
    }
  }
});
