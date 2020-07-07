module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/sein-game/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./my-tiny-game/index.ts","seinjs","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game/animation/2d-sprite/index.ts":
/*!*******************************************!*\
  !*** ./game/animation/2d-sprite/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Atlas', name: '22.atlas', url: __webpack_require__(/*! ../../assets/sprites/22.atlas */ "./game/assets/sprites/22.atlas") });
        game.resource.load({ type: 'Atlas', name: '33.atlas', url: __webpack_require__(/*! ../../assets/sprites/33.atlas */ "./game/assets/sprites/33.atlas") });
        game.resource.load({ type: 'Texture', name: 'black-hole.png', url: __webpack_require__(/*! ../../assets/sprites/black-hole.png */ "./game/assets/sprites/black-hole.png") });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, -2), target: new Sein.Vector3(0, 0, 0) });
        var two = world.addActor('22', Sein.SpriteActor, {
            atlas: game.resource.get('22.atlas'),
            frameName: '01',
            width: .9,
            height: 1,
            materialOptions: {
                transparent: true
            }
        });
        two.transform.setPosition(-1, 0, 0);
        two.addComponent('animator', Sein.AnimatorComponent);
        two.animator.register('hi', new Sein.SpriteAnimation({
            frameNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            fps: 10
        }));
        two.animator.play('hi', Infinity);
        var three = world.addActor('33', Sein.SpriteActor, {
            atlas: game.resource.get('33.atlas'),
            frameName: '01',
            width: .66,
            height: .9,
            materialOptions: {
                transparent: true
            }
        });
        three.transform.setPosition(1, 0, 0);
        three.addComponent('animator', Sein.AnimatorComponent);
        three.animator.register('hi', new Sein.SpriteAnimation({
            frameNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            fps: 10
        }));
        three.animator.play('hi', Infinity);
        var atlas = Sein.AtlasManager.CREATE_FROM_TEXTURE(game.resource.get('black-hole.png'), {
            cellWidth: 128,
            cellHeight: 128,
            framesPerLine: 7,
            frameStart: 0,
            frameCount: 47,
            spacing: 10
        });
        var blackHole = world.addActor('blackHole', Sein.SpriteActor, {
            atlas: atlas,
            width: .5,
            height: .5,
            frameName: '0',
            materialOptions: {
                transparent: true
            }
        });
        blackHole.transform.setPosition(0, .5, 0);
        blackHole.addComponent('animator', Sein.AnimatorComponent);
        blackHole.animator.register('hi', new Sein.SpriteAnimation({ fps: 30 }));
        blackHole.animator.play('hi', Infinity);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/animation/combination/index.ts":
/*!*********************************************!*\
  !*** ./game/animation/combination/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sein = Sein.findActorByName(world, 'Sein');
        var animator = sein.addComponent('animator', Sein.AnimatorComponent);
        animator.register('anim0', new Sein.TweenAnimation({ create: function (onComplete) { return Sein.Tween.to(sein.transform.rotation, { y: Math.PI }, { onComplete: onComplete, duration: 1000 }); } }));
        animator.register('anim1', new Sein.TweenAnimation({ create: function (onComplete) { return Sein.Tween.to(sein.transform.position, { y: 3 }, { onComplete: onComplete, duration: 1000 }); } }));
        animator.register('anim2', new Sein.TweenAnimation({ create: function (onComplete) { return Sein.Tween.to(sein.transform.rotation, { y: Math.PI * 2 }, { onComplete: onComplete, duration: 1000 }); } }));
        animator.register('anim3', new Sein.TweenAnimation({ create: function (onComplete) { return Sein.Tween.to(sein.transform.position, { y: 0 }, { onComplete: onComplete, duration: 1000 }); } }));
        animator.addTransition('anim0', 'anim1', function (params) { return params.to === 1; });
        animator.addTransition('anim0', 'anim2', function (params) { return params.to === 2; });
        animator.addTransition('anim0', 'anim3', function (params) { return params.to === 3; });
        animator.setParameter('to', 2);
        sein.animator.play('anim0');
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/animation/custom/index.ts":
/*!****************************************!*\
  !*** ./game/animation/custom/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var CustomAnimation = /** @class */ (function (_super) {
    __extends(CustomAnimation, _super);
    function CustomAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._speed = 1;
        _this._current = 0;
        _this._loop = 0;
        return _this;
    }
    CustomAnimation.prototype.onInit = function (_a) {
        var speed = _a.speed;
        this._speed = speed;
    };
    CustomAnimation.prototype.onPlay = function (currentLoop) {
        this._current = 0;
        this._loop = currentLoop;
    };
    CustomAnimation.prototype.onUpdate = function (delta) {
        if (this.paused) {
            return;
        }
        this.actor.transform.rotationY += this._speed * .1 * (this._loop % 2 ? 1 : -1);
        this._current += delta;
        if (this._current >= 1000) {
            this.stop();
        }
    };
    CustomAnimation = __decorate([
        Sein.SClass({ className: 'CustomAnimation' })
    ], CustomAnimation);
    return CustomAnimation;
}(Sein.Animation));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sein = Sein.findActorByName(world, 'Sein');
        sein.addComponent('animator', Sein.AnimatorComponent);
        sein.animator.register('custom', new CustomAnimation({ speed: 2 }));
        sein.animator.play('custom', 20);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/animation/events/index.ts":
/*!****************************************!*\
  !*** ./game/animation/events/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sphere1 = Sein.findActorByName(world, 'Sphere1');
        sphere1.animator.event.add('Start', function (args) { return console.log('Start', args); });
        sphere1.animator.event.add('Pause', function (args) { return console.log('Pause', args); });
        sphere1.animator.event.add('Resume', function (args) { return console.log('Resume', args); });
        sphere1.animator.event.add('Loop', function (args) { return console.log('Loop', args); });
        sphere1.animator.event.add('End', function (args) { return console.log('End', args); });
        sphere1.animator.play('Animation1', 10);
        setTimeout(function () {
            sphere1.animator.pause();
            sphere1.animator.resume();
        }, 300);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/animation/model/index.ts":
/*!***************************************!*\
  !*** ./game/animation/model/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sphere1 = Sein.findActorByName(world, 'Sphere1');
        sphere1.animator.play('Animation1', 10);
        var sphere2 = Sein.findActorByName(world, 'Sphere2');
        setTimeout(function () { return sphere2.animator.play('Animation2', 10); }, 300);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/animation/tween/index.ts":
/*!***************************************!*\
  !*** ./game/animation/tween/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sein = Sein.findActorByName(world, 'Sein');
        sein.addComponent('animator', Sein.AnimatorComponent);
        sein.animator.register('tween', new Sein.TweenAnimation({ create: function (onComplete) { return Sein.Tween.to({ step: 0 }, { step: 6.28 }, {
                onUpdate: function (_, _a) {
                    var target = _a.target;
                    console.log(target.step);
                    sein.transform.rotationY = target.step;
                },
                onComplete: onComplete,
                duration: 2000
            }); } }));
        sein.animator.play('tween');
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/assets/models/bird/bird.glb":
/*!******************************************!*\
  !*** ./game/assets/models/bird/bird.glb ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/bird-cd4aa.glb';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/bird-cd4aa.glb';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/building-fx/building_fx.gltf":
/*!*********************************************************!*\
  !*** ./game/assets/models/building-fx/building_fx.gltf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/building_fx-1d5a6.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/building_fx-1d5a6.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/building/task_building_6.gltf":
/*!**********************************************************!*\
  !*** ./game/assets/models/building/task_building_6.gltf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/task_building_6-c319b.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/task_building_6-c319b.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/khr-webgl/scene.gltf":
/*!*************************************************!*\
  !*** ./game/assets/models/khr-webgl/scene.gltf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-b9863.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-b9863.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/lightmap/scene.gltf":
/*!************************************************!*\
  !*** ./game/assets/models/lightmap/scene.gltf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-5d291.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-5d291.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/mineral-water/scene.gltf":
/*!*****************************************************!*\
  !*** ./game/assets/models/mineral-water/scene.gltf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-a3375.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-a3375.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/morph/morph.gltf":
/*!*********************************************!*\
  !*** ./game/assets/models/morph/morph.gltf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/morph-ae4d0.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/morph-ae4d0.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/mul-bird/scene.gltf":
/*!************************************************!*\
  !*** ./game/assets/models/mul-bird/scene.gltf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-29608.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-29608.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/pig/fairy_pig.gltf":
/*!***********************************************!*\
  !*** ./game/assets/models/pig/fairy_pig.gltf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/fairy_pig-b5720.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/fairy_pig-b5720.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/sein-lite/sein.gltf":
/*!************************************************!*\
  !*** ./game/assets/models/sein-lite/sein.gltf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/sein-89fcd.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/sein-89fcd.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/ship/ship.gltf":
/*!*******************************************!*\
  !*** ./game/assets/models/ship/ship.gltf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/ship-befcd.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/ship-befcd.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/models/soda/scene.gltf":
/*!********************************************!*\
  !*** ./game/assets/models/soda/scene.gltf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(game) {
    if (!window.__gltf_loader_extensions) {
      if (!game.renderer.gl) {
        game.renderer.initContext();
      }
      var gl = game.renderer.gl;

      window.__gltf_loader_extensions = {
      }
    }

  if (window.__force_fallback_compress_textures) {
    return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-97a82.gltf';
  }
  
  {
      return 'https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/scene-97a82.gltf';
    }
  
  
};
    

/***/ }),

/***/ "./game/assets/paradise.jpg":
/*!**********************************!*\
  !*** ./game/assets/paradise.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/zos/lottie-asset/seinjs-tiny-program/paradise-a2968.jpg"

/***/ }),

/***/ "./game/assets/point.png":
/*!*******************************!*\
  !*** ./game/assets/point.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/zos/lottie-asset/seinjs-tiny-program/point-90160.png"

/***/ }),

/***/ "./game/assets/sprites/22.atlas":
/*!**************************************!*\
  !*** ./game/assets/sprites/22.atlas ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/22-7a8c9.atlas"

/***/ }),

/***/ "./game/assets/sprites/33.atlas":
/*!**************************************!*\
  !*** ./game/assets/sprites/33.atlas ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/33-ec877.atlas"

/***/ }),

/***/ "./game/assets/sprites/black-hole.png":
/*!********************************************!*\
  !*** ./game/assets/sprites/black-hole.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/zos/lottie-asset/seinjs-tiny-program/blackhole-a0a9d.png"

/***/ }),

/***/ "./game/assets/sprites/bubble.png":
/*!****************************************!*\
  !*** ./game/assets/sprites/bubble.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/zos/lottie-asset/seinjs-tiny-program/bubble-d7484.png"

/***/ }),

/***/ "./game/assets/sprites/firework-mask.png":
/*!***********************************************!*\
  !*** ./game/assets/sprites/firework-mask.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/zos/lottie-asset/seinjs-tiny-program/fireworkmask-1e056.png"

/***/ }),

/***/ "./game/assets/sprites/firework-shape.png":
/*!************************************************!*\
  !*** ./game/assets/sprites/firework-shape.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/zos/lottie-asset/seinjs-tiny-program/fireworkshape-c2c59.png"

/***/ }),

/***/ "./game/assets/sprites/particles.atlas":
/*!*********************************************!*\
  !*** ./game/assets/sprites/particles.atlas ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/os/lottie-asset/seinjs-tiny-program/particles-20997.atlas"

/***/ }),

/***/ "./game/assets/yoku.jpg":
/*!******************************!*\
  !*** ./game/assets/yoku.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "https://gw.alipayobjects.com/zos/lottie-asset/seinjs-tiny-program/yoku-df898.jpg"

/***/ }),

