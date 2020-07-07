/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import * as CANNON from 'cannon-dtysky';

import {createDefaultLights, createDefaultCamera, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    world.enablePhysic(
      new Sein.CannonPhysicWorld(
        CANNON,
        new Sein.Vector3(0, -9.81, 0)
      ),
      true
    );

    const box = world.addActor('box', Sein.BSPBoxActor, {
      width: 1, height: 1, depth: 1,
      material: new Sein.BasicMaterial({
        diffuse: config.theme,
        lightType: 'PHONG'
      })
    });
    box.transform.setPosition(-2, 0, 0);
    box.addComponent('rigidBody', Sein.RigidBodyComponent, {mass: 1, physicStatic: true});
    box.addComponent('collider', Sein.BoxColliderComponent, {size: [1, 1, 1]});
    box.rigidBody.event.add('BodyEnter', args => game.event.trigger('Info', 'BodyEnter'));
    box.rigidBody.event.add('BodyLeave', args => game.event.trigger('Info', 'BodyLeave'));
    box.rigidBody.event.add('ColliderEnter', args => game.event.trigger('Info', 'ColliderEnter'));
    box.rigidBody.event.add('ColliderLeave', args => game.event.trigger('Info', 'ColliderLeave'));
    box.rigidBody.event.add('Collision', args => game.event.trigger('Info', 'Collision'));

    const sphere = world.addActor('sphere', Sein.BSPSphereActor, {
      radius: .5, widthSegments: 32,
      material: new Sein.BasicMaterial({
        diffuse: config.theme,
        lightType: 'PHONG'
      })
    });
    box.transform.setPosition(2, 0, 0);
    sphere.addComponent('rigidBody', Sein.RigidBodyComponent, {mass: 1, physicStatic: true});
    sphere.addComponent('collider', Sein.SphereColliderComponent, {radius: .5});

    createDefaultLights(game);
    createDefaultCamera(game, {target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 10)});
  }

  public onUpdate() {
    const world = this.getWorld();
    const box = Sein.findActorByName(world, 'box');

    box.transform.translate(world.leftVector, .01);
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
        