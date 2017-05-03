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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(36);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is a Node Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Node Buffer, otherwise false
 */
function isBuffer(val) {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer && Buffer.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37).Buffer))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.4.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(13),
    IE8_DOM_DEFINE = __webpack_require__(40),
    toPrimitive = __webpack_require__(28),
    dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(92),
    defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(5),
    createDesc = __webpack_require__(15);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(26)('wks'),
    uid = __webpack_require__(16),
    _Symbol = __webpack_require__(2).Symbol,
    USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2),
    core = __webpack_require__(1),
    ctx = __webpack_require__(89),
    hide = __webpack_require__(7),
    PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      IS_WRAP = type & $export.W,
      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
      expProto = exports[PROTOTYPE],
      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
      key,
      own,
      out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(44),
    enumBugKeys = __webpack_require__(19);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context = context || (this.$vnode && this.$vnode.ssrContext)
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    // inject component registration as beforeCreate hook
    var existing = options.beforeCreate
    options.beforeCreate = existing
      ? [].concat(existing, hook)
      : [hook]
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0,
    px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(69);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(32);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(32);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13),
    dPs = __webpack_require__(98),
    enumBugKeys = __webpack_require__(19),
    IE_PROTO = __webpack_require__(25)('IE_PROTO'),
    Empty = function Empty() {/* empty */},
    PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(39)('iframe'),
      i = enumBugKeys.length,
      lt = '<',
      gt = '>',
      iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(91).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(5).f,
    has = __webpack_require__(4),
    TAG = __webpack_require__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(26)('keys'),
    uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2),
    SHARED = '__core-js_shared__',
    store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil,
    floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2),
    core = __webpack_require__(1),
    LIBRARY = __webpack_require__(21),
    wksExt = __webpack_require__(30),
    defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(8);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(61);
var buildURL = __webpack_require__(64);
var parseHeaders = __webpack_require__(70);
var isURLSameOrigin = __webpack_require__(68);
var createError = __webpack_require__(35);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(63);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(66);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(60);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(79);
var ieee754 = __webpack_require__(117);
var isArray = __webpack_require__(118);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(14),
    document = __webpack_require__(2).document
// in old IE typeof document.createElement is 'object'
,
    is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(3) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(39)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(21),
    $export = __webpack_require__(9),
    redefine = __webpack_require__(45),
    hide = __webpack_require__(7),
    has = __webpack_require__(4),
    Iterators = __webpack_require__(20),
    $iterCreate = __webpack_require__(94),
    setToStringTag = __webpack_require__(24),
    getPrototypeOf = __webpack_require__(101),
    ITERATOR = __webpack_require__(8)('iterator'),
    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
,
    FF_ITERATOR = '@@iterator',
    KEYS = 'keys',
    VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator',
      DEF_VALUES = DEFAULT == VALUES,
      VALUES_BUG = false,
      proto = Base.prototype,
      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
      $default = $native || getMethod(DEFAULT),
      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
      methods,
      key,
      IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(44),
    hiddenKeys = __webpack_require__(19).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(4),
    toIObject = __webpack_require__(6),
    arrayIndexOf = __webpack_require__(88)(false),
    IE_PROTO = __webpack_require__(25)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object),
      i = 0,
      result = [],
      key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(7);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.3.0
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

/**
 * Check if value is primitive
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number';
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

var toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return toString.call(v) === '[object RegExp]';
}

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString(val) {
  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});

/**
 * Simple bind, faster than native
 */
function bind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn;
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * Perform no operation.
 */
function noop() {}

/**
 * Always return false.
 */
var no = function no() {
  return false;
};

/**
 * Return same value
 */
var identity = function identity(_) {
  return _;
};

/**
 * Generate a static keys string from compiler modules.
 */

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch (e) {
      // possible circular reference
      return a === b;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

/**
 * Ensure a function is called only once.
 */
function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = ['component', 'directive', 'filter'];

var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'];

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}

var warn = noop;
var tip = noop;
var formatComponentName;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function warn(msg, vm) {
    if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    var name = typeof vm === 'string' ? vm : typeof vm === 'function' && vm.options ? vm.options.name : vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function repeat(str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) {
        res += str;
      }
      if (n > 1) {
        str += str;
      }
      n >>= 1;
    }
    return res;
  };

  var generateComponentTrace = function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}

function handleError(err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function logError(err) {
      console.error(err);
    };
    timerFunc = function timerFunc() {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function timerFunc() {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      });
    }
  };
}();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

/*  */

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep() {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!isObject(value)) {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1(obj, key, val, customSetter) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, childVal) : res;
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */
var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Validate component names
 */
function checkComponents(options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options) {
  var props = options.props;
  if (!props) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) {
    return assets[id];
  }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/*  */

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isType(type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type);
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true;
    }
  }
  /* istanbul ignore next */
  return false;
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function warnNonPresent(target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function mark(tag) {
      return perf.mark(tag);
    };
    measure = function measure(name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function createEmptyVNode() {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned;
}

function cloneVNodes(vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res;
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, vm) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook(def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
    } else if (isPrimitive(c)) {
      if (isDef(last) && isDef(last.text)) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isDef(c.text) && isDef(last) && isDef(last.text)) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}

/*  */

function ensureCtor(comp, base) {
  return isObject(comp) ? base.extend(comp) : comp;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function forceRender() {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            reject(process.env.NODE_ENV !== 'production' ? "timeout (" + res.timeout + "ms)" : null);
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/*  */

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c;
      }
    }
  }
}

/*  */

/*  */

function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm;
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
  var slots = {};
  if (!children) {
    return slots;
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) && child.data && child.data.slot != null) {
      var name = child.data.slot;
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment || node.text === ' ';
}

function resolveScopedSlots(fns) {
  var res = {};
  for (var i = 0; i < fns.length; i++) {
    res[fns[i][0]] = fns[i][1];
  }
  return res;
}

/*  */

var activeInstance = null;

function initLifecycle(vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
      , vm.$options._parentElm, vm.$options._refElm);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function updateComponent() {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(name + " render", startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function updateComponent() {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  parentVnode.data.scopedSlots || // has new scoped slots
  vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, hook + " hook");
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdateHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdateHooks(queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher(vm, expOrFn, cb, options) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }
  this.value = this.lazy ? undefined : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value;
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown() {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse(val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if (!isA && !isObject(val) || !Object.isExtensible(val)) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch) {
    initWatch(vm, opts.watch);
  }
}

var isReservedProp = {
  key: 1,
  ref: 1,
  slot: 1
};

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function loop(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedProp[key] || config.isReservedAttr(key)) {
        warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) {
    loop(key);
  }observerState.shouldConvert = true;
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData(data, vm) {
  try {
    return data.call(vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production') {
      if (getter === undefined) {
        warn("No getter function has been defined for computed property \"" + key + "\".", vm);
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
      if (props && hasOwn(props, key)) {
        warn("method \"" + key + "\" has already been defined as a prop.", vm);
      }
    }
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/*  */

function initProvide(vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var result = Object.create(null);
    var keys = isArray ? inject : hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
    }
    return result;
  }
}

/*  */

function createFunctionalComponent(Ctor, propsData, data, context, children) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }
    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function h(a, b, c, d) {
    return createElement(_context, a, b, c, d, true);
  };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function slots() {
      return resolveSlots(children, context);
    }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init(vnode, hydrating, parentElm, refElm) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },

  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn("Invalid Component definition: " + String(Ctor), context);
    }
    return;
  }

  // async component
  if (isUndef(Ctor.cid)) {
    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
    if (Ctor === undefined) {
      // return nothing if this is indeed an async component
      // wait for the callback to trigger parent update.
      return;
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent, // activeInstance in lifecycle state
parentElm, refElm) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options);
}

function mergeHooks(data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1(one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  };
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    process.env.NODE_ENV !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode !== undefined) {
    if (ns) {
      applyNS(vnode, ns);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return;
  }
  if (Array.isArray(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret;
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
      slotNodes._rendered = true;
    }
    return slotNodes || fallback;
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes(eventKeyCode, key, builtInAlias) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1;
  } else {
    return keyCodes !== eventKeyCode;
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data;
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, "__static__" + index, false);
  return tree;
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender(vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };
}

function renderMixin(Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode;
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = _toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

var uid = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

function Vue$3(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };
}

/*  */

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
      }
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function pruneCache(cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry(vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created() {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed() {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include(val) {
      pruneCache(this.cache, this._vnode, function (name) {
        return matches(val, name);
      });
    },
    exclude: function exclude(val) {
      pruneCache(this.cache, this._vnode, function (name) {
        return !matches(val, name);
      });
    }
  },

  render: function render() {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
        return vnode;
      }
      var key = vnode.key == null
      // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode;
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Vue$3.version = '2.3.0';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};

/*  */

function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function genClassFromData(data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (isUndef(value)) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  var res = '';
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(value[i])) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1);
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) {
        res += key + ' ';
      }
    }
    return res.slice(0, -1);
  }
  /* istanbul ignore next */
  return res;
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

/*  */