/***/ "./game/atlas/allocate-release/index.ts":
/*!**********************************************!*\
  !*** ./game/atlas/allocate-release/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var _this = this;
        var game = this.getGame();
        var world = this.getWorld();
        this.atlas = Sein.AtlasManager.CREATE_EMPTY({ width: 512, height: 512 });
        world.addActor('sprite', Sein.SpriteActor, {
            width: 2, height: 2,
            texture: this.atlas.getWholeTexture({ flipY: true }),
            materialOptions: { transparent: true }
        });
        var space = 10;
        var timer = game.addActor('timer', Sein.TimerActor);
        timer.event.add('Step', function () {
            var w = ~~(Math.random() * 96 + 96);
            var h = ~~(Math.random() * 96 + 96);
            if (!_this.allocateFrame({ w: w, h: h, space: space })) {
                // 没有分配成功，去释放
                var frames_1 = Object.keys(_this.atlas.frames);
                _this.atlas.releaseFrame(frames_1[0]);
                if (frames_1.length >= 2) {
                    _this.atlas.releaseFrame(frames_1[1]);
                }
                _this.allocateFrame({ w: w, h: h, space: space });
            }
            // 使用率
            console.log(_this.atlas.usage);
        });
        timer.start(Infinity, 200);
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 3) });
    };
    MainScript.prototype.allocateFrame = function (region) {
        return this.atlas.allocateFrame(region, function (context, region, frameName) {
            context.fillStyle = "rgba(" + ~~(Math.random() * 255) + ", " + ~~(Math.random() * 255) + ", " + ~~(Math.random() * 255) + ", 1)";
            context.fillRect(region.x, region.y, region.w, region.h);
            context.font = region.w / 4 + "px monospace";
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = 'white';
            context.fillText(frameName, region.x + region.w / 2, region.y + region.h / 2);
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/atlas/basic/index.ts":
/*!***********************************!*\
  !*** ./game/atlas/basic/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Image', name: 'bubble.png', url: __webpack_require__(/*! ../../assets/sprites/bubble.png */ "./game/assets/sprites/bubble.png") });
    };
    MainScript.prototype.onCreate = function () {
        var _this = this;
        var game = this.getGame();
        var world = this.getWorld();
        this.atlas = Sein.AtlasManager.CREATE_EMPTY({ width: 512, height: 512 });
        var frameName = this.atlas.allocateFrame({ w: 128, h: 128 });
        world.addActor('sprite', Sein.SpriteActor, {
            width: 1, height: 1,
            atlas: this.atlas,
            frameName: frameName,
            materialOptions: { transparent: true },
            isBillboard: true
        });
        var timer = game.addActor('timer', Sein.TimerActor);
        timer.event.add('Step', function () {
            _this.atlas.updateFrame(frameName, function (context, region) {
                context.drawImage(game.resource.get('bubble.png'), region.x, region.y, region.w, region.h);
                context.font = '48px monospace';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillStyle = 'white';
                context.fillText((Math.random() * 100).toFixed(0), region.x + 56, region.y + 72, 56);
            });
        });
        timer.start(Infinity, 1000);
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 2) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/atlas/from-grid/index.ts":
/*!***************************************!*\
  !*** ./game/atlas/from-grid/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Image', name: 'bubble.png', url: __webpack_require__(/*! ../../assets/sprites/bubble.png */ "./game/assets/sprites/bubble.png") });
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        this.atlas = Sein.AtlasManager.CREATE_FROM_GRIDS({ width: 512, height: 512, rows: 4, cols: 4, space: 10 }, function (atlas, context, region, frameName) {
            context.drawImage(game.resource.get('bubble.png'), region.x, region.y, region.w, region.h);
            context.font = '48px monospace';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = 'white';
            context.fillText(frameName, region.x + 56, region.y + 72, 56);
            world.addActor('sprite', Sein.SpriteActor, {
                width: 1, height: 1,
                atlas: atlas,
                frameName: frameName,
                position: new Sein.Vector3((region.col - 1.5) * 1.3, (1.5 - region.row) * 1.3, 0),
                materialOptions: { transparent: true },
                isBillboard: true
            });
        });
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 8) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/atlas/from-texture/index.ts":
/*!******************************************!*\
  !*** ./game/atlas/from-texture/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Texture', name: 'black-hole.png', url: __webpack_require__(/*! ../../assets/sprites/black-hole.png */ "./game/assets/sprites/black-hole.png") });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, -2), target: new Sein.Vector3(0, 0, 0) });
        var atlas = Sein.AtlasManager.CREATE_FROM_TEXTURE(game.resource.get('black-hole.png'), {
            cellWidth: 128,
            cellHeight: 128,
            framesPerLine: 7,
            frameStart: 0,
            frameCount: 47,
            spacing: 10
        });
        [0, 24, 33].forEach(function (i, index) {
            world.addActor('blackHole1', Sein.SpriteActor, {
                atlas: atlas,
                width: .5,
                height: .5,
                frameName: "" + i,
                materialOptions: {
                    transparent: true
                },
                position: new Sein.Vector3(index - 1, 0, 0)
            });
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/bsp/box/index.ts":
/*!*******************************!*\
  !*** ./game/bsp/box/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var box = world.addActor('box', Sein.BSPBoxActor, {
            width: 2, height: 2, depth: 2,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: box, position: new Sein.Vector3(0, 0, 6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/bsp/cylinder/index.ts":
/*!************************************!*\
  !*** ./game/bsp/cylinder/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var box = world.addActor('cylinder', Sein.BSPCylinderActor, {
            radiusTop: 1, radiusBottom: 2, height: 2, radialSegments: 16,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: box, position: new Sein.Vector3(0, 0, 6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/bsp/morph/index.ts":
/*!*********************************!*\
  !*** ./game/bsp/morph/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delta = 0;
        _this.weights = [0, 0, 0, 0, 0, 0, 0, 0];
        return _this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var geometry = new Sein.BoxGeometry({ width: 1, height: 1, depth: 1 });
        var morphVertices = [];
        var vertices = [
            [-.5, -.5, -.5],
            [.5, -.5, -.5],
            [-.5, .5, -.5],
            [.5, .5, -.5],
            [-.5, -.5, .5],
            [.5, -.5, .5],
            [-.5, .5, .5],
            [.5, .5, .5]
        ];
        // 最多支持8个Target，存的是和原始模型顶点的差值！
        for (var i = 0; i < 8; i += 1) {
            var vertex = new Sein.Vector3(vertices[i][0], vertices[i][1], vertices[i][2]);
            morphVertices.push([]);
            for (var v = 0; v < geometry.vertices.length / geometry.vertices.size; v += 1) {
                var vec = geometry.vertices.get(v).clone();
                if (vec.equals(vertex)) {
                    vec.set(.5, .5, .5);
                }
                else {
                    vec.set(0, 0, 0);
                }
                morphVertices[i].push(vec.x);
                morphVertices[i].push(vec.y);
                morphVertices[i].push(vec.z);
            }
            morphVertices[i] = new Sein.GeometryData(new Float32Array(morphVertices[i]), 3);
        }
        this.morph = world.addActor('morph', Sein.BSPMorphActor, {
            geometry: geometry,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            }),
            targets: { vertices: morphVertices },
            weights: [1, 0, 0, 0, 0, 0, 0, 0]
        });
        this.generateWeights();
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: this.morph, position: new Sein.Vector3(2, 2, 2) });
    };
    MainScript.prototype.onUpdate = function (delta) {
        for (var i = 0; i < 8; i += 1) {
            this.morph.root.weights[i] = Math.sin(this.delta / 500) * this.weights[i];
        }
        this.delta += delta;
        if (this.delta >= Math.PI * 500) {
            this.delta = 0;
            this.generateWeights();
        }
    };
    MainScript.prototype.generateWeights = function () {
        this.weights = [
            Math.random(), Math.random(), Math.random(), Math.random(),
            Math.random(), Math.random(), Math.random(), Math.random()
        ];
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/bsp/plane/index.ts":
/*!*********************************!*\
  !*** ./game/bsp/plane/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var plane = world.addActor('plane', Sein.BSPPlaneActor, {
            width: 2, height: 2,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: plane, position: new Sein.Vector3(0, 0, 6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/bsp/sphere/index.ts":
/*!**********************************!*\
  !*** ./game/bsp/sphere/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var sphere = world.addActor('sphere', Sein.BSPSphereActor, {
            radius: 2, widthSegments: 32, heightSegments: 16,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: sphere, position: new Sein.Vector3(0, 0, 10) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/camera/actor-observe-control/index.ts":
/*!****************************************************!*\
  !*** ./game/camera/actor-observe-control/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var camera = world.addActor('camera', Sein.PerspectiveCameraActor, {
            aspect: game.screenAspect,
            fov: 60,
            near: 0.01,
            far: 100
        });
        camera.transform.y = 10;
        camera.transform.z = -20;
        camera.transform.lookAt(new Sein.Vector3(0, 10, 0));
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
        Sein.findActorByName(world, 'Sein').addComponent('control', Sein.CameraControls.ActorObserveControlComponent, {
            isLockY: true,
            enableDamping: true,
            dampingFactor: .2,
            zoomMax: 5,
            zoomMin: .5
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/camera/camera-free-control/index.ts":
/*!**************************************************!*\
  !*** ./game/camera/camera-free-control/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var camera = world.addActor('camera', Sein.PerspectiveCameraActor, {
            aspect: game.screenAspect,
            fov: 60,
            near: 0.01,
            far: 100,
            position: new Sein.Vector3(0, 10, -20)
        });
        this.target = new Sein.Vector3(0, 10, 0);
        camera.transform.lookAt(this.target);
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
        camera.addComponent('control', Sein.CameraControls.CameraFreeControlComponent, {
            enableDamping: true,
            dampingFactor: .2,
            zoomMax: 100,
            zoomMin: .1,
            rotateXSpeed: .5
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/camera/camera-orbit-control/index.ts":
/*!***************************************************!*\
  !*** ./game/camera/camera-orbit-control/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var camera = world.addActor('camera', Sein.PerspectiveCameraActor, {
            aspect: game.screenAspect,
            fov: 60,
            near: 0.01,
            far: 100,
            position: new Sein.Vector3(0, 40, -20)
        });
        var target = new Sein.Vector3(0, 0, 0);
        camera.transform.lookAt(target);
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
        camera.addComponent('control', Sein.CameraControls.CameraOrbitControlComponent, {
            // isLockY: true,
            enableDamping: true,
            dampingFactor: .2,
            zoomMax: 100,
            zoomMin: .1,
            target: target
            // or SceneActor
            // or SceneComponent
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/camera/orthographic-camera/index.ts":
/*!**************************************************!*\
  !*** ./game/camera/orthographic-camera/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var aspect = game.screenAspect;
        var camera = this.camera = world.addActor('camera', Sein.OrthographicCameraActor, {
            left: -22,
            right: 22,
            top: 22 / aspect,
            bottom: -22 / aspect,
            far: 100,
            near: 0.01
        });
        camera.transform.position.y = 10;
        camera.transform.position.z = -16;
        this.target = new Sein.Vector3(0, 10, 0);
        camera.transform.lookAt(this.target);
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
    };
    MainScript.prototype.onUpdate = function () {
        var eye = this.camera.transform.position.clone().subtract(this.target).normalize();
        var deltaQuat = new Sein.Quaternion().setAxisAngle(this.camera.transform.upVector, 0.01);
        eye.transformQuat(deltaQuat);
        eye.scale(16);
        this.camera.transform.position = eye.add(this.target);
        this.camera.lookAt(this.target);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/camera/perspective-camera/index.ts":
/*!*************************************************!*\
  !*** ./game/camera/perspective-camera/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var camera = this.camera = world.addActor('camera', Sein.PerspectiveCameraActor, {
            aspect: game.screenAspect,
            fov: 60,
            near: 0.01,
            far: 100,
            position: new Sein.Vector3(0, 10, -20)
        });
        this.target = new Sein.Vector3(0, 10, 0);
        camera.transform.lookAt(this.target);
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
    };
    MainScript.prototype.onUpdate = function () {
        var eye = this.camera.transform.position.clone().subtract(this.target).normalize();
        var deltaQuat = new Sein.Quaternion().setAxisAngle(this.camera.transform.upVector, 0.01);
        eye.transformQuat(deltaQuat);
        eye.scale(20);
        this.camera.transform.position = eye.add(this.target);
        this.camera.lookAt(this.target);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/core/actor-component/index.ts":
/*!********************************************!*\
  !*** ./game/core/actor-component/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var RotateActorComponent = /** @class */ (function (_super) {
    __extends(RotateActorComponent, _super);
    function RotateActorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotateActorComponent.prototype.onInit = function (initState) {
        this.speed = initState.speed;
    };
    RotateActorComponent.prototype.onUpdate = function (delta) {
        // Get root component
        var root = this.getRoot();
        root.rotate(root.upVector, delta * this.speed / 500);
    };
    RotateActorComponent = __decorate([
        Sein.SClass({ className: 'RotateActorComponent' })
    ], RotateActorComponent);
    return RotateActorComponent;
}(Sein.Component));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sein = Sein.findActorByName(world, 'Sein');
        console.log(sein);
        sein.addComponent('rotate', RotateActorComponent, { speed: 2 });
        console.log(sein.findComponentByName('rotate'));
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/core/error-chain/index.ts":
/*!****************************************!*\
  !*** ./game/core/error-chain/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/2/2018, 3:52:18 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var CustomComponent = /** @class */ (function (_super) {
    __extends(CustomComponent, _super);
    function CustomComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emitted = false;
        return _this;
    }
    CustomComponent.prototype.onError = function (error, details) {
        console.log('Component', error, details);
    };
    CustomComponent.prototype.onDestroy = function () {
        if (this.emitted) {
            return;
        }
        this.emitted = true;
        throw new Error('Just emit an error, it could be handled from component to top level game.');
    };
    return CustomComponent;
}(Sein.Component));
var CustomActor = /** @class */ (function (_super) {
    __extends(CustomActor, _super);
    function CustomActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomActor.prototype.onError = function (error, details) {
        console.log('Actor', error, details);
    };
    return CustomActor;
}(Sein.SceneActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        console.log('onCreate(LevelScript)');
        var game = this.getGame();
        utils_1.createDefaultCamera(game);
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
        var actor = game.world.addActor('customActor', CustomActor, { info: 'Hello Actor !' });
        actor.addComponent('customComponent', CustomComponent, { info: 'Hello Component !' });
        actor.removeComponent('customComponent');
        setTimeout(function () { return game.switchWorld('end'); }, 1000);
    };
    MainScript.prototype.onError = function (error, details) {
        console.log('LevelScript', error, details);
    };
    return MainScript;
}(Sein.LevelScriptActor));
var MainGameMode = /** @class */ (function (_super) {
    __extends(MainGameMode, _super);
    function MainGameMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameMode.prototype.onError = function (error, details) {
        this.getGame().event.trigger('Info', error.initObjectStack().join('->'));
        console.log('GameMode', error, details);
    };
    return MainGameMode;
}(Sein.GameModeActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', MainGameMode, MainScript);
                    game.addWorld('end', Sein.GameModeActor, Sein.LevelScriptActor);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/core/life-cycle/index.ts":
/*!***************************************!*\
  !*** ./game/core/life-cycle/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/2/2018, 3:52:18 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var CustomComponent = /** @class */ (function (_super) {
    __extends(CustomComponent, _super);
    function CustomComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomComponent.prototype.onInit = function (initState) {
        console.log('OnInit(Component)', initState);
    };
    CustomComponent.prototype.onAdd = function (initState) {
        console.log('OnAdd(Component)', initState);
    };
    CustomComponent.prototype.onUpdate = function () {
        console.log('onUpdate(Component)');
    };
    CustomComponent.prototype.onDestroy = function () {
        console.log('onDestroy(Component)');
    };
    return CustomComponent;
}(Sein.Component));
var CustomActor = /** @class */ (function (_super) {
    __extends(CustomActor, _super);
    function CustomActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomActor.prototype.onInit = function (initState) {
        console.log('OnInit(Actor)', initState);
    };
    CustomActor.prototype.onAdd = function (initState) {
        console.log('OnAdd(Actor)', initState);
    };
    CustomActor.prototype.onUpdate = function () {
        console.log('onUpdate(Actor)');
    };
    CustomActor.prototype.onDestroy = function () {
        console.log('onDestroy(Actor)');
    };
    return CustomActor;
}(Sein.SceneActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('onLogin(LevelScript)');
                return [2 /*return*/];
            });
        });
    };
    MainScript.prototype.onInit = function () {
        console.log('OnInit(LevelScript)');
    };
    MainScript.prototype.onAdd = function () {
        console.log('onAdd(LevelScript)');
    };
    MainScript.prototype.onPreload = function () {
        console.log('onPreload(LevelScript)');
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onLoading = function (state) {
        console.log('onLoading(LevelScript)', state);
    };
    MainScript.prototype.onCreate = function () {
        console.log('onCreate(LevelScript)');
        var game = this.getGame();
        utils_1.createDefaultCamera(game);
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
        var actor = game.world.addActor('customActor', CustomActor, { info: 'Hello Actor !' });
        actor.addComponent('customComponent', CustomComponent, { info: 'Hello Component !' });
        setTimeout(function () { return game.switchWorld('end'); }, 1000);
    };
    MainScript.prototype.onUpdate = function () {
        console.log('onUpdate(LevelScript)');
    };
    MainScript.prototype.onDestroy = function () {
        console.log('onDestroy(LevelScript)');
    };
    return MainScript;
}(Sein.LevelScriptActor));
var MainGameMode = /** @class */ (function (_super) {
    __extends(MainGameMode, _super);
    function MainGameMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameMode.prototype.onLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('onLogin(GameMode)');
                return [2 /*return*/];
            });
        });
    };
    MainGameMode.prototype.onInit = function () {
        console.log('onInit(GameMode)');
    };
    MainGameMode.prototype.onAdd = function () {
        console.log('onAdd(GameMode)');
    };
    MainGameMode.prototype.onCreatePlayers = function () {
        console.log('onCreatePlayers(GameMode)');
        _super.prototype.onCreatePlayers.call(this);
    };
    MainGameMode.prototype.onUpdate = function () {
        console.log('onUpdate(GameMode)');
    };
    MainGameMode.prototype.onDestroyPlayers = function () {
        console.log('onDestroyPlayers(GameMode)');
    };
    MainGameMode.prototype.onDestroy = function () {
        console.log('onDestroy(GameMode)');
    };
    return MainGameMode;
}(Sein.GameModeActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', MainGameMode, MainScript);
                    game.addWorld('end', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/core/scene-component-compose/index.ts":
/*!****************************************************!*\
  !*** ./game/core/scene-component-compose/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var actorColor = new Sein.Color(1, 1, 1);
var actorMaterial = new Sein.BasicMaterial({ diffuse: actorColor, lightType: 'PHONG' });
var CustomSceneActor = /** @class */ (function (_super) {
    __extends(CustomSceneActor, _super);
    function CustomSceneActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomSceneActor.prototype.onAdd = function () {
        this.addComponent('head', Sein.BSPSphereComponent, {
            radius: 1,
            widthSegments: 16,
            heightSegments: 32,
            material: actorMaterial,
            position: new Sein.Vector3(0, 7.5, 0)
        });
        this.addComponent('neck', Sein.BSPCylinderComponent, {
            radiusTop: .4,
            radiusBottom: .4,
            height: 1.5,
            material: actorMaterial,
            position: new Sein.Vector3(0, 6.5, 0)
        });
        var body = this.addComponent('body', Sein.BSPBoxComponent, {
            width: 4, height: 4, depth: 2,
            material: actorMaterial,
            position: new Sein.Vector3(0, 4, 0)
        });
        this.addComponent('leftArm', Sein.BSPCylinderComponent, {
            radiusTop: .5, radiusBottom: .5, height: 3,
            material: actorMaterial,
            position: new Sein.Vector3(-3.5, 1, 0),
            rotation: new Sein.Euler(0, 0, Sein.degToRad(90))
        }, body);
        this.addComponent('rightArm', Sein.BSPCylinderComponent, {
            radiusTop: .5, radiusBottom: .5, height: 3,
            material: actorMaterial,
            position: new Sein.Vector3(3.5, 1, 0),
            rotation: new Sein.Euler(0, 0, Sein.degToRad(90))
        }, body);
        this.addComponent('leftLeg', Sein.BSPCylinderComponent, {
            radiusTop: .5, radiusBottom: .5, height: 4,
            material: actorMaterial,
            position: new Sein.Vector3(-1, 0, 0)
        });
        this.addComponent('rightLeg', Sein.BSPCylinderComponent, {
            radiusTop: .5, radiusBottom: .5, height: 4,
            material: actorMaterial,
            position: new Sein.Vector3(1, 0, 0)
        });
    };
    CustomSceneActor = __decorate([
        Sein.SClass({ className: 'CustomSceneActor' })
    ], CustomSceneActor);
    return CustomSceneActor;
}(Sein.SceneActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 4, -20), target: new Sein.Vector3(0, 4, 0) });
        world.addActor('man', CustomSceneActor);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/core/timer/index.ts":
/*!**********************************!*\
  !*** ./game/core/timer/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sein = Sein.findActorByName(world, 'Sein');
        var timer = game.addActor('timer', Sein.TimerActor);
        timer.event.add('Step', function (_a) {
            var current = _a.current;
            console.log(current);
            sein.transform.rotate(sein.transform.upVector, 1);
        });
        timer.start(10, 1000);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/core/unlink-relink/index.ts":
/*!******************************************!*\
  !*** ./game/core/unlink-relink/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var ShinningComponent = /** @class */ (function (_super) {
    __extends(ShinningComponent, _super);
    function ShinningComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.channel = 'b';
        _this.time = 2000;
        return _this;
    }
    ShinningComponent.prototype.onUnLink = function () {
        switch (this.channel) {
            case 'r':
                this.channel = 'g';
                break;
            case 'g':
                this.channel = 'b';
                break;
            case 'b':
                this.channel = 'r';
                break;
            default:
                break;
        }
    };
    ShinningComponent.prototype.onReLink = function () {
        this.getRoot().getMaterial().getUniform('diffuse').value.set(0, 0, 0, 1);
        this.time = 0;
    };
    ShinningComponent.prototype.onUpdate = function (delta) {
        this.time += 0;
        if (this.time < 2000) {
            var color = this.getRoot().getMaterial().getUniform('diffuse');
            color.value[this.channel] = this.time * 0.0005;
            this.time += delta;
        }
    };
    ShinningComponent = __decorate([
        Sein.SClass({ className: 'ShinningComponent' })
    ], ShinningComponent);
    return ShinningComponent;
}(Sein.Component));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = 0;
        return _this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 10), target: new Sein.Vector3(0, 0, 0) });
        this.box = world.addActor('box', Sein.BSPBoxActor, {
            width: 2, height: 2, depth: 2,
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(1, 0, 0, 1) })
        });
        this.box.addComponent('shining', ShinningComponent);
    };
    MainScript.prototype.onUpdate = function (delta) {
        this.time += delta;
        if (this.time >= 2000) {
            if (this.box.linked) {
                this.box.unLink();
            }
            else {
                this.box.reLink();
            }
            this.time = 0;
        }
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/dispatch/multiple-level/index.ts":
/*!***********************************************!*\
  !*** ./game/dispatch/multiple-level/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/2/2018, 3:52:18 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var PreScript = /** @class */ (function (_super) {
    __extends(PreScript, _super);
    function PreScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = 0;
        return _this;
    }
    PreScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Texture', name: 'logo.jpg', url: __webpack_require__(/*! ../../assets/paradise.jpg */ "./game/assets/paradise.jpg") });
    };
    PreScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var logo = world.addActor('logo', Sein.SpriteActor, {
            width: 4, height: 4,
            texture: game.resource.get('logo.jpg'),
            position: new Sein.Vector3(8, 16, 0)
        });
        // make inheritable
        logo.persistent = true;
        world.addActor('logo2', Sein.SpriteActor, {
            width: 4, height: 4,
            texture: game.resource.get('logo.jpg'),
            position: new Sein.Vector3(-8, 16, 0)
        });
        var camera = utils_1.createDefaultCamera(game);
        camera.persistent = true;
    };
    PreScript.prototype.onUpdate = function (delta) {
        this.time += delta;
        if (this.time >= 1500) {
            this.getGame().switchLevel('main');
        }
    };
    return PreScript;
}(Sein.LevelScriptActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
        var sein = Sein.findActorByName(this.getWorld(), 'Sein');
        sein.onUpdate = function () { return sein.transform.rotate(sein.transform.upVector, .01); };
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, PreScript);
                    game.addLevel('main', 'main', MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/dispatch/multiple-world/index.ts":
/*!***********************************************!*\
  !*** ./game/dispatch/multiple-world/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/2/2018, 3:52:18 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var PreScript = /** @class */ (function (_super) {
    __extends(PreScript, _super);
    function PreScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = 0;
        return _this;
    }
    PreScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Texture', name: 'logo.jpg', url: __webpack_require__(/*! ../../assets/paradise.jpg */ "./game/assets/paradise.jpg") });
    };
    PreScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var logo = world.addActor('logo', Sein.SpriteActor, {
            width: 4, height: 4,
            texture: game.resource.get('logo.jpg'),
            position: new Sein.Vector3(8, 16, 0)
        });
        // make inheritable
        logo.persistent = true;
        world.addActor('logo2', Sein.SpriteActor, {
            width: 4, height: 4,
            texture: game.resource.get('logo.jpg'),
            position: new Sein.Vector3(-8, 16, 0)
        });
        var camera = utils_1.createDefaultCamera(game);
        camera.persistent = true;
    };
    PreScript.prototype.onUpdate = function (delta) {
        this.time += delta;
        if (this.time >= 1500) {
            this.getGame().switchLevel('main');
        }
    };
    return PreScript;
}(Sein.LevelScriptActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = 0;
        return _this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
    };
    MainScript.prototype.onUpdate = function (delta) {
        var world = this.getWorld();
        var sein = Sein.findActorByName(world, 'Sein');
        sein.onUpdate = function () { return sein.transform.rotate(sein.transform.upVector, .01); };
        if (!world.name.equalsTo('pre')) {
            return;
        }
        this.time += delta;
        if (this.time >= 1500) {
            this.getGame().switchWorld('main');
        }
    };
    return MainScript;
}(Sein.LevelScriptActor));
var GameMode1 = /** @class */ (function (_super) {
    __extends(GameMode1, _super);
    function GameMode1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameMode1.prototype.onInit = function () {
        alert('Enter World 1 !');
    };
    return GameMode1;
}(Sein.GameModeActor));
var GameMode2 = /** @class */ (function (_super) {
    __extends(GameMode2, _super);
    function GameMode2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameMode2.prototype.onInit = function () {
        alert('Enter World 2 !');
    };
    return GameMode2;
}(Sein.GameModeActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('pre', GameMode1, PreScript);
                    game.addLevel('pre', 'main', MainScript);
                    game.addWorld('main', GameMode2, PreScript);
                    game.addLevel('main', 'main', MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/dispatch/single-level/index.ts":
/*!*********************************************!*\
  !*** ./game/dispatch/single-level/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/2/2018, 3:52:18 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultCamera(game);
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
        var sein = Sein.findActorByName(this.getWorld(), 'Sein');
        sein.onUpdate = function () { return sein.transform.rotate(sein.transform.upVector, .01); };
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/event/basic/index.ts":
/*!***********************************!*\
  !*** ./game/event/basic/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var CustomComponent = /** @class */ (function (_super) {
    __extends(CustomComponent, _super);
    function CustomComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CustomComponent.prototype, "event", {
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    ;
    CustomComponent.prototype.onInit = function () {
        this._event.register('test');
    };
    return CustomComponent;
}(Sein.Component));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sein = Sein.findActorByName(world, 'Sein');
        // proxy to root component
        sein.event.add('test', function (args) { return game.event.trigger('Info', JSON.stringify(args)); });
        sein.event.trigger('test', { info: 'Actor' });
        var component = sein.addComponent('custom', CustomComponent);
        component.event.add('test', function (args) { return game.event.trigger('Info', JSON.stringify(args)); });
        component.event.trigger('test', { info: 'Component' });
        // throw error
        sein.event.unregister('test');
        sein.event.trigger('test', { info: 'haha' });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/event/custom-trigger/index.ts":
/*!********************************************!*\
  !*** ./game/event/custom-trigger/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var TimerTrigger = /** @class */ (function (_super) {
    __extends(TimerTrigger, _super);
    function TimerTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.times = 0;
        _this.active = false;
        _this.handleTrigger = function () {
            if (!_this.active) {
                return;
            }
            _this.times += 1;
            _this.trigger({ times: _this.times });
            setTimeout(_this.handleTrigger, 1000);
        };
        return _this;
    }
    TimerTrigger.prototype.onBegin = function () {
        this.active = true;
        setTimeout(this.handleTrigger, 1000);
    };
    TimerTrigger.prototype.onPause = function () {
        this.active = false;
    };
    return TimerTrigger;
}(Sein.EventTrigger));
var CustomComponent = /** @class */ (function (_super) {
    __extends(CustomComponent, _super);
    function CustomComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CustomComponent.prototype, "event", {
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    ;
    CustomComponent.prototype.onInit = function () {
        this._event.register('timer', TimerTrigger);
    };
    CustomComponent = __decorate([
        Sein.SClass({ className: 'CustomComponent' })
    ], CustomComponent);
    return CustomComponent;
}(Sein.Component));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sein = Sein.findActorByName(world, 'Sein');
        sein.emitComponentsDestroy = true;
        sein.addComponent('custom', CustomComponent).event.add('timer', function (args) { return game.event.trigger('Info', JSON.stringify(args)); });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/event/global/index.ts":
/*!************************************!*\
  !*** ./game/event/global/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultCamera(game);
        utils_1.createDefaultLights(game);
        utils_1.createSein(game);
        setTimeout(function () { return game.switchWorld('end'); }, 1000);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.event.register('Info');
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    game.addWorld('end', Sein.GameModeActor, Sein.LevelScriptActor);
                    game.event.add('Resize', function (args) { return game.event.trigger('Info', 'Resize'); });
                    game.event.add('GameDidInit', function (args) { return game.event.trigger('Info', 'GameDidInit'); });
                    game.event.add('GameDidStart', function (args) { return game.event.trigger('Info', 'GameDidStart'); });
                    game.event.add('GameWillDestroy', function (args) { return game.event.trigger('Info', 'GameWillDestroy'); });
                    game.event.add('WorldDidInit', function (args) { return game.event.trigger('Info', 'WorldDidInit'); });
                    game.event.add('WorldDidCreatePlayers', function (args) { return game.event.trigger('Info', 'WorldDidCreatePlayers'); });
                    game.event.add('WorldWillDestroy', function (args) { return game.event.trigger('Info', 'WorldWillDestroy'); });
                    game.event.add('LevelDidInit', function (args) { return game.event.trigger('Info', 'LevelDidInit'); });
                    game.event.add('LevelWillPreload', function (args) { return game.event.trigger('Info', 'LevelWillPreload'); });
                    game.event.add('LevelIsPreloading', function (args) { return game.event.trigger('Info', 'LevelIsPreloading'); });
                    game.event.add('LevelDidPreload', function (args) { return game.event.trigger('Info', 'LevelDidPreload'); });
                    game.event.add('LevelDidCreateActors', function (args) { return game.event.trigger('Info', 'LevelDidCreateActors'); });
                    game.event.add('LevelWillDestroy', function (args) { return game.event.trigger('Info', 'LevelWillDestroy'); });
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/gpu-particle-system/atlas/index.ts":
/*!*************************************************!*\
  !*** ./game/gpu-particle-system/atlas/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-gpu-particle-system */ "./node_modules/_seinjs-gpu-particle-system@0.8.11@seinjs-gpu-particle-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Atlas', name: 'particles', url: __webpack_require__(/*! ../../assets/sprites/particles.atlas */ "./game/assets/sprites/particles.atlas") });
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var particleSystem = world.addActor('particleSystem', Sein.GPUParticleSystem.Actor, {
            emitter: new Sein.GPUParticleSystem.EdgeEmitter({
                point1: new Sein.Vector3(-1, -1, -1),
                point2: new Sein.Vector3(1, 1, 1)
            }),
            count: 1000,
            maxLifeTime: 4,
            minLifeTime: 2,
            updateSpeed: .01,
            maxVelocity: 1,
            minVelocity: .5,
            atlas: game.resource.get('particles'),
            frames: ['star', 'snow', 'flower', 'flower1'],
            maxSize: 20,
            minSize: 10,
            maxAcceleration: 0,
            bornColor1: new Sein.Color(.2, .2, .2, 1),
            bornColor2: new Sein.Color(1, 1, 1, 1),
            dieColor1: new Sein.Color(.2, .2, .2, 0),
            dieColor2: new Sein.Color(1, 1, 1, 0)
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: particleSystem, position: new Sein.Vector3(0, 0, 6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/gpu-particle-system/custom-trajectory/index.ts":
/*!*************************************************************!*\
  !*** ./game/gpu-particle-system/custom-trajectory/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-gpu-particle-system */ "./node_modules/_seinjs-gpu-particle-system@0.8.11@seinjs-gpu-particle-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Atlas', name: 'particles.atlas', url: __webpack_require__(/*! ../../assets/sprites/particles.atlas */ "./game/assets/sprites/particles.atlas") });
        this.getGame().resource.load({ type: 'Image', name: 'firework-shape.png', url: __webpack_require__(/*! ../../assets/sprites/firework-shape.png */ "./game/assets/sprites/firework-shape.png") });
        this.getGame().resource.load({ type: 'Image', name: 'firework-mask.png', url: __webpack_require__(/*! ../../assets/sprites/firework-mask.png */ "./game/assets/sprites/firework-mask.png") });
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.addActor('particleSystem1', Sein.GPUParticleSystem.Actor, {
            emitter: new Sein.GPUParticleSystem.WindEmitter({
                planeLeftTop: new Sein.Vector3(-1, 0, -1),
                planeRightBottom: new Sein.Vector3(1, 0, 1),
                direction: new Sein.Vector3(0, 1, 0)
            }),
            count: 2000,
            maxLifeTime: 10,
            minLifeTime: 8,
            updateSpeed: .01,
            maxVelocity: 1.5,
            minVelocity: .8,
            atlas: game.resource.get('particles.atlas'),
            frames: ['star', 'snow', 'flower', 'flower1'],
            maxSize: 20,
            minSize: 10,
            maxAcceleration: 0,
            bornColor1: new Sein.Color(.2, .2, .2, 1),
            bornColor2: new Sein.Color(1, 1, 1, 1),
            dieColor1: new Sein.Color(.2, .2, .2, 0),
            dieColor2: new Sein.Color(1, 1, 1, 0),
            trajectoryShader: "\nvec3 getTrajectory(\n  float index,\n  float deltaTime,\n  float progress,\n  vec3 position,\n  vec3 direction,\n  float velocity,\n  float acceleration,\n  vec3 worldAcceleration,\n  vec4 noise\n) {\n  return position + vec3(sin(deltaTime) * 2., (velocity + acceleration * deltaTime) * deltaTime, cos(deltaTime) * 2.);\n}\n      ",
            position: new Sein.Vector3(-8, -6, 0)
        });
        world.addActor('particleSystem2', Sein.GPUParticleSystem.Actor, {
            emitter: new Sein.GPUParticleSystem.SphereEmitter({
                radius: 1
            }),
            count: 100,
            updateSpeed: .001,
            maxLifeTime: 1,
            minLifeTime: 1,
            maxWorldAcceleration: new Sein.Vector3(0, -2, 1),
            minWorldAcceleration: new Sein.Vector3(0, -2, -1),
            maxSize: 30,
            minSize: 20,
            maxVelocity: 4,
            minVelocity: 0,
            bornColor1: new Sein.Color(.9, .45, .05),
            bornColor2: new Sein.Color(1, .55, .15),
            dieColor1: new Sein.Color(.9, .45, .05, 0),
            dieColor2: new Sein.Color(1, .55, .15, 0),
            texture: new Sein.Texture({ image: this.getGame().resource.get('firework-shape.png') }),
            mask: new Sein.Texture({ image: this.getGame().resource.get('firework-mask.png') }),
            trajectoryShader: "\nvarying vec3 v_direction;\n\nvec3 getTrajectory(\n  float index,\n  float deltaTime,\n  float progress,\n  vec3 position,\n  vec3 direction,\n  float velocity,\n  float acceleration,\n  vec3 worldAcceleration,\n  vec4 noise\n) {\n  v_direction = normalize(direction) * (velocity + acceleration * deltaTime) + worldAcceleration * deltaTime;\n  return position + v_direction * deltaTime;\n}\n      ",
            angularShader: "\nmat2 getAngularUVMat(\n  float index,\n  float deltaTime,\n  float progress,\n  vec3 position,\n  float rotation,\n  float angularVelocity,\n  vec4 noise\n) {\n  vec2 xy = normalize((u_modelViewProjectionMatrix * vec4(v_direction, 0.)).xy);\n  return mat2(xy.x, xy.y, -xy.y, xy.x);\n}\n      ",
            position: new Sein.Vector3(8, 0, 0)
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, {
            target: new Sein.Vector3(0, 0, 0),
            position: new Sein.Vector3(0, 0, 20)
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/gpu-particle-system/edge-emitter/index.ts":
/*!********************************************************!*\
  !*** ./game/gpu-particle-system/edge-emitter/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-gpu-particle-system */ "./node_modules/_seinjs-gpu-particle-system@0.8.11@seinjs-gpu-particle-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Texture', name: 'point', url: __webpack_require__(/*! ../../assets/point.png */ "./game/assets/point.png") });
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        console.log('load done');
        var game = this.getGame();
        var world = this.getWorld();
        var particleSystem = world.addActor('particleSystem', Sein.GPUParticleSystem.Actor, {
            emitter: new Sein.GPUParticleSystem.EdgeEmitter({
                point1: new Sein.Vector3(0, 0, 0),
                point2: new Sein.Vector3(4, 4, 4)
            }),
            count: 1000,
            maxLifeTime: 4,
            minLifeTime: 2,
            updateSpeed: .01,
            maxVelocity: 1,
            minVelocity: .5,
            texture: game.resource.get('point'),
            maxSize: 20,
            minSize: 10,
            maxAcceleration: 0
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: particleSystem, position: new Sein.Vector3(0, 0, 6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/gpu-particle-system/hemispheric-emitter/index.ts":
/*!***************************************************************!*\
  !*** ./game/gpu-particle-system/hemispheric-emitter/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-gpu-particle-system */ "./node_modules/_seinjs-gpu-particle-system@0.8.11@seinjs-gpu-particle-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Atlas', name: 'particles', url: __webpack_require__(/*! ../../assets/sprites/particles.atlas */ "./game/assets/sprites/particles.atlas") });
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var particleSystem = world.addActor('particleSystem', Sein.GPUParticleSystem.Actor, {
            emitter: new Sein.GPUParticleSystem.HemisphericEmitter({
                radius: 2
            }),
            count: 1000,
            maxLifeTime: 3,
            minLifeTime: 1,
            updateSpeed: .01,
            maxVelocity: .4,
            minVelocity: .1,
            atlas: game.resource.get('particles'),
            frames: ['star', 'snow', 'flower', 'flower1'],
            maxSize: 20,
            minSize: 10,
            minAcceleration: 0,
            maxAcceleration: 0,
            bornColor1: new Sein.Color(.2, .2, .2, 1),
            bornColor2: new Sein.Color(1, 1, 1, 1),
            dieColor1: new Sein.Color(.2, .2, .2, 0),
            dieColor2: new Sein.Color(1, 1, 1, 0)
        });
        particleSystem.addComponent('helper', Sein.BSPSphereComponent, {
            radius: 2,
            material: new Sein.BasicMaterial({ wireframe: true })
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: particleSystem, position: new Sein.Vector3(0, 0, 6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/gpu-particle-system/sphere-emitter/index.ts":
/*!**********************************************************!*\
  !*** ./game/gpu-particle-system/sphere-emitter/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-gpu-particle-system */ "./node_modules/_seinjs-gpu-particle-system@0.8.11@seinjs-gpu-particle-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Atlas', name: 'particles', url: __webpack_require__(/*! ../../assets/sprites/particles.atlas */ "./game/assets/sprites/particles.atlas") });
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var particleSystem = world.addActor('particleSystem', Sein.GPUParticleSystem.Actor, {
            emitter: new Sein.GPUParticleSystem.SphereEmitter({
                radius: 1
            }),
            count: 1000,
            maxLifeTime: 3,
            minLifeTime: 1,
            updateSpeed: .01,
            maxVelocity: .4,
            minVelocity: .1,
            atlas: game.resource.get('particles'),
            frames: ['star', 'snow', 'flower', 'flower1'],
            maxSize: 20,
            minSize: 10,
            minAcceleration: 0,
            maxAcceleration: 0,
            bornColor1: new Sein.Color(.2, .2, .2, 1),
            bornColor2: new Sein.Color(1, 1, 1, 1),
            dieColor1: new Sein.Color(.2, .2, .2, 0),
            dieColor2: new Sein.Color(1, 1, 1, 0)
        });
        particleSystem.addComponent('helper', Sein.BSPSphereComponent, {
            radius: 1,
            material: new Sein.BasicMaterial({ wireframe: true })
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: particleSystem, position: new Sein.Vector3(0, 0, 6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/gpu-particle-system/wind-emitter/index.ts":
/*!********************************************************!*\
  !*** ./game/gpu-particle-system/wind-emitter/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-gpu-particle-system */ "./node_modules/_seinjs-gpu-particle-system@0.8.11@seinjs-gpu-particle-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Atlas', name: 'particles', url: __webpack_require__(/*! ../../assets/sprites/particles.atlas */ "./game/assets/sprites/particles.atlas") });
    };
    MainScript.prototype.onError = function (error) {
        throw error;
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var particleSystem = world.addActor('particleSystem', Sein.GPUParticleSystem.Actor, {
            emitter: new Sein.GPUParticleSystem.WindEmitter({
                planeLeftTop: new Sein.Vector3(-10, 4, -10),
                planeRightBottom: new Sein.Vector3(10, 3, 10),
                direction: new Sein.Vector3(-1, -4, 1)
            }),
            count: 200,
            maxLifeTime: 5,
            minLifeTime: 3,
            updateSpeed: .05,
            maxVelocity: 1,
            minVelocity: .5,
            atlas: game.resource.get('particles'),
            frames: ['star', 'snow', 'flower', 'flower1'],
            maxSize: 20,
            minSize: 10,
            minAcceleration: .1,
            maxAcceleration: .4,
            bornColor1: new Sein.Color(.2, .2, .2, 1),
            bornColor2: new Sein.Color(1, 1, 1, 1),
            dieColor1: new Sein.Color(.2, .2, .2, 0),
            dieColor2: new Sein.Color(1, 1, 1, 0)
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: particleSystem, position: new Sein.Vector3(0, 0, 6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/hid/touch/index.ts":
/*!*********************************!*\
  !*** ./game/hid/touch/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        game.hid.add('TouchStart', function (args) { return game.event.trigger('Info', 'TouchStart'); });
        game.hid.add('TouchEnd', function (args) { return game.event.trigger('Info', 'TouchEnd'); });
        game.hid.add('TouchCancel', function (args) { return game.event.trigger('Info', 'TouchCancel'); });
        game.hid.add('TouchMove', function (args) { return game.event.trigger('Info', 'TouchMove'); });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/light/ambient-light/index.ts":
/*!*******************************************!*\
  !*** ./game/light/ambient-light/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game);
        utils_1.createSein(game);
        world.addActor('light', Sein.AmbientLightActor, {
            color: new Sein.Color(1, 1, 1),
            amount: 1
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/light/baking/index.ts":
/*!************************************!*\
  !*** ./game/light/baking/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'GlTF', name: 'scene.gltf', url: __webpack_require__(/*! ../../assets/models/lightmap/scene.gltf */ "./game/assets/models/lightmap/scene.gltf"), ignoreTextureError: true });
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 2, -6), target: new Sein.Vector3(0, 2, 0) });
        game.world.addActor('light', Sein.AmbientLightActor, {
            color: new Sein.Color(0, 0, 0),
            amount: .1
        });
        game.resource.instantiate("scene.gltf");
        console.log(game);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/light/directional-light/index.ts":
/*!***********************************************!*\
  !*** ./game/light/directional-light/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game);
        utils_1.createSein(game);
        world.addActor('light', Sein.DirectionalLightActor, {
            direction: new Sein.Vector3(0, -1, 1),
            color: new Sein.Color(1, 1, 1),
            amount: 4
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/light/point-light/index.ts":
/*!*****************************************!*\
  !*** ./game/light/point-light/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game);
        utils_1.createSein(game);
        world.addActor('light', Sein.PointLightActor, {
            color: new Sein.Color(1, 1, 1),
            amount: 100,
            range: 10,
            position: new Sein.Vector3(0, 8, -8)
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/light/shadow/index.ts":
/*!************************************!*\
  !*** ./game/light/shadow/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game);
        utils_1.createSein(game);
        world.addActor('amLight', Sein.AmbientLightActor, {
            color: new Sein.Color(1, 1, 1),
            amount: .5
        });
        var light = world.addActor('light', Sein.DirectionalLightActor, {
            direction: new Sein.Vector3(0, -1, 1),
            color: new Sein.Color(1, 1, 1),
            amount: 2
        });
        light.root.shadow = {
            width: 3840,
            height: 2160
        };
        Sein.findActorByName(world, 'ground').root.material.receiveShadows = true;
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/light/spot-light/index.ts":
/*!****************************************!*\
  !*** ./game/light/spot-light/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game);
        utils_1.createSein(game);
        world.addActor('light', Sein.SpotLightActor, {
            color: new Sein.Color(1, 1, 1),
            direction: new Sein.Vector3(0, -1, .5),
            amount: 200,
            range: 100,
            position: new Sein.Vector3(0, 30, -8)
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/custom-semantic/index.ts":
/*!************************************************!*\
  !*** ./game/material/custom-semantic/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var GLOBAL_SATURATION = {
    _value: 0,
    inc: function (time) {
        GLOBAL_SATURATION._value += time;
    },
    get: function () {
        return GLOBAL_SATURATION._value;
    }
};
var GLOBAL_TIME = {
    _value: 0,
    inc: function (time) {
        GLOBAL_TIME._value += time;
    },
    get: function () {
        return GLOBAL_TIME._value;
    }
};
Sein.Semantic.register('SATURATION', GLOBAL_SATURATION);
Sein.Semantic.register('TIME', GLOBAL_TIME);
var CustomShaderMaterial = /** @class */ (function (_super) {
    __extends(CustomShaderMaterial, _super);
    function CustomShaderMaterial(initHue) {
        return _super.call(this, {
            defines: "\n    precision mediump float;\n    ",
            attributes: {
                a_position: 'POSITION'
            },
            uniforms: {
                u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
                u_initHue: { value: initHue },
                u_time: 'TIME',
                u_saturation: 'SATURATION'
            },
            vs: {
                header: "\n    attribute vec3 a_position;\n    uniform mat4 u_modelViewProjectionMatrix;\n        ",
                main: "\n    void main() {    \n      gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);\n    }\n        "
            },
            fs: "\n    uniform float u_time;\n    uniform float u_initHue;\n    uniform float u_saturation;\n\n    vec3 hsv2rgb(float h, float s, float v) {\n      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n      vec3 p = abs(fract(vec3(h, h, h) + K.xyz) * 6.0 - K.www);\n      return v * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), s);\n    }\n    \n    void main() {\n      gl_FragColor = vec4(hsv2rgb(sin(u_initHue + u_time) * 0.5 + 1., sin(u_saturation) * 0.5 + 1., 1.), 1.);\n    }\n      "
        }) || this;
    }
    return CustomShaderMaterial;
}(Sein.RawShaderMaterial));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(0)
        }).transform.setPosition(-1, -1, 0);
        world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.3)
        }).transform.setPosition(-1, 1, 0);
        world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.6)
        }).transform.setPosition(1, -1, 0);
        world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.9)
        }).transform.setPosition(1, 1, 0);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 4), target: new Sein.Vector3(0, 0, 0) });
    };
    MainScript.prototype.onUpdate = function () {
        Sein.Semantic.get('TIME').inc(.01);
        GLOBAL_SATURATION.inc(.02);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/global-uniform-material/index.ts":
/*!********************************************************!*\
  !*** ./game/material/global-uniform-material/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var GLOBAL_SATURATION = { value: 1, isGlobal: true };
var GLOBAL_TIME = { value: 0, isGlobal: true };
var CustomShaderMaterial = /** @class */ (function (_super) {
    __extends(CustomShaderMaterial, _super);
    function CustomShaderMaterial(initHue) {
        return _super.call(this, {
            defines: "\n    precision mediump float;\n    ",
            attributes: {
                a_position: 'POSITION'
            },
            uniforms: {
                u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
                u_initHue: { value: initHue },
                u_time: GLOBAL_TIME,
                u_saturation: GLOBAL_SATURATION
            },
            vs: {
                header: "\n    attribute vec3 a_position;\n    uniform mat4 u_modelViewProjectionMatrix;\n        ",
                main: "\n    void main() {    \n      gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);\n    }\n        "
            },
            fs: "\n    uniform float u_time;\n    uniform float u_initHue;\n    uniform float u_saturation;\n\n    vec3 hsv2rgb(float h, float s, float v) {\n      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n      vec3 p = abs(fract(vec3(h, h, h) + K.xyz) * 6.0 - K.www);\n      return v * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), s);\n    }\n    \n    void main() {\n      gl_FragColor = vec4(hsv2rgb(sin(u_initHue + u_time) * 0.5 + 1., sin(u_saturation) * 0.5 + 1., 1.), 1.);\n    }\n      "
        }) || this;
    }
    return CustomShaderMaterial;
}(Sein.RawShaderMaterial));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(0)
        }).transform.setPosition(-1, -1, 0);
        world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.3)
        }).transform.setPosition(-1, 1, 0);
        world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.6)
        }).transform.setPosition(1, -1, 0);
        world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1, material: new CustomShaderMaterial(.9)
        }).transform.setPosition(1, 1, 0);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 4), target: new Sein.Vector3(0, 0, 0) });
    };
    MainScript.prototype.onUpdate = function () {
        GLOBAL_TIME.value += .01;
        GLOBAL_SATURATION.value += .02;
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/khr-technique-webgl/index.ts":
/*!****************************************************!*\
  !*** ./game/material/khr-technique-webgl/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'GlTF', name: 'scene.gltf', url: __webpack_require__(/*! ../../assets/models/khr-webgl/scene.gltf */ "./game/assets/models/khr-webgl/scene.gltf") });
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        game.resource.instantiate("scene.gltf");
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 4), target: new Sein.Vector3(0, 0, 0) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/material-extension/index.ts":
/*!***************************************************!*\
  !*** ./game/material/material-extension/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var BuildingFxMaterial = /** @class */ (function (_super) {
    __extends(BuildingFxMaterial, _super);
    function BuildingFxMaterial(options) {
        return _super.call(this, {
            blendSrc: Sein.Constants.ONE,
            blendDst: Sein.Constants.ONE,
            attributes: {
                a_position: 'POSITION',
                a_uv: 'TEXCOORD_0'
            },
            uniforms: {
                u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
                u_opacity: options.uniforms.u_opacity,
                u_diffuseMap: options.uniforms.u_diffuseMap
            },
            vs: "\nprecision highp float;\nprecision highp int;\n\nattribute vec3 a_position;\nattribute vec2 a_uv;\n\nuniform mat4 u_modelViewProjectionMatrix;\n\nvarying vec2 v_uv;\n\nvoid main()\n{\n  gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);\n  v_uv = a_uv;\n}\n      ",
            fs: "\nprecision mediump float;\nprecision mediump int;\n\nuniform sampler2D u_diffuseMap;\nvarying vec2 v_uv;\nuniform float u_opacity;\nuniform vec4 u_color;\n\nvoid main()\n{\n  gl_FragColor = texture2D(u_diffuseMap, v_uv) * u_opacity;\n}     \n      "
        }) || this;
    }
    BuildingFxMaterial = __decorate([
        Sein.SMaterial({ className: 'BuildingFxMaterial' })
    ], BuildingFxMaterial);
    return BuildingFxMaterial;
}(Sein.RawShaderMaterial));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.haloSpeed = 0.02;
        return _this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'GlTF', name: 'building-fx.gltf', url: __webpack_require__(/*! ../../assets/models/building-fx/building_fx.gltf */ "./game/assets/models/building-fx/building_fx.gltf") });
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        this.halo = game.resource.instantiate("building-fx.gltf").get(0);
        this.halo.isStatic = false;
        this.halo.transform.setPosition(-10, 0, 0);
        this.halo2 = game.resource.instantiate("building-fx.gltf").get(0);
        this.halo2.isStatic = false;
        this.halo2.transform.setPosition(10, 0, 0);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 20), target: new Sein.Vector3(0, 0, 0) });
    };
    MainScript.prototype.onUpdate = function () {
        var opacity = this.halo.root.getMaterial().getUniform('u_opacity');
        var opacity2 = this.halo2.root.getMaterial().getUniform('u_opacity');
        var value = opacity.value;
        value = value + this.haloSpeed;
        // console.log(value);
        if (value > 1) {
            value = 1;
            this.haloSpeed *= -1;
        }
        else if (value < 0) {
            value = 0;
            this.haloSpeed *= -1;
        }
        opacity.value = value;
        opacity2.value = 1 - value;
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/pbr-material/index.ts":
/*!*********************************************!*\
  !*** ./game/material/pbr-material/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'GlTF', name: 'soda.gltf', url: __webpack_require__(/*! ../../assets/models/soda/scene.gltf */ "./game/assets/models/soda/scene.gltf") });
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 3, 3) });
        this.getWorld().addActor('amLight', Sein.AmbientLightActor, {
            amount: .1
        });
        // this.getWorld().addActor('dirLight', Sein.DirectionalLightActor, {
        //   direction: new Sein.Vector3(0, -1, -1),
        //   amount: 10
        // });
        // this.getWorld().addActor('pointLight', Sein.PointLightActor, {
        //   position: new Sein.Vector3(0, 0, 2),
        //   range: 3,
        //   amount: 300
        // });
        // this.getWorld().addActor('spotLight', Sein.SpotLightActor, {
        //   position: new Sein.Vector3(0, 0, 2),
        //   direction: new Sein.Vector3(0, 0, -1),
        //   range: 1.5,
        //   amount: 10,
        //   cutoff: 40,
        //   outerCutoff: 45
        // });
        var actor = game.resource.instantiate('soda.gltf').get(0);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/raw-shader-material/index.ts":
