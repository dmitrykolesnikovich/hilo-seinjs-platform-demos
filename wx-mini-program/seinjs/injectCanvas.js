"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectCanvas = injectCanvas;
exports.handleEvent = handleEvent;

/**
 * @File   : injectCanvas.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 7/02/2020, 7:26:37 PM
 * @Description:
 */
var LISTENERS = {
  click: [],
  touchstart: [],
  touchend: [],
  touchmove: [],
  touchcancel: []
};

function clearListeners() {
  Object.keys(LISTENERS).forEach(function (key) {
    LISTENERS[key] = [];
  });
}

function injectCanvas(canvas, options) {
  clearListeners();
  var dpi = options.dpi;
  canvas.style = {};
  canvas.width = options.width * options.dpi;
  canvas.height = options.height * options.dpi;
  canvas.offsetWidth = options.width;
  canvas.offsetHeight = options.height;

  canvas.getBoundingClientRect = function () {
    var bound = {
      x: 0,
      y: 0,
      width: canvas.width / dpi,
      height: canvas.height / dpi,
      left: 0,
      right: canvas.width / dpi,
      top: 0,
      bottom: canvas.height / dpi
    };
    return bound;
  };

  canvas.addEventListener = function (type, listener) {
    if (!LISTENERS[type]) {
      return;
    }

    LISTENERS[type].push(listener);
  };

  canvas.removeEventListener = function (type, listener) {
    if (!LISTENERS[type]) {
      return;
    }

    var index = LISTENERS[type].indexOf(listener);

    if (index >= 0) {
      LISTENERS[type].splice(index, 1);
    }
  };

  wx.window.mainCanvas = canvas;
  return canvas;
}

var noop = function noop() {};

function convertTouch(touch) {
  var x = touch.x,
      y = touch.y,
      identifier = touch.identifier;
  return {
    identifier: identifier,
    x: x,
    y: y,
    clientX: x,
    clientY: y,
    pageX: x,
    pageY: y,
    screenX: x,
    screenY: y
  };
}

function convertEvent(event) {
  var e = {
    preventDefault: noop,
    stopPropagation: noop,
    target: event.target,
    currentTarget: event.currentTarget
  };

  if (event.type === 'tap') {
    var _event$detail = event.detail,
        x = _event$detail.x,
        y = _event$detail.y;
    e.x = x;
    e.y = y;
    e.clientX = x;
    e.clientY = y;
    e.offsetX = x;
    e.offsetY = y;
    e.pageX = x;
    e.pageY = y;
    e.screenX = x;
    e.screenY = y;
  } else {
    e.changedTouches = event.changedTouches.map(convertTouch);
    e.touches = event.touches.map(convertTouch);
  }

  return e;
}

function handleEvent(type, event) {
  if (!LISTENERS[type]) {
    return;
  }

  var e = convertEvent(event);
  LISTENERS[type].forEach(function (cb) {
    return cb(e);
  });
}