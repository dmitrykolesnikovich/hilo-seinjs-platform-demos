/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/19/2019, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-camera-controls';
import 'seinjs-post-processing-system';

import {createDefaultLights, createDefaultCamera, createSein, loadSein, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    loadSein(this.getGame());
  }

  public onCreate() {
    const game = this.getGame();

    createSein(game);
    createDefaultLights(game);
    createDefaultCamera(game);

    const pps = game.addActor('threshold-system', Sein.PostProcessingSystem.Actor);
    pps.addPass({
      name: 'pass1',
      fs: `
        precision mediump float;
        uniform sampler2D u_preMap;
        varying vec2 v_texcoord0;

        void main() {
          vec4 color = texture2D(u_preMap, v_texcoord0);
          float gray = color.r * 0.299 + color.g * 0.587 + color.b * 0.114;
          gl_FragColor = gray > 0.7 ? vec4(1., 1., 1., 1.) : vec4(0., 0., 0., 1.);
        }
      `
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
        