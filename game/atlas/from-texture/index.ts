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

    game.resource.load({type: 'Texture', name: 'black-hole.png', url: require('../../assets/sprites/black-hole.png')});
  }

  public onLoading(state: Sein.IResourceState) {
    console.log(state);
  }

  public onError  (error) {
    throw error;
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    createDefaultCamera(game, {position: new Sein.Vector3(0, 0, -2), target: new Sein.Vector3(0, 0, 0)});

    const atlas = Sein.AtlasManager.CREATE_FROM_TEXTURE(game.resource.get<'Texture'>('black-hole.png'), {
      cellWidth: 128,
      cellHeight: 128,
      framesPerLine: 7,
      frameStart: 0,
      frameCount: 47,
      spacing: 10
    });

    [0, 24, 33].forEach((i, index) => {
      world.addActor('blackHole1', Sein.SpriteActor, {
        atlas,
        width: .5,
        height: .5,
        frameName: `${i}`,
        materialOptions: {
          transparent: true
        },
        position: new Sein.Vector3(index - 1, 0, 0)
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
        