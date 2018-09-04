/*!
 * Copyright (c) 2017 NAVER Corp.
 * @egjs/infinitegrid project is licensed under the MIT license
 * 
 * @egjs/infinitegrid JavaScript library
 * https://github.com/naver/egjs-infinitegrid
 * 
 * @version 3.4.0-snapshot
 * 
 * All-in-one packaged file for ease use of '@egjs/infinitegrid' with below dependencies.
 * NOTE: This is not an official distribution file and is only for user convenience.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["InfiniteGrid"] = factory();
	else
		root["eg"] = root["eg"] || {}, root["eg"]["InfiniteGrid"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return win; });
/* eslint-disable no-new-func, no-nested-ternary */
if (typeof window === "undefined") {
  global.window = {
    document: {},
    navigator: {
      userAgent: ""
    }
  };
}

const win = window;
/* eslint-enable no-new-func, no-nested-ternary */


const document = win.document;
/* harmony export (immutable) */ __webpack_exports__["a"] = document;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);
/**
 * Copyright (c) NAVER Corp.
 * egjs-infinitegrid projects are licensed under the MIT license
 */


for (const name in __WEBPACK_IMPORTED_MODULE_0__index__) {
  __WEBPACK_IMPORTED_MODULE_0__index__["default"][name] = __WEBPACK_IMPORTED_MODULE_0__index__[name];
}

module.exports = __WEBPACK_IMPORTED_MODULE_0__index__["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@egjs/component/dist/component.module.js
var component_module = __webpack_require__(4);
var component_module_default = /*#__PURE__*/__webpack_require__.n(component_module);

// EXTERNAL MODULE: ./src/browser.js
var browser = __webpack_require__(0);

// CONCATENATED MODULE: ./src/consts.js

const ua = browser["b" /* window */].navigator.userAgent;
const SUPPORT_COMPUTEDSTYLE = !!("getComputedStyle" in browser["b" /* window */]);
const SUPPORT_ADDEVENTLISTENER = !!("addEventListener" in browser["a" /* document */]);
const SUPPORT_PASSIVE = (() => {
  let supportsPassiveOption = false;

  try {
    if (SUPPORT_ADDEVENTLISTENER && Object.defineProperty) {
      browser["a" /* document */].addEventListener("test", null, Object.defineProperty({}, "passive", {
        get() {
          supportsPassiveOption = true;
        }

      }));
    }
  } catch (e) {}

  return supportsPassiveOption;
})();
const IS_IE = /MSIE|Trident|Windows Phone|Edge/.test(ua);
const IS_IOS = /iPhone|iPad/.test(ua);
const IS_ANDROID2 = /Android 2\./.test(ua);
const CONTAINER_CLASSNAME = "_eg-infinitegrid-container_";
const IGNORE_CLASSNAME = "_eg-infinitegrid-ignore_";
const TRANSITION_NAME = "_INFINITEGRID_TRANSITION";
const APPEND = true;
const PREPEND = false;
const VERTICAL = "vertical";
const HORIZONTAL = "horizontal";
const CACHE = true;
const NO_CACHE = false;
const TRUSTED = true;
const NO_TRUSTED = false;
const MULTI = true;
const SINGLE = false;
const DUMMY_POSITION = -100000;
const GROUPKEY_ATT = "data-groupkey";
const DEFAULT_OPTIONS = {
  horizontal: false,
  margin: 0
};
const agent = ua.toLowerCase();
const isMobile = /mobi|ios|android/.test(agent);
const ALIGN = {
  START: "start",
  CENTER: "center",
  END: "end",
  JUSTIFY: "justify"
};
const IDLE = 0;
const LOADING_APPEND = 1;
const LOADING_PREPEND = 2;
const PROCESSING = 4;
const webkit = /applewebkit\/([\d|.]*)/g.exec(agent);
const WEBKIT_VERSION = webkit && parseInt(webkit[1], 10) || 0;
const DEFENSE_BROWSER = WEBKIT_VERSION && WEBKIT_VERSION < 537;
const [TRANSFORM, TRANSITION, TRANSITION_END] = function () {
  const properties = {
    transitionend: "",
    webkitTransitionEnd: "-webkit-",
    oTransitionEnd: "-o-",
    mozTransitionEnd: "-moz-"
  };

  for (const property in properties) {
    const prefix = properties[property];

    if (`on${property.toLowerCase()}` in browser["b" /* window */]) {
      return [`${prefix}transform`, `${prefix}transition`, property];
    }
  }

  return [];
}();
// CONCATENATED MODULE: ./src/utils.js


function toArray(nodes) {
  // SCRIPT5014 in IE8
  const array = [];

  if (nodes) {
    for (let i = 0, len = nodes.length; i < len; i++) {
      array.push(nodes[i]);
    }
  }

  return array;
}
function matchHTML(html) {
  return html.match(/^<([A-z]+)\s*([^>]*)>/);
}
/**
 * Select or create element
 * @param {String|HTMLElement|jQuery} param
 *  when string given is as HTML tag, then create element
 *  otherwise it returns selected elements
 * @param {Boolean} multi
 * @returns {HTMLElement}
 */

function $(param, multi = false) {
  let el;

  if (typeof param === "string") {
    // String (HTML, Selector)
    // check if string is HTML tag format
    const match = matchHTML(param); // creating element

    if (match) {
      // HTML
      const dummy = browser["a" /* document */].createElement("div");
      dummy.innerHTML = param;
      el = dummy.childNodes;
    } else {
      // Selector
      el = browser["a" /* document */].querySelectorAll(param);
    }

    if (multi) {
      el = toArray(el);
    } else {
      el = el && el.length > 0 && el[0] || undefined;
    }
  } else if (param === browser["b" /* window */]) {
    // window
    el = param;
  } else if (param.nodeName && (param.nodeType === 1 || param.nodeType === 9)) {
    // HTMLElement, Document
    el = param;
  } else if ("jQuery" in browser["b" /* window */] && param instanceof browser["b" /* window */].jQuery || param.constructor.prototype.jquery) {
    // jQuery
    el = $(multi ? param.toArray() : param.get(0), multi);
  } else if (Array.isArray(param)) {
    el = param.map(v => $(v));

    if (!multi) {
      el = el.length >= 1 ? el[0] : undefined;
    }
  }

  return el;
}
function addEvent(element, type, handler, eventListenerOptions) {
  if (SUPPORT_ADDEVENTLISTENER) {
    let options = eventListenerOptions || false;

    if (typeof eventListenerOptions === "object") {
      options = SUPPORT_PASSIVE ? eventListenerOptions : false;
    }

    element.addEventListener(type, handler, options);
  } else if (element.attachEvent) {
    element.attachEvent(`on${type}`, handler);
  } else {
    element[`on${type}`] = handler;
  }
}
function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent(`on${type}`, handler);
  } else {
    element[`on${type}`] = null;
  }
}
function addOnceEvent(element, type, handler, eventListenerOptions) {
  const callback = e => {
    removeEvent(element, type, callback);
    handler(e);
  };

  addEvent(element, type, callback, eventListenerOptions);
}
function utils_scroll(el, horizontal = false) {
  const prop = `scroll${horizontal ? "Left" : "Top"}`;

  if (el === browser["b" /* window */]) {
    return browser["b" /* window */][horizontal ? "pageXOffset" : "pageYOffset"] || browser["a" /* document */].body[prop] || browser["a" /* document */].documentElement[prop];
  } else {
    return el[prop];
  }
}
function scrollTo(el, x, y) {
  if (el === browser["b" /* window */]) {
    el.scroll(x, y);
  } else {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
}
function scrollBy(el, x, y) {
  if (el === browser["b" /* window */]) {
    el.scrollBy(x, y);
  } else {
    el.scrollLeft += x;
    el.scrollTop += y;
  }
}
function getStyles(el) {
  return (SUPPORT_COMPUTEDSTYLE ? browser["b" /* window */].getComputedStyle(el) : el.currentStyle) || {};
}

function _getSize(el, name, isOffset) {
  if (el === browser["b" /* window */]) {
    // WINDOW
    return browser["b" /* window */][`inner${name}`] || browser["a" /* document */].body[`client${name}`];
  } else if (el.nodeType === 9) {
    // DOCUMENT_NODE
    const doc = el.documentElement;
    return Math.max(el.body[`scroll${name}`], doc[`scroll${name}`], el.body[`offset${name}`], doc[`offset${name}`], doc[`client${name}`]);
  } else {
    // NODE
    let size = 0;

    if (isOffset) {
      const clientRect = el.getBoundingClientRect();
      size = name === "Width" ? clientRect.right - clientRect.left : clientRect.bottom - clientRect.top;
    } else {
      size = el[`client${name}`] || el[`offset${name}`];
    }

    return parseFloat(size || getStyles(el)[name.toLowerCase()]) || 0;
  }
}

function utils_innerWidth(el) {
  return _getSize(el, "Width", false);
}
function utils_innerHeight(el) {
  return _getSize(el, "Height", false);
}
function utils_outerWidth(el) {
  return _getSize(el, "Width", true);
}
function utils_outerHeight(el) {
  return _getSize(el, "Height", true);
}
function getSize(el) {
  return {
    width: utils_outerWidth(el),
    height: utils_outerHeight(el)
  };
}
const STYLE = {
  vertical: {
    pos1: "top",
    endPos1: "bottom",
    size1: "height",
    pos2: "left",
    endPos2: "right",
    size2: "width"
  },
  horizontal: {
    pos1: "left",
    endPos1: "right",
    size1: "width",
    pos2: "top",
    endPos2: "bottom",
    size2: "height"
  }
};
function getStyleNames(isHorizontal) {
  return STYLE[isHorizontal ? HORIZONTAL : VERTICAL];
}
function assignOptions(defaultOptions, options) {
  return Object.assign({}, DEFAULT_OPTIONS, defaultOptions, options);
}
function toZeroArray(outline) {
  if (!outline || !outline.length) {
    return [0];
  }

  return outline;
}
function cloneItems(items) {
  return items.map(item => Object.assign({}, item));
}
function isWindow(el) {
  return el === browser["b" /* window */];
}
function fill(arr, value) {
  const length = arr.length;

  for (let i = length - 1; i >= 0; --i) {
    arr[i] = value;
  }

  return arr;
}
function isUndefined(target) {
  return typeof target === "undefined";
}
// CONCATENATED MODULE: ./src/ItemManager.js


class ItemManager_ItemManager {
  static from(elements, selector, {
    groupKey,
    isAppend
  }) {
    const filted = ItemManager_ItemManager.selectItems($(elements, MULTI), selector); // Item Structure

    return toArray(filted).map(el => ({
      el,
      groupKey,
      content: el.outerHTML,
      rect: {
        top: DUMMY_POSITION,
        left: DUMMY_POSITION
      }
    }));
  }

  static selectItems(elements, selector) {
    return elements.filter(v => {
      const classNames = v.className.split(" ");

      if (classNames.some(c => c === IGNORE_CLASSNAME)) {
        return false;
      } else if (!selector || selector === "*") {
        return v;
      } else {
        return classNames.some(c => c === selector);
      }
    });
  }

  static pluck(data, property) {
    return data.reduce((acc, v) => acc.concat(v[property]), []);
  }

  constructor() {
    this.clear();
  }

  getStatus(startKey, endKey) {
    const datas = this._data;
    const startIndex = Math.max(this.indexOf(startKey), 0);
    const endIndex = this.indexOf(endKey) + 1 || datas.length;
    return {
      _data: datas.slice(startIndex, endIndex).map(data => {
        const items = data.items.map(item => {
          const item2 = Object.assign({}, item);
          delete item2.el;
          return item2;
        });
        const data2 = Object.assign({}, data);
        data2.items = items;
        return data2;
      })
    };
  }

  setStatus(status) {
    const data = status._data;
    this.set(data);
  }

  size() {
    return this._data.length;
  }

  fit(base, horizontal) {
    if (!this._data.length) {
      return;
    }

    const property = horizontal ? "left" : "top";

    if (base !== 0) {
      this._data = this._data.map(v => {
        v.items = v.items.map(item => {
          item.rect[property] -= base;
          return item;
        });
        v.outlines.start = v.outlines.start.map(start => start - base);
        v.outlines.end = v.outlines.end.map(end => end - base);
        return v;
      });
    }
  }

  pluck(property, start, end) {
    const data = isUndefined(start) ? this._data : this._data.slice(start, (isUndefined(end) ? start : end) + 1);
    return ItemManager_ItemManager.pluck(data, property);
  }

  getOutline(index, property) {
    const data = this._data[index];
    return data ? data.outlines[property] : [];
  }

  getEdgeIndex(cursor, start, end) {
    const prop = cursor === "start" ? "min" : "max";
    let index = -1;
    let targetValue = cursor === "start" ? Infinity : -Infinity;

    for (let i = start; i <= end; i++) {
      const value = Math[prop](...this.getOutline(i, cursor));

      if (cursor === "start" && targetValue > value || cursor === "end" && targetValue < value) {
        targetValue = value;
        index = i;
      }
    }

    return index;
  }

  getEdgeValue(cursor, start, end) {
    const outlines = this.pluck("outlines", this.getEdgeIndex(cursor, start, end)).reduce((acc, v) => acc.concat(v[cursor]), []);
    return outlines.length ? Math[cursor === "start" ? "min" : "max"](...outlines) : 0;
  }

  clearOutlines(startCursor = -1, endCursor = -1) {
    const datas = this.get();
    datas.forEach((group, cursor) => {
      if (startCursor <= cursor && cursor <= endCursor) {
        return;
      }

      group.items.forEach(item => {
        item.rect.top = DUMMY_POSITION;
        item.rect.left = DUMMY_POSITION;
      });
      group.outlines.start = [];
      group.outlines.end = [];
    });
  }

  getMaxEdgeValue() {
    const groups = this.get();
    const length = groups.length;

    for (let i = length - 1; i >= 0; --i) {
      const end = groups[i].outlines.end;

      if (end.length) {
        const pos = Math.max(...end);
        return pos;
      }
    }

    return 0;
  }

  append(layouted) {
    this._data.push(layouted);

    return layouted.items;
  }

  prepend(layouted) {
    this._data.unshift(layouted);

    return layouted.items;
  }

  clear() {
    this._data = [];
  }

  remove(element, start, end) {
    let items = [];
    const key = element.getAttribute(GROUPKEY_ATT);
    let data = this.get(start, end).filter(v => String(v.groupKey) === key);

    if (!data.length) {
      return items;
    }

    data = data[0];
    const len = data.items.length;
    let idx = -1;

    for (let i = 0; i < len; i++) {
      if (data.items[i].el === element) {
        idx = i;
        break;
      }
    }

    if (~idx) {
      // remove item information
      data.items.splice(idx, 1);
      this.set(data, key);
      items = data.items;
    }

    return items;
  }

  indexOf(data) {
    const groupKey = typeof data === "object" ? data.groupKey : data;
    const datas = this._data;
    const length = datas.length;

    for (let i = 0; i < length; ++i) {
      if (groupKey === datas[i].groupKey) {
        return i;
      }
    }

    return -1;
  }

  get(start, end) {
    return isUndefined(start) ? this._data : this._data.slice(start, (isUndefined(end) ? start : end) + 1);
  }

  set(data, key) {
    if (!isUndefined(key) && !Array.isArray(data)) {
      const len = this._data.length;
      let idx = -1;

      for (let i = 0; i < len; i++) {
        if (this._data[i].groupKey === key) {
          idx = i;
          break;
        }
      }

      ~idx && (this._data[idx] = data);
    } else {
      this._data = data.concat();
    }
  }

  getData(index) {
    return this._data[index];
  }

}
// CONCATENATED MODULE: ./src/DOMRenderer.js




function createContainer(element) {
  const container = browser["a" /* document */].createElement("div");
  container.className = CONTAINER_CLASSNAME;
  container.style.position = "relative";
  container.style.height = "100%";
  const children = element.children;
  const length = children.length; // for IE8

  for (let i = 0; i < length; i++) {
    container.appendChild(children[0]);
  }

  element.appendChild(container);
  return container;
}

function render(properties, rect, styles) {
  properties.forEach(p => {
    p in rect && (styles[p] = `${rect[p]}px`);
  });
}

function setTransition(styles, transitionDuration, pos1, pos2) {
  styles[`${TRANSITION}-property`] = transitionDuration ? `${TRANSFORM},width,height` : "";
  styles[`${TRANSITION}-duration`] = transitionDuration ? `${transitionDuration}s` : "";
  styles[`${TRANSITION}-delay`] = transitionDuration ? `0s` : "";
  styles[TRANSFORM] = transitionDuration ? `translate(${pos1.left - pos2.left}px,${pos1.top - pos2.top}px)` : "";
}

class DOMRenderer_DOMRenderer {
  static renderItem(item, rect, transitionDuration) {
    if (!item.el) {
      return;
    }

    const {
      el,
      prevRect
    } = item;
    const styles = el.style; // for debugging

    el.setAttribute(GROUPKEY_ATT, item.groupKey);
    styles.position = "absolute";
    render(["width", "height"], rect, styles);

    if (transitionDuration && TRANSITION && prevRect) {
      setTransition(styles, transitionDuration, rect, prevRect);

      if (el[TRANSITION_NAME]) {
        return;
      }

      el[TRANSITION_NAME] = true;
      addOnceEvent(el, TRANSITION_END, () => {
        const itemRect = item.rect;
        setTransition(styles);
        render(["left", "top"], itemRect, styles);
        item.prevRect = itemRect;
        el[TRANSITION_NAME] = false;
      });
    } else {
      render(["left", "top"], rect, styles);
      item.prevRect = rect;
    }
  }

  static renderItems(items, transitionDuration) {
    items.forEach(item => {
      DOMRenderer_DOMRenderer.renderItem(item, item.rect, transitionDuration);
    });
  }

  static removeItems(items) {
    items.forEach(item => {
      if (item.el) {
        DOMRenderer_DOMRenderer.removeElement(item.el);
        item.el = null;
      }
    });
  }

  static removeElement(element) {
    const parentNode = element && element.parentNode;

    if (!parentNode) {
      return;
    }

    parentNode.removeChild(element);
  }

  static createElements(items) {
    if (!items.length) {
      return;
    }

    const noElementItems = items.filter(item => !item.el);

    if (!noElementItems.length) {
      return;
    }

    const elements = $(noElementItems.map(({
      content
    }) => content.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "")).join(""), MULTI);
    noElementItems.forEach((item, index) => {
      item.el = elements[index];
    });
  }

  constructor(element, options) {
    Object.assign(this.options = {
      isEqualSize: false,
      isConstantSize: false,
      horizontal: false,
      container: false
    }, options);
    this._size = {
      container: -1,
      view: -1,
      viewport: -1,
      item: null
    };

    this._init(element);

    this.resize();
  }

  getStatus() {
    return {
      cssText: this.container.style.cssText,
      _size: Object.assign({}, this._size)
    };
  }

  setStatus(status) {
    this.container.style.cssText = status.cssText;
    Object.assign(this._size, status._size);
  }

  updateSize(items) {
    const {
      isEqualSize,
      isConstantSize
    } = this.options;
    const size = this._size;
    return items.map(item => {
      if (!item.el) {
        return item;
      }

      if (isEqualSize && !size.item) {
        size.item = getSize(item.el);
      }

      item.size = isEqualSize && Object.assign(size.item) || isConstantSize && item.orgSize && Object.assign(item.orgSize) || getSize(item.el);

      if (!item.orgSize) {
        item.orgSize = Object.assign({}, item.size);
      }

      return item;
    });
  }

  _init(el) {
    const element = $(el);
    const style = getStyles(element);
    const {
      container,
      horizontal
    } = this.options;
    this._orgStyle = {};

    if (style.position === "static") {
      this._orgStyle.position = element.style.position;
      element.style.position = "relative";
    }

    if (container) {
      const target = horizontal ? ["X", "Y"] : ["Y", "X"];
      this._orgStyle.overflowX = element.style.overflowX;
      this._orgStyle.overflowY = element.style.overflowY;
      element.style[`overflow${target[0]}`] = "scroll";
      element.style[`overflow${target[1]}`] = "hidden";
      this.view = element;
      this.container = container === true ? createContainer(this.view) : container;
    } else {
      this.view = browser["b" /* window */];
      this.container = element;
    }
  }

  append(items) {
    this._insert(items, APPEND, {
      top: DUMMY_POSITION,
      left: DUMMY_POSITION
    });
  }

  prepend(items) {
    this._insert(items, PREPEND, {
      top: DUMMY_POSITION,
      left: DUMMY_POSITION
    });
  }

  createAndInsert(items, isAppend) {
    DOMRenderer_DOMRenderer.createElements(items);
    DOMRenderer_DOMRenderer.renderItems(items);

    this._insert(items, isAppend);
  }

  _insert(items, isAppend, styles) {
    const container = this.container;
    const df = browser["a" /* document */].createDocumentFragment();
    items.forEach(item => {
      styles && DOMRenderer_DOMRenderer.renderItem(item, styles);
      isAppend ? df.appendChild(item.el) : df.insertBefore(item.el, df.firstChild);
    });
    isAppend ? container.appendChild(df) : container.insertBefore(df, container.firstChild);
  }

  _calcSize() {
    return this.options.horizontal ? utils_innerHeight(this.container) : utils_innerWidth(this.container);
  }

  getViewSize() {
    return this._size.view;
  }

  getViewportSize() {
    return this._size.viewport;
  }

  setContainerSize(size) {
    this.container.style[this.options.horizontal ? "width" : "height"] = `${size}px`;
  }

  resize() {
    const horizontal = this.options.horizontal;
    const view = this.view;
    const isResize = this.isNeededResize();

    if (isResize) {
      this._size = {
        viewport: this._calcSize(),
        item: null
      };
    }

    this._size.view = horizontal ? utils_innerWidth(view) : utils_innerHeight(view);
    return isResize;
  }

  isNeededResize() {
    return this._calcSize() !== this._size.viewport;
  }

  clear() {
    this.container.innerHTML = "";
    this.container.style[this.options.horizontal ? "width" : "height"] = "";
    this._size = {
      item: null,
      viewport: -1,
      container: -1,
      view: -1
    };
  }

  destroy() {
    this.clear();
    const container = this.options.container;

    for (const p in this._orgStyle) {
      this[container ? "view" : "container"].style[p] = this._orgStyle[p];
    }

    container && this.container.parentNode.removeChild(this.container);
  }

}
// CONCATENATED MODULE: ./src/Watcher.js


