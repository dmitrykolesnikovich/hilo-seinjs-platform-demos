/**
 * @File   : GameState.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : Wed Jul 24 2019
 * @Description: GameState.
 */
import * as Sein from 'seinjs';

export default class GameState extends Sein.StateActor {
  public floatingSpeedFactor: number = 0;

  public changeFloatingSpeed() {
    this.floatingSpeedFactor = Math.random();
  }
}
