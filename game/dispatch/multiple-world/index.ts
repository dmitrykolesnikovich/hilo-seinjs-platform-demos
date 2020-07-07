/**
 * @File   : main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/2/2018, 3:52:18 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import {config, loadSein, createSein, createDefaultCamera, createDefaultLights} from '../../utils';

class PreScript extends Sein.LevelScriptActor {
  private time: number = 0;

  public onPreload() {
    this.getGame().resource.load({type: 'Texture', name: 'logo.jpg', url: require('../../assets/paradise.jpg')});
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    const logo = world.addActor('logo', Sein.SpriteActor, {
      width: 4, height: 4,
      texture: game.resource.get<'Texture'>('logo.jpg'),
      position: new Sein.Vector3(8, 16, 0)
    });
    // make inheritable
    logo.persistent = true;

    world.addActor('logo2', Sein.SpriteActor, {
      width: 4, height: 4,
      texture: game.resource.get<'Texture'>('logo.jpg'),
      position: new Sein.Vector3(-8, 16, 0)
    });

    const camera = createDefaultCamera(game);
    camera.persistent = true;
  }

  public onUpdate(delta: number) {
    this.time += delta;

    if (this.time >= 1500) {
      this.getGame().switchLevel('main');
    }
  }
}

class MainScript extends Sein.LevelScriptActor {
  private time: number = 0;

  public onPreload() {
    loadSein(this.getGame());
  }

  public onCreate() {
    const game = this.getGame();

    createDefaultLights(game);
    createSein(game);
  }

  public onUpdate(delta: number) {
    const world = this.getWorld();

    const sein = Sein.findActorByName(world, 'Sein');
    sein.onUpdate = () => sein.transform.rotate(sein.transform.upVector, .01);

    if (!world.name.equalsTo('pre')) {
      return;
    }

    this.time += delta;

    if (this.time >= 1500) {
      this.getGame().switchWorld('main');
    }
  }
}

class GameMode1 extends Sein.GameModeActor {
  public onInit() {
    alert('Enter World 1 !');
  }
}

class GameMode2 extends Sein.GameModeActor {
  public onInit() {
    alert('Enter World 2 !');
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

  game.addWorld('pre', GameMode1, PreScript);
  game.addLevel('pre', 'main', MainScript);
  game.addWorld('main', GameMode2, PreScript);
  game.addLevel('main', 'main', MainScript);

  await game.start();

  return game;
}