function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm;
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b);
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }
      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }
      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }
      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate(elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false;
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true /* hydrating */);
      }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break;
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false;
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (process.env.NODE_ENV !== 'production') {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(vnode, insertedVnodeQueue,
        // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function callInsert() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);
  if (!dirs) {
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];

/*  */

function updateAttrs(oldVnode, vnode) {
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function wrapFilter(exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return "_f(\"" + filter + "\")(" + exp + ")";
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return "_f(\"" + name + "\")(" + exp + "," + args;
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1(event, _handler, once$$1, capture, passive) {
  if (once$$1) {
    var oldHandler = _handler;
    var _target = target$1; // save current target element in closure
    _handler = function handler(ev) {
      var res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, _handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(event, _handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, vnode, checkVal) {
  return !elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
}

function isDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal;
}

function isInputChanged(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal);
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim();
  }
  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle ? extend(data.staticStyle, style) : style;
}

// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res;
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function setProp(el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && prop in testEl.style) {
    return prop;
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */
  if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

/*  */

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return;
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var ref = data;
  var css = ref.css;
  var type = ref.type;
  var enterClass = ref.enterClass;
  var enterToClass = ref.enterToClass;
  var enterActiveClass = ref.enterActiveClass;
  var appearClass = ref.appearClass;
  var appearToClass = ref.appearToClass;
  var appearActiveClass = ref.appearActiveClass;
  var beforeEnter = ref.beforeEnter;
  var enter = ref.enter;
  var afterEnter = ref.afterEnter;
  var enterCancelled = ref.enterCancelled;
  var beforeAppear = ref.beforeAppear;
  var appear = ref.appear;
  var afterAppear = ref.afterAppear;
  var appearCancelled = ref.appearCancelled;
  var duration = ref.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm();
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return;
  }

  var ref = data;
  var css = ref.css;
  var type = ref.type;
  var leaveClass = ref.leaveClass;
  var leaveToClass = ref.leaveToClass;
  var leaveActiveClass = ref.leaveActiveClass;
  var beforeLeave = ref.beforeLeave;
  var leave = ref.leave;
  var afterLeave = ref.afterLeave;
  var leaveCancelled = ref.leaveCancelled;
  var delayLeave = ref.delayLeave;
  var duration = ref.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if (process.env.NODE_ENV !== 'production' && explicitLeaveDuration != null) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted(el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function cb() {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple ? binding.value.some(function (v) {
        return hasNoMatchingOption(v, el.options);
      }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false;
    }
  }
  return true;
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render(h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return;
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) {
      return c.tag;
    });
    /* istanbul ignore if */
    if (!children.length) {
      return;
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) {
      return d.name === 'show';
    })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function performLeave() {
          delayedLeave();
        };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },

  beforeUpdate: function beforeUpdate() {
    // force removing pass
    this.__patch__(this._vnode, this.kept, false, // hydrating
    true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      if (this._hasMove != null) {
        return this._hasMove;
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
  if (process.env.NODE_ENV !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
  }
}, 0);

/*  */

exports.default = Vue$3;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31), __webpack_require__(47)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(135),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alexey/PhpstormProjects/brokers-webview/app/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87d40e68", Component.options)
  } else {
    hotAPI.reload("data-v-87d40e68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Afghanistan",
		"alpha-2": "AF",
		"alpha-3": "AFG",
		"country-code": "004",
		"iso_3166-2": "ISO 3166-2:AF",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Åland Islands",
		"alpha-2": "AX",
		"alpha-3": "ALA",
		"country-code": "248",
		"iso_3166-2": "ISO 3166-2:AX",
		"sub-region-code": "154",
		"region-code": "150",
		"sub-region": "Northern Europe",
		"region": "Europe"
	},
	{
		"name": "Albania",
		"alpha-2": "AL",
		"alpha-3": "ALB",
		"country-code": "008",
		"iso_3166-2": "ISO 3166-2:AL",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Algeria",
		"alpha-2": "DZ",
		"alpha-3": "DZA",
		"country-code": "012",
		"iso_3166-2": "ISO 3166-2:DZ",
		"region": "Africa",
		"sub-region": "Northern Africa",
		"region-code": "002",
		"sub-region-code": "015"
	},
	{
		"name": "American Samoa",
		"alpha-2": "AS",
		"alpha-3": "ASM",
		"country-code": "016",
		"iso_3166-2": "ISO 3166-2:AS",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "Andorra",
		"alpha-2": "AD",
		"alpha-3": "AND",
		"country-code": "020",
		"iso_3166-2": "ISO 3166-2:AD",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Angola",
		"alpha-2": "AO",
		"alpha-3": "AGO",
		"country-code": "024",
		"iso_3166-2": "ISO 3166-2:AO",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Anguilla",
		"alpha-2": "AI",
		"alpha-3": "AIA",
		"country-code": "660",
		"iso_3166-2": "ISO 3166-2:AI",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Antarctica",
		"alpha-2": "AQ",
		"alpha-3": "ATA",
		"country-code": "010",
		"iso_3166-2": "ISO 3166-2:AQ",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "Antigua and Barbuda",
		"alpha-2": "AG",
		"alpha-3": "ATG",
		"country-code": "028",
		"iso_3166-2": "ISO 3166-2:AG",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Argentina",
		"alpha-2": "AR",
		"alpha-3": "ARG",
		"country-code": "032",
		"iso_3166-2": "ISO 3166-2:AR",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Armenia",
		"alpha-2": "AM",
		"alpha-3": "ARM",
		"country-code": "051",
		"iso_3166-2": "ISO 3166-2:AM",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Aruba",
		"alpha-2": "AW",
		"alpha-3": "ABW",
		"country-code": "533",
		"iso_3166-2": "ISO 3166-2:AW",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Australia",
		"alpha-2": "AU",
		"alpha-3": "AUS",
		"country-code": "036",
		"iso_3166-2": "ISO 3166-2:AU",
		"region": "Oceania",
		"sub-region": "Australia and New Zealand",
		"region-code": "009",
		"sub-region-code": "053"
	},
	{
		"name": "Austria",
		"alpha-2": "AT",
		"alpha-3": "AUT",
		"country-code": "040",
		"iso_3166-2": "ISO 3166-2:AT",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "Azerbaijan",
		"alpha-2": "AZ",
		"alpha-3": "AZE",
		"country-code": "031",
		"iso_3166-2": "ISO 3166-2:AZ",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Bahamas",
		"alpha-2": "BS",
		"alpha-3": "BHS",
		"country-code": "044",
		"iso_3166-2": "ISO 3166-2:BS",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Bahrain",
		"alpha-2": "BH",
		"alpha-3": "BHR",
		"country-code": "048",
		"iso_3166-2": "ISO 3166-2:BH",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Bangladesh",
		"alpha-2": "BD",
		"alpha-3": "BGD",
		"country-code": "050",
		"iso_3166-2": "ISO 3166-2:BD",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Barbados",
		"alpha-2": "BB",
		"alpha-3": "BRB",
		"country-code": "052",
		"iso_3166-2": "ISO 3166-2:BB",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Belarus",
		"alpha-2": "BY",
		"alpha-3": "BLR",
		"country-code": "112",
		"iso_3166-2": "ISO 3166-2:BY",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Belgium",
		"alpha-2": "BE",
		"alpha-3": "BEL",
		"country-code": "056",
		"iso_3166-2": "ISO 3166-2:BE",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "Belize",
		"alpha-2": "BZ",
		"alpha-3": "BLZ",
		"country-code": "084",
		"iso_3166-2": "ISO 3166-2:BZ",
		"region": "Americas",
		"sub-region": "Central America",
		"region-code": "019",
		"sub-region-code": "013"
	},
	{
		"name": "Benin",
		"alpha-2": "BJ",
		"alpha-3": "BEN",
		"country-code": "204",
		"iso_3166-2": "ISO 3166-2:BJ",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Bermuda",
		"alpha-2": "BM",
		"alpha-3": "BMU",
		"country-code": "060",
		"iso_3166-2": "ISO 3166-2:BM",
		"region": "Americas",
		"sub-region": "Northern America",
		"region-code": "019",
		"sub-region-code": "021"
	},
	{
		"name": "Bhutan",
		"alpha-2": "BT",
		"alpha-3": "BTN",
		"country-code": "064",
		"iso_3166-2": "ISO 3166-2:BT",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Bolivia (Plurinational State of)",
		"alpha-2": "BO",
		"alpha-3": "BOL",
		"country-code": "068",
		"iso_3166-2": "ISO 3166-2:BO",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Bonaire, Sint Eustatius and Saba",
		"alpha-2": "BQ",
		"alpha-3": "BES",
		"country-code": "535",
		"iso_3166-2": "ISO 3166-2:BQ",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Bosnia and Herzegovina",
		"alpha-2": "BA",
		"alpha-3": "BIH",
		"country-code": "070",
		"iso_3166-2": "ISO 3166-2:BA",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Botswana",
		"alpha-2": "BW",
		"alpha-3": "BWA",
		"country-code": "072",
		"iso_3166-2": "ISO 3166-2:BW",
		"region": "Africa",
		"sub-region": "Southern Africa",
		"region-code": "002",
		"sub-region-code": "018"
	},
	{
		"name": "Bouvet Island",
		"alpha-2": "BV",
		"alpha-3": "BVT",
		"country-code": "074",
		"iso_3166-2": "ISO 3166-2:BV",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "Brazil",
		"alpha-2": "BR",
		"alpha-3": "BRA",
		"country-code": "076",
		"iso_3166-2": "ISO 3166-2:BR",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "British Indian Ocean Territory",
		"alpha-2": "IO",
		"alpha-3": "IOT",
		"country-code": "086",
		"iso_3166-2": "ISO 3166-2:IO",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "Brunei Darussalam",
		"alpha-2": "BN",
		"alpha-3": "BRN",
		"country-code": "096",
		"iso_3166-2": "ISO 3166-2:BN",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Bulgaria",
		"alpha-2": "BG",
		"alpha-3": "BGR",
		"country-code": "100",
		"iso_3166-2": "ISO 3166-2:BG",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Burkina Faso",
		"alpha-2": "BF",
		"alpha-3": "BFA",
		"country-code": "854",
		"iso_3166-2": "ISO 3166-2:BF",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Burundi",
		"alpha-2": "BI",
		"alpha-3": "BDI",
		"country-code": "108",
		"iso_3166-2": "ISO 3166-2:BI",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Cambodia",
		"alpha-2": "KH",
		"alpha-3": "KHM",
		"country-code": "116",
		"iso_3166-2": "ISO 3166-2:KH",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Cameroon",
		"alpha-2": "CM",
		"alpha-3": "CMR",
		"country-code": "120",
		"iso_3166-2": "ISO 3166-2:CM",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Canada",
		"alpha-2": "CA",
		"alpha-3": "CAN",
		"country-code": "124",
		"iso_3166-2": "ISO 3166-2:CA",
		"region": "Americas",
		"sub-region": "Northern America",
		"region-code": "019",
		"sub-region-code": "021"
	},
	{
		"name": "Cabo Verde",
		"alpha-2": "CV",
		"alpha-3": "CPV",
		"country-code": "132",
		"iso_3166-2": "ISO 3166-2:CV",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Cayman Islands",
		"alpha-2": "KY",
		"alpha-3": "CYM",
		"country-code": "136",
		"iso_3166-2": "ISO 3166-2:KY",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Central African Republic",
		"alpha-2": "CF",
		"alpha-3": "CAF",
		"country-code": "140",
		"iso_3166-2": "ISO 3166-2:CF",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Chad",
		"alpha-2": "TD",
		"alpha-3": "TCD",
		"country-code": "148",
		"iso_3166-2": "ISO 3166-2:TD",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Chile",
		"alpha-2": "CL",
		"alpha-3": "CHL",
		"country-code": "152",
		"iso_3166-2": "ISO 3166-2:CL",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "China",
		"alpha-2": "CN",
		"alpha-3": "CHN",
		"country-code": "156",
		"iso_3166-2": "ISO 3166-2:CN",
		"region": "Asia",
		"sub-region": "Eastern Asia",
		"region-code": "142",
		"sub-region-code": "030"
	},
	{
		"name": "Christmas Island",
		"alpha-2": "CX",
		"alpha-3": "CXR",
		"country-code": "162",
		"iso_3166-2": "ISO 3166-2:CX",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "Cocos (Keeling) Islands",
		"alpha-2": "CC",
		"alpha-3": "CCK",
		"country-code": "166",
		"iso_3166-2": "ISO 3166-2:CC",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "Colombia",
		"alpha-2": "CO",
		"alpha-3": "COL",
		"country-code": "170",
		"iso_3166-2": "ISO 3166-2:CO",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Comoros",
		"alpha-2": "KM",
		"alpha-3": "COM",
		"country-code": "174",
		"iso_3166-2": "ISO 3166-2:KM",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Congo",
		"alpha-2": "CG",
		"alpha-3": "COG",
		"country-code": "178",
		"iso_3166-2": "ISO 3166-2:CG",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Congo (Democratic Republic of the)",
		"alpha-2": "CD",
		"alpha-3": "COD",
		"country-code": "180",
		"iso_3166-2": "ISO 3166-2:CD",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Cook Islands",
		"alpha-2": "CK",
		"alpha-3": "COK",
		"country-code": "184",
		"iso_3166-2": "ISO 3166-2:CK",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "Costa Rica",
		"alpha-2": "CR",
		"alpha-3": "CRI",
		"country-code": "188",
		"iso_3166-2": "ISO 3166-2:CR",
		"region": "Americas",
		"sub-region": "Central America",
		"region-code": "019",
		"sub-region-code": "013"
	},
	{
		"name": "Côte d'Ivoire",
		"alpha-2": "CI",
		"alpha-3": "CIV",
		"country-code": "384",
		"iso_3166-2": "ISO 3166-2:CI",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Croatia",
		"alpha-2": "HR",
		"alpha-3": "HRV",
		"country-code": "191",
		"iso_3166-2": "ISO 3166-2:HR",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Cuba",
		"alpha-2": "CU",
		"alpha-3": "CUB",
		"country-code": "192",
		"iso_3166-2": "ISO 3166-2:CU",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Curaçao",
		"alpha-2": "CW",
		"alpha-3": "CUW",
		"country-code": "531",
		"iso_3166-2": "ISO 3166-2:CW",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Cyprus",
		"alpha-2": "CY",
		"alpha-3": "CYP",
		"country-code": "196",
		"iso_3166-2": "ISO 3166-2:CY",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Czech Republic",
		"alpha-2": "CZ",
		"alpha-3": "CZE",
		"country-code": "203",
		"iso_3166-2": "ISO 3166-2:CZ",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Denmark",
		"alpha-2": "DK",
		"alpha-3": "DNK",
		"country-code": "208",
		"iso_3166-2": "ISO 3166-2:DK",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Djibouti",
		"alpha-2": "DJ",
		"alpha-3": "DJI",
		"country-code": "262",
		"iso_3166-2": "ISO 3166-2:DJ",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Dominica",
		"alpha-2": "DM",
		"alpha-3": "DMA",
		"country-code": "212",
		"iso_3166-2": "ISO 3166-2:DM",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Dominican Republic",
		"alpha-2": "DO",
		"alpha-3": "DOM",
		"country-code": "214",
		"iso_3166-2": "ISO 3166-2:DO",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Ecuador",
		"alpha-2": "EC",
		"alpha-3": "ECU",
		"country-code": "218",
		"iso_3166-2": "ISO 3166-2:EC",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Egypt",
		"alpha-2": "EG",
		"alpha-3": "EGY",
		"country-code": "818",
		"iso_3166-2": "ISO 3166-2:EG",
		"region": "Africa",
		"sub-region": "Northern Africa",
		"region-code": "002",
		"sub-region-code": "015"
	},
	{
		"name": "El Salvador",
		"alpha-2": "SV",
		"alpha-3": "SLV",
		"country-code": "222",
		"iso_3166-2": "ISO 3166-2:SV",
		"region": "Americas",
		"sub-region": "Central America",
		"region-code": "019",
		"sub-region-code": "013"
	},
	{
		"name": "Equatorial Guinea",
		"alpha-2": "GQ",
		"alpha-3": "GNQ",
		"country-code": "226",
		"iso_3166-2": "ISO 3166-2:GQ",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Eritrea",
		"alpha-2": "ER",
		"alpha-3": "ERI",
		"country-code": "232",
		"iso_3166-2": "ISO 3166-2:ER",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Estonia",
		"alpha-2": "EE",
		"alpha-3": "EST",
		"country-code": "233",
		"iso_3166-2": "ISO 3166-2:EE",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Ethiopia",
		"alpha-2": "ET",
		"alpha-3": "ETH",
		"country-code": "231",
		"iso_3166-2": "ISO 3166-2:ET",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Falkland Islands (Malvinas)",
		"alpha-2": "FK",
		"alpha-3": "FLK",
		"country-code": "238",
		"iso_3166-2": "ISO 3166-2:FK",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Faroe Islands",
		"alpha-2": "FO",
		"alpha-3": "FRO",
		"country-code": "234",
		"iso_3166-2": "ISO 3166-2:FO",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Fiji",
		"alpha-2": "FJ",
		"alpha-3": "FJI",
		"country-code": "242",
		"iso_3166-2": "ISO 3166-2:FJ",
		"region": "Oceania",
		"sub-region": "Melanesia",
		"region-code": "009",
		"sub-region-code": "054"
	},
	{
		"name": "Finland",
		"alpha-2": "FI",
		"alpha-3": "FIN",
		"country-code": "246",
		"iso_3166-2": "ISO 3166-2:FI",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "France",
		"alpha-2": "FR",
		"alpha-3": "FRA",
		"country-code": "250",
		"iso_3166-2": "ISO 3166-2:FR",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "French Guiana",
		"alpha-2": "GF",
		"alpha-3": "GUF",
		"country-code": "254",
		"iso_3166-2": "ISO 3166-2:GF",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "French Polynesia",
		"alpha-2": "PF",
		"alpha-3": "PYF",
		"country-code": "258",
		"iso_3166-2": "ISO 3166-2:PF",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "French Southern Territories",
		"alpha-2": "TF",
		"alpha-3": "ATF",
		"country-code": "260",
		"iso_3166-2": "ISO 3166-2:TF",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "Gabon",
		"alpha-2": "GA",
		"alpha-3": "GAB",
		"country-code": "266",
		"iso_3166-2": "ISO 3166-2:GA",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Gambia",
		"alpha-2": "GM",
		"alpha-3": "GMB",
		"country-code": "270",
		"iso_3166-2": "ISO 3166-2:GM",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Georgia",
		"alpha-2": "GE",
		"alpha-3": "GEO",
		"country-code": "268",
		"iso_3166-2": "ISO 3166-2:GE",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Germany",
		"alpha-2": "DE",
		"alpha-3": "DEU",
		"country-code": "276",
		"iso_3166-2": "ISO 3166-2:DE",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "Ghana",
		"alpha-2": "GH",
		"alpha-3": "GHA",
		"country-code": "288",
		"iso_3166-2": "ISO 3166-2:GH",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Gibraltar",
		"alpha-2": "GI",
		"alpha-3": "GIB",
		"country-code": "292",
		"iso_3166-2": "ISO 3166-2:GI",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Greece",
		"alpha-2": "GR",
		"alpha-3": "GRC",
		"country-code": "300",
		"iso_3166-2": "ISO 3166-2:GR",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Greenland",
		"alpha-2": "GL",
		"alpha-3": "GRL",
		"country-code": "304",
		"iso_3166-2": "ISO 3166-2:GL",
		"region": "Americas",
		"sub-region": "Northern America",
		"region-code": "019",
		"sub-region-code": "021"
	},
	{
		"name": "Grenada",
		"alpha-2": "GD",
		"alpha-3": "GRD",
		"country-code": "308",
		"iso_3166-2": "ISO 3166-2:GD",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Guadeloupe",
		"alpha-2": "GP",
		"alpha-3": "GLP",
		"country-code": "312",
		"iso_3166-2": "ISO 3166-2:GP",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Guam",
		"alpha-2": "GU",
		"alpha-3": "GUM",
		"country-code": "316",
		"iso_3166-2": "ISO 3166-2:GU",
		"region": "Oceania",
		"sub-region": "Micronesia",
		"region-code": "009",
		"sub-region-code": "057"
	},
	{
		"name": "Guatemala",
		"alpha-2": "GT",
		"alpha-3": "GTM",
		"country-code": "320",
		"iso_3166-2": "ISO 3166-2:GT",
		"region": "Americas",
		"sub-region": "Central America",
		"region-code": "019",
		"sub-region-code": "013"
	},
	{
		"name": "Guernsey",
		"alpha-2": "GG",
		"alpha-3": "GGY",
		"country-code": "831",
		"iso_3166-2": "ISO 3166-2:GG",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Guinea",
		"alpha-2": "GN",
		"alpha-3": "GIN",
		"country-code": "324",
		"iso_3166-2": "ISO 3166-2:GN",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Guinea-Bissau",
		"alpha-2": "GW",
		"alpha-3": "GNB",
		"country-code": "624",
		"iso_3166-2": "ISO 3166-2:GW",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Guyana",
		"alpha-2": "GY",
		"alpha-3": "GUY",
		"country-code": "328",
		"iso_3166-2": "ISO 3166-2:GY",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Haiti",
		"alpha-2": "HT",
		"alpha-3": "HTI",
		"country-code": "332",
		"iso_3166-2": "ISO 3166-2:HT",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Heard Island and McDonald Islands",
		"alpha-2": "HM",
		"alpha-3": "HMD",
		"country-code": "334",
		"iso_3166-2": "ISO 3166-2:HM",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "Holy See",
		"alpha-2": "VA",
		"alpha-3": "VAT",
		"country-code": "336",
		"iso_3166-2": "ISO 3166-2:VA",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Honduras",
		"alpha-2": "HN",
		"alpha-3": "HND",
		"country-code": "340",
		"iso_3166-2": "ISO 3166-2:HN",
		"region": "Americas",
		"sub-region": "Central America",
		"region-code": "019",
		"sub-region-code": "013"
	},
	{
		"name": "Hong Kong",
		"alpha-2": "HK",
		"alpha-3": "HKG",
		"country-code": "344",
		"iso_3166-2": "ISO 3166-2:HK",
		"region": "Asia",
		"sub-region": "Eastern Asia",
		"region-code": "142",
		"sub-region-code": "030"
	},
	{
		"name": "Hungary",
		"alpha-2": "HU",
		"alpha-3": "HUN",
		"country-code": "348",
		"iso_3166-2": "ISO 3166-2:HU",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Iceland",
		"alpha-2": "IS",
		"alpha-3": "ISL",
		"country-code": "352",
		"iso_3166-2": "ISO 3166-2:IS",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "India",
		"alpha-2": "IN",
		"alpha-3": "IND",
		"country-code": "356",
		"iso_3166-2": "ISO 3166-2:IN",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Indonesia",
		"alpha-2": "ID",
		"alpha-3": "IDN",
		"country-code": "360",
		"iso_3166-2": "ISO 3166-2:ID",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Iran (Islamic Republic of)",
		"alpha-2": "IR",
		"alpha-3": "IRN",
		"country-code": "364",
		"iso_3166-2": "ISO 3166-2:IR",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Iraq",
		"alpha-2": "IQ",
		"alpha-3": "IRQ",
		"country-code": "368",
		"iso_3166-2": "ISO 3166-2:IQ",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Ireland",
		"alpha-2": "IE",
		"alpha-3": "IRL",
		"country-code": "372",
		"iso_3166-2": "ISO 3166-2:IE",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Isle of Man",
		"alpha-2": "IM",
		"alpha-3": "IMN",
		"country-code": "833",
		"iso_3166-2": "ISO 3166-2:IM",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Israel",
		"alpha-2": "IL",
		"alpha-3": "ISR",
		"country-code": "376",
		"iso_3166-2": "ISO 3166-2:IL",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Italy",
		"alpha-2": "IT",
		"alpha-3": "ITA",
		"country-code": "380",
		"iso_3166-2": "ISO 3166-2:IT",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Jamaica",
		"alpha-2": "JM",
		"alpha-3": "JAM",
		"country-code": "388",
		"iso_3166-2": "ISO 3166-2:JM",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Japan",
		"alpha-2": "JP",
		"alpha-3": "JPN",
		"country-code": "392",
		"iso_3166-2": "ISO 3166-2:JP",
		"region": "Asia",
		"sub-region": "Eastern Asia",
		"region-code": "142",
		"sub-region-code": "030"
	},
	{
		"name": "Jersey",
		"alpha-2": "JE",
		"alpha-3": "JEY",
		"country-code": "832",
		"iso_3166-2": "ISO 3166-2:JE",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Jordan",
		"alpha-2": "JO",
		"alpha-3": "JOR",
		"country-code": "400",
		"iso_3166-2": "ISO 3166-2:JO",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Kazakhstan",
		"alpha-2": "KZ",
		"alpha-3": "KAZ",
		"country-code": "398",
		"iso_3166-2": "ISO 3166-2:KZ",
		"region": "Asia",
		"sub-region": "Central Asia",
		"region-code": "142",
		"sub-region-code": "143"
	},
	{
		"name": "Kenya",
		"alpha-2": "KE",
		"alpha-3": "KEN",
		"country-code": "404",
		"iso_3166-2": "ISO 3166-2:KE",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Kiribati",
		"alpha-2": "KI",
		"alpha-3": "KIR",
		"country-code": "296",
		"iso_3166-2": "ISO 3166-2:KI",
		"region": "Oceania",
		"sub-region": "Micronesia",
		"region-code": "009",
		"sub-region-code": "057"
	},
	{
		"name": "Korea (Democratic People's Republic of)",
		"alpha-2": "KP",
		"alpha-3": "PRK",
		"country-code": "408",
		"iso_3166-2": "ISO 3166-2:KP",
		"region": "Asia",
		"sub-region": "Eastern Asia",
		"region-code": "142",
		"sub-region-code": "030"
	},
	{
		"name": "Korea (Republic of)",
		"alpha-2": "KR",
		"alpha-3": "KOR",
		"country-code": "410",
		"iso_3166-2": "ISO 3166-2:KR",
		"region": "Asia",
		"sub-region": "Eastern Asia",
		"region-code": "142",
		"sub-region-code": "030"
	},
	{
		"name": "Kuwait",
		"alpha-2": "KW",
		"alpha-3": "KWT",
		"country-code": "414",
		"iso_3166-2": "ISO 3166-2:KW",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Kyrgyzstan",
		"alpha-2": "KG",
		"alpha-3": "KGZ",
		"country-code": "417",
		"iso_3166-2": "ISO 3166-2:KG",
		"region": "Asia",
		"sub-region": "Central Asia",
		"region-code": "142",
		"sub-region-code": "143"
	},
	{
		"name": "Lao People's Democratic Republic",
		"alpha-2": "LA",
		"alpha-3": "LAO",
		"country-code": "418",
		"iso_3166-2": "ISO 3166-2:LA",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Latvia",
		"alpha-2": "LV",
		"alpha-3": "LVA",
		"country-code": "428",
		"iso_3166-2": "ISO 3166-2:LV",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Lebanon",
		"alpha-2": "LB",
		"alpha-3": "LBN",
		"country-code": "422",
		"iso_3166-2": "ISO 3166-2:LB",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Lesotho",
		"alpha-2": "LS",
		"alpha-3": "LSO",
		"country-code": "426",
		"iso_3166-2": "ISO 3166-2:LS",
		"region": "Africa",
		"sub-region": "Southern Africa",
		"region-code": "002",
		"sub-region-code": "018"
	},
	{
		"name": "Liberia",
		"alpha-2": "LR",
		"alpha-3": "LBR",
		"country-code": "430",
		"iso_3166-2": "ISO 3166-2:LR",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Libya",
		"alpha-2": "LY",
		"alpha-3": "LBY",
		"country-code": "434",
		"iso_3166-2": "ISO 3166-2:LY",
		"region": "Africa",
		"sub-region": "Northern Africa",
		"region-code": "002",
		"sub-region-code": "015"
	},
	{
		"name": "Liechtenstein",
		"alpha-2": "LI",
		"alpha-3": "LIE",
		"country-code": "438",
		"iso_3166-2": "ISO 3166-2:LI",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "Lithuania",
		"alpha-2": "LT",
		"alpha-3": "LTU",
		"country-code": "440",
		"iso_3166-2": "ISO 3166-2:LT",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Luxembourg",
		"alpha-2": "LU",
		"alpha-3": "LUX",
		"country-code": "442",
		"iso_3166-2": "ISO 3166-2:LU",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "Macao",
		"alpha-2": "MO",
		"alpha-3": "MAC",
		"country-code": "446",
		"iso_3166-2": "ISO 3166-2:MO",
		"region": "Asia",
		"sub-region": "Eastern Asia",
		"region-code": "142",
		"sub-region-code": "030"
	},
	{
		"name": "Macedonia (the former Yugoslav Republic of)",
		"alpha-2": "MK",
		"alpha-3": "MKD",
		"country-code": "807",
		"iso_3166-2": "ISO 3166-2:MK",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Madagascar",
		"alpha-2": "MG",
		"alpha-3": "MDG",
		"country-code": "450",
		"iso_3166-2": "ISO 3166-2:MG",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Malawi",
		"alpha-2": "MW",
		"alpha-3": "MWI",
		"country-code": "454",
		"iso_3166-2": "ISO 3166-2:MW",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Malaysia",
		"alpha-2": "MY",
		"alpha-3": "MYS",
		"country-code": "458",
		"iso_3166-2": "ISO 3166-2:MY",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Maldives",
		"alpha-2": "MV",
		"alpha-3": "MDV",
		"country-code": "462",
		"iso_3166-2": "ISO 3166-2:MV",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Mali",
		"alpha-2": "ML",
		"alpha-3": "MLI",
		"country-code": "466",
		"iso_3166-2": "ISO 3166-2:ML",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Malta",
		"alpha-2": "MT",
		"alpha-3": "MLT",
		"country-code": "470",
		"iso_3166-2": "ISO 3166-2:MT",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Marshall Islands",
		"alpha-2": "MH",
		"alpha-3": "MHL",
		"country-code": "584",
		"iso_3166-2": "ISO 3166-2:MH",
		"region": "Oceania",
		"sub-region": "Micronesia",
		"region-code": "009",
		"sub-region-code": "057"
	},
	{
		"name": "Martinique",
		"alpha-2": "MQ",
		"alpha-3": "MTQ",
		"country-code": "474",
		"iso_3166-2": "ISO 3166-2:MQ",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Mauritania",
		"alpha-2": "MR",
		"alpha-3": "MRT",
		"country-code": "478",
		"iso_3166-2": "ISO 3166-2:MR",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Mauritius",
		"alpha-2": "MU",
		"alpha-3": "MUS",
		"country-code": "480",
		"iso_3166-2": "ISO 3166-2:MU",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Mayotte",
		"alpha-2": "YT",
		"alpha-3": "MYT",
		"country-code": "175",
		"iso_3166-2": "ISO 3166-2:YT",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Mexico",
		"alpha-2": "MX",
		"alpha-3": "MEX",
		"country-code": "484",
		"iso_3166-2": "ISO 3166-2:MX",
		"region": "Americas",
		"sub-region": "Central America",
		"region-code": "019",
		"sub-region-code": "013"
	},
	{
		"name": "Micronesia (Federated States of)",
		"alpha-2": "FM",
		"alpha-3": "FSM",
		"country-code": "583",
		"iso_3166-2": "ISO 3166-2:FM",
		"region": "Oceania",
		"sub-region": "Micronesia",
		"region-code": "009",
		"sub-region-code": "057"
	},
	{
		"name": "Moldova (Republic of)",
		"alpha-2": "MD",
		"alpha-3": "MDA",
		"country-code": "498",
		"iso_3166-2": "ISO 3166-2:MD",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Monaco",
		"alpha-2": "MC",
		"alpha-3": "MCO",
		"country-code": "492",
		"iso_3166-2": "ISO 3166-2:MC",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "Mongolia",
		"alpha-2": "MN",
		"alpha-3": "MNG",
		"country-code": "496",
		"iso_3166-2": "ISO 3166-2:MN",
		"region": "Asia",
		"sub-region": "Eastern Asia",
		"region-code": "142",
		"sub-region-code": "030"
	},
	{
		"name": "Montenegro",
		"alpha-2": "ME",
		"alpha-3": "MNE",
		"country-code": "499",
		"iso_3166-2": "ISO 3166-2:ME",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Montserrat",
		"alpha-2": "MS",
		"alpha-3": "MSR",
		"country-code": "500",
		"iso_3166-2": "ISO 3166-2:MS",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Morocco",
		"alpha-2": "MA",
		"alpha-3": "MAR",
		"country-code": "504",
		"iso_3166-2": "ISO 3166-2:MA",
		"region": "Africa",
		"sub-region": "Northern Africa",
		"region-code": "002",
		"sub-region-code": "015"
	},
	{
		"name": "Mozambique",
		"alpha-2": "MZ",
		"alpha-3": "MOZ",
		"country-code": "508",
		"iso_3166-2": "ISO 3166-2:MZ",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Myanmar",
		"alpha-2": "MM",
		"alpha-3": "MMR",
		"country-code": "104",
		"iso_3166-2": "ISO 3166-2:MM",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Namibia",
		"alpha-2": "NA",
		"alpha-3": "NAM",
		"country-code": "516",
		"iso_3166-2": "ISO 3166-2:NA",
		"region": "Africa",
		"sub-region": "Southern Africa",
		"region-code": "002",
		"sub-region-code": "018"
	},
	{
		"name": "Nauru",
		"alpha-2": "NR",
		"alpha-3": "NRU",
		"country-code": "520",
		"iso_3166-2": "ISO 3166-2:NR",
		"region": "Oceania",
		"sub-region": "Micronesia",
		"region-code": "009",
		"sub-region-code": "057"
	},
	{
		"name": "Nepal",
		"alpha-2": "NP",
		"alpha-3": "NPL",
		"country-code": "524",
		"iso_3166-2": "ISO 3166-2:NP",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Netherlands",
		"alpha-2": "NL",
		"alpha-3": "NLD",
		"country-code": "528",
		"iso_3166-2": "ISO 3166-2:NL",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "New Caledonia",
		"alpha-2": "NC",
		"alpha-3": "NCL",
		"country-code": "540",
		"iso_3166-2": "ISO 3166-2:NC",
		"region": "Oceania",
		"sub-region": "Melanesia",
		"region-code": "009",
		"sub-region-code": "054"
	},
	{
		"name": "New Zealand",
		"alpha-2": "NZ",
		"alpha-3": "NZL",
		"country-code": "554",
		"iso_3166-2": "ISO 3166-2:NZ",
		"region": "Oceania",
		"sub-region": "Australia and New Zealand",
		"region-code": "009",
		"sub-region-code": "053"
	},
	{
		"name": "Nicaragua",
		"alpha-2": "NI",
		"alpha-3": "NIC",
		"country-code": "558",
		"iso_3166-2": "ISO 3166-2:NI",
		"region": "Americas",
		"sub-region": "Central America",
		"region-code": "019",
		"sub-region-code": "013"
	},
	{
		"name": "Niger",
		"alpha-2": "NE",
		"alpha-3": "NER",
		"country-code": "562",
		"iso_3166-2": "ISO 3166-2:NE",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Nigeria",
		"alpha-2": "NG",
		"alpha-3": "NGA",
		"country-code": "566",
		"iso_3166-2": "ISO 3166-2:NG",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Niue",
		"alpha-2": "NU",
		"alpha-3": "NIU",
		"country-code": "570",
		"iso_3166-2": "ISO 3166-2:NU",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "Norfolk Island",
		"alpha-2": "NF",
		"alpha-3": "NFK",
		"country-code": "574",
		"iso_3166-2": "ISO 3166-2:NF",
		"region": "Oceania",
		"sub-region": "Australia and New Zealand",
		"region-code": "009",
		"sub-region-code": "053"
	},
	{
		"name": "Northern Mariana Islands",
		"alpha-2": "MP",
		"alpha-3": "MNP",
		"country-code": "580",
		"iso_3166-2": "ISO 3166-2:MP",
		"region": "Oceania",
		"sub-region": "Micronesia",
		"region-code": "009",
		"sub-region-code": "057"
	},
	{
		"name": "Norway",
		"alpha-2": "NO",
		"alpha-3": "NOR",
		"country-code": "578",
		"iso_3166-2": "ISO 3166-2:NO",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Oman",
		"alpha-2": "OM",
		"alpha-3": "OMN",
		"country-code": "512",
		"iso_3166-2": "ISO 3166-2:OM",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Pakistan",
		"alpha-2": "PK",
		"alpha-3": "PAK",
		"country-code": "586",
		"iso_3166-2": "ISO 3166-2:PK",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Palau",
		"alpha-2": "PW",
		"alpha-3": "PLW",
		"country-code": "585",
		"iso_3166-2": "ISO 3166-2:PW",
		"region": "Oceania",
		"sub-region": "Micronesia",
		"region-code": "009",
		"sub-region-code": "057"
	},
	{
		"name": "Palestine, State of",
		"alpha-2": "PS",
		"alpha-3": "PSE",
		"country-code": "275",
		"iso_3166-2": "ISO 3166-2:PS",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Panama",
		"alpha-2": "PA",
		"alpha-3": "PAN",
		"country-code": "591",
		"iso_3166-2": "ISO 3166-2:PA",
		"region": "Americas",
		"sub-region": "Central America",
		"region-code": "019",
		"sub-region-code": "013"
	},
	{
		"name": "Papua New Guinea",
		"alpha-2": "PG",
		"alpha-3": "PNG",
		"country-code": "598",
		"iso_3166-2": "ISO 3166-2:PG",
		"region": "Oceania",
		"sub-region": "Melanesia",
		"region-code": "009",
		"sub-region-code": "054"
	},
	{
		"name": "Paraguay",
		"alpha-2": "PY",
		"alpha-3": "PRY",
		"country-code": "600",
		"iso_3166-2": "ISO 3166-2:PY",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Peru",
		"alpha-2": "PE",
		"alpha-3": "PER",
		"country-code": "604",
		"iso_3166-2": "ISO 3166-2:PE",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Philippines",
		"alpha-2": "PH",
		"alpha-3": "PHL",
		"country-code": "608",
		"iso_3166-2": "ISO 3166-2:PH",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Pitcairn",
		"alpha-2": "PN",
		"alpha-3": "PCN",
		"country-code": "612",
		"iso_3166-2": "ISO 3166-2:PN",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "Poland",
		"alpha-2": "PL",
		"alpha-3": "POL",
		"country-code": "616",
		"iso_3166-2": "ISO 3166-2:PL",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Portugal",
		"alpha-2": "PT",
		"alpha-3": "PRT",
		"country-code": "620",
		"iso_3166-2": "ISO 3166-2:PT",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Puerto Rico",
		"alpha-2": "PR",
		"alpha-3": "PRI",
		"country-code": "630",
		"iso_3166-2": "ISO 3166-2:PR",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Qatar",
		"alpha-2": "QA",
		"alpha-3": "QAT",
		"country-code": "634",
		"iso_3166-2": "ISO 3166-2:QA",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Réunion",
		"alpha-2": "RE",
		"alpha-3": "REU",
		"country-code": "638",
		"iso_3166-2": "ISO 3166-2:RE",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Romania",
		"alpha-2": "RO",
		"alpha-3": "ROU",
		"country-code": "642",
		"iso_3166-2": "ISO 3166-2:RO",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Russian Federation",
		"alpha-2": "RU",
		"alpha-3": "RUS",
		"country-code": "643",
		"iso_3166-2": "ISO 3166-2:RU",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Rwanda",
		"alpha-2": "RW",
		"alpha-3": "RWA",
		"country-code": "646",
		"iso_3166-2": "ISO 3166-2:RW",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Saint Barthélemy",
		"alpha-2": "BL",
		"alpha-3": "BLM",
		"country-code": "652",
		"iso_3166-2": "ISO 3166-2:BL",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Saint Helena, Ascension and Tristan da Cunha",
		"alpha-2": "SH",
		"alpha-3": "SHN",
		"country-code": "654",
		"iso_3166-2": "ISO 3166-2:SH",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Saint Kitts and Nevis",
		"alpha-2": "KN",
		"alpha-3": "KNA",
		"country-code": "659",
		"iso_3166-2": "ISO 3166-2:KN",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Saint Lucia",
		"alpha-2": "LC",
		"alpha-3": "LCA",
		"country-code": "662",
		"iso_3166-2": "ISO 3166-2:LC",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Saint Martin (French part)",
		"alpha-2": "MF",
		"alpha-3": "MAF",
		"country-code": "663",
		"iso_3166-2": "ISO 3166-2:MF",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Saint Pierre and Miquelon",
		"alpha-2": "PM",
		"alpha-3": "SPM",
		"country-code": "666",
		"iso_3166-2": "ISO 3166-2:PM",
		"region": "Americas",
		"sub-region": "Northern America",
		"region-code": "019",
		"sub-region-code": "021"
	},
	{
		"name": "Saint Vincent and the Grenadines",
		"alpha-2": "VC",
		"alpha-3": "VCT",
		"country-code": "670",
		"iso_3166-2": "ISO 3166-2:VC",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Samoa",
		"alpha-2": "WS",
		"alpha-3": "WSM",
		"country-code": "882",
		"iso_3166-2": "ISO 3166-2:WS",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "San Marino",
		"alpha-2": "SM",
		"alpha-3": "SMR",
		"country-code": "674",
		"iso_3166-2": "ISO 3166-2:SM",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Sao Tome and Principe",
		"alpha-2": "ST",
		"alpha-3": "STP",
		"country-code": "678",
		"iso_3166-2": "ISO 3166-2:ST",
		"region": "Africa",
		"sub-region": "Middle Africa",
		"region-code": "002",
		"sub-region-code": "017"
	},
	{
		"name": "Saudi Arabia",
		"alpha-2": "SA",
		"alpha-3": "SAU",
		"country-code": "682",
		"iso_3166-2": "ISO 3166-2:SA",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Senegal",
		"alpha-2": "SN",
		"alpha-3": "SEN",
		"country-code": "686",
		"iso_3166-2": "ISO 3166-2:SN",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Serbia",
		"alpha-2": "RS",
		"alpha-3": "SRB",
		"country-code": "688",
		"iso_3166-2": "ISO 3166-2:RS",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Seychelles",
		"alpha-2": "SC",
		"alpha-3": "SYC",
		"country-code": "690",
		"iso_3166-2": "ISO 3166-2:SC",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Sierra Leone",
		"alpha-2": "SL",
		"alpha-3": "SLE",
		"country-code": "694",
		"iso_3166-2": "ISO 3166-2:SL",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Singapore",
		"alpha-2": "SG",
		"alpha-3": "SGP",
		"country-code": "702",
		"iso_3166-2": "ISO 3166-2:SG",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Sint Maarten (Dutch part)",
		"alpha-2": "SX",
		"alpha-3": "SXM",
		"country-code": "534",
		"iso_3166-2": "ISO 3166-2:SX",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Slovakia",
		"alpha-2": "SK",
		"alpha-3": "SVK",
		"country-code": "703",
		"iso_3166-2": "ISO 3166-2:SK",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "Slovenia",
		"alpha-2": "SI",
		"alpha-3": "SVN",
		"country-code": "705",
		"iso_3166-2": "ISO 3166-2:SI",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Solomon Islands",
		"alpha-2": "SB",
		"alpha-3": "SLB",
		"country-code": "090",
		"iso_3166-2": "ISO 3166-2:SB",
		"region": "Oceania",
		"sub-region": "Melanesia",
		"region-code": "009",
		"sub-region-code": "054"
	},
	{
		"name": "Somalia",
		"alpha-2": "SO",
		"alpha-3": "SOM",
		"country-code": "706",
		"iso_3166-2": "ISO 3166-2:SO",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "South Africa",
		"alpha-2": "ZA",
		"alpha-3": "ZAF",
		"country-code": "710",
		"iso_3166-2": "ISO 3166-2:ZA",
		"region": "Africa",
		"sub-region": "Southern Africa",
		"region-code": "002",
		"sub-region-code": "018"
	},
	{
		"name": "South Georgia and the South Sandwich Islands",
		"alpha-2": "GS",
		"alpha-3": "SGS",
		"country-code": "239",
		"iso_3166-2": "ISO 3166-2:GS",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "South Sudan",
		"alpha-2": "SS",
		"alpha-3": "SSD",
		"country-code": "728",
		"iso_3166-2": "ISO 3166-2:SS",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Spain",
		"alpha-2": "ES",
		"alpha-3": "ESP",
		"country-code": "724",
		"iso_3166-2": "ISO 3166-2:ES",
		"region": "Europe",
		"sub-region": "Southern Europe",
		"region-code": "150",
		"sub-region-code": "039"
	},
	{
		"name": "Sri Lanka",
		"alpha-2": "LK",
		"alpha-3": "LKA",
		"country-code": "144",
		"iso_3166-2": "ISO 3166-2:LK",
		"region": "Asia",
		"sub-region": "Southern Asia",
		"region-code": "142",
		"sub-region-code": "034"
	},
	{
		"name": "Sudan",
		"alpha-2": "SD",
		"alpha-3": "SDN",
		"country-code": "729",
		"iso_3166-2": "ISO 3166-2:SD",
		"region": "Africa",
		"sub-region": "Northern Africa",
		"region-code": "002",
		"sub-region-code": "015"
	},
	{
		"name": "Suriname",
		"alpha-2": "SR",
		"alpha-3": "SUR",
		"country-code": "740",
		"iso_3166-2": "ISO 3166-2:SR",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Svalbard and Jan Mayen",
		"alpha-2": "SJ",
		"alpha-3": "SJM",
		"country-code": "744",
		"iso_3166-2": "ISO 3166-2:SJ",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Swaziland",
		"alpha-2": "SZ",
		"alpha-3": "SWZ",
		"country-code": "748",
		"iso_3166-2": "ISO 3166-2:SZ",
		"region": "Africa",
		"sub-region": "Southern Africa",
		"region-code": "002",
		"sub-region-code": "018"
	},
	{
		"name": "Sweden",
		"alpha-2": "SE",
		"alpha-3": "SWE",
		"country-code": "752",
		"iso_3166-2": "ISO 3166-2:SE",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "Switzerland",
		"alpha-2": "CH",
		"alpha-3": "CHE",
		"country-code": "756",
		"iso_3166-2": "ISO 3166-2:CH",
		"region": "Europe",
		"sub-region": "Western Europe",
		"region-code": "150",
		"sub-region-code": "155"
	},
	{
		"name": "Syrian Arab Republic",
		"alpha-2": "SY",
		"alpha-3": "SYR",
		"country-code": "760",
		"iso_3166-2": "ISO 3166-2:SY",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Taiwan, Province of China",
		"alpha-2": "TW",
		"alpha-3": "TWN",
		"country-code": "158",
		"iso_3166-2": "ISO 3166-2:TW",
		"region": "Asia",
		"sub-region": "Eastern Asia",
		"region-code": "142",
		"sub-region-code": "030"
	},
	{
		"name": "Tajikistan",
		"alpha-2": "TJ",
		"alpha-3": "TJK",
		"country-code": "762",
		"iso_3166-2": "ISO 3166-2:TJ",
		"region": "Asia",
		"sub-region": "Central Asia",
		"region-code": "142",
		"sub-region-code": "143"
	},
	{
		"name": "Tanzania, United Republic of",
		"alpha-2": "TZ",
		"alpha-3": "TZA",
		"country-code": "834",
		"iso_3166-2": "ISO 3166-2:TZ",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Thailand",
		"alpha-2": "TH",
		"alpha-3": "THA",
		"country-code": "764",
		"iso_3166-2": "ISO 3166-2:TH",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Timor-Leste",
		"alpha-2": "TL",
		"alpha-3": "TLS",
		"country-code": "626",
		"iso_3166-2": "ISO 3166-2:TL",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Togo",
		"alpha-2": "TG",
		"alpha-3": "TGO",
		"country-code": "768",
		"iso_3166-2": "ISO 3166-2:TG",
		"region": "Africa",
		"sub-region": "Western Africa",
		"region-code": "002",
		"sub-region-code": "011"
	},
	{
		"name": "Tokelau",
		"alpha-2": "TK",
		"alpha-3": "TKL",
		"country-code": "772",
		"iso_3166-2": "ISO 3166-2:TK",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "Tonga",
		"alpha-2": "TO",
		"alpha-3": "TON",
		"country-code": "776",
		"iso_3166-2": "ISO 3166-2:TO",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "Trinidad and Tobago",
		"alpha-2": "TT",
		"alpha-3": "TTO",
		"country-code": "780",
		"iso_3166-2": "ISO 3166-2:TT",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Tunisia",
		"alpha-2": "TN",
		"alpha-3": "TUN",
		"country-code": "788",
		"iso_3166-2": "ISO 3166-2:TN",
		"region": "Africa",
		"sub-region": "Northern Africa",
		"region-code": "002",
		"sub-region-code": "015"
	},
	{
		"name": "Turkey",
		"alpha-2": "TR",
		"alpha-3": "TUR",
		"country-code": "792",
		"iso_3166-2": "ISO 3166-2:TR",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Turkmenistan",
		"alpha-2": "TM",
		"alpha-3": "TKM",
		"country-code": "795",
		"iso_3166-2": "ISO 3166-2:TM",
		"region": "Asia",
		"sub-region": "Central Asia",
		"region-code": "142",
		"sub-region-code": "143"
	},
	{
		"name": "Turks and Caicos Islands",
		"alpha-2": "TC",
		"alpha-3": "TCA",
		"country-code": "796",
		"iso_3166-2": "ISO 3166-2:TC",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Tuvalu",
		"alpha-2": "TV",
		"alpha-3": "TUV",
		"country-code": "798",
		"iso_3166-2": "ISO 3166-2:TV",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "Uganda",
		"alpha-2": "UG",
		"alpha-3": "UGA",
		"country-code": "800",
		"iso_3166-2": "ISO 3166-2:UG",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Ukraine",
		"alpha-2": "UA",
		"alpha-3": "UKR",
		"country-code": "804",
		"iso_3166-2": "ISO 3166-2:UA",
		"region": "Europe",
		"sub-region": "Eastern Europe",
		"region-code": "150",
		"sub-region-code": "151"
	},
	{
		"name": "United Arab Emirates",
		"alpha-2": "AE",
		"alpha-3": "ARE",
		"country-code": "784",
		"iso_3166-2": "ISO 3166-2:AE",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "United Kingdom of Great Britain and Northern Ireland",
		"alpha-2": "GB",
		"alpha-3": "GBR",
		"country-code": "826",
		"iso_3166-2": "ISO 3166-2:GB",
		"region": "Europe",
		"sub-region": "Northern Europe",
		"region-code": "150",
		"sub-region-code": "154"
	},
	{
		"name": "United States of America",
		"alpha-2": "US",
		"alpha-3": "USA",
		"country-code": "840",
		"iso_3166-2": "ISO 3166-2:US",
		"region": "Americas",
		"sub-region": "Northern America",
		"region-code": "019",
		"sub-region-code": "021"
	},
	{
		"name": "United States Minor Outlying Islands",
		"alpha-2": "UM",
		"alpha-3": "UMI",
		"country-code": "581",
		"iso_3166-2": "ISO 3166-2:UM",
		"sub-region-code": null,
		"region-code": null,
		"sub-region": null,
		"region": null
	},
	{
		"name": "Uruguay",
		"alpha-2": "UY",
		"alpha-3": "URY",
		"country-code": "858",
		"iso_3166-2": "ISO 3166-2:UY",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Uzbekistan",
		"alpha-2": "UZ",
		"alpha-3": "UZB",
		"country-code": "860",
		"iso_3166-2": "ISO 3166-2:UZ",
		"region": "Asia",
		"sub-region": "Central Asia",
		"region-code": "142",
		"sub-region-code": "143"
	},
	{
		"name": "Vanuatu",
		"alpha-2": "VU",
		"alpha-3": "VUT",
		"country-code": "548",
		"iso_3166-2": "ISO 3166-2:VU",
		"region": "Oceania",
		"sub-region": "Melanesia",
		"region-code": "009",
		"sub-region-code": "054"
	},
	{
		"name": "Venezuela (Bolivarian Republic of)",
		"alpha-2": "VE",
		"alpha-3": "VEN",
		"country-code": "862",
		"iso_3166-2": "ISO 3166-2:VE",
		"region": "Americas",
		"sub-region": "South America",
		"region-code": "019",
		"sub-region-code": "005"
	},
	{
		"name": "Viet Nam",
		"alpha-2": "VN",
		"alpha-3": "VNM",
		"country-code": "704",
		"iso_3166-2": "ISO 3166-2:VN",
		"region": "Asia",
		"sub-region": "South-Eastern Asia",
		"region-code": "142",
		"sub-region-code": "035"
	},
	{
		"name": "Virgin Islands (British)",
		"alpha-2": "VG",
		"alpha-3": "VGB",
		"country-code": "092",
		"iso_3166-2": "ISO 3166-2:VG",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Virgin Islands (U.S.)",
		"alpha-2": "VI",
		"alpha-3": "VIR",
		"country-code": "850",
		"iso_3166-2": "ISO 3166-2:VI",
		"region": "Americas",
		"sub-region": "Caribbean",
		"region-code": "019",
		"sub-region-code": "029"
	},
	{
		"name": "Wallis and Futuna",
		"alpha-2": "WF",
		"alpha-3": "WLF",
		"country-code": "876",
		"iso_3166-2": "ISO 3166-2:WF",
		"region": "Oceania",
		"sub-region": "Polynesia",
		"region-code": "009",
		"sub-region-code": "061"
	},
	{
		"name": "Western Sahara",
		"alpha-2": "EH",
		"alpha-3": "ESH",
		"country-code": "732",
		"iso_3166-2": "ISO 3166-2:EH",
		"region": "Africa",
		"sub-region": "Northern Africa",
		"region-code": "002",
		"sub-region-code": "015"
	},
	{
		"name": "Yemen",
		"alpha-2": "YE",
		"alpha-3": "YEM",
		"country-code": "887",
		"iso_3166-2": "ISO 3166-2:YE",
		"region": "Asia",
		"sub-region": "Western Asia",
		"region-code": "142",
		"sub-region-code": "145"
	},
	{
		"name": "Zambia",
		"alpha-2": "ZM",
		"alpha-3": "ZMB",
		"country-code": "894",
		"iso_3166-2": "ISO 3166-2:ZM",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	},
	{
		"name": "Zimbabwe",
		"alpha-2": "ZW",
		"alpha-3": "ZWE",
		"country-code": "716",
		"iso_3166-2": "ISO 3166-2:ZW",
		"region": "Africa",
		"sub-region": "Eastern Africa",
		"region-code": "002",
		"sub-region-code": "014"
	}
];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    apiUrl: "http://www.brokeries.com/json/"
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(48);

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(49);

var _App = __webpack_require__(50);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.debug = "dev" == 'dev';

//Vue components


var app = new _vue2.default({
    render: function render(createEle) {
        return createEle(_App2.default);
    }
}).$mount('#app');

window.app = app;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(55);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(36);
var Axios = __webpack_require__(57);
var defaults = __webpack_require__(17);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(33);
axios.CancelToken = __webpack_require__(56);
axios.isCancel = __webpack_require__(34);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(71);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(33);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(17);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(58);
var dispatchRequest = __webpack_require__(59);
var isAbsoluteURL = __webpack_require__(67);
var combineURLs = __webpack_require__(65);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(62);
var isCancel = __webpack_require__(34);
var defaults = __webpack_require__(17);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(35);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
  }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _iterator = __webpack_require__(77);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(76);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = __webpack_require__(1),
    $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) {
  // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(107);
var $Object = __webpack_require__(1).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(108);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(109);
module.exports = __webpack_require__(1).Object.keys;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(112);
__webpack_require__(110);
__webpack_require__(113);
__webpack_require__(114);
module.exports = __webpack_require__(1).Symbol;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(111);
__webpack_require__(115);
module.exports = __webpack_require__(30).f('iterator');

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {/* empty */};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6),
    toLength = __webpack_require__(105),
    toIndex = __webpack_require__(104);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this),
        length = toLength(O.length),
        index = toIndex(fromIndex, length),
        value;
    // Array#includes uses SameValueZero equality algorithm
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
      // Array#toIndex ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(86);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11),
    gOPS = __webpack_require__(43),
    pIE = __webpack_require__(23);
