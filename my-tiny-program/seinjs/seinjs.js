"use strict";

var _injectCanvas = require("./injectCanvas");

/**
 * @File   : index.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 2019/7/25 上午11:06:59
 * @Description:
 */
Component({
  data: {
    width: 0,
    height: 0,
    dpi: 2,
    enableNative: true
  },
  props: {
    width: 0,
    height: 0,
    onSeinCanvasCreated: function onSeinCanvasCreated(canvas) {}
  },
  canvas: null,
  didMount: function didMount() {
    var _this = this;

    var _my$window = my.window,
        h = _my$window.innerHeight,
        w = _my$window.innerWidth,
        dpi = _my$window.pixelRatio;
    var data = {
      width: this.props.width || (isNaN(w) ? parseInt(w) : w),
      height: this.props.height || (isNaN(h) ? parseInt(h) : h),
      dpi: isNaN(dpi) ? parseInt(dpi) : dpi
    };
    this.setData(data, function () {
      my._createCanvas({
        id: 'canvas',
        // canvas dom id
        success: async function success(canvas) {
          _this.canvas = (0, _injectCanvas.injectCanvas)(canvas, _this.data);

          _this.props.onSeinCanvasCreated(_this.canvas);
        }
      });
    });
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},
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
    }
  }
});