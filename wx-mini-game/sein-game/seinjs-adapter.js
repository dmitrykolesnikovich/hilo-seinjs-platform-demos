function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  : Function('return this')();
if (typeof __g == 'number') __g = global;
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core;
});
var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;
var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) {  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';
var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    out = own ? target[key] : source[key];
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    : IS_BIND && own ? _ctx(out, _global)
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
var _export = $export;

_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty$1 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty, __esModule: true };
});
var _Object$defineProperty = unwrapExports(defineProperty$1);

var toString = {}.toString;
var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

var _toIobject = function (it) {
  return _iobject(_defined(it));
};

var f$1 = {}.propertyIsEnumerable;
var _objectPie = {
	f: f$1
};

var gOPD = Object.getOwnPropertyDescriptor;
var f$2 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) {  }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};
var _objectGopd = {
	f: f$2
};

var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

var $getOwnPropertyDescriptor = _objectGopd.f;
_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(_toIobject(it), key);
  };
});

var $Object$1 = _core.Object;
var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  return $Object$1.getOwnPropertyDescriptor(it, key);
};

var getOwnPropertyDescriptor$1 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyDescriptor, __esModule: true };
});
var _Object$getOwnPropertyDescriptor = unwrapExports(getOwnPropertyDescriptor$1);

var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0;
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _library = true;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: _library ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');
var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');
var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$3 = Object.getOwnPropertySymbols;
var _objectGops = {
	f: f$3
};

var _toObject = function (it) {
  return Object(_defined(it));
};

var $assign = Object.assign;
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign = _core.Object.assign;

var assign$1 = createCommonjsModule(function (module) {
module.exports = { "default": assign, __esModule: true };
});
var _Object$assign = unwrapExports(assign$1);

var performance = void 0;
if (wx.getPerformance) {
    var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
        platform = _wx$getSystemInfoSync.platform;
    var wxPerf = wx.getPerformance();
    var initTime = wxPerf.now();
    var clientPerfAdapter = _Object$assign({}, wxPerf, {
        now: function now() {
            return (wxPerf.now() - initTime) / 1000;
        }
    });
    performance = platform === 'devtools' ? wxPerf : clientPerfAdapter;
} else {
    performance = {
        timeOrigin: Date.now(),
        now: function now() {
            return Date.now() - this.timeOrigin;
        }
    };
}
var performance$1 = performance;

var _wx$getSystemInfoSync$1 = wx.getSystemInfoSync(),
    screenWidth = _wx$getSystemInfoSync$1.screenWidth,
    screenHeight = _wx$getSystemInfoSync$1.screenHeight,
    devicePixelRatio = _wx$getSystemInfoSync$1.devicePixelRatio;
var innerWidth = screenWidth;
var innerHeight = screenHeight;
var screen = {
    width: screenWidth,
    height: screenHeight,
    availWidth: innerWidth,
    availHeight: innerHeight,
    availLeft: 0,
    availTop: 0
};
var scrollX = 0;
var scrollY = 0;
var ontouchstart = null;
var ontouchmove = null;
var ontouchend = null;

function parentNode(obj, level) {
    if (!('parentNode' in obj)) {
        var _parent = void 0;
        if (level === 0) {
            _parent = function _parent() {
                return null;
            };
        } else if (level === 1) {
            _parent = function _parent() {
                return document.documentElement;
            };
        } else {
            _parent = function _parent() {
                return document.body;
            };
        }
        Object.defineProperty(obj, 'parentNode', {
            enumerable: true,
            get: _parent
        });
    }
    if (!('parentElement' in obj)) {
        var _parent2 = void 0;
        if (level === 0) {
            _parent2 = function _parent2() {
                return null;
            };
        } else if (level === 1) {
            _parent2 = function _parent2() {
                return document.documentElement;
            };
        } else {
            _parent2 = function _parent2() {
                return document.body;
            };
        }
        Object.defineProperty(obj, 'parentElement', {
            enumerable: true,
            get: _parent2
        });
    }
}
function style(obj) {
    obj.style = obj.style || {};
    _Object$assign(obj.style, {
        top: '0px',
        left: '0px',
        width: innerWidth + 'px',
        height: innerHeight + 'px',
        margin: '0px',
        padding: '0px'
    });
}
function clientRegion(obj) {
    if (!('clientLeft' in obj)) {
        obj.clientLeft = 0;
        obj.clientTop = 0;
    }
    if (!('clientWidth' in obj)) {
        obj.clientWidth = innerWidth;
        obj.clientHeight = innerHeight;
    }
    if (!('getBoundingClientRect' in obj)) {
        obj.getBoundingClientRect = function () {
            var ret = {
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                width: this.clientWidth,
                height: this.clientHeight
            };
            ret.right = ret.width;
            ret.bottom = ret.height;
            return ret;
        };
    }
}
function offsetRegion(obj) {
    if (!('offsetLeft' in obj)) {
        obj.offsetLeft = 0;
        obj.offsetTop = 0;
    }
    if (!('offsetWidth' in obj)) {
        obj.offsetWidth = innerWidth;
        obj.offsetHeight = innerHeight;
    }
}
function scrollRegion(obj) {
    if (!('scrollLeft' in obj)) {
        obj.scrollLeft = 0;
        obj.scrollTop = 0;
    }
    if (!('scrollWidth' in obj)) {
        obj.scrollWidth = innerWidth;
        obj.scrollHeight = innerHeight;
    }
}
function classList(obj) {
    var noop = function noop() {};
    obj.classList = [];
    obj.classList.add = noop;
    obj.classList.remove = noop;
    obj.classList.contains = noop;
    obj.classList.toggle = noop;
}

var IE_PROTO$1 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;
var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$1)) return O[IE_PROTO$1];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf = _core.Object.getPrototypeOf;

var getPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf, __esModule: true };
});
var _Object$getPrototypeOf = unwrapExports(getPrototypeOf$1);

function noop() {}

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

var IE_PROTO$2 = _sharedKey('IE_PROTO');
var Empty = function () {  };
var PROTOTYPE$1 = 'prototype';
var createDict = function () {
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:';
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};
var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    result[IE_PROTO$2] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

_export(_export.S, 'Object', { create: _objectCreate });

var $Object$2 = _core.Object;
var create = function create(P, D) {
  return $Object$2.create(P, D);
};

var create$1 = createCommonjsModule(function (module) {
module.exports = { "default": create, __esModule: true };
});
var _Object$create = unwrapExports(create$1);

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

var _iterators = {};

var _redefine = _hide;

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');
var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';
var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};
$exports.store = store;
});

var def = _objectDp.f;
var TAG = _wks('toStringTag');
var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });
var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys());
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function () { return this; };
var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      _setToStringTag(IteratorPrototype, TAG, true);
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated);
  this._i = 0;
  this._k = kind;
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');
_iterators.Arguments = _iterators.Array;

var TO_STRING_TAG = _wks('toStringTag');
var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');
for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var SPECIES = _wks('species');
var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;
        else if (res) switch (TYPE) {
          case 3: return true;
          case 5: return val;
          case 6: return index;
          case 2: result.push(val);
        } else if (IS_EVERY) return false;
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');
var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id,
    w: {}
  } });
};
var fastKey = function (it, create) {
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMeta(it);
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMeta(it);
  } return it[META].w;
};
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;
var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var TAG$1 = _wks('toStringTag');
var ARG = _cof(function () { return arguments; }()) == 'Arguments';
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) {  }
};
var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    : ARG ? _cof(O)
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');
var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