class Watcher_Watcher {
  constructor(view, options) {
    Object.assign(this.options = {
      container: view,
      resize: () => {},
      check: () => {},
      isOverflowScroll: false,
      horizontal: false
    }, options);
    this._timer = {
      resize: null // doubleCheck: null,
      // doubleCheckCount: RETRY,

    };
    this.reset();
    this._containerOffset = 0;
    this._view = view;
    this._scrollIssue = IS_IOS;
    this._onCheck = this._onCheck.bind(this);
    this._onResize = this._onResize.bind(this);
    this.attachEvent();
    this.setScrollPos();
    this.resize();
  }

  getStatus() {
    return {
      _prevPos: this._prevPos,
      scrollPos: this.getOrgScrollPos()
    };
  }

  setStatus(status, applyScrollPos = true) {
    this._prevPos = status._prevPos;
    applyScrollPos && this.scrollTo(status.scrollPos);
  }

  scrollBy(pos) {
    const arrPos = this.options.horizontal ? [pos, 0] : [0, pos];
    scrollBy(this._view, ...arrPos);
    this.setScrollPos();
  }

  scrollTo(pos) {
    const arrPos = this.options.horizontal ? [pos, 0] : [0, pos];
    scrollTo(this._view, ...arrPos);
  }

  getScrollPos() {
    return this._prevPos;
  }

  setScrollPos(pos) {
    let rawPos = pos;

    if (typeof pos === "undefined") {
      rawPos = this.getOrgScrollPos();
    }

    this._prevPos = rawPos - this.getContainerOffset();
  }

  attachEvent() {
    addEvent(this._view, "scroll", this._onCheck);
    addEvent(window, "resize", this._onResize);
  }

  getOrgScrollPos() {
    return utils_scroll(this._view, this.options.horizontal);
  }

  reset() {
    this._prevPos = null;
  }

  _onCheck() {
    const prevPos = this.getScrollPos();
    const orgScrollPos = this.getOrgScrollPos();
    this.setScrollPos(orgScrollPos);
    const scrollPos = this.getScrollPos();

    if (prevPos === null || this._scrollIssue && orgScrollPos === 0 || prevPos === scrollPos) {
      orgScrollPos && (this._scrollIssue = false);
      return;
    }

    this._scrollIssue = false;
    this.options.check({
      isForward: prevPos < scrollPos,
      scrollPos,
      orgScrollPos,
      horizontal: this.options.horizontal
    });
  }

  getContainerOffset() {
    return this._containerOffset;
  }

  _getOffset() {
    const {
      container,
      horizontal
    } = this.options;
    const rect = container.getBoundingClientRect();
    return rect[horizontal ? "left" : "top"] + this.getOrgScrollPos();
  }

  resize() {
    this._containerOffset = this.options.isOverflowScroll ? 0 : this._getOffset();
  }

  _onResize() {
    if (this._timer.resize) {
      clearTimeout(this._timer.resize);
    }

    this._timer.resize = setTimeout(() => {
      this.resize();
      this.options.resize();
      this._timer.resize = null;
      this.reset();
    }, 100);
  }

  detachEvent() {
    removeEvent(this._view, "scroll", this._onCheck);
    removeEvent(window, "resize", this._onResize);
  }

  destroy() {
    this.detachEvent();
    this.reset();
  }

}
// CONCATENATED MODULE: ./src/Infinite.js
function isVisible(group, threshold, scrollPos, endScrollPos) {
  const {
    items,
    outlines
  } = group;
  const start = outlines.start;
  const end = outlines.end;

  if (start.legnth === 0 || end.length === 0 || !items.length || !items[0].el) {
    return 2;
  }

  const min = Math.min(...start);
  const max = Math.max(...end);

  if (endScrollPos + threshold < min) {
    return +1;
  } else if (scrollPos - threshold > max) {
    return -1;
  }

  return 0;
}

class Infinite {
  constructor(itemManger, options) {
    this.options = Object.assign({
      useRecycle: true,
      threshold: 100,
      append: () => {},
      prepend: () => {},
      recycle: () => {}
    }, options);
    this._items = itemManger;
    this.clear();
  }

  setSize(size) {
    this._status.size = size;
  }

  recycle(scrollPos, isForward) {
    if (!this.options.useRecycle) {
      return;
    }

    const {
      startCursor,
      endCursor,
      size
    } = this._status;

    if (startCursor === -1 || endCursor === -1) {
      return;
    }

    const endScrollPos = scrollPos + size;
    const {
      threshold,
      recycle
    } = this.options;

    const visibles = this._items.get(startCursor, endCursor).map(group => isVisible(group, threshold, scrollPos, endScrollPos));

    const length = visibles.length;
    let start = isForward ? 0 : visibles.lastIndexOf(0);
    let end = isForward ? visibles.indexOf(0) - 1 : visibles.length - 1;

    if (!isForward && start !== -1) {
      start += 1;
    }

    if (start < 0 || end < 0 || start > end || end - start + 1 >= length) {
      return;
    }

    start = startCursor + start;
    end = startCursor + end;
    recycle({
      start,
      end
    });

    if (isForward) {
      this.setCursor("start", end + 1);
    } else {
      this.setCursor("end", start - 1);
    }
  }

  scroll(scrollPos) {
    const startCursor = this.getCursor("start");
    const endCursor = this.getCursor("end");
    const items = this._items;

    if (typeof scrollPos !== "number" || startCursor === -1 || endCursor === -1 || !items.size()) {
      return;
    }

    const size = this._status.size;
    const {
      threshold,
      append,
      prepend
    } = this.options;
    const datas = items.get();
    const endScrollPos = Math.max(scrollPos, 0) + size;
    const startEdgePos = Math.max(...datas[startCursor].outlines.start);
    const endEdgePos = Math.min(...datas[endCursor].outlines.end);
    const visibles = datas.map((group, i) => {
      const {
        start,
        end
      } = group.outlines;

      if (!start.length || !end.length) {
        return false;
      }

      const startPos = Math.min(...start);
      const endPos = Math.max(...end);

      if (startPos - threshold <= endScrollPos && scrollPos <= endPos + threshold) {
        return true;
      }

      return false;
    });
    const start = visibles.indexOf(true);
    const end = visibles.lastIndexOf(true);

    if (~start && start < startCursor) {
      prepend({
        cache: datas.slice(start, Math.min(startCursor, end + 1))
      });
    } else if (endCursor < end) {
      append({
        cache: datas.slice(Math.max(start, endCursor + 1), end + 1)
      });
    } else if (endScrollPos >= endEdgePos - threshold) {
      append({
        cache: datas.slice(endCursor + 1, endCursor + 2)
      });
    } else if (scrollPos <= startEdgePos + threshold) {
      prepend({
        cache: datas.slice(startCursor - 1, startCursor)
      });
    }
  }

  setCursor(cursor, index) {
    const status = this._status;
    const items = this._items;
    const size = items.size();

    if (!this.options.useRecycle) {
      status.startCursor = 0;

      if (items.getOutline(size - 1, "end").length) {
        status.endCursor = size - 1;
        return;
      }

      if (cursor !== "end") {
        return;
      }
    }

    if (cursor === "start") {
      status.startCursor = index;
    } else {
      status.endCursor = Math.min(size - 1, index);
    }

    status.startCursor = Math.max(0, status.startCursor);
  }

  setStatus(status) {
    this._status = Object.assign(this._status, status);
  }

  getStatus(startKey, endKey) {
    const {
      startCursor,
      endCursor,
      size
    } = this._status;
    const startIndex = Math.max(this._items.indexOf(startKey), 0);
    const endIndex = (this._items.indexOf(endKey) + 1 || this._items.size()) - 1;
    const start = Math.max(startCursor - startIndex, ~startCursor ? 0 : -1);
    const end = Math.max(Math.min(endCursor - startIndex, endIndex - startIndex), start);
    return {
      startCursor: start,
      endCursor: end,
      size
    };
  }

  getEdgeOutline(cursor) {
    const {
      startCursor,
      endCursor
    } = this._status;

    if (startCursor === -1 || endCursor === -1) {
      return [];
    }

    return this._items.getOutline(cursor === "start" ? startCursor : endCursor, cursor);
  }

  getEdgeValue(cursor) {
    const outlines = this.getEdgeOutline(cursor);
    return outlines.length ? Math[cursor === "start" ? "min" : "max"](...outlines) : 0;
  }

  getVisibleItems() {
    return this._items.pluck("items", this._status.startCursor, this._status.endCursor);
  }

  getCursor(cursor) {
    return this._status[cursor === "start" ? "startCursor" : "endCursor"];
  }

  getVisibleData() {
    return this._items.get(this._status.startCursor, this._status.endCursor);
  }

  remove(element) {
    return this._items.remove(element, this._status.startCursor, this._status.endCursor);
  }

  clear() {
    this._status = {
      startCursor: -1,
      endCursor: -1,
      size: -1
    };
  }

}

/* harmony default export */ var src_Infinite = (Infinite);
// CONCATENATED MODULE: ./src/AutoSizer.js


const AutoSizer_elements = [];
/* eslint-disable */

function onResize(e) {
  AutoSizer_AutoSizer.resizeAll();
}
/* eslint-enable */


class AutoSizer_AutoSizer {
  static add(element, prefix = "data-") {
    if (!element.length) {
      addEvent(browser["b" /* window */], "resize", onResize);
    }

    element.__PREFIX__ = prefix;
    AutoSizer_elements.push(element);
    AutoSizer_AutoSizer.resize(element);
  }

  static remove(element, isFixed = false) {
    const fixed = element.getAttribute(`${element.__PREFIX__}fixed`) || "width";

    if (!isFixed) {
      element.style[fixed === "width" ? "height" : "width"] = "";
    }

    const index = AutoSizer_elements.indexOf(element);

    if (!~index) {
      return;
    }

    AutoSizer_elements.splice(index, 1);

    if (!AutoSizer_elements.length) {
      removeEvent(browser["b" /* window */], "reisze", onResize);
    }
  }

  static resize(element, prefix = "data-") {
    const elementPrefix = typeof element.__PREFIX__ === "string" ? element.__PREFIX__ : prefix;
    const dataWidth = element.getAttribute(`${elementPrefix}width`);
    const dataHeight = element.getAttribute(`${elementPrefix}height`);
    const fixed = element.getAttribute(`${elementPrefix}fixed`);

    if (fixed === "height") {
      const size = utils_innerHeight(element) || dataHeight;
      element.style.width = `${dataWidth / dataHeight * size}px`;
    } else {
      const size = utils_innerWidth(element) || dataWidth;
      element.style.height = `${dataHeight / dataWidth * size}px`;
    }
  }

  static resizeAll() {
    AutoSizer_elements.forEach(element => AutoSizer_AutoSizer.resize(element));
  }

}
// CONCATENATED MODULE: ./src/ImageLoaded.js



const CHECK_ALL = 1;
const CHECK_ONLY_ERROR = 2;

function isDataAttribute(target, prefix) {
  return !!target.getAttribute(`${prefix}width`);
}

class ImageLoaded_ImageLoaded {
  static waitImageLoaded(needCheck, {
    prefix = "",
    length,
    type,
    complete,
    error,
    end
  }) {
    let checkCount = 0;
    let endCount = length;

    if (type !== CHECK_ONLY_ERROR) {
      checkCount = endCount;
    }

    const checkEnd = function () {
      if (--endCount !== 0) {
        return;
      }

      end && end();
    };

    const checkImage = function () {
      checkCount--;

      if (checkCount !== 0) {
        return;
      }

      complete && complete();
    };

    const onError = function (target, itemIndex = target.__ITEM_INDEX__) {
      error && error({
        target,
        itemIndex
      });
    };

    const onCheck = function (e) {
      const target = e.target || e.srcElement;
      removeEvent(target, "error", onCheck);
      removeEvent(target, "load", onCheck);

      if (type === CHECK_ALL && isDataAttribute(target, prefix)) {
        AutoSizer_AutoSizer.remove(target, e.type === "error");
      } else {
        checkImage();
      }

      if (e.type === "error") {
        onError(target);
      }

      delete target.__ITEM_INDEX__;
      checkEnd();
    };

    needCheck.forEach((images, i) => {
      images.forEach(v => {
        // workaround for IE
        if (v.complete && (!IS_IE || IS_IE && v.naturalWidth)) {
          if (!v.naturalWidth) {
            onError(v, i);
          }

          checkImage();
          checkEnd();
          return;
        }

        v.__ITEM_INDEX__ = i;

        if (type === CHECK_ALL && isDataAttribute(v, prefix)) {
          AutoSizer_AutoSizer.add(v, prefix);
          checkImage();
        }

        addEvent(v, "load", onCheck);
        addEvent(v, "error", onCheck);
        IS_IE && v.setAttribute("src", v.getAttribute("src"));
      });
    });
  }

