/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 10/8/2019, 7:33:48 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import entries from './entries';
import {createSidebar} from './sidebar';

let game: Sein.Game;

export async function createGame(canvas: HTMLCanvasElement, cID: string, id: string) {
  if (game) {
    game.destroy();
  }

  game = await entries[`${cID}/${id}`].main(canvas);

  game.onUpdate = () => {
    if (game.resource.loadDone) {
      console.log('create');
      game.onUpdate = () => {}
      createSidebar(game, (c, i) => createGame(canvas, c, i));
    }
  }
}