module.exports = function (it) {
  var result = getKeys(it),
      getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it),
        isEnum = pIE.f,
        i = 0,
        key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(38);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.2 IsArray(argument)
var cof = __webpack_require__(38);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(22),
    descriptor = __webpack_require__(15),
    setToStringTag = __webpack_require__(24),
    IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(8)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getKeys = __webpack_require__(11),
    toIObject = __webpack_require__(6);
module.exports = function (object, el) {
  var O = toIObject(object),
      keys = getKeys(O),
      length = keys.length,
      index = 0,
      key;
  while (length > index) {
    if (O[key = keys[index++]] === el) return key;
  }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __webpack_require__(16)('meta'),
    isObject = __webpack_require__(14),
    has = __webpack_require__(4),
    setDesc = __webpack_require__(5).f,
    id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(5),
    anObject = __webpack_require__(13),
    getKeys = __webpack_require__(11);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties),
      length = keys.length,
      i = 0,
      P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pIE = __webpack_require__(23),
    createDesc = __webpack_require__(15),
    toIObject = __webpack_require__(6),
    toPrimitive = __webpack_require__(28),
    has = __webpack_require__(4),
    IE8_DOM_DEFINE = __webpack_require__(40),
    gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6),
    gOPN = __webpack_require__(42).f,
    toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4),
    toObject = __webpack_require__(46),
    IE_PROTO = __webpack_require__(25)('IE_PROTO'),
    ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9),
    core = __webpack_require__(1),
    fails = __webpack_require__(10);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY],
      exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(27),
    defined = __webpack_require__(18);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that)),
        i = toInteger(pos),
        l = s.length,
        a,
        b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(27),
    max = Math.max,
    min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(27),
    min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(87),
    step = __webpack_require__(95),
    Iterators = __webpack_require__(20),
    toIObject = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(41)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t,
      kind = this._k,
      index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(9);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(22) });

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(5).f });

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(46),
    $keys = __webpack_require__(11);

