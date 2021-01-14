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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\nbody {\n  background-color: pink; }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss"],"names":[],"mappings":"AAAA,mEAAA;AAGA;EACE,sBAHuB,EAAA","sourcesContent":["/* This is an example of using Sass, otherwise plain CSS works too*/\n$primary-background: pink;\n\nbody {\n  background-color: $primary-background;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-color: #5B7894;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: none;\n  font-family: \"Quicksand\", sans-serif;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n\nh1 {\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  grid-area: fresh; }\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: 0.8s ease; }\n\nh4 {\n  color: #359567;\n  background-color: #C4EB67;\n  border-radius: 3px;\n  font-size: smaller;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content; }\n\n/* HEADER */\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: none;\n  grid-area: header; }\n\nspan {\n  color: #C4EB67;\n  font-weight: 400; }\n\n.header-apple-icon {\n  margin-left: 1.1%;\n  width: .7em; }\n\n#search {\n  border: 0.2em outset #C4EB67;\n  border-radius: 15px 15px 15px 15px;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-family: \"Quicksand\", sans-serif;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  grid-area: search; }\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border: none;\n  border-radius: 10px 0px 0px 10px;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: 0.8s ease;\n  width: 100%; }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-left: 3px outset #C4EB67;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%; }\n\n.nav-btn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  font-weight: 700;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  transition: 0.4s ease;\n  width: 15%; }\n  .nav-btn:hover {\n    color: #C4EB67;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: 0.4s ease; }\n  .nav-btn img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 2px 0px; }\n\n.saved-recipes-btn {\n  grid-area: button; }\n\n.saved-ingredients-btn {\n  border-left: 3px solid #C4EB67;\n  grid-area: button2; }\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  grid-area: image;\n  height: 9em;\n  overflow: hidden;\n  width: 100%; }\n\n.my-recipes-banner {\n  text-align: center;\n  width: 95%;\n  display: none;\n  margin-top: 1%; }\n  .my-recipes-banner h1 {\n    color: white;\n    width: 100%; }\n\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n  margin-top: 3%; }\n  .welcome-msg h1 {\n    color: white;\n    width: 100%; }\n\n/* FILTER SIDEBAR */\naside {\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: auto;\n  text-align: center; }\n\n.wrap {\n  background-color: white;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px; }\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px; }\n\nli {\n  margin: 2px; }\n\n/* RECIPE CARD SECTION */\nmain {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  grid-area: main;\n  flex-wrap: wrap;\n  margin: 1em; }\n\n.title-container {\n  align-self: center;\n  grid-area: title;\n  text-align: center;\n  margin-bottom: 13%; }\n\n.recipe-card {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-areas: \"title title\" \"food food\" \"tags apple\";\n  background-color: white;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  box-shadow: none;\n  cursor: pointer;\n  height: 18em;\n  margin: 2%;\n  padding: 1.5%;\n  width: 15em;\n  margin: 1em; }\n  .recipe-card:hover .card-photo-preview {\n    opacity: 50%;\n    transition: 0.8s ease; }\n  .recipe-card:hover .text {\n    font-size: 20px;\n    opacity: 100%;\n    transition: 0.5s ease;\n    width: 100%; }\n  .recipe-card:hover h3 {\n    text-shadow: 0px 0px 4px #C4EB67;\n    transition: 0.8s ease; }\n\n.tags {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-area: tags;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  overflow: auto; }\n\n.apple-container {\n  align-items: center;\n  justify-items: flex-end;\n  display: inline-grid;\n  grid-area: apple; }\n\n.card-apple-icon {\n  cursor: pointer;\n  height: 3em;\n  width: 3em; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 3%;\n  cursor: pointer;\n  height: 130px;\n  transition: 0.8s ease;\n  width: 100%; }\n\n.card-photo-container {\n  grid-area: food;\n  align-items: center;\n  display: flex;\n  height: 80%;\n  position: relative; }\n\n.text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: 0.5s ease; }\n\n/* BUTTONS */\n.filter-btn, .show-pantry-recipes-btn, .show-all-btn {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3%;\n  box-shadow: none;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 1% 2% 1% 2%; }\n  .filter-btn:hover, .show-pantry-recipes-btn:hover, .show-all-btn:hover {\n    background-color: #84C8A4; }\n\n.show-pantry-recipes-btn {\n  margin-top: 5%; }\n\n.show-all-btn {\n  height: 2.5em;\n  margin-top: 1%; }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 65%;\n  margin-left: 81%;\n  margin-top: 7%;\n  overflow: scroll;\n  padding: 1%;\n  position: absolute;\n  text-align: center;\n  width: 18%;\n  z-index: 3; }\n  .drop-menu h2 {\n    color: #359567;\n    margin: 0%; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 10%;\n  text-align: left; }\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 1%;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n  .recipe-instructions h4 {\n    background: white;\n    color: #359567; }\n  .recipe-instructions p {\n    margin-left: 2%; }\n  .recipe-instructions ol {\n    margin-right: 2%; }\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 2%;\n  box-shadow: none;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: 0.3s ease; }\n  #exit-recipe-btn:hover {\n    background: #C4EB67;\n    transition: 0.3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 2em;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #5B7894;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n@media only screen and (max-width: 900px) {\n  body {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: none;\n    font-family: \"Quicksand\", sans-serif;\n    grid-template-areas: \"header header\" \"aside image\" \"aside image\" \"main main\";\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: auto; }\n  header {\n    display: grid;\n    grid-template-columns: 4fr 1fr 1fr;\n    grid-template-rows: none;\n    grid-template-areas: \"fresh button button2\" \"search search search\";\n    grid-area: header;\n    padding: 1%; }\n  aside {\n    width: 40%; }\n  .wrap {\n    height: 4em;\n    overflow: scroll; }\n  .ing-pan-btn {\n    display: flex;\n    justify-self: end;\n    align-content: flex-end;\n    width: 50%; }\n  .drop-menu {\n    margin-left: 25%;\n    width: 50%;\n    height: 50%;\n    margin-top: 25%; }\n  h1 {\n    justify-self: center;\n    width: 90%; }\n  #search {\n    width: 85%;\n    justify-self: center; }\n  .banner-image {\n    height: 7em; } }\n\n@media only screen and (max-width: 550px) {\n  header {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: none;\n    grid-template-areas: \"fresh fresh fresh\"  \"none button button2\" \"search search search\";\n    justify-self: center;\n    align-self: center; }\n  h1 {\n    width: 50%;\n    font-size: 2.8em; }\n  .my-pantry-btn {\n    margin-right: 96%; }\n  .saved-recipes-btn {\n    margin-right: 57%; }\n  .saved-ingredients-btn {\n    border-left: none; }\n  .nav-btn {\n    align-items: none; }\n  .recipe-card {\n    width: 20em; }\n  #recipe-title {\n    font-size: 1.5em; } }\n", "",{"version":3,"sources":["webpack://./src/css/styles.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"variables\";\n@import \"media-queries\";\n\nbody {\n  background-color: $primary-color;\n  @include gridDisplay(1fr 5fr, none);\n  font-family: $font;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nh1 {\n  align-self: center;\n  color: $text-background;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  grid-area: fresh;\n}\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px;\n}\n\nh3 {\n  color: $border-font;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  @include transition(.8s ease)\n}\n\nh4 {\n  color: $border-font;\n  background-color: $background;\n  border-radius: 3px;\n  font-size: smaller;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content;\n}\n\n\n/* HEADER */\nheader {\n  @include flexDisplay(row, none);\n  grid-area: header;\n}\n\nspan {\n  color: $background;\n  font-weight: 400;\n}\n\n.header-apple-icon {\n  margin-left: 1.1%;\n  width: .7em;\n}\n\n#search {\n  @include borderStyling(.2em outset $background, 15px 15px 15px 15px, 0px 0px 7px 0px #475d74);\n  @include flexDisplay(row, center);\n  font-family: $font;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  grid-area: search;\n}\n\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  @include borderStyling(none, 10px 0px 0px 10px, inset -3px -1px 20px 1px #5c7894);\n  color: $primary-color;\n  font-family: $font;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  @include transition(.8s ease);\n  width: 100%;\n\n  // &:hover {\n  //   box-shadow: inset 0px 0px 0px 0px $text-background;\n  //   @include transition(.8s ease);\n  // }\n\n  // &:focus {\n  //   box-shadow: inset 0px 0px 0px 0px $text-background;\n  //   font-size: 0px;\n  // }\n\n  // &::placeholder {\n  //   color: $primary-color;\n  //   font-size: 20px;\n  //   text-align: right;\n  //   text-shadow: none;\n  // }\n\n  // &:focus::placeholder {\n  //   font-size: 0px;\n  //   @include transition(.8s ease);\n  // }\n}\n\n.search-label {\n  display: none;\n}\n\n.search-btn {\n  border-left: 3px outset $background;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%;\n}\n\n.nav-btn {\n  @include flexDisplay(column, center);\n  align-items: center;\n  background:$primary-color no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  font-weight: 700;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  @include transition(.4s ease);\n  width: 15%;\n\n  &:hover {\n  color: $background;\n  font-size: 14px;\n  text-shadow: 0px 2px 4px black;\n  @include transition(.4s ease);\n}\n\n  img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px;\n}\n}\n\n.saved-recipes-btn {\n  grid-area: button;\n}\n\n.saved-ingredients-btn {\n  border-left: 3px solid $background;\n  grid-area: button2;\n}\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px;\n  // @extend .nav-btn;\n}\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\");\n  grid-area: image;\n  height: 9em;\n  overflow: hidden;\n  width: 100%;\n}\n\n.my-recipes-banner {\n  text-align: center;\n  width: 95%;\n  display: none;\n  margin-top: 1%;\n\n    h1 {\n      color: $text-background;\n      width: 100%;\n    }\n}\n\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n  margin-top: 3%;\n\n    h1 {\n      color: $text-background;\n      width: 100%;\n    }\n}\n\n/* FILTER SIDEBAR */\naside {\n  background-color: $text-background;\n  @include flexDisplay(row, center);\n  height: auto;\n  text-align: center;\n}\n\n.wrap {\n  background-color: $text-background;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px;\n}\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n}\n\nli {\n  margin: 2px;\n}\n\n/* RECIPE CARD SECTION */\nmain {\n  @include flexDisplay(row, center);\n  grid-area: main;\n  flex-wrap: wrap;\n  margin: 1em;\n  \n}\n\n.title-container {\n  align-self: center;\n  grid-area: title;\n  text-align: center;\n  margin-bottom: 13%;\n}\n\n.recipe-card {\n  @include gridDisplay(2fr 1fr, 1fr 1fr 1fr);\n  grid-template-areas: \n  \"title title\"\n  \"food food\"\n  \"tags apple\";\n  background-color: $text-background;\n  @include borderStyling(2px solid $background, 7px, none);\n  cursor: pointer;\n  height: 18em;\n  margin: 2%;\n  padding: 1.5%;\n  width: 15em;\n  margin: 1em;\n\n  &:hover .card-photo-preview {\n    opacity: 50%;\n    @include transition(.8s ease);\n  }\n\n  &:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  @include transition(.5s ease);\n  width: 100%;\n}\n\n  &:hover h3 {\n  text-shadow: 0px 0px 4px $background;\n  @include transition(.8s ease);\n}\n}\n\n.tags {\n  @include gridDisplay(1fr 1fr, 1fr 1fr);\n  grid-area: tags;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  overflow: auto;\n}\n\n.apple-container {\n  align-items: center;\n  justify-items: flex-end;\n  display: inline-grid;\n  grid-area: apple;\n}\n\n.card-apple-icon {\n  cursor: pointer;\n  height: 3em;\n  width: 3em;\n}\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 3%;\n  cursor: pointer;\n  height: 130px;\n  @include transition(.8s ease);\n  width: 100%;\n}\n\n.card-photo-container {\n  grid-area: food;\n  align-items: center;\n  display: flex;\n  height: 80%;\n  position: relative;\n}\n\n.text {\n  background: $border-font;\n  color: $text-background;;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  @include transition(.5s ease);\n}\n\n\n/* BUTTONS */\n.filter-btn {\n  background-color: $border-font;\n  @include borderStyling(0, 3%, none);\n  color: $text-background;\n  cursor: pointer;\n  font-family: $font;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 1% 2% 1% 2%;\n\n    &:hover {\n    background-color: #84C8A4;\n    }\n}\n\n  .show-pantry-recipes-btn {\n    @extend .filter-btn;\n    margin-top: 5%;\n  }\n\n  .show-all-btn {\n    @extend .filter-btn;\n    height: 2.5em;\n    margin-top: 1%;\n  }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 65%;\n  margin-left: 81%;\n  margin-top: 7%;\n  overflow: scroll;\n  padding: 1%;\n  position: absolute;\n  text-align: center;\n  width: 18%;\n  z-index: 3;\n\n  h2 {\n    color: $border-font;\n    margin: 0%;\n  }\n}\n\n.pantry-list {\n  color: #000000;\n  padding-left: 10%;\n  text-align: left;\n}\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: $text-background;\n  @include borderStyling(3px solid $background, 1%, 1px 1px 115px black);\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000;\n\n  h4 {\n    background: $text-background;\n    color: $border-font;\n  }\n\n  p {\n    margin-left: 2%;\n  }\n\n  ol {\n    margin-right: 2%;\n  }\n}\n\n#exit-recipe-btn {\n  background: $text-background;\n  @include borderStyling(2px double $border-font, 2%, none);\n  color: $border-font;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  @include transition(.3s ease);\n\n  &:hover {\n    background: $background;\n    @include transition(.3s ease);\n  }\n}\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: $text-background;\n  font-size: 2em;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black;\n}\n\n#overlay {\n  filter:alpha(opacity=50);\n  background-color:$primary-color;\n  height:100%;\n  left:0;\n  opacity:0.5;\n  position:fixed;\n  top:0;\n  width:100%;\n  z-index:100;\n}\n\n@media only screen and (max-width: 900px) {\nbody {\n  @include gridDisplay(1fr 1fr, none);\n  font-family: $font;\n  grid-template-areas:\n    \"header header\"\n    \"aside image\"\n    \"aside image\"\n    \"main main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nheader {\n  @include gridDisplay(4fr 1fr 1fr,none);\n  grid-template-areas: \n  \"fresh button button2\"\n  \"search search search\";\n  grid-area: header;\n  padding: 1%;\n}\n\naside {\n  width: 40%;\n}\n\n.wrap {\n  height: 4em;\n  overflow: scroll;\n}\n\n.ing-pan-btn {\n  display: flex;\n  justify-self: end;\n  align-content: flex-end;\n  width:50%;\n}\n\n.drop-menu {\n  margin-left: 25%;\n  width: 50%;\n  height: 50%;\n  margin-top: 25%;\n  }\n\nh1 {\n  justify-self: center;\n  width: 90%;\n}\n\n#search {\n  width: 85%;\n  justify-self: center;\n}\n\n.banner-image {\n  height: 7em;\n}\n\n}\n\n@media only screen and (max-width: 550px) {\n  header {\n    @include gridDisplay(1fr 1fr 1fr, none);\n    grid-template-areas: \n    \"fresh fresh fresh\" \n    \"none button button2\"\n    \"search search search\";\n    justify-self: center;\n    align-self: center;\n  }\n\n  h1 {\n    width: 50%;\n    font-size: 2.8em;\n  }\n\n  .my-pantry-btn {\n    margin-right: 96%;\n  }\n\n  .saved-recipes-btn {\n    margin-right: 57%;\n  }\n\n  .saved-ingredients-btn {\n    border-left: none;\n  }\n\n  .nav-btn {\n    align-items: none;\n  }\n\n  .recipe-card {\n    width: 20em;\n  }\n\n  #recipe-title {\n    font-size: 1.5em;\n  }\n \n}","$primary-color: #5B7894;\n$text-background: white;\n$font: \"Quicksand\",\nsans-serif;\n$border-font: #359567;\n$background: #C4EB67;\n\n\n\n@mixin transition($value) {\n  transition: $value;\n}\n\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n}\n\n@mixin flexDisplay($direction, $justify) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n}\n\n@mixin borderStyling($border, $radius, $shadow) {\n  border: $border;\n  border-radius: $radius;\n  box-shadow: $shadow;\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _data_users_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/users-data */ "./src/data/users-data.js");


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
    const modal =`
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
    // set error messageas text
    const message = document.createElement('p');
    // make field
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
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/apple-logo-outline.png */ "./src/images/apple-logo-outline.png");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _recipe_repo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipe-repo */ "./src/recipe-repo.js");
/* harmony import */ var _ingredient_repo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ingredient-repo */ "./src/ingredient-repo.js");
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
let recipe;
let recipeRepo;
let pantryInfo = [];
let recipes = [];
let ingredientsRepo;  

const initiateData = () => {
  user = new _user__WEBPACK_IMPORTED_MODULE_11__["default"](_data_users_data_js__WEBPACK_IMPORTED_MODULE_0__["default"][Math.floor(Math.random() * _data_users_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].length)]);
  recipeRepo = new _recipe_repo__WEBPACK_IMPORTED_MODULE_13__["default"](_data_recipe_data__WEBPACK_IMPORTED_MODULE_1__["default"]);
  ingredientsRepo = new _ingredient_repo__WEBPACK_IMPORTED_MODULE_14__["default"](_data_ingredient_data__WEBPACK_IMPORTED_MODULE_2__["default"]);
  createCards();
  displayTagList();
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].welcomeUser(user)
  findPantryInfo();
  showAllRecipes(recipes)
}

// CREATE RECIPE CARDS
function createCards() { 
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].clearMainCardSection();
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].showSelectedRecipes(recipeRepo.recipes, user);

  // recipeRepo.recipes.forEach(recipe => {    
  //     user.isFavorited(recipe) ? createCard(recipe, "apple-logo") : createCard(recipe, "apple-logo-outline");

}

// FILTER BY RECIPE TAGS
function displayTagList() {
  let tags = recipeRepo.returnAllTags()
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].createListTags(tags);
}

function findCheckedBoxes() {
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
    _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].showSelectedRecipes(filteredResults, user);
  }
}

// FAVORITE RECIPE FUNCTIONALITY
function allClicksInMain(event) {
  if (event.target.className === "card-apple-icon") {
    addToMyRecipes();
  } else if (event.target.id === "exit-recipe-btn") {
    _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    openRecipeInfo(event);
  }
}

const addToSavedDom = recipe => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].fillApple();
  user.saveRecipe(user.favoriteRecipes, recipe);
}

const removeFromSavedDom = recipe => {
  alert('You have removed a recipe from My Recipes!');
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].removeApple();
  user.removeRecipe(user.favoriteRecipes, recipe);
  createCards();
  showWelcomeBanner();
}

const addToMyRecipes = () => {
  const cardId = _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].getCardId();
  const recipe = recipeRepo.filterListById(cardId);

  if (!user.favoriteRecipes.includes(recipe)) {
    addToSavedDom(recipe);
  } else if (user.favoriteRecipes.includes(recipe)) {
    removeFromSavedDom(recipe);
  } 
}

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function showSavedRecipes() {
  console.log(savedRecipesBtn)
  user.favoriteRecipes.length > 0 ? (
    _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].showSelectedRecipes(user.favoriteRecipes, user), 
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
    return `${_domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].capitalize(name)} (${_domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].formatNumber(ingredient.quantity.amount)} ${ingredient.quantity.unit})`;
  }).join(', ');
}

const expandRecipeCard = recipe => {  
  let fullRecipeInfo = document.querySelector(".recipe-instructions");
  fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></section>");
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].createInstructionsTitle(recipe, generateIngredients(recipe));
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].createInstructionsImage(recipe);
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].createInstructionsList(recipe.instructions);
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].createEstimatedPrice(recipe, _data_ingredient_data__WEBPACK_IMPORTED_MODULE_2__["default"]);
  fullRecipeInfo.style.display = "inline"; 
}

// TOGGLE DISPLAYS // 
function showMyRecipesBanner() {
  document.querySelector(".welcome-msg").style.display = "none";
  document.querySelector(".my-recipes-banner").style.display = "block";
}

function showWelcomeBanner() {
  document.querySelector(".welcome-msg").style.display = "flex";
  document.querySelector(".my-recipes-banner").style.display = "none";
}

// SEARCH RECIPES
const searchRecipes = () => {
  let input = searchInput.value;  

  input = input.trim();
  input = _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].capitalize(input);
  typeof input !== 'string' ? (
    _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].displaySearchError(),
    _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].clearField()
  ) : _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].showSelectedRecipes(findRecipeMatches(input), user);
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

function pressEnterSearch(event) { 
  event.preventDefault();
  searchRecipes();
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].clearAllFields();
}

function toggleMenu() {  
  var menuDropdown = document.querySelector(".drop-menu");
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
}

function showAllRecipes() {
  createCards();
  showWelcomeBanner();
}

// CREATE AND USE PANTRY 

function findPantryInfo() {   
  let ingredientRepo = new _ingredient_repo__WEBPACK_IMPORTED_MODULE_14__["default"](_data_ingredient_data__WEBPACK_IMPORTED_MODULE_2__["default"]);
  let pantryInfo = user.pantry.items.reduce((acc, ingredient) => {
    let outputObject = {
      name: ingredientRepo.getRecipeNameById(ingredient.ingredient),
      count: ingredient.amount
    }
    acc.push(outputObject);
    return acc;
  }, []);
  _domUpdates__WEBPACK_IMPORTED_MODULE_10__["default"].displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name))); 
}

function findCheckedPantryBoxes() {
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

function findRecipesWithCheckedIngredients(selected) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BUElDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/N2IyZiIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmdyZWRpZW50LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvcmVjaXBlLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvdXNlcnMtZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcHBsZS1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nvb2tib29rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWFyY2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2Vhc29uaW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5ncmVkaWVudC1yZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2lwZS1yZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRjtBQUNBLDhCQUE4QixRQUFTLCtFQUErRSwyQkFBMkIsRUFBRSxTQUFTLDBGQUEwRixLQUFLLHFJQUFxSSxVQUFVLDBDQUEwQyxHQUFHLHFCQUFxQjtBQUM1YztBQUNlLHNGQUF1QixF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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDOztBQUVBO0FBQ0EsVUFBVSxvREFBVTtBQUNwQjtBQUNBLElBQUksb0RBQVU7QUFDZCxJQUFJLG9EQUFVO0FBQ2QsTUFBTSxvREFBVTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGtDO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVU7QUFDWjs7QUFFQSx1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQjtBQUNBLDJCQUEyQix5REFBZSxDQUFDLDZEQUFlO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsb0RBQVUsNEU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RDs7Ozs7Ozs7Ozs7O0FDN1JBO0FBQUE7QUFBQTtBQUE4Qjs7QUFFZjtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBTTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhpcyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIFNhc3MsIG90aGVyd2lzZSBwbGFpbiBDU1Mgd29ya3MgdG9vKi9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtRUFBQTtBQUdBO0VBQ0Usc0JBSHVCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGhpcyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIFNhc3MsIG90aGVyd2lzZSBwbGFpbiBDU1Mgd29ya3MgdG9vKi9cXG4kcHJpbWFyeS1iYWNrZ3JvdW5kOiBwaW5rO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Qjc4OTQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJpbWFnZSBpbWFnZVxcXCIgXFxcImFzaWRlIG1haW5cXFwiO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvOyB9XFxuXFxuaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdWxwaHVyIFBvaW50XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIG1hcmdpbjogMCU7XFxuICBwYWRkaW5nOiAwLjUlIDAuNyUgMCU7XFxuICB3aWR0aDogNzAlO1xcbiAgZ3JpZC1hcmVhOiBmcmVzaDsgfVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjODRDOEE0O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDsgfVxcblxcbmgzIHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxNyU7XFxuICBtYXJnaW46IDVweCA1cHggMTBweCAwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7IH1cXG5cXG5oNCB7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4IDFweCA0cHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7IH1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vbmU7XFxuICBncmlkLWFyZWE6IGhlYWRlcjsgfVxcblxcbnNwYW4ge1xcbiAgY29sb3I6ICNDNEVCNjc7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuLmhlYWRlci1hcHBsZS1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjElO1xcbiAgd2lkdGg6IC43ZW07IH1cXG5cXG4jc2VhcmNoIHtcXG4gIGJvcmRlcjogMC4yZW0gb3V0c2V0ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4ICM0NzVkNzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAxLjIlIDAuNSUgMS4yJSAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBzZWFyY2g7IH1cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmRjY2E7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHdoaXRlKSwgY29sb3Itc3RvcCgxLCAjZTFlMWUxKSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTFweCAyMHB4IDFweCAjNWM3ODk0O1xcbiAgY29sb3I6ICM1Qjc4OTQ7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IDAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNlYXJjaC1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnNlYXJjaC1idG4ge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBvdXRzZXQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xcbiAgcGFkZGluZzogMSU7IH1cXG5cXG4ubmF2LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM1Qjc4OTQgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxuICB3aWR0aDogMTUlOyB9XFxuICAubmF2LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjQzRFQjY3O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlOyB9XFxuICAubmF2LWJ0biBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDJweCAwcHg7IH1cXG5cXG4uc2F2ZWQtcmVjaXBlcy1idG4ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247IH1cXG5cXG4uc2F2ZWQtaW5ncmVkaWVudHMtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0M0RUI2NztcXG4gIGdyaWQtYXJlYTogYnV0dG9uMjsgfVxcblxcbi5pbmctcGFuLWJ0biB7XFxuICBtYXJnaW46IDElIDAlO1xcbiAgcGFkZGluZzogMXB4IDZweCA1cHggMHB4OyB9XFxuXFxuLyogQkFOTkVSIElNQUdFKi9cXG4uYmFubmVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBncmlkLWFyZWE6IGltYWdlO1xcbiAgaGVpZ2h0OiA5ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxJTsgfVxcbiAgLm15LXJlY2lwZXMtYmFubmVyIGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblxcbi53ZWxjb21lLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLXRvcDogMyU7IH1cXG4gIC53ZWxjb21lLW1zZyBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBGSUxURVIgU0lERUJBUiAqL1xcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi53cmFwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjAwcHg7IH1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4OyB9XFxuXFxubGkge1xcbiAgbWFyZ2luOiAycHg7IH1cXG5cXG4vKiBSRUNJUEUgQ0FSRCBTRUNUSU9OICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAxZW07IH1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMyU7IH1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidGl0bGUgdGl0bGVcXFwiIFxcXCJmb29kIGZvb2RcXFwiIFxcXCJ0YWdzIGFwcGxlXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE4ZW07XFxuICBtYXJnaW46IDIlO1xcbiAgcGFkZGluZzogMS41JTtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgbWFyZ2luOiAxZW07IH1cXG4gIC5yZWNpcGUtY2FyZDpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7IH1cXG4gIC5yZWNpcGUtY2FyZDpob3ZlciAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLnJlY2lwZS1jYXJkOmhvdmVyIGgzIHtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNDNEVCNjc7XFxuICAgIHRyYW5zaXRpb246IDAuOHMgZWFzZTsgfVxcblxcbi50YWdzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLWFyZWE6IHRhZ3M7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5hcHBsZS1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLWFyZWE6IGFwcGxlOyB9XFxuXFxuLmNhcmQtYXBwbGUtaWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHdpZHRoOiAzZW07IH1cXG5cXG4uY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHRyYW5zaXRpb246IDAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogZm9vZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAjMzU5NTY3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTsgfVxcblxcbi8qIEJVVFRPTlMgKi9cXG4uZmlsdGVyLWJ0biwgLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuLCAuc2hvdy1hbGwtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTk1Njc7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDElIDIlIDElIDIlOyB9XFxuICAuZmlsdGVyLWJ0bjpob3ZlciwgLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuOmhvdmVyLCAuc2hvdy1hbGwtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0QzhBNDsgfVxcblxcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA1JTsgfVxcblxcbi5zaG93LWFsbC1idG4ge1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIG1hcmdpbi10b3A6IDElOyB9XFxuXFxuLyogUEFOVFJZIExJU1QgKi9cXG4uZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNjUlO1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDclO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE4JTtcXG4gIHotaW5kZXg6IDM7IH1cXG4gIC5kcm9wLW1lbnUgaDIge1xcbiAgICBjb2xvcjogIzM1OTU2NztcXG4gICAgbWFyZ2luOiAwJTsgfVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi8qIFJFQ0lQRSBJTlNUUlVDVElPTlMgKi9cXG4ucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAxJTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTE1cHggYmxhY2s7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxNSU7XFxuICB0b3A6IDE1JTtcXG4gIHdpZHRoOiA3MCU7XFxuICB6LWluZGV4OiAxMDAwOyB9XFxuICAucmVjaXBlLWluc3RydWN0aW9ucyBoNCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogIzM1OTU2NzsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMgcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMgb2wge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlOyB9XFxuXFxuI2V4aXQtcmVjaXBlLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjMzU5NTY3O1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAtNCUgLTMlIDIlIC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTsgfVxcbiAgI2V4aXQtcmVjaXBlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNDNEVCNjc7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTsgfVxcblxcbiNyZWNpcGUtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrOyB9XFxuXFxuI292ZXJsYXkge1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Qjc4OTQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJhc2lkZSBpbWFnZVxcXCIgXFxcImFzaWRlIGltYWdlXFxcIiBcXFwibWFpbiBtYWluXFxcIjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvOyB9XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJmcmVzaCBidXR0b24gYnV0dG9uMlxcXCIgXFxcInNlYXJjaCBzZWFyY2ggc2VhcmNoXFxcIjtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHBhZGRpbmc6IDElOyB9XFxuICBhc2lkZSB7XFxuICAgIHdpZHRoOiA0MCU7IH1cXG4gIC53cmFwIHtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7IH1cXG4gIC5pbmctcGFuLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDUwJTsgfVxcbiAgLmRyb3AtbWVudSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7IH1cXG4gIGgxIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7IH1cXG4gICNzZWFyY2gge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgfVxcbiAgLmJhbm5lci1pbWFnZSB7XFxuICAgIGhlaWdodDogN2VtOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJmcmVzaCBmcmVzaCBmcmVzaFxcXCIgIFxcXCJub25lIGJ1dHRvbiBidXR0b24yXFxcIiBcXFwic2VhcmNoIHNlYXJjaCBzZWFyY2hcXFwiO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuICBoMSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMi44ZW07IH1cXG4gIC5teS1wYW50cnktYnRuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA5NiU7IH1cXG4gIC5zYXZlZC1yZWNpcGVzLWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogNTclOyB9XFxuICAuc2F2ZWQtaW5ncmVkaWVudHMtYnRuIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cXG4gIC5uYXYtYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IG5vbmU7IH1cXG4gIC5yZWNpcGUtY2FyZCB7XFxuICAgIHdpZHRoOiAyMGVtOyB9XFxuICAjcmVjaXBlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSx5QkNKcUI7RUFjckIsYUFBYTtFQUNiLDhCRFY0QjtFQ1c1Qix3QkRYa0M7RUFDbEMsb0NDSFE7RURJUiwrREFHYztFQUNkLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGtCQUFrQjtFQUNsQixZQ2xCcUI7RURtQnJCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGNDOUJtQjtFRCtCbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCx3QkFBd0I7RUMzQnhCLHFCRDRCNEIsRUFBQTs7QUFHOUI7RUFDRSxjQ3RDbUI7RUR1Q25CLHlCQ3RDa0I7RUR1Q2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixrQkFBa0IsRUFBQTs7QUFJcEIsV0FBQTtBQUNBO0VDakNFLGFBQWE7RUFDYixtQkRpQ3dCO0VDaEN4QixxQkRnQzhCO0VBQzlCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNDdERrQjtFRHVEbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHYjtFQzFDRSw0QkFyQmtCO0VBc0JsQixrQ0QwQ21FO0VDekNuRSxtQ0R5QzRGO0VDakQ1RixhQUFhO0VBQ2IsbUJEaUR3QjtFQ2hEeEIsdUJEZ0RnQztFQUNoQyxvQ0NwRVE7RURxRVIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFJbkI7RUFDRSx5QkFBeUI7RUFDekIseUdBQStIO0VDdEQvSCxZRHVEMkI7RUN0RDNCLGdDRHNEOEM7RUNyRDlDLDRDRHFEZ0Y7RUFDaEYsY0NsRnFCO0VEbUZyQixvQ0NoRlE7RURpRlIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQzlFakIscUJEK0U0QjtFQUM1QixXQUFXLEVBQUE7O0FBeUJiO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsK0JDbkhrQjtFRG9IbEIsZ0NBQWdDO0VBQ2hDLFdBQVcsRUFBQTs7QUFHYjtFQ3pHRSxhQUFhO0VBQ2Isc0JEeUcyQjtFQ3hHM0IsdUJEd0dtQztFQUNuQyxtQkFBbUI7RUFDbkIsNkJBQW1DO0VBQ25DLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQzdIbEIscUJEOEg0QjtFQUM1QixVQUFVLEVBQUE7RUFaWjtJQWVFLGNDdklrQjtJRHdJbEIsZUFBZTtJQUNmLDhCQUE4QjtJQ3BJOUIscUJEcUk0QixFQUFBO0VBbEI5QjtJQXNCRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDhCQ3pKa0I7RUQwSmxCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYix3QkFBd0IsRUFBQTs7QUFJMUIsZ0JBQUE7QUFDQTtFQUNFLDRHQUE2RjtFQUM3RixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixjQUFjLEVBQUE7RUFKaEI7SUFPTSxZQ3ZMaUI7SUR3TGpCLFdBQVcsRUFBQTs7QUFJakI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWMsRUFBQTtFQUhoQjtJQU1NLFlDbE1pQjtJRG1NakIsV0FBVyxFQUFBOztBQUlqQixtQkFBQTtBQUNBO0VBQ0UsdUJDek1xQjtFQW1CckIsYUFBYTtFQUNiLG1CRHNMd0I7RUNyTHhCLHVCRHFMZ0M7RUFDaEMsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHVCQ2hOcUI7RURpTnJCLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVyxFQUFBOztBQUdiLHdCQUFBO0FBQ0E7RUMvTUUsYUFBYTtFQUNiLG1CRCtNd0I7RUM5TXhCLHVCRDhNZ0M7RUFDaEMsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBSWI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUNwT0UsYUFBYTtFQUNiLDhCRG9PNEI7RUNuTzVCLCtCRG1PeUM7RUFDekMsMkRBR1k7RUFDWix1QkN2UHFCO0VBeUJyQix5QkFyQmtCO0VBc0JsQixrQkQ4TmlEO0VDN05qRCxnQkQ2TnVEO0VBQ3ZELGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBYmI7SUFnQkksWUFBWTtJQ3hQZCxxQkR5UDhCLEVBQUE7RUFqQmhDO0lBcUJFLGVBQWU7SUFDZixhQUFhO0lDOVBiLHFCRCtQNEI7SUFDNUIsV0FBVyxFQUFBO0VBeEJiO0lBNEJFLGdDQ3pRa0I7SUFLbEIscUJEcVE0QixFQUFBOztBQUk5QjtFQ3JRRSxhQUFhO0VBQ2IsOEJEcVE0QjtFQ3BRNUIsMkJEb1FxQztFQUNyQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdaO0VBQ0UsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VDclNiLHFCRHNTNEI7RUFDNUIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQ3pUbUI7RUQwVG5CLFlDN1RxQjtFRDhUckIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQzNUVCxxQkQ0VDRCLEVBQUE7O0FBSTlCLFlBQUE7QUFDQTtFQUNFLHlCQ3hVbUI7RUFzQm5CLFNEbVR3QjtFQ2xUeEIsaUJEa1Q0QjtFQ2pUNUIsZ0JEaVRrQztFQUNsQyxZQzdVcUI7RUQ4VXJCLGVBQWU7RUFDZixvQ0M3VVE7RUQ4VVIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTtFQVJ0QjtJQVdJLHlCQUF5QixFQUFBOztBQUkzQjtFQUVFLGNBQWMsRUFBQTs7QUFHaEI7RUFFRSxhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdsQixnQkFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVLEVBQUE7RUFaWjtJQWVJLGNDalhpQjtJRGtYakIsVUFBVSxFQUFBOztBQUlkO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEIsd0JBQUE7QUFDQTtFQUNFLGlCQ2pZcUI7RUF5QnJCLHlCQXJCa0I7RUFzQmxCLGlCRHdXZ0Q7RUN2V2hELCtCRHVXcUU7RUFDckUsYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYSxFQUFBO0VBWmY7SUFlSSxpQkMvWW1CO0lEZ1puQixjQzdZaUIsRUFBQTtFRDZYckI7SUFvQkksZUFBZSxFQUFBO0VBcEJuQjtJQXdCSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxpQkM3WnFCO0VBeUJyQiwwQkF0Qm1CO0VBdUJuQixpQkRvWWtEO0VDbllsRCxnQkRtWXdEO0VBQ3hELGNDNVptQjtFRDZabkIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUMzWmYscUJENFo0QixFQUFBO0VBVDlCO0lBWUksbUJDcGFnQjtJQUtsQixxQkRnYThCLEVBQUE7O0FBSWhDO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsWUNqYnFCO0VEa2JyQixjQUFjO0VBQ2QsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UseUJBQXdCO0VBQ3hCLHlCQzVicUI7RUQ2YnJCLFlBQVc7RUFDWCxPQUFNO0VBQ04sWUFBVztFQUNYLGVBQWM7RUFDZCxNQUFLO0VBQ0wsV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFHYjtFQW5jQTtJQ1dFLGFBQWE7SUFDYiw4QkR5YjRCO0lDeGI1Qix3QkR3YmtDO0lBQ2xDLG9DQ3RjUTtJRHVjUiw0RUFJYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLDRCQUE0QixFQUFBO0VBN1o5QjtJQ3ZDRSxhQUFhO0lBQ2Isa0NEdWNnQztJQ3RjaEMsd0JEc2NxQztJQUNyQyxrRUFFc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQTtFQWxSYjtJQXNSRSxVQUFVLEVBQUE7RUEvUVo7SUFtUkUsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBbFVsQjtJQXNVRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixVQUFTLEVBQUE7RUFySVg7SUF5SUUsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBamVqQjtJQXFlRSxvQkFBb0I7SUFDcEIsVUFBVSxFQUFBO0VBbmJaO0lBdWJFLFVBQVU7SUFDVixvQkFBb0IsRUFBQTtFQW5WdEI7SUF1VkUsV0FBVyxFQUFBLEVBQ1o7O0FBSUQ7RUFoZEE7SUN2Q0UsYUFBYTtJQUNiLGtDRHdma0M7SUN2ZmxDLHdCRHVmd0M7SUFDdEMsc0ZBR3NCO0lBQ3RCLG9CQUFvQjtJQUNwQixrQkFBa0IsRUFBQTtFQTVmdEI7SUFnZ0JJLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGlCQUFpQixFQUFBO0VBN1hyQjtJQWlZSSxpQkFBaUIsRUFBQTtFQTdYckI7SUFpWUksaUJBQWlCLEVBQUE7RUFqYXJCO0lBcWFJLGlCQUFpQixFQUFBO0VBaFRyQjtJQW9USSxXQUFXLEVBQUE7RUF4SGY7SUE0SEksZ0JBQWdCLEVBQUEsRUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJtZWRpYS1xdWVyaWVzXFxcIjtcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMWZyIDVmciwgbm9uZSk7XFxuICBmb250LWZhbWlseTogJGZvbnQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcImltYWdlIGltYWdlXFxcIlxcbiAgICBcXFwiYXNpZGUgbWFpblxcXCI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XFxufVxcblxcbmgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdWxwaHVyIFBvaW50XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIG1hcmdpbjogMCU7XFxuICBwYWRkaW5nOiAwLjUlIDAuNyUgMCU7XFxuICB3aWR0aDogNzAlO1xcbiAgZ3JpZC1hcmVhOiBmcmVzaDtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6ICM4NEM4QTQ7XFxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xcbn1cXG5cXG5oMyB7XFxuICBjb2xvcjogJGJvcmRlci1mb250O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxNyU7XFxuICBtYXJnaW46IDVweCA1cHggMTBweCAwcHg7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC44cyBlYXNlKVxcbn1cXG5cXG5oNCB7XFxuICBjb2xvcjogJGJvcmRlci1mb250O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4IDFweCA0cHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShyb3csIG5vbmUpO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbnNwYW4ge1xcbiAgY29sb3I6ICRiYWNrZ3JvdW5kO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlYWRlci1hcHBsZS1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjElO1xcbiAgd2lkdGg6IC43ZW07XFxufVxcblxcbiNzZWFyY2gge1xcbiAgQGluY2x1ZGUgYm9yZGVyU3R5bGluZyguMmVtIG91dHNldCAkYmFja2dyb3VuZCwgMTVweCAxNXB4IDE1cHggMTVweCwgMHB4IDBweCA3cHggMHB4ICM0NzVkNzQpO1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBjZW50ZXIpO1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgbWFyZ2luOiAxLjIlIDAuNSUgMS4yJSAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBzZWFyY2g7XFxufVxcblxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZGNjYTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoIGxpbmVhcixsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiKDI1NSwgMjU1LCAyNTUpKSwgY29sb3Itc3RvcCgxLCByZ2IoMjI1LDIyNSwyMjUpKSk7XFxuICBAaW5jbHVkZSBib3JkZXJTdHlsaW5nKG5vbmUsIDEwcHggMHB4IDBweCAxMHB4LCBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NCk7XFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBmb250LWZhbWlseTogJGZvbnQ7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjhzIGVhc2UpO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICAvLyAmOmhvdmVyIHtcXG4gIC8vICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4ICR0ZXh0LWJhY2tncm91bmQ7XFxuICAvLyAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjhzIGVhc2UpO1xcbiAgLy8gfVxcblxcbiAgLy8gJjpmb2N1cyB7XFxuICAvLyAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgLy8gICBmb250LXNpemU6IDBweDtcXG4gIC8vIH1cXG5cXG4gIC8vICY6OnBsYWNlaG9sZGVyIHtcXG4gIC8vICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgLy8gICBmb250LXNpemU6IDIwcHg7XFxuICAvLyAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLy8gICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIC8vIH1cXG5cXG4gIC8vICY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIC8vICAgZm9udC1zaXplOiAwcHg7XFxuICAvLyAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjhzIGVhc2UpO1xcbiAgLy8gfVxcbn1cXG5cXG4uc2VhcmNoLWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICRiYWNrZ3JvdW5kO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6JHByaW1hcnktY29sb3Igbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC40cyBlYXNlKTtcXG4gIHdpZHRoOiAxNSU7XFxuXFxuICAmOmhvdmVyIHtcXG4gIGNvbG9yOiAkYmFja2dyb3VuZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjRzIGVhc2UpO1xcbn1cXG5cXG4gIGltZyB7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogMnB4IDBweDtcXG59XFxufVxcblxcbi5zYXZlZC1yZWNpcGVzLWJ0biB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG59XFxuXFxuLnNhdmVkLWluZ3JlZGllbnRzLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICRiYWNrZ3JvdW5kO1xcbiAgZ3JpZC1hcmVhOiBidXR0b24yO1xcbn1cXG5cXG4uaW5nLXBhbi1idG4ge1xcbiAgbWFyZ2luOiAxJSAwJTtcXG4gIHBhZGRpbmc6IDFweCA2cHggNXB4IDBweDtcXG4gIC8vIEBleHRlbmQgLm5hdi1idG47XFxufVxcblxcbi8qIEJBTk5FUiBJTUFHRSovXFxuLmJhbm5lci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNSksIHJnYmEoMCwwLDAsLjUpKSx1cmwoXFxcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXFxcIik7XFxuICBncmlkLWFyZWE6IGltYWdlO1xcbiAgaGVpZ2h0OiA5ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDElO1xcblxcbiAgICBoMSB7XFxuICAgICAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tdG9wOiAzJTtcXG5cXG4gICAgaDEge1xcbiAgICAgIGNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbi8qIEZJTFRFUiBTSURFQkFSICovXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KHJvdywgY2VudGVyKTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG5saSB7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuLyogUkVDSVBFIENBUkQgU0VDVElPTiAqL1xcbm1haW4ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBjZW50ZXIpO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAxZW07XFxuICBcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTMlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMmZyIDFmciwgMWZyIDFmciAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICBcXFwiZm9vZCBmb29kXFxcIlxcbiAgXFxcInRhZ3MgYXBwbGVcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcoMnB4IHNvbGlkICRiYWNrZ3JvdW5kLCA3cHgsIG5vbmUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxOGVtO1xcbiAgbWFyZ2luOiAyJTtcXG4gIHBhZGRpbmc6IDEuNSU7XFxuICB3aWR0aDogMTVlbTtcXG4gIG1hcmdpbjogMWVtO1xcblxcbiAgJjpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC44cyBlYXNlKTtcXG4gIH1cXG5cXG4gICY6aG92ZXIgLnRleHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjVzIGVhc2UpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiAgJjpob3ZlciBoMyB7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggJGJhY2tncm91bmQ7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC44cyBlYXNlKTtcXG59XFxufVxcblxcbi50YWdzIHtcXG4gIEBpbmNsdWRlIGdyaWREaXNwbGF5KDFmciAxZnIsIDFmciAxZnIpO1xcbiAgZ3JpZC1hcmVhOiB0YWdzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5hcHBsZS1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLWFyZWE6IGFwcGxlO1xcbn1cXG5cXG4uY2FyZC1hcHBsZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM2VtO1xcbiAgd2lkdGg6IDNlbTtcXG59XFxuXFxuLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC44cyBlYXNlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1waG90by1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBmb29kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogJGJvcmRlci1mb250O1xcbiAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAwJTtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjVzIGVhc2UpO1xcbn1cXG5cXG5cXG4vKiBCVVRUT05TICovXFxuLmZpbHRlci1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1mb250O1xcbiAgQGluY2x1ZGUgYm9yZGVyU3R5bGluZygwLCAzJSwgbm9uZSk7XFxuICBjb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMSUgMiUgMSUgMiU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRDOEE0O1xcbiAgICB9XFxufVxcblxcbiAgLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuIHtcXG4gICAgQGV4dGVuZCAuZmlsdGVyLWJ0bjtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICB9XFxuXFxuICAuc2hvdy1hbGwtYnRuIHtcXG4gICAgQGV4dGVuZCAuZmlsdGVyLWJ0bjtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxuICB9XFxuXFxuLyogUEFOVFJZIExJU1QgKi9cXG4uZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNjUlO1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDclO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE4JTtcXG4gIHotaW5kZXg6IDM7XFxuXFxuICBoMiB7XFxuICAgIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICAgIG1hcmdpbjogMCU7XFxuICB9XFxufVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogUkVDSVBFIElOU1RSVUNUSU9OUyAqL1xcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBAaW5jbHVkZSBib3JkZXJTdHlsaW5nKDNweCBzb2xpZCAkYmFja2dyb3VuZCwgMSUsIDFweCAxcHggMTE1cHggYmxhY2spO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDtcXG5cXG4gIGg0IHtcXG4gICAgYmFja2dyb3VuZDogJHRleHQtYmFja2dyb3VuZDtcXG4gICAgY29sb3I6ICRib3JkZXItZm9udDtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICB9XFxuXFxuICBvbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICB9XFxufVxcblxcbiNleGl0LXJlY2lwZS1idG4ge1xcbiAgYmFja2dyb3VuZDogJHRleHQtYmFja2dyb3VuZDtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcoMnB4IGRvdWJsZSAkYm9yZGVyLWZvbnQsIDIlLCBub25lKTtcXG4gIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAtNCUgLTMlIDIlIC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjNzIGVhc2UpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4zcyBlYXNlKTtcXG4gIH1cXG59XFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjaztcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgZmlsdGVyOmFscGhhKG9wYWNpdHk9NTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjokcHJpbWFyeS1jb2xvcjtcXG4gIGhlaWdodDoxMDAlO1xcbiAgbGVmdDowO1xcbiAgb3BhY2l0eTowLjU7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowO1xcbiAgd2lkdGg6MTAwJTtcXG4gIHotaW5kZXg6MTAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuYm9keSB7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgxZnIgMWZyLCBub25lKTtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiYXNpZGUgaW1hZ2VcXFwiXFxuICAgIFxcXCJhc2lkZSBpbWFnZVxcXCJcXG4gICAgXFxcIm1haW4gbWFpblxcXCI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSg0ZnIgMWZyIDFmcixub25lKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImZyZXNoIGJ1dHRvbiBidXR0b24yXFxcIlxcbiAgXFxcInNlYXJjaCBzZWFyY2ggc2VhcmNoXFxcIjtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbmFzaWRlIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi53cmFwIHtcXG4gIGhlaWdodDogNGVtO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmluZy1wYW4tYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgd2lkdGg6NTAlO1xcbn1cXG5cXG4uZHJvcC1tZW51IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBtYXJnaW4tdG9wOiAyNSU7XFxuICB9XFxuXFxuaDEge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJhbm5lci1pbWFnZSB7XFxuICBoZWlnaHQ6IDdlbTtcXG59XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDFmciAxZnIgMWZyLCBub25lKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJmcmVzaCBmcmVzaCBmcmVzaFxcXCIgXFxuICAgIFxcXCJub25lIGJ1dHRvbiBidXR0b24yXFxcIlxcbiAgICBcXFwic2VhcmNoIHNlYXJjaCBzZWFyY2hcXFwiO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LXNpemU6IDIuOGVtO1xcbiAgfVxcblxcbiAgLm15LXBhbnRyeS1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDk2JTtcXG4gIH1cXG5cXG4gIC5zYXZlZC1yZWNpcGVzLWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogNTclO1xcbiAgfVxcblxcbiAgLnNhdmVkLWluZ3JlZGllbnRzLWJ0biB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi1idG4ge1xcbiAgICBhbGlnbi1pdGVtczogbm9uZTtcXG4gIH1cXG5cXG4gIC5yZWNpcGUtY2FyZCB7XFxuICAgIHdpZHRoOiAyMGVtO1xcbiAgfVxcblxcbiAgI3JlY2lwZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuIFxcbn1cIixcIiRwcmltYXJ5LWNvbG9yOiAjNUI3ODk0O1xcbiR0ZXh0LWJhY2tncm91bmQ6IHdoaXRlO1xcbiRmb250OiBcXFwiUXVpY2tzYW5kXFxcIixcXG5zYW5zLXNlcmlmO1xcbiRib3JkZXItZm9udDogIzM1OTU2NztcXG4kYmFja2dyb3VuZDogI0M0RUI2NztcXG5cXG5cXG5cXG5AbWl4aW4gdHJhbnNpdGlvbigkdmFsdWUpIHtcXG4gIHRyYW5zaXRpb246ICR2YWx1ZTtcXG59XFxuXFxuQG1peGluIGdyaWREaXNwbGF5KCRjb2x1bW5zLCAkcm93cykge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbHVtbnM7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6ICRyb3dzO1xcbn1cXG5cXG5AbWl4aW4gZmxleERpc3BsYXkoJGRpcmVjdGlvbiwgJGp1c3RpZnkpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxufVxcblxcbkBtaXhpbiBib3JkZXJTdHlsaW5nKCRib3JkZXIsICRyYWRpdXMsICRzaGFkb3cpIHtcXG4gIGJvcmRlcjogJGJvcmRlcjtcXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XFxuICBib3gtc2hhZG93OiAkc2hhZG93O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgZ2V0RGF0YSA9IGRhdGFzZXQgPT4ge1xuICBsZXQgZGF0YSA9IFtdO1xuICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS8ke2RhdGFzZXR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHJlc3VsdC5mb3JFYWNoKGVhY2hSZXN1bHQgPT4ge1xuICAgICAgICBkYXRhLnB1c2goZWFjaFJlc3VsdClcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG4gIHJldHVybiBkYXRhO1xufSBcblxuLy8gZXhwb3J0IGNvbnN0IHNlbmREYXRhID0gZGF0YVRvU2VuZCA9PiB7XG4vLyAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbi8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKVxuLy8gICB9O1xuXG4vLyAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2Vyc1wiLCByZXF1ZXN0T3B0aW9ucylcbi8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuLy8gICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbi8vICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG5leHBvcnQgZGVmYXVsdCBnZXREYXRhOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vQVBJQ2FsbHMnO1xuXG5jb25zdCBhcGlDYWxsID0gJ2luZ3JlZGllbnRzJztcblxuXG5sZXQgaW5ncmVkaWVudHNEYXRhO1xuXG5pbmdyZWRpZW50c0RhdGEgPSBnZXREYXRhKGFwaUNhbGwpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmdyZWRpZW50c0RhdGE7IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vQVBJQ2FsbHMnO1xuXG5jb25zdCBhcGlDYWxsID0gJ3JlY2lwZXMnO1xuXG5sZXQgcmVjaXBlRGF0YTtcblxucmVjaXBlRGF0YSA9IGdldERhdGEoYXBpQ2FsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlY2lwZURhdGE7IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vQVBJQ2FsbHMnO1xuXG5jb25zdCBhcGlDYWxsID0gJ3VzZXJzJztcbmxldCB1c2VycztcblxudXNlcnMgPSBnZXREYXRhKGFwaUNhbGwpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyczsiLCJpbXBvcnQgdXNlcnMgZnJvbSBcIi4vZGF0YS91c2Vycy1kYXRhXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuXG5sZXQgZG9tVXBkYXRlcyA9IHtcblxuICB3ZWxjb21lVXNlcihjdXJyZW50VXNlcikge1xuICAgIGxldCBmaXJzdE5hbWUgPSBjdXJyZW50VXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXTtcbiAgICBsZXQgd2VsY29tZU1zZyA9IGBcbiAgICA8YXJ0aWNsZSBjbGFzcz1cIndlbGNvbWUtbXNnXCI+XG4gICAgICA8aDE+V2VsY29tZSAke2ZpcnN0TmFtZX0hPC9oMT5cbiAgICA8L2FydGljbGU+YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbm5lci1pbWFnZVwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsXG4gICAgICB3ZWxjb21lTXNnKTtcbiAgfSxcbiAgXG4gIC8vIENyZWF0ZSBDYXJkcyBhbmQgVGFnIExpc3Qgb25sb2FkIC8vIFxuICBjcmVhdGVDYXJkVGFncyh0YWdzKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgbGV0IG5ld1RhZyA9IGA8aDQ+JHt0YWd9PC9oND5gO1xuICAgICAgcmVzdWx0ICs9IG5ld1RhZztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGNyZWF0ZUNhcmQocmVjaXBlLCBhcHBsZURpc3BsYXllZCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbGV0IGNhcmRIdG1sID0gYFxuICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1jYXJkXCIgaWQ9JHtyZWNpcGUuaWR9PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwidGl0bGUtY29udGFpbmVyXCJcbiAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCIgbWF4bGVuZ3RoPVwiNDBcIj4ke3RoaXMuc2hvcnRlblJlY2lwZU5hbWUocmVjaXBlKX08L2gzPlxuICAgIDwvc2VjdGlvbj4gIFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FyZC1waG90by1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPSR7cmVjaXBlLmltYWdlfSBjbGFzcz1cImNhcmQtcGhvdG8tcHJldmlld1wiIGFsdD1cIiR7cmVjaXBlLm5hbWV9IHJlY2lwZVwiIHRpdGxlPVwiJHtyZWNpcGUubmFtZX0gcmVjaXBlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJDbGljayBmb3IgaW5zdHJ1Y3Rpb25zIGJhbm5lclwiPkNsaWNrIGZvciBJbnN0cnVjdGlvbnM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBhcmlhLWxhYmVsPVwiVHlwZSBvZiByZWNpcGVcIiBjbGFzcz1cInRhZ3NcIj5cbiAgICAgICR7dGhpcy5jcmVhdGVDYXJkVGFncyhyZWNpcGUudGFncyl9XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYXBwbGUtY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGFyaWEtbGFiZWw9XCJDbGljayB0byBmYXZvcml0ZSByZWNpcGVcIiBzcmM9XCIuL2ltYWdlcy8ke2FwcGxlRGlzcGxheWVkfS5wbmdcIiBhbHQ9XCJ1bmZpbGxlZCBhcHBsZSBpY29uXCIgY2xhc3M9XCJjYXJkLWFwcGxlLWljb25cIj5cbiAgICA8L3NlY3Rpb24+ICBcbiAgPC9hcnRpY2xlPmBcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gY2FyZEh0bWw7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgfSxcblxuICBjbGVhck1haW5DYXJkU2VjdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgbW9kYWwgPWBcbiAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWluc3RydWN0aW9uc1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJteS1yZWNpcGVzLWJhbm5lclwiPlxuICAgICAgPGgxPk15IFJlY2lwZXM8L2gxPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNob3ctYWxsLWJ0blwiPlNob3cgQWxsIFJlY2lwZXM8L2J1dHRvbj5cbiAgICA8L2Rpdj5gXG4gICAgXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmlubmVySFRNTCArPSBtb2RhbDtcbiAgICByZXR1cm4gbWFpbjtcbiAgfSxcbiAgXG4gIHNob3J0ZW5SZWNpcGVOYW1lKHJlY2lwZSkge1xuICAgIGxldCBzaG9ydFJlY2lwZU5hbWUgPSByZWNpcGUubmFtZTtcbiAgICBpZiAoc2hvcnRSZWNpcGVOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICBzaG9ydFJlY2lwZU5hbWUgPSBzaG9ydFJlY2lwZU5hbWUuc3Vic3RyaW5nKDAsIDQwKSArIFwiLi4uXCI7XG4gICAgfVxuICAgIHJldHVybiBzaG9ydFJlY2lwZU5hbWU7XG4gIH0sXG5cbiAgY3JlYXRlTGlzdFRhZ3ModGFncykge1xuICAgIGxldCB0YWdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWctbGlzdFwiKTtcbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGxldCB0YWdIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2VkLXRhZ1wiIGlkPVwiJHt0YWd9XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiJHt0YWd9XCI+JHt0aGlzLmNhcGl0YWxpemUodGFnKX08L2xhYmVsPjwvbGk+YDtcbiAgICAgIHRhZ0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRhZ0h0bWwpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNhcGl0YWxpemUod29yZHMpIHtcbiAgICByZXR1cm4gd29yZHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgfSxcblxuICBzaG93U2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcywgdXNlcikge1xuICAgIHRoaXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKSlcbiAgICBmb3VuZFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgdXNlci5pc0Zhdm9yaXRlZChyZWNpcGUpID8gdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgXCJhcHBsZS1sb2dvXCIpIDogdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgXCJhcHBsZS1sb2dvLW91dGxpbmVcIik7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0Q2FyZElkKCkge1xuICAgIHJldHVybiBwYXJzZUludChldmVudC50YXJnZXQuY2xvc2VzdChcIi5yZWNpcGUtY2FyZFwiKS5pZClcbiAgfSxcblxuICBmaWxsQXBwbGUoKSB7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9IFwiLi9pbWFnZXMvYXBwbGUtbG9nby5wbmdcIjtcbiAgfSxcblxuICByZW1vdmVBcHBsZSgpIHtcbiAgICBldmVudC50YXJnZXQuc3JjID0gXCIuL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCI7XG4gIH0sXG5cbiAgLy9SZWNpcGUgSW5zdHJ1Y3Rpb25zLy9cbiAgY3JlYXRlSW5zdHJ1Y3Rpb25zVGl0bGUocmVjaXBlLCBpbmdyZWRpZW50cykge1xuICAgIGxldCBmdWxsUmVjaXBlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlLWluc3RydWN0aW9uc1wiKTtcblxuICAgIGxldCByZWNpcGVUaXRsZSA9IGBcbiAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJFeGl0IHJlY2lwZVwiIGlkPVwiZXhpdC1yZWNpcGUtYnRuXCI+WDwvYnV0dG9uPlxuICAgIDxoMyBpZD1cInJlY2lwZS10aXRsZVwiPiR7cmVjaXBlLm5hbWV9PC9oMz5cbiAgICA8aDQ+SW5ncmVkaWVudHM8L2g0PlxuICAgIDxwPiR7aW5ncmVkaWVudHN9PC9wPmBcbiAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgcmVjaXBlVGl0bGUpO1xuICB9LFxuXG4gIGNyZWF0ZUluc3RydWN0aW9uc0ltYWdlKHJlY2lwZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVjaXBlLXRpdGxlXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyZWNpcGUuaW1hZ2V9KWA7XG4gIH0sXG5cbiAgY3JlYXRlSW5zdHJ1Y3Rpb25zTGlzdChpbnN0cnVjdGlvbnMpIHtcbiAgICBsZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgbGV0IGluc3RydWN0aW9uc0xpc3QgPSBcIlwiO1xuICAgIGluc3RydWN0aW9ucy5mb3JFYWNoKHN0ZXAgPT4gaW5zdHJ1Y3Rpb25zTGlzdCArPSBgPGxpPiR7c3RlcC5pbnN0cnVjdGlvbn08L2xpPmApO1xuICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxoND5JbnN0cnVjdGlvbnM8L2g0PlwiKTtcbiAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYDxvbD4ke2luc3RydWN0aW9uc0xpc3R9PC9vbD5gKTtcbiAgfSxcblxuICBjcmVhdGVFc3RpbWF0ZWRQcmljZShyZWNpcGUsIGluZ3JlZGllbnRzKSB7XG4gICAgbGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxoND5Fc3RpbWF0ZWQgQ29zdDwvaDQ+XCIpXG4gICAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8aDQ+JHtyZWNpcGUuY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KGluZ3JlZGllbnRzKX08L2g0PmApO1xuXG4gIH0sXG5cbiAgZXhpdFJlY2lwZSgpIHtcbiAgICBsZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgd2hpbGUgKGZ1bGxSZWNpcGVJbmZvLmZpcnN0Q2hpbGQgJiZcbiAgICBmdWxsUmVjaXBlSW5mby5yZW1vdmVDaGlsZChmdWxsUmVjaXBlSW5mby5maXJzdENoaWxkKSk7XG4gICAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5yZW1vdmUoKTtcbiAgfSxcblxuICAvL1NlYXJjaCBiYXIgaW5wdXQgZG9tIHVwZGF0ZXNcbiAgZGlzcGxheVNlYXJjaEVycm9yKCkge1xuICAgIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuICAgIC8vIHNldCBlcnJvciBtZXNzYWdlYXMgdGV4dFxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gbWFrZSBmaWVsZFxuICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gJ1dBVCBEQSBGVUsgWU9VIERPSU4/IT8hJztcbiAgICBjb25zdCByZXN1bHQgPSBzZWFyY2hJbnB1dC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGNsZWFyQWxsRmllbGRzKCkge1xuICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xuICAgIHRoaXMuY2xlYXJDaGVja2VkQm94ZXMoKTtcbiAgfSxcblxuICBjbGVhckZpZWxkKCkge1xuICAgIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gIH0sXG5cbiAgY2xlYXJDaGVja2VkQm94ZXMoKSB7XG4gICAgbGV0IGNoZWNrZWRCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tlZC10YWdcIik7XG4gICAgbGV0IGFycmF5Q2hlY2tlZEJveGVzID0gQXJyYXkuZnJvbShjaGVja2VkQm94ZXMpXG4gICAgYXJyYXlDaGVja2VkQm94ZXMuZm9yRWFjaChib3ggPT4ge1xuICAgICAgYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9KVxuICB9LFxuXG4gIGNyZWF0ZUFsbFJlY2lwZXMocmVjaXBlcykge1xuICAgICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGxldCBkb21SZWNpcGUgPSBcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3JlY2lwZS5pZH1gKTtcbiAgICAgIGRvbVJlY2lwZS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICB9KTtcbiAgfSxcblxuICAvL1BhbnRyeS8vXG4gIGRpc3BsYXlQYW50cnlJbmZvKHBhbnRyeSkge1xuICAgIHBhbnRyeS5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IGluZ3JlZGllbnRIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJwYW50cnktY2hlY2tib3hcIiBpZD1cIiR7aW5ncmVkaWVudC5uYW1lfVwiPlxuICAgIDxsYWJlbCBmb3I9XCIke2luZ3JlZGllbnQubmFtZX1cIj4ke2luZ3JlZGllbnQubmFtZX0sICR7aW5ncmVkaWVudC5jb3VudH08L2xhYmVsPjwvbGk+YDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFudHJ5LWxpc3RcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGluZ3JlZGllbnRIdG1sKTtcbiAgICB9KTtcbiAgfSwgXG5cbiAgZm9ybWF0TnVtYmVyKG51bWJlcikge1xuICAgIGNvbnN0IHN0cmluZ2VkTnVtID0gbnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgbGV0IGluZGV4O1xuICAgIGxldCBhZnRlclBlcmlvZDtcblxuICAgIGlmIChzdHJpbmdlZE51bS5pbmNsdWRlcygnLicpKSB7XG4gICAgICBpbmRleCA9IHN0cmluZ2VkTnVtLmluZGV4T2YoJy4nKTtcbiAgICAgIGFmdGVyUGVyaW9kID0gc3RyaW5nZWROdW0uc2xpY2UoaW5kZXggKyAxKTtcbiAgICB9XG4gICAgaWYgKGFmdGVyUGVyaW9kICYmIGFmdGVyUGVyaW9kLmxlbmd0aCA+IDIpIHtcbiAgICAgIGFmdGVyUGVyaW9kID0gYWZ0ZXJQZXJpb2QudG9GaXhlZCgyKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaW5nZWROdW0uc2xpY2UoMCwgaW5kZXggKyAxKS5jb25jYXQoYWZ0ZXJQZXJpb2QpKSB8fCBudW1iZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYXBwbGUtbG9nby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9jb29rYm9vay5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ncmVlbi1hcHBsZXMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2VhcmNoLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NlYXNvbmluZy5wbmdcIjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmdyZWRpZW50c1JlcG8ge1xuICBjb25zdHJ1Y3RvcihpbmdyZWRpZW50cykge1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgfVxuXG4gIGdldFJlY2lwZUlkQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBmb3VuZEluZ3JlZGllbnQgPSB0aGlzLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICBpZiAoaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQuaWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZvdW5kSW5ncmVkaWVudCA/IGZvdW5kSW5ncmVkaWVudC5pZCA6IDA7XG4gIH1cblxuICBnZXRSZWNpcGVOYW1lQnlJZChpZCkge1xuICAgIGNvbnN0IGZvdW5kSW5ncmVkaWVudCA9IHRoaXMuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmIChpbmdyZWRpZW50LmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmb3VuZEluZ3JlZGllbnQgPyBmb3VuZEluZ3JlZGllbnQubmFtZSA6IFwiXCI7XG4gIH1cbn1cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKHBhbnRyeURhdGEpIHtcbiAgICB0aGlzLml0ZW1zID0gcGFudHJ5RGF0YTtcbiAgICB0aGlzLmZvclJlY2lwZSA9IFtdO1xuICAgIHRoaXMuZ3JvY2VyeUxpc3QgPSBbXTtcbiAgfVxuXG4gIHRha2VTdG9jayhyZWNpcGUpIHtcbiAgICB0aGlzLmNoZWNrUGFudHJ5KHJlY2lwZSk7XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmluZ3JlZGllbnQgPT09IGluZ3JlZGllbnQuaWQgJiYgaXRlbS5hbW91bnQgPiBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkge1xuICAgICAgICAgIHRoaXMuZm9yUmVjaXBlLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkICYmIGl0ZW0uYW1vdW50IDwgaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQpIHtcbiAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goe1xuICAgICAgICAgICAgaW5ncmVkaWVudDogaXRlbS5pbmdyZWRpZW50LFxuICAgICAgICAgICAgYW1vdW50OiBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCAtIGl0ZW0uYW1vdW50XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrUGFudHJ5KHJlY2lwZSkge1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IG5ld0l0ZW1zID0gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkKTtcblxuICAgICAgaWYgKCFuZXdJdGVtcykge1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goe1xuICAgICAgICAgIGluZ3JlZGllbnQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgICAgYW1vdW50OiBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjYW5NYWtlKHJlY2lwZSkge1xuICAgIHRoaXMudGFrZVN0b2NrKHJlY2lwZSk7XG4gICAgaWYgKHRoaXMuZ3JvY2VyeUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ3JvY2VyeUxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUluZ3JlZGllbnRzKHJlY2lwZSkge1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5ncmVkaWVudC5pZCA9PT0gaXRlbS5pbmdyZWRpZW50KSB7XG4gICAgICAgICAgbGV0IG5ld0Ftb3VudCA9IGl0ZW0uYW1vdW50IC0gaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQ7XG4gICAgICAgICAgaWYgKG5ld0Ftb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaXRlbS5hbW91bnQgPSBuZXdBbW91bnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZVBvc3RCb2R5KHVzZXIsIGluZ3JlZGllbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJ1c2VySURcIjogdXNlci5pZCxcbiAgICAgIFwiaW5ncmVkaWVudElEXCI6IGluZ3JlZGllbnQuaWQsXG4gICAgICBcImluZ3JlZGllbnRNb2RpZmljYXRpb25cIjogLWluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50XG4gICAgfVxuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2lwZVJlcG8ge1xuICBjb25zdHJ1Y3RvcihyZWNpcGVzKSB7XG4gICAgdGhpcy5yZWNpcGVzID0gcmVjaXBlcy5tYXAocmVjaXBlID0+IG5ldyBSZWNpcGUocmVjaXBlKSk7XG4gIH1cblxuICByZXR1cm5BbGxUYWdzKCkge1xuICAgIGxldCB0YWdzID0gW107XG4gICAgdGhpcy5yZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIHJlY2lwZS50YWdzLmZpbHRlcih0YWcgPT4ge1xuICAgICAgICBpZiAoIXRhZ3MuaW5jbHVkZXModGFnKSkge1xuICAgICAgICAgIHRhZ3MucHVzaCh0YWcpO1xuICAgICAgICB9IFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhZ3Muc29ydCgpO1xuICB9XG5cbiAgc2VhcmNoUmVjaXBlc0J5SW5ncmVkaWVudChpbmdyZWRpZW50SWQpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKGluZ3JlZGllbnRJZCA9PT0gaW5ncmVkaWVudC5pZCAmJiAhZmlsdGVyZWRSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZS5uYW1lKSkge1xuICAgICAgICAgIGZpbHRlcmVkUmVjaXBlcy5wdXNoKHJlY2lwZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUmVjaXBlcztcbiAgfVxuXG4gIGZpbHRlckxpc3RCeVRhZyhsaXN0LCB0YWcpIHtcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZykpO1xuICB9XG5cbiAgZmlsdGVyTGlzdEJ5SW5ncmVkaWVudChsaXN0LCBpbmdyZWRpZW50SWQpIHsgICAgICAgIFxuICAgIHJldHVybiBsaXN0LnJlZHVjZSgoZmlsdGVyZWQsIHJlY2lwZSkgPT4ge1xuICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChpbmdyZWRpZW50LmlkID09PSBpbmdyZWRpZW50SWQpIHtcbiAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHJlY2lwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZmlsdGVyTGlzdEJ5TmFtZShsaXN0LCBuYW1lKSB7XG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUubmFtZS5pbmNsdWRlcyhuYW1lKSk7XG4gIH1cblxuXG4gIGZpbHRlckxpc3RCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IGlkKTtcbiAgfVxufVxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNpcGUge1xuICBjb25zdHJ1Y3RvcihyZWNpcGUpIHtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMuaW1hZ2UgPSByZWNpcGUuaW1hZ2U7XG4gICAgdGhpcy50YWdzID0gcmVjaXBlLnRhZ3M7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50cztcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVJbmdyZWRpZW50c0Nvc3QoaW5ncmVkaWVudERhdGEpIHtcbiAgICBjb25zdCBjb3N0SW5DZW50cyA9IHRoaXMuaW5ncmVkaWVudHMucmVkdWNlKCh0b3RhbENvc3QsIHJlY2lwZUluZ3JlZGllbnQpID0+IHtcbiAgICAgIGluZ3JlZGllbnREYXRhLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChpbmdyZWRpZW50LmlkID09PSByZWNpcGVJbmdyZWRpZW50LmlkKSB7XG4gICAgICAgICAgbGV0IGluZ3JlZGllbnRUb3RhbCA9IGluZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMgKiByZWNpcGVJbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudDtcbiAgICAgICAgICB0b3RhbENvc3QgKz0gaW5ncmVkaWVudFRvdGFsO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRvdGFsQ29zdDtcbiAgICB9LCAwKTtcbiAgICBsZXQgY29zdCA9IGNvc3RJbkNlbnRzICogLjAxO1xuICAgIHJldHVybiBjb3N0LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge3N0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIlVTRFwifSk7XG4gIH1cblxuICByZXR1cm5JbnN0cnVjdGlvbnMocmVjaXBlKSB7XG4gICAgcmV0dXJuIHJlY2lwZS5pbnN0cnVjdGlvbnMubWFwKHN0ZXAgPT4gc3RlcC5pbnN0cnVjdGlvbik7ICAgIFxuICB9XG59XG5cbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCB1c2VycyBmcm9tICcuL2RhdGEvdXNlcnMtZGF0YS5qcyc7XG5pbXBvcnQgcmVjaXBlRGF0YSBmcm9tICAnLi9kYXRhL3JlY2lwZS1kYXRhJztcbmltcG9ydCBpbmdyZWRpZW50c0RhdGEgZnJvbSAnLi9kYXRhL2luZ3JlZGllbnQtZGF0YSc7XG5cbmltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy9hcHBsZS1sb2dvLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3NlYXJjaC5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9jb29rYm9vay5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFzb25pbmcucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZyc7XG5cbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgUmVjaXBlUmVwbyBmcm9tICcuL3JlY2lwZS1yZXBvJ1xuaW1wb3J0IEluZ3JlZGllbnRzUmVwbyBmcm9tICcuL2luZ3JlZGllbnQtcmVwbydcblxubGV0IGFsbFJlY2lwZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctYWxsLWJ0blwiKTtcbmxldCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlci1idG5cIik7XG5sZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG5sZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xubGV0IG1lbnVPcGVuID0gZmFsc2U7XG5sZXQgcGFudHJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1wYW50cnktYnRuXCIpO1xubGV0IHNhdmVkUmVjaXBlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZWQtcmVjaXBlcy1idG5cIik7XG5sZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnRuXCIpO1xubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcbmxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xubGV0IHNob3dQYW50cnlSZWNpcGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0blwiKTtcblxubGV0IHVzZXI7XG5sZXQgcmVjaXBlO1xubGV0IHJlY2lwZVJlcG87XG5sZXQgcGFudHJ5SW5mbyA9IFtdO1xubGV0IHJlY2lwZXMgPSBbXTtcbmxldCBpbmdyZWRpZW50c1JlcG87ICBcblxuY29uc3QgaW5pdGlhdGVEYXRhID0gKCkgPT4ge1xuICB1c2VyID0gbmV3IFVzZXIodXNlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXNlcnMubGVuZ3RoKV0pO1xuICByZWNpcGVSZXBvID0gbmV3IFJlY2lwZVJlcG8ocmVjaXBlRGF0YSk7XG4gIGluZ3JlZGllbnRzUmVwbyA9IG5ldyBJbmdyZWRpZW50c1JlcG8oaW5ncmVkaWVudHNEYXRhKTtcbiAgY3JlYXRlQ2FyZHMoKTtcbiAgZGlzcGxheVRhZ0xpc3QoKTtcbiAgZG9tVXBkYXRlcy53ZWxjb21lVXNlcih1c2VyKVxuICBmaW5kUGFudHJ5SW5mbygpO1xuICBzaG93QWxsUmVjaXBlcyhyZWNpcGVzKVxufVxuXG4vLyBDUkVBVEUgUkVDSVBFIENBUkRTXG5mdW5jdGlvbiBjcmVhdGVDYXJkcygpIHsgXG4gIGRvbVVwZGF0ZXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKTtcbiAgZG9tVXBkYXRlcy5zaG93U2VsZWN0ZWRSZWNpcGVzKHJlY2lwZVJlcG8ucmVjaXBlcywgdXNlcik7XG5cbiAgLy8gcmVjaXBlUmVwby5yZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHsgICAgXG4gIC8vICAgICB1c2VyLmlzRmF2b3JpdGVkKHJlY2lwZSkgPyBjcmVhdGVDYXJkKHJlY2lwZSwgXCJhcHBsZS1sb2dvXCIpIDogY3JlYXRlQ2FyZChyZWNpcGUsIFwiYXBwbGUtbG9nby1vdXRsaW5lXCIpO1xuXG59XG5cbi8vIEZJTFRFUiBCWSBSRUNJUEUgVEFHU1xuZnVuY3Rpb24gZGlzcGxheVRhZ0xpc3QoKSB7XG4gIGxldCB0YWdzID0gcmVjaXBlUmVwby5yZXR1cm5BbGxUYWdzKClcbiAgZG9tVXBkYXRlcy5jcmVhdGVMaXN0VGFncyh0YWdzKTtcbn1cblxuZnVuY3Rpb24gZmluZENoZWNrZWRCb3hlcygpIHtcbiAgY29uc3QgdGFnQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tlZC10YWdcIik7XG4gIGNvbnN0IGNoZWNrYm94SW5mbyA9IEFycmF5LmZyb20odGFnQ2hlY2tib3hlcylcbiAgY29uc3Qgc2VsZWN0ZWRUYWdzID0gY2hlY2tib3hJbmZvLmZpbHRlcihib3ggPT4ge1xuICAgIHJldHVybiBib3guY2hlY2tlZDtcbiAgfSlcbiAgY29uc3Qgc2VsZWN0ZWRUYWdOYW1lcyA9IHNlbGVjdGVkVGFncy5tYXAodGFnID0+IHRhZy5pZCk7XG4gIGZpbmRUYWdnZWRSZWNpcGVzKHNlbGVjdGVkVGFnTmFtZXMpO1xufVxuXG5jb25zdCBmaW5kVGFnZ2VkUmVjaXBlcyA9IHNlbGVjdGVkID0+IHtcbiAgY29uc3QgZmlsdGVyZWRSZXN1bHRzID0gW107XG4gIHNlbGVjdGVkLmZvckVhY2godGFnID0+IHtcbiAgICBjb25zdCBmb3VuZFJlY2lwZSA9IHJlY2lwZVJlcG8uZmlsdGVyTGlzdEJ5VGFnKHJlY2lwZVJlcG8ucmVjaXBlcywgdGFnKTtcbiAgICBmb3VuZFJlY2lwZS5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBjb25zdCB0YWdNYXRjaCA9IGZpbHRlcmVkUmVzdWx0cy5maW5kKHJlc3VsdCA9PiByZWNpcGUuaWQgPT09IHJlc3VsdC5pZCk7XG4gICAgICBpZiAoIXRhZ01hdGNoKSB7XG4gICAgICAgIGZpbHRlcmVkUmVzdWx0cy5wdXNoKHJlY2lwZSlcbiAgICAgIH1cbiAgICB9KVxuICB9KSAgIFxuICBpZiAoZmlsdGVyZWRSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICBkb21VcGRhdGVzLnNob3dTZWxlY3RlZFJlY2lwZXMoZmlsdGVyZWRSZXN1bHRzLCB1c2VyKTtcbiAgfVxufVxuXG4vLyBGQVZPUklURSBSRUNJUEUgRlVOQ1RJT05BTElUWVxuZnVuY3Rpb24gYWxsQ2xpY2tzSW5NYWluKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcImNhcmQtYXBwbGUtaWNvblwiKSB7XG4gICAgYWRkVG9NeVJlY2lwZXMoKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZXhpdC1yZWNpcGUtYnRuXCIpIHtcbiAgICBkb21VcGRhdGVzLmV4aXRSZWNpcGUoKTtcbiAgfSBlbHNlIGlmIChpc0Rlc2NlbmRhbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucmVjaXBlLWNhcmRcIiksIGV2ZW50LnRhcmdldCkpIHtcbiAgICBvcGVuUmVjaXBlSW5mbyhldmVudCk7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9TYXZlZERvbSA9IHJlY2lwZSA9PiB7XG4gIGRvbVVwZGF0ZXMuZmlsbEFwcGxlKCk7XG4gIHVzZXIuc2F2ZVJlY2lwZSh1c2VyLmZhdm9yaXRlUmVjaXBlcywgcmVjaXBlKTtcbn1cblxuY29uc3QgcmVtb3ZlRnJvbVNhdmVkRG9tID0gcmVjaXBlID0+IHtcbiAgYWxlcnQoJ1lvdSBoYXZlIHJlbW92ZWQgYSByZWNpcGUgZnJvbSBNeSBSZWNpcGVzIScpO1xuICBkb21VcGRhdGVzLnJlbW92ZUFwcGxlKCk7XG4gIHVzZXIucmVtb3ZlUmVjaXBlKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCByZWNpcGUpO1xuICBjcmVhdGVDYXJkcygpO1xuICBzaG93V2VsY29tZUJhbm5lcigpO1xufVxuXG5jb25zdCBhZGRUb015UmVjaXBlcyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZElkID0gZG9tVXBkYXRlcy5nZXRDYXJkSWQoKTtcbiAgY29uc3QgcmVjaXBlID0gcmVjaXBlUmVwby5maWx0ZXJMaXN0QnlJZChjYXJkSWQpO1xuXG4gIGlmICghdXNlci5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgIGFkZFRvU2F2ZWREb20ocmVjaXBlKTtcbiAgfSBlbHNlIGlmICh1c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgcmVtb3ZlRnJvbVNhdmVkRG9tKHJlY2lwZSk7XG4gIH0gXG59XG5cbmZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCBub2RlID0gY2hpbGQ7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG93U2F2ZWRSZWNpcGVzKCkge1xuICBjb25zb2xlLmxvZyhzYXZlZFJlY2lwZXNCdG4pXG4gIHVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCA+IDAgPyAoXG4gICAgZG9tVXBkYXRlcy5zaG93U2VsZWN0ZWRSZWNpcGVzKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCB1c2VyKSwgXG4gICAgc2hvd015UmVjaXBlc0Jhbm5lcigpXG4gICApIDogY3JlYXRlQ2FyZHMoKTtcbn1cblxuLy8gQ1JFQVRFIFJFQ0lQRSBJTlNUUlVDVElPTlNcbmNvbnN0IG9wZW5SZWNpcGVJbmZvID0gZXZlbnQgPT4geyBcbiAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7IFxuICBjb25zdCByZWNpcGVJZCA9IHBhcnNlSW50KGV2ZW50LnBhdGguZmluZChlID0+IGUuaWQpLmlkKTsgICAgXG4gIGNvbnN0IHJlY2lwZSA9IHJlY2lwZVJlcG8uZmlsdGVyTGlzdEJ5SWQocmVjaXBlSWQpOyAgXG4gIGV4cGFuZFJlY2lwZUNhcmQocmVjaXBlKTsgIFxufVxuXG5jb25zdCBnZW5lcmF0ZUluZ3JlZGllbnRzID0gcmVjaXBlID0+IHsgXG4gIHJldHVybiByZWNpcGUuaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBpbmdyZWRpZW50c1JlcG8uZ2V0UmVjaXBlTmFtZUJ5SWQoaW5ncmVkaWVudC5pZCk7XG4gICAgcmV0dXJuIGAke2RvbVVwZGF0ZXMuY2FwaXRhbGl6ZShuYW1lKX0gKCR7ZG9tVXBkYXRlcy5mb3JtYXROdW1iZXIoaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQpfSAke2luZ3JlZGllbnQucXVhbnRpdHkudW5pdH0pYDtcbiAgfSkuam9pbignLCAnKTtcbn1cblxuY29uc3QgZXhwYW5kUmVjaXBlQ2FyZCA9IHJlY2lwZSA9PiB7ICBcbiAgbGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zXCIpO1xuICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLCBcIjxzZWN0aW9uIGlkPSdvdmVybGF5Jz48L3NlY3Rpb24+XCIpO1xuICBkb21VcGRhdGVzLmNyZWF0ZUluc3RydWN0aW9uc1RpdGxlKHJlY2lwZSwgZ2VuZXJhdGVJbmdyZWRpZW50cyhyZWNpcGUpKTtcbiAgZG9tVXBkYXRlcy5jcmVhdGVJbnN0cnVjdGlvbnNJbWFnZShyZWNpcGUpO1xuICBkb21VcGRhdGVzLmNyZWF0ZUluc3RydWN0aW9uc0xpc3QocmVjaXBlLmluc3RydWN0aW9ucyk7XG4gIGRvbVVwZGF0ZXMuY3JlYXRlRXN0aW1hdGVkUHJpY2UocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpO1xuICBmdWxsUmVjaXBlSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjsgXG59XG5cbi8vIFRPR0dMRSBESVNQTEFZUyAvLyBcbmZ1bmN0aW9uIHNob3dNeVJlY2lwZXNCYW5uZXIoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXJlY2lwZXMtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIHNob3dXZWxjb21lQmFubmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWUtbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1yZWNpcGVzLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbi8vIFNFQVJDSCBSRUNJUEVTXG5jb25zdCBzZWFyY2hSZWNpcGVzID0gKCkgPT4ge1xuICBsZXQgaW5wdXQgPSBzZWFyY2hJbnB1dC52YWx1ZTsgIFxuXG4gIGlucHV0ID0gaW5wdXQudHJpbSgpO1xuICBpbnB1dCA9IGRvbVVwZGF0ZXMuY2FwaXRhbGl6ZShpbnB1dCk7XG4gIHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgPyAoXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5U2VhcmNoRXJyb3IoKSxcbiAgICBkb21VcGRhdGVzLmNsZWFyRmllbGQoKVxuICApIDogZG9tVXBkYXRlcy5zaG93U2VsZWN0ZWRSZWNpcGVzKGZpbmRSZWNpcGVNYXRjaGVzKGlucHV0KSwgdXNlcik7XG59XG5cbmNvbnN0IGZpbmRSZWNpcGVNYXRjaGVzID0gaW5wdXQgPT4ge1xuICBsZXQgbmFtZU1hdGNoZXM7XG4gIGxldCBpZE1hdGNoZXM7XG4gIGxldCBpbmdyZWRpZW50SWQ7XG4gIGxldCByZWNpcGVNYXRjaGVzO1xuXG4gIGluZ3JlZGllbnRJZCA9IGluZ3JlZGllbnRzUmVwby5nZXRSZWNpcGVJZEJ5TmFtZShpbnB1dCk7XG4gIG5hbWVNYXRjaGVzID0gcmVjaXBlUmVwby5maWx0ZXJMaXN0QnlOYW1lKHJlY2lwZVJlcG8ucmVjaXBlcywgaW5wdXQpO1xuICBpZE1hdGNoZXMgPSByZWNpcGVSZXBvLmZpbHRlckxpc3RCeUluZ3JlZGllbnQocmVjaXBlUmVwby5yZWNpcGVzLCBpbmdyZWRpZW50SWQpO1xuICByZWNpcGVNYXRjaGVzID0gWy4uLm5hbWVNYXRjaGVzXTtcbiAgaWRNYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgIGNvbnN0IGlzUmVjaXBlRm91bmQgPSByZWNpcGVNYXRjaGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gbWF0Y2guaWQpO1xuICAgIGlmICghaXNSZWNpcGVGb3VuZCkge1xuICAgICAgcmVjaXBlTWF0Y2hlcyA9IFsuLi5yZWNpcGVNYXRjaGVzLCBtYXRjaF07XG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVjaXBlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gcHJlc3NFbnRlclNlYXJjaChldmVudCkgeyBcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2VhcmNoUmVjaXBlcygpO1xuICBkb21VcGRhdGVzLmNsZWFyQWxsRmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7ICBcbiAgdmFyIG1lbnVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1tZW51XCIpO1xuICBtZW51T3BlbiA9ICFtZW51T3BlbjtcbiAgaWYgKG1lbnVPcGVuKSB7XG4gICAgbWVudURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0gZWxzZSB7XG4gICAgbWVudURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93QWxsUmVjaXBlcygpIHtcbiAgY3JlYXRlQ2FyZHMoKTtcbiAgc2hvd1dlbGNvbWVCYW5uZXIoKTtcbn1cblxuLy8gQ1JFQVRFIEFORCBVU0UgUEFOVFJZIFxuXG5mdW5jdGlvbiBmaW5kUGFudHJ5SW5mbygpIHsgICBcbiAgbGV0IGluZ3JlZGllbnRSZXBvID0gbmV3IEluZ3JlZGllbnRzUmVwbyhpbmdyZWRpZW50c0RhdGEpO1xuICBsZXQgcGFudHJ5SW5mbyA9IHVzZXIucGFudHJ5Lml0ZW1zLnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgbGV0IG91dHB1dE9iamVjdCA9IHtcbiAgICAgIG5hbWU6IGluZ3JlZGllbnRSZXBvLmdldFJlY2lwZU5hbWVCeUlkKGluZ3JlZGllbnQuaW5ncmVkaWVudCksXG4gICAgICBjb3VudDogaW5ncmVkaWVudC5hbW91bnRcbiAgICB9XG4gICAgYWNjLnB1c2gob3V0cHV0T2JqZWN0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheVBhbnRyeUluZm8ocGFudHJ5SW5mby5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSk7IFxufVxuXG5mdW5jdGlvbiBmaW5kQ2hlY2tlZFBhbnRyeUJveGVzKCkge1xuICBsZXQgcGFudHJ5Q2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFudHJ5LWNoZWNrYm94XCIpO1xuICBsZXQgcGFudHJ5Q2hlY2tib3hJbmZvID0gQXJyYXkuZnJvbShwYW50cnlDaGVja2JveGVzKVxuICBsZXQgc2VsZWN0ZWRJbmdyZWRpZW50cyA9IHBhbnRyeUNoZWNrYm94SW5mby5maWx0ZXIoYm94ID0+IHtcbiAgICByZXR1cm4gYm94LmNoZWNrZWQ7XG4gIH0pXG4gIHNob3dBbGxSZWNpcGVzKCk7XG4gIGlmIChzZWxlY3RlZEluZ3JlZGllbnRzLmxlbmd0aCA+IDApIHtcbiAgICBmaW5kUmVjaXBlc1dpdGhDaGVja2VkSW5ncmVkaWVudHMoc2VsZWN0ZWRJbmdyZWRpZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFJlY2lwZXNXaXRoQ2hlY2tlZEluZ3JlZGllbnRzKHNlbGVjdGVkKSB7XG4gIGxldCByZWNpcGVDaGVja2VyID0gKGFyciwgdGFyZ2V0KSA9PiB0YXJnZXQuZXZlcnkodiA9PiBhcnIuaW5jbHVkZXModikpOyBcbiAgbGV0IGluZ3JlZGllbnROYW1lcyA9IHNlbGVjdGVkLm1hcChpdGVtID0+IHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfSlcbiAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7IFxuICAgIGxldCBhbGxSZWNpcGVJbmdyZWRpZW50cyA9IFtdO1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgYWxsUmVjaXBlSW5ncmVkaWVudHMucHVzaChpbmdyZWRpZW50Lm5hbWUpO1xuICAgIH0pO1xuICAgIGlmICghcmVjaXBlQ2hlY2tlcihhbGxSZWNpcGVJbmdyZWRpZW50cywgaW5ncmVkaWVudE5hbWVzKSkge1xuICAgICAgbGV0IGRvbVJlY2lwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3JlY2lwZS5pZH1gKTtcbiAgICAgIGRvbVJlY2lwZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdGlhdGVEYXRhKTtcbmFsbFJlY2lwZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBbGxSZWNpcGVzKTtcbmZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmluZENoZWNrZWRCb3hlcyk7XG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbGxDbGlja3NJbk1haW4pO1xucGFudHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNZW51KTtcbnNhdmVkUmVjaXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NhdmVkUmVjaXBlcyk7XG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFJlY2lwZXMpO1xuc2hvd1BhbnRyeVJlY2lwZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbmRDaGVja2VkUGFudHJ5Qm94ZXMpO1xuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHByZXNzRW50ZXJTZWFyY2gpOyIsImltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEpIHtcbiAgICB0aGlzLmlkID0gdXNlckRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IG5ldyBQYW50cnkodXNlckRhdGEucGFudHJ5KVxuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gW107XG4gIH1cblxuICBzYXZlUmVjaXBlKGxpc3QsIHJlY2lwZSkge1xuICAgIGxpc3QucHVzaChyZWNpcGUpO1xuICB9ICBcblxuICByZW1vdmVSZWNpcGUobGlzdCwgcmVjaXBlKSB7XG4gICAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YocmVjaXBlKTtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByZXR1cm5GaXJzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZS5zcGxpdCgnICcpWzBdO1xuICB9XG5cbiAgaXNGYXZvcml0ZWQocmVjaXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbmQoZmF2UmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gZmF2UmVjaXBlLmlkKTtcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9