var _validateCollection = function (it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var getWeak = _meta.getWeak;
var arrayFind = _arrayMethods(5);
var arrayFindIndex = _arrayMethods(6);
var id$1 = 0;
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
var _collectionWeak = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;
      that._i = id$1++;
      that._l = undefined;
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      'delete': function (key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
        return data && _has(data, this._i) && delete data[this._i];
      },
      has: function has(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
        return data && _has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(_anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

var dP$1 = _objectDp.f;
var each = _arrayMethods(0);
var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      _anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
        _anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP$1(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }
  _setToStringTag(C, NAME);
  O[NAME] = C;
  _export(_export.G + _export.W + _export.F, O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

var es6_weakMap = createCommonjsModule(function (module) {
var each = _arrayMethods(0);
var NATIVE_WEAK_MAP = _validateCollection;
var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject' in _global;
var WEAK_MAP = 'WeakMap';
var getWeak = _meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = _collectionWeak.ufstore;
var InternalMap;
var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};
var methods = {
  get: function get(key) {
    if (_isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  set: function set(key, value) {
    return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
  }
};
var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
  _objectAssign(InternalMap.prototype, methods);
  _meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    _redefine(proto, key, function (a, b) {
      if (_isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      } return method.call(this, a, b);
    });
  });
}
});

var _setCollectionOf = function (COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

_setCollectionOf('WeakMap');

var _setCollectionFrom = function (COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source ) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    _aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) _aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = _ctx(mapFn, arguments[2], 2);
      _forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      _forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

_setCollectionFrom('WeakMap');

var weakMap = _core.WeakMap;

var weakMap$1 = createCommonjsModule(function (module) {
module.exports = { "default": weakMap, __esModule: true };
});
var _WeakMap = unwrapExports(weakMap$1);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var _events = new _WeakMap();
var EventTarget = function () {
    function EventTarget() {
        classCallCheck(this, EventTarget);
        _events.set(this, {});
    }
    createClass(EventTarget, [{
        key: "addEventListener",
        value: function addEventListener(type, listener) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var events = _events.get(this);
            if (!events) {
                events = {};
                _events.set(this, events);
            }
            if (!events[type]) {
                events[type] = [];
            }
            events[type].push(listener);
            if (options.capture) ;
            if (options.once) ;
            if (options.passive) ;
        }
    }, {
        key: "removeEventListener",
        value: function removeEventListener(type, listener) {
            var events = _events.get(this);
            if (events) {
                var listeners = events[type];
                if (listeners && listeners.length > 0) {
                    for (var i = listeners.length; i--; i > 0) {
                        if (listeners[i] === listener) {
                            listeners.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
    }, {
        key: "dispatchEvent",
        value: function dispatchEvent() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var listeners = _events.get(this)[event.type];
            if (listeners) {
                for (var i = 0; i < listeners.length; i++) {
                    listeners[i](event);
                }
            }
        }
    }]);
    return EventTarget;
}();

var Node = function (_EventTarget) {
    inherits(Node, _EventTarget);
    function Node() {
        classCallCheck(this, Node);
        var _this = possibleConstructorReturn(this, (Node.__proto__ || _Object$getPrototypeOf(Node)).call(this));
        _this.childNodes = [];
        return _this;
    }
    createClass(Node, [{
        key: 'appendChild',
        value: function appendChild(node) {
            this.childNodes.push(node);
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode() {
            var copyNode = _Object$create(this);
            _Object$assign(copyNode, this);
            return copyNode;
        }
    }, {
        key: 'removeChild',
        value: function removeChild(node) {
            var index = this.childNodes.findIndex(function (child) {
                return child === node;
            });
            if (index > -1) {
                return this.childNodes.splice(index, 1);
            }
            return null;
        }
    }]);
    return Node;
}(EventTarget);

var Element = function (_Node) {
    inherits(Element, _Node);
    function Element() {
        classCallCheck(this, Element);
        var _this = possibleConstructorReturn(this, (Element.__proto__ || _Object$getPrototypeOf(Element)).call(this));
        _this.className = '';
        _this.children = [];
        return _this;
    }
    createClass(Element, [{
        key: 'setAttribute',
        value: function setAttribute(name, value) {
            this[name] = value;
        }
    }, {
        key: 'getAttribute',
        value: function getAttribute(name) {
            return this[name];
        }
    }, {
        key: 'setAttributeNS',
        value: function setAttributeNS(name, value) {
            this[name] = value;
        }
    }, {
        key: 'getAttributeNS',
        value: function getAttributeNS(name) {
            return this[name];
        }
    }]);
    return Element;
}(Node);

var HTMLElement = function (_Element) {
    inherits(HTMLElement, _Element);
    function HTMLElement() {
        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var level = arguments[1];
        classCallCheck(this, HTMLElement);
        var _this = possibleConstructorReturn(this, (HTMLElement.__proto__ || _Object$getPrototypeOf(HTMLElement)).call(this));
        _this.className = '';
        _this.children = [];
        _this.focus = noop;
        _this.blur = noop;
        _this.insertBefore = noop;
        _this.appendChild = noop;
        _this.removeChild = noop;
        _this.remove = noop;
        _this.innerHTML = '';
        _this.tagName = tagName.toUpperCase();
        parentNode(_this, level);
        style(_this);
        classList(_this);
        clientRegion(_this);
        offsetRegion(_this);
        scrollRegion(_this);
        return _this;
    }
    return HTMLElement;
}(Element);

var HTMLCanvasElement = function (_HTMLElement) {
    inherits(HTMLCanvasElement, _HTMLElement);
    function HTMLCanvasElement() {
        classCallCheck(this, HTMLCanvasElement);
        return possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || _Object$getPrototypeOf(HTMLCanvasElement)).call(this, 'canvas'));
    }
    return HTMLCanvasElement;
}(HTMLElement);

function Canvas() {
    if (!wx.mainCanvasInited) {
        console.warn('You can not use offscreen canvas before main canvas was created !');
        return {
            getContext: function getContext() {
                return {
                    clearColor: function clearColor(r, g, b, a) {
                        this.rgba = [r * 255, g * 255, b * 255, a * 255];
                    },
                    clear: function clear() {},
                    readPixels: function readPixels(x, y, w, h, mode, format, pixels) {
                        pixels[0] = this.rgba[0];
                        pixels[1] = this.rgba[1];
                        pixels[2] = this.rgba[2];
                        pixels[3] = this.rgba[3];
                    }
                };
            }
        };
    }
    return createNormalCanvas();
}
function createNormalCanvas() {
    var canvas = wx.createCanvas();
    canvas.style = {};
    canvas.focus = function () {};
    canvas.blur = function () {};
    canvas.addEventListener = function (type, listener) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        document.addEventListener(type, listener, options);
    };
    canvas.removeEventListener = function (type, listener) {
        document.removeEventListener(type, listener);
    };
    canvas.dispatchEvent = function () {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.log('canvas.dispatchEvent', event.type, event);
    };
    try {
        if (!('tagName' in canvas)) {
            canvas.tagName = 'CANVAS';
        }
        canvas.__proto__.__proto__ = new HTMLCanvasElement();
    } catch (error) {}
    return canvas;
}

var style$1 = {
    "0": "animation-delay",
    "1": "animation-direction",
    "2": "animation-duration",
    "3": "animation-fill-mode",
    "4": "animation-iteration-count",
    "5": "animation-name",
    "6": "animation-play-state",
    "7": "animation-timing-function",
    "8": "background-attachment",
    "9": "background-blend-mode",
    "10": "background-clip",
    "11": "background-color",
    "12": "background-image",
    "13": "background-origin",
    "14": "background-position",
    "15": "background-repeat",
    "16": "background-size",
    "17": "border-bottom-color",
    "18": "border-bottom-left-radius",
    "19": "border-bottom-right-radius",
    "20": "border-bottom-style",
    "21": "border-bottom-width",
    "22": "border-collapse",
    "23": "border-image-outset",
    "24": "border-image-repeat",
    "25": "border-image-slice",
    "26": "border-image-source",
    "27": "border-image-width",
    "28": "border-left-color",
    "29": "border-left-style",
    "30": "border-left-width",
    "31": "border-right-color",
    "32": "border-right-style",
    "33": "border-right-width",
    "34": "border-top-color",
    "35": "border-top-left-radius",
    "36": "border-top-right-radius",
    "37": "border-top-style",
    "38": "border-top-width",
    "39": "bottom",
    "40": "box-shadow",
    "41": "box-sizing",
    "42": "break-after",
    "43": "break-before",
    "44": "break-inside",
    "45": "caption-side",
    "46": "clear",
    "47": "clip",
    "48": "color",
    "49": "content",
    "50": "cursor",
    "51": "direction",
    "52": "display",
    "53": "empty-cells",
    "54": "float",
    "55": "font-family",
    "56": "font-kerning",
    "57": "font-size",
    "58": "font-stretch",
    "59": "font-style",
    "60": "font-variant",
    "61": "font-variant-ligatures",
    "62": "font-variant-caps",
    "63": "font-variant-numeric",
    "64": "font-variant-east-asian",
    "65": "font-weight",
    "66": "height",
    "67": "image-rendering",
    "68": "isolation",
    "69": "justify-items",
    "70": "justify-self",
    "71": "left",
    "72": "letter-spacing",
    "73": "line-height",
    "74": "list-style-image",
    "75": "list-style-position",
    "76": "list-style-type",
    "77": "margin-bottom",
    "78": "margin-left",
    "79": "margin-right",
    "80": "margin-top",
    "81": "max-height",
    "82": "max-width",
    "83": "min-height",
    "84": "min-width",
    "85": "mix-blend-mode",
    "86": "object-fit",
    "87": "object-position",
    "88": "offset-distance",
    "89": "offset-path",
    "90": "offset-rotate",
    "91": "opacity",
    "92": "orphans",
    "93": "outline-color",
    "94": "outline-offset",
    "95": "outline-style",
    "96": "outline-width",
    "97": "overflow-anchor",
    "98": "overflow-wrap",
    "99": "overflow-x",
    "100": "overflow-y",
    "101": "padding-bottom",
    "102": "padding-left",
    "103": "padding-right",
    "104": "padding-top",
    "105": "pointer-events",
    "106": "position",
    "107": "resize",
    "108": "right",
    "109": "scroll-behavior",
    "110": "speak",
    "111": "table-layout",
    "112": "tab-size",
    "113": "text-align",
    "114": "text-align-last",
    "115": "text-decoration",
    "116": "text-decoration-line",
    "117": "text-decoration-style",
    "118": "text-decoration-color",
    "119": "text-decoration-skip-ink",
    "120": "text-underline-position",
    "121": "text-indent",
    "122": "text-rendering",
    "123": "text-shadow",
    "124": "text-size-adjust",
    "125": "text-overflow",
    "126": "text-transform",
    "127": "top",
    "128": "touch-action",
    "129": "transition-delay",
    "130": "transition-duration",
    "131": "transition-property",
    "132": "transition-timing-function",
    "133": "unicode-bidi",
    "134": "vertical-align",
    "135": "visibility",
    "136": "white-space",
    "137": "widows",
    "138": "width",
    "139": "will-change",
    "140": "word-break",
    "141": "word-spacing",
    "142": "word-wrap",
    "143": "z-index",
    "144": "zoom",
    "145": "-webkit-appearance",
    "146": "backface-visibility",
    "147": "-webkit-border-horizontal-spacing",
    "148": "-webkit-border-image",
    "149": "-webkit-border-vertical-spacing",
    "150": "-webkit-box-align",
    "151": "-webkit-box-decoration-break",
    "152": "-webkit-box-direction",
    "153": "-webkit-box-flex",
    "154": "-webkit-box-flex-group",
    "155": "-webkit-box-lines",
    "156": "-webkit-box-ordinal-group",
    "157": "-webkit-box-orient",
    "158": "-webkit-box-pack",
    "159": "-webkit-box-reflect",
    "160": "column-count",
    "161": "column-gap",
    "162": "column-rule-color",
    "163": "column-rule-style",
    "164": "column-rule-width",
    "165": "column-span",
    "166": "column-width",
    "167": "align-content",
    "168": "align-items",
    "169": "align-self",
    "170": "flex-basis",
    "171": "flex-grow",
    "172": "flex-shrink",
    "173": "flex-direction",
    "174": "flex-wrap",
    "175": "justify-content",
    "176": "-webkit-font-smoothing",
    "177": "grid-auto-columns",
    "178": "grid-auto-flow",
    "179": "grid-auto-rows",
    "180": "grid-column-end",
    "181": "grid-column-start",
    "182": "grid-template-areas",
    "183": "grid-template-columns",
    "184": "grid-template-rows",
    "185": "grid-row-end",
    "186": "grid-row-start",
    "187": "grid-column-gap",
    "188": "grid-row-gap",
    "189": "-webkit-highlight",
    "190": "hyphens",
    "191": "-webkit-hyphenate-character",
    "192": "-webkit-line-break",
    "193": "-webkit-line-clamp",
    "194": "-webkit-locale",
    "195": "-webkit-margin-before-collapse",
    "196": "-webkit-margin-after-collapse",
    "197": "-webkit-mask-box-image",
    "198": "-webkit-mask-box-image-outset",
    "199": "-webkit-mask-box-image-repeat",
    "200": "-webkit-mask-box-image-slice",
    "201": "-webkit-mask-box-image-source",
    "202": "-webkit-mask-box-image-width",
    "203": "-webkit-mask-clip",
    "204": "-webkit-mask-composite",
    "205": "-webkit-mask-image",
    "206": "-webkit-mask-origin",
    "207": "-webkit-mask-position",
    "208": "-webkit-mask-repeat",
    "209": "-webkit-mask-size",
    "210": "order",
    "211": "perspective",
    "212": "perspective-origin",
    "213": "-webkit-print-color-adjust",
    "214": "-webkit-rtl-ordering",
    "215": "shape-outside",
    "216": "shape-image-threshold",
    "217": "shape-margin",
    "218": "-webkit-tap-highlight-color",
    "219": "-webkit-text-combine",
    "220": "-webkit-text-decorations-in-effect",
    "221": "-webkit-text-emphasis-color",
    "222": "-webkit-text-emphasis-position",
    "223": "-webkit-text-emphasis-style",
    "224": "-webkit-text-fill-color",
    "225": "-webkit-text-orientation",
    "226": "-webkit-text-security",
    "227": "-webkit-text-stroke-color",
    "228": "-webkit-text-stroke-width",
    "229": "transform",
    "230": "transform-origin",
    "231": "transform-style",
    "232": "-webkit-user-drag",
    "233": "-webkit-user-modify",
    "234": "user-select",
    "235": "-webkit-writing-mode",
    "236": "-webkit-app-region",
    "237": "buffered-rendering",
    "238": "clip-path",
    "239": "clip-rule",
    "240": "mask",
    "241": "filter",
    "242": "flood-color",
    "243": "flood-opacity",
    "244": "lighting-color",
    "245": "stop-color",
    "246": "stop-opacity",
    "247": "color-interpolation",
    "248": "color-interpolation-filters",
    "249": "color-rendering",
    "250": "fill",
    "251": "fill-opacity",
    "252": "fill-rule",
    "253": "marker-end",
    "254": "marker-mid",
    "255": "marker-start",
    "256": "mask-type",
    "257": "shape-rendering",
    "258": "stroke",
    "259": "stroke-dasharray",
    "260": "stroke-dashoffset",
    "261": "stroke-linecap",
    "262": "stroke-linejoin",
    "263": "stroke-miterlimit",
    "264": "stroke-opacity",
    "265": "stroke-width",
    "266": "alignment-baseline",
    "267": "baseline-shift",
    "268": "dominant-baseline",
    "269": "text-anchor",
    "270": "writing-mode",
    "271": "vector-effect",
    "272": "paint-order",
    "273": "d",
    "274": "cx",
    "275": "cy",
    "276": "x",
    "277": "y",
    "278": "r",
    "279": "rx",
    "280": "ry",
    "281": "caret-color",
    "282": "line-break",
    "display": "inline",
    "dominantBaseline": "auto",
    "emptyCells": "show",
    "fill": "rgb(0, 0, 0)",
    "fillOpacity": "1",
    "fillRule": "nonzero",
    "filter": "none",
    "flex": "0 1 auto",
    "flexBasis": "auto",
    "flexDirection": "row",
    "flexFlow": "row nowrap",
    "flexGrow": "0",
    "flexShrink": "1",
    "flexWrap": "nowrap",
    "float": "none",
    "floodColor": "rgb(0, 0, 0)",
    "floodOpacity": "1",
    "font": "normal normal 400 normal 16px / normal \"PingFang SC\"",
    "fontDisplay": "",
    "fontFamily": "\"PingFang SC\"",
    "fontFeatureSettings": "normal",
    "fontKerning": "auto",
    "fontSize": "16px",
    "fontStretch": "100%",
    "fontStyle": "normal",
    "fontVariant": "normal",
    "fontVariantCaps": "normal",
    "fontVariantEastAsian": "normal",
    "fontVariantLigatures": "normal",
    "fontVariantNumeric": "normal",
    "fontVariationSettings": "normal",
    "fontWeight": "400",
    "grid": "none / none / none / row / auto / auto",
    "gridArea": "auto / auto / auto / auto",
    "gridAutoColumns": "auto",
    "gridAutoFlow": "row",
    "gridAutoRows": "auto",
    "gridColumn": "auto / auto",
    "gridColumnEnd": "auto",
    "gridColumnGap": "0px",
    "gridColumnStart": "auto",
    "gridGap": "0px 0px",
    "gridRow": "auto / auto",
    "gridRowEnd": "auto",
    "gridRowGap": "0px",
    "gridRowStart": "auto",
    "gridTemplate": "none / none / none",
    "gridTemplateAreas": "none",
    "gridTemplateColumns": "none",
    "gridTemplateRows": "none",
    "height": "0px",
    "hyphens": "manual",
    "imageRendering": "auto",
    "inlineSize": "0px",
    "isolation": "auto",
    "justifyContent": "normal",
    "justifyItems": "normal",
    "justifySelf": "auto",
    "left": "auto",
    "letterSpacing": "normal",
    "lightingColor": "rgb(255, 255, 255)",
    "lineBreak": "auto",
    "lineHeight": "normal",
    "listStyle": "disc outside none",
    "listStyleImage": "none",
    "listStylePosition": "outside",
    "listStyleType": "disc",
    "margin": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "marginRight": "0px",
    "marginTop": "0px",
    "marker": "",
    "markerEnd": "none",
    "markerMid": "none",
    "markerStart": "none",
    "mask": "none",
    "maskType": "luminance",
    "maxBlockSize": "none",
    "maxHeight": "none",
    "maxInlineSize": "none",
    "maxWidth": "none",
    "maxZoom": "",
    "minBlockSize": "0px",
    "minHeight": "0px",
    "minInlineSize": "0px",
    "minWidth": "0px",
    "minZoom": "",
    "mixBlendMode": "normal",
    "objectFit": "fill",
    "objectPosition": "50% 50%",
    "offset": "none 0px auto 0deg",
    "offsetDistance": "0px",
    "offsetPath": "none",
    "offsetRotate": "auto 0deg",
    "opacity": "1",
    "order": "0",
    "orientation": "",
    "orphans": "2",
    "outline": "rgb(0, 0, 0) none 0px",
    "outlineColor": "rgb(0, 0, 0)",
    "outlineOffset": "0px",
    "outlineStyle": "none",
    "outlineWidth": "0px",
    "overflow": "visible",
    "overflowAnchor": "auto",
    "overflowWrap": "normal",
    "overflowX": "visible",
    "overflowY": "visible",
    "overscrollBehavior": "auto auto",
    "overscrollBehaviorX": "auto",
    "overscrollBehaviorY": "auto",
    "padding": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px",
    "paddingRight": "0px",
    "paddingTop": "0px",
    "page": "",
    "pageBreakAfter": "auto",
    "pageBreakBefore": "auto",
    "pageBreakInside": "auto",
    "paintOrder": "fill stroke markers",
    "perspective": "none",
    "perspectiveOrigin": "0px 0px",
    "placeContent": "normal normal",
    "placeItems": "normal normal",
    "placeSelf": "auto auto",
    "pointerEvents": "auto",
    "position": "static",
    "quotes": "",
    "r": "0px",
    "resize": "none",
    "right": "auto",
    "rx": "auto",
    "ry": "auto",
    "scrollBehavior": "auto",
    "shapeImageThreshold": "0",
    "shapeMargin": "0px",
    "shapeOutside": "none",
    "shapeRendering": "auto",
    "size": "",
    "speak": "normal",
    "src": "",
    "stopColor": "rgb(0, 0, 0)",
    "stopOpacity": "1",
    "stroke": "none",
    "strokeDasharray": "none",
    "strokeDashoffset": "0px",
    "strokeLinecap": "butt",
    "strokeLinejoin": "miter",
    "strokeMiterlimit": "4",
    "strokeOpacity": "1",
    "strokeWidth": "1px",
    "tabSize": "8",
    "tableLayout": "auto",
    "textAlign": "start",
    "textAlignLast": "auto",
    "textAnchor": "start",
    "textCombineUpright": "none",
    "textDecoration": "none solid rgb(0, 0, 0)",
    "textDecorationColor": "rgb(0, 0, 0)",
    "textDecorationLine": "none",
    "textDecorationSkipInk": "auto",
    "textDecorationStyle": "solid",
    "textIndent": "0px",
    "textOrientation": "mixed",
    "textOverflow": "clip",
    "textRendering": "auto",
    "textShadow": "none",
    "textSizeAdjust": "auto",
    "textTransform": "none",
    "textUnderlinePosition": "auto",
    "top": "auto",
    "touchAction": "auto",
    "transform": "none",
    "transformBox": "view-box",
    "transformOrigin": "0px 0px",
    "transformStyle": "flat",
    "transition": "all 0s ease 0s",
    "transitionDelay": "0s",
    "transitionDuration": "0s",
    "transitionProperty": "all",
    "transitionTimingFunction": "ease",
    "unicodeBidi": "normal",
    "unicodeRange": "",
    "userSelect": "auto",
    "userZoom": "",
    "vectorEffect": "none",
    "verticalAlign": "baseline",
    "visibility": "visible",
    "webkitAppRegion": "no-drag",
    "webkitAppearance": "none",
    "webkitBorderAfter": "0px none rgb(0, 0, 0)",
    "webkitBorderAfterColor": "rgb(0, 0, 0)",
    "webkitBorderAfterStyle": "none",
    "webkitBorderAfterWidth": "0px",
    "webkitBorderBefore": "0px none rgb(0, 0, 0)",
    "webkitBorderBeforeColor": "rgb(0, 0, 0)",
    "webkitBorderBeforeStyle": "none",
    "webkitBorderBeforeWidth": "0px",
    "webkitBorderEnd": "0px none rgb(0, 0, 0)",
    "webkitBorderEndColor": "rgb(0, 0, 0)",
    "webkitBorderEndStyle": "none",
    "webkitBorderEndWidth": "0px",
    "webkitBorderHorizontalSpacing": "0px",
    "webkitBorderImage": "none",
    "webkitBorderStart": "0px none rgb(0, 0, 0)",
    "webkitBorderStartColor": "rgb(0, 0, 0)",
    "webkitBorderStartStyle": "none",
    "webkitBorderStartWidth": "0px",
    "webkitBorderVerticalSpacing": "0px",
    "webkitBoxAlign": "stretch",
    "webkitBoxDecorationBreak": "slice",
    "webkitBoxDirection": "normal",
    "webkitBoxFlex": "0",
    "webkitBoxFlexGroup": "1",
    "webkitBoxLines": "single",
    "webkitBoxOrdinalGroup": "1",
    "webkitBoxOrient": "horizontal",
    "webkitBoxPack": "start",
    "webkitBoxReflect": "none",
    "webkitColumnBreakAfter": "auto",
    "webkitColumnBreakBefore": "auto",
    "webkitColumnBreakInside": "auto",
    "webkitFontSizeDelta": "",
    "webkitFontSmoothing": "auto",
    "webkitHighlight": "none",
    "webkitHyphenateCharacter": "auto",
    "webkitLineBreak": "auto",
    "webkitLineClamp": "none",
    "webkitLocale": "auto",
    "webkitLogicalHeight": "0px",
    "webkitLogicalWidth": "0px",
    "webkitMarginAfter": "0px",
    "webkitMarginAfterCollapse": "collapse",
    "webkitMarginBefore": "0px",
    "webkitMarginBeforeCollapse": "collapse",
    "webkitMarginBottomCollapse": "collapse",
    "webkitMarginCollapse": "",
    "webkitMarginEnd": "0px",
    "webkitMarginStart": "0px",
    "webkitMarginTopCollapse": "collapse",
    "webkitMask": "",
    "webkitMaskBoxImage": "none",
    "webkitMaskBoxImageOutset": "0px",
    "webkitMaskBoxImageRepeat": "stretch",
    "webkitMaskBoxImageSlice": "0 fill",
    "webkitMaskBoxImageSource": "none",
    "webkitMaskBoxImageWidth": "auto",
    "webkitMaskClip": "border-box",
    "webkitMaskComposite": "source-over",
    "webkitMaskImage": "none",
    "webkitMaskOrigin": "border-box",
    "webkitMaskPosition": "0% 0%",
    "webkitMaskPositionX": "0%",
    "webkitMaskPositionY": "0%",
    "webkitMaskRepeat": "repeat",
    "webkitMaskRepeatX": "",
    "webkitMaskRepeatY": "",
    "webkitMaskSize": "auto",
    "webkitMaxLogicalHeight": "none",
    "webkitMaxLogicalWidth": "none",
    "webkitMinLogicalHeight": "0px",
    "webkitMinLogicalWidth": "0px",
    "webkitPaddingAfter": "0px",
    "webkitPaddingBefore": "0px",
    "webkitPaddingEnd": "0px",
    "webkitPaddingStart": "0px",
    "webkitPerspectiveOriginX": "",
    "webkitPerspectiveOriginY": "",
    "webkitPrintColorAdjust": "economy",
    "webkitRtlOrdering": "logical",
    "webkitRubyPosition": "before",
    "webkitTapHighlightColor": "rgba(0, 0, 0, 0.4)",
    "webkitTextCombine": "none",
    "webkitTextDecorationsInEffect": "none",
    "webkitTextEmphasis": "",
    "webkitTextEmphasisColor": "rgb(0, 0, 0)",
    "webkitTextEmphasisPosition": "over right",
    "webkitTextEmphasisStyle": "none",
    "webkitTextFillColor": "rgb(0, 0, 0)",
    "webkitTextOrientation": "vertical-right",
    "webkitTextSecurity": "none",
    "webkitTextStroke": "",
    "webkitTextStrokeColor": "rgb(0, 0, 0)",
    "webkitTextStrokeWidth": "0px",
    "webkitTransformOriginX": "",
    "webkitTransformOriginY": "",
    "webkitTransformOriginZ": "",
    "webkitUserDrag": "auto",
    "webkitUserModify": "read-only",
    "webkitWritingMode": "horizontal-tb",
    "whiteSpace": "normal",
    "widows": "2",
    "width": "0px",
    "willChange": "auto",
    "wordBreak": "normal",
    "wordSpacing": "0px",
    "wordWrap": "normal",
    "writingMode": "horizontal-tb",
    "x": "0px",
    "y": "0px",
    "zIndex": "auto",
    "zoom": "1"
};

function getImageComputedStyle(image) {
    var width = image.width;
    var height = image.height;
    var style = _Object$assign(style$1, {
        "display": "inline",
        "position": "static",
        "inlineSize": width + "px",
        "perspectiveOrigin": width / 2 + "px " + height / 2 + "px",
        "transformOrigin": width / 2 + "px " + height / 2 + "px",
        "webkitLogicalWidth": width + "px",
        "webkitLogicalHeight": height + "px",
        "width": width + "px",
        "height": height + "px"
    });
    return style;
}

function getCanvasComputedStyle(canvas) {
    var rect = canvas.getBoundingClientRect();
    var style = _Object$assign(style$1, {
        "display": "inline",
        "position": "static",
        "inlineSize": rect.width + "px",
        "perspectiveOrigin": rect.width / 2 + "px " + rect.height / 2 + "px",
        "transformOrigin": rect.width / 2 + "px " + rect.height / 2 + "px",
        "webkitLogicalWidth": rect.width + "px",
        "webkitLogicalHeight": rect.height + "px",
        "width": rect.width + "px",
        "height": rect.height + "px"
    });
    return style;
}

var Event = function Event(type) {
    classCallCheck(this, Event);
    this.cancelBubble = false;
    this.cancelable = false;
    this.target = null;
    this.currentTarget = null;
    this.preventDefault = noop;
    this.stopPropagation = noop;
    this.type = type;
    this.timeStamp = Date.now();
};

var systemInfo = wx.getSystemInfoSync();
var system = systemInfo.system;
var platform$1 = systemInfo.platform;
var language = systemInfo.language;
var android = system.toLowerCase().indexOf('android') !== -1;
var uaDesc = android ? 'Android; CPU Android 6.0' : 'iPhone; CPU iPhone OS 10_3_1 like Mac OS X';
var ua = 'Mozilla/5.0 (' + uaDesc + ') AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/' + language;
var navigator = {
  platform: platform$1,
  language: language,
  appVersion: '5.0 (' + uaDesc + ') AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
  userAgent: ua,
  onLine: true,
  geolocation: {
    getCurrentPosition: noop,
    watchPosition: noop,
    clearWatch: noop
  }
};
if (wx.onNetworkStatusChange) {
  wx.onNetworkStatusChange(function (event) {
    navigator.onLine = event.isConnected;
  });
}

var $JSON = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
var stringify = function stringify(it) {
  return $JSON.stringify.apply($JSON, arguments);
};

var stringify$1 = createCommonjsModule(function (module) {
module.exports = { "default": stringify, __esModule: true };
});
var _JSON$stringify = unwrapExports(stringify$1);

_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys = _core.Object.keys;

var keys$1 = createCommonjsModule(function (module) {
module.exports = { "default": keys, __esModule: true };
});
var _Object$keys = unwrapExports(keys$1);

var _requestHeader = new _WeakMap();
var _responseHeader = new _WeakMap();
var _requestTask = new _WeakMap();
function _triggerEvent(type) {
    var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    event.target = event.target || this;
    if (typeof this['on' + type] === 'function') {
        this['on' + type].call(this, event);
    }
}
function _changeReadyState(readyState) {
    var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.readyState = readyState;
    event.readyState = readyState;
    _triggerEvent.call(this, 'readystatechange', event);
}
function _isRelativePath(url) {
    return !/^(http|https|ftp|wxfile):\/\/.*/i.test(url);
}
var XMLHttpRequest = function (_EventTarget) {
    inherits(XMLHttpRequest, _EventTarget);
    function XMLHttpRequest() {
        classCallCheck(this, XMLHttpRequest);
        var _this = possibleConstructorReturn(this, (XMLHttpRequest.__proto__ || _Object$getPrototypeOf(XMLHttpRequest)).call(this));
        _this.onabort = null;
        _this.onerror = null;
        _this.onload = null;
        _this.onloadstart = null;
        _this.onprogress = null;
        _this.ontimeout = null;
        _this.onloadend = null;
        _this.onreadystatechange = null;
        _this.readyState = 0;
        _this.response = null;
        _this.responseText = null;
        _this.responseType = 'text';
        _this.dataType = 'string';
        _this.responseXML = null;
        _this.status = 0;
        _this.statusText = '';
        _this.upload = {};
        _this.withCredentials = false;
        _requestHeader.set(_this, {
            'content-type': 'application/x-www-form-urlencoded'
        });
        _responseHeader.set(_this, {});
        return _this;
    }
    createClass(XMLHttpRequest, [{
        key: 'abort',
        value: function abort() {
            var myRequestTask = _requestTask.get(this);
            if (myRequestTask) {
                myRequestTask.abort();
            }
        }
    }, {
        key: 'getAllResponseHeaders',
        value: function getAllResponseHeaders() {
            var responseHeader = _responseHeader.get(this);
            return _Object$keys(responseHeader).map(function (header) {
                return header + ': ' + responseHeader[header];
            }).join('\n');
        }
    }, {
        key: 'getResponseHeader',
        value: function getResponseHeader(header) {
            return _responseHeader.get(this)[header];
        }
    }, {
        key: 'open',
        value: function open(method, url) {
            this._method = method;
            this._url = url;
            _changeReadyState.call(this, XMLHttpRequest.OPENED);
        }
    }, {
        key: 'overrideMimeType',
        value: function overrideMimeType() {}
    }, {
        key: 'send',
        value: function send() {
            var _this2 = this;
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            if (this.readyState !== XMLHttpRequest.OPENED) {
                throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
            } else {
                var url = this._url;
                var header = _requestHeader.get(this);
                var responseType = this.responseType;
                var dataType = this.dataType;
                var relative = _isRelativePath(url);
                var encoding = void 0;
                if (responseType === 'arraybuffer') ; else {
                    encoding = 'utf8';
                }
                delete this.response;
                this.response = null;
                var onSuccess = function onSuccess(_ref) {
                    var data = _ref.data,
                        statusCode = _ref.statusCode,
                        header = _ref.header;
                    statusCode = statusCode === undefined ? 200 : statusCode;
                    if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
                        try {
                            data = _JSON$stringify(data);
                        } catch (e) {
                            data = data;
                        }
                    }
                    _this2.status = statusCode;
                    if (header) {
                        _responseHeader.set(_this2, header);
                    }
                    _triggerEvent.call(_this2, 'loadstart');
                    _changeReadyState.call(_this2, XMLHttpRequest.HEADERS_RECEIVED);
                    _changeReadyState.call(_this2, XMLHttpRequest.LOADING);
                    _this2.response = data;
                    if (data instanceof ArrayBuffer) {
                        Object.defineProperty(_this2, 'responseText', {
                            enumerable: true,
                            configurable: true,
                            get: function get$$1() {
                                throw "InvalidStateError : responseType is " + this.responseType;
                            }
                        });
                    } else {
                        _this2.responseText = data;
                    }
                    _changeReadyState.call(_this2, XMLHttpRequest.DONE);
                    _triggerEvent.call(_this2, 'load');
                    _triggerEvent.call(_this2, 'loadend');
                };
                var onFail = function onFail(_ref2) {
                    var errMsg = _ref2.errMsg;
                    if (errMsg.indexOf('abort') !== -1) {
                        _triggerEvent.call(_this2, 'abort');
                    } else {
                        _triggerEvent.call(_this2, 'error', {
                            message: errMsg
                        });
                    }
                    _triggerEvent.call(_this2, 'loadend');
                    if (relative) {
                        console.warn(errMsg);
                    }
                };
                if (relative) {
                    var fs = wx.getFileSystemManager();
                    var options = {
                        'filePath': url,
                        'success': onSuccess,
                        'fail': onFail
                    };
                    if (encoding) {
                        options['encoding'] = encoding;
                    }
                    fs.readFile(options);
                    return;
                }
                wx.request({
                    data: data,
                    url: url,
                    method: this._method,
                    header: header,
                    dataType: dataType,
                    responseType: responseType,
                    success: onSuccess,
                    fail: onFail
                });
            }
        }
    }, {
        key: 'setRequestHeader',
        value: function setRequestHeader(header, value) {
            var myHeader = _requestHeader.get(this);
            myHeader[header] = value;
            _requestHeader.set(this, myHeader);
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(type, listener) {
            var _this3 = this;
            if (typeof listener !== 'function') {
                return;
            }
            this['on' + type] = function () {
                var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                event.target = event.target || _this3;
                listener.call(_this3, event);
            };
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(type, listener) {
            if (this['on' + type] === listener) {
                this['on' + type] = null;
            }
        }
    }]);
    return XMLHttpRequest;
}(EventTarget);
XMLHttpRequest.UNSEND = 0;
XMLHttpRequest.OPENED = 1;
XMLHttpRequest.HEADERS_RECEIVED = 2;
XMLHttpRequest.LOADING = 3;
XMLHttpRequest.DONE = 4;

var _socketTask = new _WeakMap();
var WebSocket = function () {
  function WebSocket(url) {
    var _this = this;
    var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck(this, WebSocket);
    this.binaryType = '';
    this.bufferedAmount = 0;
    this.extensions = '';
    this.onclose = null;
    this.onerror = null;
    this.onmessage = null;
    this.onopen = null;
    this.protocol = '';
    this.readyState = 3;
    if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
      throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + url + '\' is invalid');
    }
    this.url = url;
    this.readyState = WebSocket.CONNECTING;
    var socketTask = wx.connectSocket({
      url: url,
      protocols: Array.isArray(protocols) ? protocols : [protocols]
    });
    _socketTask.set(this, socketTask);
    socketTask.onClose(function (res) {
      _this.readyState = WebSocket.CLOSED;
      if (typeof _this.onclose === 'function') {
        _this.onclose(res);
      }
    });
    socketTask.onMessage(function (res) {
      if (typeof _this.onmessage === 'function') {
        _this.onmessage(res);
      }
    });
    socketTask.onOpen(function () {
      _this.readyState = WebSocket.OPEN;
      if (typeof _this.onopen === 'function') {
        _this.onopen();
      }
    });
    socketTask.onError(function (res) {
      if (typeof _this.onerror === 'function') {
        _this.onerror(new Error(res.errMsg));
      }
    });
    return this;
  }
  createClass(WebSocket, [{
    key: 'close',
    value: function close(code, reason) {
      this.readyState = WebSocket.CLOSING;
      var socketTask = _socketTask.get(this);
      socketTask.close({
        code: code,
        reason: reason
      });
    }
  }, {
    key: 'send',
    value: function send(data) {
      if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
        throw new TypeError('Failed to send message: The data ' + data + ' is invalid');
      }
      var socketTask = _socketTask.get(this);
      socketTask.send({
        data: data
      });
    }
  }]);
  return WebSocket;
}();
WebSocket.CONNECTING = 0;
WebSocket.OPEN = 1;
WebSocket.CLOSING = 2;
WebSocket.CLOSED = 3;

var Worker = function () {
    function Worker(file) {
        var _this = this;
        classCallCheck(this, Worker);
        this.onmessage = null;
        if (Worker.previousWorker) {
            Worker.previousWorker.terminate();
        }
        Worker.previousWorker = this;
        this._file = file;
        this._worker = wx.createWorker(file);
        this._worker.onMessage(function (res) {
            if (_this.onmessage) {
                _this.onmessage({
                    target: _this,
                    data: res
                });
            }
        });
    }
    createClass(Worker, [{
        key: "postMessage",
        value: function postMessage(message, transferList) {
            this._worker.postMessage(message, transferList);
        }
    }, {
        key: "terminate",
        value: function terminate() {
            this._worker.terminate();
            Worker.previousWorker = null;
        }
    }]);
    return Worker;
}();
Worker.previousWorker = null;

var imageConstructor = wx.createImage().constructor;

function Image () {
    var image = wx.createImage();
    if (!('tagName' in image)) {
        image.tagName = 'IMG';
    }
    parentNode(image);
    classList(image);
    return image;
}

var ImageBitmap = function ImageBitmap() {
    classCallCheck(this, ImageBitmap);
};

var HTMLMediaElement = function (_HTMLElement) {
    inherits(HTMLMediaElement, _HTMLElement);
    function HTMLMediaElement(tagName) {
        classCallCheck(this, HTMLMediaElement);
        return possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || _Object$getPrototypeOf(HTMLMediaElement)).call(this, tagName));
    }
    createClass(HTMLMediaElement, [{
        key: 'addTextTrack',
        value: function addTextTrack() {}
    }, {
        key: 'captureStream',
        value: function captureStream() {}
    }, {
        key: 'fastSeek',
        value: function fastSeek() {}
    }, {
        key: 'load',
        value: function load() {}
    }, {
        key: 'pause',
        value: function pause() {}
    }, {
        key: 'play',
        value: function play() {}
    }]);
    return HTMLMediaElement;
}(HTMLElement);

