/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/*! exports provided: createDesk, createWall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDesk\", function() { return createDesk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWall\", function() { return createWall; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst fornitureIds = {\n  desk: 'id:961d4bae-6e62-4007-b50f-8c656fecce14',\n  deskChair: 'id:c37f95ef-9d35-40ca-b72b-2fe7d1e4bc4b',\n  computer: 'id:b9c3b8b9-fcc5-45dd-bc54-81ff68ae4c2b'\n};\nlet walls;\nlet fornitures;\n\nconst addForniture = (config) => {\n  let table = document.createElement('a-entity');\n  table.setAttribute('io3d-furniture', config.furnitureId);\n  table.setAttribute('position', config.position);\n  table.setAttribute('scale', config.scale);\n  table.setAttribute('rotation', config.rotation);\n  fornitures.appendChild(table);\n}\n\nconst createDesk = (scene, config) => {\n  if (!fornitures) {\n    fornitures = document.createElement('a-entity');\n    fornitures.setAttribute('id','#furnitures');\n    scene.appendChild(fornitures);\n  }\n  //table\n  addForniture({\n    position: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"modifyPosition\"])(config.position, 4, 0, 0),\n    furnitureId: fornitureIds.desk,\n    scale: '1.5 1 2',\n    rotation: '0 0 0',\n  });\n\n  let chairs = [\n    { x: 0, y: 2, rotation: '0 -180 0'},\n    { x: 2.5, y: 2, rotation: '0 -180 0'},\n    { x: 5, y: 2, rotation: '0 -180 0'},\n    { x: 7.5, y: 2, rotation: '0 -180 0'},\n    { x: 0, y: -2, rotation: '0 0 0'},\n    { x: 2.5, y: -2, rotation: '0 0 0'},\n    { x: 5, y: -2, rotation: '0 0 0'},\n    { x: 7.5, y: -2, rotation: '0 0 0'},\n  ];\n  for (let chair of chairs) {\n    addForniture({\n      position: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"modifyPosition\"])(config.position, chair.x, chair.y, 0),\n      furnitureId: fornitureIds.deskChair,\n      scale: '1 1.5 1',\n      rotation: chair.rotation,\n    });\n  }\n\n  let computers = [\n    { x: 0, y: 0.5, rotation: '0 -180 0'},\n    { x: 2.5, y: 0.5, rotation: '0 -180 0'},\n    { x: 5, y: 0.5, rotation: '0 -180 0'},\n    { x: 7.5, y: 0.5, rotation: '0 -180 0'},\n    { x: 0, y: -0.5, rotation: '0 0 0'},\n    { x: 2.5, y: -0.5, rotation: '0 0 0'},\n    { x: 5, y: -0.5, rotation: '0 0 0'},\n    { x: 7.5, y: -0.5, rotation: '0 0 0'},\n  ];\n  for (let computer of computers) {\n    addForniture({\n      position: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"modifyPosition\"])(config.position, computer.x, computer.y, 1),\n      furnitureId: fornitureIds.computer,\n      scale: '1 1 1',\n      rotation: computer.rotation,\n    });\n  }\n}\n\nconst createWall = (scene, config) => {\n  if (!walls) {\n    walls = document.createElement('a-entity');\n    walls.setAttribute('id','#walls');\n    scene.appendChild(walls);\n  }\n  let wall = document.createElement('a-box');\n  walls.appendChild(wall);\n  wall.setAttribute('height', config.height);\n  wall.setAttribute('width', config.width);\n  wall.setAttribute('geometry', `depth:${config.depth}`);\n  wall.setAttribute('position', config.position);\n  wall.setAttribute('color', config.color);\n  wall.setAttribute('material', config.material);\n  wall.setAttribute('static-body', 'sphereRadius:NaN');\n}\n\n\n//# sourceURL=webpack:///./src/generator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ \"./src/generator.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nconst playerPosition = \"-38.557591268482845 22.549 -54.14166883438441\";\nconst playerRotation = \"-66.05036416353157 -129.48846169956641 0\";\nconst scene = document.querySelector('a-scene');\n\nfunction createScene() {\n  for (var x = 0; x < _utils__WEBPACK_IMPORTED_MODULE_1__[\"map\"].yAxis; x++) {\n    for (var y = 0; y < _utils__WEBPACK_IMPORTED_MODULE_1__[\"map\"].xAxis; y++) {\n      const i = (y * _utils__WEBPACK_IMPORTED_MODULE_1__[\"map\"].xAxis) + x;\n      if (!!_utils__WEBPACK_IMPORTED_MODULE_1__[\"map\"].data[i]) {\n        createObject(_utils__WEBPACK_IMPORTED_MODULE_1__[\"map\"].data[i], x, y);\n      }\n    }\n  }\n  document.querySelector('#player').setAttribute('position', `${playerPosition}`);\n  document.querySelector('#player').setAttribute('rotation', `${playerRotation}`);\n}\n\nconst createObject = (type, x, y) => {\n  if (!type) return;\n  let create = true;\n  let position;\n  let height;\n  let material;\n  \n  switch (type) {\n    // wall\n    case 'W': {\n      Object(_generator__WEBPACK_IMPORTED_MODULE_0__[\"createWall\"])(scene, {\n        height: _utils__WEBPACK_IMPORTED_MODULE_1__[\"WALL_HEIGHT_SMALL\"],\n        width: _utils__WEBPACK_IMPORTED_MODULE_1__[\"WALL_WIDTH\"],\n        depth: _utils__WEBPACK_IMPORTED_MODULE_1__[\"WALL_DEPTH\"],\n        color: '#fff',\n        position: Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getPosition\"])(x, y, 1.5),\n        material: 'src: #wall-brick; repeat: 4 4',\n      })\n      break;\n    }\n    // transparent wall\n    case 'T': {\n      Object(_generator__WEBPACK_IMPORTED_MODULE_0__[\"createWall\"])(scene, {\n        height: _utils__WEBPACK_IMPORTED_MODULE_1__[\"WALL_HEIGHT\"],\n        width: _utils__WEBPACK_IMPORTED_MODULE_1__[\"WALL_WIDTH\"],\n        depth: _utils__WEBPACK_IMPORTED_MODULE_1__[\"WALL_DEPTH\"],\n        color: '#fff',\n        position: Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getPosition\"])(x, y, 1.5),\n        material: 'opacity: 0.8;src: #wall-transparent; repeat: 4 4',\n      })\n      break;\n    }\n    // desk\n    case 'D': {\n      Object(_generator__WEBPACK_IMPORTED_MODULE_0__[\"createDesk\"])(scene, {\n        position: Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getPosition\"])(x, y, 0),\n      })\n      break;\n    }   \n    case 'V': playerPosition = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getPosition\"])(x, y, 18);\n    default: create = false;\n  }  \n}\n\nif (scene.hasLoaded) {\n  createScene();\n} else {\n  scene.addEventListener('loaded', createScene);\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: WALL_WIDTH, WALL_HEIGHT, WALL_HEIGHT_SMALL, WALL_DEPTH, modifyPosition, getPosition, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WALL_WIDTH\", function() { return WALL_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WALL_HEIGHT\", function() { return WALL_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WALL_HEIGHT_SMALL\", function() { return WALL_HEIGHT_SMALL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WALL_DEPTH\", function() { return WALL_DEPTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modifyPosition\", function() { return modifyPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosition\", function() { return getPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\nconst WALL_WIDTH = 2;\nconst WALL_HEIGHT = 3;\nconst WALL_HEIGHT_SMALL = 1.5;\nconst WALL_DEPTH = 2;\n\nconst modifyPosition = (positions, deltaX, deltaY, deltaZ) => {\n  let pos = positions.split(' ');\n  return `${parseFloat(pos[0], 10) + deltaX} ${parseFloat(pos[1], 10) + deltaZ} ${parseFloat(pos[2], 10) + deltaY}`;\n}\n\nconst getPosition = (x, y, z) => {\n  return `${((x - (map.xAxis / 2)) * WALL_WIDTH)} ${z} ${(y - (map.yAxis / 2)) * WALL_WIDTH}`;\n}\n\nconst map = {\n  \"data\": [\n    'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', 'D', ' ', ' ', ' ', ' ', ' ', 'D', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W',\n    'W', 'D', ' ', ' ', ' ', ' ', ' ', 'D', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', 'D', ' ', ' ', ' ', ' ', ' ', 'D', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', 'D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', ' ', 'T', ' ', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', 'D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', 'W', 'W', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W',\n    'W', 'D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W',\n    'W', 'D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ', 'W', ' ', ' ',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'W', 'W', 'W', 'W', ' ', ' ',\n    'W', 'D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ',\n    'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ',\n    'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', ' ', ' ',\n  ],\n  \"yAxis\": 48,\n  \"xAxis\": 48\n}\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });