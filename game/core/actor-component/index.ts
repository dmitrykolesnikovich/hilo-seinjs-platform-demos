/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-camera-controls';

import {createDefaultLights, createDefaultCamera, createSein, loadSein, config} from '../../utils';

interface IRotateActorComponentState {
  speed: number;
}

@Sein.SClass({className: 'RotateActorComponent'})
class RotateActorComponent extends Sein.Component<IRotateActorComponentState> {
  private speed: number;

  public onInit(initState: IRotateActorComponentState) {
    this.speed = initState.speed;
  }

  public onUpdate(delta: number) {
    // Get root component
    const root = this.getRoot<Sein.SceneComponent>();
    root.rotate(root.upVector, delta * this.speed / 500);
  }
}

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

    const sein = Sein.findActorByName(world, 'Sein');
    console.log(sein);
    sein.addComponent('rotate', RotateActorComponent, {speed: 2});

    console.log(sein.findComponentByName('rotate'));
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
        