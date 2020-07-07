/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-camera-controls';

import {createDefaultLights, createDefaultCamera, createSein, loadSein, config} from '../../utils';

class TimerTrigger extends Sein.EventTrigger<{times: number}> {
  private times: number = 0;
  private active: boolean = false;

  public onBegin() {
    this.active = true;
    setTimeout(this.handleTrigger, 1000);
  }

  private handleTrigger = () => {
    if (!this.active) {
      return;
    }

    this.times += 1;
    this.trigger({times: this.times});

    setTimeout(this.handleTrigger, 1000) as any;
  }

  public onPause() {
    this.active = false;
  }
}

@Sein.SClass({className: 'CustomComponent'})
class CustomComponent extends Sein.Component {
  get event() {
    return this._event as Sein.EventManager<{
      timer: {times: number}
    }>;
  };

  public onInit() {
    this._event.register('timer', TimerTrigger);
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
    sein.emitComponentsDestroy = true;
    sein.addComponent('custom', CustomComponent).event.add('timer', args => game.event.trigger('Info', JSON.stringify(args)));
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
        