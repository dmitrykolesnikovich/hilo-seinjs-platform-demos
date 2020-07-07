import './sein-game/seinjs-adapter.js';
import './sein-game/seinjs';
import './sein-game/common';
import {createGame} from './sein-game/index'

const canvas = window.initCanvas(window);

createGame(canvas, 'start', 'start');