  static checkImageLoaded(el) {
    if (el.tagName === "IMG") {
      return el.complete ? [] : [el];
    } else {
      return toArray(el.querySelectorAll("img"));
    }
  }

  static check(elements, {
    prefix,
    type = CHECK_ALL,
    complete,
    error,
    end
  }) {
    const images = elements.map(element => this.checkImageLoaded(element));
    const length = images.reduce((sum, element) => sum + element.length, 0);

    if (type === CHECK_ONLY_ERROR || length === 0) {
      // convert to async
      setTimeout(() => {
        complete && complete();

        if (length === 0) {
          end && end();
        }
      }, 0);
    }

    if (length > 0) {
      setTimeout(() => {
        this.waitImageLoaded(images, {
          prefix,
          length,
          type,
          complete,
          error,
          end
        });
      }, 0);
    }
  }

}

/* harmony default export */ var src_ImageLoaded = (ImageLoaded_ImageLoaded);
// CONCATENATED MODULE: ./src/LayoutManager.js







function hasTarget(target, value) {
  return ~target.indexOf(value);
}

class LayoutManager_LayoutMananger {
  constructor(items, renderer, options = {}) {
    Object.assign(this.options = {
      attributePrefix: "data-",
      isEqualSize: false,
      isConstantSize: false,
      horizontal: false
    }, options);
    this._items = items;
    this._renderer = renderer;
    this._layout = null;
  }

  setLayout(layout) {
    this._layout = layout;
  }

  setSize(size) {
    this._layout.setSize(size);
  }

  _complete(groups, items, isAppend, isUpdate, callback) {
    const itemManager = this._items;
    const cursor = isAppend ? "end" : "start";
    const groupIndex = itemManager.indexOf(groups[0]);
    const prevGroup = itemManager.getData(groupIndex + (isAppend ? -1 : 1));
    let outline = prevGroup ? prevGroup.outlines[cursor] : [0];

    this._renderer.updateSize(items);

    const groupInfos = groups.map(group => {
      const groupOutline = group.outlines[isAppend ? "start" : "end"];
      const isRelayout = isUpdate || !outline.length || (outline.length === groupOutline.length ? !outline.every((v, index) => v === groupOutline[index]) : true);

      if (!isRelayout) {
        outline = group.outlines[isAppend ? "end" : "start"];
        DOMRenderer_DOMRenderer.renderItems(group.items);
        return group;
      }

      const groupItems = group.items;

      const groupInfo = this._layout[isAppend ? "append" : "prepend"](groupItems, outline, true);

      Object.assign(group, groupInfo);
      DOMRenderer_DOMRenderer.renderItems(groupInfo.items);
      outline = groupInfo.outlines[isAppend ? "end" : "start"];
      return groupInfo;
    });
    callback({
      groups: groupInfos,
      items,
      isAppend
    });
  }

  _error(removeTarget, replaceTarget, target, items, errorIndex, callback) {
    const item = items[errorIndex];
    const element = item.el;
    const prefix = this.options.attributePrefix; // remove item

    const removeItem = () => {
      if (hasTarget(removeTarget, element)) {
        return;
      }

      removeTarget.push(element);
      const index = replaceTarget.indexOf(errorIndex);
      index !== -1 && replaceTarget.splice(index, 1);
    }; // remove image


    const remove = () => {
      if (target === element) {
        removeItem();
        return;
      }

      if (hasTarget(removeTarget, element)) {
        return;
      }

      target.parentNode.removeChild(target);
      item.content = element.outerHTML;

      if (hasTarget(replaceTarget, errorIndex)) {
        return;
      }

      replaceTarget.push(errorIndex);
    }; // replace image


    const replace = src => {
      if (hasTarget(removeTarget, element)) {
        return;
      }

      if (src) {
        if (matchHTML(src) || typeof src === "object") {
          const parentNode = target.parentNode;
          parentNode.insertBefore($(src), target);
          parentNode.removeChild(target);
          item.content = element.outerHTML;
        } else {
          target.src = src;

          if (target.getAttribute(`${prefix}width`)) {
            AutoSizer_AutoSizer.remove(target);
            target.removeAttribute(`${prefix}width`);
            target.removeAttribute(`${prefix}height`);
          }
        }
      }

      item.content = element.outerHTML;

      if (hasTarget(replaceTarget, errorIndex)) {
        return;
      }

      replaceTarget.push(errorIndex);
    }; // replace item


    const replaceItem = content => {
      if (hasTarget(removeTarget, element)) {
        return;
      }

      element.innerHTML = content;
      item.content = element.outerHTML;

      if (hasTarget(replaceTarget, errorIndex)) {
        return;
      }

      replaceTarget.push(errorIndex);
    };

    callback({
      target,
      element,
      items,
      item,
      itemIndex: errorIndex,
      replace,
      replaceItem,
      remove,
      removeItem
    });
  }

  _end(removeTarget, replaceTarget, items, callback) {
    const {
      attributePrefix
    } = this.options;
    const removeTargetLength = removeTarget.length;
    const replaceTargetLength = replaceTarget.length;

    if (!removeTargetLength && !replaceTargetLength) {
      callback({
        remove: []
      });
      return;
    }

    const layoutedItems = replaceTarget.map(itemIndex => items[itemIndex]);

    if (!replaceTargetLength) {
      callback({
        remove: removeTarget,
        layout: true
      });
      return;
    } // wait layoutComplete beacause of error event.


    src_ImageLoaded.check(layoutedItems.map(v => v.el), {
      prefix: attributePrefix,
      complete: () => {
        this._renderer.updateSize(layoutedItems);

        callback({
          remove: removeTarget,
          layout: true
        });
      }
    });
  }

  _insert({
    groups,
    items = ItemManager_ItemManager.pluck(groups, "items"),
    isAppend,
    isUpdate
  }, {
    error = () => {},
    complete = () => {},
    end = () => {}
  }) {
    if (!groups.length) {
      return;
    }

    const checkGroups = isAppend ? groups : groups.reverse();
    const replaceTarget = [];
    const removeTarget = [];
    const elements = items.map(item => item.el);
    const type = this.options.isEqualSize && this._renderer._size.item ? CHECK_ONLY_ERROR : CHECK_ALL;
    const prefix = this.options.attributePrefix;
    src_ImageLoaded.check(elements, {
      prefix,
      type,
      complete: () => {
        if (!this._items) {
          return;
        }

        this._complete(checkGroups, items, isAppend, isUpdate, complete);
      },
      error: ({
        target,
        itemIndex
      }) => {
        if (!this._items) {
          return;
        }

        this._error(removeTarget, replaceTarget, target, items, itemIndex, error);
      },
      end: () => {
        if (!this._items) {
          return;
        }

        this._end(removeTarget, replaceTarget, items, end);
      }
    });
  }

  append({
    groups,
    items,
    isUpdate
  }, callbacks = {}) {
    this._insert({
      groups,
      items,
      isUpdate,
      isAppend: true
    }, callbacks);
  }

  prepend({
    groups,
    items,
    isUpdate
  }, callbacks = {}) {
    this._insert({
      groups,
      items,
      isUpdate,
      isAppend: false
    }, callbacks);
  }

  layout(isRelayout, groups, items) {
    const renderer = this._renderer;
    const {
      isConstantSize
    } = renderer.options;
    const layoutGroups = groups.filter(group => {
      const item = group.items[0];
      return item.orgSize && item.rect.top > DUMMY_POSITION / 10;
    });

    if (!layoutGroups.length) {
      return [];
    }

    let outline = layoutGroups[0].outlines.start;

    if (isRelayout) {
      outline = [outline.length ? Math.min(...outline) : 0];

      if (!isConstantSize && items.length) {
        renderer.updateSize(items);
      }
    }

    this._layout.layout(layoutGroups, outline);

    return layoutGroups;
  }

  destroy() {
    this._items = null;
    this._renderer = null;
  }

}
// CONCATENATED MODULE: ./src/InfiniteGrid.js
/**
 * Copyright (c) 2017 NAVER Corp.
 * egjs projects are licensed under the MIT license
*/







 // IE8
// https://stackoverflow.com/questions/43216659/babel-ie8-inherit-issue-with-object-create

/* eslint-disable */

if (typeof Object.create !== "function") {
  Object.create = function (o, properties) {
    if (typeof o !== "object" && typeof o !== "function") {
      throw new TypeError("Object prototype may only be an Object: " + o);
    } else if (o === null) {
      throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }

    function F() {}

    F.prototype = o;
    return new F();
  };
}
/* eslint-enable */

/**
 * A module used to arrange card elements including content infinitely according to layout type. With this module, you can implement various layouts composed of different card elements whose sizes vary. It guarantees performance by maintaining the number of DOMs the module is handling under any circumstance
 * @ko 콘텐츠가 있는 카드 엘리먼트를 레이아웃 타입에 따라 무한으로 배치하는 모듈. 다양한 크기의 카드 엘리먼트를 다양한 레이아웃으로 배치할 수 있다. 카드 엘리먼트의 개수가 계속 늘어나도 모듈이 처리하는 DOM의 개수를 일정하게 유지해 최적의 성능을 보장한다
 * @alias eg.InfiniteGrid
 * @extends eg.Component
 *
 * @example
```
<ul id="grid">
	<li class="card">
		<div>test1</div>
	</li>
	<li class="card">
		<div>test2</div>
	</li>
	<li class="card">
		<div>test3</div>
	</li>
	<li class="card">
		<div>test4</div>
	</li>
	<li class="card">
		<div>test5</div>
	</li>
	<li class="card">
		<div>test6</div>
	</li>
</ul>
<script>
var some = new eg.InfiniteGrid("#grid").on("layoutComplete", function(e) {
	// ...
});

// If you already have items in the container, call "layout" method.
some.layout();
</script>
```
 *
 * @support {"ie": "8+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
 **/


class InfiniteGrid_InfiniteGrid extends component_module_default.a {
  /**
   * @param {HTMLElement|String|jQuery} element A base element for a module <ko>모듈을 적용할 기준 엘리먼트</ko>
   * @param {Object} [options] The option object of the eg.InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 옵션 객체</ko>
   * @param {String} [options.itemSelector] A selector to select card elements that make up the layout<ko>레이아웃을 구성하는 카드 엘리먼트를 선택할 선택자(selector)</ko>
   * @param {Boolean} [options.useRecycle=true] Indicates whether keep the number of DOMs is maintained. If the useRecycle value is 'true', keep the number of DOMs is maintained. If the useRecycle value is 'false', the number of DOMs will increase as card elements are added. <ko>DOM의 수를 유지할지 여부를 나타낸다. useRecycle 값이 'true'이면 DOM 개수를 일정하게 유지한다. useRecycle 값이 'false' 이면 카드 엘리먼트가 추가될수록 DOM 개수가 계속 증가한다.</ko>
   * @param {Boolean} [options.isOverflowScroll=false] Indicates whether overflow:scroll is applied<ko>overflow:scroll 적용여부를 결정한다.</ko>
   * @param {Boolean} [options.horizontal=false] Direction of the scroll movement (true: horizontal, false: vertical) <ko>스크롤 이동 방향 (true 가로방향, false 세로방향)</ko>
   * @param {Boolean} [options.useFit=true] The useFit option scrolls upwards so that no space is visible until an item is added <ko>위로 스크롤할 시 아이템을 추가하는 동안 보이는 빈 공간을 안보이게 한다.</ko>
   * @param {Boolean} [options.isEqualSize=false] Indicates whether sizes of all card elements are equal to one another. If sizes of card elements to be arranged are all equal and this option is set to "true", the performance of layout arrangement can be improved. <ko>카드 엘리먼트의 크기가 동일한지 여부. 배치될 카드 엘리먼트의 크기가 모두 동일할 때 이 옵션을 'true'로 설정하면 레이아웃 배치 성능을 높일 수 있다</ko>
   * @param {Boolean} [options.isConstantSize=false] Indicates whether sizes of all card elements does not change, the performance of layout arrangement can be improved. <ko>모든 카드 엘리먼트의 크기가 불변일 때 이 옵션을 'true'로 설정하면 레이아웃 배치 성능을 높일 수 있다</ko>
   * @param {Number} [options.transitionDruation=0] Indicates how many seconds a transition effect takes to complete. <ko>트랜지션 효과를 완료하는데 걸리는 시간을 나타낸다.</ko>
   * @param {Number} [options.threshold=100] The threshold size of an event area where card elements are added to a layout.<ko>레이아웃에 카드 엘리먼트를 추가하는 이벤트가 발생하는 기준 영역의 크기.</ko>
   * @param {String} [options.attributePrefix="data-"] The prefix to use element's data attribute.<ko>엘리먼트의 데이타 속성에 사용할 접두사.</ko>
   */
  constructor(element, options) {
    super();
    Object.assign(this.options = {
      itemSelector: "*",
      isOverflowScroll: false,
      threshold: 100,
      isEqualSize: false,
      isConstantSize: false,
      useRecycle: true,
      horizontal: false,
      transitionDuration: 0,
      useFit: true,
      attributePrefix: "data-"
    }, options);
    DEFENSE_BROWSER && (this.options.useFit = false);
    IS_ANDROID2 && (this.options.isOverflowScroll = false);

    this._reset();

    this._loadingBar = {};
    const {
      isOverflowScroll,
      isEqualSize,
      isConstantSize,
      horizontal,
      threshold,
      useRecycle
    } = this.options;
    this._items = new ItemManager_ItemManager();
    this._renderer = new DOMRenderer_DOMRenderer(element, {
      isEqualSize,
      isConstantSize,
      horizontal,
      container: isOverflowScroll
    });
    this._watcher = new Watcher_Watcher(this._renderer.view, {
      isOverflowScroll,
      horizontal,
      container: this._renderer.container,
      resize: () => this._onResize(),
      check: param => this._onCheck(param)
    });
    this._infinite = new src_Infinite(this._items, {
      horizontal,
      useRecycle,
      threshold,
      append: param => this._requestAppend(param),
      prepend: param => this._requestPrepend(param),
      recycle: param => this._recycle(param)
    });
  }
  /**
   * Adds a card element at the bottom of a layout. This method is available only if the isProcessing() method returns false.
   * @ko 카드 엘리먼트를 레이아웃 아래에 추가한다. isProcessing() 메서드의 반환값이 'false'일 때만 이 메서드를 사용할 수 있다
   * 이 메소드는 isProcessing()의 반환값이 false일 경우에만 사용 가능하다.
   * @param {Array|jQuery} elements Array of the card elements to be added <ko>추가할 카드 엘리먼트의 배열</ko>
   * @param {Number|String} [groupKey] The group key to be configured in a card element. It is automatically generated by default.
   * <ko>추가할 카드 엘리먼트에 설정할 그룹 키. 생략하면 값이 자동으로 생성된다.</ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * infinitegrid.append("&lt;div class='item'&gt;test1&lt;/div&gt;&lt;div class='item'&gt;test2&lt;/div&gt;");
   * infinitegrid.append(["&lt;div class='item'&gt;test1&lt;/div&gt;", "&lt;div class='item'&gt;test2&lt;/div&gt;"]);
   * infinitegrid.append([HTMLElement1, HTMLElement2]);
   * infinitegrid.append(jQuery(["&lt;div class='item'&gt;test1&lt;/div&gt;", "&lt;div class='item'&gt;test2&lt;/div&gt;"]));
   */


  append(elements, groupKey) {
    this._manager && this._insert(elements, APPEND, groupKey);
    return this;
  }
  /**
   * Adds a card element at the top of a layout. This method is available only if the isProcessing() method returns false.
   * @ko 카드 엘리먼트를 레이아웃의 위에 추가한다. isProcessing() 메서드의 반환값이 'false'일 때만 이 메서드를 사용할 수 있다
   * @param {Array|jQuery} elements Array of the card elements to be added <ko>추가할 카드 엘리먼트 배열</ko>
   * @param {Number|String} [groupKey] The group key to be configured in a card element. It is automatically generated by default.
   * <ko>추가할 카드 엘리먼트에 설정할 그룹 키. 생략하면 값이 자동으로 생성된다.</ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * infinitegrid.prepend("&lt;div class='item'&gt;test1&lt;/div&gt;&lt;div class='item'&gt;test2&lt;/div&gt;");
   * infinitegrid.prepend(["&lt;div class='item'&gt;test1&lt;/div&gt;", "&lt;div class='item'&gt;test2&lt;/div&gt;"]);
   * infinitegrid.prepend([HTMLElement1, HTMLElement2]);
   * infinitegrid.prepend(jQuery(["&lt;div class='item'&gt;test1&lt;/div&gt;", "&lt;div class='item'&gt;test2&lt;/div&gt;"]));
   */


  prepend(elements, groupKey) {
    this._manager && this._insert(elements, PREPEND, groupKey);
    return this;
  }
  /**
   * Specifies the Layout class to use.
   * @ko 사용할 Layout 클래스를 지정한다.
   * @param {Class|Object} LayoutKlass The Layout class to use or an instance of a layout moudle<ko>사용할 Layout 클래스 또는 레이아웃 모듈의 인스턴스</ko>
   * @param {Object} options Options to apply to the Layout.<ko>Layout에 적용할 옵션</ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * infinitegrid.setLayout(eg.InfiniteGrid.GridLayout, {
   *  margin: 10,
   *  align: "start"
   * });
    * infinitegrid.setLayout(eg.InfiniteGrid.JustifiedLayout, {
   *  margin: 10,
   *  minSize: 100,
   *  maxSize: 200
   * });
    * infinitegrid.setLayout(eg.InfiniteGrid.SquareLayout, {
   *  margin: 10,
   *  column: 2
   * });
   * infinitegrid.setLayout(eg.InfiniteGrid.FrameLayout, {
   *  margin: 10,
   *  frame: [
   *   [1, 2],
    *   [4, 3],
   *  ]
   * });
   * infinitegrid.setLayout(eg.InfiniteGrid.PackingLayout, {
   *  margin: 10,
   *  aspectRatio: 1.5
   * });
   * var layout = new eg.InfiniteGrid.GridLayout({
   * 	margin: 10,
   *	align: "start"
   * });
   * infinitegrid.setLayout(layout);
   */


