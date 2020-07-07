/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultLights, createDefaultCamera, createSein, loadSein, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    loadSein(this.getGame());
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    createSein(game);
    createDefaultLights(game);
    createDefaultCamera(game);

    const sein = Sein.findActorByName(world, 'Sein');
    const animator = sein.addComponent<Sein.AnimatorComponent<{to: number}>>('animator', Sein.AnimatorComponent);
    animator.register('anim0', new Sein.TweenAnimation({create: onComplete => Sein.Tween.to(
      sein.transform.rotation,
      {y: Math.PI},
      {onComplete, duration: 1000}
    ) as Sein.Tween}));
    animator.register('anim1', new Sein.TweenAnimation({create: onComplete => Sein.Tween.to(
      sein.transform.position,
      {y: 3},
      {onComplete, duration: 1000}
    ) as Sein.Tween}));
    animator.register('anim2', new Sein.TweenAnimation({create: onComplete => Sein.Tween.to(
      sein.transform.rotation,
      {y: Math.PI * 2},
      {onComplete, duration: 1000}
    ) as Sein.Tween}));
    animator.register('anim3', new Sein.TweenAnimation({create: onComplete => Sein.Tween.to(
      sein.transform.position,
      {y: 0},
      {onComplete, duration: 1000}
    ) as Sein.Tween}));

    animator.addTransition('anim0', 'anim1', params => params.to === 1);
    animator.addTransition('anim0', 'anim2', params => params.to === 2);
    animator.addTransition('anim0', 'anim3', params => params.to === 3);
    animator.setParameter('to', 2);

    sein.animator.play('anim0');
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
        