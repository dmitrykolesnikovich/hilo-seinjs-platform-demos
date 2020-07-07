/**
 * @File   : convertFromSeinExamples.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 7/29/2019, 11:47:41 AM
 * @Description:
 */
const fs = require('fs');
const path = require('path');

const config = require('../../config');

const templates = {};
['acss', 'axml', 'js', 'json'].forEach(ext => {
  const fp = `index.${ext}`;
  const content = fs.readFileSync(path.resolve(__dirname, fp), {encoding: 'utf8'});
  templates[fp] = content;
});

function convert(distRootDir) {
  const distDirPath = path.resolve(distRootDir, 'components');
  const distPagePath = path.resolve(distRootDir, 'page');
  const distSidebarPath = path.resolve(distRootDir, 'sidebar');
  const distPageJson = JSON.parse(fs.readFileSync(path.resolve(distPagePath, 'index.json'), {encoding: 'utf8'}));
  distPageJson.usingComponents = {
    seinjs: '../seinjs/seinjs',
    sidebar: '../sidebar/index'
  };
  let distPageAxml = `  <seinjs onSeinCanvasCreated="onSeinCanvasCreated" />
    <sidebar onSelect="onSelectDemo" current={{current}} />`;
  const distSidebarConfig = [];
  
  config.forEach(category => {
    const {id: cID, name: cName, list, only} = category;
    const cPath = path.resolve(distDirPath, cID);
  
    if (!fs.existsSync(cPath) && list.length > 0) {
      fs.mkdirSync(cPath);
    }
  
    if (only && only.indexOf('my-tiny-program') < 0) {
      return;
    }
  
    const current = {id: cID, name: cName, list: []};
    if (list.length > 0) {
      distSidebarConfig.push(current);
    }
  
    list.forEach(({id, name, pathFromHomepage}) => {
      const dPath = path.resolve(cPath, id);
  
      const compName = `${cID}-${id}`;
      distPageJson.usingComponents[compName] = `../components/${cID}/${id}/index`;
      distPageAxml += `\n  <${compName}
      a:if="{{current === '${compName}'}}"
      onGameCreated="onGameCreated"
      onGetCanvas="onGetCanvas"
    />`
      current.list.push({id, name});
  
      if (fs.existsSync(dPath)) {
        console.log(`'${dPath}' is already existed, skip...'`);
        return;
      }
  
      fs.mkdirSync(dPath);
  
      Object.keys(templates).forEach(fp => {
        const fPath = path.resolve(dPath, fp);
        fs.writeFileSync(
          fPath,
          templates[fp].replace('{{CATEGORY_ID}}', category.id)
            .replace('{{CATEGORY_NAME}}', category.name)
            .replace('{{DEMO_ID}}', id)
            .replace('{{DEMO_NAME}}', name)
            .replace('{{CLASS_NAME}}', compName)
        );
      });
    });
  });
  
  fs.writeFileSync(path.resolve(distPagePath, 'index.json'), JSON.stringify(distPageJson, null, 2));
  fs.writeFileSync(path.resolve(distPagePath, 'index.axml'), `<view>
  ${distPageAxml}
  </view>
  `);
  fs.writeFileSync(path.resolve(distSidebarPath, 'config.js'), 'export default ' + JSON.stringify(distSidebarConfig, null, 2) + ';\n');
}

module.exports = {convert};

const distRootDir = path.resolve(__dirname, '../../my-tiny-program');
convert(distRootDir);
