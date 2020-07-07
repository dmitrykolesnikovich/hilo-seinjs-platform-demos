/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import {config, loadSein, createSein, createDefaultCamera, createDefaultLights} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    loadSein(this.getGame());
  }

  public onCreate() {
    const game = this.getGame();

    createDefaultCamera(game);
    createDefaultLights(game);
    createSein(game);

    setTimeout(() => game.switchWorld('end'), 1000);
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

  game.event.register('Info');

  game.addWorld('main', Sein.GameModeActor, MainScript);
  game.addWorld('end', Sein.GameModeActor, Sein.LevelScriptActor);

  game.event.add('Resize', args => game.event.trigger('Info', 'Resize'));
  game.event.add('GameDidInit', args => game.event.trigger('Info', 'GameDidInit'));
  game.event.add('GameDidStart', args => game.event.trigger('Info', 'GameDidStart'));
  game.event.add('GameWillDestroy', args => game.event.trigger('Info', 'GameWillDestroy'));
  game.event.add('WorldDidInit', args => game.event.trigger('Info', 'WorldDidInit'));
  game.event.add('WorldDidCreatePlayers', args => game.event.trigger('Info', 'WorldDidCreatePlayers'));
  game.event.add('WorldWillDestroy', args => game.event.trigger('Info', 'WorldWillDestroy'));
  game.event.add('LevelDidInit', args => game.event.trigger('Info', 'LevelDidInit'));
  game.event.add('LevelWillPreload', args => game.event.trigger('Info', 'LevelWillPreload'));
  game.event.add('LevelIsPreloading', args => game.event.trigger('Info', 'LevelIsPreloading'));
  game.event.add('LevelDidPreload', args => game.event.trigger('Info', 'LevelDidPreload'));
  game.event.add('LevelDidCreateActors', args => game.event.trigger('Info', 'LevelDidCreateActors'));
  game.event.add('LevelWillDestroy', args => game.event.trigger('Info', 'LevelWillDestroy'));

  await game.start();

  return game;
}
