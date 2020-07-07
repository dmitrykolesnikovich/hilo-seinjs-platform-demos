/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-camera-controls';

import {loadSein, createSein, createDefaultLights, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    loadSein(this.getGame());
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    const camera = world.addActor('camera', Sein.PerspectiveCameraActor, {
      aspect: game.screenAspect,
      fov: 60,
      near: 0.01,
      far: 100
    });
    camera.transform.y = 10;
    camera.transform.z = -20;
    camera.transform.lookAt(new Sein.Vector3(0, 10, 0));

    createDefaultLights(game);
    createSein(game);

    Sein.findActorByName(world, 'Sein').addComponent('control', Sein.CameraControls.ActorObserveControlComponent, {
      isLockY: true,
      enableDamping: true,
      dampingFactor: .2,
      zoomMax: 5,
      zoomMin: .5
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
        