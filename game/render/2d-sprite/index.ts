/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultCamera, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    const game = this.getGame();

    game.resource.load({type: 'Texture', name: 'sprite.jpg', url: require('../../assets/paradise.jpg')});
    game.resource.load({type: 'Atlas', name: '22.atlas', url: require('../../assets/sprites/22.atlas')});
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    world.addActor('sprite', Sein.SpriteActor, {
      width: 1, height: 1,
      texture: game.resource.get<'Texture'>('sprite.jpg'),
      position: new Sein.Vector3(-2, 0, 0)
    });

    const atlas = Sein.AtlasManager.CREATE_FROM_TEXTURE(game.resource.get<'Texture'>('sprite.jpg'), {
      cellWidth: 500,
      cellHeight: 500,
      framesPerLine: 1
    });
    world.addActor('sprite2', Sein.SpriteActor, {
      width: 1, height: 1,
      atlas,
      frameName: '0',
      position: new Sein.Vector3(2, 0, 0)
    });

    world.addActor('22', Sein.SpriteActor, {
      width: 1.8, height: 2,
      atlas: game.resource.get<'Atlas'>('22.atlas'),
      frameName: '01',
      position: new Sein.Vector3(0, 0, 0),
      materialOptions: {transparent: true},
      isBillboard: true
    });

    createDefaultCamera(game, {target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, -6)});
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
        