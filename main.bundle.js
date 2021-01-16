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
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-color: #5B7894;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: none;\n  font-family: \"Quicksand\", sans-serif;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n\nh1 {\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  grid-area: fresh; }\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: 0.8s ease; }\n\nh4 {\n  color: #359567;\n  background-color: #C4EB67;\n  border-radius: 3px;\n  font-size: smaller;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content; }\n\n/* HEADER */\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: none;\n  grid-area: header; }\n\nspan {\n  color: #C4EB67;\n  font-weight: 400; }\n\n.header-apple-icon {\n  margin-left: 1.1%;\n  width: .7em; }\n\n#search {\n  border: 0.2em outset #C4EB67;\n  border-radius: 15px 15px 15px 15px;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-family: \"Quicksand\", sans-serif;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  grid-area: search; }\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border: none;\n  border-radius: 10px 0px 0px 10px;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: 0.8s ease;\n  width: 100%; }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-left: 3px outset #C4EB67;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%; }\n\n.nav-btn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  font-weight: 700;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  transition: 0.4s ease;\n  width: 15%; }\n  .nav-btn:hover {\n    color: #C4EB67;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: 0.4s ease; }\n  .nav-btn img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 2px 0px; }\n\n.saved-recipes-btn {\n  grid-area: button; }\n\n.saved-ingredients-btn {\n  border-left: 3px solid #C4EB67;\n  grid-area: button2; }\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  grid-area: image;\n  height: 9em;\n  overflow: hidden;\n  width: 100%; }\n\n.my-recipes-banner {\n  text-align: center;\n  width: 95%;\n  display: none;\n  margin-top: 1%; }\n  .my-recipes-banner h1 {\n    color: white;\n    width: 100%; }\n\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n  margin-top: 3%; }\n  .welcome-msg h1 {\n    color: white;\n    width: 100%; }\n\n/* FILTER SIDEBAR */\naside {\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: auto;\n  text-align: center; }\n\n.wrap {\n  background-color: white;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px; }\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px; }\n\nli {\n  margin: 2px; }\n\n/* RECIPE CARD SECTION */\nmain {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  grid-area: main;\n  flex-wrap: wrap;\n  margin: 1em; }\n\n.title-container {\n  align-self: center;\n  grid-area: title;\n  text-align: center;\n  margin-bottom: 13%; }\n\n.recipe-card {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-areas: \"title title\" \"food food\" \"tags apple\";\n  background-color: white;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  box-shadow: none;\n  cursor: pointer;\n  height: 18em;\n  margin: 2%;\n  padding: 1.5%;\n  width: 15em;\n  margin: 1em; }\n  .recipe-card:hover .card-photo-preview {\n    opacity: 50%;\n    transition: 0.8s ease; }\n  .recipe-card:hover .text {\n    font-size: 20px;\n    opacity: 100%;\n    transition: 0.5s ease;\n    width: 100%; }\n  .recipe-card:hover h3 {\n    text-shadow: 0px 0px 4px #C4EB67;\n    transition: 0.8s ease; }\n\n.tags {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-area: tags;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  overflow: auto; }\n\n.apple-container {\n  align-items: center;\n  justify-items: flex-end;\n  display: inline-grid;\n  grid-area: apple; }\n\n.card-apple-icon {\n  cursor: pointer;\n  height: 3em;\n  width: 3em; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 3%;\n  cursor: pointer;\n  height: 130px;\n  transition: 0.8s ease;\n  width: 100%; }\n\n.card-photo-container {\n  grid-area: food;\n  align-items: center;\n  display: flex;\n  height: 80%;\n  position: relative; }\n\n.text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: 0.5s ease; }\n\n/* BUTTONS */\n.filter-btn, .show-pantry-recipes-btn, .show-all-btn {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3%;\n  box-shadow: none;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 1% 2% 1% 2%; }\n  .filter-btn:hover, .show-pantry-recipes-btn:hover, .show-all-btn:hover {\n    background-color: #84C8A4; }\n\n.show-pantry-recipes-btn {\n  margin-top: 5%; }\n\n.show-all-btn {\n  height: 2.5em;\n  margin-top: 1%; }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 65%;\n  margin-left: 81%;\n  margin-top: 7%;\n  overflow: scroll;\n  padding: 1%;\n  position: absolute;\n  text-align: center;\n  width: 18%;\n  z-index: 3; }\n  .drop-menu h2 {\n    color: #359567;\n    margin: 0%; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 10%;\n  text-align: left; }\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 1%;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n  .recipe-instructions h4 {\n    background: white;\n    color: #359567; }\n  .recipe-instructions p {\n    margin-left: 2%; }\n  .recipe-instructions ol {\n    margin-right: 2%; }\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 2%;\n  box-shadow: none;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: 0.3s ease; }\n  #exit-recipe-btn:hover {\n    background: #C4EB67;\n    transition: 0.3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 2em;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #5B7894;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n@media only screen and (max-width: 900px) {\n  body {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: none;\n    font-family: \"Quicksand\", sans-serif;\n    grid-template-areas: \"header header\" \"image image\" \"aside image\" \"aside main\";\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: auto; }\n  header {\n    display: grid;\n    grid-template-columns: 4fr 1fr 1fr;\n    grid-template-rows: none;\n    grid-template-areas: \"fresh button button2\" \"search search search\";\n    grid-area: header;\n    padding: 1%; }\n  aside {\n    width: 70%; }\n  .dropdown {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    padding: 1%; }\n  .recipe-card {\n    width: 50%; }\n  .ing-pan-btn {\n    display: flex;\n    justify-self: end;\n    align-content: flex-end;\n    width: 50%; }\n  .drop-menu {\n    margin-left: 25%;\n    width: 50%;\n    height: 50%;\n    margin-top: 25%; }\n  h1 {\n    justify-self: center;\n    width: 90%; }\n  #search {\n    width: 85%;\n    justify-self: center; }\n  .banner-image {\n    height: 7em; } }\n\n@media only screen and (max-width: 550px) {\n  header {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: none;\n    grid-template-areas: \"fresh fresh fresh\"  \"none button button2\" \"search search search\";\n    justify-self: center;\n    align-self: center; }\n  h1 {\n    width: 50%;\n    font-size: 2.8em; }\n  aside {\n    width: 40%; }\n  .my-pantry-btn {\n    margin-right: 96%; }\n  .saved-recipes-btn {\n    margin-right: 57%; }\n  .saved-ingredients-btn {\n    border-left: none; }\n  .nav-btn {\n    align-items: none; }\n  #recipe-title {\n    font-size: 1.5em; } }\n", "",{"version":3,"sources":["webpack://./src/css/styles.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"variables\";\n@import \"media-queries\";\n\nbody {\n  background-color: $primary-color;\n  @include gridDisplay(1fr 5fr, none);\n  font-family: $font;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nh1 {\n  align-self: center;\n  color: $text-background;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  grid-area: fresh;\n}\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px;\n}\n\nh3 {\n  color: $border-font;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  @include transition(.8s ease)\n}\n\nh4 {\n  color: $border-font;\n  background-color: $background;\n  border-radius: 3px;\n  font-size: smaller;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content;\n}\n\n\n/* HEADER */\nheader {\n  @include flexDisplay(row, none);\n  grid-area: header;\n}\n\nspan {\n  color: $background;\n  font-weight: 400;\n}\n\n.header-apple-icon {\n  margin-left: 1.1%;\n  width: .7em;\n}\n\n#search {\n  @include borderStyling(.2em outset $background, 15px 15px 15px 15px, 0px 0px 7px 0px #475d74);\n  @include flexDisplay(row, center);\n  font-family: $font;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  grid-area: search;\n}\n\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  @include borderStyling(none, 10px 0px 0px 10px, inset -3px -1px 20px 1px #5c7894);\n  color: $primary-color;\n  font-family: $font;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  @include transition(.8s ease);\n  width: 100%;\n}\n\n.search-label {\n  display: none;\n}\n\n.search-btn {\n  border-left: 3px outset $background;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%;\n}\n\n.nav-btn {\n  @include flexDisplay(column, center);\n  align-items: center;\n  background:$primary-color no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  font-weight: 700;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  @include transition(.4s ease);\n  width: 15%;\n\n  &:hover {\n  color: $background;\n  font-size: 14px;\n  text-shadow: 0px 2px 4px black;\n  @include transition(.4s ease);\n}\n\n  img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px;\n}\n}\n\n.saved-recipes-btn {\n  grid-area: button;\n}\n\n.saved-ingredients-btn {\n  border-left: 3px solid $background;\n  grid-area: button2;\n}\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px;\n}\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\");\n  grid-area: image;\n  height: 9em;\n  overflow: hidden;\n  width: 100%;\n}\n\n.my-recipes-banner {\n  text-align: center;\n  width: 95%;\n  display: none;\n  margin-top: 1%;\n\n    h1 {\n      color: $text-background;\n      width: 100%;\n    }\n}\n\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n  margin-top: 3%;\n\n    h1 {\n      color: $text-background;\n      width: 100%;\n    }\n}\n\n/* FILTER SIDEBAR */\naside {\n  background-color: $text-background;\n  @include flexDisplay(row, center);\n  height: auto;\n  text-align: center;\n}\n\n.wrap {\n  background-color: $text-background;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px;\n}\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n}\n\nli {\n  margin: 2px;\n}\n\n/* RECIPE CARD SECTION */\nmain {\n  @include flexDisplay(row, center);\n  grid-area: main;\n  flex-wrap: wrap;\n  margin: 1em;\n  \n}\n\n.title-container {\n  align-self: center;\n  grid-area: title;\n  text-align: center;\n  margin-bottom: 13%;\n}\n\n.recipe-card {\n  @include gridDisplay(2fr 1fr, 1fr 1fr 1fr);\n  grid-template-areas: \n  \"title title\"\n  \"food food\"\n  \"tags apple\";\n  background-color: $text-background;\n  @include borderStyling(2px solid $background, 7px, none);\n  cursor: pointer;\n  height: 18em;\n  margin: 2%;\n  padding: 1.5%;\n  width: 15em;\n  margin: 1em;\n\n  &:hover .card-photo-preview {\n    opacity: 50%;\n    @include transition(.8s ease);\n  }\n\n  &:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  @include transition(.5s ease);\n  width: 100%;\n}\n\n  &:hover h3 {\n  text-shadow: 0px 0px 4px $background;\n  @include transition(.8s ease);\n}\n}\n\n.tags {\n  @include gridDisplay(1fr 1fr, 1fr 1fr);\n  grid-area: tags;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  overflow: auto;\n}\n\n.apple-container {\n  align-items: center;\n  justify-items: flex-end;\n  display: inline-grid;\n  grid-area: apple;\n}\n\n.card-apple-icon {\n  cursor: pointer;\n  height: 3em;\n  width: 3em;\n}\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 3%;\n  cursor: pointer;\n  height: 130px;\n  @include transition(.8s ease);\n  width: 100%;\n}\n\n.card-photo-container {\n  grid-area: food;\n  align-items: center;\n  display: flex;\n  height: 80%;\n  position: relative;\n}\n\n.text {\n  background: $border-font;\n  color: $text-background;;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  @include transition(.5s ease);\n}\n\n\n/* BUTTONS */\n.filter-btn {\n  background-color: $border-font;\n  @include borderStyling(0, 3%, none);\n  color: $text-background;\n  cursor: pointer;\n  font-family: $font;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 1% 2% 1% 2%;\n\n    &:hover {\n    background-color: #84C8A4;\n    }\n}\n\n  .show-pantry-recipes-btn {\n    @extend .filter-btn;\n    margin-top: 5%;\n  }\n\n  .show-all-btn {\n    @extend .filter-btn;\n    height: 2.5em;\n    margin-top: 1%;\n  }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 65%;\n  margin-left: 81%;\n  margin-top: 7%;\n  overflow: scroll;\n  padding: 1%;\n  position: absolute;\n  text-align: center;\n  width: 18%;\n  z-index: 3;\n\n  h2 {\n    color: $border-font;\n    margin: 0%;\n  }\n}\n\n.pantry-list {\n  color: #000000;\n  padding-left: 10%;\n  text-align: left;\n}\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: $text-background;\n  @include borderStyling(3px solid $background, 1%, 1px 1px 115px black);\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000;\n\n  h4 {\n    background: $text-background;\n    color: $border-font;\n  }\n\n  p {\n    margin-left: 2%;\n  }\n\n  ol {\n    margin-right: 2%;\n  }\n}\n\n#exit-recipe-btn {\n  background: $text-background;\n  @include borderStyling(2px double $border-font, 2%, none);\n  color: $border-font;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  @include transition(.3s ease);\n\n  &:hover {\n    background: $background;\n    @include transition(.3s ease);\n  }\n}\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: $text-background;\n  font-size: 2em;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black;\n}\n\n#overlay {\n  filter:alpha(opacity=50);\n  background-color:$primary-color;\n  height:100%;\n  left:0;\n  opacity:0.5;\n  position:fixed;\n  top:0;\n  width:100%;\n  z-index:100;\n}\n\n@media only screen and (max-width: 900px) {\nbody {\n  @include gridDisplay(1fr 2fr, none);\n  font-family: $font;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside image\"\n    \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nheader {\n  @include gridDisplay(4fr 1fr 1fr,none);\n  grid-template-areas: \n  \"fresh button button2\"\n  \"search search search\";\n  grid-area: header;\n  padding: 1%;\n}\n\naside {\n  width: 70%;\n}\n\n.dropdown {\n  @include flexDisplay(column, center);\n  align-self: start;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  padding: 1%;\n}\n\n.recipe-card {\n  width: 50%;\n}\n\n.ing-pan-btn {\n  display: flex;\n  justify-self: end;\n  align-content: flex-end;\n  width:50%;\n}\n\n.drop-menu {\n  margin-left: 25%;\n  width: 50%;\n  height: 50%;\n  margin-top: 25%;\n}\n\nh1 {\n  justify-self: center;\n  width: 90%;\n}\n\n#search {\n  width: 85%;\n  justify-self: center;\n}\n\n.banner-image {\n  height: 7em;\n}\n\n}\n\n@media only screen and (max-width: 550px) {\n  header {\n    @include gridDisplay(1fr 1fr 1fr, none);\n    grid-template-areas: \n    \"fresh fresh fresh\" \n    \"none button button2\"\n    \"search search search\";\n    justify-self: center;\n    align-self: center;\n  }\n\n  h1 {\n    width: 50%;\n    font-size: 2.8em;\n  }\n\n  aside {\n    width: 40%;\n  }\n\n  .my-pantry-btn {\n    margin-right: 96%;\n  }\n\n  .saved-recipes-btn {\n    margin-right: 57%;\n  }\n\n  .saved-ingredients-btn {\n    border-left: none;\n  }\n\n  .nav-btn {\n    align-items: none;\n  }\n\n  #recipe-title {\n    font-size: 1.5em;\n  }\n \n}","$primary-color: #5B7894;\n$text-background: white;\n$font: \"Quicksand\",\nsans-serif;\n$border-font: #359567;\n$background: #C4EB67;\n\n\n\n@mixin transition($value) {\n  transition: $value;\n}\n\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n}\n\n@mixin flexDisplay($direction, $justify) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n}\n\n@mixin borderStyling($border, $radius, $shadow) {\n  border: $border;\n  border-radius: $radius;\n  box-shadow: $shadow;\n}"],"sourceRoot":""}]);
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
function getData(dataset) {
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
/* harmony import */ var _data_ingredient_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/ingredient-data */ "./src/data/ingredient-data.js");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/apple-logo-outline.png */ "./src/images/apple-logo-outline.png");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _recipe_repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipe-repo */ "./src/recipe-repo.js");
/* harmony import */ var _ingredient_repo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ingredient-repo */ "./src/ingredient-repo.js");
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
  const usersPromise = fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json());
  const ingredientsPromise = fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json());
  const recipesPromise = fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json());

  const promises = [usersPromise, ingredientsPromise, recipesPromise];
  Promise.all(promises)
    .then(data => {      
      user = new _user__WEBPACK_IMPORTED_MODULE_9__["default"](data[0][Math.floor(Math.random() * data[0].length)]);
      ingredientsRepo = new _ingredient_repo__WEBPACK_IMPORTED_MODULE_11__["default"](data[1]);
      recipeRepo = new _recipe_repo__WEBPACK_IMPORTED_MODULE_10__["default"](data[2]);
      createCards();
      displayTagList();
      _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].welcomeUser(user);
      findPantryInfo();
      showAllRecipes(recipes);
    });
}

