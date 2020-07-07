/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-camera-controls';

import {createDefaultLights, createDefaultCamera, createSein, loadSein, config} from '../../utils';

class CustomComponent extends Sein.Component {
  get event() {
    return this._event as Sein.EventManager<{test: {info: string}}>;
  };

  public onInit() {
    this._event.register('test');
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

    // proxy to root component
    sein.event.add('test', args => game.event.trigger('Info', JSON.stringify(args)));
    sein.event.trigger('test', {info: 'Actor'});

    const component = sein.addComponent('custom', CustomComponent);
    component.event.add('test', args => game.event.trigger('Info', JSON.stringify(args)));
    component.event.trigger('test', {info: 'Component'});

    // throw error
    sein.event.unregister('test');
    sein.event.trigger('test', {info: 'haha'});
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
        