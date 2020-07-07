/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 9/17/2019, 8:05:17 PM
 * @Description:
 */
import {createGame} from '../my-tiny-game';
const canvas = document.getElementById('container') as HTMLCanvasElement;

createGame(canvas, 'start', 'start');