/*!****************************************************!*\
  !*** ./game/material/raw-shader-material/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var customMaterial = new Sein.RawShaderMaterial({
            defines: "\n    #define USE_UV 1\n    precision mediump float;\n    ",
            attributes: {
                a_position: 'POSITION',
                a_uv: 'TEXCOORD_0'
            },
            uniforms: {
                u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
                u_time: { value: 0 }
            },
            vs: {
                header: "\n    #ifdef USE_UV\n      attribute vec2 a_uv;\n    #endif\n    \n    attribute vec3 a_position;\n    uniform mat4 u_modelViewProjectionMatrix;\n    uniform float u_time;\n    varying vec2 v_uv;\n        ",
                main: "\n    void main() {\n      v_uv = a_uv;\n    \n      gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);\n    }\n        "
            },
            fs: "\n    varying vec2 v_uv;\n    uniform float u_time;\n    uniform mat3 u_test;\n    \n    void main() {\n      gl_FragColor = vec4(v_uv[0], v_uv[1], (sin(u_time) + 1.) * 0.5, 1.);\n    }\n      "
        });
        this.plane = world.addActor('plane', Sein.BSPPlaneActor, {
            width: 3.2, height: 1.8, material: customMaterial
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, -2, 2), target: this.plane });
    };
    MainScript.prototype.onUpdate = function () {
        this.plane.root.getMaterial().changeUniform('u_time', function (time) { return time + .01; });
        // or this.plane.root.getMaterial<Sein.ShaderMaterial>().getUniform<number>('u_time').value += .01;
        // or this.plane.root.getMaterial<Sein.ShaderMaterial>().getUniforms<{u_time: {value: number}}>().u_time.value += .01;
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/render-options/index.ts":
/*!***********************************************!*\
  !*** ./game/material/render-options/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var CustomShaderMaterial = /** @class */ (function (_super) {
    __extends(CustomShaderMaterial, _super);
    function CustomShaderMaterial(options) {
        var _this = _super.call(this, {
            defines: "\n    precision mediump float;\n    ",
            attributes: {
                a_position: 'POSITION',
                a_uv: 'TEXCOORD_0'
            },
            uniforms: {
                u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
                u_color: { value: options.color },
                u_map: { value: options.map }
            },
            vs: {
                header: "\n    attribute vec3 a_position;\n    attribute vec2 a_uv;\n    uniform mat4 u_modelViewProjectionMatrix;\n\n    #ifdef HAS_MAP\n      varying vec2 v_uv;\n    #endif\n        ",
                main: "\n    void main() {\n      #ifdef HAS_MAP\n        v_uv = a_uv;\n      #endif\n      gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);\n    }\n        "
            },
            fs: "\n    #ifdef HAS_MAP\n      varying vec2 v_uv;\n      uniform sampler2D u_map;\n    #else\n      uniform vec4 u_color;\n    #endif\n\n    void main() {\n      #ifdef HAS_MAP\n        gl_FragColor = texture2D(u_map, v_uv);\n      #else\n        gl_FragColor = u_color;\n      #endif\n    }\n      "
        }) || this;
        _this.getCustomRenderOption = function (options) {
            // debugger;
            if (_this.getUniform('u_map').value) {
                options.HAS_MAP = 1;
            }
            return options;
        };
        return _this;
    }
    return CustomShaderMaterial;
}(Sein.RawShaderMaterial));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        this.getGame().resource.load({ type: 'Texture', name: 'sprite.jpg', url: __webpack_require__(/*! ../../assets/paradise.jpg */ "./game/assets/paradise.jpg"), flipY: true });
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.addActor('box', Sein.BSPPlaneActor, {
            width: 1, height: 1, material: new CustomShaderMaterial({ color: new Sein.Color(0, 1, 1, 1) })
        }).transform.setPosition(1, 0, 0);
        world.addActor('box', Sein.BSPPlaneActor, {
            width: 1, height: 1, material: new CustomShaderMaterial({ map: game.resource.get('sprite.jpg') })
        }).transform.setPosition(-1, 0, 0);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 4), target: new Sein.Vector3(0, 0, 0) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/shader-chunk/index.ts":
