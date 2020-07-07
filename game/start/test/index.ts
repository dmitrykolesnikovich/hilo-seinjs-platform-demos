/**
 * @File   : main.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : Wed Jul 24 2019
 * @Description: Component.
 */
import * as Sein from 'seinjs';

import GameState from './states/GameState';
import MainGameMode from './scripts/MainGameMode';
import MainLevelScript from './scripts/MainLevelScript';

export async function main(canvas: HTMLCanvasElement): Promise<Sein.Game> {
  const engine = new Sein.Engine();

  const game = new Sein.Game(
    'intro-game',
    {
      canvas,
      clearColor: new Sein.Color(0, .6, .9, 1),
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: window.devicePixelRatio,
      antialias: true
    },
    GameState
  );

  engine.addGame(game);

  game.addWorld('main', MainGameMode, MainLevelScript);

  await game.start();

  return game;
}