var HTMLAudioElement = function (_HTMLMediaElement) {
    inherits(HTMLAudioElement, _HTMLMediaElement);
    function HTMLAudioElement() {
        classCallCheck(this, HTMLAudioElement);
        return possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || _Object$getPrototypeOf(HTMLAudioElement)).call(this, 'audio'));
    }
    return HTMLAudioElement;
}(HTMLMediaElement);

var SN_SEED = 1;
var _innerAudioContextMap = {};
var Audio = function (_HTMLAudioElement) {
    inherits(Audio, _HTMLAudioElement);
    function Audio(url) {
        classCallCheck(this, Audio);
        var _this = possibleConstructorReturn(this, (Audio.__proto__ || _Object$getPrototypeOf(Audio)).call(this));
        _this._$sn = SN_SEED++;
        _this.readyState = Audio.HAVE_NOTHING;
        var innerAudioContext = wx.createInnerAudioContext();
        _innerAudioContextMap[_this._$sn] = innerAudioContext;
        _this._canplayEvents = ['load', 'loadend', 'canplay', 'canplaythrough', 'loadedmetadata'];
        innerAudioContext.onCanplay(function () {
            _this._loaded = true;
            _this.readyState = Audio.HAVE_CURRENT_DATA;
            _this._canplayEvents.forEach(function (type) {
                _this.dispatchEvent({ type: type });
            });
        });
        innerAudioContext.onPlay(function () {
            _this._paused = _innerAudioContextMap[_this._$sn].paused;
            _this.dispatchEvent({ type: 'play' });
        });
        innerAudioContext.onPause(function () {
            _this._paused = _innerAudioContextMap[_this._$sn].paused;
            _this.dispatchEvent({ type: 'pause' });
        });
        innerAudioContext.onEnded(function () {
            _this._paused = _innerAudioContextMap[_this._$sn].paused;
            if (_innerAudioContextMap[_this._$sn].loop === false) {
                _this.dispatchEvent({ type: 'ended' });
            }
            _this.readyState = Audio.HAVE_ENOUGH_DATA;
        });
        innerAudioContext.onError(function () {
            _this._paused = _innerAudioContextMap[_this._$sn].paused;
            _this.dispatchEvent({ type: 'error' });
        });
        if (url) {
            _this.src = url;
        } else {
            _this._src = '';
        }
        _this._loop = innerAudioContext.loop;
        _this._autoplay = innerAudioContext.autoplay;
        _this._paused = innerAudioContext.paused;
        _this._volume = innerAudioContext.volume;
        _this._muted = false;
        return _this;
    }
    createClass(Audio, [{
        key: 'addEventListener',
        value: function addEventListener(type, listener) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            type = String(type).toLowerCase();
            get(Audio.prototype.__proto__ || _Object$getPrototypeOf(Audio.prototype), 'addEventListener', this).call(this, type, listener, options);
            if (this._loaded && this._canplayEvents.indexOf(type) !== -1) {
                this.dispatchEvent({ type: type });
            }
        }
    }, {
        key: 'load',
        value: function load() {}
    }, {
        key: 'play',
        value: function play() {
            _innerAudioContextMap[this._$sn].play();
        }
    }, {
        key: 'resume',
        value: function resume() {
            _innerAudioContextMap[this._$sn].resume();
        }
    }, {
        key: 'pause',
        value: function pause() {
            _innerAudioContextMap[this._$sn].pause();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            _innerAudioContextMap[this._$sn].destroy();
        }
    }, {
        key: 'canPlayType',
        value: function canPlayType() {
            var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            if (typeof mediaType !== 'string') {
                return '';
            }
            if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
                return 'probably';
            }
            return '';
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode() {
            var newAudio = new Audio();
            newAudio.loop = this.loop;
            newAudio.autoplay = this.autoplay;
            newAudio.src = this.src;
            return newAudio;
        }
    }, {
        key: 'currentTime',
        get: function get$$1() {
            return _innerAudioContextMap[this._$sn].currentTime;
        },
        set: function set$$1(value) {
            _innerAudioContextMap[this._$sn].seek(value);
        }
    }, {
        key: 'duration',
        get: function get$$1() {
            return _innerAudioContextMap[this._$sn].duration;
        }
    }, {
        key: 'src',
        get: function get$$1() {
            return this._src;
        },
        set: function set$$1(value) {
            this._src = value;
            this._loaded = false;
            this.readyState = Audio.HAVE_NOTHING;
            var innerAudioContext = _innerAudioContextMap[this._$sn];
            innerAudioContext.src = value;
        }
    }, {
        key: 'loop',
        get: function get$$1() {
            return this._loop;
        },
        set: function set$$1(value) {
            this._loop = value;
            _innerAudioContextMap[this._$sn].loop = value;
        }
    }, {
        key: 'autoplay',
        get: function get$$1() {
            return this._autoplay;
        },
        set: function set$$1(value) {
            this._autoplay = value;
            _innerAudioContextMap[this._$sn].autoplay = value;
        }
    }, {
        key: 'paused',
        get: function get$$1() {
            return this._paused;
        }
    }, {
        key: 'volume',
        get: function get$$1() {
            return this._volume;
        },
        set: function set$$1(value) {
            this._volume = value;
            if (!this._muted) {
                _innerAudioContextMap[this._$sn].volume = value;
            }
        }
    }, {
        key: 'muted',
        get: function get$$1() {
            return this._muted;
        },
        set: function set$$1(value) {
            this._muted = value;
            if (value) {
                _innerAudioContextMap[this._$sn].volume = 0;
            } else {
                _innerAudioContextMap[this._$sn].volume = this._volume;
            }
        }
    }]);
    return Audio;
}(HTMLAudioElement);
Audio.HAVE_NOTHING = 0;
Audio.HAVE_METADATA = 1;
Audio.HAVE_CURRENT_DATA = 2;
Audio.HAVE_FUTURE_DATA = 3;
Audio.HAVE_ENOUGH_DATA = 4;