  setLayout(LayoutKlass, options = {}) {
    const {
      isEqualSize,
      isConstantSize,
      attributePrefix,
      horizontal
    } = this.options;

    if (!this._manager) {
      this._manager = new LayoutManager_LayoutMananger(this._items, this._renderer, {
        attributePrefix,
        isEqualSize,
        isConstantSize
      });
    }

    if (typeof LayoutKlass === "function") {
      this._manager.setLayout(new LayoutKlass(Object.assign(options, {
        horizontal
      })));
    } else {
      LayoutKlass.options.horizontal = horizontal;

      this._manager.setLayout(LayoutKlass);
    }

    this._renderer.resize();

    this._setSize(this._renderer.getViewportSize());

    return this;
  }

  _setSize(size) {
    this._infinite.setSize(this._renderer.getViewSize());

    this._manager.setSize(size);
  }
  /**
   * Returns the layouted items.
   * @ko 레이아웃된 아이템들을 반환한다.
   * @param {Boolean} includeCached Indicates whether to include the cached items. <ko>캐싱된 아이템을 포함할지 여부를 나타낸다.</ko>
   * @returns {Array} List of items <ko>아이템의 목록</ko>
   */


  getItems(includeCached = false) {
    return includeCached ? this._items.pluck("items") : this._infinite.getVisibleItems();
  }

  _fitItems(base, margin = 0) {
    base > 0 && this._watcher.scrollBy(-base);

    this._items.fit(base, this.options.horizontal);

    DOMRenderer_DOMRenderer.renderItems(this.getItems());

    this._setContainerSize(this._getEdgeValue("end") || margin);

    base < 0 && this._watcher.scrollBy(-base);
  } // called by visible


  _fit(useFit = this.options.useFit) {
    let base = this._getEdgeValue("start");

    const margin = this._getLoadingStatus() === LOADING_PREPEND && this._status.loadingSize || 0;
    const {
      isConstantSize,
      isEqualSize,
      useRecycle
    } = this.options;

    if (!useRecycle || !useFit || isConstantSize || isEqualSize) {
      if (base < margin) {
        this._fitItems(base - margin, margin);
      }

      base = 0;
    } else if (base !== 0 || margin) {
      this._fitItems(base - margin, margin);
    } else {
      return 0;
    }

    this._isLoading() && this._renderLoading();
    return base;
  }

  _getEdgeValue(cursor) {
    return this._infinite.getEdgeValue(cursor);
  }
  /**
   * Rearranges a layout.
   * @ko 레이아웃을 다시 배치한다.
   * @param {Boolean} [isRelayout=true] Indicates whether a card element is being relayouted <ko>카드 엘리먼트 재배치 여부</ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   */


  layout(isRelayout = true) {
    if (!this._manager) {
      return this;
    }

    const renderer = this._renderer;
    const itemManager = this._items;
    const infinite = this._infinite;
    const isResize = renderer.resize();
    const items = this.getItems();
    const {
      isEqualSize,
      isConstantSize,
      transitionDuration
    } = this.options;
    const isLayoutAll = isRelayout && (isEqualSize || isConstantSize);
    const size = itemManager.size();

    if (isRelayout && isResize) {
      this._setSize(renderer.getViewportSize());
    } // check childElement


    if (!size) {
      this._insert(toArray(renderer.container.children), true);

      return this;
    }

    if (!items.length) {
      return this;
    } // layout datas


    const startCursor = infinite.getCursor("start");
    const endCursor = infinite.getCursor("end");
    const data = isLayoutAll || !(isRelayout && isResize) ? itemManager.get() : itemManager.get(startCursor, endCursor); // LayoutManger interface

    this._manager.layout(isRelayout, data, isResize ? items : []);

    if (isLayoutAll) {
      this._fit();
    } else if (isRelayout && isResize) {
      itemManager.clearOutlines(startCursor, endCursor);
    }

    DOMRenderer_DOMRenderer.renderItems(items, transitionDuration);
    isRelayout && this._watcher.setScrollPos();

    this._onLayoutComplete({
      items,
      isAppend: APPEND,
      fromCache: CACHE,
      isTrusted: NO_TRUSTED,
      useRecycle: false,
      isLayout: true
    });

    return this;
  }
  /**
   * Removes a item element on a grid layout.
   * @ko 그리드 레이아웃의 카드 엘리먼트를 삭제한다.
   * @param {HTMLElement} item element to be removed <ko>삭제될 아이템 엘리먼트</ko>
   * @return {Object}  Removed item element <ko>삭제된 아이템 엘리먼트 정보</ko>
   */


  remove(element, isLayout = true) {
    if (element) {
      const items = this._infinite.remove(element);

      items && DOMRenderer_DOMRenderer.removeElement(element);
      isLayout && this.layout(false);
      return items;
    }

    return null;
  }
  /**
   * Returns the list of group keys which belongs to card elements currently being maintained. You can use the append() or prepend() method to configure group keys so that multiple card elements can be managed at once. If you do not use these methods to configure group keys, groupkey is automatically generated.
   * @ko 현재 유지하고 있는 카드 엘리먼트의 그룹 키 목록을 반환한다. 여러 개의 카드 엘리먼트를 묶어서 관리할 수 있도록 append() 메서드나 prepend() 메서드에서 그룹 키를 지정할 수 있다. append() 메서드나 prepend() 메서드에서 그룹 키를 지정하지 않았다면 자동으로 그룹키가 생성된다.
   * @param {Boolean} includeCached Indicates whether to include the cached groups. <ko>캐싱된 그룹을 포함할지 여부를 나타낸다.</ko>
   * @return {Array} List of group keys <ko>그룹 키의 목록</ko>
   */


  getGroupKeys(includeCached) {
    const data = includeCached ? this._items.get() : this._infinite.getVisibleData();
    return data.map(v => v.groupKey);
  }
  /**
   * Returns the current state of a module such as location information. You can use the setStatus() method to restore the information returned through a call to this method.
   * @ko 카드의 위치 정보 등 모듈의 현재 상태 정보를 반환한다. 이 메서드가 반환한 정보를 저장해 두었다가 setStatus() 메서드로 복원할 수 있다
   * @return {Object} State object of the eg.InfiniteGrid module<ko>eg.InfiniteGrid 모듈의 상태 객체</ko>
   */


  getStatus(startKey, endKey) {
    return {
      _status: Object.assign({}, this._status),
      _items: this._items.getStatus(startKey, endKey),
      _renderer: this._renderer.getStatus(),
      _watcher: this._watcher.getStatus(),
      _infinite: this._infinite.getStatus(startKey, endKey)
    };
  }
  /**
   * Sets the state of the eg.InfiniteGrid module with the information returned through a call to the getStatue() method.
   * @ko getStatue() 메서드가 저장한 정보로 eg.InfiniteGrid 모듈의 상태를 설정한다.
   * @param {Object} status State object of the eg.InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 상태 객체</ko>
   * @param {boolean} [applyScrollPos=true] Checks whether to scroll<ko>스크롤의 위치를 복원할지 결정한다.</ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   */


  setStatus(status, applyScrollPos = true) {
    if (!status) {
      return this;
    }

    const {
      _status,
      _renderer,
      _items,
      _watcher,
      _infinite
    } = status;

    if (!_status || !_renderer || !_items || !_watcher || !_infinite) {
      return this;
    }

    const items = this._items;
    const renderer = this._renderer;
    const watcher = this._watcher;
    const infinite = this._infinite;
    watcher.detachEvent();
    Object.assign(this._status, _status);
    this._status.processingStatus = IDLE;
    items.setStatus(_items);
    renderer.setStatus(_renderer);
    infinite.setStatus(_infinite);
    const visibleItems = this.getItems();
    const length = visibleItems.length;
    renderer.createAndInsert(visibleItems);
    const isReLayout = renderer.isNeededResize();
    watcher.setStatus(_watcher, applyScrollPos);
    watcher.attachEvent();
    const {
      isConstantSize,
      isEqualSize
    } = this.options;

    if (!length) {
      this._requestAppend({
        cache: visibleItems.slice(0, 1)
      });
    } else if (isReLayout) {
      renderer.resize();

      this._setSize(renderer.getViewportSize());

      if (isConstantSize) {
        this.layout(true);
      } else {
        this._items.clearOutlines();

        this._postLayout({
          fromCache: true,
          groups: isEqualSize ? items.get() : infinite.getVisibleData(),
          items: visibleItems,
          newItems: visibleItems,
          isAppend: true,
          isTrusted: false
        });
      }
    } else {
      this.layout(false);
    }

    return this;
  }
  /**
   * Clears added card elements and data.
   * @ko 추가된 카드 엘리먼트와 데이터를 모두 지운다.
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   */


  clear() {
    this._items.clear();

    this._renderer.clear();

    this._infinite.clear();

    this._reset();

    this._appendLoadingBar();

    return this;
  }
  /**
   * Specifies the Loading Bar to use for append or prepend items.
   * @ko 아이템을 append 또는 prepend 하기 위해 사용할 로딩 바를 지정한다.
   * @param {String|Object} [userLoadingBar={}] The loading bar HTML markup or element or element selector <ko> 로딩 바 HTML 또는 element 또는 selector </ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   */


  setLoadingBar(userLoadingBar = {}) {
    const loadingBarObj = typeof userLoadingBar === "object" ? userLoadingBar : {
      "append": userLoadingBar,
      "prepend": userLoadingBar
    };
    this._status.loadingSize = 0;
    this._status.loadingStyle = {};
    const loadingBar = this._loadingBar;

    for (const type in loadingBarObj) {
      loadingBar[type] = $(loadingBarObj[type]);
      loadingBar[type].className += ` ${IGNORE_CLASSNAME}`;
    }

    this._appendLoadingBar();

    return this;
  }

  _appendLoadingBar() {
    const loadingBar = this._loadingBar;
    const container = this._renderer.container;

    for (const type in loadingBar) {
      container.appendChild(loadingBar[type]);
    }
  }
  /**
   * Checks whether a card element or data is being added.
   * @ko 카드 엘리먼트 추가 또는 데이터 로딩이 진행 중인지 확인한다
   * @return {Boolean} Indicates whether a card element or data is being added <ko>카드 엘리먼트 추가 또는 데이터 로딩 진행 중 여부</ko>
   */


  isProcessing() {
    return this._isProcessing() || this._isLoading();
  }

  _isProcessing() {
    return (this._status.processingStatus & PROCESSING) > 0;
  }

  _isLoading() {
    return this._getLoadingStatus() > 0;
  }

  _getLoadingStatus() {
    return this._status.processingStatus & (LOADING_APPEND | LOADING_PREPEND);
  }

  _process(status, isAdd = true) {
    if (isAdd) {
      this._status.processingStatus |= status;
    } else {
      this._status.processingStatus -= this._status.processingStatus & status;
    }
  }

  _insert(elements, isAppend, groupKey) {
    if (this._isProcessing() || elements.length === 0) {
      return;
    }

    const key = typeof groupKey === "undefined" ? new Date().getTime() + Math.floor(Math.random() * 1000) : groupKey;
    const items = ItemManager_ItemManager.from(elements, this.options.itemSelector, {
      isAppend,
      groupKey: key,
      outlines: {
        start: [],
        end: []
      }
    });

    if (!items.length) {
      return;
    }

    const group = {
      groupKey: key,
      items,
      outlines: {
        start: [],
        end: []
      }
    };
    const method = isAppend ? "append" : "prepend";

    this._items[method](group);

    if (!isAppend) {
      const infinite = this._infinite;
      const startCursor = infinite.getCursor("start");
      const endCursor = infinite.getCursor("end");
      infinite.setCursor("start", startCursor + 1);
      infinite.setCursor("end", endCursor + 1);
    }

    this._postLayout({
      fromCache: NO_CACHE,
      groups: [group],
      items,
      newItems: items,
      isAppend,
      isTrusted: NO_TRUSTED
    });
  } // add items, and remove items for recycling


  _recycle({
    start,
    end
  }) {
    if (!this.options.useRecycle) {
      return;
    }

    DOMRenderer_DOMRenderer.removeItems(this._items.pluck("items", start, end));
  }
  /**
   * Returns the element of loading bar.
   * @ko 로딩 바의 element를 반환한다.
   * @param {Boolean} [isAppend=currentLoadingBar|true] Checks whether the card element is added to the append () method. <ko>카드 엘리먼트가 append() 메서드로 추가 할 것인지 확인한다.</ko>
   * @return {Element} The element of loading bar. <ko>로딩 바의 element</ko>
   */


  getLoadingBar(isAppend = this._getLoadingStatus() !== LOADING_PREPEND) {
    return this._loadingBar[isAppend ? "append" : "prepend"];
  }
  /**
   * Start loading for append/prepend during loading data.
   * @ko 데이터가 로딩되는 동안 append/prepend하길 위해 로딩을 시작한다.
   * @param {Boolean} [isAppend=true] Checks whether the card element is added to the append () method. <ko>카드 엘리먼트가 append() 메서드로 추가 할 것인지 확인한다.</ko>
   * @param {Object} [userStyle = {display: "block"}] custom style to apply to this loading bar for start. <ko> 로딩 시작을 위한 로딩 바에 적용할 커스텀 스타일 </ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   */


  startLoading(isAppend, userStyle = {
    display: "block"
  }) {
    if (this._isLoading()) {
      return this;
    }

    const type = isAppend ? "append" : "prepend";

    this._process(isAppend ? LOADING_APPEND : LOADING_PREPEND);

    if (!this._loadingBar[type]) {
      return this;
    }

    this._renderLoading(userStyle);

    this._status.loadingStyle = userStyle;

    if (!isAppend) {
      this._fit();
    } else {
      this._setContainerSize(this._getEdgeValue("end") + this._status.loadingSize);
    }

    return this;
  }

  _renderLoading(userStyle = this._status.loadingStyle) {
    if (!this._isLoading()) {
      return;
    }

    const isAppend = this._getLoadingStatus() === LOADING_APPEND;
    const el = this._loadingBar[isAppend ? "append" : "prepend"];

    if (!el) {
      return;
    }

    const style = Object.assign({
      position: "absolute"
    }, userStyle);

    for (const property in style) {
      el.style[property] = style[property];
    }

    this._status.loadingSize = this.options.horizontal ? utils_outerWidth(el) : utils_outerHeight(el);
    const posName = this.options.horizontal ? "left" : "top";

    if (!(posName in style)) {
      const pos = isAppend ? this._getEdgeValue("end") : this._getEdgeValue("start") - this._status.loadingSize;
      el.style[posName] = `${pos}px`;
    }
  }
  /**
   * End loading after startLoading() for append/prepend
   * @ko  append/prepend하길 위해 startLoading() 호출해선 걸었던 로딩을 끝낸다.
   * @param {Object} [userStyle = {display: "none"}] custom style to apply to this loading bar for end <ko> 로딩 시작을 위한 로딩 바에 적용할 커스텀 스타일 </ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   */


  endLoading(userStyle = {
    display: "none"
  }) {
    if (!this._isLoading()) {
      return this;
    }

    const isAppend = this._getLoadingStatus() === LOADING_APPEND;
    const type = isAppend ? "append" : "prepend";
    const el = this._loadingBar[type];
    const status = this._status;
    const size = status.loadingSize;

    this._process(LOADING_APPEND | LOADING_PREPEND, false);

    status.loadingSize = 0;
    status.loadingStyle = {};

    if (el) {
      const style = Object.assign({
        [this.options.horizontal ? "left" : "top"]: `${-size}px`
      }, userStyle);

      for (const property in style) {
        el.style[property] = style[property];
      }

      if (!isAppend) {
        this._fitItems(size);
      } else {
        this._setContainerSize(this._getEdgeValue("end"));
      }
    }

    if (this.options.useRecycle && !this.isProcessing()) {
      this._infinite.recycle(this._watcher.getScrollPos(), isAppend);
    }

    return this;
  }

  _setContainerSize(size) {
    this._renderer.setContainerSize(Math.max(this._items.getMaxEdgeValue(), size));
  }
  /**
   * Move to some group or item position.
   * @ko 해당하는 그룹 또는 아이템의 위치로 이동한다.
   * @param {Number} [index] group's index <ko> 그룹의 index</ko>
   * @param {Number} [itemIndex=-1] item's index <ko> 그룹의 index</ko>
   * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   */


  moveTo(index, itemIndex = 0) {
    if (this.isProcessing()) {
      return this;
    }

    const data = this._items.getData(index);

    if (!data) {
      return this;
    }

    const infinite = this._infinite;
    const outlines = data.outlines;
    const items = data.items;
    const item = items[itemIndex];
    const isResize = outlines.start && outlines.start.length === 0;
    const startCursor = infinite.getCursor("start");
    const endCursor = infinite.getCursor("end");
    const isInCursor = startCursor <= index && index <= endCursor;
    const {
      useRecycle,
      horizontal
    } = this.options;

    if (isInCursor || !useRecycle || !isResize) {
      let pos = item ? item.rect[horizontal ? "left" : "top"] : Math.max(...outlines.start);
      const fit = Math.min(...outlines.start);

      if (fit < 0) {
        // base < 0
        this._fitItems(fit, 0);

        pos -= fit;
      }

      const isAppend = index > startCursor;

      if (isInCursor || isAppend) {
        this._scrollTo(pos);

        return this;
      }

      this._postLayout({
        fromCache: true,
        groups: [data],
        items,
        newItems: [],
        isAppend,
        isTrusted: false,
        moveCache: true,
        moveItem: itemIndex
      });

      return this;
    } else {
      const isAppend = index > endCursor || index < startCursor - 1;

      this._postCache({
        isAppend,
        cache: [data],
        isTrusted: false,
        moveItem: itemIndex
      });
    }

    return this;
  }

