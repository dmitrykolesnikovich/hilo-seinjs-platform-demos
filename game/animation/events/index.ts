/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultLights, createDefaultCamera, createSein, loadSein, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    loadSein(this.getGame());
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    createSein(game);
    createDefaultLights(game);
    createDefaultCamera(game);

    const sphere1 = Sein.findActorByName(world, 'Sphere1');
    sphere1.animator.event.add('Start', args => console.log('Start', args));
    sphere1.animator.event.add('Pause', args => console.log('Pause', args));
    sphere1.animator.event.add('Resume', args => console.log('Resume', args));
    sphere1.animator.event.add('Loop', args => console.log('Loop', args));
    sphere1.animator.event.add('End', args => console.log('End', args));

    sphere1.animator.play('Animation1', 10);
    setTimeout(
      () => {
        sphere1.animator.pause();
        sphere1.animator.resume();
      },
      300
    );
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
        