/*!*********************************************!*\
  !*** ./game/material/shader-chunk/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var BasicStaticVsChunk = /** @class */ (function (_super) {
    __extends(BasicStaticVsChunk, _super);
    function BasicStaticVsChunk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vsEntryName = 'basicStaticVs';
        _this.fsEntryName = '';
        _this.hasVsOut = true;
        _this.hasFsOut = false;
        return _this;
    }
    BasicStaticVsChunk.prototype.onInit = function () {
        this.requiredAttributes = [
            'a_position'
        ];
        this.requiredUniforms = [
            'u_modelViewProjectionMatrix'
        ];
        this.vs = {
            header: '',
            main: "\nvec4 basicStaticVs() {\n  return u_modelViewProjectionMatrix * vec4(a_position, 1.0);\n}\n      "
        };
    };
    return BasicStaticVsChunk;
}(Sein.ShaderChunk));
var CustomChunk = /** @class */ (function (_super) {
    __extends(CustomChunk, _super);
    function CustomChunk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fsEntryName = 'custom';
        _this.vsEntryName = 'custom';
        _this.hasVsOut = false;
        _this.hasFsOut = true;
        return _this;
    }
    CustomChunk.prototype.onInit = function () {
        this.requiredAttributes = ['a_texcoord0'];
        this.uniforms = {
            u_time: { value: 0 }
        };
        this.vs = {
            header: 'varying vec2 u_customUv;',
            main: "\nvoid custom() {\n  u_customUv = a_texcoord0;\n}\n      "
        };
        this.fs = {
            header: "\nuniform float u_time;\nvarying vec2 u_customUv;\n      ",
            main: "\nvec4 custom() {\n  return vec4((sin(u_time) + 1.) * 0.5, u_customUv[0], u_customUv[1], 1.);\n}\n      "
        };
    };
    return CustomChunk;
}(Sein.ShaderChunk));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var basicStaticVsChunk = new BasicStaticVsChunk('basicStatic');
        var customChunk = new CustomChunk('custom');
        var fresnelEffectChuck = new Sein.shaderChunks.FresnelEffectChuck('fresnelEffect');
        var customMaterial = new Sein.ShaderMaterial({
            chunks: [
                basicStaticVsChunk,
                customChunk,
                fresnelEffectChuck,
                new Sein.shaderChunks.MixChunksChunk('mix', {
                    chunks: [basicStaticVsChunk, customChunk, fresnelEffectChuck],
                    vsWeights: { basicStatic: 1 },
                    fsWeights: { custom: 1, fresnelEffect: 1 }
                }, true)
            ],
            uniforms: {
                u_viewVector: { value: new Sein.Vector3(0, 0, 1) }
            },
            // side: Sein.Constants.BACK,
            // transparent: true,
            // blend: true,
            blendEquation: Sein.Constants.FUNC_ADD,
            blendEquationAlpha: Sein.Constants.FUNC_ADD,
            blendSrc: Sein.Constants.ONE,
            blendDst: Sein.Constants.ONE,
            blendSrcAlpha: Sein.Constants.ONE,
            blendDstAlpha: Sein.Constants.ONE
        });
        this.sphere = world.addActor('sphere', Sein.BSPSphereActor, {
            radius: 1, heightSegments: 16, material: customMaterial
        });
        utils_1.createDefaultLights(game);
        this.camera = utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, -4), target: this.sphere });
        var material = this.sphere.root.getMaterial();
        material.setUniform('u_fresnelColor', new Sein.Color(1, 1, 1, 1));
        material.setUniform('u_fresnelP', 1);
        material.setUniform('u_fresnelC', 1);
        console.log(material.vs);
        console.log(material.fs);
    };
    MainScript.prototype.onUpdate = function () {
        var material = this.sphere.root.getMaterial();
        material.changeUniform('u_time', function (time) { return time + .01; });
        material.setUniform('u_viewVector', this.camera.transform.forwardVector);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/material/shader-material/index.ts":
/*!************************************************!*\
  !*** ./game/material/shader-material/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var customMaterial = new Sein.ShaderMaterial({
            uniforms: {
                u_time: { value: 0 }
            },
            vs: {
                header: "\n    uniform float u_time;\n    varying vec2 v_uv;\n        ",
                main: "\n    void main() {\n      v_uv = a_texcoord0;\n    \n      gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);\n    }\n        "
            },
            fs: "\n    varying vec2 v_uv;\n    uniform float u_time;\n    \n    void main() {\n      gl_FragColor = vec4(v_uv[0], v_uv[1], (sin(u_time) + 1.) * 0.5, 1.);\n    }\n      "
        });
        this.plane = world.addActor('plane', Sein.BSPPlaneActor, {
            width: 3.2, height: 1.8, material: customMaterial
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, -2, 2), target: this.plane });
    };
    MainScript.prototype.onUpdate = function () {
        this.plane.root.getMaterial().changeUniform('u_time', function (time) { return time + .01; });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/physic/base/index.ts":
/*!***********************************!*\
  !*** ./game/physic/base/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var CANNON = __webpack_require__(/*! cannon-dtysky */ "./node_modules/_cannon-dtysky@0.6.4@cannon-dtysky/build/cannon.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.enablePhysic(new Sein.CannonPhysicWorld(CANNON, new Sein.Vector3(0, -9.81, 0)));
        var ground = world.addActor('ground', Sein.BSPBoxActor, {
            width: 100, height: 1, depth: 100,
            material: new Sein.BasicMaterial({
                diffuse: new Sein.Color(1, 1, 1),
                lightType: 'PHONG'
            })
        });
        ground.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 0, physicStatic: true, restitution: 1 });
        ground.addComponent('collider', Sein.BoxColliderComponent, { size: [100, 1, 100] });
        for (var index = 0; index < 10; index += 1) {
            var box = world.addActor('box', Sein.BSPBoxActor, {
                width: 1, height: 1, depth: 1,
                material: new Sein.BasicMaterial({
                    diffuse: utils_1.config.theme,
                    lightType: 'PHONG'
                })
            });
            box.transform.setPosition(index * 1.5, 10, index * 1.5);
            box.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 1, restitution: 1, unControl: true });
            box.addComponent('collider', Sein.BoxColliderComponent, { size: [1, 1, 1] });
            var sphere = world.addActor('box', Sein.BSPSphereActor, {
                radius: .5, widthSegments: 32,
                material: new Sein.BasicMaterial({
                    diffuse: utils_1.config.theme,
                    lightType: 'PHONG'
                })
            });
            sphere.transform.setPosition(-index * 1.5, 10, -index * 1.5);
            sphere.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 1, restitution: 1, unControl: true });
            sphere.addComponent('collider', Sein.SphereColliderComponent, { radius: .5 });
        }
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 10, 0), position: new Sein.Vector3(0, 20, 30) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/physic/collision-events/index.ts":
/*!***********************************************!*\
  !*** ./game/physic/collision-events/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var CANNON = __webpack_require__(/*! cannon-dtysky */ "./node_modules/_cannon-dtysky@0.6.4@cannon-dtysky/build/cannon.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.enablePhysic(new Sein.CannonPhysicWorld(CANNON, new Sein.Vector3(0, -9.81, 0)), true);
        var box = world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        box.transform.setPosition(-2, 0, 0);
        box.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 1, physicStatic: true });
        box.addComponent('collider', Sein.BoxColliderComponent, { size: [1, 1, 1] });
        box.rigidBody.event.add('BodyEnter', function (args) { return game.event.trigger('Info', 'BodyEnter'); });
        box.rigidBody.event.add('BodyLeave', function (args) { return game.event.trigger('Info', 'BodyLeave'); });
        box.rigidBody.event.add('ColliderEnter', function (args) { return game.event.trigger('Info', 'ColliderEnter'); });
        box.rigidBody.event.add('ColliderLeave', function (args) { return game.event.trigger('Info', 'ColliderLeave'); });
        box.rigidBody.event.add('Collision', function (args) { return game.event.trigger('Info', 'Collision'); });
        var sphere = world.addActor('sphere', Sein.BSPSphereActor, {
            radius: .5, widthSegments: 32,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        box.transform.setPosition(2, 0, 0);
        sphere.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 1, physicStatic: true });
        sphere.addComponent('collider', Sein.SphereColliderComponent, { radius: .5 });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 10) });
    };
    MainScript.prototype.onUpdate = function () {
        var world = this.getWorld();
        var box = Sein.findActorByName(world, 'box');
        box.transform.translate(world.leftVector, .01);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/physic/disable/index.ts":
/*!**************************************!*\
  !*** ./game/physic/disable/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-debug-tools */ "./node_modules/_seinjs-debug-tools@0.8.3@seinjs-debug-tools/lib/index.js");
