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
    this.getGame().resource.load({type: 'GlTF', name: 'soda.gltf', url: require('../../assets/models/soda/scene.gltf')});
  }

  public onCreate() {
    const game = this.getGame();

    createDefaultCamera(game, {target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 3, 3)});
    this.getWorld().addActor('amLight', Sein.AmbientLightActor, {
      amount: .1
    });
    // this.getWorld().addActor('dirLight', Sein.DirectionalLightActor, {
    //   direction: new Sein.Vector3(0, -1, -1),
    //   amount: 10
    // });
    // this.getWorld().addActor('pointLight', Sein.PointLightActor, {
    //   position: new Sein.Vector3(0, 0, 2),
    //   range: 3,
    //   amount: 300
    // });
    // this.getWorld().addActor('spotLight', Sein.SpotLightActor, {
    //   position: new Sein.Vector3(0, 0, 2),
    //   direction: new Sein.Vector3(0, 0, -1),
    //   range: 1.5,
    //   amount: 10,
    //   cutoff: 40,
    //   outerCutoff: 45
    // });

    const actor = game.resource.instantiate<'GlTF'>('soda.gltf').get<Sein.StaticMeshActor>(0);
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
        