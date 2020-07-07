/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultLights, createDefaultCamera, config} from '../../utils';

const GLOBAL_SATURATION = {value: 1, isGlobal: true};
const GLOBAL_TIME = {value: 0, isGlobal: true};

class CustomShaderMaterial extends Sein.RawShaderMaterial {
  constructor(initHue: number) {
    super({
      defines: `
    precision mediump float;
    `,
      attributes: {
        a_position: 'POSITION'
      },
      uniforms: {
        u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
        u_initHue: {value: initHue},
        u_time: GLOBAL_TIME,
        u_saturation: GLOBAL_SATURATION
      },
      vs: {
        header: `
    attribute vec3 a_position;
    uniform mat4 u_modelViewProjectionMatrix;
        `,
        main: `
    void main() {    
      gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);
    }
        `
      },
      fs: `
    uniform float u_time;
    uniform float u_initHue;
    uniform float u_saturation;

    vec3 hsv2rgb(float h, float s, float v) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(vec3(h, h, h) + K.xyz) * 6.0 - K.www);
      return v * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), s);
    }
    
    void main() {
      gl_FragColor = vec4(hsv2rgb(sin(u_initHue + u_time) * 0.5 + 1., sin(u_saturation) * 0.5 + 1., 1.), 1.);
    }
      `
    });
  }
}

class MainScript extends Sein.LevelScriptActor {
  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    world.addActor('box', Sein.BSPBoxActor, {
      width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(0)
    }).transform.setPosition(-1, -1, 0);
    world.addActor('box', Sein.BSPBoxActor, {
      width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.3)
    }).transform.setPosition(-1, 1, 0);
    world.addActor('box', Sein.BSPBoxActor, {
      width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.6)
    }).transform.setPosition(1, -1, 0);
    world.addActor('box', Sein.BSPBoxActor, {
      width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.9)
    }).transform.setPosition(1, 1, 0);

    createDefaultLights(game);
    createDefaultCamera(game, {position: new Sein.Vector3(0, 0, 4), target: new Sein.Vector3(0, 0, 0)});
  }

  public onUpdate() {
    GLOBAL_TIME.value += .01;
    GLOBAL_SATURATION.value += .02;
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
        