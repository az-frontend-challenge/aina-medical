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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vanillajs-scrollspy/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanillajs-scrollspy/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fncAnimation = function fncAnimation(callback) {
  window.setTimeout(callback, 1000 / 60);
  return callback;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fncAnimation;
}();

var VanillaScrollspy = function () {
  function VanillaScrollspy(menu) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOutSine';

    _classCallCheck(this, VanillaScrollspy);

    this.menu = menu;
    this.speed = speed;
    this.easing = easing;
  }

  _createClass(VanillaScrollspy, [{
    key: 'scrollToY',
    value: function scrollToY() {
      var _this = this;

      var targetY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var scrollTargetY = targetY;
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      var currentTime = 0;
      var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / this.speed, 0.8));

      var easingEquations = {
        easeOutSine: function easeOutSine(pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(pos) {
          return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function easeInOutQuint(pos) {
          /* eslint-disable-next-line */
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
      };

      var tick = function tick() {
        currentTime += 1 / 60;
        var p = currentTime / time;
        var t = easingEquations[_this.easing](p);

        if (p < 1) {
          window.requestAnimFrame(tick);
          window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
          window.scrollTo(0, scrollTargetY);
        }
      };

      tick();
    }
  }, {
    key: 'menuControl',
    value: function menuControl() {
      var i = void 0;
      var currLink = void 0;
      var refElement = void 0;
      var links = this.menu.querySelectorAll('a[href^="#"]');
      var scrollPos = window.scrollY || document.documentElement.scrollTop;

      for (i = 0; i < links.length; i += 1) {
        currLink = links[i];
        refElement = document.querySelector(currLink.getAttribute('href'));

        if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.clientHeight > scrollPos) {
          currLink.classList.add('active');
        } else {
          currLink.classList.remove('active');
        }
      }
    }
  }, {
    key: 'animated',
    value: function animated() {
      var self = this;
      function control(e) {
        e.preventDefault();
        var target = document.querySelector(this.hash);
        self.scrollToY(target.offsetTop);
      }

      var i = void 0;
      var link = void 0;
      var links = this.menu.querySelectorAll('a[href^="#"]');

      for (i = 0; i < links.length; i += 1) {
        link = links[i];
        link.addEventListener('click', control);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.animated();
      document.addEventListener('scroll', function () {
        _this2.menuControl();
      });
    }
  }]);

  return VanillaScrollspy;
}();

exports.default = VanillaScrollspy;

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/mobile-nav */ "./resources/js/modules/mobile-nav/index.js");
/* harmony import */ var _modules_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/lazyload */ "./resources/js/modules/lazyload/index.js");
/* harmony import */ var _modules_scrollspy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/scrollspy */ "./resources/js/modules/scrollspy/index.js");
// Import local modules




window.onload = function () {
  var el = document.querySelector('header nav a:nth-of-type(1)');
  el.classList.toggle('active');
};

/***/ }),

/***/ "./resources/js/modules/lazyload/index.js":
/*!************************************************!*\
  !*** ./resources/js/modules/lazyload/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");
/* harmony import */ var _utilities_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utilities/helpers */ "./resources/js/utilities/helpers/index.js");



var Lazyload = function Lazyload() {
  // lazyload our images
  var images = _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper.querySelectorAll('[data-lazy]');

  if (Object(_utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["exists"])(images)) {
    // options
    var options = {
      threshold: 0.5
    };

    var preloadImage = function preloadImage(img) {
      // find and store the image's data-lazy attribute
      // commented out for now, but if you want to go the extra mile, then you can do all the srcset attribute stuff on the images ;)
      // const srcset = img.dataset.srcset
      var src = img.dataset.lazy;
      img.src = src; // img.srcset = srcset
      // add a class of loaded
      // we can then use this as a hook for fade-in animations etc

      img.classList.add('loaded');
    };

    var lazyLoad = new IntersectionObserver(function (entries, lazyLoad) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          preloadImage(entry.target);
          lazyLoad.unobserve(entry.target);
        }
      });
    }, options);
    images.forEach(function (image) {
      lazyLoad.observe(image);
    });
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (Lazyload);

/***/ }),

/***/ "./resources/js/modules/mobile-nav/index.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/mobile-nav/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var MobileNav = function MobileNav() {
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNavToggle.addEventListener('click', function () {
    this.classList.toggle('menu-toggle-active');
    _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNav.classList.toggle('menu-visible'); // set aria-expanded attribute on menu toggle button

    if (this.getAttribute('aria-expanded') === 'false') {
      this.setAttribute('aria-expanded', 'true');
    } else {
      this.setAttribute('aria-expanded', 'false');
    }
  });

  var arr = _toConsumableArray(_utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNavElements);

  arr.forEach(function (e) {
    e.addEventListener('click', function () {
      _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNavToggle.classList.toggle('menu-toggle-active');
      _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNav.classList.toggle('menu-visible'); // set aria-expanded attribute on menu toggle button

      if (_utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNavToggle.getAttribute('aria-expanded') === 'false') {
        _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNavToggle.setAttribute('aria-expanded', 'true');
      } else {
        _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNavToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

/***/ }),

/***/ "./resources/js/modules/scrollspy/index.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/scrollspy/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanillajs-scrollspy */ "./node_modules/vanillajs-scrollspy/lib/index.js");
/* harmony import */ var vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0__);

var mainNavbar = document.querySelector('#main-scroll-menu');
var mainScrollspy = new vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0___default.a(mainNavbar);
mainScrollspy.init();
var mobileNavbar = document.querySelector('#mobile-nav');
var mobileScrollspy = new vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0___default.a(mobileNavbar);
mobileScrollspy.init();

/***/ }),

/***/ "./resources/js/utilities/helpers/index.js":
/*!*************************************************!*\
  !*** ./resources/js/utilities/helpers/index.js ***!
  \*************************************************/
/*! exports provided: page, exists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");

/**
 * @description Test if the body id is something
 * @param  		{string}
 * @return 		{bool}
 *
 */

var page = function page(name) {
  if (!name) {
    return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute('id');
  }

  return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute('id') == name;
};
/**
 * @description Check if element exists the page
 * @param  		{string} Element selector
 * @param  		{string} Minimum number of elements
 * @return 		{bool}
 */


var exists = function exists(el, limit) {
  return el.length > 0;
};



/***/ }),

/***/ "./resources/js/utilities/selectors/index.js":
/*!***************************************************!*\
  !*** ./resources/js/utilities/selectors/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $$ = {
  body: document.querySelector('body'),
  wrapper: document.getElementById('wrapper'),
  header: document.getElementById('header'),
  nav: document.getElementById('nav'),
  hero: document.getElementById('hero'),
  main: document.getElementById('main'),
  containerCentre: document.getElementById('container-centre'),
  containerRight: document.getElementById('container-right'),
  preFooter: document.getElementById('pre-footer'),
  footer: document.getElementById('footer'),
  mobileNav: document.getElementById('mobile-nav'),
  mobileNavToggle: document.getElementById('mobile-nav-toggle'),
  mobileNavElements: document.querySelectorAll('.nav-element')
};
/* harmony default export */ __webpack_exports__["default"] = ($$);

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/sass/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/radan/Projects/web-static/A-Z-CHALLENGE/aina-medical/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /home/radan/Projects/web-static/A-Z-CHALLENGE/aina-medical/resources/sass/main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });