/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-gpu-particle-system';

import {createDefaultLights, createDefaultCamera, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    this.getGame().resource.load({type: 'Texture', name: 'point', url: require('../../assets/point.png')});
  }

  public onError(error) {
    throw error;
  }

  public onCreate() {
    console.log('load done');
    const game = this.getGame();
    const world = this.getWorld();

    const particleSystem = world.addActor('particleSystem', Sein.GPUParticleSystem.Actor, {
      emitter: new Sein.GPUParticleSystem.EdgeEmitter({
        point1: new Sein.Vector3(0, 0, 0),
        point2: new Sein.Vector3(4, 4, 4)
      }),
      count: 1000,
      maxLifeTime: 4,
      minLifeTime: 2,
      updateSpeed: .01,
      maxVelocity: 1,
      minVelocity: .5,
      texture: game.resource.get<'Texture'>('point'),
      maxSize: 20,
      minSize: 10,
      maxAcceleration: 0
    });

    createDefaultLights(game);
    createDefaultCamera(game, {target: particleSystem, position: new Sein.Vector3(0, 0, 6)});
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
        