  _setScrollPos(pos) {
    this._watcher.setScrollPos(this._watcher.getContainerOffset() + pos);
  }

  _scrollTo(pos) {
    this._watcher.scrollTo(this._watcher.getContainerOffset() + pos);
  }

  _onImageError(e) {
    /**
     * This event is fired when an error occurs in the image.
     * @ko 이미지 로드에 에러가 날 때 발생하는 이벤트.
     * @event eg.InfiniteGrid#imageError
     * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @param {Element} param.target Appending card's image element.<ko>추가 되는 카드의 이미지 엘리먼트</ko>
     * @param {Element} param.elememt The item's element with error images.<ko>에러난 이미지를 가지고 있는 아이템의 엘리먼트</ko>
     * @param {Object} param.items The items being added.<ko>화면에 추가중인 아이템들</ko>
     * @param {Object} param.item The item with error images.<ko>에러난 이미지를 가지고 있는 아이템</ko>
     * @param {Number} param.itemIndex The item's index with error images.<ko>에러난 이미지를 가지고 있는 아이템의 인덱스</ko>
     * @param {Function} param.remove In the imageError event, this method expects to remove the error image.<ko>이미지 에러 이벤트에서 이 메서드는 에러난 이미지를 삭제한다.</ko>
     * @param {Function} param.removeItem In the imageError event, this method expects to remove the item with the error image.<ko>이미지 에러 이벤트에서 이 메서드는 에러난 이미지를 가지고 있는 아이템을 삭제한다.</ko>
     * @param {Function} param.replace In the imageError event, this method expects to replace the error image's source or element.<ko>이미지 에러 이벤트에서 이 메서드는 에러난 이미지의 주소 또는 엘리먼트를 교체한다.</ko>
     * @param {Function} param.replaceItem In the imageError event, this method expects to replace the item's contents with the error image.<ko>이미지 에러 이벤트에서 이 메서드는 에러난 이미지를 가지고 있는 아이템의 내용을 교체한다.</ko>
     * @example
    ig.on("imageError", e => {
    e.remove();
    e.removeItem();
    e.replace("http://...jpg");
    e.replace(imageElement);
    e.replaceItem("item html");
    });
     */
    this.trigger("imageError", Object.assign(e, {
      element: e.item.el
    }));
  }

  _postCache({
    cache,
    isAppend,
    isTrusted = true,
    moveItem = -1
  }) {
    const {
      isConstantSize
    } = this.options;
    const items = ItemManager_ItemManager.pluck(cache, "items");
    let fromCache = true;
    const newItems = items.filter(item => {
      if (!item.orgSize) {
        fromCache = false;
        return true;
      }

      return !isConstantSize && item.rect.top < DUMMY_POSITION / 10;
    });

    this._postLayout({
      fromCache,
      groups: cache,
      items,
      newItems,
      isAppend,
      isTrusted,
      moveItem
    });
  }

  _postLayout({
    fromCache,
    groups,
    items = ItemManager_ItemManager.pluck(groups, "items"),
    newItems,
    isAppend,
    isTrusted,
    moveCache,
    moveItem = -2
  }) {
    this._process(PROCESSING);

    const method = isAppend ? "append" : "prepend";
    const itemManager = this._items;
    const horizontal = this.options.horizontal;
    DOMRenderer_DOMRenderer.createElements(items);

    this._renderer[method](items);

    this._manager[method]({
      groups,
      items: newItems,
      isAppend
    }, {
      complete: () => {
        const infinite = this._infinite;
        const startCursor = Math.max(infinite.getCursor("start"), 0);
        const endCursor = Math.max(infinite.getCursor("end"), 0);
        let requestStartCursor = itemManager.indexOf(groups[0].groupKey);
        let requestEndCursor = itemManager.indexOf(groups[groups.length - 1].groupKey);
        let isInCursor = true;

        if (requestStartCursor > endCursor + 1 || requestEndCursor < startCursor - 1) {
          isInCursor = false;
        }

        if (isInCursor) {
          if (isAppend) {
            requestStartCursor = startCursor;
            requestEndCursor = Math.max(endCursor, requestEndCursor);
          } else {
            requestStartCursor = Math.max(Math.min(startCursor, requestStartCursor), 0);
            requestEndCursor = endCursor;
          }
        }

        !isInCursor && this._recycle({
          start: startCursor,
          end: endCursor
        });
        infinite.setCursor("start", requestStartCursor);
        infinite.setCursor("end", requestEndCursor);

        if (moveItem > -1) {
          const pos = items[moveItem].rect[horizontal ? "left" : "top"];

          if (!isInCursor && !moveCache) {
            itemManager.clearOutlines(requestStartCursor, requestEndCursor);
          }

          this._scrollTo(pos);

          this._setScrollPos(pos);
        }

        this._onLayoutComplete({
          groups,
          items,
          isAppend,
          fromCache,
          isTrusted,
          useRecycle: false
        });
      },
      error: e => this._onImageError(e),
      end: ({
        remove,
        layout
      }) => {
        remove.forEach(el => this.remove(el, false));

        if (layout) {
          this.layout(false);
        } else if (!this.isProcessing() && this.options.useRecycle) {
          const watcher = this._watcher;
          const scrollPos = watcher.getScrollPos();

          this._infinite.recycle(scrollPos, isAppend);
        }
      }
    });

    return this;
  } // called by visible


  _requestAppend({
    cache
  }) {
    if (this._isProcessing()) {
      return;
    }

    if (cache && cache.length) {
      this._postCache({
        cache,
        isAppend: APPEND
      });
    } else {
      /**
       * This event is fired when a card element must be added at the bottom or right of a layout because there is no card to be displayed on screen when a user scrolls near bottom or right.
       * @ko 카드 엘리먼트가 레이아웃의 아래나 오른쪽에 추가돼야 할 때 발생하는 이벤트. 사용자가 아래나 오른쪽으로 스크롤해서 화면에 표시될 카드가 없을 때 발생한다
       * @event eg.InfiniteGrid#append
       * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
       * @param {String|Number} groupKey The group key of the first group visible on the screen <ko>화면에 보여지는 마지막 그룹의 그룹키</ko>
       * @param {Boolean} param.isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       * @param {Function} param.startLoading Start loading for append loading data. <ko> 뒷쪽에 추가되는 데이터 로딩을 시작한다. </ko>
       * @param {Object} param.startLoading.userStyle The custom style to apply to this loading bar for start. <ko> 로딩을 시작할 때 로딩 바에 적용될 사용자 스타일 </ko>
       * @param {Function} param.endLoading End loading after startLoading() for append/prepend loading data. <ko>데이터 로딩을 위해 append/prepend startLoading() 호출 이후 로딩을 끝낸다.</ko>
       * @param {Object} param.endLoading.userStyle The custom style to apply to this loading bar for start. <ko> 로딩이 끝날 때 로딩 바에 적용될 사용자 스타일 </ko>
       */
      this.trigger("append", {
        isTrusted: TRUSTED,
        groupKey: this.getGroupKeys().pop(),
        startLoading: userStyle => {
          this.startLoading(true, userStyle);
        },
        endLoading: userStyle => {
          this.endLoading(userStyle);
        }
      });
    }
  } // called by visible


  _requestPrepend({
    cache
  }) {
    this._fit(this.options.useFit || !cache.length);

    if (this._isProcessing()) {
      return;
    }

    if (cache && cache.length) {
      this._postCache({
        cache,
        isAppend: PREPEND
      });
    } else {
      /**
       * This event is fired when a card element must be added at the top or left of a layout because there is no card to be displayed on screen when a user scrolls near top or left.
       * @ko 카드가 레이아웃의 위나 왼쪽에 추가돼야 할 때 발생하는 이벤트. 사용자가 위나 왼쪽으로 스크롤해서 화면에 표시될 카드가 없을 때 발생한다.
       * @event eg.InfiniteGrid#prepend
       * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
       * @param {String|Number} groupKey The group key of the first group visible on the screen <ko>화면에 보여지는 첫번째 그룹의 그룹키</ko>
       * @param {Boolean} param.isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       * @param {Function} param.startLoading Start loading for prepend loading data. <ko> 앞쪽에 추가되는 데이터 로딩을 시작한다. </ko>
       * @param {Object} param.startLoading.userStyle The custom style to apply to this loading bar for start. <ko> 로딩을 시작할 때 로딩 바에 적용될 사용자 스타일 </ko>
       * @param {Function} param.endLoading End loading after startLoading() for append/prepend loading data. <ko>데이터 로딩을 위해 append/prepend startLoading() 호출 이후 로딩을 끝낸다.</ko>
       * @param {Object} param.endLoading.userStyle The custom style to apply to this loading bar for start. <ko> 로딩이 끝날 때 로딩 바에 적용될 사용자 스타일 </ko>
       */
      this.trigger("prepend", {
        isTrusted: TRUSTED,
        groupKey: this.getGroupKeys().shift(),
        startLoading: userStyle => {
          this.startLoading(false, userStyle);
        },
        endLoading: userStyle => {
          this.endLoading(userStyle);
        }
      });
    }
  }

  _onResize() {
    this.layout(true);
  }

  _onCheck({
    isForward,
    scrollPos,
    horizontal,
    orgScrollPos
  }) {
    /**
     * This event is fired when the user scrolls.
     * @ko 사용자가 스크롤 할 경우 발생하는 이벤트.
     * @event eg.InfiniteGrid#change
     * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @param {Boolean} param.isForward Indicates whether the scroll progression direction is forward or backword. <ko>스크롤 진행방향이 앞쪽으로 진행하는 지, 뒤쪽으로 진행하는지를 나타낸다.</ko>
     * @param {Number} param.scrollPos Current scroll position value relative to the infiniteGrid container element. <ko>infiniteGrid 컨테이너 엘리먼트 기준의 현재 스크롤 위치값</ko>
     * @param {Boolean} param.orgScrollPos Current position of the scroll <ko>현재 스크롤 위치값</ko>
     * @param {Boolean} param.isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
     * @param {Boolean} options.horizontal Direction of the scroll movement (true: horizontal, false: vertical) <ko>스크롤 이동 방향 (true 가로방향, false 세로방향</ko>
     */
    this.trigger("change", {
      isForward,
      horizontal,
      scrollPos,
      orgScrollPos
    });

    this._infinite.scroll(scrollPos);
  }

  _onLayoutComplete({
    items,
    isAppend,
    isTrusted = false,
    useRecycle = this.options.useRecycle,
    fromCache = false,
    isLayout = false
  }) {
    const viewSize = this._renderer.getViewSize();

    if (!isAppend) {
      this._fit();
    } else {
      this._isLoading() && this._renderLoading();
    }

    const watcher = this._watcher;
    const scrollPos = watcher.getScrollPos(); // recycle after _fit beacause prepend and append are occured simultaneously by scroll.

    if (!isLayout && useRecycle && !this._isLoading()) {
      this._infinite.recycle(scrollPos, isAppend);
    }

    const size = this._getEdgeValue("end");

    isAppend && this._setContainerSize(size + this._status.loadingSize || 0);
    !isLayout && this._process(PROCESSING, false);
    /**
     * This event is fired when layout is successfully arranged through a call to the append(), prepend(), or layout() method.
     * @ko 레이아웃 배치가 완료됐을 때 발생하는 이벤트. append() 메서드나 prepend() 메서드, layout() 메서드 호출 후 카드의 배치가 완료됐을 때 발생한다
     * @event eg.InfiniteGrid#layoutComplete
     *
     * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @param {Array} param.target Rearranged card elements<ko>재배치된 카드 엘리먼트들</ko>
     * @param {Boolean} param.fromCache Check whether these items are cache or not <ko>해당 아이템들이 캐시인지 아닌지 확인한다.</ko>
     * @param {Boolean} param.isLayout Returns true if this is an event called by resize event or layout method. Returns false if this is an event called by adding an item. <ko>해당 이벤트가 리사이즈 이벤트 또는 layout() 메서드를 통해 호출됐으면 true, 아이템 추가로 호출됐으면 false를 반환한다.</ko>
     * @param {Boolean} param.isAppend Checks whether the append() method is used to add a card element. It returns true even though the layoutComplete event is fired after the layout() method is called. <ko>카드 엘리먼트가 append() 메서드로 추가됐는지 확인한다. layout() 메서드가 호출된 후 layoutComplete 이벤트가 발생해도 'true'를 반환한다.</ko>
     * @param {Boolean} param.isScroll Checks whether scrolling has occurred after the append(), prepend(), ..., etc method is called <ko>append, prend 등 호출 후 스크롤이 생겼는지 확인한다.</ko>
     * @param {Number} param.scrollPos Current scroll position value relative to the infiniteGrid container element. <ko>infiniteGrid 컨테이너 엘리먼트 기준의 현재 스크롤 위치값</ko>
     * @param {Number} param.orgScrollPos Current position of the scroll <ko>현재 스크롤 위치값</ko>
     * @param {Number} param.size The size of container element <ko>컨테이너 엘리먼트의 크기</ko>
     * @param {Boolean} param.isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
     * @param {Function} param.endLoading End loading after startLoading() for append/prepend loading data. <ko>데이터 로딩을 위해 append/prepend startLoading() 호출 이후 로딩을 끝낸다.</ko>
     * @param {Object} param.endLoading.userStyle The custom style to apply to this loading bar for start. <ko> 로딩이 끝날 때 로딩 바에 적용될 사용자 스타일 </ko>
     */

    this.trigger("layoutComplete", {
      target: items.concat(),
      isAppend,
      isTrusted,
      fromCache,
      isLayout,
      isScroll: viewSize < watcher.getContainerOffset() + size,
      scrollPos,
      orgScrollPos: watcher.getOrgScrollPos(),
      size,
      endLoading: userStyle => {
        this.endLoading(userStyle);
      }
    });

    this._infinite.scroll(scrollPos, isAppend);
  }

  _reset() {
    this._status = {
      processingStatus: IDLE,
      loadingSize: 0
    };
  }
  /**
   * Destroys elements, properties, and events used on a grid layout.
   * @ko 그리드 레이아웃에 사용한 엘리먼트와 속성, 이벤트를 해제한다
   */


  destroy() {
    this._infinite.clear();

    this._watcher.destroy();

    this._manager.destroy();

    this._reset();

    this._items.clear();

    this._renderer.destroy();
  }

}

/* harmony default export */ var src_InfiniteGrid = (InfiniteGrid_InfiniteGrid);
// CONCATENATED MODULE: ./src/layouts/GridLayout.js

 // ALIGN

const {
  START,
  CENTER,
  END,
  JUSTIFY
} = ALIGN;
/**
 * @classdesc The GridLayout is a layout that stacks cards with the same width as a stack of bricks. Adjust the width of all images to the same size, find the lowest height column, and insert a new card.
 * @ko GridLayout는 벽돌을 쌓아 올린 모양처럼 동일한 너비를 가진 카드를 쌓는 레이아웃이다. 모든 이미지의 너비를 동일한 크기로 조정하고, 가장 높이가 낮은 열을 찾아 새로운 이미지를 삽입한다. 따라서 배치된 카드 사이에 빈 공간이 생기지는 않지만 배치된 레이아웃의 아래쪽은 울퉁불퉁해진다.
 * @class eg.InfiniteGrid.GridLayout
 * @param {Object} [options] The option object of eg.InfiniteGrid.GridLayout module <ko>eg.InfiniteGrid.GridLayout 모듈의 옵션 객체</ko>
 * @param {String} [options.margin=0] Margin used to create space around items <ko>아이템들 사이의 공간</ko>
 * @param {Boolean} [options.horizontal=false] Direction of the scroll movement (false: vertical, true: horizontal) <ko>스크롤 이동 방향 (false: 세로방향, true: 가로방향)</ko>
 * @param {Boolean} [options.align=START] Align of the position of the items (START, CENTER, END, JUSTIFY) <ko>아이템들의 위치의 정렬 (START, CENTER, END, JUSTIFY)</ko>
 * @param {Boolean} [options.itemSize=0] The size of the items. If it is 0, it is calculated as the size of the first item in items. <ko> 아이템의 사이즈. 만약 아이템 사이즈가 0이면, 아이템들의 첫번째 아이템의 사이즈로 계산이 된다. </ko>
 * @example
```
<script>
var ig = new eg.InfiniteGrid("#grid". {
	horizontal: true,
});

ig.setLayout(eg.InfiniteGrid.GridLayout, {
	margin: 10,
	align: "start",
	itemSize: 200
});

// or

var layout = new eg.InfiniteGrid.GridLayout({
	margin: 10,
	align: "center",
	itemSize: 200,
	horizontal: true,
});

</script>
```
 **/

class GridLayout_GridLayout {
  constructor(options = {}) {
    this.options = assignOptions({
      margin: 0,
      horizontal: false,
      align: START,
      itemSize: 0
    }, options);
    this._size = 0;
    this._columnSize = 0;
    this._columnLength = 0;
    this._style = getStyleNames(this.options.horizontal);
  }