var FileReader = function () {
  function FileReader() {
    classCallCheck(this, FileReader);
  }
  createClass(FileReader, [{
    key: "construct",
    value: function construct() {}
  }]);
  return FileReader;
}();

var HTMLVideoElement = function (_HTMLMediaElement) {
    inherits(HTMLVideoElement, _HTMLMediaElement);
    function HTMLVideoElement() {
        classCallCheck(this, HTMLVideoElement);
        return possibleConstructorReturn(this, (HTMLVideoElement.__proto__ || _Object$getPrototypeOf(HTMLVideoElement)).call(this, 'video'));
    }
    return HTMLVideoElement;
}(HTMLMediaElement);

var WebGLRenderingContext = function WebGLRenderingContext() {
    classCallCheck(this, WebGLRenderingContext);
};

var TouchEvent = function (_Event) {
    inherits(TouchEvent, _Event);
    function TouchEvent(type) {
        classCallCheck(this, TouchEvent);
        var _this = possibleConstructorReturn(this, (TouchEvent.__proto__ || _Object$getPrototypeOf(TouchEvent)).call(this, type));
        _this.touches = [];
        _this.targetTouches = [];
        _this.changedTouches = [];
        _this.target = window.canvas;
        _this.currentTarget = window.canvas;
        return _this;
    }
    return TouchEvent;
}(Event);
function eventHandlerFactory(type) {
    return function (rawEvent) {
        var event = new TouchEvent(type);
        event.changedTouches = rawEvent.changedTouches;
        event.touches = rawEvent.touches;
        event.targetTouches = Array.prototype.slice.call(rawEvent.touches);
        event.timeStamp = rawEvent.timeStamp;
        document.dispatchEvent(event);
    };
}
wx.onTouchStart(eventHandlerFactory('touchstart'));
wx.onTouchMove(eventHandlerFactory('touchmove'));
wx.onTouchEnd(eventHandlerFactory('touchend'));
wx.onTouchCancel(eventHandlerFactory('touchcancel'));