var CANNON = __webpack_require__(/*! cannon-dtysky */ "./node_modules/_cannon-dtysky@0.6.4@cannon-dtysky/build/cannon.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = 0;
        return _this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.enablePhysic(new Sein.CannonPhysicWorld(CANNON, new Sein.Vector3(0, -9.81, 0)), true);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 6) });
        var box = this.box = world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        box.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 1, physicStatic: true });
        box.addComponent('collider', Sein.BoxColliderComponent, { size: [1, 1, 1] });
        box.rigidBody.event.add('Pick', function (args) { return console.log('Pick box', args); });
        var picker = new Sein.PhysicPicker(game);
        picker.enablePicking();
        this.physicDebugger = new Sein.DebugTools.CannonDebugRenderer(this.getGame());
    };
    MainScript.prototype.onUpdate = function (delta) {
        this.physicDebugger.update();
        if (this.time >= 2000) {
            if (this.box.rigidBody.disabled) {
                this.box.rigidBody.enable();
            }
            else {
                this.box.rigidBody.disable();
            }
            this.time = 0;
        }
        this.time += delta;
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/physic/pick/index.ts":
/*!***********************************!*\
  !*** ./game/physic/pick/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var CANNON = __webpack_require__(/*! cannon-dtysky */ "./node_modules/_cannon-dtysky@0.6.4@cannon-dtysky/build/cannon.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.enablePhysic(new Sein.CannonPhysicWorld(CANNON, new Sein.Vector3(0, -9.81, 0)));
        var box = world.addActor('box', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        box.transform.setPosition(-2, 0, 0);
        box.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 0 });
        box.addComponent('collider', Sein.BoxColliderComponent, { size: [1, 1, 1] });
        box.rigidBody.event.add('Pick', function (args) { return alert('pick box'); });
        var sphere = world.addActor('box', Sein.BSPSphereActor, {
            radius: .5, widthSegments: 32,
            material: new Sein.BasicMaterial({
                diffuse: utils_1.config.theme,
                lightType: 'PHONG'
            })
        });
        box.transform.setPosition(2, 0, 0);
        sphere.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 0 });
        sphere.addComponent('collider', Sein.SphereColliderComponent, { radius: .5 });
        sphere.rigidBody.event.add('Pick', function (args) { return alert('pick sphere'); });
        var picker = new Sein.PhysicPicker(game);
        picker.enablePicking();
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 10) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/player/ai/index.ts":
/*!*********************************!*\
  !*** ./game/player/ai/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-dom-hud */ "./node_modules/_seinjs-dom-hud@0.8.10@seinjs-dom-hud/lib/index.js");