__webpack_require__(102)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(103)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(41)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t,
      index = this._i,
      point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global = __webpack_require__(2),
    has = __webpack_require__(4),
    DESCRIPTORS = __webpack_require__(3),
    $export = __webpack_require__(9),
    redefine = __webpack_require__(45),
    META = __webpack_require__(97).KEY,
    $fails = __webpack_require__(10),
    shared = __webpack_require__(26),
    setToStringTag = __webpack_require__(24),
    uid = __webpack_require__(16),
    wks = __webpack_require__(8),
    wksExt = __webpack_require__(30),
    wksDefine = __webpack_require__(29),
    keyOf = __webpack_require__(96),
    enumKeys = __webpack_require__(90),
    isArray = __webpack_require__(93),
    anObject = __webpack_require__(13),
    toIObject = __webpack_require__(6),
    toPrimitive = __webpack_require__(28),
    createDesc = __webpack_require__(15),
    _create = __webpack_require__(22),
    gOPNExt = __webpack_require__(100),
    $GOPD = __webpack_require__(99),
    $DP = __webpack_require__(5),
    $keys = __webpack_require__(11),
    gOPD = $GOPD.f,
    dP = $DP.f,
    gOPN = gOPNExt.f,
    $Symbol = global.Symbol,
    $JSON = global.JSON,
    _stringify = $JSON && $JSON.stringify,
    PROTOTYPE = 'prototype',
    HIDDEN = wks('_hidden'),
    TO_PRIMITIVE = wks('toPrimitive'),
    isEnum = {}.propertyIsEnumerable,
    SymbolRegistry = shared('symbol-registry'),
    AllSymbols = shared('symbols'),
    OPSymbols = shared('op-symbols'),
    ObjectProto = Object[PROTOTYPE],
    USE_NATIVE = typeof $Symbol == 'function',
    QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P)),
      i = 0,
      l = keys.length,
      key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it)),
      result = [],
      i = 0,
      key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto,
      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
      result = [],
      i = 0,
      key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(42).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(23).f = $propertyIsEnumerable;
  __webpack_require__(43).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(21)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
  wks(symbols[i++]);
}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
  wksDefine(symbols[i++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it],
        i = 1,
        replacer,
        $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29)('asyncIterator');

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29)('observable');

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(106);
var global = __webpack_require__(2),
    hide = __webpack_require__(7),
    Iterators = __webpack_require__(20),
    TO_STRING_TAG = __webpack_require__(8)('toStringTag');

