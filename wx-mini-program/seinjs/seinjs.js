"use strict";

var _injectCanvas = require("./injectCanvas");

/**
 * @File   : index.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 2019/7/25 上午11:06:59
 * @Description:
 */
Component({
  properties: {
    width: {
      type: Number,
      value: 0
    },
    height: {
      type: Number,
      value: 0
    },
    top: {
      type: Number,
      value: 0
    },
    left: {
      type: Number,
      value: 0
    }
  },
  data: {
    width: 0,
    height: 0,
    dpi: 2
  },
  canvas: null,
  ready: function ready() {
    var _this = this;

    var _wx$window = wx.window,
        h = _wx$window.innerHeight,
        w = _wx$window.innerWidth,
        dpi = _wx$window.devicePixelRatio;
    var data = {
      width: this.properties.width || (isNaN(w) ? parseInt(w) : w),
      height: this.properties.height || (isNaN(h) ? parseInt(h) : h),
      dpi: isNaN(dpi) ? parseInt(dpi) : dpi
    };
    this.setData(data, function () {
      const query = wx.createSelectorQuery();
      query.in(this).select('#sein-canvas').fields({node: true, size: true}).exec((res) => {
        const canvas = res[0].node;
        _this.canvas = (0, _injectCanvas.injectCanvas)(canvas, _this.data);
        _this.triggerEvent('SeinCanvasCreated', _this.canvas);
      });
    });
  },
  detached: function didUnmount() {},
  methods: {
    handleTouchStart: function handleTouchStart(event) {
      (0, _injectCanvas.handleEvent)('touchstart', event);
    },
    handleTouchEnd: function handleTouchEnd(event) {
      (0, _injectCanvas.handleEvent)('touchend', event);
    },
    handleTouchMove: function handleTouchMove(event) {
      (0, _injectCanvas.handleEvent)('touchmove', event);
    },
    handleTouchCancel: function handleTouchCancel(event) {
      (0, _injectCanvas.handleEvent)('touchcancel', event);
    },
    handleClick: function handleClick(event) {
      (0, _injectCanvas.handleEvent)('click', event);
    },
    handleError: function handleError(event) {
      (0, _injectCanvas.handleEvent)('error', event);
    }
  }
});