var CANNON = __webpack_require__(/*! cannon-dtysky */ "./node_modules/_cannon-dtysky@0.6.4@cannon-dtysky/build/cannon.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var HeroState = /** @class */ (function (_super) {
    __extends(HeroState, _super);
    function HeroState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hp = 100;
        return _this;
    }
    Object.defineProperty(HeroState.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        enumerable: true,
        configurable: true
    });
    HeroState.prototype.hit = function (strong) {
        if (strong === void 0) { strong = false; }
        if (this._hp < 5) {
            this._hp = 0;
        }
        else if (strong) {
            this._hp -= 20;
        }
        else {
            this._hp -= 10;
        }
    };
    return HeroState;
}(Sein.PlayerStateActor));
var forwardVector = new Sein.Vector3(0, 0, 1);
var rightVector = new Sein.Vector3(-1, 0, 0);
var speed = .2;
var AIController = /** @class */ (function (_super) {
    __extends(AIController, _super);
    function AIController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCollision = function (_a) {
            var otherActor = _a.otherActor;
            _this.state.hit(otherActor.tag.equalsTo('strong'));
            _this.getLevel().state.kill();
            otherActor.removeFromParent();
        };
        return _this;
    }
    AIController.prototype.onPossesActor = function (actor) {
        actor.rigidBody.event.add('Collision', this.handleCollision);
    };
    AIController.prototype.onDisPossesActor = function (actor) {
        actor.rigidBody.event.remove('Collision', this.handleCollision);
    };
    AIController.prototype.onUpdate = function () {
        if (!this.actor) {
            return;
        }
        var _a = this.actor.transform, pawnZ = _a.z, pawnX = _a.x;
        var zDistance = 0;
        var target = null;
        Sein.findActorsByName(this.getWorld(), 'enemy', function (actor) {
            var distanceZ = actor.transform.z - pawnZ;
            if (zDistance > 0 && distanceZ > zDistance) {
                return true;
            }
            zDistance = distanceZ;
        }).forEach(function (actor) {
            var distanceZ = actor.transform.z - pawnZ;
            if (distanceZ < 0) {
                actor.removeFromParent();
                return;
            }
            if (actor.tag.equalsTo('strong')) {
                return;
            }
            target = actor;
        });
        if (!target) {
            this.actor.transform.translate(forwardVector, speed);
            return;
        }
        var distanceX = target.transform.x - pawnX;
        if (distanceX < -.5) {
            this.actor.transform.translate(rightVector, speed);
        }
        else if (distanceX > .5) {
            this.actor.transform.translate(rightVector, -speed);
        }
        else {
            this.actor.transform.translate(forwardVector, speed);
        }
    };
    return AIController;
}(Sein.PlayerControllerActor));
var LevelState = /** @class */ (function (_super) {
    __extends(LevelState, _super);
    function LevelState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._killNum = 0;
        return _this;
    }
    Object.defineProperty(LevelState.prototype, "killNum", {
        get: function () {
            return this._killNum;
        },
        enumerable: true,
        configurable: true
    });
    LevelState.prototype.kill = function () {
        this._killNum += 1;
    };
    return LevelState;
}(Sein.StateActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var player = game.getPlayer();
        utils_1.createDefaultLights(game);
        world.enablePhysic(new Sein.CannonPhysicWorld(CANNON, new Sein.Vector3(0, 0, 0)), false);
        var ground = world.addActor('ground', Sein.BSPBoxActor, {
            width: 40, height: .4, depth: 150,
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(1, 1, 1) })
        });
        ground.transform.y = -.9;
        ground.transform.z = 70;
        var hero = world.addActor('hero', Sein.BSPSphereActor, {
            radius: .5,
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(1, 0, 0) })
        });
        hero.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 1, physicStatic: true });
        hero.addComponent('collider', Sein.SphereColliderComponent, { radius: 1 });
        var heroState = game.addActor('heroState', HeroState);
        this.heroController = world.addActor('heroController', AIController, {
            actor: hero, state: heroState, followActor: true
        });
        var camera = this.heroController.addComponent('camera', Sein.PerspectiveCameraComponent, {
            aspect: game.screenAspect,
            fov: 60,
            near: 0.01,
            far: 200,
            rotation: new Sein.Euler(0, Math.PI, 0),
            position: new Sein.Vector3(0, 2, -6)
        });
        camera.lookAt(hero);
        this.heroController.addComponent('control', Sein.CameraControls.CameraOrbitControlComponent, {
            cameraComponentName: 'camera',
            enableDamping: true,
            dampingFactor: .2,
            zoomMax: 10,
            zoomMin: .5,
            target: hero
        });
        this.createEnemies();
        player.switchController(this.heroController);
    };
    MainScript.prototype.onUpdate = function () {
        var state = this.heroController.state;
        this.getGame().event.trigger('UpdateState', { hp: state.hp, killNum: this.getLevel().state.killNum });
        if (state.hp === 0) {
            this.getGame().pause();
        }
        else {
        }
    };
    MainScript.prototype.createEnemies = function () {
        var world = this.getWorld();
        var num = 100;
        var offset = 1.5;
        for (var index = 0; index < num; index += 1) {
            var left = ((index % 4) - offset) - .5;
            var x = (Math.random() + left) * 8;
            var y = 0;
            var z = (~~(index / 4) + 1) * 5;
            var isStrong = Math.random() < .5;
            var enemy = world.addActor('enemy', Sein.BSPBoxActor, {
                width: 1, height: 1, depth: 1,
                material: new Sein.BasicMaterial({ diffuse: !isStrong ? new Sein.Color(0, 1, 0) : new Sein.Color(0, 0, 1) })
            });
            enemy.tag = new Sein.SName(isStrong ? 'strong' : 'normal');
            enemy.transform.setPosition(x, y, z);
            enemy.updateOnEverTick = false;
            enemy.addComponent('rigidBody', Sein.RigidBodyComponent, { mass: 1, physicStatic: true, unControl: true });
            enemy.addComponent('collider', Sein.BoxColliderComponent, { size: [1, 1, 1], isTrigger: true });
        }
    };
    MainScript.LevelStateClass = LevelState;
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    game.event.register('UpdateState');
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/player/player/index.ts":
/*!*************************************!*\
  !*** ./game/player/player/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var forwardVector = new Sein.Vector3(0, 0, 1);
var backVector = new Sein.Vector3(0, 0, -1);
var leftVector = new Sein.Vector3(1, 0, 0);
var rightVector = new Sein.Vector3(-1, 0, 0);
var speed = .2;
var activeKeys = {};
var SeinPlayer = /** @class */ (function (_super) {
    __extends(SeinPlayer, _super);
    function SeinPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKey = function (event) {
            if (event.type === 'keydown') {
                activeKeys[event.keyCode] = true;
            }
            else {
                activeKeys[event.keyCode] = false;
            }
        };
        return _this;
    }
    SeinPlayer.prototype.onSwitchController = function () {
        this.getGame().hid.add('KeyDown', this.handleKey);
        this.getGame().hid.add('KeyUp', this.handleKey);
    };
    SeinPlayer.prototype.onReleaseController = function () {
        this.getGame().hid.remove('KeyDown', this.handleKey);
        this.getGame().hid.remove('KeyUp', this.handleKey);
    };
    SeinPlayer.prototype.onUpdate = function () {
        var controller = this.getController();
        if (!controller) {
            return;
        }
        // w
        if (activeKeys[87]) {
            controller.move(forwardVector, speed);
        }
        // s
        if (activeKeys[83]) {
            controller.move(backVector, speed);
        }
        // a
        if (activeKeys[65]) {
            controller.move(leftVector, speed);
        }
        // d
        if (activeKeys[68]) {
            controller.move(rightVector, speed);
        }
    };
    return SeinPlayer;
}(Sein.Player));
var SeinController = /** @class */ (function (_super) {
    __extends(SeinController, _super);
    function SeinController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeinController.prototype.move = function (vector, distance) {
        if (!this.actor) {
            return;
        }
        this.actor.transform.translate(vector, distance);
    };
    return SeinController;
}(Sein.PlayerControllerActor));
var MainGameMode = /** @class */ (function (_super) {
    __extends(MainGameMode, _super);
    function MainGameMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameMode.prototype.onCreatePlayers = function () {
        this.getGame().createPlayer('sein', SeinPlayer, true);
    };
    return MainGameMode;
}(Sein.GameModeActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var sein = Sein.findActorByName(world, 'Sein');
        var seinController = world.addActor('seinController', SeinController, { actor: sein });
        game.getPlayer().switchController(seinController);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', MainGameMode, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/post-processing-system/bloom/index.ts":
/*!****************************************************!*\
  !*** ./game/post-processing-system/bloom/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/19/2019, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
__webpack_require__(/*! seinjs-post-processing-system */ "./node_modules/_seinjs-post-processing-system@0.8.2@seinjs-post-processing-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
function generateRandomVec3(z) {
    return new Sein.Vector3(10 - Math.random() * 20, 10 - Math.random() * 20, z);
}
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        game.renderer.clearColor = new Sein.Color(0, 0, 0, 1);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, {
            target: new Sein.Vector3(0, 0, 30), position: new Sein.Vector3(0, 0, -5)
        });
        for (var index = 0; index < 30; index += 1) {
            world.addActor('red', Sein.BSPBoxActor, {
                width: 1, height: 1, depth: 1,
                position: generateRandomVec3(index * 2), rotation: new Sein.Euler(Math.random(), Math.random(), Math.random()),
                material: new Sein.PBRMaterial({ baseColor: new Sein.Color(Math.random(), Math.random(), Math.random()) })
            });
        }
        var pps = game.addActor('bloom', Sein.PostProcessingSystem.Actor);
        pps.addPass({
            name: 'step1',
            frameOptions: {
                scaleH: .5, scaleW: .5
            },
            uniforms: {
                u_pixelSize: { value: [4 / game.screenWidth, 2 / game.screenHeight] }
            },
            fs: "\n        precision mediump float;\n        uniform sampler2D u_preMap;\n        uniform vec2 u_pixelSize;\n        varying vec2 v_texcoord0;\n\n        void main() {\n          vec4 color = vec4(0., 0., 0., 1.);\n          for(float i = -4.; i < 5.; i += 1.) {\n            color += texture2D(u_preMap, v_texcoord0 + vec2(i * u_pixelSize.x, 0.));\n          }\n          color /= 9.;\n          gl_FragColor = color;\n        }\n      "
        });
        pps.addPass({
            name: 'step2',
            frameOptions: {
                scaleH: .5, scaleW: .5
            },
            uniforms: {
                u_pixelSize: { value: [4 / game.screenWidth, 2 / game.screenHeight] }
            },
            fs: "\n        precision mediump float;\n        uniform sampler2D u_preMap;\n        uniform vec2 u_pixelSize;\n        varying vec2 v_texcoord0;\n\n        void main() {\n          vec4 color = vec4(0., 0., 0., 1.);\n          for(float i = -4.; i < 4.; i += 1.) {\n            color += texture2D(u_preMap, v_texcoord0 + vec2(0., i * u_pixelSize.y));\n          }\n          color /= 9.;\n          gl_FragColor = color;\n        }\n      "
        });
        pps.addPass({
            name: 'step3',
            fs: "\n        precision mediump float;\n        uniform sampler2D u_origMap;\n        uniform sampler2D u_preMap;\n        varying vec2 v_texcoord0;\n\n        void main() {\n          vec4 hdrColor = texture2D(u_origMap, v_texcoord0);\n          vec4 bloomColor = texture2D(u_preMap, v_texcoord0);\n          float gray = bloomColor.r * 0.299 + bloomColor.g * 0.587 + bloomColor.b * 0.114;\n          hdrColor += bloomColor;\n          gl_FragColor = hdrColor;\n        }\n      "
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/post-processing-system/local-threshold/index.ts":
/*!**************************************************************!*\
  !*** ./game/post-processing-system/local-threshold/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/19/2019, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
__webpack_require__(/*! seinjs-post-processing-system */ "./node_modules/_seinjs-post-processing-system@0.8.2@seinjs-post-processing-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var pps = game.addActor('threshold-system', Sein.PostProcessingSystem.Actor);
        pps.addPass({
            name: 'mean-filter',
            uniforms: {
                u_pixelSize: { value: [1 / game.screenWidth, 1 / game.screenHeight] }
            },
            fs: "\n        precision mediump float;\n        uniform sampler2D u_origMap;\n        uniform vec2 u_pixelSize;\n        varying vec2 v_texcoord0;\n\n        void main() {\n          vec4 color = vec4(0., 0., 0., 1.);\n          for(float h = -1.; h < 2.; h += 1.) {\n            for(float w = -1.; w < 2.; w += 1.) {\n              color += texture2D(u_origMap, v_texcoord0 + vec2(w * u_pixelSize.x, h * u_pixelSize.y));\n            }\n          }\n          color /= 9.;\n          gl_FragColor = color;\n        }\n      "
        });
        pps.addPass({
            name: 'threshold',
            fs: "\n        precision mediump float;\n        uniform sampler2D u_origMap;\n        uniform sampler2D u_preMap;\n        varying vec2 v_texcoord0;\n\n        void main() {\n          vec4 origColor = texture2D(u_origMap, v_texcoord0);\n          vec4 filterColor = texture2D(u_preMap, v_texcoord0);\n          float origGray = origColor.r * 0.299 + origColor.g * 0.587 + origColor.b * 0.114;\n          float filterGray = filterColor.r * 0.299 + filterColor.g * 0.587 + filterColor.b * 0.114;\n          gl_FragColor = origGray >= filterGray ? vec4(1., 1., 1., 1.) : vec4(0., 0., 0., 1.);\n        }\n      "
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/post-processing-system/threshold/index.ts":
/*!********************************************************!*\
  !*** ./game/post-processing-system/threshold/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/19/2019, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-camera-controls */ "./node_modules/_seinjs-camera-controls@0.8.13@seinjs-camera-controls/lib/index.js");
__webpack_require__(/*! seinjs-post-processing-system */ "./node_modules/_seinjs-post-processing-system@0.8.2@seinjs-post-processing-system/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createSein(game);
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game);
        var pps = game.addActor('threshold-system', Sein.PostProcessingSystem.Actor);
        pps.addPass({
            name: 'pass1',
            fs: "\n        precision mediump float;\n        uniform sampler2D u_preMap;\n        varying vec2 v_texcoord0;\n\n        void main() {\n          vec4 color = texture2D(u_preMap, v_texcoord0);\n          float gray = color.r * 0.299 + color.g * 0.587 + color.b * 0.114;\n          gl_FragColor = gray > 0.7 ? vec4(1., 1., 1., 1.) : vec4(0., 0., 0., 1.);\n        }\n      "
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/render/2d-sprite/index.ts":
/*!****************************************!*\
  !*** ./game/render/2d-sprite/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Texture', name: 'sprite.jpg', url: __webpack_require__(/*! ../../assets/paradise.jpg */ "./game/assets/paradise.jpg") });
        game.resource.load({ type: 'Atlas', name: '22.atlas', url: __webpack_require__(/*! ../../assets/sprites/22.atlas */ "./game/assets/sprites/22.atlas") });
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.addActor('sprite', Sein.SpriteActor, {
            width: 1, height: 1,
            texture: game.resource.get('sprite.jpg'),
            position: new Sein.Vector3(-2, 0, 0)
        });
        var atlas = Sein.AtlasManager.CREATE_FROM_TEXTURE(game.resource.get('sprite.jpg'), {
            cellWidth: 500,
            cellHeight: 500,
            framesPerLine: 1
        });
        world.addActor('sprite2', Sein.SpriteActor, {
            width: 1, height: 1,
            atlas: atlas,
            frameName: '0',
            position: new Sein.Vector3(2, 0, 0)
        });
        world.addActor('22', Sein.SpriteActor, {
            width: 1.8, height: 2,
            atlas: game.resource.get('22.atlas'),
            frameName: '01',
            position: new Sein.Vector3(0, 0, 0),
            materialOptions: { transparent: true },
            isBillboard: true
        });
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, -6) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/render/advance/index.ts":
/*!**************************************!*\
  !*** ./game/render/advance/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MirrorRenderSystem = /** @class */ (function (_super) {
    __extends(MirrorRenderSystem, _super);
    function MirrorRenderSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MirrorRenderSystem.prototype.onAdd = function (initState) {
        this.buffer = new Sein.FrameBuffer(this.getGame());
        this.mirror = initState.mirror;
    };
    MirrorRenderSystem.prototype.onPreRender = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var mainCamera = world.mainCamera;
        mainCamera.layers.set(1);
        var _a = game.renderer.clearColor, r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        game.renderer.clearColor.set(.5, .5, .5, 1);
        mainCamera.render(this.buffer);
        this.mirror.root.material.setUniform('diffuse', this.buffer.texture);
        mainCamera.layers.reset();
        game.renderer.clearColor.set(r, g, b, a);
    };
    MirrorRenderSystem.prototype.onPostClear = function () {
    };
    MirrorRenderSystem.prototype.onPostRender = function () {
    };
    return MirrorRenderSystem;
}(Sein.RenderSystemActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.enableLayers = true;
        world.addActor('red', Sein.BSPSphereActor, {
            radius: 1,
            position: new Sein.Vector3(-3, -2, 0),
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(1, 0, 0) })
        }).layers.set(1);
        world.addActor('green', Sein.BSPBoxActor, {
            width: 1, height: 1, depth: 1,
            position: new Sein.Vector3(0, -2, 3),
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(0, 1, 0) })
        }).layers.set(1);
        world.addActor('blue', Sein.BSPCylinderActor, {
            radiusTop: .5, radiusBottom: 1, height: 1,
            position: new Sein.Vector3(3, -2, 0),
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(0, 0, 1) })
        }).layers.set(1);
        var mirror = world.addActor('mirror', Sein.BSPPlaneActor, {
            width: 8, height: 4.5,
            position: new Sein.Vector3(0, 4, 2),
            material: new Sein.BasicMaterial({ diffuse: new Sein.Texture({ image: new Image(512, 512) }) })
        });
        mirror.layers.set(0);
        game.addActor('CustomRenderSystem', MirrorRenderSystem, { mirror: mirror });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, 10) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/render/fog/index.ts":
/*!**********************************!*\
  !*** ./game/render/fog/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
function generateRandomVec3(z) {
    return new Sein.Vector3(10 - Math.random() * 20, 10 - Math.random() * 20, z);
}
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        for (var index = 0; index < 30; index += 1) {
            world.addActor('red', Sein.BSPBoxActor, {
                width: 1, height: 1, depth: 1,
                position: generateRandomVec3(index * 2), rotation: new Sein.Euler(Math.random(), Math.random(), Math.random()),
                material: new Sein.PBRMaterial({ baseColor: new Sein.Color(Math.random(), Math.random(), Math.random()) })
            });
        }
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, {
            target: new Sein.Vector3(0, 0, 30), position: new Sein.Vector3(0, 0, -5)
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, color, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    color = new Sein.Color(.6, .8, .9);
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: color,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true,
                        fog: new Sein.Fog({
                            mode: 'LINEAR',
                            start: 10,
                            end: 30,
                            density: 0.1,
                            color: color
                        })
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/render/layers/index.ts":
/*!*************************************!*\
  !*** ./game/render/layers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var ELayers;
(function (ELayers) {
    ELayers[ELayers["r"] = 1] = "r";
    ELayers[ELayers["g"] = 2] = "g";
    ELayers[ELayers["b"] = 3] = "b";
})(ELayers || (ELayers = {}));
function generateRandomVec3() {
    return new Sein.Vector3(10 - Math.random() * 20, 10 - Math.random() * 20, 10 - Math.random() * 20);
}
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.escape = 0;
        _this.count = 0;
        return _this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.enableLayers = true;
        for (var index = 0; index < 10; index += 1) {
            var red = world.addActor('red', Sein.BSPSphereActor, {
                radius: 1, material: new Sein.BasicMaterial({ diffuse: new Sein.Color(1, 0, 0) }),
                position: generateRandomVec3()
            });
            red.layers.set(ELayers.r);
            var green = world.addActor('green', Sein.BSPSphereActor, {
                radius: 1, material: new Sein.BasicMaterial({ diffuse: new Sein.Color(0, 1, 0) }),
                position: generateRandomVec3()
            });
            green.layers.set(ELayers.g);
            var blue = world.addActor('blue', Sein.BSPSphereActor, {
                radius: 1, material: new Sein.BasicMaterial({ diffuse: new Sein.Color(0, 0, 1) }),
                position: generateRandomVec3()
            });
            blue.layers.set(ELayers.b);
        }
        utils_1.createDefaultLights(game);
        this.camera = utils_1.createDefaultCamera(game, {
            target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 0, -20)
        });
    };
    MainScript.prototype.onUpdate = function (delta) {
        this.escape += delta;
        if (this.escape >= 2000) {
            this.camera.layers.set((this.count % 3) + 1);
            this.count += 1;
            this.escape = 0;
        }
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/render/refraction/index.ts":
/*!*****************************************!*\
  !*** ./game/render/refraction/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var EnhancedPBR = __webpack_require__(/*! seinjs-materials/EnhancedPBR */ "./node_modules/_seinjs-materials@0.1.6@seinjs-materials/EnhancedPBR/index.js");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'GlTF', name: 'mineral-water.gltf', url: __webpack_require__(/*! ../../assets/models/mineral-water/scene.gltf */ "./game/assets/models/mineral-water/scene.gltf") });
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        game.renderer.clearColor.set(.8, .8, .8, 1);
        this.getWorld().addActor('dirLight', Sein.DirectionalLightActor, {
            direction: new Sein.Vector3(0, -1, -1),
            amount: 10
        });
        this.getWorld().addActor('dirLight2', Sein.DirectionalLightActor, {
            direction: new Sein.Vector3(0, 1, 1),
            amount: 10
        });
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, .5, 0), position: new Sein.Vector3(0, .5, 1.8) });
        game.addActor('CustomRenderSystem', EnhancedPBR.RenderSystemActor, { textureScale: 1 });
        game.resource.instantiate('mineral-water.gltf').get(0);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/render/render-order/index.ts":
/*!*******************************************!*\
  !*** ./game/render/render-order/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        world.addActor('red', Sein.BSPSphereActor, {
            radius: 1,
            position: new Sein.Vector3(0, 0, -3),
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(1, 0, 0), renderOrder: 0, depthTest: false })
        });
        world.addActor('green', Sein.BSPSphereActor, {
            radius: 1,
            position: new Sein.Vector3(0, 0, 0),
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(0, 1, 0), renderOrder: 1, depthTest: false })
        });
        world.addActor('blue', Sein.BSPSphereActor, {
            radius: 1,
            position: new Sein.Vector3(0, 0, 3),
            material: new Sein.BasicMaterial({ diffuse: new Sein.Color(0, 0, 1), renderOrder: 2, depthTest: false })
        });
        utils_1.createDefaultLights(game);
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 0, 0), position: new Sein.Vector3(0, 5, 10) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/atlas-loader/index.ts":
/*!*********************************************!*\
  !*** ./game/resource/atlas-loader/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-debug-tools */ "./node_modules/_seinjs-debug-tools@0.8.3@seinjs-debug-tools/lib/index.js");
__webpack_require__(/*! seinjs-dom-hud */ "./node_modules/_seinjs-dom-hud@0.8.10@seinjs-dom-hud/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Atlas', name: '22.atlas', url: __webpack_require__(/*! ../../assets/sprites/22.atlas */ "./game/assets/sprites/22.atlas") });
        game.resource.load({ type: 'Atlas', name: '33.atlas', url: __webpack_require__(/*! ../../assets/sprites/33.atlas */ "./game/assets/sprites/33.atlas") });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, -2), target: new Sein.Vector3(0, 0, 0) });
        var two = world.addActor('22', Sein.SpriteActor, {
            atlas: game.resource.get('22.atlas'),
            frameName: '01',
            width: .9,
            height: 1,
            materialOptions: {
                transparent: true
            }
        });
        two.transform.setPosition(-1, 0, 0);
        var three = world.addActor('33', Sein.SpriteActor, {
            atlas: game.resource.get('33.atlas'),
            frameName: '01',
            width: .66,
            height: .9,
            materialOptions: {
                transparent: true
            }
        });
        three.transform.setPosition(1, 0, 0);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/cancel/index.ts":
