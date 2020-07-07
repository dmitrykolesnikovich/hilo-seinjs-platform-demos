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
    this.getGame().resource.load({type: 'Atlas', name: 'particles', url: require('../../assets/sprites/particles.atlas')});
  }

  public onError(error) {
    throw error;
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    const particleSystem = world.addActor('particleSystem', Sein.GPUParticleSystem.Actor, {
      emitter: new Sein.GPUParticleSystem.EdgeEmitter({
        point1: new Sein.Vector3(-1, -1, -1),
        point2: new Sein.Vector3(1, 1, 1)
      }),
      count: 1000,
      maxLifeTime: 4,
      minLifeTime: 2,
      updateSpeed: .01,
      maxVelocity: 1,
      minVelocity: .5,
      atlas: game.resource.get<'Atlas'>('particles'),
      frames: ['star', 'snow', 'flower', 'flower1'],
      maxSize: 20,
      minSize: 10,
      maxAcceleration: 0,
      bornColor1: new Sein.Color(.2, .2, .2, 1),
      bornColor2: new Sein.Color(1, 1, 1, 1),
      dieColor1: new Sein.Color(.2, .2, .2, 0),
      dieColor2: new Sein.Color(1, 1, 1, 0)
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
        