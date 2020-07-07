/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-debug-tools';
import 'seinjs-dom-hud';
import * as CANNON from 'cannon-dtysky';

import {createDefaultCamera, createDefaultLights, config} from '../../utils';

@Sein.SClass({className: 'ShipActor'})
class ShipActor extends Sein.StaticMeshActor {
  private paddle: Sein.StaticMeshComponent;
  private duration: number = 0;

  public onInstantiate() {
    this.paddle = this.findComponentByName('ship_paddle');
  }

  public onUpdate(delta: number) {
    if (this.paddle) {
      this.paddle.rotationZ += .03;
    }

    this.duration += delta;
    this.transform.y += Math.sin(this.duration / 500) * .05;
  }
}

class MainScript extends Sein.LevelScriptActor {
  private hud: Sein.DomHUD.Actor;

  public onPreload() {
    const game = this.getGame();

    game.resource.load({type: 'GlTF', name: 'building.gltf', url: require('../../assets/models/building/task_building_6.gltf')});
    game.resource.load({type: 'GlTF', name: 'ship.gltf', url: require('../../assets/models/ship/ship.gltf')});
  }

  public onLoading(state: Sein.IResourceState) {
    console.log(state);
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    createDefaultCamera(game, {position: new Sein.Vector3(0, 7, -16), target: new Sein.Vector3(0, 7, 0)});
    createDefaultLights(game);

    world.enablePhysic(new Sein.CannonPhysicWorld(
      CANNON,
      new Sein.Vector3(0, -0.98, 0))
    );

    game.resource.instantiate<'GlTF'>('building.gltf');
    const ship = game.resource.instantiate<'GlTF'>('ship.gltf').get<Sein.StaticMeshActor>(0);
    ship.transform.setPosition(-8, 5, 0).rotationY = Math.PI / 2;
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
        