// CREATE RECIPE CARDS
const createCards = () => { 
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].clearMainCardSection();
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].showSelectedRecipes(recipeRepo.recipes, user);
}

// FILTER BY RECIPE TAGS
const displayTagList = () => {
  let tags = recipeRepo.returnAllTags()
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].createListTags(tags);
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
    _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].showSelectedRecipes(filteredResults, user);
  }
}

// FAVORITE RECIPE FUNCTIONALITY
const allClicksInMain = (event) => {
  if (event.target.className === "card-apple-icon") {
    addToMyRecipes();
  } else if (event.target.id === "exit-recipe-btn") {
    _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    openRecipeInfo(event);
  }
}

const addToSavedDom = recipe => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].fillApple();
  user.saveRecipe(user.favoriteRecipes, recipe);
}

const removeFromSavedDom = recipe => {
  alert('You have removed a recipe from My Recipes!');
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].removeApple();
  user.removeRecipe(user.favoriteRecipes, recipe);
  createCards();
  showWelcomeBanner();
}

const addToMyRecipes = () => {
  const cardId = _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].getCardId();
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
  user.favoriteRecipes.length > 0 ? (
    _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].showSelectedRecipes(user.favoriteRecipes, user), 
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
    return `${_domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].capitalize(name)} (${_domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].formatNumber(ingredient.quantity.amount)} ${ingredient.quantity.unit})`;
  }).join(', ');
}

