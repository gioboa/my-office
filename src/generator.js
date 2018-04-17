import {modifyPosition} from './utils';

const fornitureIds = {
  desk: 'id:961d4bae-6e62-4007-b50f-8c656fecce14',
  deskChair: 'id:c37f95ef-9d35-40ca-b72b-2fe7d1e4bc4b',
  computer: 'id:b9c3b8b9-fcc5-45dd-bc54-81ff68ae4c2b'
};
let walls;
let fornitures;

const addForniture = (config) => {
  let table = document.createElement('a-entity');
  table.setAttribute('io3d-furniture', config.furnitureId);
  table.setAttribute('position', config.position);
  table.setAttribute('scale', config.scale);
  table.setAttribute('rotation', config.rotation);
  fornitures.appendChild(table);
}

export const createDesk = (scene, config) => {
  if (!fornitures) {
    fornitures = document.createElement('a-entity');
    fornitures.setAttribute('id','#furnitures');
    scene.appendChild(fornitures);
  }
  //table
  addForniture({
    position: modifyPosition(config.position, 4, 0, 0),
    furnitureId: fornitureIds.desk,
    scale: '1.5 1 2',
    rotation: '0 0 0',
  });

  let chairs = [
    { x: 0, y: 2, rotation: '0 -180 0'},
    { x: 2.5, y: 2, rotation: '0 -180 0'},
    { x: 5, y: 2, rotation: '0 -180 0'},
    { x: 7.5, y: 2, rotation: '0 -180 0'},
    { x: 0, y: -2, rotation: '0 0 0'},
    { x: 2.5, y: -2, rotation: '0 0 0'},
    { x: 5, y: -2, rotation: '0 0 0'},
    { x: 7.5, y: -2, rotation: '0 0 0'},
  ];
  for (let chair of chairs) {
    addForniture({
      position: modifyPosition(config.position, chair.x, chair.y, 0),
      furnitureId: fornitureIds.deskChair,
      scale: '1 1.5 1',
      rotation: chair.rotation,
    });
  }

  let computers = [
    { x: 0, y: 0.5, rotation: '0 -180 0'},
    { x: 2.5, y: 0.5, rotation: '0 -180 0'},
    { x: 5, y: 0.5, rotation: '0 -180 0'},
    { x: 7.5, y: 0.5, rotation: '0 -180 0'},
    { x: 0, y: -0.5, rotation: '0 0 0'},
    { x: 2.5, y: -0.5, rotation: '0 0 0'},
    { x: 5, y: -0.5, rotation: '0 0 0'},
    { x: 7.5, y: -0.5, rotation: '0 0 0'},
  ];
  for (let computer of computers) {
    addForniture({
      position: modifyPosition(config.position, computer.x, computer.y, 1),
      furnitureId: fornitureIds.computer,
      scale: '1 1 1',
      rotation: computer.rotation,
    });
  }
}

export const createWall = (scene, config) => {
  if (!walls) {
    walls = document.createElement('a-entity');
    walls.setAttribute('id','#walls');
    scene.appendChild(walls);
  }
  let wall = document.createElement('a-box');
  walls.appendChild(wall);
  wall.setAttribute('height', config.height);
  wall.setAttribute('width', config.width);
  wall.setAttribute('geometry', `depth:${config.depth}`);
  wall.setAttribute('position', config.position);
  wall.setAttribute('color', config.color);
  wall.setAttribute('material', config.material);
  wall.setAttribute('static-body', 'sphereRadius:NaN');
}