for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
  var NAME = collections[i],
      Collection = global[NAME],
      proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37).Buffer))

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(52);

var _config2 = _interopRequireDefault(_config);

var _axios = __webpack_require__(54);

var _axios2 = _interopRequireDefault(_axios);

var _FadeLoader = __webpack_require__(131);

var _FadeLoader2 = _interopRequireDefault(_FadeLoader);

var _brokersList = __webpack_require__(130);

var _brokersList2 = _interopRequireDefault(_brokersList);

var _brokersCard = __webpack_require__(128);

var _brokersCard2 = _interopRequireDefault(_brokersCard);

var _brokersComparison = __webpack_require__(149);

var _brokersComparison2 = _interopRequireDefault(_brokersComparison);

var _brokersFilter = __webpack_require__(129);

var _brokersFilter2 = _interopRequireDefault(_brokersFilter);

var _countries = __webpack_require__(51);

var _countries2 = _interopRequireDefault(_countries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var axiosInstance = _axios2.default.create({
    baseURL: _config2.default.apiUrl,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

exports.default = {
    data: function data() {
        return {
            currentView: 'brokers-list',
            brokersListScroll: 0,
            currentBroker: null,
            spinner: false,
            brokers: [],
            countries: {},
            comparison: [],
            filters: {
                visible: false,
                active: false,
                country: null,
                sortBy: null,
                tradeComission: {
                    value: [0, 10],
                    slider: {
                        width: '100%',
                        height: 2,
                        dotSize: 28,
                        min: 0,
                        max: 10,
                        tooltip: false
                    }
                },
                minAccountDeposit: {
                    value: [0, 10],
                    slider: {
                        width: '100%',
                        height: 2,
                        dotSize: 28,
                        min: 0,
                        max: 10,
                        tooltip: false
                    }
                }
            }
        };
    },

    components: {
        brokersList: _brokersList2.default,
        brokersFilter: _brokersFilter2.default,
        brokersComparison: _brokersComparison2.default,
        brokersCard: _brokersCard2.default,
        spinner: _FadeLoader2.default
    },
    methods: {
        getAccounts: function getAccounts(type) {
            var _this = this;
            _this.spinner = true;

            axiosInstance.get('FindAccounts', {
                params: {
                    type: type ? type : 'Forex'
                }
            }).then(function (response) {
                _this.brokers = response.data.data;
                _this.spinner = false;
            }, function (error) {
                _this.spinner = false;
                //TODO: error handler
            });
        },
        getCountries: function getCountries() {
            var _this = this;

            axiosInstance.get('AccountCountries', {
                params: {
                    //profileType: type ? type : 'Forex'
                }
            }).then(function (response) {
                _this.countries = response.data;
            }, function (error) {
                //TODO: error handler
            });
        },
        showFilter: function showFilter() {
            this.filters.visible = true;
        },
        hideFilter: function hideFilter() {
            this.filters.visible = false;
        },
        toggleCountrySelect: function toggleCountrySelect() {
            this.$el.querySelector('.js-country-select').click();
        },
        openBroker: function openBroker(broker) {
            this.currentView = 'brokers-card';
            this.currentBroker = broker;
        },
        setView: function setView(view) {
            this.currentView = view;
        }
    },
    mounted: function mounted() {
        this.getAccounts();
        this.getCountries();
        window.showFilter = this.showFilter;
        window.hideFilter = this.hideFilter;
        window.getAccounts = this.getAccounts;
        window.setView = this.setView;
    }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            currentTab: 'details'
        };
    },

    props: ['broker']
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueSliderComponent = __webpack_require__(124);

var _vueSliderComponent2 = _interopRequireDefault(_vueSliderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {};
    },

    components: {
        vueSlider: _vueSliderComponent2.default
    },
    props: ['filters', 'countries']
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            showShadow: true
        };
    },

    props: ['brokers', 'comparison'],
    methods: {
        addToComparison: function addToComparison(broker) {
            if (!this.inComparison(broker) && this.comparison.length < 5) {
                this.comparison.push(broker);
            }
        },
        removeFromComparison: function removeFromComparison(broker) {
            var _this = this;

            this.comparison.forEach(function (v, i) {
                if (v.BrokerId === broker.BrokerId) {
                    _this.comparison.splice(i, 1);
                }
            });
        },
        inComparison: function inComparison(broker) {
            var result = false;

            this.comparison.forEach(function (v, i) {
                if (v.BrokerId === broker.BrokerId) {
                    result = true;
                }
            });

            return result;
        },
        clearComparison: function clearComparison() {
            this.comparison.splice(0, this.comparison.length);
        },
        compare: function compare() {
            window.scrollTo(0, 0);
            this.$parent.setView('brokers-comparison');
        },
        scroll: function scroll() {
            this.$parent.brokersListScroll = window.pageYOffset;
        }
    },
    mounted: function mounted() {
        console.log('mounted');
        console.log(document.documentElement.scrollHeight);
        window.scrollTo(0, this.$parent.brokersListScroll);
        window.addEventListener('scroll', this.scroll);
    },
    destroyed: function destroyed() {
        console.log('destroyed');
        window.removeEventListener('scroll', this.scroll);
    }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {

  name: 'FadeLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    height: {
      type: String,
      default: '15px'
    },
    width: {
      type: String,
      default: '5px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '2px'
    }
  },
  data: function data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        height: this.height,
        width: this.width,
        margin: this.margin,
        borderRadius: this.radius
      },
      radius: '20px'
    };
  },

  computed: {
    ngRadius: function ngRadius() {
      return '-' + this.radius;
    },
    quarter: function quarter() {
      return parseFloat(this.radius) / 2 + parseFloat(this.radius) / 5.5 + 'px';
    },
    ngQuarter: function ngQuarter() {
      return '-' + this.quarter;
    },
    animationStyle1: function animationStyle1() {
      return {
        top: this.radius,
        left: 0,
        animationDelay: '0.12s'
      };
    },
    animationStyle2: function animationStyle2() {
      return {
        top: this.quarter,
        left: this.quarter,
        animationDelay: '0.24s',
        transform: 'rotate(-45deg)'
      };
    },
    animationStyle3: function animationStyle3() {
      return {
        top: 0,
        left: this.radius,
        animationDelay: '0.36s',
        transform: 'rotate(90deg)'
      };
    },
    animationStyle4: function animationStyle4() {
      return {
        top: this.ngQuarter,
        left: this.quarter,
        animationDelay: '0.48s',
        transform: 'rotate(45deg)'
      };
    },
    animationStyle5: function animationStyle5() {
      return {
        top: this.ngRadius,
        left: 0,
        animationDelay: '0.60s'
      };
    },
    animationStyle6: function animationStyle6() {
      return {
        top: this.ngQuarter,
        left: this.ngQuarter,
        animationDelay: '0.72s',
        transform: 'rotate(-45deg)'
      };
    },
    animationStyle7: function animationStyle7() {
      return {
        top: 0,
        left: this.ngRadius,
        animationDelay: '0.84s',
        transform: 'rotate(90deg)'
      };
    },
    animationStyle8: function animationStyle8() {
      return {
        top: this.quarter,
        left: this.ngQuarter,
        animationDelay: '0.96s',
        transform: 'rotate(45deg)'
      };
    }
  }

};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _stringify = __webpack_require__(72);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(75);

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__(73);

var _create2 = _interopRequireDefault(_create);

var _defineProperty = __webpack_require__(74);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__(78);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function (t, e) {
  "object" == ( false ? "undefined" : (0, _typeof3.default)(exports)) && "object" == ( false ? "undefined" : (0, _typeof3.default)(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) ? exports["vue-slider-component"] = e() : t["vue-slider-component"] = e();
}(undefined, function () {
  return function (t) {
    function e(s) {
      if (i[s]) return i[s].exports;var r = i[s] = { i: s, l: !1, exports: {} };return t[s].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }var i = {};return e.m = t, e.c = i, e.i = function (t) {
      return t;
    }, e.d = function (t, i, s) {
      e.o(t, i) || (0, _defineProperty2.default)(t, i, { configurable: !1, enumerable: !0, get: s });
    }, e.n = function (t) {
      var i = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(i, "a", i), i;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 9);
  }([function (t, e, i) {
    i(5);var s = i(3)(i(8), i(4), "data-v-4f2807ae", null);t.exports = s.exports;
  }, function (t, e, i) {
    e = t.exports = i(2)(), e.push([t.i, '.vue-slider-wrap[data-v-4f2807ae]{position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-slider-wrap.vue-slider-disabled[data-v-4f2807ae]{opacity:.5;cursor:not-allowed}.vue-slider-wrap.vue-slider-has-label[data-v-4f2807ae]{margin-bottom:15px}.vue-slider-wrap.vue-slider-disabled .vue-slider-dot[data-v-4f2807ae]{cursor:not-allowed}.vue-slider-wrap .vue-slider[data-v-4f2807ae]{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-wrap .vue-slider[data-v-4f2807ae]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-process[data-v-4f2807ae]{position:absolute;border-radius:15px;background-color:#3498db;transition:all 0s;z-index:1}.vue-slider-horizontal .vue-slider-process[data-v-4f2807ae]{width:0;height:100%;top:0;left:0;will-change:width}.vue-slider-vertical .vue-slider-process[data-v-4f2807ae]{width:100%;height:0;bottom:0;left:0;will-change:height}.vue-slider-horizontal-reverse .vue-slider-process[data-v-4f2807ae]{width:0;height:100%;top:0;right:0}.vue-slider-vertical-reverse .vue-slider-process[data-v-4f2807ae]{width:100%;height:0;top:0;left:0}.vue-slider-dot[data-v-4f2807ae]{position:absolute;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32);transition:all 0s;will-change:transform;cursor:pointer;z-index:3}.vue-slider-horizontal .vue-slider-dot[data-v-4f2807ae]{left:0}.vue-slider-vertical .vue-slider-dot[data-v-4f2807ae]{bottom:0}.vue-slider-horizontal-reverse .vue-slider-dot[data-v-4f2807ae]{right:0}.vue-slider-vertical-reverse .vue-slider-dot[data-v-4f2807ae]{top:0}.vue-slider-tooltip[data-v-4f2807ae]{display:none;font-size:14px;white-space:nowrap;position:absolute;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db;z-index:9}.vue-slider-tooltip.vue-slider-tooltip-top[data-v-4f2807ae]{top:-9px;left:50%;transform:translate(-50%,-100%)}.vue-slider-tooltip.vue-slider-tooltip-bottom[data-v-4f2807ae]{bottom:-9px;left:50%;transform:translate(-50%,100%)}.vue-slider-tooltip.vue-slider-tooltip-left[data-v-4f2807ae]{top:50%;left:-9px;transform:translate(-100%,-50%)}.vue-slider-tooltip.vue-slider-tooltip-right[data-v-4f2807ae]{top:50%;right:-9px;transform:translate(100%,-50%)}.vue-slider-tooltip.vue-slider-tooltip-top[data-v-4f2807ae]:before{content:"";position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;transform:translate(-50%)}.vue-slider-tooltip.vue-slider-tooltip-bottom[data-v-4f2807ae]:before{content:"";position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;transform:translate(-50%)}.vue-slider-tooltip.vue-slider-tooltip-left[data-v-4f2807ae]:before{content:"";position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;transform:translateY(-50%)}.vue-slider-tooltip.vue-slider-tooltip-right[data-v-4f2807ae]:before{content:"";position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;transform:translateY(-50%)}.vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip[data-v-4f2807ae]{display:block}.vue-slider-dot.vue-slider-always .vue-slider-tooltip[data-v-4f2807ae]{display:block!important}.vue-slider-piecewise[data-v-4f2807ae]{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-piecewise li[data-v-4f2807ae]{position:absolute;width:8px;height:8px}.vue-slider-piecewise .vue-slider-piecewise-dot[data-v-4f2807ae]{position:absolute;left:50%;top:50%;width:100%;height:100%;display:inline-block;background-color:rgba(0,0,0,.16);border-radius:50%;transform:translate(-50%,-50%);z-index:2;transition:all .3s}.vue-slider-piecewise li:first-child .vue-slider-piecewise-dot[data-v-4f2807ae],.vue-slider-piecewise li:last-child .vue-slider-piecewise-dot[data-v-4f2807ae]{visibility:hidden}.vue-slider-piecewise .vue-slider-piecewise-label[data-v-4f2807ae]{position:absolute;display:inline-block;top:15px;left:50%;white-space:nowrap;font-size:12px;color:#333;transform:translateX(-50%);visibility:visible}', ""]);
  }, function (t, e) {
    t.exports = function () {
      var t = [];return t.toString = function () {
        for (var t = [], e = 0; e < this.length; e++) {
          var i = this[e];i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1]);
        }return t.join("");
      }, t.i = function (e, i) {
        "string" == typeof e && (e = [[null, e, ""]]);for (var s = {}, r = 0; r < this.length; r++) {
          var o = this[r][0];"number" == typeof o && (s[o] = !0);
        }for (r = 0; r < e.length; r++) {
          var n = e[r];"number" == typeof n[0] && s[n[0]] || (i && !n[2] ? n[2] = i : i && (n[2] = "(" + n[2] + ") and (" + i + ")"), t.push(n));
        }
      }, t;
    };
  }, function (t, e) {
    t.exports = function (t, e, i, s) {
      var r,
          o = t = t || {},
          n = (0, _typeof3.default)(t.default);"object" !== n && "function" !== n || (r = t, o = t.default);var a = "function" == typeof o ? o.options : o;if (e && (a.render = e.render, a.staticRenderFns = e.staticRenderFns), i && (a._scopeId = i), s) {
        var l = (0, _create2.default)(a.computed || null);(0, _keys2.default)(s).forEach(function (t) {
          var e = s[t];l[t] = function () {
            return e;
          };
        }), a.computed = l;
      }return { esModule: r, exports: o, options: a };
    };
  }, function (t, e) {
    t.exports = { render: function render() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;return i("div", { directives: [{ name: "show", rawName: "v-show", value: t.show, expression: "show" }], ref: "wrap", class: ["vue-slider-wrap", t.flowDirection, t.disabledClass, { "vue-slider-has-label": t.piecewiseLabel }], style: t.wrapStyles, on: { click: t.wrapClick } }, [i("div", { ref: "elem", staticClass: "vue-slider", style: [t.elemStyles, t.bgStyle] }, [t.isMoblie ? [t.isRange ? [i("div", { ref: "dot0", class: [t.tooltipStatus, "vue-slider-dot"], style: [t.sliderStyles[0], t.dotStyles], on: { touchstart: function touchstart(e) {
              t.moveStart(0);
            } } }, [i("span", { class: ["vue-slider-tooltip-" + t.tooltipDirection[0], "vue-slider-tooltip"], style: t.tooltipStyles[0] }, [t._v(t._s(t.formatter ? t.formatting(t.val[0]) : t.val[0]))])]), t._v(" "), i("div", { ref: "dot1", class: [t.tooltipStatus, "vue-slider-dot"], style: [t.sliderStyles[1], t.dotStyles], on: { touchstart: function touchstart(e) {
              t.moveStart(1);
            } } }, [i("span", { class: ["vue-slider-tooltip-" + t.tooltipDirection[1], "vue-slider-tooltip"], style: t.tooltipStyles[1] }, [t._v(t._s(t.formatter ? t.formatting(t.val[1]) : t.val[1]))])])] : [i("div", { ref: "dot", class: [t.tooltipStatus, "vue-slider-dot"], style: [t.sliderStyles, t.dotStyles], on: { touchstart: t.moveStart } }, [i("span", { class: ["vue-slider-tooltip-" + t.tooltipDirection, "vue-slider-tooltip"], style: t.tooltipStyles }, [t._v(t._s(t.formatter ? t.formatting(t.val) : t.val))])])]] : [t.isRange ? [i("div", { ref: "dot0", class: [t.tooltipStatus, "vue-slider-dot"], style: [t.sliderStyles[0], t.dotStyles], on: { mousedown: function mousedown(e) {
              t.moveStart(0);
            } } }, [i("span", { class: ["vue-slider-tooltip-" + t.tooltipDirection[0], "vue-slider-tooltip"], style: t.tooltipStyles[0] }, [t._v(t._s(t.formatter ? t.formatting(t.val[0]) : t.val[0]))])]), t._v(" "), i("div", { ref: "dot1", class: [t.tooltipStatus, "vue-slider-dot"], style: [t.sliderStyles[1], t.dotStyles], on: { mousedown: function mousedown(e) {
              t.moveStart(1);
            } } }, [i("span", { class: ["vue-slider-tooltip-" + t.tooltipDirection[1], "vue-slider-tooltip"], style: t.tooltipStyles[1] }, [t._v(t._s(t.formatter ? t.formatting(t.val[1]) : t.val[1]))])])] : [i("div", { ref: "dot", class: [t.tooltipStatus, "vue-slider-dot"], style: [t.sliderStyles, t.dotStyles], on: { mousedown: t.moveStart } }, [i("span", { class: ["vue-slider-tooltip-" + t.tooltipDirection, "vue-slider-tooltip"], style: t.tooltipStyles }, [t._v(t._s(t.formatter ? t.formatting(t.val) : t.val))])])]], t._v(" "), t.piecewise ? [i("ul", { staticClass: "vue-slider-piecewise" }, t._l(t.piecewiseDotWrap, function (e, s) {
          return i("li", { style: [t.piecewiseDotStyle, e.style] }, [i("span", { staticClass: "vue-slider-piecewise-dot", style: [t.piecewiseStyle, e.inRange ? t.piecewiseActiveStyle : null] }), t._v(" "), t.piecewiseLabel ? i("span", { staticClass: "vue-slider-piecewise-label", style: [t.labelStyle, e.inRange ? t.labelActiveStyle : null] }, [t._v(t._s(e.label))]) : t._e()]);
        }))] : t._e(), t._v(" "), i("div", { ref: "process", staticClass: "vue-slider-process", style: t.processStyle })], 2)]);
      }, staticRenderFns: [] };
  }, function (t, e, i) {
    var s = i(1);"string" == typeof s && (s = [[t.i, s, ""]]), s.locals && (t.exports = s.locals);i(6)("1bf5195a", s, !0);
  }, function (t, e, i) {
    function s(t) {
      for (var e = 0; e < t.length; e++) {
        var i = t[e],
            s = u[i.id];if (s) {
          s.refs++;for (var r = 0; r < s.parts.length; r++) {
            s.parts[r](i.parts[r]);
          }for (; r < i.parts.length; r++) {
            s.parts.push(o(i.parts[r]));
          }s.parts.length > i.parts.length && (s.parts.length = i.parts.length);
        } else {
          for (var n = [], r = 0; r < i.parts.length; r++) {
            n.push(o(i.parts[r]));
          }u[i.id] = { id: i.id, refs: 1, parts: n };
        }
      }
    }function r() {
      var t = document.createElement("style");return t.type = "text/css", d.appendChild(t), t;
    }function o(t) {
      var e,
          i,
          s = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');if (s) {
        if (f) return v;s.parentNode.removeChild(s);
      }if (m) {
        var o = p++;s = c || (c = r()), e = n.bind(null, s, o, !1), i = n.bind(null, s, o, !0);
      } else s = r(), e = a.bind(null, s), i = function i() {
        s.parentNode.removeChild(s);
      };return e(t), function (s) {
        if (s) {
          if (s.css === t.css && s.media === t.media && s.sourceMap === t.sourceMap) return;e(t = s);
        } else i();
      };
    }function n(t, e, i, s) {
      var r = i ? "" : s.css;if (t.styleSheet) t.styleSheet.cssText = g(e, r);else {
        var o = document.createTextNode(r),
            n = t.childNodes;n[e] && t.removeChild(n[e]), n.length ? t.insertBefore(o, n[e]) : t.appendChild(o);
      }
    }function a(t, e) {
      var i = e.css,
          s = e.media,
          r = e.sourceMap;if (s && t.setAttribute("media", s), r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent((0, _stringify2.default)(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = i;else {
        for (; t.firstChild;) {
          t.removeChild(t.firstChild);
        }t.appendChild(document.createTextNode(i));
      }
    }var l = "undefined" != typeof document;if ("undefined" != typeof DEBUG && DEBUG && !l) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var h = i(7),
        u = {},
        d = l && (document.head || document.getElementsByTagName("head")[0]),
        c = null,
        p = 0,
        f = !1,
        v = function v() {},
        m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports = function (t, e, i) {
      f = i;var r = h(t, e);return s(r), function (e) {
        for (var i = [], o = 0; o < r.length; o++) {
          var n = r[o],
              a = u[n.id];a.refs--, i.push(a);
        }e ? (r = h(t, e), s(r)) : r = [];for (var o = 0; o < i.length; o++) {
          var a = i[o];if (0 === a.refs) {
            for (var l = 0; l < a.parts.length; l++) {
              a.parts[l]();
            }delete u[a.id];
          }
        }
      };
    };var g = function () {
      var t = [];return function (e, i) {
        return t[e] = i, t.filter(Boolean).join("\n");
      };
    }();
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var i = [], s = {}, r = 0; r < e.length; r++) {
        var o = e[r],
            n = o[0],
            a = o[1],
            l = o[2],
            h = o[3],
            u = { id: t + ":" + r, css: a, media: l, sourceMap: h };s[n] ? s[n].parts.push(u) : i.push(s[n] = { id: n, parts: [u] });
      }return i;
    };
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { data: function data() {
        return { flag: !1, size: 0, currentValue: 0, currentSlider: 0 };
      }, props: { width: { type: [Number, String], default: "auto" }, height: { type: [Number, String], default: 6 }, data: { type: Array, default: null }, dotSize: { type: Number, default: 16 }, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, interval: { type: Number, default: 1 }, show: { type: Boolean, default: !0 }, disabled: { type: Boolean, default: !1 }, piecewise: { type: Boolean, default: !1 }, tooltip: { type: [String, Boolean], default: "always" }, eventType: { type: String, default: "auto" }, direction: { type: String, default: "horizontal" }, reverse: { type: Boolean, default: !1 }, lazy: { type: Boolean, default: !1 }, clickable: { type: Boolean, default: !0 }, speed: { type: Number, default: .5 }, realTime: { type: Boolean, default: !1 }, value: { type: [String, Number, Array], default: 0 }, piecewiseLabel: { type: Boolean, default: !1 }, sliderStyle: [Array, Object], tooltipDir: [Array, String], formatter: [String, Function], piecewiseStyle: Object, piecewiseActiveStyle: Object, processStyle: Object, bgStyle: Object, tooltipStyle: [Array, Object], labelStyle: Object, labelActiveStyle: Object }, computed: { flowDirection: function flowDirection() {
          return "vue-slider-" + this.direction + (this.reverse ? "-reverse" : "");
        }, tooltipDirection: function tooltipDirection() {
          var t = this.tooltipDir || ("vertical" === this.direction ? "left" : "top");return Array.isArray(t) ? this.isRange ? t : t[1] : this.isRange ? [t, t] : t;
        }, tooltipStatus: function tooltipStatus() {
          return "hover" === this.tooltip && this.flag ? "vue-slider-always" : this.tooltip ? "vue-slider-" + this.tooltip : "";
        }, tooltipClass: function tooltipClass() {
          return ["vue-slider-tooltip-" + this.tooltipDirection, "vue-slider-tooltip"];
        }, isMoblie: function isMoblie() {
          return "touch" === this.eventType || "mouse" !== this.eventType && /(iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|Mobile)/i.test(navigator.userAgent);
        }, isDisabled: function isDisabled() {
          return "none" === this.eventType || this.disabled;
        }, disabledClass: function disabledClass() {
          return this.disabled ? "vue-slider-disabled" : "";
        }, isRange: function isRange() {
          return Array.isArray(this.value);
        }, slider: function slider() {
          return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot;
        }, minimum: function minimum() {
          return this.data ? 0 : this.min;
        }, val: { get: function get() {
            return this.data ? this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue] : this.currentValue;
          }, set: function set(t) {
            if (this.data) {
              if (this.isRange) {
                var e = this.data.indexOf(t[0]),
                    i = this.data.indexOf(t[1]);e > -1 && i > -1 && (this.currentValue = [e, i]);
              } else {
                var s = this.data.indexOf(t);s > -1 && (this.currentValue = s);
              }
            } else this.currentValue = t;
          } }, currentIndex: function currentIndex() {
          return this.isRange ? this.data ? this.currentValue : [(this.currentValue[0] - this.minimum) / this.spacing, (this.currentValue[1] - this.minimum) / this.spacing] : (this.currentValue - this.minimum) / this.spacing;
        }, indexRange: function indexRange() {
          return this.isRange ? this.currentIndex : [0, this.currentIndex];
        }, maximum: function maximum() {
          return this.data ? this.data.length - 1 : this.max;
        }, multiple: function multiple() {
          var t = ("" + this.interval).split(".")[1];return t ? Math.pow(10, t.length) : 1;
        }, spacing: function spacing() {
          return this.data ? 1 : this.interval;
        }, total: function total() {
          return this.data ? this.data.length - 1 : (~~((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) != 0 && console.error("[Vue-slider warn]: Prop[interval] is illegal, Please make sure that the interval can be divisible"), (this.maximum - this.minimum) / this.interval);
        }, gap: function gap() {
          return this.size / this.total;
        }, position: function position() {
          return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : (this.currentValue - this.minimum) / this.spacing * this.gap;
        }, limit: function limit() {
          return this.isRange ? [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size];
        }, valueLimit: function valueLimit() {
          return this.isRange ? [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum];
        }, wrapStyles: function wrapStyles() {
          return "vertical" === this.direction ? { height: "number" == typeof this.height ? this.height + "px" : this.height, padding: this.dotSize / 2 + "px" } : { width: "number" == typeof this.width ? this.width + "px" : this.width, padding: this.dotSize / 2 + "px" };
        }, sliderStyles: function sliderStyles() {
          return Array.isArray(this.sliderStyle) ? this.isRange ? this.sliderStyle : this.sliderStyle[1] : this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle;
        }, tooltipStyles: function tooltipStyles() {
          return Array.isArray(this.tooltipStyle) ? this.isRange ? this.tooltipStyle : this.tooltipStyle[1] : this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle;
        }, elemStyles: function elemStyles() {
          return "vertical" === this.direction ? { width: this.width + "px", height: "100%" } : { height: this.height + "px" };
        }, dotStyles: function dotStyles() {
          return "vertical" === this.direction ? { width: this.dotSize + "px", height: this.dotSize + "px", left: -(this.dotSize - this.width) / 2 + "px" } : { width: this.dotSize + "px", height: this.dotSize + "px", top: -(this.dotSize - this.height) / 2 + "px" };
        }, piecewiseDotStyle: function piecewiseDotStyle() {
          return "vertical" === this.direction ? { width: this.width + "px", height: this.width + "px" } : { width: this.height + "px", height: this.height + "px" };
        }, piecewiseDotWrap: function piecewiseDotWrap() {
          if (!this.piecewise) return !1;for (var t = [], e = (this.size, "vertical" === this.direction ? this.width : this.height, this.total, 0); e <= this.total; e++) {
            var i = "vertical" === this.direction ? { bottom: this.gap * e - this.width / 2 + "px", left: "200px" } : { left: this.gap * e - this.height / 2 + "px", top: "0" },
                s = this.reverse ? this.total - e : e,
                r = this.data ? this.data[s] : this.spacing * s + this.min;t.push({ style: i, label: this.formatter ? this.formatting(r) : r, inRange: s >= this.indexRange[0] && s <= this.indexRange[1] });
          }return t;
        } }, watch: { value: function value(t) {
          this.flag || this.setValue(t, !0);
        }, max: function max(t) {
          var e = this.limitValue(this.val);e !== !1 && this.setValue(e), this.refresh();
        }, min: function min(t) {
          var e = this.limitValue(this.val);e !== !1 && this.setValue(e), this.refresh();
        }, show: function show(t) {
          var e = this;t && !this.size && this.$nextTick(function () {
            e.refresh();
          });
        } }, methods: { bindEvents: function bindEvents() {
          this.isMoblie ? (this.$refs.wrap.addEventListener("touchmove", this.moving), this.$refs.wrap.addEventListener("touchend", this.moveEnd)) : (document.addEventListener("mousemove", this.moving), document.addEventListener("mouseup", this.moveEnd), document.addEventListener("mouseleave", this.moveEnd));
        }, unbindEvents: function unbindEvents() {
          window.removeEventListener("resize", this.refresh), this.isMoblie ? (this.$refs.wrap.removeEventListener("touchmove", this.moving), this.$refs.wrap.removeEventListener("touchend", this.moveEnd)) : (document.removeEventListener("mousemove", this.moving), document.removeEventListener("mouseup", this.moveEnd), document.removeEventListener("mouseleave", this.moveEnd));
        }, formatting: function formatting(t) {
          return "string" == typeof this.formatter ? this.formatter.replace(/\{value\}/, t) : this.formatter(t);
        }, getPos: function getPos(t) {
          return this.realTime && this.getStaticData(), "vertical" === this.direction ? this.reverse ? t.pageY - this.offset : this.size - (t.pageY - this.offset) : this.reverse ? this.size - (t.clientX - this.offset) : t.clientX - this.offset;
        }, wrapClick: function wrapClick(t) {
          if (this.isDisabled || !this.clickable) return !1;var e = this.getPos(t);this.isRange && (this.currentSlider = e > (this.position[1] - this.position[0]) / 2 + this.position[0] ? 1 : 0), this.setValueOnPos(e);
        }, moveStart: function moveStart(t) {
          if (this.isDisabled) return !1;this.isRange && (this.currentSlider = t), this.flag = !0, this.$emit("drag-start", this);
        }, moving: function moving(t) {
          if (!this.flag) return !1;t.preventDefault(), this.isMoblie && (t = t.targetTouches[0]), this.setValueOnPos(this.getPos(t), !0);
        }, moveEnd: function moveEnd(t) {
          if (!this.flag) return !1;this.$emit("drag-end", this), this.lazy && this.isDiff(this.val, this.value) && this.syncValue(), this.flag = !1, this.setPosition();
        }, setValueOnPos: function setValueOnPos(t, e) {
          var i = this.isRange ? this.limit[this.currentSlider] : this.limit,
              s = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit;if (t >= i[0] && t <= i[1]) {
            this.setTransform(t);var r = (Math.round(t / this.gap) * (this.spacing * this.multiple) + this.minimum * this.multiple) / this.multiple;this.setCurrentValue(r, e);
          } else t < i[0] ? (this.setTransform(i[0]), this.setCurrentValue(s[0]), 1 === this.currentSlider && (this.currentSlider = 0)) : (this.setTransform(i[1]), this.setCurrentValue(s[1]), 0 === this.currentSlider && (this.currentSlider = 1));
        }, isDiff: function isDiff(t, e) {
          return Object.prototype.toString.call(t) !== Object.prototype.toString.call(e) || (Array.isArray(t) && t.length === e.length ? t.some(function (t, i) {
            return t !== e[i];
          }) : t !== e);
        }, setCurrentValue: function setCurrentValue(t, e) {
          if (t < this.minimum || t > this.maximum) return !1;this.isRange ? this.isDiff(this.currentValue[this.currentSlider], t) && (this.currentValue.splice(this.currentSlider, 1, t), this.lazy && this.flag || this.syncValue()) : this.isDiff(this.currentValue, t) && (this.currentValue = t, this.lazy && this.flag || this.syncValue()), e || this.setPosition();
        }, setIndex: function setIndex(t) {
          if (Array.isArray(t) && this.isRange) {
            var e = void 0;e = this.data ? [this.data[t[0]], this.data[t[1]]] : [this.spacing * t[0] + this.minimum, this.spacing * t[1] + this.minimum], this.setValue(e);
          } else t = this.spacing * t + this.minimum, this.isRange && (this.currentSlider = t > (this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0] ? 1 : 0), this.setCurrentValue(t);
        }, setValue: function setValue(t, e, i) {
          var s = this;if (this.isDiff(this.val, t)) {
            var r = this.limitValue(t);this.val = r !== !1 ? this.isRange ? r.concat() : r : this.isRange ? t.concat() : t, this.syncValue(e);
          }this.$nextTick(function () {
            s.setPosition(i);
          });
        }, setPosition: function setPosition(t) {
          this.flag || this.setTransitionTime(void 0 === t ? this.speed : t), this.isRange ? (this.currentSlider = 0, this.setTransform(this.position[this.currentSlider]), this.currentSlider = 1, this.setTransform(this.position[this.currentSlider])) : this.setTransform(this.position), this.flag || this.setTransitionTime(0);
        }, setTransform: function setTransform(t) {
          var e = ("vertical" === this.direction ? this.dotSize / 2 - t : t - this.dotSize / 2) * (this.reverse ? -1 : 1),
              i = "vertical" === this.direction ? "translateY(" + e + "px)" : "translateX(" + e + "px)",
              s = (0 === this.currentSlider ? this.position[1] - t : t - this.position[0]) + "px",
              r = (0 === this.currentSlider ? t : this.position[0]) + "px";this.isRange ? (this.slider[this.currentSlider].style.transform = i, this.slider[this.currentSlider].style.WebkitTransform = i, this.slider[this.currentSlider].style.msTransform = i, "vertical" === this.direction ? (this.$refs.process.style.height = s, this.$refs.process.style[this.reverse ? "top" : "bottom"] = r) : (this.$refs.process.style.width = s, this.$refs.process.style[this.reverse ? "right" : "left"] = r)) : (this.slider.style.transform = i, this.slider.style.WebkitTransform = i, this.slider.style.msTransform = i, "vertical" === this.direction ? (this.$refs.process.style.height = t + "px", this.$refs.process.style[this.reverse ? "top" : "bottom"] = 0) : (this.$refs.process.style.width = t + "px", this.$refs.process.style[this.reverse ? "right" : "left"] = 0));
        }, setTransitionTime: function setTransitionTime(t) {
          if (t || this.$refs.process.offsetWidth, this.isRange) {
            for (var e = 0; e < this.slider.length; e++) {
              this.slider[e].style.transitionDuration = t + "s", this.slider[e].style.WebkitTransitionDuration = t + "s";
            }this.$refs.process.style.transitionDuration = t + "s", this.$refs.process.style.WebkitTransitionDuration = t + "s";
          } else this.slider.style.transitionDuration = t + "s", this.slider.style.WebkitTransitionDuration = t + "s", this.$refs.process.style.transitionDuration = t + "s", this.$refs.process.style.WebkitTransitionDuration = t + "s";
        }, limitValue: function limitValue(t) {
          var e = this,
              i = !1;return this.isRange ? t = t.map(function (t) {
            return t < e.min ? (i = !0, e.min) : t > e.max ? (i = !0, e.max) : t;
          }) : t > this.max ? (i = !0, t = this.max) : t < this.min && (i = !0, t = this.min), i && t;
        }, syncValue: function syncValue(t) {
          t || this.$emit("callback", this.val), this.$emit("input", this.isRange ? this.val.concat() : this.val);
        }, getValue: function getValue() {
          return this.val;
        }, getIndex: function getIndex() {
          return this.currentIndex;
        }, getStaticData: function getStaticData() {
          this.$refs.elem && (this.size = "vertical" === this.direction ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth, this.offset = "vertical" === this.direction ? this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop : this.$refs.elem.getBoundingClientRect().left);
        }, refresh: function refresh() {
          this.$refs.elem && (this.getStaticData(), this.setPosition());
        } }, created: function created() {
        window.addEventListener("resize", this.refresh);
      }, mounted: function mounted() {
        var t = this;this.$nextTick(function () {
          t.getStaticData(), t.setValue(t.value, !0, 0), t.bindEvents();
        });
      }, beforeDestroy: function beforeDestroy() {
        this.unbindEvents();
      } };
  }, function (t, e, i) {
    "use strict";
    var s = i(0);t.exports = s;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126)(module)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(116)(true);
// imports


// module
exports.push([module.i, "\n.v-spinner .v-fade\n{\n    -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n            animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    position: absolute;\n}\n@-webkit-keyframes v-fadeStretchDelay\n{\n50%\n    {\n        -webkit-opacity: 0.3;             \n                opacity: 0.3;\n}\n100%\n    {\n        -webkit-opacity: 1;             \n                opacity: 1;\n}\n}\n@keyframes v-fadeStretchDelay\n{\n50%\n    {\n        -webkit-opacity: 0.3;             \n                opacity: 0.3;\n}\n100%\n    {\n        -webkit-opacity: 1;             \n                opacity: 1;\n}\n}\n", "", {"version":3,"sources":["/Users/alexey/PhpstormProjects/brokers-webview/node_modules/vue-spinner/src/FadeLoader.vue?15b8fcfc"],"names":[],"mappings":";AAyIA;;IAEA,gEAAA;YACA,wDAAA;IACA,kCAAA;WACA,0BAAA;IACA,mBAAA;CACA;AAEA;;AAEA;;QAEA,qBAAA;gBACA,aAAA;CACA;AACA;;QAEA,mBAAA;gBACA,WAAA;CACA;CACA;AAEA;;AAEA;;QAEA,qBAAA;gBACA,aAAA;CACA;AACA;;QAEA,mBAAA;gBACA,WAAA;CACA;CACA","file":"FadeLoader.vue","sourcesContent":["<template>\n  <div class=\"v-spinner\" v-bind:style=\"{position: 'relative', fontSize: 0}\" v-show=\"loading\">\n  <!-- <div class=\"v-spinner\" v-bind:style=\"containerStyle\"> -->\n    <div class=\"v-fade v-fade1\" v-bind:style=\"[spinnerStyle,animationStyle1]\">\n    </div><div class=\"v-fade v-fade2\" v-bind:style=\"[spinnerStyle,animationStyle2]\">\n    </div><div class=\"v-fade v-fade3\" v-bind:style=\"[spinnerStyle,animationStyle3]\">\n    </div><div class=\"v-fade v-fade4\" v-bind:style=\"[spinnerStyle,animationStyle4]\">\n    </div><div class=\"v-fade v-fade5\" v-bind:style=\"[spinnerStyle,animationStyle5]\">\n    </div><div class=\"v-fade v-fade6\" v-bind:style=\"[spinnerStyle,animationStyle6]\">\n    </div><div class=\"v-fade v-fade7\" v-bind:style=\"[spinnerStyle,animationStyle7]\">\n    </div><div class=\"v-fade v-fade8\" v-bind:style=\"[spinnerStyle,animationStyle8]\">\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  \n  name: 'FadeLoader',\n\n  props: {\n    loading: {\n      type: Boolean,\n      default: true\n    },\n    color: { \n      type: String,\n      default: '#5dc596'\n    },\n    height: {\n      type: String,\n      default: '15px'\n    },\n    width: {\n      type: String,\n      default: '5px'\n    },\n    margin: {\n      type: String,\n      default: '2px'\n    },\n    radius: {\n      type: String,\n      default: '2px'\n    }\n  },\n  data () {\n    return {\n      spinnerStyle: {\n      \tbackgroundColor: this.color,\n      \theight: this.height,\n     \t\twidth: this.width,\n      \tmargin: this.margin,\n      \tborderRadius: this.radius\n      },\n      radius: '20px'\n    }\n  },\n  computed: {\n    ngRadius () {\n      return '-' + this.radius\n    },\n    quarter () {\n      return (parseFloat(this.radius)/2 + parseFloat(this.radius)/5.5) + 'px'\n    },\n    ngQuarter () {\n      return '-' + this.quarter\n    },\n    animationStyle1 () {\n      return {\n        top: this.radius,\n        left: 0,\n        animationDelay: '0.12s'\n      }\n    },\n    animationStyle2 () {\n      return {\n        top: this.quarter,\n        left: this.quarter,\n        animationDelay: '0.24s',\n        transform: 'rotate(-45deg)'\n      }\n    },\n    animationStyle3 () {\n      return {\n        top: 0,\n        left: this.radius,\n        animationDelay: '0.36s',\n        transform: 'rotate(90deg)'\n      }\n    },\n    animationStyle4 () {\n      return {\n        top: this.ngQuarter,\n        left: this.quarter,\n        animationDelay: '0.48s',\n        transform: 'rotate(45deg)'\n      }\n    },\n    animationStyle5 () {\n      return {\n        top: this.ngRadius,\n        left: 0,\n        animationDelay: '0.60s'\n      }\n    },\n    animationStyle6 () {\n      return {\n        top: this.ngQuarter,\n        left: this.ngQuarter,\n        animationDelay: '0.72s',\n        transform: 'rotate(-45deg)'\n      }\n    },\n    animationStyle7 () {\n      return {\n        top: 0,\n        left: this.ngRadius,\n        animationDelay: '0.84s',\n        transform: 'rotate(90deg)'\n      }\n    },\n    animationStyle8 () {\n      return {\n        top: this.quarter,\n        left: this.ngQuarter,\n        animationDelay: '0.96s',\n        transform: 'rotate(45deg)'\n      }\n    }\n  }\n\n}\n</script>\n\n<style>\n\n.v-spinner .v-fade\n{\n    -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n            animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    position: absolute;               \n}\n\n@-webkit-keyframes v-fadeStretchDelay\n{\n    50%\n    {\n        -webkit-opacity: 0.3;             \n                opacity: 0.3;\n    }\n    100%\n    {\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}\n\n@keyframes v-fadeStretchDelay\n{\n    50%\n    {\n        -webkit-opacity: 0.3;             \n                opacity: 0.3;\n    }\n    100%\n    {\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(132),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alexey/PhpstormProjects/brokers-webview/app/components/brokers-card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] brokers-card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f609967", Component.options)
  } else {
    hotAPI.reload("data-v-5f609967", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(134),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alexey/PhpstormProjects/brokers-webview/app/components/brokers-filter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] brokers-filter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7582fbe2", Component.options)
  } else {
    hotAPI.reload("data-v-7582fbe2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(136),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alexey/PhpstormProjects/brokers-webview/app/components/brokers-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] brokers-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fd95016", Component.options)
  } else {
    hotAPI.reload("data-v-9fd95016", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(133),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alexey/PhpstormProjects/brokers-webview/node_modules/vue-spinner/src/FadeLoader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FadeLoader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-620c4bd5", Component.options)
  } else {
    hotAPI.reload("data-v-620c4bd5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "broker-card"
  }, [_c('div', {
    staticClass: "broker-card-preview"
  }, [_c('div', {
    staticClass: "broker-card-preview-live"
  }, [_vm._v("\n            Live\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "broker-card-preview-padding"
  }, [_c('div', {
    staticClass: "broker-card-logo"
  }, [_c('img', {
    attrs: {
      "src": 'http://www.brokeries.com/Content/Proto/images/logos/brokers/' + _vm.broker.Broker + '.jpg'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "broker-card-title"
  }, [_vm._v("\n                " + _vm._s(_vm.broker.Broker) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "broker-card-subtitle"
  }, [_vm._v("\n                " + _vm._s(_vm.broker.ProfileType) + " Account\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "broker-card-link-btn"
  }, [_c('a', {
    staticClass: "button button-round button-green",
    attrs: {
      "href": _vm.broker.BrokerWebsite,
      "target": "_blank"
    }
  }, [_vm._v("Open account")])])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "broker-card-tabs"
  }, [_c('a', {
    staticClass: "broker-card-tabs-item",
    class: (_vm.currentTab == 'details') ? 'active' : '',
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.currentTab = 'details'
      }
    }
  }, [_vm._v("Account Details")]), _vm._v(" "), (_vm.broker.Description) ? _c('a', {
    staticClass: "broker-card-tabs-item",
    class: (_vm.currentTab == 'summary') ? 'active' : '',
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.currentTab = 'summary'
      }
    }
  }, [_vm._v("Summary")]) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.currentTab == 'details') ? _c('div', [_c('table', {
    staticClass: "brokers-card-details-table"
  }, [_c('tr', [_c('th', [_vm._v("Aggregate rating")]), _vm._v(" "), _c('td', {
    staticClass: "text-right text-uppercase"
  }, [(_vm.broker.Rank === 'Excellent') ? _c('span', {
    staticClass: "c-green"
  }, [_vm._v("\n                            " + _vm._s(_vm.broker.Rank) + "\n                        ")]) : (_vm.broker.Rank === 'Poor') ? _c('span', {
    staticClass: "c-gray-light"
  }, [_vm._v("\n                            " + _vm._s(_vm.broker.Rank) + "\n                        ")]) : _c('span', [_vm._v("\n                            " + _vm._s(_vm.broker.Rank) + "\n                        ")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Rating")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('div', {
    staticClass: "brokers-card-stars broker-stars"
  }, [_vm._l((Math.round(_vm.broker.StarRating)), function(index) {
    return _c('span', {
      staticClass: "broker-stars-item broker-stars-item-filled"
    })
  }), _vm._v(" "), _vm._l(((5 - Math.round(_vm.broker.StarRating))), function(index) {
    return _c('span', {
      staticClass: "broker-stars-item"
    })
  })], 2)])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("EUR/USD spread, avg")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.AverageEurUsdSpread) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("USD/JPY spread, avg")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.AverageUSDJPYSpread) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("GBP/USD spread, avg")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.AverageGBPUSDSpread) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("USD/CAD spread, avg")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.AverageUSDCADSpread) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("XAU/USD spread, avg")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.AverageXAUUSDSpread) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("AUD/USD spread, avg")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.AverageAUDUSDSpread) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("USD/CHF spread, avg")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.AverageUSDCHFSpread) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Trade comission")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.TradeCommission) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Incentive")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.Incentive) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Assisted trade fee")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.AssistedTradeFee) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Marginable")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.Marginable ? 'Yes' : 'No') + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Margin rate")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.MarginRate) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Volume-based commission")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.IsCommissionVolumeBased ? 'Yes' : 'No') + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Minumum deposit")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.MinDeposit) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Minumum deposit (Margin)")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.MarginMinDeposit) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Maximum Leverage")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.MaxLeverage) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Contract fee")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.broker.ContractFee) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Broker Address")]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.broker.Location)
    }
  })])])])]) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.currentTab == 'summary') ? _c('div', [(_vm.broker.Description) ? _c('div', {
    staticClass: "broker-card-summary",
    domProps: {
      "innerHTML": _vm._s(_vm.broker.Description)
    }
  }) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('pre', {
    staticStyle: {
      "background": "#666",
      "max-width": "100%",
      "overflow": "auto",
      "max-height": "300px"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.broker) + "\n    ")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "broker-card-promo"
  }, [_c('div', {
    staticClass: "broker-card-promo-title"
  }, [_vm._v("\n                Promo\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "broker-card-promo-desc"
  }, [_c('p', [_vm._v("\n                    Promo???\n                ")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f609967", module.exports)
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "v-spinner",
    style: ({
      position: 'relative',
      fontSize: 0
    })
  }, [_c('div', {
    staticClass: "v-fade v-fade1",
    style: ([_vm.spinnerStyle, _vm.animationStyle1])
  }), _c('div', {
    staticClass: "v-fade v-fade2",
    style: ([_vm.spinnerStyle, _vm.animationStyle2])
  }), _c('div', {
    staticClass: "v-fade v-fade3",
    style: ([_vm.spinnerStyle, _vm.animationStyle3])
  }), _c('div', {
    staticClass: "v-fade v-fade4",
    style: ([_vm.spinnerStyle, _vm.animationStyle4])
  }), _c('div', {
    staticClass: "v-fade v-fade5",
    style: ([_vm.spinnerStyle, _vm.animationStyle5])
  }), _c('div', {
    staticClass: "v-fade v-fade6",
    style: ([_vm.spinnerStyle, _vm.animationStyle6])
  }), _c('div', {
    staticClass: "v-fade v-fade7",
    style: ([_vm.spinnerStyle, _vm.animationStyle7])
  }), _c('div', {
    staticClass: "v-fade v-fade8",
    style: ([_vm.spinnerStyle, _vm.animationStyle8])
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-620c4bd5", module.exports)
  }
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "brokers-filter"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-body"
  }, [_c('div', {
    staticClass: "brokers-filter-control brokers-filter-control-country"
  }, [_c('div', {
    staticClass: "brokers-filter-control-country-title"
  }, [_vm._v("\n                Country range\n            ")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.filters.country),
      expression: "filters.country"
    }],
    staticClass: "js-country-select brokers-filter-control-country-select",
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.filters.country = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("All countries")]), _vm._v(" "), _vm._l((_vm.countries), function(country, name) {
    return _c('option', {
      domProps: {
        "value": name
      }
    }, [_vm._v("\n                    " + _vm._s(name) + "\n                ")])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-control brokers-filter-control-sorting"
  }, [_c('div', {
    staticClass: "brokers-filter-control-title"
  }, [_vm._v("\n                Sorting\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-control-sorting-select"
  }, [_c('a', {
    staticClass: "brokers-filter-control-sorting-select-item active",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
      }
    }
  }, [_vm._v("\n                    Unsorted\n                ")]), _vm._v(" "), _c('a', {
    staticClass: "brokers-filter-control-sorting-select-item",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
      }
    }
  }, [_vm._v("\n                    Abc\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-control brokers-filter-control-range"
  }, [_c('div', {
    staticClass: "brokers-filter-control-title"
  }, [_vm._v("\n                Trade Comission\n            ")]), _vm._v(" "), _c('vue-slider', _vm._b({
    ref: "tradeComissionSlider",
    model: {
      value: (_vm.filters.tradeComission.value),
      callback: function($$v) {
        _vm.filters.tradeComission.value = $$v
      },
      expression: "filters.tradeComission.value"
    }
  }, 'vue-slider', _vm.filters.tradeComission.slider)), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-control-range-values"
  }, [_c('div', {
    staticClass: "brokers-filter-control-range-min"
  }, [_vm._v("\n                    " + _vm._s(_vm.filters.tradeComission.value[0]) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-control-range-max"
  }, [_vm._v("\n                    " + _vm._s(_vm.filters.tradeComission.value[1]) + "\n                ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-control brokers-filter-control-range"
  }, [_c('div', {
    staticClass: "brokers-filter-control-title"
  }, [_vm._v("\n                Min account deposit\n            ")]), _vm._v(" "), _c('vue-slider', _vm._b({
    model: {
      value: (_vm.filters.minAccountDeposit.value),
      callback: function($$v) {
        _vm.filters.minAccountDeposit.value = $$v
      },
      expression: "filters.minAccountDeposit.value"
    }
  }, 'vue-slider', _vm.filters.minAccountDeposit.slider)), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-control-range-values"
  }, [_c('div', {
    staticClass: "brokers-filter-control-range-min"
  }, [_vm._v("\n                    " + _vm._s(_vm.filters.minAccountDeposit.value[0]) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-control-range-max"
  }, [_vm._v("\n                    " + _vm._s(_vm.filters.minAccountDeposit.value[1]) + "\n                ")])])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "brokers-filter-header"
  }, [_c('div', {
    staticClass: "brokers-filter-header-title"
  }, [_vm._v("\n            Filter\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "brokers-filter-header-buttons"
  }, [_c('a', {
    staticClass: "button button-round button-gray",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Reset")]), _vm._v(" "), _c('a', {
    staticClass: "button button-round button-green",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Apply")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7582fbe2", module.exports)
  }
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.spinner) ? _c('div', {
    staticClass: "spinner-overlay"
  }, [_c('div', {
    staticClass: "spinner"
  }, [_c('spinner', {
    attrs: {
      "radius": '20px'
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.currentView == 'brokers-list') ? _c('brokers-list', {
    attrs: {
      "brokers": _vm.brokers,
      "comparison": _vm.comparison
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.currentView == 'brokers-card') ? _c('brokers-card', {
    attrs: {
      "broker": _vm.currentBroker
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.currentView == 'brokers-comparison') ? _c('brokers-comparison', {
    attrs: {
      "comparison": _vm.comparison
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.filters.visible) ? _c('div', {
    staticClass: "overlay overlay-padding"
  }, [_c('brokers-filter', {
    attrs: {
      "filters": _vm.filters,
      "countries": _vm.countries
    }
  })], 1) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-87d40e68", module.exports)
  }
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "brokers-list"
  }, _vm._l((_vm.brokers), function(broker) {
    return _c('div', {
      staticClass: "brokers-list-item"
    }, [_c('a', {
      staticClass: "brokers-list-item-left",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.$parent.openBroker(broker)
        }
      }
    }, [_c('div', {
      staticClass: "brokers-list-item-photo"
    }, [_c('img', {
      attrs: {
        "src": 'http://www.brokeries.com/Content/Proto/images/logos/brokers/' + broker.Broker + '.jpg'
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "brokers-list-item-stars broker-stars"
    }, [_vm._l((Math.round(broker.StarRating)), function(index) {
      return _c('span', {
        staticClass: "broker-stars-item broker-stars-item-filled"
      })
    }), _vm._v(" "), _vm._l(((5 - Math.round(broker.StarRating))), function(index) {
      return _c('span', {
        staticClass: "broker-stars-item"
      })
    })], 2)]), _vm._v(" "), _c('a', {
      staticClass: "brokers-list-item-content",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.$parent.openBroker(broker)
        }
      }
    }, [_c('div', {
      staticClass: "brokers-list-item-title"
    }, [_vm._v(_vm._s(broker.Broker))]), _vm._v(" "), _c('div', {
      staticClass: "brokers-list-item-subtitle"
    }, [_c('div', {
      staticClass: "brokers-list-item-label"
    }, [_vm._v("Promo")]), _vm._v("\n                    " + _vm._s(broker.ProfileType) + " Account\n                ")]), _vm._v(" "), _c('table', {
      staticClass: "brokers-list-item-table"
    }, [_vm._m(0, true), _vm._v(" "), _c('tr', [_c('td', [(broker.Rank === 'Excellent') ? _c('span', {
      staticClass: "c-green"
    }, [_vm._v("\n                                " + _vm._s(broker.Rank) + "\n                            ")]) : (broker.Rank === 'Poor') ? _c('span', {
      staticClass: "c-gray-light"
    }, [_vm._v("\n                                " + _vm._s(broker.Rank) + "\n                                ")]) : _c('span', [_vm._v("\n                                " + _vm._s(broker.Rank) + "\n                            ")])]), _vm._v(" "), _c('td', [_vm._v("\n                            " + _vm._s(broker.MinDeposit) + "\n                        ")]), _vm._v(" "), _c('td', [_vm._v("\n                            " + _vm._s(broker.MaxLeverage) + "\n                        ")])])])]), _vm._v(" "), (_vm.inComparison(broker)) ? _c('a', {
      staticClass: "brokers-list-item-comparison",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.removeFromComparison(broker)
        }
      }
    }, [_c('svg', {
      attrs: {
        "width": "29px",
        "height": "29px",
        "viewBox": "0 0 28 29",
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }
    }, [_c('g', {
      attrs: {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }
    }, [_c('circle', {
      attrs: {
        "fill": "#0CAE00",
        "cx": "14.5",
        "cy": "14.5",
        "r": "14.5"
      }
    }), _vm._v(" "), _c('path', {
      attrs: {
        "d": "M13.4482584,18.5301613 L21.9922485,9.98901367 L21.0046387,9 L13.0028687,17.0126343 L13.0028687,17.0353962 L9.934021,13.9698486 L9,14.9414063 L13.0028687,18.9685579 L13.0028687,18.9754028 L13.0062813,18.9719913 L13.0144043,18.9801636 L13.4482584,18.5301613 Z",
        "fill": "#FFFFFF"
      }
    })])])]) : (_vm.comparison.length < 5) ? _c('a', {
      staticClass: "brokers-list-item-comparison",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.addToComparison(broker)
        }
      }
    }, [_c('svg', {
      attrs: {
        "width": "29px",
        "height": "29px",
        "viewBox": "0 0 28 29",
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }
    }, [_c('defs', [_c('circle', {
      attrs: {
        "id": "path-1",
        "cx": "14.5",
        "cy": "14.5",
        "r": "14.5"
      }
    }), _vm._v(" "), _c('mask', {
      attrs: {
        "id": "mask-2",
        "maskContentUnits": "userSpaceOnUse",
        "maskUnits": "objectBoundingBox",
        "x": "0",
        "y": "0",
        "width": "29",
        "height": "29",
        "fill": "white"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": "#path-1"
      }
    })])]), _vm._v(" "), _c('g', {
      attrs: {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }
    }, [_c('use', {
      attrs: {
        "stroke": "#ADADAD",
        "mask": "url(#mask-2)",
        "stroke-width": "2",
        "fill": "#FFFFFF",
        "xlink:href": "#path-1"
      }
    }), _vm._v(" "), _c('g', {
      attrs: {
        "transform": "translate(7.000000, 7.000000)",
        "fill": "#ADADAD"
      }
    }, [_c('rect', {
      attrs: {
        "x": "0",
        "y": "7",
        "width": "15",
        "height": "1"
      }
    }), _vm._v(" "), _c('rect', {
      attrs: {
        "transform": "translate(7.500000, 7.500000) rotate(-270.000000) translate(-7.500000, -7.500000) ",
        "x": "0",
        "y": "7",
        "width": "15",
        "height": "1"
      }
    })])])])]) : _vm._e()])
  })), _vm._v(" "), _c('div', {
    class: 'brokers-comparison-button ' + (_vm.comparison.length ? 'active' : '')
  }, [_c('a', {
    staticClass: "brokers-comparison-button-text",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.compare($event)
      }
    }
  }, [_vm._v("\n            Compare: " + _vm._s(_vm.comparison.length) + "\n        ")]), _vm._v(" "), _c('a', {
    staticClass: "brokers-comparison-button-clear",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.clearComparison($event)
      }
    }
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("Aggregate rating")]), _vm._v(" "), _c('th', [_vm._v("Min Deposit")]), _vm._v(" "), _c('th', [_vm._v("Max Leverage")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9fd95016", module.exports)
  }
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(138)("7bcda46e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-620c4bd5\",\"scoped\":false,\"hasInlineConfig\":false}!../../vue-loader/lib/selector.js?type=styles&index=0!./FadeLoader.vue", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-620c4bd5\",\"scoped\":false,\"hasInlineConfig\":false}!../../vue-loader/lib/selector.js?type=styles&index=0!./FadeLoader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(125)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {};
    },

    props: ['comparison']
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(150),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alexey/PhpstormProjects/brokers-webview/app/components/brokers-comparison.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] brokers-comparison.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bfddaa0", Component.options)
  } else {
    hotAPI.reload("data-v-3bfddaa0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "broker-comparison"
  }, _vm._l((_vm.comparison), function(broker, index) {
    return _c('div', {
      staticClass: "broker-comparison-item"
    }, [_c('div', {
      staticClass: "broker-comparison-card"
    }, [_c('div', {
      staticClass: "broker-comparison-card-padding"
    }, [_c('div', {
      staticClass: "broker-comparison-card-logo"
    }, [_c('img', {
      attrs: {
        "src": 'http://www.brokeries.com/Content/Proto/images/logos/brokers/' + broker.Broker + '.jpg'
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-card-title"
    }, [_vm._v("\n                    " + _vm._s(broker.Broker) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-card-subtitle"
    }, [_vm._v("\n                    " + _vm._s(broker.ProfileType) + " Account\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-card-link-btn"
    }, [_c('a', {
      staticClass: "button button-round button-green",
      attrs: {
        "href": broker.BrokerWebsite,
        "target": "_blank"
      }
    }, [_vm._v("Open account")])])])]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table"
    }, [_c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    Aggregate rating\n                ")]) : _vm._e(), _vm._v(" "), (broker.Rank === 'Excellent') ? _c('span', {
      staticClass: "c-green"
    }, [_vm._v("\n                    " + _vm._s(broker.Rank) + "\n                ")]) : (broker.Rank === 'Poor') ? _c('span', {
      staticClass: "c-gray-light"
    }, [_vm._v("\n                    " + _vm._s(broker.Rank) + "\n                ")]) : _c('span', [_vm._v("\n                    " + _vm._s(broker.Rank) + "\n                ")])]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    Rating\n                ")]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "brokers-card-stars broker-stars"
    }, [_vm._l((Math.round(broker.StarRating)), function(index) {
      return _c('span', {
        staticClass: "broker-stars-item broker-stars-item-filled"
      })
    }), _vm._v(" "), _vm._l(((5 - Math.round(broker.StarRating))), function(index) {
      return _c('span', {
        staticClass: "broker-stars-item"
      })
    })], 2)]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    EUR/USD spread, avg\n                ")]) : _vm._e(), _vm._v("\n                " + _vm._s(broker.AverageEurUsdSpread) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    USD/JPY spread, avg\n                ")]) : _vm._e(), _vm._v("\n                " + _vm._s(broker.AverageUSDJPYSpread) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    GBP/USD spread, avg\n                ")]) : _vm._e(), _vm._v("\n                " + _vm._s(broker.AverageGBPUSDSpread) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    USD/CAD spread, avg\n                ")]) : _vm._e(), _vm._v("\n                " + _vm._s(broker.AverageUSDCADSpread) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    XAU/USD spread, avg\n                ")]) : _vm._e(), _vm._v("\n                " + _vm._s(broker.AverageXAUUSDSpread) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    AUD/USD spread, avg\n                ")]) : _vm._e(), _vm._v("\n                " + _vm._s(broker.AverageAUDUSDSpread) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "broker-comparison-table-row"
    }, [(index == 0) ? _c('div', {
      staticClass: "broker-comparison-table-row-title"
    }, [_vm._v("\n                    USD/CHF spread, avg\n                ")]) : _vm._e(), _vm._v("\n                " + _vm._s(broker.AverageUSDCHFSpread) + "\n            ")])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3bfddaa0", module.exports)
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map