const expandRecipeCard = recipe => {  
  let fullRecipeInfo = document.querySelector(".recipe-instructions");
  fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></section>");
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].createInstructionsTitle(recipe, generateIngredients(recipe));
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].createInstructionsImage(recipe);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].createInstructionsList(recipe.instructions);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].createEstimatedPrice(recipe, _data_ingredient_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
  input = _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].capitalize(input);
  typeof input !== 'string' ? (
    _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].displaySearchError(),
    _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].clearField()
  ) : _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].showSelectedRecipes(findRecipeMatches(input), user);
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
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].clearAllFields();
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
  let ingredientRepo = new _ingredient_repo__WEBPACK_IMPORTED_MODULE_11__["default"](_data_ingredient_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
  let pantryInfo = user.pantry.items.reduce((acc, ingredient) => {
    let outputObject = {
      name: ingredientRepo.getRecipeNameById(ingredient.ingredient),
      count: ingredient.amount
    }
    acc.push(outputObject);
    return acc;
  }, []);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name))); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BUElDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/N2IyZiIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmdyZWRpZW50LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXBwbGUtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2VhcmNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXNvbmluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZ3JlZGllbnQtcmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUtcmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyxzR0FBcUM7QUFDL0Y7QUFDQSw4QkFBOEIsUUFBUywrRUFBK0UsMkJBQTJCLEVBQUUsU0FBUywwRkFBMEYsS0FBSyxxSUFBcUksVUFBVSwwQ0FBMEMsR0FBRyxxQkFBcUI7QUFDNWM7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUg7QUFDN0I7QUFD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QUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEI7QUFDQSwyQkFBMkIseURBQWUsQ0FBQyw2REFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLG1EQUFVLDRFO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0Q7Ozs7Ozs7Ozs7OztBQzlSQTtBQUFBO0FBQUE7QUFBOEI7O0FBRWY7QUFDZjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQU07QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUVBQUE7QUFHQTtFQUNFLHNCQUh1QixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuJHByaW1hcnktYmFja2dyb3VuZDogcGluaztcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwiaW1hZ2UgaW1hZ2VcXFwiIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bzsgfVxcblxcbmgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGdyaWQtYXJlYTogZnJlc2g7IH1cXG5cXG5oMiB7XFxuICBjb2xvcjogIzg0QzhBNDtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7IH1cXG5cXG5oMyB7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTclO1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4O1xcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlOyB9XFxuXFxuaDQge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4IDRweCAxcHggNHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50OyB9XFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBub25lO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7IH1cXG5cXG5zcGFuIHtcXG4gIGNvbG9yOiAjQzRFQjY3O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMS4xJTtcXG4gIHdpZHRoOiAuN2VtOyB9XFxuXFxuI3NlYXJjaCB7XFxuICBib3JkZXI6IDAuMmVtIG91dHNldCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCAjNDc1ZDc0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMS4yJSAwLjUlIDEuMiUgMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtYXJlYTogc2VhcmNoOyB9XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCB3aGl0ZSksIGNvbG9yLXN0b3AoMSwgI2UxZTFlMSkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NDtcXG4gIGNvbG9yOiAjNUI3ODk0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAlIDIlIDAlIDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLm5hdi1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjNUI3ODk0IG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbiAgd2lkdGg6IDE1JTsgfVxcbiAgLm5hdi1idG46aG92ZXIge1xcbiAgICBjb2xvcjogI0M0RUI2NztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTsgfVxcbiAgLm5hdi1idG4gaW1nIHtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAycHggMHB4OyB9XFxuXFxuLnNhdmVkLXJlY2lwZXMtYnRuIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uOyB9XFxuXFxuLnNhdmVkLWluZ3JlZGllbnRzLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNDNEVCNjc7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjI7IH1cXG5cXG4uaW5nLXBhbi1idG4ge1xcbiAgbWFyZ2luOiAxJSAwJTtcXG4gIHBhZGRpbmc6IDFweCA2cHggNXB4IDBweDsgfVxcblxcbi8qIEJBTk5FUiBJTUFHRSovXFxuLmJhbm5lci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gIGhlaWdodDogOWVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMSU7IH1cXG4gIC5teS1yZWNpcGVzLWJhbm5lciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ud2VsY29tZS1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbi10b3A6IDMlOyB9XFxuICAud2VsY29tZS1tc2cgaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLyogRklMVEVSIFNJREVCQVIgKi9cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzVweDsgfVxcblxcbmxpIHtcXG4gIG1hcmdpbjogMnB4OyB9XFxuXFxuLyogUkVDSVBFIENBUkQgU0VDVElPTiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMWVtOyB9XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTMlOyB9XFxuXFxuLnJlY2lwZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlXFxcIiBcXFwiZm9vZCBmb29kXFxcIiBcXFwidGFncyBhcHBsZVxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxOGVtO1xcbiAgbWFyZ2luOiAyJTtcXG4gIHBhZGRpbmc6IDEuNSU7XFxuICB3aWR0aDogMTVlbTtcXG4gIG1hcmdpbjogMWVtOyB9XFxuICAucmVjaXBlLWNhcmQ6aG92ZXIgLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogMC44cyBlYXNlOyB9XFxuICAucmVjaXBlLWNhcmQ6aG92ZXIgLnRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5yZWNpcGUtY2FyZDpob3ZlciBoMyB7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjQzRFQjY3O1xcbiAgICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7IH1cXG5cXG4udGFncyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiB0YWdzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4uYXBwbGUtY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC1hcmVhOiBhcHBsZTsgfVxcblxcbi5jYXJkLWFwcGxlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzZW07XFxuICB3aWR0aDogM2VtOyB9XFxuXFxuLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGZvb2Q7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogIzM1OTU2NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7IH1cXG5cXG4vKiBCVVRUT05TICovXFxuLmZpbHRlci1idG4sIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biwgLnNob3ctYWxsLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU5NTY3O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxJSAyJSAxJSAyJTsgfVxcbiAgLmZpbHRlci1idG46aG92ZXIsIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0bjpob3ZlciwgLnNob3ctYWxsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NEM4QTQ7IH1cXG5cXG4uc2hvdy1wYW50cnktcmVjaXBlcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogNSU7IH1cXG5cXG4uc2hvdy1hbGwtYnRuIHtcXG4gIGhlaWdodDogMi41ZW07XFxuICBtYXJnaW4tdG9wOiAxJTsgfVxcblxcbi8qIFBBTlRSWSBMSVNUICovXFxuLmRyb3AtbWVudSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIG1hcmdpbi1sZWZ0OiA4MSU7XFxuICBtYXJnaW4tdG9wOiA3JTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxOCU7XFxuICB6LWluZGV4OiAzOyB9XFxuICAuZHJvcC1tZW51IGgyIHtcXG4gICAgY29sb3I6ICMzNTk1Njc7XFxuICAgIG1hcmdpbjogMCU7IH1cXG5cXG4ucGFudHJ5LWxpc3Qge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4vKiBSRUNJUEUgSU5TVFJVQ1RJT05TICovXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogMSU7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMgaDQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMzNTk1Njc7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHAge1xcbiAgICBtYXJnaW4tbGVmdDogMiU7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIG9sIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcblxcbiNleGl0LXJlY2lwZS1idG4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzM1OTU2NztcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7IH1cXG4gICNleGl0LXJlY2lwZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjQzRFQjY3O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7IH1cXG5cXG4jcmVjaXBlLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjazsgfVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwiaW1hZ2UgaW1hZ2VcXFwiIFxcXCJhc2lkZSBpbWFnZVxcXCIgXFxcImFzaWRlIG1haW5cXFwiO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87IH1cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImZyZXNoIGJ1dHRvbiBidXR0b24yXFxcIiBcXFwic2VhcmNoIHNlYXJjaCBzZWFyY2hcXFwiO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgcGFkZGluZzogMSU7IH1cXG4gIGFzaWRlIHtcXG4gICAgd2lkdGg6IDcwJTsgfVxcbiAgLmRyb3Bkb3duIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBwYWRkaW5nOiAxJTsgfVxcbiAgLnJlY2lwZS1jYXJkIHtcXG4gICAgd2lkdGg6IDUwJTsgfVxcbiAgLmluZy1wYW4tYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAuZHJvcC1tZW51IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDI1JTsgfVxcbiAgaDEge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgI3NlYXJjaCB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxuICAuYmFubmVyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiA3ZW07IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImZyZXNoIGZyZXNoIGZyZXNoXFxcIiAgXFxcIm5vbmUgYnV0dG9uIGJ1dHRvbjJcXFwiIFxcXCJzZWFyY2ggc2VhcmNoIHNlYXJjaFxcXCI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG4gIGgxIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZm9udC1zaXplOiAyLjhlbTsgfVxcbiAgYXNpZGUge1xcbiAgICB3aWR0aDogNDAlOyB9XFxuICAubXktcGFudHJ5LWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogOTYlOyB9XFxuICAuc2F2ZWQtcmVjaXBlcy1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU3JTsgfVxcbiAgLnNhdmVkLWluZ3JlZGllbnRzLWJ0biB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmF2LWJ0biB7XFxuICAgIGFsaWduLWl0ZW1zOiBub25lOyB9XFxuICAjcmVjaXBlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSx5QkNKcUI7RUFjckIsYUFBYTtFQUNiLDhCRFY0QjtFQ1c1Qix3QkRYa0M7RUFDbEMsb0NDSFE7RURJUiwrREFHYztFQUNkLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGtCQUFrQjtFQUNsQixZQ2xCcUI7RURtQnJCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGNDOUJtQjtFRCtCbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCx3QkFBd0I7RUMzQnhCLHFCRDRCNEIsRUFBQTs7QUFHOUI7RUFDRSxjQ3RDbUI7RUR1Q25CLHlCQ3RDa0I7RUR1Q2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixrQkFBa0IsRUFBQTs7QUFJcEIsV0FBQTtBQUNBO0VDakNFLGFBQWE7RUFDYixtQkRpQ3dCO0VDaEN4QixxQkRnQzhCO0VBQzlCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNDdERrQjtFRHVEbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7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YXFDO0lBQ3JDLGtFQUVzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVyxFQUFBO0VBbFJiO0lBc1JFLFVBQVUsRUFBQTtFQUdaO0lDdmJFLGFBQWE7SUFDYixzQkR1YjJCO0lDdGIzQix1QkRzYm1DO0lBQ25DLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUF0UGI7SUEwUEUsVUFBVSxFQUFBO0VBelVaO0lBNlVFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFVBQVMsRUFBQTtFQTdJWDtJQWlKRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFsZGpCO0lBc2RFLG9CQUFvQjtJQUNwQixVQUFVLEVBQUE7RUFwYVo7SUF3YUUsVUFBVTtJQUNWLG9CQUFvQixFQUFBO0VBM1Z0QjtJQStWRSxXQUFXLEVBQUEsRUFDWjs7QUFJRDtFQWpjQTtJQ3ZDRSxhQUFhO0lBQ2Isa0NEeWVrQztJQ3hlbEMsd0JEd2V3QztJQUN0QyxzRkFHc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGtCQUFrQixFQUFBO0VBN2V0QjtJQWlmSSxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7RUFqVnBCO0lBcVZJLFVBQVUsRUFBQTtFQUdaO0lBQ0UsaUJBQWlCLEVBQUE7RUF4WXJCO0lBNFlJLGlCQUFpQixFQUFBO0VBeFlyQjtJQTRZSSxpQkFBaUIsRUFBQTtFQTVhckI7SUFnYkksaUJBQWlCLEVBQUE7RUFoSXJCO0lBb0lJLGdCQUFnQixFQUFBLEVBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwibWVkaWEtcXVlcmllc1xcXCI7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIEBpbmNsdWRlIGdyaWREaXNwbGF5KDFmciA1ZnIsIG5vbmUpO1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJpbWFnZSBpbWFnZVxcXCJcXG4gICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xcbn1cXG5cXG5oMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGdyaWQtYXJlYTogZnJlc2g7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjODRDOEE0O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcXG59XFxuXFxuaDMge1xcbiAgY29sb3I6ICRib3JkZXItZm9udDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTclO1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4O1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguOHMgZWFzZSlcXG59XFxuXFxuaDQge1xcbiAgY29sb3I6ICRib3JkZXItZm9udDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4IDRweCAxcHggNHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBub25lKTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG5zcGFuIHtcXG4gIGNvbG9yOiAkYmFja2dyb3VuZDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMS4xJTtcXG4gIHdpZHRoOiAuN2VtO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcoLjJlbSBvdXRzZXQgJGJhY2tncm91bmQsIDE1cHggMTVweCAxNXB4IDE1cHgsIDBweCAwcHggN3B4IDBweCAjNDc1ZDc0KTtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KHJvdywgY2VudGVyKTtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIG1hcmdpbjogMS4yJSAwLjUlIDEuMiUgMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtYXJlYTogc2VhcmNoO1xcbn1cXG5cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmRjY2E7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KCBsaW5lYXIsbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYigyNTUsIDI1NSwgMjU1KSksIGNvbG9yLXN0b3AoMSwgcmdiKDIyNSwyMjUsMjI1KSkpO1xcbiAgQGluY2x1ZGUgYm9yZGVyU3R5bGluZyhub25lLCAxMHB4IDBweCAwcHggMTBweCwgaW5zZXQgLTNweCAtMXB4IDIwcHggMXB4ICM1Yzc4OTQpO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAlIDIlIDAlIDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC44cyBlYXNlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoLWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICRiYWNrZ3JvdW5kO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XFxuICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBjZW50ZXIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6JHByaW1hcnktY29sb3Igbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC40cyBlYXNlKTtcXG4gIHdpZHRoOiAxNSU7XFxuXFxuICAmOmhvdmVyIHtcXG4gIGNvbG9yOiAkYmFja2dyb3VuZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjRzIGVhc2UpO1xcbn1cXG5cXG4gIGltZyB7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogMnB4IDBweDtcXG59XFxufVxcblxcbi5zYXZlZC1yZWNpcGVzLWJ0biB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG59XFxuXFxuLnNhdmVkLWluZ3JlZGllbnRzLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICRiYWNrZ3JvdW5kO1xcbiAgZ3JpZC1hcmVhOiBidXR0b24yO1xcbn1cXG5cXG4uaW5nLXBhbi1idG4ge1xcbiAgbWFyZ2luOiAxJSAwJTtcXG4gIHBhZGRpbmc6IDFweCA2cHggNXB4IDBweDtcXG59XFxuXFxuLyogQkFOTkVSIElNQUdFKi9cXG4uYmFubmVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC41KSwgcmdiYSgwLDAsMCwuNSkpLHVybChcXFwiLi4vaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcXFwiKTtcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxuICBoZWlnaHQ6IDllbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuXFxuICAgIGgxIHtcXG4gICAgICBjb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4ud2VsY29tZS1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbi10b3A6IDMlO1xcblxcbiAgICBoMSB7XFxuICAgICAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuLyogRklMVEVSIFNJREVCQVIgKi9cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkocm93LCBjZW50ZXIpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbmxpIHtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4vKiBSRUNJUEUgQ0FSRCBTRUNUSU9OICovXFxubWFpbiB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShyb3csIGNlbnRlcik7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW46IDFlbTtcXG4gIFxcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMyU7XFxufVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgyZnIgMWZyLCAxZnIgMWZyIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJ0aXRsZSB0aXRsZVxcXCJcXG4gIFxcXCJmb29kIGZvb2RcXFwiXFxuICBcXFwidGFncyBhcHBsZVxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgQGluY2x1ZGUgYm9yZGVyU3R5bGluZygycHggc29saWQgJGJhY2tncm91bmQsIDdweCwgbm9uZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE4ZW07XFxuICBtYXJnaW46IDIlO1xcbiAgcGFkZGluZzogMS41JTtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgbWFyZ2luOiAxZW07XFxuXFxuICAmOmhvdmVyIC5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjhzIGVhc2UpO1xcbiAgfVxcblxcbiAgJjpob3ZlciAudGV4dCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguNXMgZWFzZSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuICAmOmhvdmVyIGgzIHtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAkYmFja2dyb3VuZDtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjhzIGVhc2UpO1xcbn1cXG59XFxuXFxuLnRhZ3Mge1xcbiAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMWZyIDFmciwgMWZyIDFmcik7XFxuICBncmlkLWFyZWE6IHRhZ3M7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmFwcGxlLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtYXJlYTogYXBwbGU7XFxufVxcblxcbi5jYXJkLWFwcGxlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzZW07XFxuICB3aWR0aDogM2VtO1xcbn1cXG5cXG4uY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjhzIGVhc2UpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGZvb2Q7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWZvbnQ7XFxuICBjb2xvcjogJHRleHQtYmFja2dyb3VuZDs7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDAlO1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguNXMgZWFzZSk7XFxufVxcblxcblxcbi8qIEJVVFRPTlMgKi9cXG4uZmlsdGVyLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICBAaW5jbHVkZSBib3JkZXJTdHlsaW5nKDAsIDMlLCBub25lKTtcXG4gIGNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxJSAyJSAxJSAyJTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NEM4QTQ7XFxuICAgIH1cXG59XFxuXFxuICAuc2hvdy1wYW50cnktcmVjaXBlcy1idG4ge1xcbiAgICBAZXh0ZW5kIC5maWx0ZXItYnRuO1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gIH1cXG5cXG4gIC5zaG93LWFsbC1idG4ge1xcbiAgICBAZXh0ZW5kIC5maWx0ZXItYnRuO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG4gIH1cXG5cXG4vKiBQQU5UUlkgTElTVCAqL1xcbi5kcm9wLW1lbnUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA2NSU7XFxuICBtYXJnaW4tbGVmdDogODElO1xcbiAgbWFyZ2luLXRvcDogNyU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTglO1xcbiAgei1pbmRleDogMztcXG5cXG4gIGgyIHtcXG4gICAgY29sb3I6ICRib3JkZXItZm9udDtcXG4gICAgbWFyZ2luOiAwJTtcXG4gIH1cXG59XFxuXFxuLnBhbnRyeS1saXN0IHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4vKiBSRUNJUEUgSU5TVFJVQ1RJT05TICovXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgYmFja2dyb3VuZDogJHRleHQtYmFja2dyb3VuZDtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcoM3B4IHNvbGlkICRiYWNrZ3JvdW5kLCAxJSwgMXB4IDFweCAxMTVweCBibGFjayk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxNSU7XFxuICB0b3A6IDE1JTtcXG4gIHdpZHRoOiA3MCU7XFxuICB6LWluZGV4OiAxMDAwO1xcblxcbiAgaDQge1xcbiAgICBiYWNrZ3JvdW5kOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgICBjb2xvcjogJGJvcmRlci1mb250O1xcbiAgfVxcblxcbiAgcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gIH1cXG5cXG4gIG9sIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gIH1cXG59XFxuXFxuI2V4aXQtcmVjaXBlLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgQGluY2x1ZGUgYm9yZGVyU3R5bGluZygycHggZG91YmxlICRib3JkZXItZm9udCwgMiUsIG5vbmUpO1xcbiAgY29sb3I6ICRib3JkZXItZm9udDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IC00JSAtMyUgMiUgLTElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MgZWFzZSk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XFxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjNzIGVhc2UpO1xcbiAgfVxcbn1cXG5cXG4jcmVjaXBlLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBmaWx0ZXI6YWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiRwcmltYXJ5LWNvbG9yO1xcbiAgaGVpZ2h0OjEwMCU7XFxuICBsZWZ0OjA7XFxuICBvcGFjaXR5OjAuNTtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgdG9wOjA7XFxuICB3aWR0aDoxMDAlO1xcbiAgei1pbmRleDoxMDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG5ib2R5IHtcXG4gIEBpbmNsdWRlIGdyaWREaXNwbGF5KDFmciAyZnIsIG5vbmUpO1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJpbWFnZSBpbWFnZVxcXCJcXG4gICAgXFxcImFzaWRlIGltYWdlXFxcIlxcbiAgICBcXFwiYXNpZGUgbWFpblxcXCI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSg0ZnIgMWZyIDFmcixub25lKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImZyZXNoIGJ1dHRvbiBidXR0b24yXFxcIlxcbiAgXFxcInNlYXJjaCBzZWFyY2ggc2VhcmNoXFxcIjtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbmFzaWRlIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlcik7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmluZy1wYW4tYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgd2lkdGg6NTAlO1xcbn1cXG5cXG4uZHJvcC1tZW51IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBtYXJnaW4tdG9wOiAyNSU7XFxufVxcblxcbmgxIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICB3aWR0aDogODUlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYW5uZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA3ZW07XFxufVxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxZnIgMWZyIDFmciwgbm9uZSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiZnJlc2ggZnJlc2ggZnJlc2hcXFwiIFxcbiAgICBcXFwibm9uZSBidXR0b24gYnV0dG9uMlxcXCJcXG4gICAgXFxcInNlYXJjaCBzZWFyY2ggc2VhcmNoXFxcIjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXG4gIH1cXG5cXG4gIGFzaWRlIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG5cXG4gIC5teS1wYW50cnktYnRuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA5NiU7XFxuICB9XFxuXFxuICAuc2F2ZWQtcmVjaXBlcy1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU3JTtcXG4gIH1cXG5cXG4gIC5zYXZlZC1pbmdyZWRpZW50cy1idG4ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXYtYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IG5vbmU7XFxuICB9XFxuXFxuICAjcmVjaXBlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG4gXFxufVwiLFwiJHByaW1hcnktY29sb3I6ICM1Qjc4OTQ7XFxuJHRleHQtYmFja2dyb3VuZDogd2hpdGU7XFxuJGZvbnQ6IFxcXCJRdWlja3NhbmRcXFwiLFxcbnNhbnMtc2VyaWY7XFxuJGJvcmRlci1mb250OiAjMzU5NTY3O1xcbiRiYWNrZ3JvdW5kOiAjQzRFQjY3O1xcblxcblxcblxcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWx1ZSkge1xcbiAgdHJhbnNpdGlvbjogJHZhbHVlO1xcbn1cXG5cXG5AbWl4aW4gZ3JpZERpc3BsYXkoJGNvbHVtbnMsICRyb3dzKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkY29sdW1ucztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogJHJvd3M7XFxufVxcblxcbkBtaXhpbiBmbGV4RGlzcGxheSgkZGlyZWN0aW9uLCAkanVzdGlmeSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXG59XFxuXFxuQG1peGluIGJvcmRlclN0eWxpbmcoJGJvcmRlciwgJHJhZGl1cywgJHNoYWRvdykge1xcbiAgYm9yZGVyOiAkYm9yZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJmdW5jdGlvbiBnZXREYXRhKGRhdGFzZXQpIHtcbiAgbGV0IGRhdGEgPSBbXTtcbiAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvJHtkYXRhc2V0fWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICByZXN1bHQuZm9yRWFjaChlYWNoUmVzdWx0ID0+IHtcbiAgICAgICAgZGF0YS5wdXNoKGVhY2hSZXN1bHQpXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xuICByZXR1cm4gZGF0YTtcbn0gXG5cbi8vIGV4cG9ydCBjb25zdCBzZW5kRGF0YSA9IGRhdGFUb1NlbmQgPT4ge1xuLy8gICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbi8vICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2VuZClcbi8vICAgfTtcblxuLy8gICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXNlcnNcIiwgcmVxdWVzdE9wdGlvbnMpXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbi8vICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4vLyAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBnZXREYXRhIGZyb20gJy4uL0FQSUNhbGxzJztcblxuY29uc3QgYXBpQ2FsbCA9ICdpbmdyZWRpZW50cyc7XG5cblxubGV0IGluZ3JlZGllbnRzRGF0YTtcblxuaW5ncmVkaWVudHNEYXRhID0gZ2V0RGF0YShhcGlDYWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5ncmVkaWVudHNEYXRhOyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxubGV0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgd2VsY29tZVVzZXIoY3VycmVudFVzZXIpIHtcbiAgICBsZXQgZmlyc3ROYW1lID0gY3VycmVudFVzZXIubmFtZS5zcGxpdChcIiBcIilbMF07XG4gICAgbGV0IHdlbGNvbWVNc2cgPSBgXG4gICAgPGFydGljbGUgY2xhc3M9XCJ3ZWxjb21lLW1zZ1wiPlxuICAgICAgPGgxPldlbGNvbWUgJHtmaXJzdE5hbWV9ITwvaDE+XG4gICAgPC9hcnRpY2xlPmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXItaW1hZ2VcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgd2VsY29tZU1zZyk7XG4gIH0sXG4gIFxuICAvLyBDcmVhdGUgQ2FyZHMgYW5kIFRhZyBMaXN0IG9ubG9hZCAvLyBcbiAgY3JlYXRlQ2FyZFRhZ3ModGFncykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGxldCBuZXdUYWcgPSBgPGg0PiR7dGFnfTwvaDQ+YDtcbiAgICAgIHJlc3VsdCArPSBuZXdUYWc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBjcmVhdGVDYXJkKHJlY2lwZSwgYXBwbGVEaXNwbGF5ZWQpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGxldCBjYXJkSHRtbCA9IGBcbiAgPGFydGljbGUgY2xhc3M9XCJyZWNpcGUtY2FyZFwiIGlkPSR7cmVjaXBlLmlkfT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiXG4gICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiIG1heGxlbmd0aD1cIjQwXCI+JHt0aGlzLnNob3J0ZW5SZWNpcGVOYW1lKHJlY2lwZSl9PC9oMz5cbiAgICA8L3NlY3Rpb24+ICBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNhcmQtcGhvdG8tY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz0ke3JlY2lwZS5pbWFnZX0gY2xhc3M9XCJjYXJkLXBob3RvLXByZXZpZXdcIiBhbHQ9XCIke3JlY2lwZS5uYW1lfSByZWNpcGVcIiB0aXRsZT1cIiR7cmVjaXBlLm5hbWV9IHJlY2lwZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiQ2xpY2sgZm9yIGluc3RydWN0aW9ucyBiYW5uZXJcIj5DbGljayBmb3IgSW5zdHJ1Y3Rpb25zPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gYXJpYS1sYWJlbD1cIlR5cGUgb2YgcmVjaXBlXCIgY2xhc3M9XCJ0YWdzXCI+XG4gICAgICAke3RoaXMuY3JlYXRlQ2FyZFRhZ3MocmVjaXBlLnRhZ3MpfVxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImFwcGxlLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBhcmlhLWxhYmVsPVwiQ2xpY2sgdG8gZmF2b3JpdGUgcmVjaXBlXCIgc3JjPVwiLi9pbWFnZXMvJHthcHBsZURpc3BsYXllZH0ucG5nXCIgYWx0PVwidW5maWxsZWQgYXBwbGUgaWNvblwiIGNsYXNzPVwiY2FyZC1hcHBsZS1pY29uXCI+XG4gICAgPC9zZWN0aW9uPiAgXG4gIDwvYXJ0aWNsZT5gXG4gICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9IGNhcmRIdG1sO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIH0sXG5cbiAgY2xlYXJNYWluQ2FyZFNlY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYFxuICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtaW5zdHJ1Y3Rpb25zXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm15LXJlY2lwZXMtYmFubmVyXCI+XG4gICAgICA8aDE+TXkgUmVjaXBlczwvaDE+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2hvdy1hbGwtYnRuXCI+U2hvdyBBbGwgUmVjaXBlczwvYnV0dG9uPlxuICAgIDwvZGl2PmBcbiAgICBcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uaW5uZXJIVE1MICs9IG1vZGFsO1xuICAgIHJldHVybiBtYWluO1xuICB9LFxuICBcbiAgc2hvcnRlblJlY2lwZU5hbWUocmVjaXBlKSB7XG4gICAgbGV0IHNob3J0UmVjaXBlTmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIGlmIChzaG9ydFJlY2lwZU5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgIHNob3J0UmVjaXBlTmFtZSA9IHNob3J0UmVjaXBlTmFtZS5zdWJzdHJpbmcoMCwgNDApICsgXCIuLi5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHNob3J0UmVjaXBlTmFtZTtcbiAgfSxcblxuICBjcmVhdGVMaXN0VGFncyh0YWdzKSB7XG4gICAgbGV0IHRhZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhZy1saXN0XCIpO1xuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgbGV0IHRhZ0h0bWwgPSBgPGxpPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrZWQtdGFnXCIgaWQ9XCIke3RhZ31cIj5cbiAgICAgIDxsYWJlbCBmb3I9XCIke3RhZ31cIj4ke3RoaXMuY2FwaXRhbGl6ZSh0YWcpfTwvbGFiZWw+PC9saT5gO1xuICAgICAgdGFnTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdGFnSHRtbCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY2FwaXRhbGl6ZSh3b3Jkcykge1xuICAgIHJldHVybiB3b3Jkcy5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4ge1xuICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuICAgIH0pLmpvaW4oXCIgXCIpO1xuICB9LFxuXG4gIHNob3dTZWxlY3RlZFJlY2lwZXMoZm91bmRSZWNpcGVzLCB1c2VyKSB7XG4gICAgdGhpcy5jbGVhck1haW5DYXJkU2VjdGlvbigpXG4gICAgZm91bmRSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIHVzZXIuaXNGYXZvcml0ZWQocmVjaXBlKSA/IHRoaXMuY3JlYXRlQ2FyZChyZWNpcGUsIFwiYXBwbGUtbG9nb1wiKSA6IHRoaXMuY3JlYXRlQ2FyZChyZWNpcGUsIFwiYXBwbGUtbG9nby1vdXRsaW5lXCIpO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldENhcmRJZCgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucmVjaXBlLWNhcmRcIikuaWQpXG4gIH0sXG5cbiAgZmlsbEFwcGxlKCkge1xuICAgIGV2ZW50LnRhcmdldC5zcmMgPSBcIi4vaW1hZ2VzL2FwcGxlLWxvZ28ucG5nXCI7XG4gIH0sXG5cbiAgcmVtb3ZlQXBwbGUoKSB7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9IFwiLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZ1wiO1xuICB9LFxuXG4gIC8vUmVjaXBlIEluc3RydWN0aW9ucy8vXG4gIGNyZWF0ZUluc3RydWN0aW9uc1RpdGxlKHJlY2lwZSwgaW5ncmVkaWVudHMpIHtcbiAgICBsZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG5cbiAgICBsZXQgcmVjaXBlVGl0bGUgPSBgXG4gICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiRXhpdCByZWNpcGVcIiBpZD1cImV4aXQtcmVjaXBlLWJ0blwiPlg8L2J1dHRvbj5cbiAgICA8aDMgaWQ9XCJyZWNpcGUtdGl0bGVcIj4ke3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgPGg0PkluZ3JlZGllbnRzPC9oND5cbiAgICA8cD4ke2luZ3JlZGllbnRzfTwvcD5gXG4gICAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHJlY2lwZVRpdGxlKTtcbiAgfSxcblxuICBjcmVhdGVJbnN0cnVjdGlvbnNJbWFnZShyZWNpcGUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlY2lwZS10aXRsZVwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVjaXBlLmltYWdlfSlgO1xuICB9LFxuXG4gIGNyZWF0ZUluc3RydWN0aW9uc0xpc3QoaW5zdHJ1Y3Rpb25zKSB7XG4gICAgbGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIGxldCBpbnN0cnVjdGlvbnNMaXN0ID0gXCJcIjtcbiAgICBpbnN0cnVjdGlvbnMuZm9yRWFjaChzdGVwID0+IGluc3RydWN0aW9uc0xpc3QgKz0gYDxsaT4ke3N0ZXAuaW5zdHJ1Y3Rpb259PC9saT5gKTtcbiAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8aDQ+SW5zdHJ1Y3Rpb25zPC9oND5cIik7XG4gICAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8b2w+JHtpbnN0cnVjdGlvbnNMaXN0fTwvb2w+YCk7XG4gIH0sXG5cbiAgY3JlYXRlRXN0aW1hdGVkUHJpY2UocmVjaXBlLCBpbmdyZWRpZW50cykge1xuICAgIGxldCBmdWxsUmVjaXBlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlLWluc3RydWN0aW9uc1wiKTtcbiAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8aDQ+RXN0aW1hdGVkIENvc3Q8L2g0PlwiKVxuICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPGg0PiR7cmVjaXBlLmNhbGN1bGF0ZUluZ3JlZGllbnRzQ29zdChpbmdyZWRpZW50cyl9PC9oND5gKTtcblxuICB9LFxuXG4gIGV4aXRSZWNpcGUoKSB7XG4gICAgbGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHdoaWxlIChmdWxsUmVjaXBlSW5mby5maXJzdENoaWxkICYmXG4gICAgZnVsbFJlY2lwZUluZm8ucmVtb3ZlQ2hpbGQoZnVsbFJlY2lwZUluZm8uZmlyc3RDaGlsZCkpO1xuICAgIGZ1bGxSZWNpcGVJbmZvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikucmVtb3ZlKCk7XG4gIH0sXG5cbiAgLy9TZWFyY2ggYmFyIGlucHV0IGRvbSB1cGRhdGVzXG4gIGRpc3BsYXlTZWFyY2hFcnJvcigpIHtcbiAgICBsZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gJ1dBVCBEQSBGVUsgWU9VIERPSU4/IT8hJztcbiAgICBjb25zdCByZXN1bHQgPSBzZWFyY2hJbnB1dC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGNsZWFyQWxsRmllbGRzKCkge1xuICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xuICAgIHRoaXMuY2xlYXJDaGVja2VkQm94ZXMoKTtcbiAgfSxcblxuICBjbGVhckZpZWxkKCkge1xuICAgIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gIH0sXG5cbiAgY2xlYXJDaGVja2VkQm94ZXMoKSB7XG4gICAgbGV0IGNoZWNrZWRCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tlZC10YWdcIik7XG4gICAgbGV0IGFycmF5Q2hlY2tlZEJveGVzID0gQXJyYXkuZnJvbShjaGVja2VkQm94ZXMpXG4gICAgYXJyYXlDaGVja2VkQm94ZXMuZm9yRWFjaChib3ggPT4ge1xuICAgICAgYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9KVxuICB9LFxuXG4gIGNyZWF0ZUFsbFJlY2lwZXMocmVjaXBlcykge1xuICAgIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgbGV0IGRvbVJlY2lwZSA9IFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmVjaXBlLmlkfWApO1xuICAgICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vUGFudHJ5Ly9cbiAgZGlzcGxheVBhbnRyeUluZm8ocGFudHJ5KSB7XG4gICAgcGFudHJ5LmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgaW5ncmVkaWVudEh0bWwgPSBgPGxpPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInBhbnRyeS1jaGVja2JveFwiIGlkPVwiJHtpbmdyZWRpZW50Lm5hbWV9XCI+XG4gICAgPGxhYmVsIGZvcj1cIiR7aW5ncmVkaWVudC5uYW1lfVwiPiR7aW5ncmVkaWVudC5uYW1lfSwgJHtpbmdyZWRpZW50LmNvdW50fTwvbGFiZWw+PC9saT5gO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYW50cnktbGlzdFwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaW5ncmVkaWVudEh0bWwpO1xuICAgIH0pO1xuICB9LCBcblxuICBmb3JtYXROdW1iZXIobnVtYmVyKSB7XG4gICAgY29uc3Qgc3RyaW5nZWROdW0gPSBudW1iZXIudG9TdHJpbmcoKTtcbiAgICBsZXQgaW5kZXg7XG4gICAgbGV0IGFmdGVyUGVyaW9kO1xuXG4gICAgaWYgKHN0cmluZ2VkTnVtLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGluZGV4ID0gc3RyaW5nZWROdW0uaW5kZXhPZignLicpO1xuICAgICAgYWZ0ZXJQZXJpb2QgPSBzdHJpbmdlZE51bS5zbGljZShpbmRleCArIDEpO1xuICAgIH1cbiAgICBpZiAoYWZ0ZXJQZXJpb2QgJiYgYWZ0ZXJQZXJpb2QubGVuZ3RoID4gMikge1xuICAgICAgYWZ0ZXJQZXJpb2QgPSBhZnRlclBlcmlvZC50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmdlZE51bS5zbGljZSgwLCBpbmRleCArIDEpLmNvbmNhdChhZnRlclBlcmlvZCkpIHx8IG51bWJlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcHBsZS1sb2dvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Nvb2tib29rLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFyY2gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2Vhc29uaW5nLnBuZ1wiOyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZ3JlZGllbnRzUmVwbyB7XG4gIGNvbnN0cnVjdG9yKGluZ3JlZGllbnRzKSB7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xuICB9XG5cbiAgZ2V0UmVjaXBlSWRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGZvdW5kSW5ncmVkaWVudCA9IHRoaXMuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmIChpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5pZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZm91bmRJbmdyZWRpZW50ID8gZm91bmRJbmdyZWRpZW50LmlkIDogMDtcbiAgfVxuXG4gIGdldFJlY2lwZU5hbWVCeUlkKGlkKSB7XG4gICAgY29uc3QgZm91bmRJbmdyZWRpZW50ID0gdGhpcy5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKGluZ3JlZGllbnQuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZvdW5kSW5ncmVkaWVudCA/IGZvdW5kSW5ncmVkaWVudC5uYW1lIDogXCJcIjtcbiAgfVxufVxuXG5cblxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFudHJ5IHtcbiAgY29uc3RydWN0b3IocGFudHJ5RGF0YSkge1xuICAgIHRoaXMuaXRlbXMgPSBwYW50cnlEYXRhO1xuICAgIHRoaXMuZm9yUmVjaXBlID0gW107XG4gICAgdGhpcy5ncm9jZXJ5TGlzdCA9IFtdO1xuICB9XG5cbiAgdGFrZVN0b2NrKHJlY2lwZSkge1xuICAgIHRoaXMuY2hlY2tQYW50cnkocmVjaXBlKTtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZCAmJiBpdGVtLmFtb3VudCA+IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSB7XG4gICAgICAgICAgdGhpcy5mb3JSZWNpcGUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtLmluZ3JlZGllbnQgPT09IGluZ3JlZGllbnQuaWQgJiYgaXRlbS5hbW91bnQgPCBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkge1xuICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7XG4gICAgICAgICAgICBpbmdyZWRpZW50OiBpdGVtLmluZ3JlZGllbnQsXG4gICAgICAgICAgICBhbW91bnQ6IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gaXRlbS5hbW91bnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tQYW50cnkocmVjaXBlKSB7XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgbmV3SXRlbXMgPSB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmluZ3JlZGllbnQgPT09IGluZ3JlZGllbnQuaWQpO1xuXG4gICAgICBpZiAoIW5ld0l0ZW1zKSB7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7XG4gICAgICAgICAgaW5ncmVkaWVudDogaW5ncmVkaWVudC5pZCxcbiAgICAgICAgICBhbW91bnQ6IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNhbk1ha2UocmVjaXBlKSB7XG4gICAgdGhpcy50YWtlU3RvY2socmVjaXBlKTtcbiAgICBpZiAodGhpcy5ncm9jZXJ5TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5ncm9jZXJ5TGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmdyZWRpZW50LmlkID09PSBpdGVtLmluZ3JlZGllbnQpIHtcbiAgICAgICAgICBsZXQgbmV3QW1vdW50ID0gaXRlbS5hbW91bnQgLSBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudDtcbiAgICAgICAgICBpZiAobmV3QW1vdW50ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpdGVtLmFtb3VudCA9IG5ld0Ftb3VudDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlUG9zdEJvZHkodXNlciwgaW5ncmVkaWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInVzZXJJRFwiOiB1c2VyLmlkLFxuICAgICAgXCJpbmdyZWRpZW50SURcIjogaW5ncmVkaWVudC5pZCxcbiAgICAgIFwiaW5ncmVkaWVudE1vZGlmaWNhdGlvblwiOiAtaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnRcbiAgICB9XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjaXBlUmVwbyB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZXMpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSByZWNpcGVzLm1hcChyZWNpcGUgPT4gbmV3IFJlY2lwZShyZWNpcGUpKTtcbiAgfVxuXG4gIHJldHVybkFsbFRhZ3MoKSB7XG4gICAgbGV0IHRhZ3MgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgcmVjaXBlLnRhZ3MuZmlsdGVyKHRhZyA9PiB7XG4gICAgICAgIGlmICghdGFncy5pbmNsdWRlcyh0YWcpKSB7XG4gICAgICAgICAgdGFncy5wdXNoKHRhZyk7XG4gICAgICAgIH0gXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncy5zb3J0KCk7XG4gIH1cblxuICBzZWFyY2hSZWNpcGVzQnlJbmdyZWRpZW50KGluZ3JlZGllbnRJZCkge1xuICAgIGNvbnN0IGZpbHRlcmVkUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoaW5ncmVkaWVudElkID09PSBpbmdyZWRpZW50LmlkICYmICFmaWx0ZXJlZFJlY2lwZXMuaW5jbHVkZXMocmVjaXBlLm5hbWUpKSB7XG4gICAgICAgICAgZmlsdGVyZWRSZWNpcGVzLnB1c2gocmVjaXBlLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRSZWNpcGVzO1xuICB9XG5cbiAgZmlsdGVyTGlzdEJ5VGFnKGxpc3QsIHRhZykge1xuICAgIHJldHVybiBsaXN0LmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKSk7XG4gIH1cblxuICBmaWx0ZXJMaXN0QnlJbmdyZWRpZW50KGxpc3QsIGluZ3JlZGllbnRJZCkgeyAgICAgICAgXG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKChmaWx0ZXJlZCwgcmVjaXBlKSA9PiB7XG4gICAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKGluZ3JlZGllbnQuaWQgPT09IGluZ3JlZGllbnRJZCkge1xuICAgICAgICAgIGZpbHRlcmVkLnB1c2gocmVjaXBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBmaWx0ZXJMaXN0QnlOYW1lKGxpc3QsIG5hbWUpIHtcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5uYW1lLmluY2x1ZGVzKG5hbWUpKTtcbiAgfVxuXG5cbiAgZmlsdGVyTGlzdEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gaWQpO1xuICB9XG59XG5cbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZUluZ3JlZGllbnRzQ29zdChpbmdyZWRpZW50RGF0YSkge1xuICAgIGNvbnN0IGNvc3RJbkNlbnRzID0gdGhpcy5pbmdyZWRpZW50cy5yZWR1Y2UoKHRvdGFsQ29zdCwgcmVjaXBlSW5ncmVkaWVudCkgPT4ge1xuICAgICAgaW5ncmVkaWVudERhdGEuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKGluZ3JlZGllbnQuaWQgPT09IHJlY2lwZUluZ3JlZGllbnQuaWQpIHtcbiAgICAgICAgICBsZXQgaW5ncmVkaWVudFRvdGFsID0gaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIHJlY2lwZUluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50O1xuICAgICAgICAgIHRvdGFsQ29zdCArPSBpbmdyZWRpZW50VG90YWw7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG90YWxDb3N0O1xuICAgIH0sIDApO1xuICAgIGxldCBjb3N0ID0gY29zdEluQ2VudHMgKiAuMDE7XG4gICAgcmV0dXJuIGNvc3QudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KTtcbiAgfVxuXG4gIHJldHVybkluc3RydWN0aW9ucyhyZWNpcGUpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluc3RydWN0aW9ucy5tYXAoc3RlcCA9PiBzdGVwLmluc3RydWN0aW9uKTsgICAgXG4gIH1cbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IGluZ3JlZGllbnRzRGF0YSBmcm9tICcuL2RhdGEvaW5ncmVkaWVudC1kYXRhJztcblxuaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnXG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2gucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvY29va2Jvb2sucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvc2Vhc29uaW5nLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmcnO1xuXG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBSZWNpcGVSZXBvIGZyb20gJy4vcmVjaXBlLXJlcG8nO1xuaW1wb3J0IEluZ3JlZGllbnRzUmVwbyBmcm9tICcuL2luZ3JlZGllbnQtcmVwbyc7XG5cbmxldCBhbGxSZWNpcGVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93LWFsbC1idG5cIik7XG5sZXQgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXItYnRuXCIpO1xubGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zXCIpO1xubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmxldCBtZW51T3BlbiA9IGZhbHNlO1xubGV0IHBhbnRyeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktcGFudHJ5LWJ0blwiKTtcbmxldCBzYXZlZFJlY2lwZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdmVkLXJlY2lwZXMtYnRuXCIpO1xubGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJ0blwiKTtcbmxldCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XG5sZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcbmxldCBzaG93UGFudHJ5UmVjaXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvdy1wYW50cnktcmVjaXBlcy1idG5cIik7XG5cbmxldCB1c2VyO1xubGV0IHJlY2lwZVJlcG87XG5sZXQgcmVjaXBlcyA9IFtdO1xubGV0IGluZ3JlZGllbnRzUmVwbzsgIFxuXG5jb25zdCBpbml0aWF0ZURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJzUHJvbWlzZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICBjb25zdCBpbmdyZWRpZW50c1Byb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9pbmdyZWRpZW50cycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgY29uc3QgcmVjaXBlc1Byb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9yZWNpcGVzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gIGNvbnN0IHByb21pc2VzID0gW3VzZXJzUHJvbWlzZSwgaW5ncmVkaWVudHNQcm9taXNlLCByZWNpcGVzUHJvbWlzZV07XG4gIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIC50aGVuKGRhdGEgPT4geyAgICAgIFxuICAgICAgdXNlciA9IG5ldyBVc2VyKGRhdGFbMF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YVswXS5sZW5ndGgpXSk7XG4gICAgICBpbmdyZWRpZW50c1JlcG8gPSBuZXcgSW5ncmVkaWVudHNSZXBvKGRhdGFbMV0pO1xuICAgICAgcmVjaXBlUmVwbyA9IG5ldyBSZWNpcGVSZXBvKGRhdGFbMl0pO1xuICAgICAgY3JlYXRlQ2FyZHMoKTtcbiAgICAgIGRpc3BsYXlUYWdMaXN0KCk7XG4gICAgICBkb21VcGRhdGVzLndlbGNvbWVVc2VyKHVzZXIpO1xuICAgICAgZmluZFBhbnRyeUluZm8oKTtcbiAgICAgIHNob3dBbGxSZWNpcGVzKHJlY2lwZXMpO1xuICAgIH0pO1xufVxuXG4vLyBDUkVBVEUgUkVDSVBFIENBUkRTXG5jb25zdCBjcmVhdGVDYXJkcyA9ICgpID0+IHsgXG4gIGRvbVVwZGF0ZXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKTtcbiAgZG9tVXBkYXRlcy5zaG93U2VsZWN0ZWRSZWNpcGVzKHJlY2lwZVJlcG8ucmVjaXBlcywgdXNlcik7XG59XG5cbi8vIEZJTFRFUiBCWSBSRUNJUEUgVEFHU1xuY29uc3QgZGlzcGxheVRhZ0xpc3QgPSAoKSA9PiB7XG4gIGxldCB0YWdzID0gcmVjaXBlUmVwby5yZXR1cm5BbGxUYWdzKClcbiAgZG9tVXBkYXRlcy5jcmVhdGVMaXN0VGFncyh0YWdzKTtcbn1cblxuY29uc3QgZmluZENoZWNrZWRCb3hlcyA9ICgpID0+IHtcbiAgY29uc3QgdGFnQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tlZC10YWdcIik7XG4gIGNvbnN0IGNoZWNrYm94SW5mbyA9IEFycmF5LmZyb20odGFnQ2hlY2tib3hlcylcbiAgY29uc3Qgc2VsZWN0ZWRUYWdzID0gY2hlY2tib3hJbmZvLmZpbHRlcihib3ggPT4ge1xuICAgIHJldHVybiBib3guY2hlY2tlZDtcbiAgfSlcbiAgY29uc3Qgc2VsZWN0ZWRUYWdOYW1lcyA9IHNlbGVjdGVkVGFncy5tYXAodGFnID0+IHRhZy5pZCk7XG4gIGZpbmRUYWdnZWRSZWNpcGVzKHNlbGVjdGVkVGFnTmFtZXMpO1xufVxuXG5jb25zdCBmaW5kVGFnZ2VkUmVjaXBlcyA9IHNlbGVjdGVkID0+IHtcbiAgY29uc3QgZmlsdGVyZWRSZXN1bHRzID0gW107XG4gIHNlbGVjdGVkLmZvckVhY2godGFnID0+IHtcbiAgICBjb25zdCBmb3VuZFJlY2lwZSA9IHJlY2lwZVJlcG8uZmlsdGVyTGlzdEJ5VGFnKHJlY2lwZVJlcG8ucmVjaXBlcywgdGFnKTtcbiAgICBmb3VuZFJlY2lwZS5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBjb25zdCB0YWdNYXRjaCA9IGZpbHRlcmVkUmVzdWx0cy5maW5kKHJlc3VsdCA9PiByZWNpcGUuaWQgPT09IHJlc3VsdC5pZCk7XG4gICAgICBpZiAoIXRhZ01hdGNoKSB7XG4gICAgICAgIGZpbHRlcmVkUmVzdWx0cy5wdXNoKHJlY2lwZSlcbiAgICAgIH1cbiAgICB9KVxuICB9KSAgIFxuICBpZiAoZmlsdGVyZWRSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICBkb21VcGRhdGVzLnNob3dTZWxlY3RlZFJlY2lwZXMoZmlsdGVyZWRSZXN1bHRzLCB1c2VyKTtcbiAgfVxufVxuXG4vLyBGQVZPUklURSBSRUNJUEUgRlVOQ1RJT05BTElUWVxuY29uc3QgYWxsQ2xpY2tzSW5NYWluID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcImNhcmQtYXBwbGUtaWNvblwiKSB7XG4gICAgYWRkVG9NeVJlY2lwZXMoKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZXhpdC1yZWNpcGUtYnRuXCIpIHtcbiAgICBkb21VcGRhdGVzLmV4aXRSZWNpcGUoKTtcbiAgfSBlbHNlIGlmIChpc0Rlc2NlbmRhbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucmVjaXBlLWNhcmRcIiksIGV2ZW50LnRhcmdldCkpIHtcbiAgICBvcGVuUmVjaXBlSW5mbyhldmVudCk7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9TYXZlZERvbSA9IHJlY2lwZSA9PiB7XG4gIGRvbVVwZGF0ZXMuZmlsbEFwcGxlKCk7XG4gIHVzZXIuc2F2ZVJlY2lwZSh1c2VyLmZhdm9yaXRlUmVjaXBlcywgcmVjaXBlKTtcbn1cblxuY29uc3QgcmVtb3ZlRnJvbVNhdmVkRG9tID0gcmVjaXBlID0+IHtcbiAgYWxlcnQoJ1lvdSBoYXZlIHJlbW92ZWQgYSByZWNpcGUgZnJvbSBNeSBSZWNpcGVzIScpO1xuICBkb21VcGRhdGVzLnJlbW92ZUFwcGxlKCk7XG4gIHVzZXIucmVtb3ZlUmVjaXBlKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCByZWNpcGUpO1xuICBjcmVhdGVDYXJkcygpO1xuICBzaG93V2VsY29tZUJhbm5lcigpO1xufVxuXG5jb25zdCBhZGRUb015UmVjaXBlcyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZElkID0gZG9tVXBkYXRlcy5nZXRDYXJkSWQoKTtcbiAgY29uc3QgcmVjaXBlID0gcmVjaXBlUmVwby5maWx0ZXJMaXN0QnlJZChjYXJkSWQpO1xuXG4gIGlmICghdXNlci5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgIGFkZFRvU2F2ZWREb20ocmVjaXBlKTtcbiAgfSBlbHNlIGlmICh1c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgcmVtb3ZlRnJvbVNhdmVkRG9tKHJlY2lwZSk7XG4gIH0gXG59XG5cbmNvbnN0IGlzRGVzY2VuZGFudCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gIGxldCBub2RlID0gY2hpbGQ7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBzaG93U2F2ZWRSZWNpcGVzID0gKCkgPT4ge1xuICB1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGggPiAwID8gKFxuICAgIGRvbVVwZGF0ZXMuc2hvd1NlbGVjdGVkUmVjaXBlcyh1c2VyLmZhdm9yaXRlUmVjaXBlcywgdXNlciksIFxuICAgIHNob3dNeVJlY2lwZXNCYW5uZXIoKVxuICApIDogY3JlYXRlQ2FyZHMoKTtcbn1cblxuLy8gQ1JFQVRFIFJFQ0lQRSBJTlNUUlVDVElPTlNcbmNvbnN0IG9wZW5SZWNpcGVJbmZvID0gZXZlbnQgPT4geyBcbiAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7IFxuICBjb25zdCByZWNpcGVJZCA9IHBhcnNlSW50KGV2ZW50LnBhdGguZmluZChlID0+IGUuaWQpLmlkKTsgICAgXG4gIGNvbnN0IHJlY2lwZSA9IHJlY2lwZVJlcG8uZmlsdGVyTGlzdEJ5SWQocmVjaXBlSWQpOyAgXG4gIGV4cGFuZFJlY2lwZUNhcmQocmVjaXBlKTsgIFxufVxuXG5jb25zdCBnZW5lcmF0ZUluZ3JlZGllbnRzID0gcmVjaXBlID0+IHsgXG4gIHJldHVybiByZWNpcGUuaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBpbmdyZWRpZW50c1JlcG8uZ2V0UmVjaXBlTmFtZUJ5SWQoaW5ncmVkaWVudC5pZCk7XG4gICAgcmV0dXJuIGAke2RvbVVwZGF0ZXMuY2FwaXRhbGl6ZShuYW1lKX0gKCR7ZG9tVXBkYXRlcy5mb3JtYXROdW1iZXIoaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQpfSAke2luZ3JlZGllbnQucXVhbnRpdHkudW5pdH0pYDtcbiAgfSkuam9pbignLCAnKTtcbn1cblxuY29uc3QgZXhwYW5kUmVjaXBlQ2FyZCA9IHJlY2lwZSA9PiB7ICBcbiAgbGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zXCIpO1xuICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLCBcIjxzZWN0aW9uIGlkPSdvdmVybGF5Jz48L3NlY3Rpb24+XCIpO1xuICBkb21VcGRhdGVzLmNyZWF0ZUluc3RydWN0aW9uc1RpdGxlKHJlY2lwZSwgZ2VuZXJhdGVJbmdyZWRpZW50cyhyZWNpcGUpKTtcbiAgZG9tVXBkYXRlcy5jcmVhdGVJbnN0cnVjdGlvbnNJbWFnZShyZWNpcGUpO1xuICBkb21VcGRhdGVzLmNyZWF0ZUluc3RydWN0aW9uc0xpc3QocmVjaXBlLmluc3RydWN0aW9ucyk7XG4gIGRvbVVwZGF0ZXMuY3JlYXRlRXN0aW1hdGVkUHJpY2UocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpO1xuICBmdWxsUmVjaXBlSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjsgXG59XG5cbi8vIFRPR0dMRSBESVNQTEFZUyAvLyBcbmNvbnN0IHNob3dNeVJlY2lwZXNCYW5uZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXJlY2lwZXMtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmNvbnN0IHNob3dXZWxjb21lQmFubmVyID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWUtbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1yZWNpcGVzLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbi8vIFNFQVJDSCBSRUNJUEVTXG5jb25zdCBzZWFyY2hSZWNpcGVzID0gKCkgPT4ge1xuICBsZXQgaW5wdXQgPSBzZWFyY2hJbnB1dC52YWx1ZTsgIFxuXG4gIGlucHV0ID0gaW5wdXQudHJpbSgpO1xuICBpbnB1dCA9IGRvbVVwZGF0ZXMuY2FwaXRhbGl6ZShpbnB1dCk7XG4gIHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgPyAoXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5U2VhcmNoRXJyb3IoKSxcbiAgICBkb21VcGRhdGVzLmNsZWFyRmllbGQoKVxuICApIDogZG9tVXBkYXRlcy5zaG93U2VsZWN0ZWRSZWNpcGVzKGZpbmRSZWNpcGVNYXRjaGVzKGlucHV0KSwgdXNlcik7XG59XG5cbmNvbnN0IGZpbmRSZWNpcGVNYXRjaGVzID0gaW5wdXQgPT4ge1xuICBsZXQgbmFtZU1hdGNoZXM7XG4gIGxldCBpZE1hdGNoZXM7XG4gIGxldCBpbmdyZWRpZW50SWQ7XG4gIGxldCByZWNpcGVNYXRjaGVzO1xuXG4gIGluZ3JlZGllbnRJZCA9IGluZ3JlZGllbnRzUmVwby5nZXRSZWNpcGVJZEJ5TmFtZShpbnB1dCk7XG4gIG5hbWVNYXRjaGVzID0gcmVjaXBlUmVwby5maWx0ZXJMaXN0QnlOYW1lKHJlY2lwZVJlcG8ucmVjaXBlcywgaW5wdXQpO1xuICBpZE1hdGNoZXMgPSByZWNpcGVSZXBvLmZpbHRlckxpc3RCeUluZ3JlZGllbnQocmVjaXBlUmVwby5yZWNpcGVzLCBpbmdyZWRpZW50SWQpO1xuICByZWNpcGVNYXRjaGVzID0gWy4uLm5hbWVNYXRjaGVzXTtcbiAgaWRNYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgIGNvbnN0IGlzUmVjaXBlRm91bmQgPSByZWNpcGVNYXRjaGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gbWF0Y2guaWQpO1xuICAgIGlmICghaXNSZWNpcGVGb3VuZCkge1xuICAgICAgcmVjaXBlTWF0Y2hlcyA9IFsuLi5yZWNpcGVNYXRjaGVzLCBtYXRjaF07XG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVjaXBlTWF0Y2hlcztcbn1cblxuY29uc3QgcHJlc3NFbnRlclNlYXJjaCA9IChldmVudCkgPT4geyBcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2VhcmNoUmVjaXBlcygpO1xuICBkb21VcGRhdGVzLmNsZWFyQWxsRmllbGRzKCk7XG59XG5cbmNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7ICBcbiAgdmFyIG1lbnVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1tZW51XCIpO1xuICBtZW51T3BlbiA9ICFtZW51T3BlbjtcbiAgaWYgKG1lbnVPcGVuKSB7XG4gICAgbWVudURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0gZWxzZSB7XG4gICAgbWVudURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5jb25zdCBzaG93QWxsUmVjaXBlcyA9ICgpID0+IHtcbiAgY3JlYXRlQ2FyZHMoKTtcbiAgc2hvd1dlbGNvbWVCYW5uZXIoKTtcbn1cblxuLy8gQ1JFQVRFIEFORCBVU0UgUEFOVFJZIFxuXG5jb25zdCBmaW5kUGFudHJ5SW5mbyA9ICgpID0+IHsgICBcbiAgbGV0IGluZ3JlZGllbnRSZXBvID0gbmV3IEluZ3JlZGllbnRzUmVwbyhpbmdyZWRpZW50c0RhdGEpO1xuICBsZXQgcGFudHJ5SW5mbyA9IHVzZXIucGFudHJ5Lml0ZW1zLnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgbGV0IG91dHB1dE9iamVjdCA9IHtcbiAgICAgIG5hbWU6IGluZ3JlZGllbnRSZXBvLmdldFJlY2lwZU5hbWVCeUlkKGluZ3JlZGllbnQuaW5ncmVkaWVudCksXG4gICAgICBjb3VudDogaW5ncmVkaWVudC5hbW91bnRcbiAgICB9XG4gICAgYWNjLnB1c2gob3V0cHV0T2JqZWN0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheVBhbnRyeUluZm8ocGFudHJ5SW5mby5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSk7IFxufVxuXG5jb25zdCBmaW5kQ2hlY2tlZFBhbnRyeUJveGVzID0gKCkgPT4ge1xuICBsZXQgcGFudHJ5Q2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFudHJ5LWNoZWNrYm94XCIpO1xuICBsZXQgcGFudHJ5Q2hlY2tib3hJbmZvID0gQXJyYXkuZnJvbShwYW50cnlDaGVja2JveGVzKVxuICBsZXQgc2VsZWN0ZWRJbmdyZWRpZW50cyA9IHBhbnRyeUNoZWNrYm94SW5mby5maWx0ZXIoYm94ID0+IHtcbiAgICByZXR1cm4gYm94LmNoZWNrZWQ7XG4gIH0pXG4gIHNob3dBbGxSZWNpcGVzKCk7XG4gIGlmIChzZWxlY3RlZEluZ3JlZGllbnRzLmxlbmd0aCA+IDApIHtcbiAgICBmaW5kUmVjaXBlc1dpdGhDaGVja2VkSW5ncmVkaWVudHMoc2VsZWN0ZWRJbmdyZWRpZW50cyk7XG4gIH1cbn1cblxuY29uc3QgZmluZFJlY2lwZXNXaXRoQ2hlY2tlZEluZ3JlZGllbnRzID0gKHNlbGVjdGVkKSA9PiB7XG4gIGxldCByZWNpcGVDaGVja2VyID0gKGFyciwgdGFyZ2V0KSA9PiB0YXJnZXQuZXZlcnkodiA9PiBhcnIuaW5jbHVkZXModikpOyBcbiAgbGV0IGluZ3JlZGllbnROYW1lcyA9IHNlbGVjdGVkLm1hcChpdGVtID0+IHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfSlcbiAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7IFxuICAgIGxldCBhbGxSZWNpcGVJbmdyZWRpZW50cyA9IFtdO1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgYWxsUmVjaXBlSW5ncmVkaWVudHMucHVzaChpbmdyZWRpZW50Lm5hbWUpO1xuICAgIH0pO1xuICAgIGlmICghcmVjaXBlQ2hlY2tlcihhbGxSZWNpcGVJbmdyZWRpZW50cywgaW5ncmVkaWVudE5hbWVzKSkge1xuICAgICAgbGV0IGRvbVJlY2lwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3JlY2lwZS5pZH1gKTtcbiAgICAgIGRvbVJlY2lwZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdGlhdGVEYXRhKTtcbmFsbFJlY2lwZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBbGxSZWNpcGVzKTtcbmZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmluZENoZWNrZWRCb3hlcyk7XG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbGxDbGlja3NJbk1haW4pO1xucGFudHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNZW51KTtcbnNhdmVkUmVjaXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NhdmVkUmVjaXBlcyk7XG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFJlY2lwZXMpO1xuc2hvd1BhbnRyeVJlY2lwZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbmRDaGVja2VkUGFudHJ5Qm94ZXMpO1xuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHByZXNzRW50ZXJTZWFyY2gpOyIsImltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEpIHtcbiAgICB0aGlzLmlkID0gdXNlckRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IG5ldyBQYW50cnkodXNlckRhdGEucGFudHJ5KVxuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gW107XG4gIH1cblxuICBzYXZlUmVjaXBlKGxpc3QsIHJlY2lwZSkge1xuICAgIGxpc3QucHVzaChyZWNpcGUpO1xuICB9ICBcblxuICByZW1vdmVSZWNpcGUobGlzdCwgcmVjaXBlKSB7XG4gICAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YocmVjaXBlKTtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByZXR1cm5GaXJzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZS5zcGxpdCgnICcpWzBdO1xuICB9XG5cbiAgaXNGYXZvcml0ZWQocmVjaXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbmQoZmF2UmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gZmF2UmVjaXBlLmlkKTtcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9