/*!***************************************!*\
  !*** ./game/resource/cancel/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-debug-tools */ "./node_modules/_seinjs-debug-tools@0.8.3@seinjs-debug-tools/lib/index.js");
__webpack_require__(/*! seinjs-dom-hud */ "./node_modules/_seinjs-dom-hud@0.8.10@seinjs-dom-hud/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Atlas', name: '22.atlas', url: __webpack_require__(/*! ../../assets/sprites/22.atlas */ "./game/assets/sprites/22.atlas") });
        game.resource.load({ type: 'Atlas', name: '33.atlas', url: __webpack_require__(/*! ../../assets/sprites/33.atlas */ "./game/assets/sprites/33.atlas") });
        game.resource.cancel('22.atlas');
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, -2), target: new Sein.Vector3(0, 0, 0) });
        // const two = world.addActor('22', Sein.SpriteActor, {
        //   atlas: game.resource.get<'Atlas'>('22.atlas'),
        //   frameName: '01',
        //   width: .9,
        //   height: 1,
        //   materialOptions: {
        //     transparent: true
        //   }
        // });
        // two.transform.setPosition(-1, 0, 0);
        var three = world.addActor('33', Sein.SpriteActor, {
            atlas: game.resource.get('33.atlas'),
            frameName: '01',
            width: .66,
            height: .9,
            materialOptions: {
                transparent: true
            }
        });
        three.transform.setPosition(1, 0, 0);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/cube-texture-loader/index.ts":
/*!****************************************************!*\
  !*** ./game/resource/cube-texture-loader/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-debug-tools */ "./node_modules/_seinjs-debug-tools@0.8.3@seinjs-debug-tools/lib/index.js");
__webpack_require__(/*! seinjs-dom-hud */ "./node_modules/_seinjs-dom-hud@0.8.10@seinjs-dom-hud/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        // game.resource.load({type: 'CubeTexture', name: 'snow.jpg', url: '', images: {
        //   left: require('../../assets/skybox/snow/left.jpg'),
        //   right: require('../../assets/skybox/snow/right.jpg'),
        //   top: require('../../assets/skybox/snow/top.jpg'),
        //   bottom: require('../../assets/skybox/snow/bottom.jpg'),
        //   front: require('../../assets/skybox/snow/front.jpg'),
        //   back: require('../../assets/skybox/snow/back.jpg')
        // }});
        game.resource.load({ type: 'CubeTexture', name: 'snow.jpg', url: '', images: {
                left: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*h3VgSoCE5uQAAAAAAAAAAABkARQnAQ',
                right: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*sBswT6-ZC1AAAAAAAAAAAABkARQnAQ',
                top: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*6WXnRLdyCJkAAAAAAAAAAABkARQnAQ',
                bottom: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*hhmUSYdkhdgAAAAAAAAAAABkARQnAQ',
                front: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*Rn5GQa9aOccAAAAAAAAAAABkARQnAQ',
                back: 'https://gw.alipayobjects.com/mdn/rms_9a0fab/afts/img/A*XLVsRoMbiUUAAAAAAAAAAABkARQnAQ'
            } });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, .1), target: new Sein.Vector3(0, 0, 0) });
        world.addActor('plane', Sein.BSPBoxActor, { width: 2, height: 2, depth: 2, material: new Sein.BasicMaterial({
                diffuse: game.resource.get('snow.jpg'),
                lightType: 'NONE',
                side: Sein.Constants.FRONT_AND_BACK
            }) });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/free-load/index.ts":
/*!******************************************!*\
  !*** ./game/resource/free-load/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(.2, 0, 0), position: new Sein.Vector3(.2, 0, 1) });
        utils_1.createDefaultLights(game);
        game.resource.load({ type: 'GlTF', name: 'bird.gltf', url: __webpack_require__(/*! ../../assets/models/mul-bird/scene.gltf */ "./game/assets/models/mul-bird/scene.gltf") })
            .then(function (result) {
            console.log(result);
            game.resource.instantiate('bird.gltf').forEach(function (actor) { actor.animator.play(null, Infinity); });
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/glb-load/index.ts":
/*!*****************************************!*\
  !*** ./game/resource/glb-load/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultCamera(game, { target: new Sein.Vector3(0, 1, 0), position: new Sein.Vector3(0, 1, 5) });
        utils_1.createDefaultLights(game);
        game.resource.load({ type: 'GlTF', name: 'bird.glb', url: __webpack_require__(/*! ../../assets/models/bird/bird.glb */ "./game/assets/models/bird/bird.glb") })
            .then(function (result) {
            console.log(result);
            game.resource.instantiate('bird.glb').forEach(function (actor) {
                if (actor.animator) {
                    actor.animator.play(null, Infinity);
                }
            });
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/gltf-loader/index.ts":
/*!********************************************!*\
  !*** ./game/resource/gltf-loader/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-debug-tools */ "./node_modules/_seinjs-debug-tools@0.8.3@seinjs-debug-tools/lib/index.js");
__webpack_require__(/*! seinjs-dom-hud */ "./node_modules/_seinjs-dom-hud@0.8.10@seinjs-dom-hud/lib/index.js");
var CANNON = __webpack_require__(/*! cannon-dtysky */ "./node_modules/_cannon-dtysky@0.6.4@cannon-dtysky/build/cannon.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var ShipActor = /** @class */ (function (_super) {
    __extends(ShipActor, _super);
    function ShipActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = 0;
        return _this;
    }
    ShipActor.prototype.onInstantiate = function () {
        this.paddle = this.findComponentByName('ship_paddle');
    };
    ShipActor.prototype.onUpdate = function (delta) {
        if (this.paddle) {
            this.paddle.rotationZ += .03;
        }
        this.duration += delta;
        this.transform.y += Math.sin(this.duration / 500) * .05;
    };
    ShipActor = __decorate([
        Sein.SClass({ className: 'ShipActor' })
    ], ShipActor);
    return ShipActor;
}(Sein.StaticMeshActor));
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'GlTF', name: 'building.gltf', url: __webpack_require__(/*! ../../assets/models/building/task_building_6.gltf */ "./game/assets/models/building/task_building_6.gltf") });
        game.resource.load({ type: 'GlTF', name: 'ship.gltf', url: __webpack_require__(/*! ../../assets/models/ship/ship.gltf */ "./game/assets/models/ship/ship.gltf") });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 7, -16), target: new Sein.Vector3(0, 7, 0) });
        utils_1.createDefaultLights(game);
        world.enablePhysic(new Sein.CannonPhysicWorld(CANNON, new Sein.Vector3(0, -0.98, 0)));
        game.resource.instantiate('building.gltf');
        var ship = game.resource.instantiate('ship.gltf').get(0);
        ship.transform.setPosition(-8, 5, 0).rotationY = Math.PI / 2;
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/gltf-morph/index.ts":
/*!*******************************************!*\
  !*** ./game/resource/gltf-morph/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 0;
        _this.current = [0];
        return _this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'GlTF', name: 'morph.gltf', url: __webpack_require__(/*! ../../assets/models/morph/morph.gltf */ "./game/assets/models/morph/morph.gltf") });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 2), target: new Sein.Vector3(0, 0, 0) });
        utils_1.createDefaultLights(game);
        this.morph = game.resource.instantiate('morph.gltf').get(0);
    };
    MainScript.prototype.onUpdate = function () {
        var _this = this;
        this.count += .02;
        if (Math.abs(this.count - Math.PI) <= 0.01) {
            this.generateCurrent();
            this.count = 0;
        }
        this.current.forEach(function (index) {
            _this.morph.root.weights[index] = Math.sin(_this.count);
        });
    };
    MainScript.prototype.generateCurrent = function () {
        var r = crypto.getRandomValues(new Uint8Array([0, 0]));
        var num = ~~(r[0] / 256 * 3);
        var start = ~~(r[1] / 256 * 3);
        var pre = this.current.slice();
        this.current = [];
        for (var i = 0; i <= num; i += 1) {
            var j = start + i;
            if (j > 2) {
                j -= 3;
            }
            this.current.push(j);
        }
        this.current.sort();
        if (this.current.toString() === pre.toString()) {
            this.generateCurrent();
        }
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/gltf-skeletal/index.ts":
/*!**********************************************!*\
  !*** ./game/resource/gltf-skeletal/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animations = [];
        _this.playNext = function () {
            var animator = _this.pig.animator;
            var index = _this.animations.indexOf(animator.current) + 1;
            if (index >= _this.animations.length) {
                index = 0;
            }
            animator.play(_this.animations[index]);
        };
        return _this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'GlTF', name: 'pig.gltf', url: __webpack_require__(/*! ../../assets/models/pig/fairy_pig.gltf */ "./game/assets/models/pig/fairy_pig.gltf") });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 1, -4), target: new Sein.Vector3(0, 1, 0) });
        utils_1.createDefaultLights(game);
        this.pig = game.resource.instantiate('pig.gltf').get(0);
        this.animations = this.pig.animator.animationNames;
        this.pig.animator.event.add('End', this.playNext);
        this.playNext();
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/image-loader/index.ts":
/*!*********************************************!*\
  !*** ./game/resource/image-loader/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-debug-tools */ "./node_modules/_seinjs-debug-tools@0.8.3@seinjs-debug-tools/lib/index.js");
__webpack_require__(/*! seinjs-dom-hud */ "./node_modules/_seinjs-dom-hud@0.8.10@seinjs-dom-hud/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Image', name: 'yoku.jpg', url: __webpack_require__(/*! ../../assets/yoku.jpg */ "./game/assets/yoku.jpg") });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 2), target: new Sein.Vector3(0, 0, 0) });
        world.addActor('plane', Sein.BSPPlaneActor, {
            width: 2.56,
            height: 1.92,
            material: new Sein.BasicMaterial({
                diffuse: new Sein.Texture({ image: game.resource.get('yoku.jpg'), flipY: true }),
                lightType: 'NONE'
            })
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/resource/texture-loader/index.ts":
/*!***********************************************!*\
  !*** ./game/resource/texture-loader/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
__webpack_require__(/*! seinjs-debug-tools */ "./node_modules/_seinjs-debug-tools@0.8.3@seinjs-debug-tools/lib/index.js");
__webpack_require__(/*! seinjs-dom-hud */ "./node_modules/_seinjs-dom-hud@0.8.10@seinjs-dom-hud/lib/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        var game = this.getGame();
        game.resource.load({ type: 'Texture', name: 'yoku.jpg', url: __webpack_require__(/*! ../../assets/yoku.jpg */ "./game/assets/yoku.jpg"), flipY: true });
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        utils_1.createDefaultCamera(game, { position: new Sein.Vector3(0, 0, 2), target: new Sein.Vector3(0, 0, 0) });
        world.addActor('plane', Sein.BSPPlaneActor, {
            width: 2.56,
            height: 1.92,
            material: new Sein.BasicMaterial({
                diffuse: game.resource.get('yoku.jpg'),
                lightType: 'NONE'
            })
        });
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./game/start/start/index.ts":
/*!***********************************!*\
  !*** ./game/start/start/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/2/2018, 3:52:18 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./game/utils.ts");
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScript.prototype.onPreload = function () {
        utils_1.loadSein(this.getGame());
    };
    MainScript.prototype.onLoading = function (state) {
        console.log(state);
    };
    MainScript.prototype.onCreate = function () {
        var game = this.getGame();
        var world = this.getWorld();
        var camera = world.addActor('camera', Sein.PerspectiveCameraActor, {
            aspect: game.screenAspect,
            fov: 60,
            near: 0.01,
            far: 100
        });
        camera.transform.setPosition(0, 10, -20);
        camera.root.lookAt(new Sein.Vector3(0, 10, 0));
        world.addActor('amLight', Sein.AmbientLightActor, {
            amount: .5
        });
        world.addActor('dirLight1', Sein.DirectionalLightActor, {
            direction: new Sein.Vector3(0, -1, 1),
            amount: 2
        });
        world.addActor('dirLight2', Sein.DirectionalLightActor, {
            direction: new Sein.Vector3(0, -1, -1),
            amount: 2
        });
        utils_1.createSein(game);
    };
    MainScript.prototype.onUpdate = function () {
        var sein = Sein.findActorByName(this.getWorld(), 'Sein');
        sein.transform.rotate(sein.transform.upVector, .01);
    };
    return MainScript;
}(Sein.LevelScriptActor));
function main(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var engine, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = new Sein.Engine();
                    game = new Sein.Game('intro-game', {
                        canvas: canvas,
                        clearColor: utils_1.config.background,
                        width: canvas.offsetWidth,
                        height: canvas.offsetHeight,
                        pixelRatio: window.devicePixelRatio,
                        antialias: true
                    });
                    engine.addGame(game);
                    game.addWorld('main', Sein.GameModeActor, MainScript);
                    return [4 /*yield*/, game.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, game];
            }
        });
    });
}
exports.main = main;


/***/ }),

/***/ "./my-tiny-game/config.js":
/*!********************************!*\
  !*** ./my-tiny-game/config.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  {
    "id": "start",
    "name": "开始",
    "list": [
      {
        "id": "start",
        "name": "开始"
      }
    ]
  },
  {
    "id": "core",
    "name": "核心基础",
    "list": [
      {
        "id": "actor-component",
        "name": "角色与组件"
      },
      {
        "id": "scene-component-compose",
        "name": "场景组件组合"
      },
      {
        "id": "life-cycle",
        "name": "生命周期"
      },
      {
        "id": "unlink-relink",
        "name": "UnLink与ReLink"
      },
      {
        "id": "error-chain",
        "name": "异常链"
      },
      {
        "id": "timer",
        "name": "定时器"
      }
    ]
  },
  {
    "id": "dispatch",
    "name": "场景调度",
    "list": [
      {
        "id": "single-level",
        "name": "单关卡游戏"
      },
      {
        "id": "multiple-level",
        "name": "多关卡游戏"
      },
      {
        "id": "multiple-world",
        "name": "多世界游戏"
      }
    ]
  },
  {
    "id": "render",
    "name": "渲染",
    "list": [
      {
        "id": "layers",
        "name": "图层"
      },
      {
        "id": "2d-sprite",
        "name": "2D精灵"
      },
      {
        "id": "render-order",
        "name": "渲染顺序"
      },
      {
        "id": "fog",
        "name": "雾"
      },
      {
        "id": "advance",
        "name": "进阶渲染"
      },
      {
        "id": "refraction",
        "name": "PBR折射"
      }
    ]
  },
  {
    "id": "material",
    "name": "材质系统",
    "list": [
      {
        "id": "pbr-material",
        "name": "PBR材质"
      },
      {
        "id": "shader-material",
        "name": "Shader材质"
      },
      {
        "id": "raw-shader-material",
        "name": "RawShader材质"
      },
      {
        "id": "shader-chunk",
        "name": "Shader块"
      },
      {
        "id": "material-extension",
        "name": "材质扩展"
      },
      {
        "id": "khr-technique-webgl",
        "name": "KHRTechnique扩展"
      },
      {
        "id": "global-uniform-material",
        "name": "自定义全局Uniform"
      },
      {
        "id": "custom-semantic",
        "name": "自定义Semantic"
      },
      {
        "id": "render-options",
        "name": "修改渲染配置"
      }
    ]
  },
  {
    "id": "atlas",
    "name": "图集",
    "list": [
      {
        "id": "basic",
        "name": "基础"
      },
      {
        "id": "from-grid",
        "name": "通过格子创建"
      },
      {
        "id": "from-texture",
        "name": "通过纹理创建"
      },
      {
        "id": "allocate-release",
        "name": "动态分配释放"
      }
    ]
  },
  {
    "id": "camera",
    "name": "摄像机",
    "list": [
      {
        "id": "perspective-camera",
        "name": "透视摄像机"
      },
      {
        "id": "orthographic-camera",
        "name": "正交摄像机"
      },
      {
        "id": "actor-observe-control",
        "name": "Actor观察控制器"
      },
      {
        "id": "camera-orbit-control",
        "name": "绕轨相机控制器"
      },
      {
        "id": "camera-free-control",
        "name": "自由相机控制器"
      }
    ]
  },
  {
    "id": "light",
    "name": "灯光",
    "list": [
      {
        "id": "ambient-light",
        "name": "环境光"
      },
      {
        "id": "directional-light",
        "name": "平行光"
      },
      {
        "id": "point-light",
        "name": "点光"
      },
      {
        "id": "spot-light",
        "name": "聚光"
      },
      {
        "id": "shadow",
        "name": "实时阴影"
      },
      {
        "id": "baking",
        "name": "烘焙"
      }
    ]
  },
  {
    "id": "bsp",
    "name": "基础几何体",
    "list": [
      {
        "id": "box",
        "name": "立方体"
      },
      {
        "id": "sphere",
        "name": "球体"
      },
      {
        "id": "plane",
        "name": "平面"
      },
      {
        "id": "cylinder",
        "name": "圆柱体"
      },
      {
        "id": "morph",
        "name": "变形体"
      }
    ]
  },
  {
    "id": "event",
    "name": "事件系统",
    "list": [
      {
        "id": "basic",
        "name": "基础"
      },
      {
        "id": "custom-trigger",
        "name": "自定义触发器"
      },
      {
        "id": "global",
        "name": "全局事件"
      }
    ]
  },
  {
    "id": "hid",
    "name": "人体接口设备",
    "list": [
      {
        "id": "touch",
        "name": "触摸"
      }
    ]
  },
  {
    "id": "resource",
    "name": "资源管理",
    "list": [
      {
        "id": "image-loader",
        "name": "图片加载器"
      },
      {
        "id": "texture-loader",
        "name": "纹理加载器"
      },
      {
        "id": "cube-texture-loader",
        "name": "立方体纹理加载器"
      },
      {
        "id": "atlas-loader",
        "name": "图集加载器"
      },
      {
        "id": "gltf-loader",
        "name": "GlTF加载器"
      },
      {
        "id": "free-load",
        "name": "自由加载"
      },
      {
        "id": "glb-load",
        "name": "GLB模型加载"
      },
      {
        "id": "cancel",
        "name": "取消加载"
      },
      {
        "id": "gltf-morph",
        "name": "GlTF变形体"
      },
      {
        "id": "gltf-skeletal",
        "name": "GlTF骨骼"
      }
    ]
  },
  {
    "id": "animation",
    "name": "动画系统",
    "list": [
      {
        "id": "2d-sprite",
        "name": "2D精灵"
      },
      {
        "id": "model",
        "name": "模型动画"
      },
      {
        "id": "tween",
        "name": "Tween动画"
      },
      {
        "id": "custom",
        "name": "自定义动画"
      },
      {
        "id": "events",
        "name": "事件"
      },
      {
        "id": "combination",
        "name": "动画组合"
      }
    ]
  },
  {
    "id": "physic",
    "name": "物理系统",
    "list": [
      {
        "id": "base",
        "name": "基础"
      },
      {
        "id": "collision-events",
        "name": "碰撞事件"
      },
      {
        "id": "pick",
        "name": "拾取"
      },
      {
        "id": "disable",
        "name": "停止运作"
      }
    ]
  },
  {
    "id": "player",
    "name": "玩家系统",
    "list": [
      {
        "id": "ai",
        "name": "AI"
      },
      {
        "id": "player",
        "name": "自定义玩家"
      }
    ]
  },
  {
    "id": "gpu-particle-system",
    "name": "GPU粒子系统",
    "list": [
      {
        "id": "edge-emitter",
        "name": "边界发射器"
      },
      {
        "id": "atlas",
        "name": "图集"
      },
      {
        "id": "wind-emitter",
        "name": "风场发射器"
      },
      {
        "id": "sphere-emitter",
        "name": "球体发射器"
      },
      {
        "id": "hemispheric-emitter",
        "name": "半球发射器"
      },
      {
        "id": "custom-trajectory",
        "name": "自定义轨迹"
      }
    ]
  },
  {
    "id": "post-processing-system",
    "name": "后处理系统",
    "list": [
      {
        "id": "threshold",
        "name": "全局阈值化"
      },
      {
        "id": "local-threshold",
        "name": "局部阈值化"
      },
      {
        "id": "bloom",
        "name": "泛光"
      }
    ]
  }
]);


/***/ }),

