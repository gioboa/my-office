import {createDesk, createWall} from './generator';
import {modifyPosition, getPosition, map, WALL_WIDTH, WALL_DEPTH, WALL_HEIGHT, WALL_HEIGHT_SMALL} from './utils';

const playerPosition = "-38.557591268482845 22.549 -54.14166883438441";
const playerRotation = "-66.05036416353157 -129.48846169956641 0";
const scene = document.querySelector('a-scene');

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

const createObject = (type, x, y) => {
  if (!type) return;
  let create = true;
  let position;
  let height;
  let material;
  
  switch (type) {
    // wall
    case 'W': {
      createWall(scene, {
        height: WALL_HEIGHT_SMALL,
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
      createWall(scene, {
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
      createDesk(scene, {
        position: getPosition(x, y, 0),
      })
      break;
    }   
    case 'V': playerPosition = getPosition(x, y, 18);
    default: create = false;
  }  
}

if (scene.hasLoaded) {
  createScene();
} else {
  scene.addEventListener('loaded', createScene);
}
