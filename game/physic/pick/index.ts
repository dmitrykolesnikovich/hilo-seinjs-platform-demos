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

    world.enablePhysic(new Sein.CannonPhysicWorld(
      CANNON,
      new Sein.Vector3(0, -9.81, 0)
    ));

    const box = world.addActor('box', Sein.BSPBoxActor, {
      width: 1, height: 1, depth: 1,
      material: new Sein.BasicMaterial({
        diffuse: config.theme,
        lightType: 'PHONG'
      })
    });
    box.transform.setPosition(-2, 0, 0);
    box.addComponent('rigidBody', Sein.RigidBodyComponent, {mass: 0});
    box.addComponent('collider', Sein.BoxColliderComponent, {size: [1, 1, 1]});
    box.rigidBody.event.add('Pick', args => alert('pick box'));

    const sphere = world.addActor('box', Sein.BSPSphereActor, {
      radius: .5, widthSegments: 32,
      material: new Sein.BasicMaterial({
        diffuse: config.theme,
        lightType: 'PHONG'
      })
    });
    box.transform.setPosition(2, 0, 0);
    sphere.addComponent('rigidBody', Sein.RigidBodyComponent, {mass: 0});
    sphere.addComponent('collider', Sein.SphereColliderComponent, {radius: .5});
    sphere.rigidBody.event.add('Pick', args => alert('pick sphere'));

    const picker = new Sein.PhysicPicker(game);
    picker.enablePicking();

    createDefaultLights(game);
    createDefaultCamera(game, {target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 10)});
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
        