  checkColumn(item) {
    const {
      itemSize,
      margin,
      horizontal
    } = this.options;
    const sizeName = horizontal ? "height" : "width";
    const columnSize = parseInt(itemSize || item && item.size[sizeName], 10) || 0;
    this._columnSize = columnSize;

    if (!columnSize) {
      this._columnLength = 1;
      return;
    }

    this._columnLength = Math.max(parseInt((this._size + margin) / (columnSize + margin), 10), 1);
  }

  _layout(items, outline, isAppend) {
    const length = items.length;
    const margin = this.options.margin;
    const align = this.options.align;
    const style = this._style;
    const size1Name = style.size1;
    const size2Name = style.size2;
    const pos1Name = style.pos1;
    const pos2Name = style.pos2;
    const columnSize = this._columnSize;
    const columnLength = this._columnLength;
    const size = this._size;
    const viewDist = size - (columnSize + margin) * columnLength + margin;
    const pointCaculateName = isAppend ? "min" : "max";
    const startOutline = outline.slice();
    const endOutline = outline.slice();

    for (let i = 0; i < length; ++i) {
      const point = Math[pointCaculateName](...endOutline) || 0;
      let index = endOutline.indexOf(point);
      const item = items[isAppend ? i : length - 1 - i];
      const size1 = item.size[size1Name];
      const size2 = item.size[size2Name];
      const pos1 = isAppend ? point : point - margin - size1;
      const endPos1 = pos1 + size1 + margin;

      if (index === -1) {
        index = 0;
      }

      let pos2 = (columnSize + margin) * index; // ALIGN

      if (align === CENTER) {
        pos2 += viewDist / 2;
      } else if (align === END) {
        pos2 += viewDist + columnSize - size2;
      } else if (align === JUSTIFY) {
        if (columnLength <= 1) {
          pos2 += viewDist / 2;
        } else {
          pos2 = (size - columnSize) / (columnLength - 1) * index;
        }
      } // tetris


      item.rect = {
        [pos1Name]: pos1,
        [pos2Name]: pos2
      };
      item.column = index;
      endOutline[index] = isAppend ? endPos1 : pos1;
    }

    if (!isAppend) {
      items.sort((a, b) => {
        const item1pos1 = a.rect[pos1Name];
        const item1pos2 = a.rect[pos2Name];
        const item2pos1 = b.rect[pos1Name];
        const item2pos2 = b.rect[pos2Name];

        if (item1pos1 - item2pos1) {
          return item1pos1 - item2pos1;
        }

        return item1pos2 - item2pos2;
      });
    } // if append items, startOutline is low, endOutline is high
    // if prepend items, startOutline is high, endOutline is low


    return {
      start: isAppend ? startOutline : endOutline,
      end: isAppend ? endOutline : startOutline
    };
  }

  _insert(items = [], outline = [], type, cache) {
    const clone = cache ? items : cloneItems(items);
    let startOutline = outline;

    if (!this._columnLength) {
      this.checkColumn(items[0]);
    }

    if (outline.length !== this._columnLength) {
      startOutline = fill(new Array(this._columnLength), outline.length === 0 ? 0 : Math[type === APPEND ? "min" : "max"](...outline) || 0);
    }

    const result = this._layout(clone, startOutline, type);

    return {
      items: clone,
      outlines: result
    };
  }
  /**
   * Adds items at the bottom of a outline.
   * @ko 아이템들을 아웃라인 아래에 추가한다.
   * @method eg.InfiniteGrid.GridLayout#append
   * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
   * @param {Array} [outline=[]] Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
   * @example
   * layout.prepend(items, [100, 200, 300, 400]);
   */


  append(items, outline, cache) {
    return this._insert(items, outline, APPEND, cache);
  }
  /**
   * Adds items at the top of a outline.
   * @ko 아이템을 아웃라인 위에 추가한다.
   * @method eg.InfiniteGrid.GridLayout#prepend
   * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
   * @param {Array} [outline=[]] Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
   * @example
   * layout.prepend(items, [100, 200, 300, 400]);
   */


  prepend(items, outline, cache) {
    return this._insert(items, outline, PREPEND, cache);
  }
  /**
   * Adds items of groups at the bottom of a outline.
   * @ko 그룹들의 아이템들을 아웃라인 아래에 추가한다.
   * @method eg.InfiniteGrid.GridLayout#layout
   * @param {Array} groups Array of groups to be layouted <ko>레이아웃할 그룹들의 배열</ko>
   * @param {Array} outline Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {eg.InfiniteGrid.GridLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * layout.layout(groups, [100, 200, 300, 400]);
   */


  layout(groups = [], outline = []) {
    const firstItem = groups.length && groups[0].items.length && groups[0].items[0] || 0;
    this.checkColumn(firstItem); // if outlines' length and columns' length are now same, re-caculate outlines.

    let startOutline;

    if (outline.length !== this._columnLength) {
      const pos = outline.length === 0 ? 0 : Math.min(...outline); // re-layout items.

      startOutline = fill(new Array(this._columnLength), pos);
    } else {
      startOutline = outline.slice();
    }

    groups.forEach(group => {
      const items = group.items;

      const result = this._layout(items, startOutline, APPEND);

      group.outlines = result;
      startOutline = result.end;
    });
    return this;
  }
  /**
   * Set the viewport size of the layout.
   * @ko 레이아웃의 가시 사이즈를 설정한다.
   * @method eg.InfiniteGrid.GridLayout#setSize
   * @param {Number} size The viewport size of container area where items are added to a layout <ko>레이아웃에 아이템을 추가하는 컨테이너 영역의 가시 사이즈</ko>
   * @return {eg.InfiniteGrid.GridLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * layout.setSize(800);
   */


  setSize(size) {
    this._size = size;
    return this;
  }

}

/* harmony default export */ var layouts_GridLayout = (GridLayout_GridLayout);
// CONCATENATED MODULE: ./src/layouts/FrameLayout.js


/*
Frame
[
[1, 1, 1, 1, 1],
[0, 0, 2, 2, 2],
[0, 0, 2, 2, 2],
[3, 4, 5, 5, 5],
]
*/

function disableFrame(frame, type, x, y, width, height) {
  for (let i = y; i < y + height; ++i) {
    for (let j = x; j < x + width; ++j) {
      if (type !== frame[i][j]) {
        continue;
      }

      frame[i][j] = 0;
    }
  }
}

function searchShapeInFrame(frame, type, top, left, width, height) {
  const size = {
    left,
    top,
    type,
    width: 1,
    height: 1
  };

  for (let i = left; i < width; ++i) {
    if (frame[top][i] === type) {
      size.width = i - left + 1;
      continue;
    }

    break;
  }

  for (let i = top; i < height; ++i) {
    if (frame[i][left] === type) {
      size.height = i - top + 1;
      continue;
    }

    break;
  } // After finding the shape, it will not find again.


  disableFrame(frame, type, left, top, size.width, size.height);
  return size;
}

function getShapes(frame) {
  const height = frame.length;
  const width = height ? frame[0].length : 0;
  const shapes = [];

  for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
      const type = frame[i][j];

      if (!type) {
        continue;
      } // Separate shapes with other numbers.


      shapes.push(searchShapeInFrame(frame, type, i, j, width, height));
    }
  }

  shapes.sort((a, b) => a.type < b.type ? -1 : 1);
  return {
    shapes,
    width,
    height
  };
}
/**
 * @classdesc FrameLayout is a layout that allows you to place cards in a given frame. It is a layout that corresponds to a level intermediate between the placement of the image directly by the designer and the layout using the algorithm.
 * @ko FrameLayout은 주어진 프레임에 맞춰 카드를 배치하는 레이아웃입니다. 디자이너가 직접 이미지를 배치하는 것과 알고리즘을 사용한 배치의 중간 정도 수준에 해당하는 레이아웃이다.
 * @class eg.InfiniteGrid.FrameLayout
 * @param {Object} [options] The option object of eg.InfiniteGrid.FrameLayout module <ko>eg.InfiniteGrid.FrameLayout 모듈의 옵션 객체</ko>
 * @param {String} [options.margin=0] Margin used to create space around items <ko>아이템들 사이의 공간</ko>
 * @param {Boolean} [options.horizontal=false] Direction of the scroll movement (false: vertical, true: horizontal) <ko>스크롤 이동 방향 (false: 세로방향, true: 가로방향)</ko>
 * @param {Boolean} [options.itemSize=0] The size of the items. If it is 0, it is calculated as the size of the first item in items. <ko> 아이템의 사이즈. 만약 아이템 사이즈가 0이면, 아이템들의 첫번째 아이템의 사이즈로 계산이 된다. </ko>
 * @param {Boolean} [options.frame=[]] The size of the items. If it is 0, it is calculated as the size of the first item in items. <ko> 아이템의 사이즈. 만약 아이템 사이즈가 0이면, 아이템들의 첫번째 아이템의 사이즈로 계산이 된다. </ko>
 * @param {Boolean} [options.frameFill=true] Make sure that the frame can be attached after the previous frame. <ko> 다음 프레임이 전 프레임에 이어 붙일 수 있는지 있는지 확인한다. </ko>
 * @example
```
<script>
var ig = new eg.InfiniteGrid("#grid". {
	horizontal: true,
});

ig.setLayout(eg.InfiniteGrid.FrameLayout, {
	margin: 10,
	itemSize: 200,
	frame: [
		[1, 1, 1, 1, 1],
		[0, 0, 2, 2, 2],
		[0, 0, 2, 2, 2],
		[3, 4, 5, 5, 5],
	],
});

// or

var layout = new eg.InfiniteGrid.FrameLayout({
	margin: 10,
	itemSize: 200,
	horizontal: true,
	frame: [
		[1, 1, 1, 1, 1],
		[0, 0, 2, 2, 2],
		[0, 0, 2, 2, 2],
		[3, 4, 5, 5, 5],
	],
});

</script>
```
 **/


class FrameLayout_FrameLayout {
  constructor(options = {}) {
    this.options = assignOptions({
      margin: 0,
      horizontal: false,
      itemSize: 0,
      frame: [],
      frameFill: true
    }, options);
    const frame = this.options.frame.map(row => row.slice());
    this._itemSize = this.options.itemSize || 0; // divide frame into shapes.

    this._shapes = getShapes(frame);
    this._size = 0;
    this._style = getStyleNames(this.options.horizontal);
  }

  _getItemSize() {
    this._checkItemSize();

    return this._itemSize;
  }

  _checkItemSize() {
    if (this.options.itemSize) {
      this._itemSize = this.options.itemSize;
      return;
    }

    const style = this._style;
    const size = style.size2;
    const margin = this.options.margin; // if itemSize is not in options, caculate itemSize from size.

    this._itemSize = (this._size + margin) / this._shapes[size] - margin;
  }

  _layout(items, outline = [], isAppend) {
    const length = items.length;
    const style = this._style;
    const {
      margin,
      frameFill
    } = this.options;
    const size1Name = style.size1;
    const size2Name = style.size2;
    const pos1Name = style.pos1;
    const pos2Name = style.pos2;

    const itemSize = this._getItemSize();

    const isItemObject = typeof itemSize === "object";
    const itemSize2 = isItemObject ? itemSize[size2Name] : itemSize;
    const itemSize1 = isItemObject ? itemSize[size1Name] : itemSize;
    const shapesSize = this._shapes[size2Name];
    const shapes = this._shapes.shapes;
    const shapesLength = shapes.length;
    const startOutline = fill(new Array(shapesSize), DUMMY_POSITION);
    const endOutline = fill(new Array(shapesSize), DUMMY_POSITION);
    let dist = 0;
    let end = 0;

    if (!shapesLength) {
      return {
        start: outline,
        end: outline
      };
    }

    for (let i = 0; i < length; i += shapesLength) {
      for (let j = 0; j < shapesLength && i + j < length; ++j) {
        const item = items[i + j];
        const shape = shapes[j];
        const shapePos1 = shape[pos1Name];
        const shapePos2 = shape[pos2Name];
        const shapeSize1 = shape[size1Name];
        const shapeSize2 = shape[size2Name];
        const pos1 = end - dist + shapePos1 * (itemSize1 + margin);
        const pos2 = shapePos2 * (itemSize2 + margin);
        const size1 = shapeSize1 * (itemSize1 + margin) - margin;
        const size2 = shapeSize2 * (itemSize2 + margin) - margin;

        for (let k = shapePos2; k < shapePos2 + shapeSize2 && k < shapesSize; ++k) {
          if (startOutline[k] === DUMMY_POSITION) {
            startOutline[k] = pos1;
          }

          startOutline[k] = Math.min(startOutline[k], pos1);
          endOutline[k] = Math.max(endOutline[k], pos1 + size1 + margin);
        }

        item.rect = {
          [pos1Name]: pos1,
          [pos2Name]: pos2,
          [size1Name]: size1,
          [size2Name]: size2
        };
      }

      end = Math.max(...endOutline); // check dist once

      if (i !== 0) {
        continue;
      } // find & fill empty block


      if (!frameFill) {
        dist = 0;
        continue;
      }

      dist = end;

      for (let j = 0; j < shapesSize; ++j) {
        if (startOutline[j] === DUMMY_POSITION) {
          continue;
        } // the dist between frame's end outline and next frame's start outline
        // expect that next frame's start outline is startOutline[j] + end


        dist = Math.min(startOutline[j] + end - endOutline[j], dist);
      }
    }

    for (let i = 0; i < shapesSize; ++i) {
      if (startOutline[i] !== DUMMY_POSITION) {
        continue;
      }

      startOutline[i] = Math.max(...startOutline);
      endOutline[i] = startOutline[i];
    } // The target outline is start outline when type is APPENDING


    const targetOutline = isAppend ? startOutline : endOutline;
    const prevOutlineEnd = outline.length === 0 ? 0 : Math[isAppend ? "max" : "min"](...outline);
    let prevOutlineDist = isAppend ? 0 : end;

    if (frameFill && outline.length === shapesSize) {
      prevOutlineDist = -DUMMY_POSITION;

      for (let i = 0; i < shapesSize; ++i) {
        if (startOutline[i] === endOutline[i]) {
          continue;
        } // if appending type is PREPEND, subtract dist from appending group's height.


        prevOutlineDist = Math.min(targetOutline[i] + prevOutlineEnd - outline[i], prevOutlineDist);
      }
    }

    for (let i = 0; i < shapesSize; ++i) {
      startOutline[i] += prevOutlineEnd - prevOutlineDist;
      endOutline[i] += prevOutlineEnd - prevOutlineDist;
    }

    items.forEach(item => {
      item.rect[pos1Name] += prevOutlineEnd - prevOutlineDist;
    });
    return {
      start: startOutline.map(point => parseInt(point, 10)),
      end: endOutline.map(point => parseInt(point, 10))
    };
  }

  _insert(items = [], outline = [], type, cache) {
    // this only needs the size of the item.
    const clone = cache ? items : cloneItems(items);
    return {
      items: clone,
      outlines: this._layout(clone, outline, type)
    };
  }
  /**
   * Adds items of groups at the bottom of a outline.
   * @ko 그룹들의 아이템들을 아웃라인 아래에 추가한다.
   * @method eg.InfiniteGrid.FrameLayout#layout
   * @param {Array} groups Array of groups to be layouted <ko>레이아웃할 그룹들의 배열</ko>
   * @param {Array} outline Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {eg.InfiniteGrid.FrameLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * layout.layout(groups, [100, 200, 300, 400]);
   */


  layout(groups = [], outline = []) {
    const length = groups.length;
    let point = outline;

    for (let i = 0; i < length; ++i) {
      const group = groups[i];
      point = this._layout(group.items, point, APPEND);
      group.outlines = point;
      point = point.end;
    }

    return this;
  }
  /**
   * Set the viewport size of the layout.
   * @ko 레이아웃의 가시 사이즈를 설정한다.
   * @method eg.InfiniteGrid.FrameLayout#setSize
   * @param {Number} size The viewport size of container area where items are added to a layout <ko>레이아웃에 아이템을 추가하는 컨테이너 영역의 가시 사이즈</ko>
   * @return {eg.InfiniteGrid.FrameLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * layout.setSize(800);
   */


  setSize(size) {
    this._size = size;
    return this;
  }
  /**
   * Adds items at the bottom of a outline.
   * @ko 아이템들을 아웃라인 아래에 추가한다.
   * @method eg.InfiniteGrid.FrameLayout#append
   * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
   * @param {Array} [outline=[]] Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
   * @example
   * layout.prepend(items, [100]);
   */


  append(items, outline, cache) {
    return this._insert(items, outline, APPEND, cache);
  }
  /**
   * Adds items at the top of a outline.
   * @ko 아이템을 아웃라인 위에 추가한다.
   * @method eg.InfiniteGrid.FrameLayout#prepend
   * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
   * @param {Array} [outline=[]] Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
   * @example
   * layout.prepend(items, [100]);
   */


  prepend(items, outline, cache) {
    return this._insert(items, outline, PREPEND, cache);
  }

}

/* harmony default export */ var layouts_FrameLayout = (FrameLayout_FrameLayout);
// CONCATENATED MODULE: ./src/layouts/SquareLayout.js



function makeShapeOutline(outline, itemSize, columnLength, isAppend) {
  const point = Math[isAppend ? "min" : "max"](...outline) || 0;

  if (outline.length !== columnLength) {
    return fill(new Array(columnLength), 0);
  }

  return outline.map(l => parseInt((l - point) / itemSize, 10));
}

