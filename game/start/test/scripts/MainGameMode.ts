/**
 * @File   : MainGameMode.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : Wed Jul 24 2019
 * @Description: MainGameMode.
 */
import * as Sein from 'seinjs';
import * as CANNON from 'cannon-dtysky';

import GameState from '../states/GameState';

export default class MainGameMode extends Sein.GameModeActor {
  private delta: number;

  public onError(error: Error) {
    console.log(error);

    return true;
  }
  public onAdd() {
    this.getWorld().enablePhysic(new Sein.CannonPhysicWorld(
      CANNON,
      new Sein.Vector3(0, -9.81, 0)
    ));

    this.delta = 0;
  }

  public onUpdate(delta: number) {
    this.delta += delta;

    if (this.delta > 2000) {
      this.getGame<GameState>().state.changeFloatingSpeed();
      this.delta = 0;
    }
  }
}
