/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultCamera, createDefaultLights, config} from '../../utils';
import * as EnhancedPBR  from 'seinjs-materials/EnhancedPBR';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    const game = this.getGame();

    game.resource.load({type: 'GlTF', name: 'mineral-water.gltf', url: require('../../assets/models/mineral-water/scene.gltf')});
  }

  public onCreate() {
    const game = this.getGame();
    game.renderer.clearColor.set(.8, .8, .8, 1);

    this.getWorld().addActor('dirLight', Sein.DirectionalLightActor, {
      direction: new Sein.Vector3(0, -1, -1),
      amount: 10
    });
    this.getWorld().addActor('dirLight2', Sein.DirectionalLightActor, {
      direction: new Sein.Vector3(0, 1, 1),
      amount: 10
    });
    createDefaultCamera(game, {target: new Sein.Vector3(0, .5, 0), position: new Sein.Vector3(0, .5, 1.8)});

    game.addActor('CustomRenderSystem', EnhancedPBR.RenderSystemActor, {textureScale: 1});

    game.resource.instantiate<'GlTF'>('mineral-water.gltf').get<Sein.StaticMeshActor>(0);
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
        