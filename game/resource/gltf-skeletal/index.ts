/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultCamera, createDefaultLights, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  private pig: Sein.SkeletalMeshActor;
  private animations: string[] = [];

  public onPreload() {
    const game = this.getGame();

    game.resource.load({type: 'GlTF', name: 'pig.gltf', url: require('../../assets/models/pig/fairy_pig.gltf')});
  }

  public onLoading(state: Sein.IResourceState) {
    console.log(state);
  }

  public onCreate() {
    const game = this.getGame();

    createDefaultCamera(game, {position: new Sein.Vector3(0, 1, -4), target: new Sein.Vector3(0, 1, 0)});
    createDefaultLights(game);

    this.pig = game.resource.instantiate<'GlTF'>('pig.gltf').get(0);
    this.animations = this.pig.animator.animationNames;

    this.pig.animator.event.add('End', this.playNext);
    this.playNext();
  }

  private playNext = () => {
    const {animator} = this.pig;

    let index = this.animations.indexOf(animator.current) + 1;

    if (index >= this.animations.length) {
      index = 0;
    }

    animator.play(this.animations[index]);
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
        