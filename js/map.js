let playerPosition = "25.43 18 45.96";
const playerRotation = "-26.81 27.61 0";
const map = {
  "data": [
    'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', 'D', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W',
    'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',
    'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', ' ', 'T', ' ', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',
    'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', 'W', 'W', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',
    'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W',
    'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', 'W', 'W', 'W', ' ', ' ',
    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ',
    'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ',
    'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', ' ', ' ',
  ],
  "xAxis": 46,
  "yAxis": 46
}

const WALL_WIDTH = 2;
const WALL_HEIGHT = 3;
const WALL_HEIGHT_SMALL = 1.5;
const WALL_DEPTH = 2;
const scene = document.querySelector('a-scene');
let walls;

if (scene.hasLoaded) {
  createScene();
} else {
  scene.addEventListener('loaded', createScene);
}

function createScene() {
  for (var x = 0; x < map.xAxis; x++) {
    for (var y = 0; y < map.yAxis; y++) {
      const i = (y * map.yAxis) + x;
      if (!!map.data[i]) {
        createObject(map.data[i], x, y);
      }
    }
  }
  document.querySelector('#player').setAttribute('position', `${playerPosition}`);
  document.querySelector('#player').setAttribute('rotation', `${playerRotation}`);
}

function getPosition(x, y, z) {
  return `${((x - (map.yAxis / 2)) * WALL_WIDTH)} ${z} ${(y - (map.xAxis / 2)) * WALL_WIDTH}`;
}

function createObject(type, x, y) {
  if (!type) return;
  let create = true;
  let position;
  let height;
  let material;
  
  switch (type) {
    // wall
    case 'W': {
      createWall({
        height: WALL_HEIGHT,
        width: WALL_WIDTH,
        depth: WALL_DEPTH,
        color: '#fff',
        position: getPosition(x, y, 1.5),
        material: 'src: #wall-brick; repeat: 4 4',
      })
      break;
    }
    // transparent wall
    case 'T': {
      createWall({
        height: WALL_HEIGHT,
        width: WALL_WIDTH,
        depth: WALL_DEPTH,
        color: '#fff',
        position: getPosition(x, y, 1.5),
        material: 'opacity: 0.8;src: #wall-transparent; repeat: 4 4',
      })
      break;
    }
    // desk
    case 'D': {
      createDesk({
        height: WALL_HEIGHT,
        width: WALL_WIDTH,
        depth: WALL_DEPTH,
        color: '#fff',
        position: getPosition(x, y, 1.5),
        material: 'opacity: 0.8;src: #Wall-transparent; repeat: 4 4',
      })
      break;
    }   
    case 'V': playerPosition = getPosition(x, y, 18);
    default: create = false;
  }  
}

function createWall(config) {
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

function createDesk(config) {
  let desk = document.createElement('a-entity');
  scene.appendChild(desk);
  let table = document.createElement('a-entity');
  table.setAttribute('io3d-furniture', 'id:961d4bae-6e62-4007-b50f-8c656fecce14');
  table.setAttribute('position', config.position);
  table.setAttribute('scale', '1.5 1 2');
  desk.appendChild(table);
}