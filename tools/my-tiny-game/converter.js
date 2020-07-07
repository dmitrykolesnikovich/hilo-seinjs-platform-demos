/**
 * @File   : convertFromSeinExamples.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 7/29/2019, 11:47:41 AM
 * @Description:
 */
const fs = require('fs');
const path = require('path');

const config = require('../../config');

const distRootDir = path.resolve(__dirname, '../../my-tiny-game');
const distConfigPath = path.resolve(distRootDir, 'config.js');
const distEntriesPath = path.resolve(distRootDir, 'entries.ts');
const distConfig = [];
let distEntries = `export default {\n`;

config.forEach(category => {
  const {id: cID, name: cName, list, only} = category;

  if (only && only.indexOf('my-tiny-game') < 0) {
    return;
  }

  const current = {id: cID, name: cName, list: []};
  if (list.length > 0) {
    distConfig.push(current);
  }

  list.forEach(({id, name}) => {
    current.list.push({id, name});
    distEntries += `  '${cID}/${id}': require('../game/${cID}/${id}'),\n`
  });
});

distEntries += `};\n`;
fs.writeFileSync(path.resolve(distConfigPath), 'export default ' + JSON.stringify(distConfig, null, 2) + ';\n');
fs.writeFileSync(path.resolve(distEntriesPath), distEntries);
