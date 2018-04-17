const playerPosition = "-38.557591268482845 22.549 -54.14166883438441";
const playerRotation = "-66.05036416353157 -129.48846169956641 0";
const map = window.officeMap;
const WALL_WIDTH = 2;
const WALL_HEIGHT = 3;
const WALL_HEIGHT_SMALL = 1.5;
const WALL_DEPTH = 2;

const scene = document.querySelector('a-scene');
let walls;

function createScene() {
  for (var x = 0; x < map.yAxis; x++) {
    for (var y = 0; y < map.xAxis; y++) {
      const i = (y * map.xAxis) + x;
      if (!!map.data[i]) {
        createObject(map.data[i], x, y);
      }
    }
  }
  document.querySelector('#player').setAttribute('position', `${playerPosition}`);
  document.querySelector('#player').setAttribute('rotation', `${playerRotation}`);
}

const getPosition = (x, y, z) => {
  return `${((x - (map.xAxis / 2)) * WALL_WIDTH)} ${z} ${(y - (map.yAxis / 2)) * WALL_WIDTH}`;
}

const modifyPosition = (positions, deltaX, deltaY, deltaZ) => {
  let pos = positions.split(' ');
  return `${parseFloat(pos[0], 10) + deltaX} ${parseFloat(pos[1], 10) + deltaZ} ${parseFloat(pos[2], 10) + deltaY}`;
}

const createObject = (type, x, y) => {
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
      window.createDesk({
        position: getPosition(x, y, 0),
      })
      break;
    }   
    case 'V': playerPosition = getPosition(x, y, 18);
    default: create = false;
  }  
}

const createWall = (config) => {
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

if (scene.hasLoaded) {
  createScene();
} else {
  scene.addEventListener('loaded', createScene);
}
