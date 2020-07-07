/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultLights, createDefaultCamera, createSein, loadSein, config} from '../../utils';

interface ICustomAnimationState extends Sein.IAnimationState {
  speed: number;
}

@Sein.SClass({className: 'CustomAnimation'})
class CustomAnimation extends Sein.Animation<ICustomAnimationState> {
  protected _speed: number = 1;
  protected _current: number = 0;
  protected _loop: number = 0;

  public onInit({speed}: ICustomAnimationState) {
    this._speed = speed;
  }

  public onPlay(currentLoop: number) {
    this._current = 0;
    this._loop = currentLoop;
  }

  public onUpdate(delta: number) {
    if (this.paused) {
      return;
    }

    this.actor.transform.rotationY += this._speed * .1 * (this._loop % 2 ? 1 : -1);

    this._current += delta;

    if (this._current >= 1000) {
      this.stop();
    }
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
    sein.addComponent('animator', Sein.AnimatorComponent);
    sein.animator.register('custom', new CustomAnimation({speed: 2}));
    sein.animator.play('custom', 20);
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
        