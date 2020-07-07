/**
 * @File   : index.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 2019/8/15 上午11:06:59
 * @Description:
 */
const IDS = {id: 0};

Component({
  data: {
    id: `tiny-program-hud-${IDS.id++}`,
    x: 0,
    y: 0,
    zIndex: 0,
    visible: false,
    size: {
      width: 0,
      height: 0
    }
  },
  props: {
    onGetGame: () => null,
    onGetLinkedObject: () => null
  },
  didMount() {
    const game = this.props.onGetGame();
    const system = my.Sein.findActorByClassName(game, 'TinyProgramHUDSystemActor');
    system.addHUD({
      getLinkedObject: () => this.props.onGetLinkedObject(),
      getSize: () => this.data.size,
      updateVisible: visible => {
        this.setData({visible});
      },
      updateXYZ: (x, y, z) => {
        this.setData({x, y});
      }
    });

    const {id} = this.data;
    my.createSelectorQuery().select(`#${id}`).boundingClientRect().exec(ret => {
      this.setData({size: {width: ret[0].width, height: ret[0].height}});
    });
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
