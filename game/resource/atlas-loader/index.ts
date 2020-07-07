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

    game.resource.load({type: 'Atlas', name: '22.atlas', url: require('../../assets/sprites/22.atlas')});
    game.resource.load({type: 'Atlas', name: '33.atlas', url: require('../../assets/sprites/33.atlas')});
  }

  public onLoading(state: Sein.IResourceState) {
    console.log(state);
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    createDefaultCamera(game, {position: new Sein.Vector3(0, 0, -2), target: new Sein.Vector3(0, 0, 0)});

    const two = world.addActor('22', Sein.SpriteActor, {
      atlas: game.resource.get<'Atlas'>('22.atlas'),
      frameName: '01',
      width: .9,
      height: 1,
      materialOptions: {
        transparent: true
      }
    });
    two.transform.setPosition(-1, 0, 0);

    const three = world.addActor('33', Sein.SpriteActor, {
      atlas: game.resource.get<'Atlas'>('33.atlas'),
      frameName: '01',
      width: .66,
      height: .9,
      materialOptions: {
        transparent: true
      }
    });
    three.transform.setPosition(1, 0, 0);
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
        