var PointerEvent = function (_Event) {
    inherits(PointerEvent, _Event);
    function PointerEvent(type) {
        classCallCheck(this, PointerEvent);
        var _this = possibleConstructorReturn(this, (PointerEvent.__proto__ || _Object$getPrototypeOf(PointerEvent)).call(this, type));
        _this.target = window.canvas;
        _this.currentTarget = window.canvas;
        return _this;
    }
    return PointerEvent;
}(Event);
var CLONE_PROPS = ['bubbles', 'cancelable', 'view', 'detail', 'screenX', 'screenY', 'clientX', 'clientY', 'ctrlKey', 'altKey', 'shiftKey', 'metaKey', 'button', 'relatedTarget', 'pointerId', 'width', 'height', 'pressure', 'tiltX', 'tiltY', 'pointerType', 'hwTimestamp', 'isPrimary', 'pageX', 'pageY', 'timeStamp'];
var CLONE_DEFAULTS = [false, false, null, null, 0, 0, 0, 0, false, false, false, false, 0, null, 0, 0, 0, 0, 0, 0, 0, '', 0, false, 0, 0, 0];
var POINTER_TYPE = 'touch';
function touchToPointer(type, touch, rawEvent) {
    var e = new PointerEvent(type);
    for (var i = 0; i < CLONE_PROPS.length; i++) {
        var p = CLONE_PROPS[i];
        e[p] = touch[p] || CLONE_DEFAULTS[i];
    }
    e.type = type;
    e.target = window.canvas;
    e.currentTarget = window.canvas;
    e.buttons = typeToButtons(type);
    e.which = e.buttons;
    e.pointerId = (touch.identifier || 0) + 2;
    e.bubbles = true;
    e.cancelable = true;
    e.button = 0;
    e.width = (touch.radiusX || 0.5) * 2;
    e.height = (touch.radiusY || 0.5) * 2;
    e.pressure = touch.force || 0.5;
    e.isPrimary = isPrimaryPointer(touch);
    e.pointerType = POINTER_TYPE;
    e.altKey = rawEvent.altKey;
    e.ctrlKey = rawEvent.ctrlKey;
    e.metaKey = rawEvent.metaKey;
    e.shiftKey = rawEvent.shiftKey;
    if (rawEvent.preventDefault) {
        e.preventDefault = function () {
            rawEvent.preventDefault();
        };
    }
    return e;
}
function typeToButtons(type) {
    var ret = 0;
    if (type === 'touchstart' || type === 'touchmove' || type === 'pointerdown' || type === 'pointermove') {
        ret = 1;
    }
    return ret;
}
var firstPointer = null;
function isPrimaryPointer(touch) {
    return firstPointer === touch.identifier;
}
function setPrimaryPointer(touch) {
    if (firstPointer === null) {
        firstPointer = touch.identifier;
    }
}
function removePrimaryPointer(touch) {
    if (firstPointer === touch.identifier) {
        firstPointer = null;
    }
}
function eventHandlerFactory$1(type) {
    return function (rawEvent) {
        var changedTouches = rawEvent.changedTouches;
        for (var i = 0; i < changedTouches.length; i++) {
            var touch = changedTouches[i];
            if (i === 0 && type === 'pointerdown') {
                setPrimaryPointer(touch);
            } else if (type === 'pointerup' || type === 'pointercancel') {
                removePrimaryPointer(touch);
            }
            var event = touchToPointer(type, touch, rawEvent);
            document.dispatchEvent(event);
        }
    };
}
wx.onTouchStart(eventHandlerFactory$1('pointerdown'));
wx.onTouchMove(eventHandlerFactory$1('pointermove'));
wx.onTouchEnd(eventHandlerFactory$1('pointerup'));
wx.onTouchCancel(eventHandlerFactory$1('pointercancel'));

