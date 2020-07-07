/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-debug-tools';
import 'seinjs-dom-hud';

import {createDefaultCamera, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    const game = this.getGame();

    // game.resource.load({type: 'CubeTexture', name: 'snow.jpg', url: '', images: {
    //   left: require('../../assets/skybox/snow/left.jpg'),
    //   right: require('../../assets/skybox/snow/right.jpg'),
    //   top: require('../../assets/skybox/snow/top.jpg'),
    //   bottom: require('../../assets/skybox/snow/bottom.jpg'),
    //   front: require('../../assets/skybox/snow/front.jpg'),
    //   back: require('../../assets/skybox/snow/back.jpg')
    // }});
    game.resource.load({type: 'CubeTexture', name: 'snow.jpg', url: '', images: {
      left: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*h3VgSoCE5uQAAAAAAAAAAABkARQnAQ',
      right: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*sBswT6-ZC1AAAAAAAAAAAABkARQnAQ',
      top: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*6WXnRLdyCJkAAAAAAAAAAABkARQnAQ',
      bottom: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*hhmUSYdkhdgAAAAAAAAAAABkARQnAQ',
      front: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*Rn5GQa9aOccAAAAAAAAAAABkARQnAQ',
      back: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*XLVsRoMbiUUAAAAAAAAAAABkARQnAQ'
    }});
  }

  public onLoading(state: Sein.IResourceState) {
    console.log(state);
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    createDefaultCamera(game, {position: new Sein.Vector3(0, 0, .1), target: new Sein.Vector3(0, 0, 0)});

    world.addActor('plane', Sein.BSPBoxActor, {width: 2, height: 2, depth: 2, material: new Sein.BasicMaterial({
      diffuse: game.resource.get<'CubeTexture'>('snow.jpg'),
      lightType: 'NONE',
      side: Sein.Constants.FRONT_AND_BACK
    })});
  }
}

export async function main(canvas: HTMLCanvasElement): Promise<Sein.Game> {
  const engine = new Sein.Engine();

  const game = new Sein.Game(
    'intro-game',
    {
      canvas,
      clearColor: config.background,
      width: canvas.offsetWidth,
      height: canvas.offsetHeight,
      pixelRatio: window.devicePixelRatio,
      antialias: true
    }
  );

  engine.addGame(game);

  game.addWorld('main', Sein.GameModeActor, MainScript);

  await game.start();

  return game;
}               
        