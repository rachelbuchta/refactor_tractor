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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/green-apples.jpg */ "./src/images/green-apples.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-color: #5B7894;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: none;\n  font-family: \"Quicksand\", sans-serif;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n\nh1 {\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  grid-area: fresh; }\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: 0.8s ease; }\n\nh4 {\n  color: #359567;\n  background-color: #C4EB67;\n  border-radius: 3px;\n  font-size: smaller;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content; }\n\n/* HEADER */\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: none;\n  grid-area: header; }\n\nspan {\n  color: #C4EB67;\n  font-weight: 400; }\n\n.header-apple-icon {\n  margin-left: 1.1%;\n  width: .7em; }\n\n#search {\n  border: 0.2em outset #C4EB67;\n  border-radius: 15px 15px 15px 15px;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-family: \"Quicksand\", sans-serif;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  grid-area: search; }\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border: none;\n  border-radius: 10px 0px 0px 10px;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: 0.8s ease;\n  width: 100%; }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-left: 3px outset #C4EB67;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%; }\n\n.nav-btn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  font-weight: 700;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  transition: 0.4s ease;\n  width: 15%; }\n  .nav-btn:hover {\n    color: #C4EB67;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: 0.4s ease; }\n  .nav-btn img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 2px 0px; }\n\n.saved-recipes-btn {\n  grid-area: button; }\n\n.saved-ingredients-btn {\n  border-left: 3px solid #C4EB67;\n  grid-area: button2; }\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  grid-area: image;\n  height: 9em;\n  overflow: hidden;\n  width: 100%; }\n\n.my-recipes-banner {\n  text-align: center;\n  width: 95%;\n  display: none;\n  margin-top: 1%; }\n  .my-recipes-banner h1 {\n    color: white;\n    width: 100%; }\n\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n  margin-top: 3%; }\n  .welcome-msg h1 {\n    color: white;\n    width: 100%; }\n\n/* FILTER SIDEBAR */\naside {\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: auto;\n  text-align: center; }\n\n.wrap {\n  background-color: white;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px; }\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px; }\n\nli {\n  margin: 2px; }\n\n/* RECIPE CARD SECTION */\nmain {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  grid-area: main;\n  flex-wrap: wrap;\n  margin: 1em; }\n\n.title-container {\n  align-self: center;\n  grid-area: title;\n  text-align: center;\n  margin-bottom: 13%; }\n\n.recipe-card {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-areas: \"title title\" \"food food\" \"tags apple\";\n  background-color: white;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  box-shadow: none;\n  cursor: pointer;\n  height: 18em;\n  margin: 2%;\n  padding: 1.5%;\n  width: 15em;\n  margin: 1em; }\n  .recipe-card:hover .card-photo-preview {\n    opacity: 50%;\n    transition: 0.8s ease; }\n  .recipe-card:hover .text {\n    font-size: 20px;\n    opacity: 100%;\n    transition: 0.5s ease;\n    width: 100%; }\n  .recipe-card:hover h3 {\n    text-shadow: 0px 0px 4px #C4EB67;\n    transition: 0.8s ease; }\n\n.tags {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-area: tags;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  overflow: auto; }\n\n.apple-container {\n  align-items: center;\n  justify-items: flex-end;\n  display: inline-grid;\n  grid-area: apple; }\n\n.card-apple-icon {\n  cursor: pointer;\n  height: 3em;\n  width: 3em; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 3%;\n  cursor: pointer;\n  height: 130px;\n  transition: 0.8s ease;\n  width: 100%; }\n\n.card-photo-container {\n  grid-area: food;\n  align-items: center;\n  display: flex;\n  height: 80%;\n  position: relative; }\n\n.text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: 0.5s ease; }\n\n/* BUTTONS */\n.filter-btn, .show-pantry-recipes-btn, .show-all-btn {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3%;\n  box-shadow: none;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 1% 2% 1% 2%; }\n  .filter-btn:hover, .show-pantry-recipes-btn:hover, .show-all-btn:hover {\n    background-color: #84C8A4; }\n\n.show-pantry-recipes-btn {\n  margin-top: 5%; }\n\n.show-all-btn {\n  height: 2.5em;\n  margin-top: 1%; }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 65%;\n  margin-left: 81%;\n  margin-top: 7%;\n  overflow: scroll;\n  padding: 1%;\n  position: absolute;\n  text-align: center;\n  width: 18%;\n  z-index: 3; }\n  .drop-menu h2 {\n    color: #359567;\n    margin: 0%; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 10%;\n  text-align: left; }\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 1%;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n  .recipe-instructions h4 {\n    background: white;\n    color: #359567; }\n  .recipe-instructions p {\n    margin-left: 2%; }\n  .recipe-instructions ol {\n    margin-right: 2%; }\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 2%;\n  box-shadow: none;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: 0.3s ease; }\n  #exit-recipe-btn:hover {\n    background: #C4EB67;\n    transition: 0.3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 2em;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #5B7894;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n@media only screen and (max-width: 900px) {\n  body {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: none;\n    font-family: \"Quicksand\", sans-serif;\n    grid-template-areas: \"header header\" \"image image\" \"aside image\" \"aside main\";\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: auto; }\n  header {\n    display: grid;\n    grid-template-columns: 4fr 1fr 1fr;\n    grid-template-rows: none;\n    grid-template-areas: \"fresh button button2\" \"search search search\";\n    grid-area: header;\n    padding: 1%; }\n  aside {\n    width: 70%; }\n  .dropdown {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    padding: 1%; }\n  .recipe-card {\n    width: 50%; }\n  .ing-pan-btn {\n    display: flex;\n    justify-self: end;\n    align-content: flex-end;\n    width: 50%; }\n  .drop-menu {\n    margin-left: 25%;\n    width: 50%;\n    height: 50%;\n    margin-top: 25%; }\n  h1 {\n    justify-self: center;\n    width: 90%; }\n  #search {\n    width: 85%;\n    justify-self: center; }\n  .banner-image {\n    height: 7em; } }\n\n@media only screen and (max-width: 550px) {\n  header {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: none;\n    grid-template-areas: \"fresh fresh fresh\"  \"none button button2\" \"search search search\";\n    justify-self: center;\n    align-self: center; }\n  h1 {\n    width: 50%;\n    font-size: 2.8em; }\n  aside {\n    width: 40%; }\n  .my-pantry-btn {\n    margin-right: 96%; }\n  .saved-recipes-btn {\n    margin-right: 57%; }\n  .saved-ingredients-btn {\n    border-left: none; }\n  .nav-btn {\n    align-items: none; }\n  #recipe-title {\n    font-size: 1.5em; } }\n", "",{"version":3,"sources":["webpack://./src/css/styles.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"AAGA;EACE,yBCJqB;EAcrB,aAAa;EACb,8BDV4B;ECW5B,wBDXkC;EAClC,oCCHQ;EDIR,+DAGc;EACd,aAAa;EACb,SAAS;EACT,UAAU;EACV,4BAA4B,EAAA;;AAG9B;EACE,kBAAkB;EAClB,YClBqB;EDmBrB,wCAAwC;EACxC,eAAe;EACf,UAAU;EACV,qBAAqB;EACrB,UAAU;EACV,gBAAgB,EAAA;;AAGlB;EACE,cAAc;EACd,yBAAyB,EAAA;;AAG3B;EACE,cC9BmB;ED+BnB,eAAe;EACf,WAAW;EACX,wBAAwB;EC3BxB,qBD4B4B,EAAA;;AAG9B;EACE,cCtCmB;EDuCnB,yBCtCkB;EDuClB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,wBAAwB;EACxB,kBAAkB,EAAA;;AAIpB,WAAA;AACA;ECjCE,aAAa;EACb,mBDiCwB;EChCxB,qBDgC8B;EAC9B,iBAAiB,EAAA;;AAGnB;EACE,cCtDkB;EDuDlB,gBAAgB,EAAA;;AAGlB;EACE,iBAAiB;EACjB,WAAW,EAAA;;AAGb;EC1CE,4BArBkB;EAsBlB,kCD0CmE;ECzCnE,mCDyC4F;ECjD5F,aAAa;EACb,mBDiDwB;EChDxB,uBDgDgC;EAChC,oCCpEQ;EDqER,yBAAyB;EACzB,WAAW;EACX,iBAAiB,EAAA;;AAInB;EACE,yBAAyB;EACzB,yGAA+H;ECtD/H,YDuD2B;ECtD3B,gCDsD8C;ECrD9C,4CDqDgF;EAChF,cClFqB;EDmFrB,oCChFQ;EDiFR,eAAe;EACf,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,iBAAiB;EC9EjB,qBD+E4B;EAC5B,WAAW,EAAA;;AAGb;EACE,aAAa,EAAA;;AAGf;EACE,+BC7FkB;ED8FlB,gCAAgC;EAChC,WAAW,EAAA;;AAGb;ECnFE,aAAa;EACb,sBDmF2B;EClF3B,uBDkFmC;EACnC,mBAAmB;EACnB,6BAAmC;EACnC,YAAY;EACZ,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;ECvGlB,qBDwG4B;EAC5B,UAAU,EAAA;EAZZ;IAeE,cCjHkB;IDkHlB,eAAe;IACf,8BAA8B;IC9G9B,qBD+G4B,EAAA;EAlB9B;IAsBE,gBAAgB;IAChB,eAAe;IACf,gBAAgB,EAAA;;AAIlB;EACE,iBAAiB,EAAA;;AAGnB;EACE,8BCnIkB;EDoIlB,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,wBAAwB,EAAA;;AAG1B,gBAAA;AACA;EACE,4GAA6F;EAC7F,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,WAAW,EAAA;;AAGb;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,cAAc,EAAA;EAJhB;IAOM,YChKiB;IDiKjB,WAAW,EAAA;;AAIjB;EACE,kBAAkB;EAClB,UAAU;EACV,cAAc,EAAA;EAHhB;IAMM,YC3KiB;ID4KjB,WAAW,EAAA;;AAIjB,mBAAA;AACA;EACE,uBClLqB;EAmBrB,aAAa;EACb,mBD+JwB;EC9JxB,uBD8JgC;EAChC,YAAY;EACZ,kBAAkB,EAAA;;AAGpB;EACE,uBCzLqB;ED0LrB,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,YAAY,EAAA;;AAGd;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,WAAW,EAAA;;AAGb,wBAAA;AACA;ECxLE,aAAa;EACb,mBDwLwB;ECvLxB,uBDuLgC;EAChC,eAAe;EACf,eAAe;EACf,WAAW,EAAA;;AAIb;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EC7ME,aAAa;EACb,8BD6M4B;EC5M5B,+BD4MyC;EACzC,2DAGY;EACZ,uBChOqB;EAyBrB,yBArBkB;EAsBlB,kBDuMiD;ECtMjD,gBDsMuD;EACvD,eAAe;EACf,YAAY;EACZ,UAAU;EACV,aAAa;EACb,WAAW;EACX,WAAW,EAAA;EAbb;IAgBI,YAAY;ICjOd,qBDkO8B,EAAA;EAjBhC;IAqBE,eAAe;IACf,aAAa;ICvOb,qBDwO4B;IAC5B,WAAW,EAAA;EAxBb;IA4BE,gCClPkB;IAKlB,qBD8O4B,EAAA;;AAI9B;EC9OE,aAAa;EACb,8BD8O4B;EC7O5B,2BD6OqC;EACrC,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;EACX,cAAc,EAAA;;AAGhB;EACE,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,gBAAgB,EAAA;;AAGlB;EACE,eAAe;EACf,WAAW;EACX,UAAU,EAAA;;AAGZ;EACE,4BAA4B;EAC5B,4BAA4B;EAC5B,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;EACf,aAAa;EC9Qb,qBD+Q4B;EAC5B,WAAW,EAAA;;AAGb;EACE,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,kBAAkB,EAAA;;AAGpB;EACE,mBClSmB;EDmSnB,YCtSqB;EDuSrB,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;ECpST,qBDqS4B,EAAA;;AAI9B,YAAA;AACA;EACE,yBCjTmB;EAsBnB,SD4RwB;EC3RxB,iBD2R4B;EC1R5B,gBD0RkC;EAClC,YCtTqB;EDuTrB,eAAe;EACf,oCCtTQ;EDuTR,eAAe;EACf,iBAAiB;EACjB,oBAAoB,EAAA;EARtB;IAWI,yBAAyB,EAAA;;AAI3B;EAEE,cAAc,EAAA;;AAGhB;EAEE,aAAa;EACb,cAAc,EAAA;;AAGlB,gBAAA;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,UAAU,EAAA;EAZZ;IAeI,cC1ViB;ID2VjB,UAAU,EAAA;;AAId;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB,EAAA;;AAGlB,wBAAA;AACA;EACE,iBC1WqB;EAyBrB,yBArBkB;EAsBlB,iBDiVgD;EChVhD,+BDgVqE;EACrE,aAAa;EACb,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,QAAQ;EACR,UAAU;EACV,aAAa,EAAA;EAZf;IAeI,iBCxXmB;IDyXnB,cCtXiB,EAAA;EDsWrB;IAoBI,eAAe,EAAA;EApBnB;IAwBI,gBAAgB,EAAA;;AAIpB;EACE,iBCtYqB;EAyBrB,0BAtBmB;EAuBnB,iBD6WkD;EC5WlD,gBD4WwD;EACxD,cCrYmB;EDsYnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;ECpYf,qBDqY4B,EAAA;EAT9B;IAYI,mBC7YgB;IAKlB,qBDyY8B,EAAA;;AAIhC;EACE,4BAA4B;EAC5B,sBAAsB;EACtB,8BAA8B;EAC9B,YC1ZqB;ED2ZrB,cAAc;EACd,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,8BAA8B,EAAA;;AAGhC;EACE,yBAAwB;EACxB,yBCraqB;EDsarB,YAAW;EACX,OAAM;EACN,YAAW;EACX,eAAc;EACd,MAAK;EACL,WAAU;EACV,YAAW,EAAA;;AAGb;EA5aA;ICWE,aAAa;IACb,8BDka4B;ICja5B,wBDiakC;IAClC,oCC/aQ;IDgbR,6EAIc;IACd,aAAa;IACb,SAAS;IACT,UAAU;IACV,4BAA4B,EAAA;EAtY9B;ICvCE,aAAa;IACb,kCDgbgC;IC/ahC,wBD+aqC;IACrC,kEAEsB;IACtB,iBAAiB;IACjB,WAAW,EAAA;EAlRb;IAsRE,UAAU,EAAA;EAGZ;ICvbE,aAAa;IACb,sBDub2B;ICtb3B,uBDsbmC;IACnC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,WAAW,EAAA;EAtPb;IA0PE,UAAU,EAAA;EAzUZ;IA6UE,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,UAAS,EAAA;EA7IX;IAiJE,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,eAAe,EAAA;EAldjB;IAsdE,oBAAoB;IACpB,UAAU,EAAA;EApaZ;IAwaE,UAAU;IACV,oBAAoB,EAAA;EA3VtB;IA+VE,WAAW,EAAA,EACZ;;AAID;EAjcA;ICvCE,aAAa;IACb,kCDyekC;ICxelC,wBDwewC;IACtC,sFAGsB;IACtB,oBAAoB;IACpB,kBAAkB,EAAA;EA7etB;IAifI,UAAU;IACV,gBAAgB,EAAA;EAjVpB;IAqVI,UAAU,EAAA;EAGZ;IACE,iBAAiB,EAAA;EAxYrB;IA4YI,iBAAiB,EAAA;EAxYrB;IA4YI,iBAAiB,EAAA;EA5arB;IAgbI,iBAAiB,EAAA;EAhIrB;IAoII,gBAAgB,EAAA,EACjB","sourcesContent":["@import \"variables\";\n@import \"media-queries\";\n\nbody {\n  background-color: $primary-color;\n  @include gridDisplay(1fr 5fr, none);\n  font-family: $font;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nh1 {\n  align-self: center;\n  color: $text-background;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  grid-area: fresh;\n}\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px;\n}\n\nh3 {\n  color: $border-font;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  @include transition(.8s ease)\n}\n\nh4 {\n  color: $border-font;\n  background-color: $background;\n  border-radius: 3px;\n  font-size: smaller;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content;\n}\n\n\n/* HEADER */\nheader {\n  @include flexDisplay(row, none);\n  grid-area: header;\n}\n\nspan {\n  color: $background;\n  font-weight: 400;\n}\n\n.header-apple-icon {\n  margin-left: 1.1%;\n  width: .7em;\n}\n\n#search {\n  @include borderStyling(.2em outset $background, 15px 15px 15px 15px, 0px 0px 7px 0px #475d74);\n  @include flexDisplay(row, center);\n  font-family: $font;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  grid-area: search;\n}\n\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  @include borderStyling(none, 10px 0px 0px 10px, inset -3px -1px 20px 1px #5c7894);\n  color: $primary-color;\n  font-family: $font;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  @include transition(.8s ease);\n  width: 100%;\n}\n\n.search-label {\n  display: none;\n}\n\n.search-btn {\n  border-left: 3px outset $background;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%;\n}\n\n.nav-btn {\n  @include flexDisplay(column, center);\n  align-items: center;\n  background:$primary-color no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  font-weight: 700;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  @include transition(.4s ease);\n  width: 15%;\n\n  &:hover {\n  color: $background;\n  font-size: 14px;\n  text-shadow: 0px 2px 4px black;\n  @include transition(.4s ease);\n}\n\n  img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px;\n}\n}\n\n.saved-recipes-btn {\n  grid-area: button;\n}\n\n.saved-ingredients-btn {\n  border-left: 3px solid $background;\n  grid-area: button2;\n}\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px;\n}\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\");\n  grid-area: image;\n  height: 9em;\n  overflow: hidden;\n  width: 100%;\n}\n\n.my-recipes-banner {\n  text-align: center;\n  width: 95%;\n  display: none;\n  margin-top: 1%;\n\n    h1 {\n      color: $text-background;\n      width: 100%;\n    }\n}\n\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n  margin-top: 3%;\n\n    h1 {\n      color: $text-background;\n      width: 100%;\n    }\n}\n\n/* FILTER SIDEBAR */\naside {\n  background-color: $text-background;\n  @include flexDisplay(row, center);\n  height: auto;\n  text-align: center;\n}\n\n.wrap {\n  background-color: $text-background;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px;\n}\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n}\n\nli {\n  margin: 2px;\n}\n\n/* RECIPE CARD SECTION */\nmain {\n  @include flexDisplay(row, center);\n  grid-area: main;\n  flex-wrap: wrap;\n  margin: 1em;\n  \n}\n\n.title-container {\n  align-self: center;\n  grid-area: title;\n  text-align: center;\n  margin-bottom: 13%;\n}\n\n.recipe-card {\n  @include gridDisplay(2fr 1fr, 1fr 1fr 1fr);\n  grid-template-areas: \n  \"title title\"\n  \"food food\"\n  \"tags apple\";\n  background-color: $text-background;\n  @include borderStyling(2px solid $background, 7px, none);\n  cursor: pointer;\n  height: 18em;\n  margin: 2%;\n  padding: 1.5%;\n  width: 15em;\n  margin: 1em;\n\n  &:hover .card-photo-preview {\n    opacity: 50%;\n    @include transition(.8s ease);\n  }\n\n  &:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  @include transition(.5s ease);\n  width: 100%;\n}\n\n  &:hover h3 {\n  text-shadow: 0px 0px 4px $background;\n  @include transition(.8s ease);\n}\n}\n\n.tags {\n  @include gridDisplay(1fr 1fr, 1fr 1fr);\n  grid-area: tags;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  overflow: auto;\n}\n\n.apple-container {\n  align-items: center;\n  justify-items: flex-end;\n  display: inline-grid;\n  grid-area: apple;\n}\n\n.card-apple-icon {\n  cursor: pointer;\n  height: 3em;\n  width: 3em;\n}\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 3%;\n  cursor: pointer;\n  height: 130px;\n  @include transition(.8s ease);\n  width: 100%;\n}\n\n.card-photo-container {\n  grid-area: food;\n  align-items: center;\n  display: flex;\n  height: 80%;\n  position: relative;\n}\n\n.text {\n  background: $border-font;\n  color: $text-background;;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  @include transition(.5s ease);\n}\n\n\n/* BUTTONS */\n.filter-btn {\n  background-color: $border-font;\n  @include borderStyling(0, 3%, none);\n  color: $text-background;\n  cursor: pointer;\n  font-family: $font;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 1% 2% 1% 2%;\n\n    &:hover {\n    background-color: #84C8A4;\n    }\n}\n\n  .show-pantry-recipes-btn {\n    @extend .filter-btn;\n    margin-top: 5%;\n  }\n\n  .show-all-btn {\n    @extend .filter-btn;\n    height: 2.5em;\n    margin-top: 1%;\n  }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 65%;\n  margin-left: 81%;\n  margin-top: 7%;\n  overflow: scroll;\n  padding: 1%;\n  position: absolute;\n  text-align: center;\n  width: 18%;\n  z-index: 3;\n\n  h2 {\n    color: $border-font;\n    margin: 0%;\n  }\n}\n\n.pantry-list {\n  color: #000000;\n  padding-left: 10%;\n  text-align: left;\n}\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: $text-background;\n  @include borderStyling(3px solid $background, 1%, 1px 1px 115px black);\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000;\n\n  h4 {\n    background: $text-background;\n    color: $border-font;\n  }\n\n  p {\n    margin-left: 2%;\n  }\n\n  ol {\n    margin-right: 2%;\n  }\n}\n\n#exit-recipe-btn {\n  background: $text-background;\n  @include borderStyling(2px double $border-font, 2%, none);\n  color: $border-font;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  @include transition(.3s ease);\n\n  &:hover {\n    background: $background;\n    @include transition(.3s ease);\n  }\n}\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: $text-background;\n  font-size: 2em;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black;\n}\n\n#overlay {\n  filter:alpha(opacity=50);\n  background-color:$primary-color;\n  height:100%;\n  left:0;\n  opacity:0.5;\n  position:fixed;\n  top:0;\n  width:100%;\n  z-index:100;\n}\n\n@media only screen and (max-width: 900px) {\nbody {\n  @include gridDisplay(1fr 2fr, none);\n  font-family: $font;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside image\"\n    \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nheader {\n  @include gridDisplay(4fr 1fr 1fr,none);\n  grid-template-areas: \n  \"fresh button button2\"\n  \"search search search\";\n  grid-area: header;\n  padding: 1%;\n}\n\naside {\n  width: 70%;\n}\n\n.dropdown {\n  @include flexDisplay(column, center);\n  align-self: start;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  padding: 1%;\n}\n\n.recipe-card {\n  width: 50%;\n}\n\n.ing-pan-btn {\n  display: flex;\n  justify-self: end;\n  align-content: flex-end;\n  width:50%;\n}\n\n.drop-menu {\n  margin-left: 25%;\n  width: 50%;\n  height: 50%;\n  margin-top: 25%;\n}\n\nh1 {\n  justify-self: center;\n  width: 90%;\n}\n\n#search {\n  width: 85%;\n  justify-self: center;\n}\n\n.banner-image {\n  height: 7em;\n}\n\n}\n\n@media only screen and (max-width: 550px) {\n  header {\n    @include gridDisplay(1fr 1fr 1fr, none);\n    grid-template-areas: \n    \"fresh fresh fresh\" \n    \"none button button2\"\n    \"search search search\";\n    justify-self: center;\n    align-self: center;\n  }\n\n  h1 {\n    width: 50%;\n    font-size: 2.8em;\n  }\n\n  aside {\n    width: 40%;\n  }\n\n  .my-pantry-btn {\n    margin-right: 96%;\n  }\n\n  .saved-recipes-btn {\n    margin-right: 57%;\n  }\n\n  .saved-ingredients-btn {\n    border-left: none;\n  }\n\n  .nav-btn {\n    align-items: none;\n  }\n\n  #recipe-title {\n    font-size: 1.5em;\n  }\n \n}","$primary-color: #5B7894;\n$text-background: white;\n$font: \"Quicksand\",\nsans-serif;\n$border-font: #359567;\n$background: #C4EB67;\n\n\n\n@mixin transition($value) {\n  transition: $value;\n}\n\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n}\n\n@mixin flexDisplay($direction, $justify) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n}\n\n@mixin borderStyling($border, $radius, $shadow) {\n  border: $border;\n  border-radius: $radius;\n  box-shadow: $shadow;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/APICalls.js":
/*!*************************!*\
  !*** ./src/APICalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getData = dataset => {
  let data = [];
  fetch(`http://localhost:3001/api/v1/${dataset}`)
    .then(response => response.json())
    .then(result => {
      result.forEach(eachResult => {
        data.push(eachResult)
      });
    })
    .catch(error => console.log('error', error));
  return data;
} 

// export const sendData = dataToSend => {
//   const requestOptions = {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(dataToSend)
//   };

//   fetch("http://localhost:3001/api/v1/users", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
/* harmony default export */ __webpack_exports__["default"] = (getData);

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/data/ingredient-data.js":
/*!*************************************!*\
  !*** ./src/data/ingredient-data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APICalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../APICalls */ "./src/APICalls.js");


const apiCall = 'ingredients';


let ingredientsData;

ingredientsData = Object(_APICalls__WEBPACK_IMPORTED_MODULE_0__["default"])(apiCall);

/* harmony default export */ __webpack_exports__["default"] = (ingredientsData);

/***/ }),