var MouseEvent = function (_Event) {
    inherits(MouseEvent, _Event);
    function MouseEvent(type) {
        classCallCheck(this, MouseEvent);
        return possibleConstructorReturn(this, (MouseEvent.__proto__ || _Object$getPrototypeOf(MouseEvent)).call(this, type));
    }
    return MouseEvent;
}(Event);

var localStorage = {
    get length() {
        var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
            keys = _wx$getStorageInfoSyn.keys;
        return keys.length;
    },
    key: function key(n) {
        var _wx$getStorageInfoSyn2 = wx.getStorageInfoSync(),
            keys = _wx$getStorageInfoSyn2.keys;
        return keys[n];
    },
    getItem: function getItem(key) {
        var value = wx.getStorageSync(key);
        return value === "" ? null : value;
    },
    setItem: function setItem(key, value) {
        if (window.asyncStorage) {
            return wx.setStorage({
                key: key,
                data: value
            });
        }
        return wx.setStorageSync(key, value);
    },
    removeItem: function removeItem(key) {
        if (window.asyncStorage) {
            return wx.removeStorage({
                key: key
            });
        }
        return wx.removeStorageSync(key);
    },
    clear: function clear() {
        if (window.asyncStorage) {
            return wx.clearStorage();
        }
        return wx.clearStorageSync();
    }
};

var location = {
  href: 'game.js',
  reload: function reload() {},
  replace: function replace(href) {
    this.href = href;
  }
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function InvalidCharacterError(message) {
    this.message = message;
}
InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';
function btoa(input) {
    var str = String(input);
    var output = '';
    for (var block, charCode, idx = 0, map = chars; str.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
        charCode = str.charCodeAt(idx += 3 / 4);
        if (charCode > 0xFF) {
            throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
        block = block << 8 | charCode;
    }
    return output;
}
function atob(input) {
    var str = String(input).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    var output = '';
    for (var bc = 0, bs, buffer, idx = 0; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = chars.indexOf(buffer);
    }
    return output;
}

var idCounter = 0;
var _Symbol = function _Symbol2(key) {
  return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
};
_Symbol.iterator = _Symbol('Symbol.iterator');

var _wx$getSystemInfoSync$2 = wx.getSystemInfoSync(),
    platform$2 = _wx$getSystemInfoSync$2.platform;
function initCanvas(window) {
    module.exports.canvas = window.canvas = createNormalCanvas();
    var _wx$getSystemInfoSync2 = wx.getSystemInfoSync(),
        windowWidth = _wx$getSystemInfoSync2.windowWidth,
        windowHeight = _wx$getSystemInfoSync2.windowHeight;
    canvas.offsetWidth = windowWidth;
    canvas.offsetHeight = windowHeight;
    canvas.getBoundingClientRect = function () {
        return {
            x: 0,
            y: 0,
            width: canvas.offsetWidth,
            height: canvas.offsetHeight,
            left: 0,
            right: canvas.offsetWidth,
            top: 0,
            bottom: canvas.offsetHeight
        };
    };
    wx.mainCanvasInited = true;
    return canvas;
}
function getComputedStyle(dom) {
    var tagName = dom.tagName;
    if (tagName === "CANVAS") {
        return getCanvasComputedStyle(dom);
    } else if (tagName === "IMG") {
        return getImageComputedStyle(dom);
    }
    return style$1;
}
function scrollTo(x, y) {}
function scrollBy(dx, dy) {
    window.scrollTo(window.scrollX + dx, window.scrollY + dy);
}
function alert(msg) {
    console.log(msg);
}
function focus() {}
function blur() {}
if (platform$2 !== 'devtools') {
    var wxPerf$1 = wx.getPerformance ? wx.getPerformance() : Date;
    var consoleTimers = {};
    console.time = function (name) {
        consoleTimers[name] = wxPerf$1.now();
    };
    console.timeEnd = function (name) {
        var timeStart = consoleTimers[name];
        if (!timeStart) {
            return;
        }
        var timeElapsed = wxPerf$1.now() - timeStart;
        console.log(name + ": " + timeElapsed / 1000 + "ms");
        delete consoleTimers[name];
    };
}
function eventHandlerFactory$2() {
    return function (res) {
        var event = new Event('resize');
        event.target = window;
        event.timeStamp = Date.now();
        event.res = res;
        event.windowWidth = res.windowWidth;
        event.windowHeight = res.windowHeight;
        document.dispatchEvent(event);
    };
}
if (wx.onWindowResize) {
    wx.onWindowResize(eventHandlerFactory$2());
}
var _setTimeout = setTimeout;
var _clearTimeout = clearTimeout;
var _setInterval = setInterval;
var _clearInterval = clearInterval;
var _requestAnimationFrame = requestAnimationFrame;
var _cancelAnimationFrame = cancelAnimationFrame;

var window$1 = /*#__PURE__*/Object.freeze({
	HTMLCanvasElement: HTMLCanvasElement,
	initCanvas: initCanvas,
	alert: alert,
	focus: focus,
	blur: blur,
	getComputedStyle: getComputedStyle,
	scrollTo: scrollTo,
	scrollBy: scrollBy,
	setTimeout: _setTimeout,
	clearTimeout: _clearTimeout,
	setInterval: _setInterval,
	clearInterval: _clearInterval,
	requestAnimationFrame: _requestAnimationFrame,
	cancelAnimationFrame: _cancelAnimationFrame,
	navigator: navigator,
	XMLHttpRequest: XMLHttpRequest,
	WebSocket: WebSocket,
	Worker: Worker,
	Image: Image,
	ImageBitmap: ImageBitmap,
	Audio: Audio,
	FileReader: FileReader,
	Element: Element,
	HTMLElement: HTMLElement,
	HTMLImageElement: imageConstructor,
	HTMLMediaElement: HTMLMediaElement,
	HTMLAudioElement: HTMLAudioElement,
	HTMLVideoElement: HTMLVideoElement,
	WebGLRenderingContext: WebGLRenderingContext,
	TouchEvent: TouchEvent,
	PointerEvent: PointerEvent,
	MouseEvent: MouseEvent,
	localStorage: localStorage,
	location: location,
	btoa: btoa,
	atob: atob,
	Symbol: _Symbol,
	innerWidth: innerWidth,
	innerHeight: innerHeight,
	devicePixelRatio: devicePixelRatio,
	screen: screen,
	scrollX: scrollX,
	scrollY: scrollY,
	ontouchstart: ontouchstart,
	ontouchmove: ontouchmove,
	ontouchend: ontouchend,
	performance: performance$1
});

var DocumentElement = function (_HTMLElement) {
    inherits(DocumentElement, _HTMLElement);
    function DocumentElement() {
        classCallCheck(this, DocumentElement);
        return possibleConstructorReturn(this, (DocumentElement.__proto__ || _Object$getPrototypeOf(DocumentElement)).call(this, 'html', 0));
    }
    return DocumentElement;
}(HTMLElement);

var HTMLAnchorElement = function (_HTMLElement) {
	inherits(HTMLAnchorElement, _HTMLElement);
	function HTMLAnchorElement() {
		var _ref;
		var _temp, _this, _ret;
		classCallCheck(this, HTMLAnchorElement);
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}
		return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HTMLAnchorElement.__proto__ || _Object$getPrototypeOf(HTMLAnchorElement)).call.apply(_ref, [this].concat(args))), _this), _this._href = '', _this._protocol = '', _this._host = '', _this._search = '', _this._hash = '', _this._port = '', _this._pathname = '', _this._origin = '', _temp), possibleConstructorReturn(_this, _ret);
	}
	createClass(HTMLAnchorElement, [{
		key: 'href',
		set: function set$$1(value) {
			if (value.substring(0, 2) == '//') {
				value = 'https:' + value;
			}
			if (/^http/.test(value)) {
				var _res = /^(http:|https:)\/\/(.*)/.exec(value);
				this._origin = this._protocol = _res[1];
				value = _res[2];
				_res = /(.+?)\/(.+)/.exec(value);
				if (_res) {
					this._host = value[1];
					this._origin += this._host;
					value = _res[2];
					_res = /(:*)\/(.*)/.exec(value);
					if (_res) {
						this._port = _res[2];
						value = _res[1];
					}
				}
			}
			var res = /(.*)(#.*)/.exec(value);
			if (res) {
				this._hash = res[2];
				value = res[1];
			}
			res = /(.*)(\?.*)/.exec(value);
			if (res) {
				this.search = res[2];
				value = res[1];
			}
			if (value[0] !== '/') {
				value = '/' + value;
			}
			this._pathname = value + this._search + this._hash;
			this._href = this._origin + this._pathname;
		},
		get: function get$$1() {
			return this._href;
		}
	}, {
		key: 'protocol',
		get: function get$$1() {
			return this._protocol;
		}
	}, {
		key: 'host',
		get: function get$$1() {
			return this._host;
		}
	}, {
		key: 'search',
		get: function get$$1() {
			return this._search;
		}
	}, {
		key: 'hash',
		get: function get$$1() {
			return this._hash;
		}
	}, {
		key: 'port',
		get: function get$$1() {
			return this._port;
		}
	}, {
		key: 'pathname',
		get: function get$$1() {
			return this._pathname;
		}
	}, {
		key: 'origin',
		get: function get$$1() {
			return this._origin ? this._origin : 'null';
		}
	}]);
	return HTMLAnchorElement;
}(HTMLElement);

