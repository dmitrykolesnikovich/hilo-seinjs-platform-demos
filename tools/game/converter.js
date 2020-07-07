/**
 * @File   : convertFromSeinExamples.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 7/29/2019, 11:47:41 AM
 * @Description:
 */
const fs = require('fs');
const path = require('path');

const config = require('../../config');

const gameDirPath = path.resolve(__dirname, '../../game');

config.forEach(category => {
  const {id: cID, name: cName, list} = category;
  const cPath = path.resolve(gameDirPath, cID);

  if (!fs.existsSync(cPath) && list.length > 0) {
    fs.mkdirSync(cPath);
  }

  list.forEach(({id, name, pathFromHomepage}) => {
    const dPath = path.resolve(cPath, id);

    if (fs.existsSync(dPath)) {
      console.log(`'${dPath}' is already existed, skip...'`);
      return;
    }

    const srcPath = path.resolve(__dirname, '../../', pathFromHomepage);

    if (!fs.existsSync(srcPath)) {
      console.warn(srcPath, 'not existed, skip...');
      return;
    }

    let content = fs.readFileSync(srcPath, {encoding: 'utf8'});
    if (/main\.ts$/.test(srcPath)) {
      content = content.replace('export default function main', 'export async function main')
        .replace(': Sein.Engine', ': Promise<Sein.Game>')
        .replace('game.start()', 'await game.start()')
        .replace('return engine', 'return game')
        .replace('antialias: true', 'pixelRatio: window.devicePixelRatio,\n      antialias: true')
    } else if (/MainScript\.ts$/.test(srcPath)) {
      content = content.replace('export default class MainScript', 'class MainScript')
        .replace(`} from '../../utils';`, `, config} from '../../utils';`)
        + `
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
        `
    }

    content = content.replace(
      /url: '(\S+)'/g,
      `url: require('../..$1')`
    );

    if (!fs.existsSync(dPath)) {
      fs.mkdirSync(dPath);
    }

    fs.writeFileSync(path.resolve(dPath, 'index.ts'), content);
  });
});
