/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultCamera, createDefaultLights, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onCreate() {
    const game = this.getGame();

    createDefaultCamera(game, {target: new Sein.Vector3(0, 1, 0), position: new Sein.Vector3(0, 1, 5)});
    createDefaultLights(game);
    game.resource.load({type: 'GlTF', name: 'bird.glb', url: require('../../assets/models/bird/bird.glb')})
      .then(result => {
        console.log(result);
        game.resource.instantiate<'GlTF'>('bird.glb').forEach(actor => {
          if (actor.animator) {
            actor.animator.play(null, Infinity);
          }
        });
      });
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
        