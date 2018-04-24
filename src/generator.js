import {modifyPosition, WALL_HEIGHT, WALL_WIDTH, WALL_DEPTH} from './utils';

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

export const createDoor = (scene, config) => {
  let door = document.createElement('a-entity');
  
  let over = document.createElement('a-box');
  over.setAttribute('height', 1);
  over.setAttribute('width', WALL_WIDTH);
  over.setAttribute('geometry', `depth:${WALL_DEPTH}`);
  over.setAttribute('position', modifyPosition(config.position, 0, 0, 3.5));
  over.setAttribute('color', '#FFF');
  over.setAttribute('material', config.material);
  over.setAttribute('static-body', 'sphereRadius:NaN');
  door.appendChild(over);
  let left = document.createElement('a-box');
  left.setAttribute('height', WALL_HEIGHT-2);
  left.setAttribute('width', 0.10);
  left.setAttribute('geometry', `depth:${WALL_DEPTH}`);
  left.setAttribute('position', config.rotation === '0' ? modifyPosition(config.position, -1, 0, 1.5) : modifyPosition(config.position, 0, -1, 1.5));
  left.setAttribute('rotation', config.rotation === '0' ? '0 0 0' : '0 90 0');
  left.setAttribute('color', '#000');
  left.setAttribute('static-body', 'sphereRadius:NaN');
  door.appendChild(left);
  let right = document.createElement('a-box');
  right.setAttribute('height', WALL_HEIGHT-2);
  right.setAttribute('width', 0.10);
  right.setAttribute('geometry', `depth:${WALL_DEPTH}`);
  right.setAttribute('position', config.rotation === '0' ? modifyPosition(config.position, 1, 0, 1.5) : modifyPosition(config.position, 0, 1, 1.5));
  right.setAttribute('rotation', config.rotation === '0' ? '0 0 0' : '0 90 0');
  right.setAttribute('color', '#000');
  right.setAttribute('static-body', 'sphereRadius:NaN');
  door.appendChild(right);
  let top = document.createElement('a-box');
  top.setAttribute('height', 0.10);
  top.setAttribute('width', WALL_WIDTH);
  top.setAttribute('geometry', `depth:${WALL_DEPTH}`);
  top.setAttribute('position', modifyPosition(config.position, 0, 0, 3));
  top.setAttribute('color', '#000');
  top.setAttribute('static-body', 'sphereRadius:NaN');
  door.appendChild(top);

  scene.appendChild(door);
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