/***/ "./my-tiny-game/entries.ts":
/*!*********************************!*\
  !*** ./my-tiny-game/entries.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'start/start': __webpack_require__(/*! ../game/start/start */ "./game/start/start/index.ts"),
    'core/actor-component': __webpack_require__(/*! ../game/core/actor-component */ "./game/core/actor-component/index.ts"),
    'core/scene-component-compose': __webpack_require__(/*! ../game/core/scene-component-compose */ "./game/core/scene-component-compose/index.ts"),
    'core/life-cycle': __webpack_require__(/*! ../game/core/life-cycle */ "./game/core/life-cycle/index.ts"),
    'core/unlink-relink': __webpack_require__(/*! ../game/core/unlink-relink */ "./game/core/unlink-relink/index.ts"),
    'core/error-chain': __webpack_require__(/*! ../game/core/error-chain */ "./game/core/error-chain/index.ts"),
    'core/timer': __webpack_require__(/*! ../game/core/timer */ "./game/core/timer/index.ts"),
    'dispatch/single-level': __webpack_require__(/*! ../game/dispatch/single-level */ "./game/dispatch/single-level/index.ts"),
    'dispatch/multiple-level': __webpack_require__(/*! ../game/dispatch/multiple-level */ "./game/dispatch/multiple-level/index.ts"),
    'dispatch/multiple-world': __webpack_require__(/*! ../game/dispatch/multiple-world */ "./game/dispatch/multiple-world/index.ts"),
    'render/layers': __webpack_require__(/*! ../game/render/layers */ "./game/render/layers/index.ts"),
    'render/2d-sprite': __webpack_require__(/*! ../game/render/2d-sprite */ "./game/render/2d-sprite/index.ts"),
    'render/render-order': __webpack_require__(/*! ../game/render/render-order */ "./game/render/render-order/index.ts"),
    'render/fog': __webpack_require__(/*! ../game/render/fog */ "./game/render/fog/index.ts"),
    'render/advance': __webpack_require__(/*! ../game/render/advance */ "./game/render/advance/index.ts"),
    'render/refraction': __webpack_require__(/*! ../game/render/refraction */ "./game/render/refraction/index.ts"),
    'material/pbr-material': __webpack_require__(/*! ../game/material/pbr-material */ "./game/material/pbr-material/index.ts"),
    'material/shader-material': __webpack_require__(/*! ../game/material/shader-material */ "./game/material/shader-material/index.ts"),
    'material/raw-shader-material': __webpack_require__(/*! ../game/material/raw-shader-material */ "./game/material/raw-shader-material/index.ts"),
    'material/shader-chunk': __webpack_require__(/*! ../game/material/shader-chunk */ "./game/material/shader-chunk/index.ts"),
    'material/material-extension': __webpack_require__(/*! ../game/material/material-extension */ "./game/material/material-extension/index.ts"),
    'material/khr-technique-webgl': __webpack_require__(/*! ../game/material/khr-technique-webgl */ "./game/material/khr-technique-webgl/index.ts"),
    'material/global-uniform-material': __webpack_require__(/*! ../game/material/global-uniform-material */ "./game/material/global-uniform-material/index.ts"),
    'material/custom-semantic': __webpack_require__(/*! ../game/material/custom-semantic */ "./game/material/custom-semantic/index.ts"),
    'material/render-options': __webpack_require__(/*! ../game/material/render-options */ "./game/material/render-options/index.ts"),
    'atlas/basic': __webpack_require__(/*! ../game/atlas/basic */ "./game/atlas/basic/index.ts"),
    'atlas/from-grid': __webpack_require__(/*! ../game/atlas/from-grid */ "./game/atlas/from-grid/index.ts"),
    'atlas/from-texture': __webpack_require__(/*! ../game/atlas/from-texture */ "./game/atlas/from-texture/index.ts"),
    'atlas/allocate-release': __webpack_require__(/*! ../game/atlas/allocate-release */ "./game/atlas/allocate-release/index.ts"),
    'camera/perspective-camera': __webpack_require__(/*! ../game/camera/perspective-camera */ "./game/camera/perspective-camera/index.ts"),
    'camera/orthographic-camera': __webpack_require__(/*! ../game/camera/orthographic-camera */ "./game/camera/orthographic-camera/index.ts"),
    'camera/actor-observe-control': __webpack_require__(/*! ../game/camera/actor-observe-control */ "./game/camera/actor-observe-control/index.ts"),
    'camera/camera-orbit-control': __webpack_require__(/*! ../game/camera/camera-orbit-control */ "./game/camera/camera-orbit-control/index.ts"),
    'camera/camera-free-control': __webpack_require__(/*! ../game/camera/camera-free-control */ "./game/camera/camera-free-control/index.ts"),
    'light/ambient-light': __webpack_require__(/*! ../game/light/ambient-light */ "./game/light/ambient-light/index.ts"),
    'light/directional-light': __webpack_require__(/*! ../game/light/directional-light */ "./game/light/directional-light/index.ts"),
    'light/point-light': __webpack_require__(/*! ../game/light/point-light */ "./game/light/point-light/index.ts"),
    'light/spot-light': __webpack_require__(/*! ../game/light/spot-light */ "./game/light/spot-light/index.ts"),
    'light/shadow': __webpack_require__(/*! ../game/light/shadow */ "./game/light/shadow/index.ts"),
    'light/baking': __webpack_require__(/*! ../game/light/baking */ "./game/light/baking/index.ts"),
    'bsp/box': __webpack_require__(/*! ../game/bsp/box */ "./game/bsp/box/index.ts"),
    'bsp/sphere': __webpack_require__(/*! ../game/bsp/sphere */ "./game/bsp/sphere/index.ts"),
    'bsp/plane': __webpack_require__(/*! ../game/bsp/plane */ "./game/bsp/plane/index.ts"),
    'bsp/cylinder': __webpack_require__(/*! ../game/bsp/cylinder */ "./game/bsp/cylinder/index.ts"),
    'bsp/morph': __webpack_require__(/*! ../game/bsp/morph */ "./game/bsp/morph/index.ts"),
    'event/basic': __webpack_require__(/*! ../game/event/basic */ "./game/event/basic/index.ts"),
    'event/custom-trigger': __webpack_require__(/*! ../game/event/custom-trigger */ "./game/event/custom-trigger/index.ts"),
    'event/global': __webpack_require__(/*! ../game/event/global */ "./game/event/global/index.ts"),
    'hid/touch': __webpack_require__(/*! ../game/hid/touch */ "./game/hid/touch/index.ts"),
    'resource/image-loader': __webpack_require__(/*! ../game/resource/image-loader */ "./game/resource/image-loader/index.ts"),
    'resource/texture-loader': __webpack_require__(/*! ../game/resource/texture-loader */ "./game/resource/texture-loader/index.ts"),
    'resource/cube-texture-loader': __webpack_require__(/*! ../game/resource/cube-texture-loader */ "./game/resource/cube-texture-loader/index.ts"),
    'resource/atlas-loader': __webpack_require__(/*! ../game/resource/atlas-loader */ "./game/resource/atlas-loader/index.ts"),
    'resource/gltf-loader': __webpack_require__(/*! ../game/resource/gltf-loader */ "./game/resource/gltf-loader/index.ts"),
    'resource/free-load': __webpack_require__(/*! ../game/resource/free-load */ "./game/resource/free-load/index.ts"),
    'resource/glb-load': __webpack_require__(/*! ../game/resource/glb-load */ "./game/resource/glb-load/index.ts"),
    'resource/cancel': __webpack_require__(/*! ../game/resource/cancel */ "./game/resource/cancel/index.ts"),
    'resource/gltf-morph': __webpack_require__(/*! ../game/resource/gltf-morph */ "./game/resource/gltf-morph/index.ts"),
    'resource/gltf-skeletal': __webpack_require__(/*! ../game/resource/gltf-skeletal */ "./game/resource/gltf-skeletal/index.ts"),
    'animation/2d-sprite': __webpack_require__(/*! ../game/animation/2d-sprite */ "./game/animation/2d-sprite/index.ts"),
    'animation/model': __webpack_require__(/*! ../game/animation/model */ "./game/animation/model/index.ts"),
    'animation/tween': __webpack_require__(/*! ../game/animation/tween */ "./game/animation/tween/index.ts"),
    'animation/custom': __webpack_require__(/*! ../game/animation/custom */ "./game/animation/custom/index.ts"),
    'animation/events': __webpack_require__(/*! ../game/animation/events */ "./game/animation/events/index.ts"),
    'animation/combination': __webpack_require__(/*! ../game/animation/combination */ "./game/animation/combination/index.ts"),
    'physic/base': __webpack_require__(/*! ../game/physic/base */ "./game/physic/base/index.ts"),
    'physic/collision-events': __webpack_require__(/*! ../game/physic/collision-events */ "./game/physic/collision-events/index.ts"),
    'physic/pick': __webpack_require__(/*! ../game/physic/pick */ "./game/physic/pick/index.ts"),
    'physic/disable': __webpack_require__(/*! ../game/physic/disable */ "./game/physic/disable/index.ts"),
    'player/ai': __webpack_require__(/*! ../game/player/ai */ "./game/player/ai/index.ts"),
    'player/player': __webpack_require__(/*! ../game/player/player */ "./game/player/player/index.ts"),
    'gpu-particle-system/edge-emitter': __webpack_require__(/*! ../game/gpu-particle-system/edge-emitter */ "./game/gpu-particle-system/edge-emitter/index.ts"),
    'gpu-particle-system/atlas': __webpack_require__(/*! ../game/gpu-particle-system/atlas */ "./game/gpu-particle-system/atlas/index.ts"),
    'gpu-particle-system/wind-emitter': __webpack_require__(/*! ../game/gpu-particle-system/wind-emitter */ "./game/gpu-particle-system/wind-emitter/index.ts"),
    'gpu-particle-system/sphere-emitter': __webpack_require__(/*! ../game/gpu-particle-system/sphere-emitter */ "./game/gpu-particle-system/sphere-emitter/index.ts"),
    'gpu-particle-system/hemispheric-emitter': __webpack_require__(/*! ../game/gpu-particle-system/hemispheric-emitter */ "./game/gpu-particle-system/hemispheric-emitter/index.ts"),
    'gpu-particle-system/custom-trajectory': __webpack_require__(/*! ../game/gpu-particle-system/custom-trajectory */ "./game/gpu-particle-system/custom-trajectory/index.ts"),
    'post-processing-system/threshold': __webpack_require__(/*! ../game/post-processing-system/threshold */ "./game/post-processing-system/threshold/index.ts"),
    'post-processing-system/local-threshold': __webpack_require__(/*! ../game/post-processing-system/local-threshold */ "./game/post-processing-system/local-threshold/index.ts"),
    'post-processing-system/bloom': __webpack_require__(/*! ../game/post-processing-system/bloom */ "./game/post-processing-system/bloom/index.ts"),
};


/***/ }),

/***/ "./my-tiny-game/index.ts":
/*!*******************************!*\
  !*** ./my-tiny-game/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var entries_1 = __webpack_require__(/*! ./entries */ "./my-tiny-game/entries.ts");
var sidebar_1 = __webpack_require__(/*! ./sidebar */ "./my-tiny-game/sidebar.tsx");
var game;
function createGame(canvas, cID, id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (game) {
                        game.destroy();
                    }
                    return [4 /*yield*/, entries_1.default[cID + "/" + id].main(canvas)];
                case 1:
                    game = _a.sent();
                    game.onUpdate = function () {
                        if (game.resource.loadDone) {
                            console.log('create');
                            game.onUpdate = function () { };
                            sidebar_1.createSidebar(game, function (c, i) { return createGame(canvas, c, i); });
                        }
                    };
                    return [2 /*return*/];
            }
        });
    });
}
exports.createGame = createGame;


/***/ }),

/***/ "./my-tiny-game/sidebar.tsx":
/*!**********************************!*\
  !*** ./my-tiny-game/sidebar.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : sidebar.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 9/2/2019, 4:53:24 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./webpack-platform-plugin/alias/wx-mini-game.js");
var seinjs_gui_1 = __webpack_require__(/*! seinjs-gui */ "./node_modules/_seinjs-gui@0.8.11@seinjs-gui/lib/index.js");
var config_1 = __webpack_require__(/*! ./config */ "./my-tiny-game/config.js");
;
var data = [];
config_1.default.forEach(function (category) {
    data.push({ type: 'category', text: category.name, cID: category.id, id: '' });
    category.list.forEach(function (item) {
        data.push({ type: 'item', text: item.name, cID: category.id, id: item.id });
    });
});
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            opened: true
        };
        _this.renderItem = function (item, index, transform) {
            return (seinjs_gui_1.React.createElement(Sein.GUI.Label, { key: item.cID + "/" + item.id, shape: new Sein.Vector2(140, 40), x: transform.x, y: transform.y, fontSize: item.type === 'category' ? 16 : 13, background: item.type === 'category' ? new Sein.Color(1, 1, 1, 1) : new Sein.Color(.9, .9, .9, 1), text: item.text, onClick: function () {
                    if (item.type === 'item') {
                        _this.system.event.trigger('Switch', item);
                    }
                } }));
        };
        return _this;
    }
    Root.prototype.render = function () {
        var _this = this;
        var game = this.system.getGame();
        return (seinjs_gui_1.React.createElement(seinjs_gui_1.React.Fragment, null,
            seinjs_gui_1.React.createElement(Sein.GUI.Label, { visibility: !this.state.opened, shape: new Sein.Vector2(140, 60), x: 20, y: 20, fontSize: 13, text: '设置', onClick: function () {
                    console.log('sss');
                    _this.setState({ opened: true });
                } }),
            seinjs_gui_1.React.createElement(Sein.GUI.Container, { visibility: this.state.opened, shape: new Sein.Vector2(game.bound.width, game.bound.height), background: new Sein.Color(.9, .9, .9, 0.4), transparent: true, onClick: function () { return _this.setState({ opened: false }); } }),
            seinjs_gui_1.React.createElement(Sein.GUI.List, { visibility: this.state.opened, shape: new Sein.Vector2(180, game.bound.height), itemWidth: 140, itemHeight: 40, columnNum: 1, rowSpace: 10, padding: new Sein.Vector4(20, 15, 20, 10), background: new Sein.Color(0.2, 0.2, 0.2, 0.7), transparent: true, data: data, renderItem: this.renderItem, scrollBar: true })));
    };
    return Root;
}(Sein.GUI.Component));
function createSidebar(game, onSwitch) {
    var guiSystem = game.addActor('guiSystem', Sein.GUI.SystemActor);
    guiSystem.event.add('Switch', function (args) {
        var cID = args.cID, id = args.id;
        onSwitch(cID, id);
    });
    guiSystem.createLayer('ui', {
        priority: 0,
        element: seinjs_gui_1.React.createElement(Root, null)
    });
}
exports.createSidebar = createSidebar;


/***/ })

/******/ });