var Body = function (_HTMLElement) {
    inherits(Body, _HTMLElement);
    function Body() {
        classCallCheck(this, Body);
        return possibleConstructorReturn(this, (Body.__proto__ || _Object$getPrototypeOf(Body)).call(this, 'body', 0));
    }
    return Body;
}(HTMLElement);

var events = {};
var document$3 = {
    readyState: 'complete',
    visibilityState: 'visible',
    hidden: false,
    fullscreen: true,
    location: location,
    scripts: [],
    style: {},
    ontouchstart: null,
    ontouchmove: null,
    ontouchend: null,
    onvisibilitychange: null,
    parentNode: null,
    parentElement: null,
    createElement: function createElement(tagName) {
        tagName = tagName.toLowerCase();
        if (tagName === 'canvas') {
            return new Canvas();
        } else if (tagName === 'audio') {
            return new Audio();
        } else if (tagName === 'img') {
            return new Image();
        } else if (tagName === 'video') {
            return new HTMLVideoElement();
        } else if (tagName === 'a') {
            return new HTMLAnchorElement();
        }
        return new HTMLElement(tagName);
    },
    createElementNS: function createElementNS(nameSpace, tagName) {
        return this.createElement(tagName);
    },
    createTextNode: function createTextNode(text) {
        return text;
    },
    getElementById: function getElementById(id) {
        if (id === undefined) {
            return undefined;
        }
        return null;
    },
    getElementsByTagName: function getElementsByTagName(tagName) {
        tagName = tagName.toLowerCase();
        if (tagName === 'head') {
            return [document$3.head];
        } else if (tagName === 'body') {
            return [document$3.body];
        } else if (tagName === 'canvas') {
            return [undefined];
        }
        return [];
    },
    getElementsByTagNameNS: function getElementsByTagNameNS(nameSpace, tagName) {
        return this.getElementsByTagName(tagName);
    },
    getElementsByName: function getElementsByName(tagName) {
        if (tagName === 'head') {
            return [document$3.head];
        } else if (tagName === 'body') {
            return [document$3.body];
        } else if (tagName === 'canvas') {
            return [undefined];
        }
        return [];
    },
    querySelector: function querySelector(query) {
        if (query === 'head') {
            return document$3.head;
        } else if (query === 'body') {
            return document$3.body;
        } else if (query === 'canvas') {
            return undefined;
        } else if (query === '#' + undefined) {
            return undefined;
        }
        return null;
    },
    querySelectorAll: function querySelectorAll(query) {
        if (query === 'head') {
            return [document$3.head];
        } else if (query === 'body') {
            return [document$3.body];
        } else if (query === 'canvas') {
            return [undefined];
        }
        return [];
    },
    addEventListener: function addEventListener(type, listener) {
        if (!events[type]) {
            events[type] = [];
        }
        events[type].push(listener);
    },
    removeEventListener: function removeEventListener(type, listener) {
        var listeners = events[type];
        if (listeners && listeners.length > 0) {
            for (var i = listeners.length; i--; i > 0) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    },
    dispatchEvent: function dispatchEvent(event) {
        var type = event.type;
        var listeners = events[type];
        if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
                listeners[i](event);
            }
        }
        if (event.target && typeof event.target['on' + type] === 'function') {
            event.target['on' + type](event);
        }
    }
};
document$3.documentElement = new DocumentElement();
document$3.head = new HTMLElement('head');
document$3.body = new Body();
function onVisibilityChange(visible) {
    return function () {
        document$3.visibilityState = visible ? 'visible' : 'hidden';
        var hidden = !visible;
        if (document$3.hidden === hidden) {
            return;
        }
        document$3.hidden = hidden;
        var event = new Event('visibilitychange');
        event.target = document$3;
        event.timeStamp = Date.now();
        document$3.dispatchEvent(event);
    };
}
if (wx.onHide) {
    wx.onHide(onVisibilityChange(false));
}
if (wx.onShow) {
    wx.onShow(onVisibilityChange(true));
}

var _window = _extends({}, window$1);
var global$1 = GameGlobal;
GameGlobal.global = GameGlobal.global || global$1;
function inject() {
    _window.document = document$3;
    _window.addEventListener = function (type, listener) {
        _window.document.addEventListener(type, listener);
    };
    _window.removeEventListener = function (type, listener) {
        _window.document.removeEventListener(type, listener);
    };
    _window.dispatchEvent = function () {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.log('window.dispatchEvent', event.type, event);
    };
    var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
        platform = _wx$getSystemInfoSync.platform;
    if (typeof __devtoolssubcontext === 'undefined' && platform === 'devtools') {
        for (var key in _window) {
            var descriptor = _Object$getOwnPropertyDescriptor(global$1, key);
            if (!descriptor || descriptor.configurable === true) {
                _Object$defineProperty(window, key, {
                    value: _window[key]
                });
            }
        }
        for (var _key in _window.document) {
            var _descriptor = _Object$getOwnPropertyDescriptor(global$1.document, _key);
            if (!_descriptor || _descriptor.configurable === true) {
                _Object$defineProperty(global$1.document, _key, {
                    value: _window.document[_key]
                });
            }
        }
        window.parent = window;
        window.wx = wx;
    } else {
        _window.wx = wx;
        for (var _key2 in _window) {
            global$1[_key2] = _window[_key2];
        }
        global$1.window = global$1;
        global$1.top = global$1.parent = global$1;
    }
}
if (!GameGlobal.__isAdapterInjected) {
    GameGlobal.__isAdapterInjected = true;
    inject();
}