/***/ "./src/data/recipe-data.js":
/*!*********************************!*\
  !*** ./src/data/recipe-data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APICalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../APICalls */ "./src/APICalls.js");


const apiCall = 'recipes';

let recipeData;

recipeData = Object(_APICalls__WEBPACK_IMPORTED_MODULE_0__["default"])(apiCall);

/* harmony default export */ __webpack_exports__["default"] = (recipeData);

/***/ }),

/***/ "./src/data/users-data.js":
/*!********************************!*\
  !*** ./src/data/users-data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APICalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../APICalls */ "./src/APICalls.js");


const apiCall = 'users';
let users;

users = Object(_APICalls__WEBPACK_IMPORTED_MODULE_0__["default"])(apiCall);

/* harmony default export */ __webpack_exports__["default"] = (users);

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable max-len */

let domUpdates = {

  welcomeUser(currentUser) {
    let firstName = currentUser.name.split(" ")[0];
    let welcomeMsg = `
    <article class="welcome-msg">
      <h1>Welcome ${firstName}!</h1>
    </article>`;
    document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
      welcomeMsg);
  },
  
  // Create Cards and Tag List onload // 
  createCardTags(tags) {
    let result = '';
    tags.forEach(tag => {
      let newTag = `<h4>${tag}</h4>`;
      result += newTag;
    });
    return result;
  },

  createCard(recipe, appleDisplayed) {
    let main = document.querySelector("main");
    let cardHtml = `
  <article class="recipe-card" id=${recipe.id}>
    <section class="title-container"
      <h3 class="title" maxlength="40">${this.shortenRecipeName(recipe)}</h3>
    </section>  
    <section class="card-photo-container">
      <img src=${recipe.image} class="card-photo-preview" alt="${recipe.name} recipe" title="${recipe.name} recipe">
      <div class="text">
        <div aria-label="Click for instructions banner">Click for Instructions</div>
      </div>
    </section>
    <section aria-label="Type of recipe" class="tags">
      ${this.createCardTags(recipe.tags)}
    </section>
    <section class="apple-container">
      <img aria-label="Click to favorite recipe" src="./images/${appleDisplayed}.png" alt="unfilled apple icon" class="card-apple-icon">
    </section>  
  </article>`
    let section = document.createElement("section");
    section.innerHTML = cardHtml;
    main.appendChild(section);
  },

  clearMainCardSection() {
    const main = document.querySelector("main");
    const modal = `
    <div class="recipe-instructions">
    </div>
    <div class="my-recipes-banner">
      <h1>My Recipes</h1>
      <button class="show-all-btn">Show All Recipes</button>
    </div>`
    
    main.innerHTML = '';
    main.innerHTML += modal;
    return main;
  },
  
  shortenRecipeName(recipe) {
    let shortRecipeName = recipe.name;
    if (shortRecipeName.length > 40) {
      shortRecipeName = shortRecipeName.substring(0, 40) + "...";
    }
    return shortRecipeName;
  },

  createListTags(tags) {
    let tagList = document.querySelector(".tag-list");
    tags.forEach(tag => {
      let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
      <label for="${tag}">${this.capitalize(tag)}</label></li>`;
      tagList.insertAdjacentHTML("beforeend", tagHtml);
    });
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  },

  showSelectedRecipes(foundRecipes, user) {
    this.clearMainCardSection()
    console.log(this.clearMainCardSection())
    foundRecipes.forEach(recipe => {
      user.isFavorited(recipe) ? this.createCard(recipe, "apple-logo") : this.createCard(recipe, "apple-logo-outline");
    });
  },

  getCardId() {
    return parseInt(event.target.closest(".recipe-card").id)
  },

  fillApple() {
    event.target.src = "./images/apple-logo.png";
  },

  removeApple() {
    event.target.src = "./images/apple-logo-outline.png";
  },

  //Recipe Instructions//
  createInstructionsTitle(recipe, ingredients) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");

    let recipeTitle = `
    <button aria-label="Exit recipe" id="exit-recipe-btn">X</button>
    <h3 id="recipe-title">${recipe.name}</h3>
    <h4>Ingredients</h4>
    <p>${ingredients}</p>`
    fullRecipeInfo.insertAdjacentHTML("beforeend", recipeTitle);
  },

  createInstructionsImage(recipe) {
    document.querySelector("#recipe-title").style.backgroundImage = `url(${recipe.image})`;
  },

  createInstructionsList(instructions) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    let instructionsList = "";
    instructions.forEach(step => instructionsList += `<li>${step.instruction}</li>`);
    fullRecipeInfo.insertAdjacentHTML("beforeend", "<h4>Instructions</h4>");
    fullRecipeInfo.insertAdjacentHTML("beforeend", `<ol>${instructionsList}</ol>`);
  },

  createEstimatedPrice(recipe, ingredients) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    fullRecipeInfo.insertAdjacentHTML("beforeend", "<h4>Estimated Cost</h4>")
    fullRecipeInfo.insertAdjacentHTML("beforeend", `<h4>${recipe.calculateIngredientsCost(ingredients)}</h4>`);

  },

  exitRecipe() {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    while (fullRecipeInfo.firstChild &&
    fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
    fullRecipeInfo.style.display = "none";
    document.getElementById("overlay").remove();
  },

  //Search bar input dom updates
  displaySearchError() {
    let searchInput = document.querySelector("#search-input");
    const message = document.createElement('p');
    message.innerText = 'WAT DA FUK YOU DOIN?!?!';
    const result = searchInput.appendChild(message);
    return result;
  },

  clearAllFields() {
    this.clearField();
    this.clearCheckedBoxes();
  },

  clearField() {
    let searchInput = document.querySelector("#search-input");
    searchInput.value = '';
  },

  clearCheckedBoxes() {
    let checkedBoxes = document.querySelectorAll(".checked-tag");
    let arrayCheckedBoxes = Array.from(checkedBoxes)
    arrayCheckedBoxes.forEach(box => {
      box.checked = false;
    })
  },

  createAllRecipes(recipes) {
    recipes.forEach(recipe => {
      let domRecipe = 
      document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "";
    });
  },

  //Pantry//
  displayPantryInfo(pantry) {
    pantry.forEach(ingredient => {
      let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
    <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
      document.querySelector(".pantry-list").insertAdjacentHTML("beforeend", ingredientHtml);
    });
  }, 

  formatNumber(number) {
    const stringedNum = number.toString();
    let index;
    let afterPeriod;

    if (stringedNum.includes('.')) {
      index = stringedNum.indexOf('.');
      afterPeriod = stringedNum.slice(index + 1);
    }
    if (afterPeriod && afterPeriod.length > 2) {
      afterPeriod = afterPeriod.toFixed(2);
    }
    return parseFloat(stringedNum.slice(0, index + 1).concat(afterPeriod)) || number;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/images/apple-logo-outline.png":
/*!*******************************************!*\
  !*** ./src/images/apple-logo-outline.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo-outline.png");

/***/ }),

/***/ "./src/images/apple-logo.png":
/*!***********************************!*\
  !*** ./src/images/apple-logo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo.png");

/***/ }),

/***/ "./src/images/cookbook.png":
/*!*********************************!*\
  !*** ./src/images/cookbook.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/cookbook.png");

/***/ }),

/***/ "./src/images/green-apples.jpg":
/*!*************************************!*\
  !*** ./src/images/green-apples.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/green-apples.jpg");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search.png");

/***/ }),

/***/ "./src/images/seasoning.png":
/*!**********************************!*\
  !*** ./src/images/seasoning.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/seasoning.png");

/***/ }),

/***/ "./src/ingredient-repo.js":
/*!********************************!*\
  !*** ./src/ingredient-repo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IngredientsRepo; });
/* eslint-disable max-len */
class IngredientsRepo {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  getRecipeIdByName(name) {
    const foundIngredient = this.ingredients.find(ingredient => {
      if (ingredient.name.includes(name.toLowerCase())) {
        return ingredient.id;
      }
    });
    
    return foundIngredient ? foundIngredient.id : 0;
  }

  getRecipeNameById(id) {
    const foundIngredient = this.ingredients.find(ingredient => {
      if (ingredient.id === id) {
        return ingredient.name;
      }
    });
    
    return foundIngredient ? foundIngredient.name : "";
  }
}





/***/ }),

/***/ "./src/pantry.js":
/*!***********************!*\
  !*** ./src/pantry.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pantry; });
/* eslint-disable max-len */
class Pantry {
  constructor(pantryData) {
    this.items = pantryData;
    this.forRecipe = [];
    this.groceryList = [];
  }

  takeStock(recipe) {
    this.checkPantry(recipe);
    recipe.ingredients.forEach(ingredient => {
      this.items.forEach(item => {
        if (item.ingredient === ingredient.id && item.amount > ingredient.quantity.amount) {
          this.forRecipe.push(item);
        }
        else if (item.ingredient === ingredient.id && item.amount < ingredient.quantity.amount) {
          this.groceryList.push({
            ingredient: item.ingredient,
            amount: ingredient.quantity.amount - item.amount
          });
        }
      })
    })
  }

  checkPantry(recipe) {
    recipe.ingredients.forEach(ingredient => {
      let newItems = this.items.find(item => item.ingredient === ingredient.id);

      if (!newItems) {
        this.groceryList.push({
          ingredient: ingredient.id,
          amount: ingredient.quantity.amount
        })
      }
    })
  }

  canMake(recipe) {
    this.takeStock(recipe);
    if (this.groceryList.length > 0) {
      return this.groceryList;
    } else {
      return true;
    }
  }

  removeIngredients(recipe) {
    recipe.ingredients.forEach(ingredient => {
      this.items.forEach((item, index) => {
        if (ingredient.id === item.ingredient) {
          let newAmount = item.amount - ingredient.quantity.amount;
          if (newAmount === 0) {
            this.items.splice(index, 1);
          }
          return item.amount = newAmount;
        }
      })
    })
  }

  createPostBody(user, ingredient) {
    return {
      "userID": user.id,
      "ingredientID": ingredient.id,
      "ingredientModification": -ingredient.quantity.amount
    }
  }
}

/***/ }),

/***/ "./src/recipe-repo.js":
/*!****************************!*\
  !*** ./src/recipe-repo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeRepo; });
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* eslint-disable max-len */


class RecipeRepo {
  constructor(recipes) {
    this.recipes = recipes.map(recipe => new _recipe__WEBPACK_IMPORTED_MODULE_0__["default"](recipe));
  }

  returnAllTags() {
    let tags = [];
    this.recipes.forEach(recipe => {
      recipe.tags.filter(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        } 
      });
    });
    return tags.sort();
  }

  searchRecipesByIngredient(ingredientId) {
    const filteredRecipes = [];
    this.recipes.filter(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredientId === ingredient.id && !filteredRecipes.includes(recipe.name)) {
          filteredRecipes.push(recipe.name);
        }
      });
    });
    return filteredRecipes;
  }

  filterListByTag(list, tag) {
    return list.filter(recipe => recipe.tags.includes(tag));
  }

  filterListByIngredient(list, ingredientId) {        
    return list.reduce((filtered, recipe) => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.id === ingredientId) {
          filtered.push(recipe);
        }
      });

      return filtered;
    }, []);
  }

  filterListByName(list, name) {
    return list.filter(recipe => recipe.name.includes(name));
  }


  filterListById(id) {
    return this.recipes.find(recipe => recipe.id === id);
  }
}



/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recipe; });
/* eslint-disable max-len */
class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  }

  calculateIngredientsCost(ingredientData) {
    const costInCents = this.ingredients.reduce((totalCost, recipeIngredient) => {
      ingredientData.forEach(ingredient => {
        if (ingredient.id === recipeIngredient.id) {
          let ingredientTotal = ingredient.estimatedCostInCents * recipeIngredient.quantity.amount;
          totalCost += ingredientTotal;
        }
      })
      return totalCost;
    }, 0);
    let cost = costInCents * .01;
    return cost.toLocaleString("en-US", {style: "currency", currency: "USD"});
  }

  returnInstructions(recipe) {
    return recipe.instructions.map(step => step.instruction);    
  }
}



/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_users_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/users-data.js */ "./src/data/users-data.js");
/* harmony import */ var _data_recipe_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/recipe-data */ "./src/data/recipe-data.js");
/* harmony import */ var _data_ingredient_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/ingredient-data */ "./src/data/ingredient-data.js");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/apple-logo-outline.png */ "./src/images/apple-logo-outline.png");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _recipe_repo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipe-repo */ "./src/recipe-repo.js");
/* harmony import */ var _ingredient_repo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ingredient-repo */ "./src/ingredient-repo.js");
/* eslint-disable max-len */
















let allRecipesBtn = document.querySelector(".show-all-btn");
let filterBtn = document.querySelector(".filter-btn");
let fullRecipeInfo = document.querySelector(".recipe-instructions");
let main = document.querySelector("main");
let menuOpen = false;
let pantryBtn = document.querySelector(".my-pantry-btn");
let savedRecipesBtn = document.querySelector(".saved-recipes-btn");
let searchBtn = document.querySelector(".search-btn");
let searchForm = document.querySelector("#search");
let searchInput = document.querySelector("#search-input");
let showPantryRecipes = document.querySelector(".show-pantry-recipes-btn");

let user;
let recipeRepo;
let recipes = [];
let ingredientsRepo;  

const initiateData = () => {
  user = new _user__WEBPACK_IMPORTED_MODULE_10__["default"](_data_users_data_js__WEBPACK_IMPORTED_MODULE_0__["default"][Math.floor(Math.random() * _data_users_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].length)]);
  recipeRepo = new _recipe_repo__WEBPACK_IMPORTED_MODULE_11__["default"](_data_recipe_data__WEBPACK_IMPORTED_MODULE_1__["default"]);
  ingredientsRepo = new _ingredient_repo__WEBPACK_IMPORTED_MODULE_12__["default"](_data_ingredient_data__WEBPACK_IMPORTED_MODULE_2__["default"]);
  createCards();
  displayTagList();
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].welcomeUser(user)
  findPantryInfo();
  showAllRecipes(recipes)
}

// CREATE RECIPE CARDS
const createCards = () => { 
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].clearMainCardSection();
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].showSelectedRecipes(recipeRepo.recipes, user);
}

// FILTER BY RECIPE TAGS
const displayTagList = () => {
  let tags = recipeRepo.returnAllTags()
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].createListTags(tags);
}

const findCheckedBoxes = () => {
  const tagCheckboxes = document.querySelectorAll(".checked-tag");
  const checkboxInfo = Array.from(tagCheckboxes)
  const selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  const selectedTagNames = selectedTags.map(tag => tag.id);
  findTaggedRecipes(selectedTagNames);
}

const findTaggedRecipes = selected => {
  const filteredResults = [];
  selected.forEach(tag => {
    const foundRecipe = recipeRepo.filterListByTag(recipeRepo.recipes, tag);
    foundRecipe.forEach(recipe => {
      const tagMatch = filteredResults.find(result => recipe.id === result.id);
      if (!tagMatch) {
        filteredResults.push(recipe)
      }
    })
  })   
  if (filteredResults.length > 0) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].showSelectedRecipes(filteredResults, user);
  }
}

// FAVORITE RECIPE FUNCTIONALITY
const allClicksInMain = (event) => {
  if (event.target.className === "card-apple-icon") {
    addToMyRecipes();
  } else if (event.target.id === "exit-recipe-btn") {
    _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    openRecipeInfo(event);
  }
}

const addToSavedDom = recipe => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].fillApple();
  user.saveRecipe(user.favoriteRecipes, recipe);
}

const removeFromSavedDom = recipe => {
  alert('You have removed a recipe from My Recipes!');
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].removeApple();
  user.removeRecipe(user.favoriteRecipes, recipe);
  createCards();
  showWelcomeBanner();
}

const addToMyRecipes = () => {
  const cardId = _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].getCardId();
  const recipe = recipeRepo.filterListById(cardId);

  if (!user.favoriteRecipes.includes(recipe)) {
    addToSavedDom(recipe);
  } else if (user.favoriteRecipes.includes(recipe)) {
    removeFromSavedDom(recipe);
  } 
}

const isDescendant = (parent, child) => {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

const showSavedRecipes = () => {
  console.log(savedRecipesBtn)
  user.favoriteRecipes.length > 0 ? (
    _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].showSelectedRecipes(user.favoriteRecipes, user), 
    showMyRecipesBanner()
  ) : createCards();
}

// CREATE RECIPE INSTRUCTIONS
const openRecipeInfo = event => { 
  fullRecipeInfo.style.display = "inline"; 
  const recipeId = parseInt(event.path.find(e => e.id).id);    
  const recipe = recipeRepo.filterListById(recipeId);  
  expandRecipeCard(recipe);  
}

const generateIngredients = recipe => { 
  return recipe.ingredients.map(ingredient => {
    const name = ingredientsRepo.getRecipeNameById(ingredient.id);
    return `${_domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].capitalize(name)} (${_domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].formatNumber(ingredient.quantity.amount)} ${ingredient.quantity.unit})`;
  }).join(', ');
}

const expandRecipeCard = recipe => {  
  let fullRecipeInfo = document.querySelector(".recipe-instructions");
  fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></section>");
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].createInstructionsTitle(recipe, generateIngredients(recipe));
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].createInstructionsImage(recipe);
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].createInstructionsList(recipe.instructions);
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].createEstimatedPrice(recipe, _data_ingredient_data__WEBPACK_IMPORTED_MODULE_2__["default"]);
  fullRecipeInfo.style.display = "inline"; 
}

// TOGGLE DISPLAYS // 
const showMyRecipesBanner = () => {
  document.querySelector(".welcome-msg").style.display = "none";
  document.querySelector(".my-recipes-banner").style.display = "block";
}

const showWelcomeBanner = () => {
  document.querySelector(".welcome-msg").style.display = "flex";
  document.querySelector(".my-recipes-banner").style.display = "none";
}

// SEARCH RECIPES
const searchRecipes = () => {
  let input = searchInput.value;  

  input = input.trim();
  input = _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].capitalize(input);
  typeof input !== 'string' ? (
    _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].displaySearchError(),
    _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].clearField()
  ) : _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].showSelectedRecipes(findRecipeMatches(input), user);
}

const findRecipeMatches = input => {
  let nameMatches;
  let idMatches;
  let ingredientId;
  let recipeMatches;

  ingredientId = ingredientsRepo.getRecipeIdByName(input);
  nameMatches = recipeRepo.filterListByName(recipeRepo.recipes, input);
  idMatches = recipeRepo.filterListByIngredient(recipeRepo.recipes, ingredientId);
  recipeMatches = [...nameMatches];
  idMatches.forEach(match => {
    const isRecipeFound = recipeMatches.find(recipe => recipe.id === match.id);
    if (!isRecipeFound) {
      recipeMatches = [...recipeMatches, match];
    }
  })
  return recipeMatches;
}

const pressEnterSearch = (event) => { 
  event.preventDefault();
  searchRecipes();
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].clearAllFields();
}

const toggleMenu = () => {  
  var menuDropdown = document.querySelector(".drop-menu");
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
}

const showAllRecipes = () => {
  createCards();
  showWelcomeBanner();
}

// CREATE AND USE PANTRY 

const findPantryInfo = () => {   
  let ingredientRepo = new _ingredient_repo__WEBPACK_IMPORTED_MODULE_12__["default"](_data_ingredient_data__WEBPACK_IMPORTED_MODULE_2__["default"]);
  let pantryInfo = user.pantry.items.reduce((acc, ingredient) => {
    let outputObject = {
      name: ingredientRepo.getRecipeNameById(ingredient.ingredient),
      count: ingredient.amount
    }
    acc.push(outputObject);
    return acc;
  }, []);
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name))); 
}

const findCheckedPantryBoxes = () => {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
}

const findRecipesWithCheckedIngredients = (selected) => {
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v)); 
  let ingredientNames = selected.map(item => {
    return item.id;
  })
  recipes.forEach(recipe => { 
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}

window.addEventListener("load", initiateData);
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", allClicksInMain);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", searchRecipes);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");


class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.pantry = new _pantry__WEBPACK_IMPORTED_MODULE_0__["default"](userData.pantry)
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(list, recipe) {
    list.push(recipe);
  }  

  removeRecipe(list, recipe) {
    const index = list.indexOf(recipe);
    list.splice(index, 1);
  }

  returnFirstName() {
    return this.name.split(' ')[0];
  }

  isFavorited(recipe) {
    return this.favoriteRecipes.find(favRecipe => recipe.id === favRecipe.id);
  }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BUElDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzPzdiMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW5ncmVkaWVudC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3JlY2lwZS1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3VzZXJzLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXBwbGUtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2VhcmNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXNvbmluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZ3JlZGllbnQtcmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUtcmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lIO0FBQzdCO0FBQ087QUFDNUI7QUFDdkUsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsZ0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsU0FBUyw4QkFBOEIsa0JBQWtCLG1DQUFtQyw2QkFBNkIsMkNBQTJDLDBFQUEwRSxrQkFBa0IsY0FBYyxlQUFlLGlDQUFpQyxFQUFFLFFBQVEsdUJBQXVCLGlCQUFpQiwrQ0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEOzs7Ozs7Ozs7Ozs7QUNyUkE7QUFBQTtBQUFBO0FBQThCOztBQUVmO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtDQUFNO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCNzg5NDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcImltYWdlIGltYWdlXFxcIiBcXFwiYXNpZGUgbWFpblxcXCI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87IH1cXG5cXG5oMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmc6IDAuNSUgMC43JSAwJTtcXG4gIHdpZHRoOiA3MCU7XFxuICBncmlkLWFyZWE6IGZyZXNoOyB9XFxuXFxuaDIge1xcbiAgY29sb3I6ICM4NEM4QTQ7XFxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4OyB9XFxuXFxuaDMge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE3JTtcXG4gIG1hcmdpbjogNXB4IDVweCAxMHB4IDBweDtcXG4gIHRyYW5zaXRpb246IDAuOHMgZWFzZTsgfVxcblxcbmg0IHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDsgfVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogbm9uZTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyOyB9XFxuXFxuc3BhbiB7XFxuICBjb2xvcjogI0M0RUI2NztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4uaGVhZGVyLWFwcGxlLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEuMSU7XFxuICB3aWR0aDogLjdlbTsgfVxcblxcbiNzZWFyY2gge1xcbiAgYm9yZGVyOiAwLjJlbSBvdXRzZXQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggIzQ3NWQ3NDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDEuMiUgMC41JSAxLjIlIDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWFyZWE6IHNlYXJjaDsgfVxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZGNjYTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgd2hpdGUpLCBjb2xvci1zdG9wKDEsICNlMWUxZTEpKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtMXB4IDIwcHggMXB4ICM1Yzc4OTQ7XFxuICBjb2xvcjogIzVCNzg5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJSAyJSAwJSAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2VhcmNoLWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IG91dHNldCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XFxuICBwYWRkaW5nOiAxJTsgfVxcblxcbi5uYXYtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzVCNzg5NCBuby1yZXBlYXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gIHdpZHRoOiAxNSU7IH1cXG4gIC5uYXYtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICNDNEVCNjc7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7IH1cXG4gIC5uYXYtYnRuIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgcGFkZGluZzogMnB4IDBweDsgfVxcblxcbi5zYXZlZC1yZWNpcGVzLWJ0biB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjsgfVxcblxcbi5zYXZlZC1pbmdyZWRpZW50cy1idG4ge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjQzRFQjY3O1xcbiAgZ3JpZC1hcmVhOiBidXR0b24yOyB9XFxuXFxuLmluZy1wYW4tYnRuIHtcXG4gIG1hcmdpbjogMSUgMCU7XFxuICBwYWRkaW5nOiAxcHggNnB4IDVweCAwcHg7IH1cXG5cXG4vKiBCQU5ORVIgSU1BR0UqL1xcbi5iYW5uZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxuICBoZWlnaHQ6IDllbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDElOyB9XFxuICAubXktcmVjaXBlcy1iYW5uZXIgaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tdG9wOiAzJTsgfVxcbiAgLndlbGNvbWUtbXNnIGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblxcbi8qIEZJTFRFUiBTSURFQkFSICovXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDBweDsgfVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7IH1cXG5cXG5saSB7XFxuICBtYXJnaW46IDJweDsgfVxcblxcbi8qIFJFQ0lQRSBDQVJEIFNFQ1RJT04gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW46IDFlbTsgfVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEzJTsgfVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZSB0aXRsZVxcXCIgXFxcImZvb2QgZm9vZFxcXCIgXFxcInRhZ3MgYXBwbGVcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMThlbTtcXG4gIG1hcmdpbjogMiU7XFxuICBwYWRkaW5nOiAxLjUlO1xcbiAgd2lkdGg6IDE1ZW07XFxuICBtYXJnaW46IDFlbTsgfVxcbiAgLnJlY2lwZS1jYXJkOmhvdmVyIC5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIHRyYW5zaXRpb246IDAuOHMgZWFzZTsgfVxcbiAgLnJlY2lwZS1jYXJkOmhvdmVyIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAucmVjaXBlLWNhcmQ6aG92ZXIgaDMge1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI0M0RUI2NztcXG4gICAgdHJhbnNpdGlvbjogMC44cyBlYXNlOyB9XFxuXFxuLnRhZ3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtYXJlYTogdGFncztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLmFwcGxlLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtYXJlYTogYXBwbGU7IH1cXG5cXG4uY2FyZC1hcHBsZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM2VtO1xcbiAgd2lkdGg6IDNlbTsgfVxcblxcbi5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY2FyZC1waG90by1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBmb29kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi50ZXh0IHtcXG4gIGJhY2tncm91bmQ6ICMzNTk1Njc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlOyB9XFxuXFxuLyogQlVUVE9OUyAqL1xcbi5maWx0ZXItYnRuLCAuc2hvdy1wYW50cnktcmVjaXBlcy1idG4sIC5zaG93LWFsbC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1OTU2NztcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMSUgMiUgMSUgMiU7IH1cXG4gIC5maWx0ZXItYnRuOmhvdmVyLCAuc2hvdy1wYW50cnktcmVjaXBlcy1idG46aG92ZXIsIC5zaG93LWFsbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRDOEE0OyB9XFxuXFxuLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDUlOyB9XFxuXFxuLnNob3ctYWxsLWJ0biB7XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgbWFyZ2luLXRvcDogMSU7IH1cXG5cXG4vKiBQQU5UUlkgTElTVCAqL1xcbi5kcm9wLW1lbnUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA2NSU7XFxuICBtYXJnaW4tbGVmdDogODElO1xcbiAgbWFyZ2luLXRvcDogNyU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTglO1xcbiAgei1pbmRleDogMzsgfVxcbiAgLmRyb3AtbWVudSBoMiB7XFxuICAgIGNvbG9yOiAjMzU5NTY3O1xcbiAgICBtYXJnaW46IDAlOyB9XFxuXFxuLnBhbnRyeS1saXN0IHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLyogUkVDSVBFIElOU1RSVUNUSU9OUyAqL1xcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDElO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMTVweCBibGFjaztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDE1JTtcXG4gIHRvcDogMTUlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIGg0IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiAjMzU5NTY3OyB9XFxuICAucmVjaXBlLWluc3RydWN0aW9ucyBwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlOyB9XFxuICAucmVjaXBlLWluc3RydWN0aW9ucyBvbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7IH1cXG5cXG4jZXhpdC1yZWNpcGUtYnRuIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICMzNTk1Njc7XFxuICBib3JkZXItcmFkaXVzOiAyJTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IC00JSAtMyUgMiUgLTElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlOyB9XFxuICAjZXhpdC1yZWNpcGUtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI0M0RUI2NztcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlOyB9XFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7IH1cXG5cXG4jb3ZlcmxheSB7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCNzg5NDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcImltYWdlIGltYWdlXFxcIiBcXFwiYXNpZGUgaW1hZ2VcXFwiIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvOyB9XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJmcmVzaCBidXR0b24gYnV0dG9uMlxcXCIgXFxcInNlYXJjaCBzZWFyY2ggc2VhcmNoXFxcIjtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHBhZGRpbmc6IDElOyB9XFxuICBhc2lkZSB7XFxuICAgIHdpZHRoOiA3MCU7IH1cXG4gIC5kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgcGFkZGluZzogMSU7IH1cXG4gIC5yZWNpcGUtY2FyZCB7XFxuICAgIHdpZHRoOiA1MCU7IH1cXG4gIC5pbmctcGFuLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDUwJTsgfVxcbiAgLmRyb3AtbWVudSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7IH1cXG4gIGgxIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7IH1cXG4gICNzZWFyY2gge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgfVxcbiAgLmJhbm5lci1pbWFnZSB7XFxuICAgIGhlaWdodDogN2VtOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJmcmVzaCBmcmVzaCBmcmVzaFxcXCIgIFxcXCJub25lIGJ1dHRvbiBidXR0b24yXFxcIiBcXFwic2VhcmNoIHNlYXJjaCBzZWFyY2hcXFwiO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuICBoMSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMi44ZW07IH1cXG4gIGFzaWRlIHtcXG4gICAgd2lkdGg6IDQwJTsgfVxcbiAgLm15LXBhbnRyeS1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDk2JTsgfVxcbiAgLnNhdmVkLXJlY2lwZXMtYnRuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1NyU7IH1cXG4gIC5zYXZlZC1pbmdyZWRpZW50cy1idG4ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5hdi1idG4ge1xcbiAgICBhbGlnbi1pdGVtczogbm9uZTsgfVxcbiAgI3JlY2lwZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UseUJDSnFCO0VBY3JCLGFBQWE7RUFDYiw4QkRWNEI7RUNXNUIsd0JEWGtDO0VBQ2xDLG9DQ0hRO0VESVIsK0RBR2M7RUFDZCxhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDViw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsWUNsQnFCO0VEbUJyQix3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxjQzlCbUI7RUQrQm5CLGVBQWU7RUFDZixXQUFXO0VBQ1gsd0JBQXdCO0VDM0J4QixxQkQ0QjRCLEVBQUE7O0FBRzlCO0VBQ0UsY0N0Q21CO0VEdUNuQix5QkN0Q2tCO0VEdUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsa0JBQWtCLEVBQUE7O0FBSXBCLFdBQUE7QUFDQTtFQ2pDRSxhQUFhO0VBQ2IsbUJEaUN3QjtFQ2hDeEIscUJEZ0M4QjtFQUM5QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQ3REa0I7RUR1RGxCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUMxQ0UsNEJBckJrQjtFQXNCbEIsa0NEMENtRTtFQ3pDbkUsbUNEeUM0RjtFQ2pENUYsYUFBYTtFQUNiLG1CRGlEd0I7RUNoRHhCLHVCRGdEZ0M7RUFDaEMsb0NDcEVRO0VEcUVSLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UseUJBQXlC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SUFDaEIsV0FBVyxFQUFBO0VBdFBiO0lBMFBFLFVBQVUsRUFBQTtFQXpVWjtJQTZVRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixVQUFTLEVBQUE7RUE3SVg7SUFpSkUsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBbGRqQjtJQXNkRSxvQkFBb0I7SUFDcEIsVUFBVSxFQUFBO0VBcGFaO0lBd2FFLFVBQVU7SUFDVixvQkFBb0IsRUFBQTtFQTNWdEI7SUErVkUsV0FBVyxFQUFBLEVBQ1o7O0FBSUQ7RUFqY0E7SUN2Q0UsYUFBYTtJQUNiLGtDRHlla0M7SUN4ZWxDLHdCRHdld0M7SUFDdEMsc0ZBR3NCO0lBQ3RCLG9CQUFvQjtJQUNwQixrQkFBa0IsRUFBQTtFQTdldEI7SUFpZkksVUFBVTtJQUNWLGdCQUFnQixFQUFBO0VBalZwQjtJQXFWSSxVQUFVLEVBQUE7RUFHWjtJQUNFLGlCQUFpQixFQUFBO0VBeFlyQjtJQTRZSSxpQkFBaUIsRUFBQTtFQXhZckI7SUE0WUksaUJBQWlCLEVBQUE7RUE1YXJCO0lBZ2JJLGlCQUFpQixFQUFBO0VBaElyQjtJQW9JSSxnQkFBZ0IsRUFBQSxFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJ2YXJpYWJsZXNcXFwiO1xcbkBpbXBvcnQgXFxcIm1lZGlhLXF1ZXJpZXNcXFwiO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgxZnIgNWZyLCBub25lKTtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiaW1hZ2UgaW1hZ2VcXFwiXFxuICAgIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBmb250LWZhbWlseTogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmc6IDAuNSUgMC43JSAwJTtcXG4gIHdpZHRoOiA3MCU7XFxuICBncmlkLWFyZWE6IGZyZXNoO1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogIzg0QzhBNDtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE3JTtcXG4gIG1hcmdpbjogNXB4IDVweCAxMHB4IDBweDtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjhzIGVhc2UpXFxufVxcblxcbmg0IHtcXG4gIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KHJvdywgbm9uZSk7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuc3BhbiB7XFxuICBjb2xvcjogJGJhY2tncm91bmQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGVyLWFwcGxlLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEuMSU7XFxuICB3aWR0aDogLjdlbTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICBAaW5jbHVkZSBib3JkZXJTdHlsaW5nKC4yZW0gb3V0c2V0ICRiYWNrZ3JvdW5kLCAxNXB4IDE1cHggMTVweCAxNXB4LCAwcHggMHB4IDdweCAwcHggIzQ3NWQ3NCk7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShyb3csIGNlbnRlcik7XFxuICBmb250LWZhbWlseTogJGZvbnQ7XFxuICBtYXJnaW46IDEuMiUgMC41JSAxLjIlIDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWFyZWE6IHNlYXJjaDtcXG59XFxuXFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2IoMjU1LCAyNTUsIDI1NSkpLCBjb2xvci1zdG9wKDEsIHJnYigyMjUsMjI1LDIyNSkpKTtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcobm9uZSwgMTBweCAwcHggMHB4IDEwcHgsIGluc2V0IC0zcHggLTFweCAyMHB4IDFweCAjNWM3ODk0KTtcXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJSAyJSAwJSAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguOHMgZWFzZSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaC1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IG91dHNldCAkYmFja2dyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiRwcmltYXJ5LWNvbG9yIG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguNHMgZWFzZSk7XFxuICB3aWR0aDogMTUlO1xcblxcbiAgJjpob3ZlciB7XFxuICBjb2xvcjogJGJhY2tncm91bmQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC40cyBlYXNlKTtcXG59XFxuXFxuICBpbWcge1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDJweCAwcHg7XFxufVxcbn1cXG5cXG4uc2F2ZWQtcmVjaXBlcy1idG4ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxufVxcblxcbi5zYXZlZC1pbmdyZWRpZW50cy1idG4ge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkYmFja2dyb3VuZDtcXG4gIGdyaWQtYXJlYTogYnV0dG9uMjtcXG59XFxuXFxuLmluZy1wYW4tYnRuIHtcXG4gIG1hcmdpbjogMSUgMCU7XFxuICBwYWRkaW5nOiAxcHggNnB4IDVweCAwcHg7XFxufVxcblxcbi8qIEJBTk5FUiBJTUFHRSovXFxuLmJhbm5lci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNSksIHJnYmEoMCwwLDAsLjUpKSx1cmwoXFxcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXFxcIik7XFxuICBncmlkLWFyZWE6IGltYWdlO1xcbiAgaGVpZ2h0OiA5ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDElO1xcblxcbiAgICBoMSB7XFxuICAgICAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tdG9wOiAzJTtcXG5cXG4gICAgaDEge1xcbiAgICAgIGNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbi8qIEZJTFRFUiBTSURFQkFSICovXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KHJvdywgY2VudGVyKTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG5saSB7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuLyogUkVDSVBFIENBUkQgU0VDVElPTiAqL1xcbm1haW4ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBjZW50ZXIpO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAxZW07XFxuICBcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTMlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMmZyIDFmciwgMWZyIDFmciAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICBcXFwiZm9vZCBmb29kXFxcIlxcbiAgXFxcInRhZ3MgYXBwbGVcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcoMnB4IHNvbGlkICRiYWNrZ3JvdW5kLCA3cHgsIG5vbmUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxOGVtO1xcbiAgbWFyZ2luOiAyJTtcXG4gIHBhZGRpbmc6IDEuNSU7XFxuICB3aWR0aDogMTVlbTtcXG4gIG1hcmdpbjogMWVtO1xcblxcbiAgJjpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC44cyBlYXNlKTtcXG4gIH1cXG5cXG4gICY6aG92ZXIgLnRleHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjVzIGVhc2UpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiAgJjpob3ZlciBoMyB7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggJGJhY2tncm91bmQ7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC44cyBlYXNlKTtcXG59XFxufVxcblxcbi50YWdzIHtcXG4gIEBpbmNsdWRlIGdyaWREaXNwbGF5KDFmciAxZnIsIDFmciAxZnIpO1xcbiAgZ3JpZC1hcmVhOiB0YWdzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5hcHBsZS1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLWFyZWE6IGFwcGxlO1xcbn1cXG5cXG4uY2FyZC1hcHBsZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM2VtO1xcbiAgd2lkdGg6IDNlbTtcXG59XFxuXFxuLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC44cyBlYXNlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1waG90by1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBmb29kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogJGJvcmRlci1mb250O1xcbiAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAwJTtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjVzIGVhc2UpO1xcbn1cXG5cXG5cXG4vKiBCVVRUT05TICovXFxuLmZpbHRlci1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1mb250O1xcbiAgQGluY2x1ZGUgYm9yZGVyU3R5bGluZygwLCAzJSwgbm9uZSk7XFxuICBjb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMSUgMiUgMSUgMiU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRDOEE0O1xcbiAgICB9XFxufVxcblxcbiAgLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuIHtcXG4gICAgQGV4dGVuZCAuZmlsdGVyLWJ0bjtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICB9XFxuXFxuICAuc2hvdy1hbGwtYnRuIHtcXG4gICAgQGV4dGVuZCAuZmlsdGVyLWJ0bjtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxuICB9XFxuXFxuLyogUEFOVFJZIExJU1QgKi9cXG4uZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNjUlO1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDclO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE4JTtcXG4gIHotaW5kZXg6IDM7XFxuXFxuICBoMiB7XFxuICAgIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICAgIG1hcmdpbjogMCU7XFxuICB9XFxufVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogUkVDSVBFIElOU1RSVUNUSU9OUyAqL1xcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBAaW5jbHVkZSBib3JkZXJTdHlsaW5nKDNweCBzb2xpZCAkYmFja2dyb3VuZCwgMSUsIDFweCAxcHggMTE1cHggYmxhY2spO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDtcXG5cXG4gIGg0IHtcXG4gICAgYmFja2dyb3VuZDogJHRleHQtYmFja2dyb3VuZDtcXG4gICAgY29sb3I6ICRib3JkZXItZm9udDtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICB9XFxuXFxuICBvbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICB9XFxufVxcblxcbiNleGl0LXJlY2lwZS1idG4ge1xcbiAgYmFja2dyb3VuZDogJHRleHQtYmFja2dyb3VuZDtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcoMnB4IGRvdWJsZSAkYm9yZGVyLWZvbnQsIDIlLCBub25lKTtcXG4gIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAtNCUgLTMlIDIlIC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjNzIGVhc2UpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4zcyBlYXNlKTtcXG4gIH1cXG59XFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjaztcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgZmlsdGVyOmFscGhhKG9wYWNpdHk9NTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjokcHJpbWFyeS1jb2xvcjtcXG4gIGhlaWdodDoxMDAlO1xcbiAgbGVmdDowO1xcbiAgb3BhY2l0eTowLjU7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowO1xcbiAgd2lkdGg6MTAwJTtcXG4gIHotaW5kZXg6MTAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuYm9keSB7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgxZnIgMmZyLCBub25lKTtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiaW1hZ2UgaW1hZ2VcXFwiXFxuICAgIFxcXCJhc2lkZSBpbWFnZVxcXCJcXG4gICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoNGZyIDFmciAxZnIsbm9uZSk7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJmcmVzaCBidXR0b24gYnV0dG9uMlxcXCJcXG4gIFxcXCJzZWFyY2ggc2VhcmNoIHNlYXJjaFxcXCI7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG5hc2lkZSB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5pbmctcGFuLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHdpZHRoOjUwJTtcXG59XFxuXFxuLmRyb3AtbWVudSB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luLXRvcDogMjUlO1xcbn1cXG5cXG5oMSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFubmVyLWltYWdlIHtcXG4gIGhlaWdodDogN2VtO1xcbn1cXG5cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMWZyIDFmciAxZnIsIG5vbmUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImZyZXNoIGZyZXNoIGZyZXNoXFxcIiBcXG4gICAgXFxcIm5vbmUgYnV0dG9uIGJ1dHRvbjJcXFwiXFxuICAgIFxcXCJzZWFyY2ggc2VhcmNoIHNlYXJjaFxcXCI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMi44ZW07XFxuICB9XFxuXFxuICBhc2lkZSB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxuXFxuICAubXktcGFudHJ5LWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogOTYlO1xcbiAgfVxcblxcbiAgLnNhdmVkLXJlY2lwZXMtYnRuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1NyU7XFxuICB9XFxuXFxuICAuc2F2ZWQtaW5ncmVkaWVudHMtYnRuIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2LWJ0biB7XFxuICAgIGFsaWduLWl0ZW1zOiBub25lO1xcbiAgfVxcblxcbiAgI3JlY2lwZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuIFxcbn1cIixcIiRwcmltYXJ5LWNvbG9yOiAjNUI3ODk0O1xcbiR0ZXh0LWJhY2tncm91bmQ6IHdoaXRlO1xcbiRmb250OiBcXFwiUXVpY2tzYW5kXFxcIixcXG5zYW5zLXNlcmlmO1xcbiRib3JkZXItZm9udDogIzM1OTU2NztcXG4kYmFja2dyb3VuZDogI0M0RUI2NztcXG5cXG5cXG5cXG5AbWl4aW4gdHJhbnNpdGlvbigkdmFsdWUpIHtcXG4gIHRyYW5zaXRpb246ICR2YWx1ZTtcXG59XFxuXFxuQG1peGluIGdyaWREaXNwbGF5KCRjb2x1bW5zLCAkcm93cykge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbHVtbnM7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6ICRyb3dzO1xcbn1cXG5cXG5AbWl4aW4gZmxleERpc3BsYXkoJGRpcmVjdGlvbiwgJGp1c3RpZnkpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxufVxcblxcbkBtaXhpbiBib3JkZXJTdHlsaW5nKCRib3JkZXIsICRyYWRpdXMsICRzaGFkb3cpIHtcXG4gIGJvcmRlcjogJGJvcmRlcjtcXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XFxuICBib3gtc2hhZG93OiAkc2hhZG93O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgZ2V0RGF0YSA9IGRhdGFzZXQgPT4ge1xuICBsZXQgZGF0YSA9IFtdO1xuICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS8ke2RhdGFzZXR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHJlc3VsdC5mb3JFYWNoKGVhY2hSZXN1bHQgPT4ge1xuICAgICAgICBkYXRhLnB1c2goZWFjaFJlc3VsdClcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG4gIHJldHVybiBkYXRhO1xufSBcblxuLy8gZXhwb3J0IGNvbnN0IHNlbmREYXRhID0gZGF0YVRvU2VuZCA9PiB7XG4vLyAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbi8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKVxuLy8gICB9O1xuXG4vLyAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2Vyc1wiLCByZXF1ZXN0T3B0aW9ucylcbi8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuLy8gICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbi8vICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG5leHBvcnQgZGVmYXVsdCBnZXREYXRhOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vQVBJQ2FsbHMnO1xuXG5jb25zdCBhcGlDYWxsID0gJ2luZ3JlZGllbnRzJztcblxuXG5sZXQgaW5ncmVkaWVudHNEYXRhO1xuXG5pbmdyZWRpZW50c0RhdGEgPSBnZXREYXRhKGFwaUNhbGwpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmdyZWRpZW50c0RhdGE7IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vQVBJQ2FsbHMnO1xuXG5jb25zdCBhcGlDYWxsID0gJ3JlY2lwZXMnO1xuXG5sZXQgcmVjaXBlRGF0YTtcblxucmVjaXBlRGF0YSA9IGdldERhdGEoYXBpQ2FsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlY2lwZURhdGE7IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vQVBJQ2FsbHMnO1xuXG5jb25zdCBhcGlDYWxsID0gJ3VzZXJzJztcbmxldCB1c2VycztcblxudXNlcnMgPSBnZXREYXRhKGFwaUNhbGwpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyczsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmxldCBkb21VcGRhdGVzID0ge1xuXG4gIHdlbGNvbWVVc2VyKGN1cnJlbnRVc2VyKSB7XG4gICAgbGV0IGZpcnN0TmFtZSA9IGN1cnJlbnRVc2VyLm5hbWUuc3BsaXQoXCIgXCIpWzBdO1xuICAgIGxldCB3ZWxjb21lTXNnID0gYFxuICAgIDxhcnRpY2xlIGNsYXNzPVwid2VsY29tZS1tc2dcIj5cbiAgICAgIDxoMT5XZWxjb21lICR7Zmlyc3ROYW1lfSE8L2gxPlxuICAgIDwvYXJ0aWNsZT5gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyLWltYWdlXCIpLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIixcbiAgICAgIHdlbGNvbWVNc2cpO1xuICB9LFxuICBcbiAgLy8gQ3JlYXRlIENhcmRzIGFuZCBUYWcgTGlzdCBvbmxvYWQgLy8gXG4gIGNyZWF0ZUNhcmRUYWdzKHRhZ3MpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBsZXQgbmV3VGFnID0gYDxoND4ke3RhZ308L2g0PmA7XG4gICAgICByZXN1bHQgKz0gbmV3VGFnO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgY3JlYXRlQ2FyZChyZWNpcGUsIGFwcGxlRGlzcGxheWVkKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBsZXQgY2FyZEh0bWwgPSBgXG4gIDxhcnRpY2xlIGNsYXNzPVwicmVjaXBlLWNhcmRcIiBpZD0ke3JlY2lwZS5pZH0+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIlxuICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIiBtYXhsZW5ndGg9XCI0MFwiPiR7dGhpcy5zaG9ydGVuUmVjaXBlTmFtZShyZWNpcGUpfTwvaDM+XG4gICAgPC9zZWN0aW9uPiAgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjYXJkLXBob3RvLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBzcmM9JHtyZWNpcGUuaW1hZ2V9IGNsYXNzPVwiY2FyZC1waG90by1wcmV2aWV3XCIgYWx0PVwiJHtyZWNpcGUubmFtZX0gcmVjaXBlXCIgdGl0bGU9XCIke3JlY2lwZS5uYW1lfSByZWNpcGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIkNsaWNrIGZvciBpbnN0cnVjdGlvbnMgYmFubmVyXCI+Q2xpY2sgZm9yIEluc3RydWN0aW9uczwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGFyaWEtbGFiZWw9XCJUeXBlIG9mIHJlY2lwZVwiIGNsYXNzPVwidGFnc1wiPlxuICAgICAgJHt0aGlzLmNyZWF0ZUNhcmRUYWdzKHJlY2lwZS50YWdzKX1cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJhcHBsZS1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgYXJpYS1sYWJlbD1cIkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZVwiIHNyYz1cIi4vaW1hZ2VzLyR7YXBwbGVEaXNwbGF5ZWR9LnBuZ1wiIGFsdD1cInVuZmlsbGVkIGFwcGxlIGljb25cIiBjbGFzcz1cImNhcmQtYXBwbGUtaWNvblwiPlxuICAgIDwvc2VjdGlvbj4gIFxuICA8L2FydGljbGU+YFxuICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPSBjYXJkSHRtbDtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9LFxuXG4gIGNsZWFyTWFpbkNhcmRTZWN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWluc3RydWN0aW9uc1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJteS1yZWNpcGVzLWJhbm5lclwiPlxuICAgICAgPGgxPk15IFJlY2lwZXM8L2gxPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNob3ctYWxsLWJ0blwiPlNob3cgQWxsIFJlY2lwZXM8L2J1dHRvbj5cbiAgICA8L2Rpdj5gXG4gICAgXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmlubmVySFRNTCArPSBtb2RhbDtcbiAgICByZXR1cm4gbWFpbjtcbiAgfSxcbiAgXG4gIHNob3J0ZW5SZWNpcGVOYW1lKHJlY2lwZSkge1xuICAgIGxldCBzaG9ydFJlY2lwZU5hbWUgPSByZWNpcGUubmFtZTtcbiAgICBpZiAoc2hvcnRSZWNpcGVOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICBzaG9ydFJlY2lwZU5hbWUgPSBzaG9ydFJlY2lwZU5hbWUuc3Vic3RyaW5nKDAsIDQwKSArIFwiLi4uXCI7XG4gICAgfVxuICAgIHJldHVybiBzaG9ydFJlY2lwZU5hbWU7XG4gIH0sXG5cbiAgY3JlYXRlTGlzdFRhZ3ModGFncykge1xuICAgIGxldCB0YWdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWctbGlzdFwiKTtcbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGxldCB0YWdIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2VkLXRhZ1wiIGlkPVwiJHt0YWd9XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiJHt0YWd9XCI+JHt0aGlzLmNhcGl0YWxpemUodGFnKX08L2xhYmVsPjwvbGk+YDtcbiAgICAgIHRhZ0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRhZ0h0bWwpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNhcGl0YWxpemUod29yZHMpIHtcbiAgICByZXR1cm4gd29yZHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgfSxcblxuICBzaG93U2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcywgdXNlcikge1xuICAgIHRoaXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKSlcbiAgICBmb3VuZFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgdXNlci5pc0Zhdm9yaXRlZChyZWNpcGUpID8gdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgXCJhcHBsZS1sb2dvXCIpIDogdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgXCJhcHBsZS1sb2dvLW91dGxpbmVcIik7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0Q2FyZElkKCkge1xuICAgIHJldHVybiBwYXJzZUludChldmVudC50YXJnZXQuY2xvc2VzdChcIi5yZWNpcGUtY2FyZFwiKS5pZClcbiAgfSxcblxuICBmaWxsQXBwbGUoKSB7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9IFwiLi9pbWFnZXMvYXBwbGUtbG9nby5wbmdcIjtcbiAgfSxcblxuICByZW1vdmVBcHBsZSgpIHtcbiAgICBldmVudC50YXJnZXQuc3JjID0gXCIuL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCI7XG4gIH0sXG5cbiAgLy9SZWNpcGUgSW5zdHJ1Y3Rpb25zLy9cbiAgY3JlYXRlSW5zdHJ1Y3Rpb25zVGl0bGUocmVjaXBlLCBpbmdyZWRpZW50cykge1xuICAgIGxldCBmdWxsUmVjaXBlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlLWluc3RydWN0aW9uc1wiKTtcblxuICAgIGxldCByZWNpcGVUaXRsZSA9IGBcbiAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJFeGl0IHJlY2lwZVwiIGlkPVwiZXhpdC1yZWNpcGUtYnRuXCI+WDwvYnV0dG9uPlxuICAgIDxoMyBpZD1cInJlY2lwZS10aXRsZVwiPiR7cmVjaXBlLm5hbWV9PC9oMz5cbiAgICA8aDQ+SW5ncmVkaWVudHM8L2g0PlxuICAgIDxwPiR7aW5ncmVkaWVudHN9PC9wPmBcbiAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgcmVjaXBlVGl0bGUpO1xuICB9LFxuXG4gIGNyZWF0ZUluc3RydWN0aW9uc0ltYWdlKHJlY2lwZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVjaXBlLXRpdGxlXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyZWNpcGUuaW1hZ2V9KWA7XG4gIH0sXG5cbiAgY3JlYXRlSW5zdHJ1Y3Rpb25zTGlzdChpbnN0cnVjdGlvbnMpIHtcbiAgICBsZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgbGV0IGluc3RydWN0aW9uc0xpc3QgPSBcIlwiO1xuICAgIGluc3RydWN0aW9ucy5mb3JFYWNoKHN0ZXAgPT4gaW5zdHJ1Y3Rpb25zTGlzdCArPSBgPGxpPiR7c3RlcC5pbnN0cnVjdGlvbn08L2xpPmApO1xuICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxoND5JbnN0cnVjdGlvbnM8L2g0PlwiKTtcbiAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYDxvbD4ke2luc3RydWN0aW9uc0xpc3R9PC9vbD5gKTtcbiAgfSxcblxuICBjcmVhdGVFc3RpbWF0ZWRQcmljZShyZWNpcGUsIGluZ3JlZGllbnRzKSB7XG4gICAgbGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxoND5Fc3RpbWF0ZWQgQ29zdDwvaDQ+XCIpXG4gICAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8aDQ+JHtyZWNpcGUuY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KGluZ3JlZGllbnRzKX08L2g0PmApO1xuXG4gIH0sXG5cbiAgZXhpdFJlY2lwZSgpIHtcbiAgICBsZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgd2hpbGUgKGZ1bGxSZWNpcGVJbmZvLmZpcnN0Q2hpbGQgJiZcbiAgICBmdWxsUmVjaXBlSW5mby5yZW1vdmVDaGlsZChmdWxsUmVjaXBlSW5mby5maXJzdENoaWxkKSk7XG4gICAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5yZW1vdmUoKTtcbiAgfSxcblxuICAvL1NlYXJjaCBiYXIgaW5wdXQgZG9tIHVwZGF0ZXNcbiAgZGlzcGxheVNlYXJjaEVycm9yKCkge1xuICAgIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSAnV0FUIERBIEZVSyBZT1UgRE9JTj8hPyEnO1xuICAgIGNvbnN0IHJlc3VsdCA9IHNlYXJjaElucHV0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgY2xlYXJBbGxGaWVsZHMoKSB7XG4gICAgdGhpcy5jbGVhckZpZWxkKCk7XG4gICAgdGhpcy5jbGVhckNoZWNrZWRCb3hlcygpO1xuICB9LFxuXG4gIGNsZWFyRmllbGQoKSB7XG4gICAgbGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtaW5wdXRcIik7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgfSxcblxuICBjbGVhckNoZWNrZWRCb3hlcygpIHtcbiAgICBsZXQgY2hlY2tlZEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2VkLXRhZ1wiKTtcbiAgICBsZXQgYXJyYXlDaGVja2VkQm94ZXMgPSBBcnJheS5mcm9tKGNoZWNrZWRCb3hlcylcbiAgICBhcnJheUNoZWNrZWRCb3hlcy5mb3JFYWNoKGJveCA9PiB7XG4gICAgICBib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pXG4gIH0sXG5cbiAgY3JlYXRlQWxsUmVjaXBlcyhyZWNpcGVzKSB7XG4gICAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBsZXQgZG9tUmVjaXBlID0gXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgICBkb21SZWNpcGUuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgfSk7XG4gIH0sXG5cbiAgLy9QYW50cnkvL1xuICBkaXNwbGF5UGFudHJ5SW5mbyhwYW50cnkpIHtcbiAgICBwYW50cnkuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGxldCBpbmdyZWRpZW50SHRtbCA9IGA8bGk+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwicGFudHJ5LWNoZWNrYm94XCIgaWQ9XCIke2luZ3JlZGllbnQubmFtZX1cIj5cbiAgICA8bGFiZWwgZm9yPVwiJHtpbmdyZWRpZW50Lm5hbWV9XCI+JHtpbmdyZWRpZW50Lm5hbWV9LCAke2luZ3JlZGllbnQuY291bnR9PC9sYWJlbD48L2xpPmA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhbnRyeS1saXN0XCIpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBpbmdyZWRpZW50SHRtbCk7XG4gICAgfSk7XG4gIH0sIFxuXG4gIGZvcm1hdE51bWJlcihudW1iZXIpIHtcbiAgICBjb25zdCBzdHJpbmdlZE51bSA9IG51bWJlci50b1N0cmluZygpO1xuICAgIGxldCBpbmRleDtcbiAgICBsZXQgYWZ0ZXJQZXJpb2Q7XG5cbiAgICBpZiAoc3RyaW5nZWROdW0uaW5jbHVkZXMoJy4nKSkge1xuICAgICAgaW5kZXggPSBzdHJpbmdlZE51bS5pbmRleE9mKCcuJyk7XG4gICAgICBhZnRlclBlcmlvZCA9IHN0cmluZ2VkTnVtLnNsaWNlKGluZGV4ICsgMSk7XG4gICAgfVxuICAgIGlmIChhZnRlclBlcmlvZCAmJiBhZnRlclBlcmlvZC5sZW5ndGggPiAyKSB7XG4gICAgICBhZnRlclBlcmlvZCA9IGFmdGVyUGVyaW9kLnRvRml4ZWQoMik7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZ2VkTnVtLnNsaWNlKDAsIGluZGV4ICsgMSkuY29uY2F0KGFmdGVyUGVyaW9kKSkgfHwgbnVtYmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FwcGxlLWxvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvY29va2Jvb2sucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NlYXJjaC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFzb25pbmcucG5nXCI7IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5ncmVkaWVudHNSZXBvIHtcbiAgY29uc3RydWN0b3IoaW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG4gIH1cblxuICBnZXRSZWNpcGVJZEJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZm91bmRJbmdyZWRpZW50ID0gdGhpcy5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50LmlkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmb3VuZEluZ3JlZGllbnQgPyBmb3VuZEluZ3JlZGllbnQuaWQgOiAwO1xuICB9XG5cbiAgZ2V0UmVjaXBlTmFtZUJ5SWQoaWQpIHtcbiAgICBjb25zdCBmb3VuZEluZ3JlZGllbnQgPSB0aGlzLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICBpZiAoaW5ncmVkaWVudC5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZm91bmRJbmdyZWRpZW50ID8gZm91bmRJbmdyZWRpZW50Lm5hbWUgOiBcIlwiO1xuICB9XG59XG5cblxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3RvcihwYW50cnlEYXRhKSB7XG4gICAgdGhpcy5pdGVtcyA9IHBhbnRyeURhdGE7XG4gICAgdGhpcy5mb3JSZWNpcGUgPSBbXTtcbiAgICB0aGlzLmdyb2NlcnlMaXN0ID0gW107XG4gIH1cblxuICB0YWtlU3RvY2socmVjaXBlKSB7XG4gICAgdGhpcy5jaGVja1BhbnRyeShyZWNpcGUpO1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkICYmIGl0ZW0uYW1vdW50ID4gaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQpIHtcbiAgICAgICAgICB0aGlzLmZvclJlY2lwZS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZCAmJiBpdGVtLmFtb3VudCA8IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHtcbiAgICAgICAgICAgIGluZ3JlZGllbnQ6IGl0ZW0uaW5ncmVkaWVudCxcbiAgICAgICAgICAgIGFtb3VudDogaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQgLSBpdGVtLmFtb3VudFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjaGVja1BhbnRyeShyZWNpcGUpIHtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGxldCBuZXdJdGVtcyA9IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZCk7XG5cbiAgICAgIGlmICghbmV3SXRlbXMpIHtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHtcbiAgICAgICAgICBpbmdyZWRpZW50OiBpbmdyZWRpZW50LmlkLFxuICAgICAgICAgIGFtb3VudDogaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY2FuTWFrZShyZWNpcGUpIHtcbiAgICB0aGlzLnRha2VTdG9jayhyZWNpcGUpO1xuICAgIGlmICh0aGlzLmdyb2NlcnlMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmdyb2NlcnlMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZ3JlZGllbnQuaWQgPT09IGl0ZW0uaW5ncmVkaWVudCkge1xuICAgICAgICAgIGxldCBuZXdBbW91bnQgPSBpdGVtLmFtb3VudCAtIGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50O1xuICAgICAgICAgIGlmIChuZXdBbW91bnQgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uYW1vdW50ID0gbmV3QW1vdW50O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVQb3N0Qm9keSh1c2VyLCBpbmdyZWRpZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwidXNlcklEXCI6IHVzZXIuaWQsXG4gICAgICBcImluZ3JlZGllbnRJRFwiOiBpbmdyZWRpZW50LmlkLFxuICAgICAgXCJpbmdyZWRpZW50TW9kaWZpY2F0aW9uXCI6IC1pbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudFxuICAgIH1cbiAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9yZWNpcGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNpcGVSZXBvIHtcbiAgY29uc3RydWN0b3IocmVjaXBlcykge1xuICAgIHRoaXMucmVjaXBlcyA9IHJlY2lwZXMubWFwKHJlY2lwZSA9PiBuZXcgUmVjaXBlKHJlY2lwZSkpO1xuICB9XG5cbiAgcmV0dXJuQWxsVGFncygpIHtcbiAgICBsZXQgdGFncyA9IFtdO1xuICAgIHRoaXMucmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICByZWNpcGUudGFncy5maWx0ZXIodGFnID0+IHtcbiAgICAgICAgaWYgKCF0YWdzLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgICAgICB0YWdzLnB1c2godGFnKTtcbiAgICAgICAgfSBcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0YWdzLnNvcnQoKTtcbiAgfVxuXG4gIHNlYXJjaFJlY2lwZXNCeUluZ3JlZGllbnQoaW5ncmVkaWVudElkKSB7XG4gICAgY29uc3QgZmlsdGVyZWRSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChpbmdyZWRpZW50SWQgPT09IGluZ3JlZGllbnQuaWQgJiYgIWZpbHRlcmVkUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUubmFtZSkpIHtcbiAgICAgICAgICBmaWx0ZXJlZFJlY2lwZXMucHVzaChyZWNpcGUubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFJlY2lwZXM7XG4gIH1cblxuICBmaWx0ZXJMaXN0QnlUYWcobGlzdCwgdGFnKSB7XG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpKTtcbiAgfVxuXG4gIGZpbHRlckxpc3RCeUluZ3JlZGllbnQobGlzdCwgaW5ncmVkaWVudElkKSB7ICAgICAgICBcbiAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKGZpbHRlcmVkLCByZWNpcGUpID0+IHtcbiAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoaW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudElkKSB7XG4gICAgICAgICAgZmlsdGVyZWQucHVzaChyZWNpcGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZpbHRlcmVkO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGZpbHRlckxpc3RCeU5hbWUobGlzdCwgbmFtZSkge1xuICAgIHJldHVybiBsaXN0LmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLm5hbWUuaW5jbHVkZXMobmFtZSkpO1xuICB9XG5cblxuICBmaWx0ZXJMaXN0QnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLnJlY2lwZXMuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBpZCk7XG4gIH1cbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlKSB7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmltYWdlID0gcmVjaXBlLmltYWdlO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICB9XG5cbiAgY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KGluZ3JlZGllbnREYXRhKSB7XG4gICAgY29uc3QgY29zdEluQ2VudHMgPSB0aGlzLmluZ3JlZGllbnRzLnJlZHVjZSgodG90YWxDb3N0LCByZWNpcGVJbmdyZWRpZW50KSA9PiB7XG4gICAgICBpbmdyZWRpZW50RGF0YS5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoaW5ncmVkaWVudC5pZCA9PT0gcmVjaXBlSW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIGxldCBpbmdyZWRpZW50VG90YWwgPSBpbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzICogcmVjaXBlSW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQ7XG4gICAgICAgICAgdG90YWxDb3N0ICs9IGluZ3JlZGllbnRUb3RhbDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0b3RhbENvc3Q7XG4gICAgfSwgMCk7XG4gICAgbGV0IGNvc3QgPSBjb3N0SW5DZW50cyAqIC4wMTtcbiAgICByZXR1cm4gY29zdC50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJVU0RcIn0pO1xuICB9XG5cbiAgcmV0dXJuSW5zdHJ1Y3Rpb25zKHJlY2lwZSkge1xuICAgIHJldHVybiByZWNpcGUuaW5zdHJ1Y3Rpb25zLm1hcChzdGVwID0+IHN0ZXAuaW5zdHJ1Y3Rpb24pOyAgICBcbiAgfVxufVxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgdXNlcnMgZnJvbSAnLi9kYXRhL3VzZXJzLWRhdGEuanMnO1xuaW1wb3J0IHJlY2lwZURhdGEgZnJvbSAgJy4vZGF0YS9yZWNpcGUtZGF0YSc7XG5pbXBvcnQgaW5ncmVkaWVudHNEYXRhIGZyb20gJy4vZGF0YS9pbmdyZWRpZW50LWRhdGEnO1xuXG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2gucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvY29va2Jvb2sucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvc2Vhc29uaW5nLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmcnO1xuXG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBSZWNpcGVSZXBvIGZyb20gJy4vcmVjaXBlLXJlcG8nXG5pbXBvcnQgSW5ncmVkaWVudHNSZXBvIGZyb20gJy4vaW5ncmVkaWVudC1yZXBvJ1xuXG5sZXQgYWxsUmVjaXBlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvdy1hbGwtYnRuXCIpO1xubGV0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyLWJ0blwiKTtcbmxldCBmdWxsUmVjaXBlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlLWluc3RydWN0aW9uc1wiKTtcbmxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5sZXQgbWVudU9wZW4gPSBmYWxzZTtcbmxldCBwYW50cnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXBhbnRyeS1idG5cIik7XG5sZXQgc2F2ZWRSZWNpcGVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYXZlZC1yZWNpcGVzLWJ0blwiKTtcbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idG5cIik7XG5sZXQgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpO1xubGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtaW5wdXRcIik7XG5sZXQgc2hvd1BhbnRyeVJlY2lwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuXCIpO1xuXG5sZXQgdXNlcjtcbmxldCByZWNpcGVSZXBvO1xubGV0IHJlY2lwZXMgPSBbXTtcbmxldCBpbmdyZWRpZW50c1JlcG87ICBcblxuY29uc3QgaW5pdGlhdGVEYXRhID0gKCkgPT4ge1xuICB1c2VyID0gbmV3IFVzZXIodXNlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXNlcnMubGVuZ3RoKV0pO1xuICByZWNpcGVSZXBvID0gbmV3IFJlY2lwZVJlcG8ocmVjaXBlRGF0YSk7XG4gIGluZ3JlZGllbnRzUmVwbyA9IG5ldyBJbmdyZWRpZW50c1JlcG8oaW5ncmVkaWVudHNEYXRhKTtcbiAgY3JlYXRlQ2FyZHMoKTtcbiAgZGlzcGxheVRhZ0xpc3QoKTtcbiAgZG9tVXBkYXRlcy53ZWxjb21lVXNlcih1c2VyKVxuICBmaW5kUGFudHJ5SW5mbygpO1xuICBzaG93QWxsUmVjaXBlcyhyZWNpcGVzKVxufVxuXG4vLyBDUkVBVEUgUkVDSVBFIENBUkRTXG5jb25zdCBjcmVhdGVDYXJkcyA9ICgpID0+IHsgXG4gIGRvbVVwZGF0ZXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKTtcbiAgZG9tVXBkYXRlcy5zaG93U2VsZWN0ZWRSZWNpcGVzKHJlY2lwZVJlcG8ucmVjaXBlcywgdXNlcik7XG59XG5cbi8vIEZJTFRFUiBCWSBSRUNJUEUgVEFHU1xuY29uc3QgZGlzcGxheVRhZ0xpc3QgPSAoKSA9PiB7XG4gIGxldCB0YWdzID0gcmVjaXBlUmVwby5yZXR1cm5BbGxUYWdzKClcbiAgZG9tVXBkYXRlcy5jcmVhdGVMaXN0VGFncyh0YWdzKTtcbn1cblxuY29uc3QgZmluZENoZWNrZWRCb3hlcyA9ICgpID0+IHtcbiAgY29uc3QgdGFnQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tlZC10YWdcIik7XG4gIGNvbnN0IGNoZWNrYm94SW5mbyA9IEFycmF5LmZyb20odGFnQ2hlY2tib3hlcylcbiAgY29uc3Qgc2VsZWN0ZWRUYWdzID0gY2hlY2tib3hJbmZvLmZpbHRlcihib3ggPT4ge1xuICAgIHJldHVybiBib3guY2hlY2tlZDtcbiAgfSlcbiAgY29uc3Qgc2VsZWN0ZWRUYWdOYW1lcyA9IHNlbGVjdGVkVGFncy5tYXAodGFnID0+IHRhZy5pZCk7XG4gIGZpbmRUYWdnZWRSZWNpcGVzKHNlbGVjdGVkVGFnTmFtZXMpO1xufVxuXG5jb25zdCBmaW5kVGFnZ2VkUmVjaXBlcyA9IHNlbGVjdGVkID0+IHtcbiAgY29uc3QgZmlsdGVyZWRSZXN1bHRzID0gW107XG4gIHNlbGVjdGVkLmZvckVhY2godGFnID0+IHtcbiAgICBjb25zdCBmb3VuZFJlY2lwZSA9IHJlY2lwZVJlcG8uZmlsdGVyTGlzdEJ5VGFnKHJlY2lwZVJlcG8ucmVjaXBlcywgdGFnKTtcbiAgICBmb3VuZFJlY2lwZS5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBjb25zdCB0YWdNYXRjaCA9IGZpbHRlcmVkUmVzdWx0cy5maW5kKHJlc3VsdCA9PiByZWNpcGUuaWQgPT09IHJlc3VsdC5pZCk7XG4gICAgICBpZiAoIXRhZ01hdGNoKSB7XG4gICAgICAgIGZpbHRlcmVkUmVzdWx0cy5wdXNoKHJlY2lwZSlcbiAgICAgIH1cbiAgICB9KVxuICB9KSAgIFxuICBpZiAoZmlsdGVyZWRSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICBkb21VcGRhdGVzLnNob3dTZWxlY3RlZFJlY2lwZXMoZmlsdGVyZWRSZXN1bHRzLCB1c2VyKTtcbiAgfVxufVxuXG4vLyBGQVZPUklURSBSRUNJUEUgRlVOQ1RJT05BTElUWVxuY29uc3QgYWxsQ2xpY2tzSW5NYWluID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcImNhcmQtYXBwbGUtaWNvblwiKSB7XG4gICAgYWRkVG9NeVJlY2lwZXMoKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZXhpdC1yZWNpcGUtYnRuXCIpIHtcbiAgICBkb21VcGRhdGVzLmV4aXRSZWNpcGUoKTtcbiAgfSBlbHNlIGlmIChpc0Rlc2NlbmRhbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucmVjaXBlLWNhcmRcIiksIGV2ZW50LnRhcmdldCkpIHtcbiAgICBvcGVuUmVjaXBlSW5mbyhldmVudCk7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9TYXZlZERvbSA9IHJlY2lwZSA9PiB7XG4gIGRvbVVwZGF0ZXMuZmlsbEFwcGxlKCk7XG4gIHVzZXIuc2F2ZVJlY2lwZSh1c2VyLmZhdm9yaXRlUmVjaXBlcywgcmVjaXBlKTtcbn1cblxuY29uc3QgcmVtb3ZlRnJvbVNhdmVkRG9tID0gcmVjaXBlID0+IHtcbiAgYWxlcnQoJ1lvdSBoYXZlIHJlbW92ZWQgYSByZWNpcGUgZnJvbSBNeSBSZWNpcGVzIScpO1xuICBkb21VcGRhdGVzLnJlbW92ZUFwcGxlKCk7XG4gIHVzZXIucmVtb3ZlUmVjaXBlKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCByZWNpcGUpO1xuICBjcmVhdGVDYXJkcygpO1xuICBzaG93V2VsY29tZUJhbm5lcigpO1xufVxuXG5jb25zdCBhZGRUb015UmVjaXBlcyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZElkID0gZG9tVXBkYXRlcy5nZXRDYXJkSWQoKTtcbiAgY29uc3QgcmVjaXBlID0gcmVjaXBlUmVwby5maWx0ZXJMaXN0QnlJZChjYXJkSWQpO1xuXG4gIGlmICghdXNlci5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgIGFkZFRvU2F2ZWREb20ocmVjaXBlKTtcbiAgfSBlbHNlIGlmICh1c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgcmVtb3ZlRnJvbVNhdmVkRG9tKHJlY2lwZSk7XG4gIH0gXG59XG5cbmNvbnN0IGlzRGVzY2VuZGFudCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gIGxldCBub2RlID0gY2hpbGQ7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBzaG93U2F2ZWRSZWNpcGVzID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhzYXZlZFJlY2lwZXNCdG4pXG4gIHVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCA+IDAgPyAoXG4gICAgZG9tVXBkYXRlcy5zaG93U2VsZWN0ZWRSZWNpcGVzKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCB1c2VyKSwgXG4gICAgc2hvd015UmVjaXBlc0Jhbm5lcigpXG4gICkgOiBjcmVhdGVDYXJkcygpO1xufVxuXG4vLyBDUkVBVEUgUkVDSVBFIElOU1RSVUNUSU9OU1xuY29uc3Qgb3BlblJlY2lwZUluZm8gPSBldmVudCA9PiB7IFxuICBmdWxsUmVjaXBlSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjsgXG4gIGNvbnN0IHJlY2lwZUlkID0gcGFyc2VJbnQoZXZlbnQucGF0aC5maW5kKGUgPT4gZS5pZCkuaWQpOyAgICBcbiAgY29uc3QgcmVjaXBlID0gcmVjaXBlUmVwby5maWx0ZXJMaXN0QnlJZChyZWNpcGVJZCk7ICBcbiAgZXhwYW5kUmVjaXBlQ2FyZChyZWNpcGUpOyAgXG59XG5cbmNvbnN0IGdlbmVyYXRlSW5ncmVkaWVudHMgPSByZWNpcGUgPT4geyBcbiAgcmV0dXJuIHJlY2lwZS5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGluZ3JlZGllbnRzUmVwby5nZXRSZWNpcGVOYW1lQnlJZChpbmdyZWRpZW50LmlkKTtcbiAgICByZXR1cm4gYCR7ZG9tVXBkYXRlcy5jYXBpdGFsaXplKG5hbWUpfSAoJHtkb21VcGRhdGVzLmZvcm1hdE51bWJlcihpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCl9ICR7aW5ncmVkaWVudC5xdWFudGl0eS51bml0fSlgO1xuICB9KS5qb2luKCcsICcpO1xufVxuXG5jb25zdCBleHBhbmRSZWNpcGVDYXJkID0gcmVjaXBlID0+IHsgIFxuICBsZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG4gIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWJlZ2luXCIsIFwiPHNlY3Rpb24gaWQ9J292ZXJsYXknPjwvc2VjdGlvbj5cIik7XG4gIGRvbVVwZGF0ZXMuY3JlYXRlSW5zdHJ1Y3Rpb25zVGl0bGUocmVjaXBlLCBnZW5lcmF0ZUluZ3JlZGllbnRzKHJlY2lwZSkpO1xuICBkb21VcGRhdGVzLmNyZWF0ZUluc3RydWN0aW9uc0ltYWdlKHJlY2lwZSk7XG4gIGRvbVVwZGF0ZXMuY3JlYXRlSW5zdHJ1Y3Rpb25zTGlzdChyZWNpcGUuaW5zdHJ1Y3Rpb25zKTtcbiAgZG9tVXBkYXRlcy5jcmVhdGVFc3RpbWF0ZWRQcmljZShyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSk7XG4gIGZ1bGxSZWNpcGVJbmZvLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiOyBcbn1cblxuLy8gVE9HR0xFIERJU1BMQVlTIC8vIFxuY29uc3Qgc2hvd015UmVjaXBlc0Jhbm5lciA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktcmVjaXBlcy1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuY29uc3Qgc2hvd1dlbGNvbWVCYW5uZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXJlY2lwZXMtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuLy8gU0VBUkNIIFJFQ0lQRVNcbmNvbnN0IHNlYXJjaFJlY2lwZXMgPSAoKSA9PiB7XG4gIGxldCBpbnB1dCA9IHNlYXJjaElucHV0LnZhbHVlOyAgXG5cbiAgaW5wdXQgPSBpbnB1dC50cmltKCk7XG4gIGlucHV0ID0gZG9tVXBkYXRlcy5jYXBpdGFsaXplKGlucHV0KTtcbiAgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyA/IChcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlTZWFyY2hFcnJvcigpLFxuICAgIGRvbVVwZGF0ZXMuY2xlYXJGaWVsZCgpXG4gICkgOiBkb21VcGRhdGVzLnNob3dTZWxlY3RlZFJlY2lwZXMoZmluZFJlY2lwZU1hdGNoZXMoaW5wdXQpLCB1c2VyKTtcbn1cblxuY29uc3QgZmluZFJlY2lwZU1hdGNoZXMgPSBpbnB1dCA9PiB7XG4gIGxldCBuYW1lTWF0Y2hlcztcbiAgbGV0IGlkTWF0Y2hlcztcbiAgbGV0IGluZ3JlZGllbnRJZDtcbiAgbGV0IHJlY2lwZU1hdGNoZXM7XG5cbiAgaW5ncmVkaWVudElkID0gaW5ncmVkaWVudHNSZXBvLmdldFJlY2lwZUlkQnlOYW1lKGlucHV0KTtcbiAgbmFtZU1hdGNoZXMgPSByZWNpcGVSZXBvLmZpbHRlckxpc3RCeU5hbWUocmVjaXBlUmVwby5yZWNpcGVzLCBpbnB1dCk7XG4gIGlkTWF0Y2hlcyA9IHJlY2lwZVJlcG8uZmlsdGVyTGlzdEJ5SW5ncmVkaWVudChyZWNpcGVSZXBvLnJlY2lwZXMsIGluZ3JlZGllbnRJZCk7XG4gIHJlY2lwZU1hdGNoZXMgPSBbLi4ubmFtZU1hdGNoZXNdO1xuICBpZE1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgY29uc3QgaXNSZWNpcGVGb3VuZCA9IHJlY2lwZU1hdGNoZXMuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBtYXRjaC5pZCk7XG4gICAgaWYgKCFpc1JlY2lwZUZvdW5kKSB7XG4gICAgICByZWNpcGVNYXRjaGVzID0gWy4uLnJlY2lwZU1hdGNoZXMsIG1hdGNoXTtcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZWNpcGVNYXRjaGVzO1xufVxuXG5jb25zdCBwcmVzc0VudGVyU2VhcmNoID0gKGV2ZW50KSA9PiB7IFxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBzZWFyY2hSZWNpcGVzKCk7XG4gIGRvbVVwZGF0ZXMuY2xlYXJBbGxGaWVsZHMoKTtcbn1cblxuY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHsgIFxuICB2YXIgbWVudURyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wLW1lbnVcIik7XG4gIG1lbnVPcGVuID0gIW1lbnVPcGVuO1xuICBpZiAobWVudU9wZW4pIHtcbiAgICBtZW51RHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSBlbHNlIHtcbiAgICBtZW51RHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmNvbnN0IHNob3dBbGxSZWNpcGVzID0gKCkgPT4ge1xuICBjcmVhdGVDYXJkcygpO1xuICBzaG93V2VsY29tZUJhbm5lcigpO1xufVxuXG4vLyBDUkVBVEUgQU5EIFVTRSBQQU5UUlkgXG5cbmNvbnN0IGZpbmRQYW50cnlJbmZvID0gKCkgPT4geyAgIFxuICBsZXQgaW5ncmVkaWVudFJlcG8gPSBuZXcgSW5ncmVkaWVudHNSZXBvKGluZ3JlZGllbnRzRGF0YSk7XG4gIGxldCBwYW50cnlJbmZvID0gdXNlci5wYW50cnkuaXRlbXMucmVkdWNlKChhY2MsIGluZ3JlZGllbnQpID0+IHtcbiAgICBsZXQgb3V0cHV0T2JqZWN0ID0ge1xuICAgICAgbmFtZTogaW5ncmVkaWVudFJlcG8uZ2V0UmVjaXBlTmFtZUJ5SWQoaW5ncmVkaWVudC5pbmdyZWRpZW50KSxcbiAgICAgIGNvdW50OiBpbmdyZWRpZW50LmFtb3VudFxuICAgIH1cbiAgICBhY2MucHVzaChvdXRwdXRPYmplY3QpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5UGFudHJ5SW5mbyhwYW50cnlJbmZvLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpKTsgXG59XG5cbmNvbnN0IGZpbmRDaGVja2VkUGFudHJ5Qm94ZXMgPSAoKSA9PiB7XG4gIGxldCBwYW50cnlDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYW50cnktY2hlY2tib3hcIik7XG4gIGxldCBwYW50cnlDaGVja2JveEluZm8gPSBBcnJheS5mcm9tKHBhbnRyeUNoZWNrYm94ZXMpXG4gIGxldCBzZWxlY3RlZEluZ3JlZGllbnRzID0gcGFudHJ5Q2hlY2tib3hJbmZvLmZpbHRlcihib3ggPT4ge1xuICAgIHJldHVybiBib3guY2hlY2tlZDtcbiAgfSlcbiAgc2hvd0FsbFJlY2lwZXMoKTtcbiAgaWYgKHNlbGVjdGVkSW5ncmVkaWVudHMubGVuZ3RoID4gMCkge1xuICAgIGZpbmRSZWNpcGVzV2l0aENoZWNrZWRJbmdyZWRpZW50cyhzZWxlY3RlZEluZ3JlZGllbnRzKTtcbiAgfVxufVxuXG5jb25zdCBmaW5kUmVjaXBlc1dpdGhDaGVja2VkSW5ncmVkaWVudHMgPSAoc2VsZWN0ZWQpID0+IHtcbiAgbGV0IHJlY2lwZUNoZWNrZXIgPSAoYXJyLCB0YXJnZXQpID0+IHRhcmdldC5ldmVyeSh2ID0+IGFyci5pbmNsdWRlcyh2KSk7IFxuICBsZXQgaW5ncmVkaWVudE5hbWVzID0gc2VsZWN0ZWQubWFwKGl0ZW0gPT4ge1xuICAgIHJldHVybiBpdGVtLmlkO1xuICB9KVxuICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHsgXG4gICAgbGV0IGFsbFJlY2lwZUluZ3JlZGllbnRzID0gW107XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBhbGxSZWNpcGVJbmdyZWRpZW50cy5wdXNoKGluZ3JlZGllbnQubmFtZSk7XG4gICAgfSk7XG4gICAgaWYgKCFyZWNpcGVDaGVja2VyKGFsbFJlY2lwZUluZ3JlZGllbnRzLCBpbmdyZWRpZW50TmFtZXMpKSB7XG4gICAgICBsZXQgZG9tUmVjaXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmVjaXBlLmlkfWApO1xuICAgICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0aWF0ZURhdGEpO1xuYWxsUmVjaXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FsbFJlY2lwZXMpO1xuZmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaW5kQ2hlY2tlZEJveGVzKTtcbm1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFsbENsaWNrc0luTWFpbik7XG5wYW50cnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xuc2F2ZWRSZWNpcGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2F2ZWRSZWNpcGVzKTtcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoUmVjaXBlcyk7XG5zaG93UGFudHJ5UmVjaXBlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmluZENoZWNrZWRQYW50cnlCb3hlcyk7XG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgcHJlc3NFbnRlclNlYXJjaCk7IiwiaW1wb3J0IFBhbnRyeSBmcm9tICcuL3BhbnRyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSkge1xuICAgIHRoaXMuaWQgPSB1c2VyRGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyRGF0YS5uYW1lO1xuICAgIHRoaXMucGFudHJ5ID0gbmV3IFBhbnRyeSh1c2VyRGF0YS5wYW50cnkpXG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgfVxuXG4gIHNhdmVSZWNpcGUobGlzdCwgcmVjaXBlKSB7XG4gICAgbGlzdC5wdXNoKHJlY2lwZSk7XG4gIH0gIFxuXG4gIHJlbW92ZVJlY2lwZShsaXN0LCByZWNpcGUpIHtcbiAgICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihyZWNpcGUpO1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybkZpcnN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lLnNwbGl0KCcgJylbMF07XG4gIH1cblxuICBpc0Zhdm9yaXRlZChyZWNpcGUpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmluZChmYXZSZWNpcGUgPT4gcmVjaXBlLmlkID09PSBmYXZSZWNpcGUuaWQpO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=