function getColumn(item) {
  if (item.column) {
    return item.column;
  }

  let column = 0;

  if (item.el) {
    const dataset = item.el.dataset;

    if (dataset) {
      column = dataset.column || 1;
    } else {
      column = item.el.getAttribute("column") || 1;
    }
  } else {
    column = 1;
  }

  item.column = column;
  return column;
}
/**
 * @classdesc SquareLayout is a layout that places all cards like squares on a checkerboard, and important cards are n times larger. The main card can be enlarged, and then a small card can be placed to naturally show the relationship of the card.
 * @ko SquareLayout은 바둑판처럼 모든 카드를 정사각형으로 배치하고 중요한 카드는 크기를 N배로 키워서 보여주는 레이아웃이다. 주요 카드를 크게 표시하고, 그 다음에 작은 카드를 배치해 자연스럽게 카드의 관계를 나타낼 수 있습니다.
 * @class eg.InfiniteGrid.SquareLayout
 * @extends eg.InfiniteGrid.FrameLayout
 * @param {Object} [options] The option object of eg.InfiniteGrid.SquareLayout module <ko>eg.InfiniteGrid.SquareLayout 모듈의 옵션 객체</ko>
 * @param {String} [options.margin=0] Margin used to create space around items <ko>아이템들 사이의 공간</ko>
 * @param {Boolean} [options.horizontal=false] Direction of the scroll movement (false: vertical, true: horizontal) <ko>스크롤 이동 방향 (false: 세로방향, true: 가로방향)</ko>
 * @param {Boolean} [options.itemSize=0] The size of the items. If it is 0, it is calculated as the size of the first item in items. <ko> 아이템의 사이즈. 만약 아이템 사이즈가 0이면, 아이템들의 첫번째 아이템의 사이즈로 계산이 된다. </ko>
 * @example
```
<script>
var ig = new eg.InfiniteGrid("#grid". {
	horizontal: true,
});

ig.setLayout(eg.InfiniteGrid.SquareLayout, {
	margin: 10,
	itemSize: 200,
});

// or

var layout = new eg.InfiniteGrid.SquareLayout({
	margin: 10,
	itemSize: 200,
	horizontal: true,
});


var item1 = '<div data-column="2"></div>';
var item2 = "<div></div>"
layout.append([item1, item2]);
</script>
```
 **/


class SquareLayout extends layouts_FrameLayout {
  _checkItemSize() {
    const column = this.options.column;

    if (!column) {
      super._checkItemSize();

      return;
    }

    const margin = this.options.margin; // if itemSize is not in options, caculate itemSize from size.

    this._itemSize = (this._size + margin) / column - margin;
  }

  _layout(items, outline = [], isAppend) {
    const itemSize = this._getItemSize();

    const margin = this.options.margin;
    const columnLength = this.options.column || parseInt((this._size + margin) / (itemSize + margin), 10) || 1;
    const length = items.length;
    const endOutline = makeShapeOutline(outline, itemSize, columnLength, isAppend);
    const pointCaculateName = isAppend ? "min" : "max";
    const shapes = [];
    const sign = isAppend ? 1 : -1;
    const style = this._style;
    const pos1Name = style.pos1;
    const pos2Name = style.pos2;

    for (let i = 0; i < length; ++i) {
      const point = Math[pointCaculateName](...endOutline);
      let index = endOutline[isAppend ? "indexOf" : "lastIndexOf"](point);
      const item = items[i];
      const columnWidth = item.columnWidth;
      const column = columnWidth && columnWidth[0] === columnLength && columnWidth[1] || getColumn(item);
      let columnCount = 1;

      if (column > 1) {
        for (let j = 1; j < column && (isAppend && index + j < columnLength || !isAppend && index - j >= 0); ++j) {
          if (isAppend && endOutline[index + sign * j] <= point || !isAppend && endOutline[index + sign * j] >= point) {
            ++columnCount;
            continue;
          }

          break;
        }

        if (!isAppend) {
          index -= columnCount - 1;
        }
      }

      item.columnWidth = [columnLength, columnCount];
      shapes.push({
        width: columnCount,
        height: columnCount,
        [pos1Name]: point - (!isAppend ? columnCount : 0),
        [pos2Name]: index,
        index: i
      });

      for (let j = 0; j < columnCount; ++j) {
        endOutline[index + j] = point + sign * columnCount;
      }
    }

    this._shapes = {
      shapes,
      [style.size2]: columnLength
    };

    const result = super._layout(items, outline, isAppend);

    if (!isAppend) {
      shapes.sort((shape1, shape2) => {
        const item1pos1 = shape1[pos1Name];
        const item1pos2 = shape1[pos2Name];
        const item2pos1 = shape2[pos1Name];
        const item2pos2 = shape2[pos2Name];

        if (item1pos1 - item2pos1) {
          return item1pos1 - item2pos1;
        }

        return item1pos2 - item2pos2;
      });
      items.sort((a, b) => {
        const item1pos1 = a.rect[pos1Name];
        const item1pos2 = a.rect[pos2Name];
        const item2pos1 = b.rect[pos1Name];
        const item2pos2 = b.rect[pos2Name];

        if (item1pos1 - item2pos1) {
          return item1pos1 - item2pos1;
        }

        return item1pos2 - item2pos2;
      });
    }

    return result;
  }

}

/* harmony default export */ var layouts_SquareLayout = (SquareLayout);
// CONCATENATED MODULE: ./src/layouts/lib/BoxModel.js
class BoxModel {
  constructor(options) {
    Object.assign(this, {
      originWidth: 0,
      originHeight: 0,
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      items: []
    }, options);
  }

  scaleTo(width, height) {
    const scaleX = this.width ? width / this.width : 0;
    const scaleY = this.height ? height / this.height : 0;
    this.items.forEach(v => {
      if (scaleX !== 0) {
        v.left *= scaleX;
        v.width *= scaleX;
      }

      if (scaleY !== 0) {
        v.top *= scaleY;
        v.height *= scaleY;
      }
    });
    this.width = width;
    this.height = height;
  }

  push(item) {
    this.items.push(item);
  }

  getOriginSize() {
    return this.originWidth * this.originHeight;
  }

  getSize() {
    return this.width * this.height;
  }

  getOriginRatio() {
    return this.originHeight === 0 ? 0 : this.originWidth / this.originHeight;
  }

  getRatio() {
    return this.height === 0 ? 0 : this.width / this.height;
  }

}
// CONCATENATED MODULE: ./src/layouts/PackingLayout.js




function getCost(originLength, length) {
  let cost = originLength / length;

  if (cost < 1) {
    cost = 1 / cost;
  }

  return cost - 1;
}

function fitArea(item, bestFitArea, itemFitSize, containerFitSize, layoutVertical) {
  item.height = itemFitSize.height;
  item.width = itemFitSize.width;
  bestFitArea.height = containerFitSize.height;
  bestFitArea.width = containerFitSize.width;

  if (layoutVertical) {
    item.top = bestFitArea.top + bestFitArea.height;
    item.left = bestFitArea.left;
  } else {
    item.left = bestFitArea.left + bestFitArea.width;
    item.top = bestFitArea.top;
  }
}
/**
 * @classdesc The PackingLayout is a layout that shows the important cards bigger without sacrificing the weight of the cards. Rows and columns are separated so that cards are dynamically placed within the horizontal and vertical space rather than arranged in an orderly fashion.
 * @ko PackingLayout은 카드의 본래 크기에 따른 비중을 해치지 않으면서 중요한 카드는 더 크게 보여 주는 레이아웃이다. 행과 열이 구분돼 이미지를 정돈되게 배치하는 대신 가로세로 일정 공간 내에서 동적으로 카드를 배치한다.
 * @class eg.InfiniteGrid.PackingLayout
 * @param {Object} [options] The option object of eg.InfiniteGrid.PackingLayout module <ko>eg.InfiniteGrid.PackingLayout 모듈의 옵션 객체</ko>
 * @param {String} [options.margin=0] Margin used to create space around items <ko>아이템들 사이의 공간</ko>
 * @param {Boolean} [options.horizontal=false] Direction of the scroll movement (false: vertical, true: horizontal) <ko>스크롤 이동 방향 (false: 세로방향, true: 가로방향)</ko>
 * @param {Boolean} [options.aspectRatio=1] The aspect ratio of the group <ko> 그룹의 가로 세로 비 </ko>
 * @param {Boolean} [options.sizeWeight=1] The size weight when placing an image <ko> 이미지를 배치할 때 사이즈 가중치 </ko>
 * @param {Boolean} [options.ratioWeight=1] The ratio weight when placing an image <ko> 이미지를 배치할 때 비율 가중치 </ko>
 * @example
```
<script>
var ig = new eg.InfiniteGrid("#grid". {
	horizontal: true,
});

ig.setLayout(eg.InfiniteGrid.PackingLayout, {
	margin: 10,
	aspectRatio: 1,
	sizeWeight: 1,
	ratioWeight: 2,
});

// or

var layout = new eg.InfiniteGrid.PackingLayout({
	horizontal: true,
	margin: 10,
	aspectRatio: 1,
	sizeWeight: 1,
	ratioWeight: 2,
});

</script>
```
 **/


class PackingLayout_PackingLayout {
  constructor(options = {}) {
    this.options = assignOptions({
      margin: 0,
      horizontal: false,
      aspectRatio: 1,
      sizeWeight: 1,
      ratioWeight: 1
    }, options);
    this._size = 0;
    this._style = getStyleNames(this.options.horizontal);
  }

  _findBestFitArea(container, item) {
    if (container.getRatio() === 0) {
      // 아이템 최초 삽입시 전체영역 지정
      container.originWidth = item.width;
      container.originHeight = item.height;
      container.width = item.width;
      container.height = item.height;
      return;
    }

    let bestFitArea = null;
    let minCost = 10000000;
    let layoutVertical = false;
    const itemFitSize = {
      width: 0,
      height: 0
    };
    const containerFitSize = {
      width: 0,
      height: 0
    };
    const {
      sizeWeight,
      ratioWeight
    } = this.options;
    container.items.forEach(v => {
      const containerSizeCost = getCost(v.getOriginSize(), v.getSize()) * sizeWeight;
      const containerRatioCost = getCost(v.getOriginRatio(), v.getRatio()) * ratioWeight;
      const width = v.width;
      const height = v.height;
      let cost;

      for (let i = 0; i < 2; ++i) {
        let itemWidth;
        let itemHeight;
        let containerWidth;
        let containerHeight;

        if (i === 0) {
          // 상하에 아이템 추가
          itemWidth = width;
          itemHeight = height * (item.height / (v.originHeight + item.height));
          containerWidth = width;
          containerHeight = height - itemHeight;
        } else {
          // 좌우에 아이템 추가
          itemHeight = height;
          itemWidth = width * (item.width / (v.originWidth + item.width));
          containerHeight = height;
          containerWidth = width - itemWidth;
        }

        const itemSize = itemWidth * itemHeight;
        const itemRatio = itemWidth / itemHeight;
        const containerSize = containerWidth * containerHeight;
        const containerRatio = containerHeight / containerHeight;
        cost = getCost(item.getSize(), itemSize) * sizeWeight;
        cost += getCost(item.getRatio(), itemRatio) * ratioWeight;
        cost += getCost(v.getOriginSize(), containerSize) * sizeWeight - containerSizeCost;
        cost += getCost(v.getOriginRatio(), containerRatio) * ratioWeight - containerRatioCost;

        if (cost === Math.min(cost, minCost)) {
          minCost = cost;
          bestFitArea = v;
          layoutVertical = i === 0;
          itemFitSize.width = itemWidth;
          itemFitSize.height = itemHeight;
          containerFitSize.width = containerWidth;
          containerFitSize.height = containerHeight;
        }
      }
    });
    fitArea(item, bestFitArea, itemFitSize, containerFitSize, layoutVertical);
  }

  _layout(items, outline = [], isAppend) {
    const style = this._style;
    const {
      horizontal,
      aspectRatio,
      margin
    } = this.options;
    const pos1Name = style.pos1;
    const containerWidth = this._size * (horizontal ? aspectRatio : 1);
    const containerHeight = this._size / (horizontal ? 1 : aspectRatio);
    const containerSize1 = horizontal ? containerWidth : containerHeight;
    const prevOutline = toZeroArray(outline);
    const start = isAppend ? Math.max(...prevOutline) : Math.min(...prevOutline) - containerSize1 - margin;
    const end = start + containerSize1 + margin;
    const container = new BoxModel({});
    items.forEach(item => {
      const {
        width,
        height
      } = item.orgSize;
      const model = new BoxModel({
        width,
        height,
        originWidth: width,
        originHeight: height
      });

      this._findBestFitArea(container, model);

      container.push(model);
      container.scaleTo(containerWidth + margin, containerHeight + margin);
    });
    items.forEach((item, i) => {
      const boxItem = container.items[i];
      const width = boxItem.width;
      const height = boxItem.height;
      const top = boxItem.top;
      const left = boxItem.left;
      item.rect = {
        top,
        left,
        width: width - margin,
        height: height - margin
      };
      item.rect[pos1Name] += start;
    });
    return {
      start: [start],
      end: [end]
    };
  }

  _insert(items = [], outline = [], type, cache) {
    // this only needs the size of the item.
    const clone = cache ? items : cloneItems(items);
    return {
      items: clone,
      outlines: this._layout(clone, outline, type)
    };
  }
  /**
   * Adds items at the bottom of a outline.
   * @ko 아이템들을 아웃라인 아래에 추가한다.
   * @method eg.InfiniteGrid.PackingLayout#append
   * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
   * @param {Array} [outline=[]] Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
   * @example
   * layout.prepend(items, [100]);
   */


  append(items, outline, cache) {
    return this._insert(items, outline, APPEND, cache);
  }
  /**
   * Adds items at the top of a outline.
   * @ko 아이템을 아웃라인 위에 추가한다.
   * @method eg.InfiniteGrid.PackingLayout#prepend
   * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
   * @param {Array} [outline=[]] Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
   * @example
   * layout.prepend(items, [100]);
   */


  prepend(items, outline, cache) {
    return this._insert(items, outline, PREPEND, cache);
  }
  /**
   * Adds items of groups at the bottom of a outline.
   * @ko 그룹들의 아이템들을 아웃라인 아래에 추가한다.
   * @method eg.InfiniteGrid.PackingLayout#layout
   * @param {Array} groups Array of groups to be layouted <ko>레이아웃할 그룹들의 배열</ko>
   * @param {Array} outline Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {eg.InfiniteGrid.PackingLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * layout.layout(groups, [100, 200, 300, 400]);
   */


  layout(groups = [], outline = []) {
    const length = groups.length;
    let point = outline;

    for (let i = 0; i < length; ++i) {
      const group = groups[i];
      point = this._layout(group.items, point, APPEND);
      group.outlines = point;
      point = point.end;
    }

    return this;
  }
  /**
   * Set the viewport size of the layout.
   * @ko 레이아웃의 가시 사이즈를 설정한다.
   * @method eg.InfiniteGrid.PackingLayout#setSize
   * @param {Number} size The viewport size of container area where items are added to a layout <ko>레이아웃에 아이템을 추가하는 컨테이너 영역의 가시 사이즈</ko>
   * @return {eg.InfiniteGrid.PackingLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * layout.setSize(800);
   */


  setSize(size) {
    this._size = size;
    return this;
  }

}

/* harmony default export */ var layouts_PackingLayout = (PackingLayout_PackingLayout);
// CONCATENATED MODULE: ./src/layouts/lib/dijkstra.js
/* eslint-disable */

/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function (graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {}; // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost

    var costs = {};
    costs[s] = 0; // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?

    var open = new BinaryHeap(function (x) {
      return x.cost;
    });
    open.push({
      value: s,
      cost: 0
    });
    var closest, u, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;

    while (open.size()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost; // Get nodes adjacent to u...

      adjacent_nodes = graph(u) || {}; // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.

      for (var v in adjacent_nodes) {
        // Get the cost of the edge running from u to v.
        cost_of_e = adjacent_nodes[v]; // Cost of s to u plus the cost of u to v across e--this is *a*
        // cost from s to v that may or may not be less than the current
        // known cost to v.

        cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e; // If we haven't visited v yet OR if the current known cost from s to
        // v is greater than the new cost we just found (cost of s to u plus
        // cost of u to v across e), update v's cost in the cost list and
        // update v's predecessor in the predecessor list (it's now u).

        cost_of_s_to_v = costs[v];
        first_visit = typeof costs[v] === 'undefined';

        if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
          costs[v] = cost_of_s_to_u_plus_cost_of_e;
          open.push({
            value: v,
            cost: cost_of_s_to_u_plus_cost_of_e
          });
          predecessors[v] = u;
        }
      }
    }

    if (typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },
  extract_shortest_path_from_predecessor_list: function (predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;

    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }

    nodes.reverse();
    return nodes;
  },
  find_path: function (graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
  }
};

class BinaryHeap {
  constructor(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }

  push(element) {
    // Add the new element to the end of the array.
    this.content.push(element); // Allow it to bubble up.

    this.bubbleUp(this.content.length - 1);
  }

  pop() {
    // Store the first element so we can return it later.
    var result = this.content[0]; // Get the element at the end of the array.

    var end = this.content.pop(); // If there are any elements left, put the end element at the
    // start, and let it sink down.

    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }

    return result;
  }

  size() {
    return this.content.length;
  }

  bubbleUp(n) {
    // Fetch the element that has to be moved.
    var element = this.content[n]; // When at 0, an element can not go up any further.

    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = Math.floor((n + 1) / 2) - 1,
          parent = this.content[parentN]; // Swap the elements if the parent is greater.

      if (this.scoreFunction(element) < this.scoreFunction(parent)) {
        this.content[parentN] = element;
        this.content[n] = parent; // Update 'n' to continue at the new position.

        n = parentN;
      } // Found a parent that is less, no need to move it further.
      else {
          break;
        }
    }
  }

  sinkDown(n) {
    // Look up the target element and its score.
    var length = this.content.length,
        element = this.content[n],
        elemScore = this.scoreFunction(element);

    while (true) {
      // Compute the indices of the child elements.
      var child2N = (n + 1) * 2,
          child1N = child2N - 1; // This is used to store the new position of the element,
      // if any.

      var swap = null; // If the first child exists (is inside the array)...

      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = this.content[child1N],
            child1Score = this.scoreFunction(child1); // If the score is less than our element's, we need to swap.

        if (child1Score < elemScore) {
          swap = child1N;
        }
      } // Do the same checks for the other child.


      if (child2N < length) {
        var child2 = this.content[child2N],
            child2Score = this.scoreFunction(child2);

        if (child2Score < (swap == null ? elemScore : child1Score)) {
          swap = child2N;
        }
      } // If the element needs to be moved, swap it, and continue.


      if (swap !== null) {
        this.content[n] = this.content[swap];
        this.content[swap] = element;
        n = swap;
      } // Otherwise, we are done.
      else {
          break;
        }
    }
  }

}

/* harmony default export */ var lib_dijkstra = (dijkstra);
// CONCATENATED MODULE: ./src/layouts/JustifiedLayout.js



/**
 * @classdesc 'justified' is a printing term with the meaning that 'it fits in one row wide'. JustifiedLayout is a layout that the card is filled up on the basis of a line given a size.
 * @ko 'justified'는 '1행의 너비에 맞게 꼭 들어찬'이라는 의미를 가진 인쇄 용어다. 용어의 의미대로 너비가 주어진 사이즈를 기준으로 카드가 가득 차도록 배치하는 레이아웃이다.
 * @class eg.InfiniteGrid.JustifiedLayout
 * @param {Object} [options] The option object of eg.InfiniteGrid.JustifiedLayout module <ko>eg.InfiniteGrid.JustifiedLayout 모듈의 옵션 객체</ko>
 * @param {String} [options.margin=0] Margin used to create space around items <ko>아이템들 사이의 공간</ko>
 * @param {Boolean} [options.horizontal=false] Direction of the scroll movement (false: vertical, true: horizontal) <ko>스크롤 이동 방향 (false: 세로방향, true: 가로방향)</ko>
 * @param {Number} [options.minSize=0] Minimum size of item to be resized <ko> 아이템이 조정되는 최소 크기 </ko>
 * @param {Number} [options.maxSize=0] Maximum size of item to be resized <ko> 아이템이 조정되는 최대 크기 </ko>
 * @param {Array|Number} [options.column=[1, 8]] The number of items in a line <ko> 한 줄에 들어가는 아이템의 개수 </ko>
 * @example
```
<script>
var ig = new eg.InfiniteGrid("#grid". {
	horizontal: true,
});

ig.setLayout(eg.InfiniteGrid.JustifiedLayout, {
	margin: 10,
	minSize: 100,
	maxSize: 300,
});

// or

var layout = new eg.InfiniteGrid.JustifiedLayout({
	margin: 10,
	minSize: 100,
	maxSize: 300,
	column: 5,
	horizontal: true,
});

</script>
```
 **/

class JustifiedLayout_JustifiedLayout {
  constructor(options = {}) {
    this.options = assignOptions({
      margin: 0,
      horizontal: false,
      minSize: 0,
      maxSize: 0,
      column: [1, 8]
    }, options);
    this._style = getStyleNames(this.options.horizontal);
    this._size = 0;
  }

  _layout(items, outline, isAppend) {
    const style = this._style;
    const size1Name = style.size1;
    const size2Name = style.size2;
    const startIndex = 0;
    const endIndex = items.length;
    let column = this.options.column;

    if (typeof column !== "object") {
      column = [column, column];
    }

    const graph = _start => {
      const results = {};
      const start = +_start.replace(/[^0-9]/g, "");
      const length = endIndex + 1;

      for (let i = Math.min(start + column[0], length - 1); i < length; ++i) {
        if (i - start > column[1]) {
          break;
        }

        let cost = this._getCost(items, start, i, size1Name, size2Name);

        if (cost === null) {
          continue;
        }

        if (cost < 0 && i === length - 1) {
          cost = 0;
        }

        results[`${i}`] = Math.pow(cost, 2);
      }

      return results;
    }; // shortest path for items' total height.


    const path = lib_dijkstra.find_path(graph, `${startIndex}`, `${endIndex}`);
    return this._setStyle(items, path, outline, isAppend);
  }

  _getSize(items, size1Name, size2Name) {
    const margin = this.options.margin;
    const size = items.reduce((sum, item) => sum + item.orgSize[size2Name] / item.orgSize[size1Name], 0);
    return (this._size - margin * (items.length - 1)) / size;
  }

  _getCost(items, i, j, size1Name, size2Name) {
    const size = this._getSize(items.slice(i, j), size1Name, size2Name);

    const min = this.options.minSize || 0;
    const max = this.options.maxSize || Infinity;

    if (isFinite(max)) {
      // if this size is not in range, the cost increases sharply.
      if (size < min) {
        return Math.pow(size - min, 2) + Math.pow(max, 2);
      } else if (size > max) {
        return Math.pow(size - max, 2) + Math.pow(max, 2);
      } else {
        // if this size in range, the cost is negative or low.
        return Math.min(size - max, min - size);
      }
    } // if max is infinite type, caculate cost only with "min".


    if (size < min) {
      return Math.max(Math.pow(min, 2), Math.pow(size, 2));
    }

    return size - min;
  }

  _setStyle(items, path, outline = [], isAppend) {
    const style = this._style; // if direction is vertical
    // pos1 : top, pos11 : bottom
    // size1 : height
    // pos2 : left, pos22 : right
    // size2 : width
    // if direction is horizontal
    // pos1 : left, pos11 : right
    // size1 : width
    // pos2 : top, pos22 : bottom
    // size2 : height

    const pos1Name = style.pos1;
    const size1Name = style.size1;
    const pos2Name = style.pos2;
    const size2Name = style.size2;
    const length = path.length;
    const margin = this.options.margin;
    const startPoint = outline[0] || 0;
    let endPoint = startPoint;
    let height = 0;

    for (let i = 0; i < length - 1; ++i) {
      const path1 = parseInt(path[i], 10);
      const path2 = parseInt(path[i + 1], 10); // pathItems(path1 to path2) are in 1 line.

      const pathItems = items.slice(path1, path2);
      const pathItemsLength = pathItems.length;

      const size1 = this._getSize(pathItems, size1Name, size2Name);

      const pos1 = endPoint;

      for (let j = 0; j < pathItemsLength; ++j) {
        const item = pathItems[j];
        const size2 = item.orgSize[size2Name] / item.orgSize[size1Name] * size1; // item has margin bottom and right.
        // first item has not margin.

        const prevItemRect = j === 0 ? 0 : pathItems[j - 1].rect;
        const pos2 = prevItemRect ? prevItemRect[pos2Name] + prevItemRect[size2Name] + margin : 0;
        item.rect = {
          [pos1Name]: pos1,
          [pos2Name]: pos2,
          [size1Name]: size1,
          [size2Name]: size2
        };
      }

      height += margin + size1;
      endPoint = startPoint + height;
    }

    const itemsLength = items.length;

    if (isAppend) {
      // previous group's end outline is current group's start outline
      return {
        start: [startPoint],
        end: [endPoint]
      };
    } // for prepend, only substract height from position.
    // always start is lower than end.


    for (let i = 0; i < itemsLength; ++i) {
      const item = items[i]; // move items as long as height for prepend

      item.rect[pos1Name] -= height;
    }

    return {
      start: [startPoint - height],
      end: [startPoint] // endPoint - height = startPoint

    };
  }

  _insert(items = [], outline = [], type, cache) {
    // this only needs the size of the item.
    const clone = cache ? items : cloneItems(items);
    return {
      items: clone,
      outlines: this._layout(clone, outline, type)
    };
  }
  /**
   * Set the viewport size of the layout.
   * @ko 레이아웃의 가시 사이즈를 설정한다.
   * @method eg.InfiniteGrid.JustifiedLayout#setSize
   * @param {Number} size The viewport size of container area where items are added to a layout <ko>레이아웃에 아이템을 추가하는 컨테이너 영역의 가시 사이즈</ko>
   * @return {eg.InfiniteGrid.JustifiedLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * layout.setSize(800);
   */


  setSize(size) {
    this._size = size;
    return this;
  }
  /**
   * Adds items at the bottom of a outline.
   * @ko 아이템들을 아웃라인 아래에 추가한다.
   * @method eg.InfiniteGrid.JustifiedLayout#append
   * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
   * @param {Array} [outline=[]] Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
   * @example
   * layout.prepend(items, [100]);
   */


  append(items, outline, cache) {
    return this._insert(items, outline, APPEND, cache);
  }
  /**
   * Adds items at the top of a outline.
   * @ko 아이템을 아웃라인 위에 추가한다.
   * @method eg.InfiniteGrid.JustifiedLayout#prepend
   * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
   * @param {Array} [outline=[]] Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
   * @example
   * layout.prepend(items, [100]);
   */


  prepend(items, outline, cache) {
    return this._insert(items, outline, PREPEND, cache);
  }
  /**
   * Adds items of groups at the bottom of a outline.
   * @ko 그룹들의 아이템들을 아웃라인 아래에 추가한다.
   * @method eg.InfiniteGrid.JustifiedLayout#layout
   * @param {Array} groups Array of groups to be layouted <ko>레이아웃할 그룹들의 배열</ko>
   * @param {Array} outline Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
   * @return {eg.InfiniteGrid.JustifiedLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
   * layout.layout(groups, [100]);
   */


  layout(groups = [], outline = []) {
    const length = groups.length;
    let point = outline;

    for (let i = 0; i < length; ++i) {
      const group = groups[i];
      point = this._layout(group.items, point, APPEND);
      group.outlines = point;
      point = point.end;
    }

    return this;
  }

}

/* harmony default export */ var layouts_JustifiedLayout = (JustifiedLayout_JustifiedLayout);
// EXTERNAL MODULE: ./src/version.js
var version = __webpack_require__(6);
var version_default = /*#__PURE__*/__webpack_require__.n(version);

// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VERSION", function() { return version_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GridLayout", function() { return layouts_GridLayout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FrameLayout", function() { return layouts_FrameLayout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SquareLayout", function() { return layouts_SquareLayout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PackingLayout", function() { return layouts_PackingLayout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "JustifiedLayout", function() { return layouts_JustifiedLayout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Infinite", function() { return src_Infinite; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ImageLoaded", function() { return src_ImageLoaded; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AutoSizer", function() { return AutoSizer_AutoSizer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DOMRenderer", function() { return DOMRenderer_DOMRenderer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Watcher", function() { return Watcher_Watcher; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ItemManager", function() { return ItemManager_ItemManager; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LayoutManager", function() { return LayoutManager_LayoutMananger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "default", function() { return src_InfiniteGrid; });
/**
 * Copyright (c) NAVER Corp.
 * egjs-infinitegrid projects are licensed under the MIT license
 */
















/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Copyright (c) 2017 NAVER Corp.
 * @egjs/component project is licensed under the MIT license
 * 
 * @egjs/component JavaScript library
 * http://naver.github.io/egjs/component
 * 
 * @version 2.1.1
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Component"] = factory();
	else
		root["eg"] = root["eg"] || {}, root["eg"]["Component"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */

/**
 * A class used to manage events in a component
 * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
 * @alias eg.Component
 */
var Component = function () {
	/**
  * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
  */
	function Component() {
		_classCallCheck(this, Component);

		this._eventHandler = {};
		this.options = {};
	}
	/**
  * Triggers a custom event.
  * @ko 커스텀 이벤트를 발생시킨다
  * @param {String} eventName The name of the custom event to be triggered <ko>발생할 커스텀 이벤트의 이름</ko>
  * @param {Object} customEvent Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
  * @return {Boolean} Indicates whether the event has occurred. If the stop() method is called by a custom event handler, it will return false and prevent the event from occurring. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">Ref</a> <ko>이벤트 발생 여부. 커스텀 이벤트 핸들러에서 stop() 메서드를 호출하면 'false'를 반환하고 이벤트 발생을 중단한다. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">참고</a></ko>
  * @example
 class Some extends eg.Component {
  some(){
  	if(this.trigger("beforeHi")){ // When event call to stop return false.
 	this.trigger("hi");// fire hi event.
  	}
  }
 }
 const some = new Some();
 some.on("beforeHi", (e) => {
 if(condition){
 	e.stop(); // When event call to stop, `hi` event not call.
 }
 });
 some.on("hi", (e) => {
 // `currentTarget` is component instance.
 console.log(some === e.currentTarget); // true
 });
 // If you want to more know event design. You can see article.
 // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
  */


	Component.prototype.trigger = function trigger(eventName) {
		var customEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var handlerList = this._eventHandler[eventName] || [];
		var hasHandlerList = handlerList.length > 0;

		if (!hasHandlerList) {
			return true;
		}

		// If detach method call in handler in first time then handler list calls.
		handlerList = handlerList.concat();

		customEvent.eventType = eventName;

		var isCanceled = false;
		var arg = [customEvent];
		var i = 0;

		customEvent.stop = function () {
			isCanceled = true;
		};
		customEvent.currentTarget = this;

		for (var _len = arguments.length, restParam = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			restParam[_key - 2] = arguments[_key];
		}

		if (restParam.length >= 1) {
			arg = arg.concat(restParam);
		}

		for (i = 0; handlerList[i]; i++) {
			handlerList[i].apply(this, arg);
		}

		return !isCanceled;
	};
	/**
  * Executed event just one time.
  * @ko 이벤트가 한번만 실행된다.
  * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
  * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
  * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
  * @example
 class Some extends eg.Component {
  hi() {
    alert("hi");
  }
  thing() {
    this.once("hi", this.hi);
  }
 }
 var some = new Some();
 some.thing();
 some.trigger("hi");
 // fire alert("hi");
 some.trigger("hi");
 // Nothing happens
  */


	Component.prototype.once = function once(eventName, handlerToAttach) {
		if ((typeof eventName === "undefined" ? "undefined" : _typeof(eventName)) === "object" && typeof handlerToAttach === "undefined") {
			var eventHash = eventName;
			var i = void 0;

			for (i in eventHash) {
				this.once(i, eventHash[i]);
			}
			return this;
		} else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
			var self = this;

			this.on(eventName, function listener() {
				for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					arg[_key2] = arguments[_key2];
				}

				handlerToAttach.apply(self, arg);
				self.off(eventName, listener);
			});
		}

		return this;
	};

	/**
  * Checks whether an event has been attached to a component.
  * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
  * @param {String} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
  * @return {Boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
  * @example
 class Some extends eg.Component {
  some() {
    this.hasOn("hi");// check hi event.
  }
 }
  */


	Component.prototype.hasOn = function hasOn(eventName) {
		return !!this._eventHandler[eventName];
	};

	/**
  * Attaches an event to a component.
  * @ko 컴포넌트에 이벤트를 등록한다.
  * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
  * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
  * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
  * @example
 class Some extends eg.Component {
  hi() {
    console.log("hi");
  }
  some() {
    this.on("hi",this.hi); //attach event
  }
 }
 */


	Component.prototype.on = function on(eventName, handlerToAttach) {
		if ((typeof eventName === "undefined" ? "undefined" : _typeof(eventName)) === "object" && typeof handlerToAttach === "undefined") {
			var eventHash = eventName;
			var name = void 0;

			for (name in eventHash) {
				this.on(name, eventHash[name]);
			}
			return this;
		} else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
			var handlerList = this._eventHandler[eventName];

			if (typeof handlerList === "undefined") {
				this._eventHandler[eventName] = [];
				handlerList = this._eventHandler[eventName];
			}

			handlerList.push(handlerToAttach);
		}

		return this;
	};
	/**
  * Detaches an event from the component.
  * @ko 컴포넌트에 등록된 이벤트를 해제한다
  * @param {eventName} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
  * @param {Function} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
  * @return {eg.Component} An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
  * @example
 class Some extends eg.Component {
  hi() {
    console.log("hi");
  }
  some() {
    this.off("hi",this.hi); //detach event
  }
 }
  */


	Component.prototype.off = function off(eventName, handlerToDetach) {
		// All event detach.
		if (typeof eventName === "undefined") {
			this._eventHandler = {};
			return this;
		}

		// All handler of specific event detach.
		if (typeof handlerToDetach === "undefined") {
			if (typeof eventName === "string") {
				this._eventHandler[eventName] = undefined;
				return this;
			} else {
				var eventHash = eventName;
				var name = void 0;

				for (name in eventHash) {
					this.off(name, eventHash[name]);
				}
				return this;
			}
		}

		// The handler of specific event detach.
		var handlerList = this._eventHandler[eventName];

		if (handlerList) {
			var k = void 0;
			var handlerFunction = void 0;

			for (k = 0; (handlerFunction = handlerList[k]) !== undefined; k++) {
				if (handlerFunction === handlerToDetach) {
					handlerList = handlerList.splice(k, 1);
					break;
				}
			}
		}

		return this;
	};

	return Component;
}();

exports["default"] = Component;
module.exports = exports["default"];

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Component2["default"].VERSION = "2.1.1";

exports["default"] = _Component2["default"];
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=component.module.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Version info string
 * @ko 버전정보 문자열
 * @name VERSION
 * @static
 * @type {String}
 * @example
 * eg.InfiniteGrid.VERSION;  // ex) 3.3.3
 * @memberof eg.InfiniteGrid
 */
module.exports = "3.4.0-snapshot";

/***/ })
/******/ ]);
});
//# sourceMappingURL=infinitegrid.pkgd.js.map