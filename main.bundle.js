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
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-color: #5B7894;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: none;\n  font-family: \"Quicksand\", sans-serif;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n\nh1 {\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  grid-area: fresh; }\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: 0.8s ease; }\n\nh4 {\n  color: #359567;\n  background-color: #C4EB67;\n  border-radius: 3px;\n  font-size: smaller;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content; }\n\n/* HEADER */\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: none;\n  grid-area: header; }\n\nspan {\n  color: #C4EB67;\n  font-weight: 400; }\n\n.header-apple-icon {\n  margin-left: 1.1%;\n  width: .7em; }\n\n#search {\n  border: 0.2em outset #C4EB67;\n  border-radius: 15px 15px 15px 15px;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-family: \"Quicksand\", sans-serif;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  grid-area: search; }\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border: none;\n  border-radius: 10px 0px 0px 10px;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: 0.8s ease;\n  width: 100%; }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-left: 3px outset #C4EB67;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%; }\n\n.nav-btn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  font-weight: 700;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  transition: 0.4s ease;\n  width: 15%; }\n  .nav-btn:hover {\n    color: #C4EB67;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: 0.4s ease; }\n  .nav-btn img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 2px 0px; }\n\n.saved-recipes-btn {\n  grid-area: button; }\n\n.saved-ingredients-btn {\n  border-left: 3px solid #C4EB67;\n  grid-area: button2; }\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  grid-area: image;\n  height: 9em;\n  overflow: hidden;\n  width: 100%; }\n\n.my-recipes-banner {\n  text-align: center;\n  width: 95%;\n  display: none;\n  margin-top: 1%; }\n  .my-recipes-banner h1 {\n    color: white;\n    width: 100%; }\n\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n  margin-top: 3%; }\n  .welcome-msg h1 {\n    color: white;\n    width: 100%; }\n\n/* FILTER SIDEBAR */\naside {\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: auto;\n  text-align: center; }\n\n.wrap {\n  background-color: white;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px; }\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px; }\n\nli {\n  margin: 2px; }\n\n/* RECIPE CARD SECTION */\nmain {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  grid-area: main;\n  flex-wrap: wrap;\n  margin: 1em; }\n\n.title-container {\n  align-self: center;\n  grid-area: title;\n  text-align: center;\n  margin-bottom: 13%; }\n\n.recipe-card {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-areas: \"title title\" \"food food\" \"tags apple\";\n  background-color: white;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  box-shadow: none;\n  cursor: pointer;\n  height: 18em;\n  margin: 2%;\n  padding: 1.5%;\n  width: 15em;\n  margin: 1em; }\n  .recipe-card:hover .card-photo-preview {\n    opacity: 50%;\n    transition: 0.8s ease; }\n  .recipe-card:hover .text {\n    font-size: 20px;\n    opacity: 100%;\n    transition: 0.5s ease;\n    width: 100%; }\n  .recipe-card:hover h3 {\n    text-shadow: 0px 0px 4px #C4EB67;\n    transition: 0.8s ease; }\n\n.tags {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-area: tags;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  overflow: auto; }\n\n.apple-container {\n  align-items: center;\n  justify-items: flex-end;\n  display: inline-grid;\n  grid-area: apple; }\n\n.card-apple-icon {\n  cursor: pointer;\n  height: 3em;\n  width: 3em; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 3%;\n  cursor: pointer;\n  height: 130px;\n  transition: 0.8s ease;\n  width: 100%; }\n\n.card-photo-container {\n  grid-area: food;\n  align-items: center;\n  display: flex;\n  height: 80%;\n  position: relative; }\n\n.text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: 0.5s ease; }\n\n/* BUTTONS */\n.filter-btn, .show-pantry-recipes-btn, .show-all-btn {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3%;\n  box-shadow: none;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 1% 2% 1% 2%; }\n  .filter-btn:hover, .show-pantry-recipes-btn:hover, .show-all-btn:hover {\n    background-color: #84C8A4; }\n\n.show-pantry-recipes-btn {\n  margin-top: 5%; }\n\n.show-all-btn {\n  height: 2.5em;\n  margin-top: 1%; }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 65%;\n  margin-left: 81%;\n  margin-top: 7%;\n  overflow: scroll;\n  padding: 1%;\n  position: absolute;\n  text-align: center;\n  width: 18%;\n  z-index: 3; }\n  .drop-menu h2 {\n    color: #359567;\n    margin: 0%; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 10%;\n  text-align: left; }\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 1%;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n  .recipe-instructions h4 {\n    background: white;\n    color: #359567; }\n  .recipe-instructions p {\n    margin-left: 2%; }\n  .recipe-instructions ol {\n    margin-right: 2%; }\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 2%;\n  box-shadow: none;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: 0.3s ease; }\n  #exit-recipe-btn:hover {\n    background: #C4EB67;\n    transition: 0.3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 2em;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #5B7894;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n@media only screen and (max-width: 900px) {\n  body {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: none;\n    font-family: \"Quicksand\", sans-serif;\n    grid-template-areas: \"header header\" \"aside image\" \"aside image\" \"main main\";\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: auto; }\n  header {\n    display: grid;\n    grid-template-columns: 4fr 1fr 1fr;\n    grid-template-rows: none;\n    grid-template-areas: \"fresh button button2\" \"search search search\";\n    grid-area: header;\n    padding: 1%; }\n  aside {\n    width: 40%; }\n  .wrap {\n    height: 4em;\n    overflow: scroll; }\n  .ing-pan-btn {\n    display: flex;\n    justify-self: end;\n    align-content: flex-end;\n    width: 50%; }\n  .drop-menu {\n    margin-left: 25%;\n    width: 50%;\n    height: 50%;\n    margin-top: 25%; }\n  h1 {\n    justify-self: center;\n    width: 90%; }\n  #search {\n    width: 85%;\n    justify-self: center; }\n  .banner-image {\n    height: 7em; } }\n\n@media only screen and (max-width: 550px) {\n  header {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: none;\n    grid-template-areas: \"fresh fresh fresh\"  \"none button button2\" \"search search search\";\n    justify-self: center;\n    align-self: center; }\n  h1 {\n    width: 50%;\n    font-size: 2.8em; }\n  .my-pantry-btn {\n    margin-right: 96%; }\n  .saved-recipes-btn {\n    margin-right: 57%; }\n  .saved-ingredients-btn {\n    border-left: none; }\n  .nav-btn {\n    align-items: none; }\n  .recipe-card {\n    width: 20em; }\n  #recipe-title {\n    font-size: 1.5em; } }\n", "",{"version":3,"sources":["webpack://./src/css/styles.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"variables\";\n@import \"media-queries\";\n\nbody {\n  background-color: $primary-color;\n  @include gridDisplay(1fr 5fr, none);\n  font-family: $font;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nh1 {\n  align-self: center;\n  color: $text-background;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  grid-area: fresh;\n}\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px;\n}\n\nh3 {\n  color: $border-font;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  @include transition(.8s ease)\n}\n\nh4 {\n  color: $border-font;\n  background-color: $background;\n  border-radius: 3px;\n  font-size: smaller;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content;\n}\n\n\n/* HEADER */\nheader {\n  @include flexDisplay(row, none);\n  grid-area: header;\n}\n\nspan {\n  color: $background;\n  font-weight: 400;\n}\n\n.header-apple-icon {\n  margin-left: 1.1%;\n  width: .7em;\n}\n\n#search {\n  @include borderStyling(.2em outset $background, 15px 15px 15px 15px, 0px 0px 7px 0px #475d74);\n  @include flexDisplay(row, center);\n  font-family: $font;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  grid-area: search;\n}\n\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  @include borderStyling(none, 10px 0px 0px 10px, inset -3px -1px 20px 1px #5c7894);\n  color: $primary-color;\n  font-family: $font;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  @include transition(.8s ease);\n  width: 100%;\n}\n\n.search-label {\n  display: none;\n}\n\n.search-btn {\n  border-left: 3px outset $background;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%;\n}\n\n.nav-btn {\n  @include flexDisplay(column, center);\n  align-items: center;\n  background:$primary-color no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  font-weight: 700;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  @include transition(.4s ease);\n  width: 15%;\n\n  &:hover {\n  color: $background;\n  font-size: 14px;\n  text-shadow: 0px 2px 4px black;\n  @include transition(.4s ease);\n}\n\n  img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px;\n}\n}\n\n.saved-recipes-btn {\n  grid-area: button;\n}\n\n.saved-ingredients-btn {\n  border-left: 3px solid $background;\n  grid-area: button2;\n}\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px;\n  // @extend .nav-btn;\n}\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\");\n  grid-area: image;\n  height: 9em;\n  overflow: hidden;\n  width: 100%;\n}\n\n.my-recipes-banner {\n  text-align: center;\n  width: 95%;\n  display: none;\n  margin-top: 1%;\n\n    h1 {\n      color: $text-background;\n      width: 100%;\n    }\n}\n\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n  margin-top: 3%;\n\n    h1 {\n      color: $text-background;\n      width: 100%;\n    }\n}\n\n/* FILTER SIDEBAR */\naside {\n  background-color: $text-background;\n  @include flexDisplay(row, center);\n  height: auto;\n  text-align: center;\n}\n\n.wrap {\n  background-color: $text-background;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px;\n}\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n}\n\nli {\n  margin: 2px;\n}\n\n/* RECIPE CARD SECTION */\nmain {\n  @include flexDisplay(row, center);\n  grid-area: main;\n  flex-wrap: wrap;\n  margin: 1em;\n  \n}\n\n.title-container {\n  align-self: center;\n  grid-area: title;\n  text-align: center;\n  margin-bottom: 13%;\n}\n\n.recipe-card {\n  @include gridDisplay(2fr 1fr, 1fr 1fr 1fr);\n  grid-template-areas: \n  \"title title\"\n  \"food food\"\n  \"tags apple\";\n  background-color: $text-background;\n  @include borderStyling(2px solid $background, 7px, none);\n  cursor: pointer;\n  height: 18em;\n  margin: 2%;\n  padding: 1.5%;\n  width: 15em;\n  margin: 1em;\n\n  &:hover .card-photo-preview {\n    opacity: 50%;\n    @include transition(.8s ease);\n  }\n\n  &:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  @include transition(.5s ease);\n  width: 100%;\n}\n\n  &:hover h3 {\n  text-shadow: 0px 0px 4px $background;\n  @include transition(.8s ease);\n}\n}\n\n.tags {\n  @include gridDisplay(1fr 1fr, 1fr 1fr);\n  grid-area: tags;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  overflow: auto;\n}\n\n.apple-container {\n  align-items: center;\n  justify-items: flex-end;\n  display: inline-grid;\n  grid-area: apple;\n}\n\n.card-apple-icon {\n  cursor: pointer;\n  height: 3em;\n  width: 3em;\n}\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 3%;\n  cursor: pointer;\n  height: 130px;\n  @include transition(.8s ease);\n  width: 100%;\n}\n\n.card-photo-container {\n  grid-area: food;\n  align-items: center;\n  display: flex;\n  height: 80%;\n  position: relative;\n}\n\n.text {\n  background: $border-font;\n  color: $text-background;;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  @include transition(.5s ease);\n}\n\n\n/* BUTTONS */\n.filter-btn {\n  background-color: $border-font;\n  @include borderStyling(0, 3%, none);\n  color: $text-background;\n  cursor: pointer;\n  font-family: $font;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 1% 2% 1% 2%;\n\n    &:hover {\n    background-color: #84C8A4;\n    }\n}\n\n  .show-pantry-recipes-btn {\n    @extend .filter-btn;\n    margin-top: 5%;\n  }\n\n  .show-all-btn {\n    @extend .filter-btn;\n    height: 2.5em;\n    margin-top: 1%;\n  }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 65%;\n  margin-left: 81%;\n  margin-top: 7%;\n  overflow: scroll;\n  padding: 1%;\n  position: absolute;\n  text-align: center;\n  width: 18%;\n  z-index: 3;\n\n  h2 {\n    color: $border-font;\n    margin: 0%;\n  }\n}\n\n.pantry-list {\n  color: #000000;\n  padding-left: 10%;\n  text-align: left;\n}\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: $text-background;\n  @include borderStyling(3px solid $background, 1%, 1px 1px 115px black);\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000;\n\n  h4 {\n    background: $text-background;\n    color: $border-font;\n  }\n\n  p {\n    margin-left: 2%;\n  }\n\n  ol {\n    margin-right: 2%;\n  }\n}\n\n#exit-recipe-btn {\n  background: $text-background;\n  @include borderStyling(2px double $border-font, 2%, none);\n  color: $border-font;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  @include transition(.3s ease);\n\n  &:hover {\n    background: $background;\n    @include transition(.3s ease);\n  }\n}\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: $text-background;\n  font-size: 2em;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black;\n}\n\n#overlay {\n  filter:alpha(opacity=50);\n  background-color:$primary-color;\n  height:100%;\n  left:0;\n  opacity:0.5;\n  position:fixed;\n  top:0;\n  width:100%;\n  z-index:100;\n}\n\n@media only screen and (max-width: 900px) {\nbody {\n  @include gridDisplay(1fr 1fr, none);\n  font-family: $font;\n  grid-template-areas:\n    \"header header\"\n    \"aside image\"\n    \"aside image\"\n    \"main main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nheader {\n  @include gridDisplay(4fr 1fr 1fr,none);\n  grid-template-areas: \n  \"fresh button button2\"\n  \"search search search\";\n  grid-area: header;\n  padding: 1%;\n}\n\naside {\n  width: 40%;\n}\n\n.wrap {\n  height: 4em;\n  overflow: scroll;\n}\n\n.ing-pan-btn {\n  display: flex;\n  justify-self: end;\n  align-content: flex-end;\n  width:50%;\n}\n\n.drop-menu {\n  margin-left: 25%;\n  width: 50%;\n  height: 50%;\n  margin-top: 25%;\n  }\n\nh1 {\n  justify-self: center;\n  width: 90%;\n}\n\n#search {\n  width: 85%;\n  justify-self: center;\n}\n\n.banner-image {\n  height: 7em;\n}\n\n}\n\n@media only screen and (max-width: 550px) {\n  header {\n    @include gridDisplay(1fr 1fr 1fr, none);\n    grid-template-areas: \n    \"fresh fresh fresh\" \n    \"none button button2\"\n    \"search search search\";\n    justify-self: center;\n    align-self: center;\n  }\n\n  h1 {\n    width: 50%;\n    font-size: 2.8em;\n  }\n\n  .my-pantry-btn {\n    margin-right: 96%;\n  }\n\n  .saved-recipes-btn {\n    margin-right: 57%;\n  }\n\n  .saved-ingredients-btn {\n    border-left: none;\n  }\n\n  .nav-btn {\n    align-items: none;\n  }\n\n  .recipe-card {\n    width: 20em;\n  }\n\n  #recipe-title {\n    font-size: 1.5em;\n  }\n \n}","$primary-color: #5B7894;\n$text-background: white;\n$font: \"Quicksand\",\nsans-serif;\n$border-font: #359567;\n$background: #C4EB67;\n\n\n\n@mixin transition($value) {\n  transition: $value;\n}\n\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n}\n\n@mixin flexDisplay($direction, $justify) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n}\n\n@mixin borderStyling($border, $radius, $shadow) {\n  border: $border;\n  border-radius: $radius;\n  box-shadow: $shadow;\n}"],"sourceRoot":""}]);
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




// import './css/base.scss';












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
function createCards() { 
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].clearMainCardSection();
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].showSelectedRecipes(recipeRepo.recipes, user);
}

// FILTER BY RECIPE TAGS
function displayTagList() {
  let tags = recipeRepo.returnAllTags()
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].createListTags(tags);
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
    _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].showSelectedRecipes(filteredResults, user);
  }
}

// FAVORITE RECIPE FUNCTIONALITY
function allClicksInMain(event) {
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

function pressEnterSearch(event) { 
  event.preventDefault();
  searchRecipes();
  _domUpdates__WEBPACK_IMPORTED_MODULE_9__["default"].clearAllFields();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BUElDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzPzdiMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW5ncmVkaWVudC1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3JlY2lwZS1kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3VzZXJzLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXBwbGUtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2VhcmNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXNvbmluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZ3JlZGllbnQtcmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUtcmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lIO0FBQzdCO0FBQ087QUFDNUI7QUFDdkUsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsZ0VBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsU0FBUyw4QkFBOEIsa0JBQWtCLG1DQUFtQyw2QkFBNkIsMkNBQTJDLDBFQUEwRSxrQkFBa0IsY0FBYyxlQUFlLGlDQUFpQyxFQUFFLFFBQVEsdUJBQXVCLGlCQUFpQiwrQ0FB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LE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsZUFBZSxNQUFNLFlBQVksa0JBQWtCLFlBQVksS0FBSyxhQUFhLFlBQVksYUFBYSxlQUFlLFdBQVcsa0JBQWtCLE1BQU0sYUFBYSxZQUFZLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sZ0JBQWdCLFdBQVcsS0FBSyxXQUFXLGFBQWEsZUFBZSxXQUFXLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sV0FBVyxhQUFhLGVBQWUsWUFBWSxhQUFhLGVBQWUsZUFBZSxlQUFlLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxlQUFlLEtBQUssV0FBVyxtQkFBbUIsT0FBTyxXQUFXLFVBQVUsY0FBYyxnQkFBZ0IsTUFBTSxjQUFjLG9CQUFvQixNQUFNLFdBQVcsYUFBYSxlQUFlLFdBQVcsWUFBWSxhQUFhLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGdCQUFnQixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLGNBQWMsaUJBQWlCLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxrQkFBa0IsTUFBTSxhQUFhLGNBQWMsY0FBYyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxvQkFBb0IsV0FBVyxLQUFLLGFBQWEsY0FBYyxlQUFlLGVBQWUsYUFBYSxZQUFZLFlBQVksV0FBVyxZQUFZLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsZ0JBQWdCLFlBQVksS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsZUFBZSxLQUFLLFlBQVksa0JBQWtCLEtBQUssVUFBVSxZQUFZLG1CQUFtQixZQUFZLEtBQUssYUFBYSxlQUFlLGVBQWUsZUFBZSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxlQUFlLEtBQUssYUFB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QWlELFVBQVU7QUFDM0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0Q7Ozs7Ozs7Ozs7OztBQ3RSQTtBQUFBO0FBQUE7QUFBOEI7O0FBRWY7QUFDZjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQU07QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwiaW1hZ2UgaW1hZ2VcXFwiIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bzsgfVxcblxcbmgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGdyaWQtYXJlYTogZnJlc2g7IH1cXG5cXG5oMiB7XFxuICBjb2xvcjogIzg0QzhBNDtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7IH1cXG5cXG5oMyB7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTclO1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4O1xcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlOyB9XFxuXFxuaDQge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4IDRweCAxcHggNHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50OyB9XFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBub25lO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7IH1cXG5cXG5zcGFuIHtcXG4gIGNvbG9yOiAjQzRFQjY3O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMS4xJTtcXG4gIHdpZHRoOiAuN2VtOyB9XFxuXFxuI3NlYXJjaCB7XFxuICBib3JkZXI6IDAuMmVtIG91dHNldCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCAjNDc1ZDc0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMS4yJSAwLjUlIDEuMiUgMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtYXJlYTogc2VhcmNoOyB9XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCB3aGl0ZSksIGNvbG9yLXN0b3AoMSwgI2UxZTFlMSkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NDtcXG4gIGNvbG9yOiAjNUI3ODk0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAlIDIlIDAlIDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLm5hdi1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjNUI3ODk0IG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbiAgd2lkdGg6IDE1JTsgfVxcbiAgLm5hdi1idG46aG92ZXIge1xcbiAgICBjb2xvcjogI0M0RUI2NztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTsgfVxcbiAgLm5hdi1idG4gaW1nIHtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAycHggMHB4OyB9XFxuXFxuLnNhdmVkLXJlY2lwZXMtYnRuIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uOyB9XFxuXFxuLnNhdmVkLWluZ3JlZGllbnRzLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNDNEVCNjc7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjI7IH1cXG5cXG4uaW5nLXBhbi1idG4ge1xcbiAgbWFyZ2luOiAxJSAwJTtcXG4gIHBhZGRpbmc6IDFweCA2cHggNXB4IDBweDsgfVxcblxcbi8qIEJBTk5FUiBJTUFHRSovXFxuLmJhbm5lci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gIGhlaWdodDogOWVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMSU7IH1cXG4gIC5teS1yZWNpcGVzLWJhbm5lciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ud2VsY29tZS1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbi10b3A6IDMlOyB9XFxuICAud2VsY29tZS1tc2cgaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLyogRklMVEVSIFNJREVCQVIgKi9cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzVweDsgfVxcblxcbmxpIHtcXG4gIG1hcmdpbjogMnB4OyB9XFxuXFxuLyogUkVDSVBFIENBUkQgU0VDVElPTiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMWVtOyB9XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTMlOyB9XFxuXFxuLnJlY2lwZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlXFxcIiBcXFwiZm9vZCBmb29kXFxcIiBcXFwidGFncyBhcHBsZVxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxOGVtO1xcbiAgbWFyZ2luOiAyJTtcXG4gIHBhZGRpbmc6IDEuNSU7XFxuICB3aWR0aDogMTVlbTtcXG4gIG1hcmdpbjogMWVtOyB9XFxuICAucmVjaXBlLWNhcmQ6aG92ZXIgLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogMC44cyBlYXNlOyB9XFxuICAucmVjaXBlLWNhcmQ6aG92ZXIgLnRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5yZWNpcGUtY2FyZDpob3ZlciBoMyB7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjQzRFQjY3O1xcbiAgICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7IH1cXG5cXG4udGFncyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiB0YWdzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4uYXBwbGUtY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC1hcmVhOiBhcHBsZTsgfVxcblxcbi5jYXJkLWFwcGxlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzZW07XFxuICB3aWR0aDogM2VtOyB9XFxuXFxuLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGZvb2Q7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogIzM1OTU2NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7IH1cXG5cXG4vKiBCVVRUT05TICovXFxuLmZpbHRlci1idG4sIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biwgLnNob3ctYWxsLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU5NTY3O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxJSAyJSAxJSAyJTsgfVxcbiAgLmZpbHRlci1idG46aG92ZXIsIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0bjpob3ZlciwgLnNob3ctYWxsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NEM4QTQ7IH1cXG5cXG4uc2hvdy1wYW50cnktcmVjaXBlcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogNSU7IH1cXG5cXG4uc2hvdy1hbGwtYnRuIHtcXG4gIGhlaWdodDogMi41ZW07XFxuICBtYXJnaW4tdG9wOiAxJTsgfVxcblxcbi8qIFBBTlRSWSBMSVNUICovXFxuLmRyb3AtbWVudSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIG1hcmdpbi1sZWZ0OiA4MSU7XFxuICBtYXJnaW4tdG9wOiA3JTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxOCU7XFxuICB6LWluZGV4OiAzOyB9XFxuICAuZHJvcC1tZW51IGgyIHtcXG4gICAgY29sb3I6ICMzNTk1Njc7XFxuICAgIG1hcmdpbjogMCU7IH1cXG5cXG4ucGFudHJ5LWxpc3Qge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4vKiBSRUNJUEUgSU5TVFJVQ1RJT05TICovXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogMSU7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMgaDQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMzNTk1Njc7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHAge1xcbiAgICBtYXJnaW4tbGVmdDogMiU7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIG9sIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcblxcbiNleGl0LXJlY2lwZS1idG4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzM1OTU2NztcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7IH1cXG4gICNleGl0LXJlY2lwZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjQzRFQjY3O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7IH1cXG5cXG4jcmVjaXBlLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjazsgfVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwiYXNpZGUgaW1hZ2VcXFwiIFxcXCJhc2lkZSBpbWFnZVxcXCIgXFxcIm1haW4gbWFpblxcXCI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bzsgfVxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiZnJlc2ggYnV0dG9uIGJ1dHRvbjJcXFwiIFxcXCJzZWFyY2ggc2VhcmNoIHNlYXJjaFxcXCI7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBwYWRkaW5nOiAxJTsgfVxcbiAgYXNpZGUge1xcbiAgICB3aWR0aDogNDAlOyB9XFxuICAud3JhcCB7XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuICAuaW5nLXBhbi1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MCU7IH1cXG4gIC5kcm9wLW1lbnUge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogMjUlOyB9XFxuICBoMSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICAjc2VhcmNoIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IH1cXG4gIC5iYW5uZXItaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDdlbTsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiZnJlc2ggZnJlc2ggZnJlc2hcXFwiICBcXFwibm9uZSBidXR0b24gYnV0dG9uMlxcXCIgXFxcInNlYXJjaCBzZWFyY2ggc2VhcmNoXFxcIjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcbiAgaDEge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LXNpemU6IDIuOGVtOyB9XFxuICAubXktcGFudHJ5LWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogOTYlOyB9XFxuICAuc2F2ZWQtcmVjaXBlcy1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU3JTsgfVxcbiAgLnNhdmVkLWluZ3JlZGllbnRzLWJ0biB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmF2LWJ0biB7XFxuICAgIGFsaWduLWl0ZW1zOiBub25lOyB9XFxuICAucmVjaXBlLWNhcmQge1xcbiAgICB3aWR0aDogMjBlbTsgfVxcbiAgI3JlY2lwZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UseUJDSnFCO0VBY3JCLGFBQWE7RUFDYiw4QkRWNEI7RUNXNUIsd0JEWGtDO0VBQ2xDLG9DQ0hRO0VESVIsK0RBR2M7RUFDZCxhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDViw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsWUNsQnFCO0VEbUJyQix3Q0FBd0M7RUFDeEMsZUFBZTtF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O0VBN1hyQjtJQWlZSSxpQkFBaUIsRUFBQTtFQWphckI7SUFxYUksaUJBQWlCLEVBQUE7RUFoVHJCO0lBb1RJLFdBQVcsRUFBQTtFQXhIZjtJQTRISSxnQkFBZ0IsRUFBQSxFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJ2YXJpYWJsZXNcXFwiO1xcbkBpbXBvcnQgXFxcIm1lZGlhLXF1ZXJpZXNcXFwiO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgxZnIgNWZyLCBub25lKTtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiaW1hZ2UgaW1hZ2VcXFwiXFxuICAgIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBmb250LWZhbWlseTogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmc6IDAuNSUgMC43JSAwJTtcXG4gIHdpZHRoOiA3MCU7XFxuICBncmlkLWFyZWE6IGZyZXNoO1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogIzg0QzhBNDtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE3JTtcXG4gIG1hcmdpbjogNXB4IDVweCAxMHB4IDBweDtcXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oLjhzIGVhc2UpXFxufVxcblxcbmg0IHtcXG4gIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KHJvdywgbm9uZSk7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuc3BhbiB7XFxuICBjb2xvcjogJGJhY2tncm91bmQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGVyLWFwcGxlLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEuMSU7XFxuICB3aWR0aDogLjdlbTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICBAaW5jbHVkZSBib3JkZXJTdHlsaW5nKC4yZW0gb3V0c2V0ICRiYWNrZ3JvdW5kLCAxNXB4IDE1cHggMTVweCAxNXB4LCAwcHggMHB4IDdweCAwcHggIzQ3NWQ3NCk7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShyb3csIGNlbnRlcik7XFxuICBmb250LWZhbWlseTogJGZvbnQ7XFxuICBtYXJnaW46IDEuMiUgMC41JSAxLjIlIDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWFyZWE6IHNlYXJjaDtcXG59XFxuXFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2IoMjU1LCAyNTUsIDI1NSkpLCBjb2xvci1zdG9wKDEsIHJnYigyMjUsMjI1LDIyNSkpKTtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcobm9uZSwgMTBweCAwcHggMHB4IDEwcHgsIGluc2V0IC0zcHggLTFweCAyMHB4IDFweCAjNWM3ODk0KTtcXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJSAyJSAwJSAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguOHMgZWFzZSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaC1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IG91dHNldCAkYmFja2dyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiRwcmltYXJ5LWNvbG9yIG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguNHMgZWFzZSk7XFxuICB3aWR0aDogMTUlO1xcblxcbiAgJjpob3ZlciB7XFxuICBjb2xvcjogJGJhY2tncm91bmQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC40cyBlYXNlKTtcXG59XFxuXFxuICBpbWcge1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDJweCAwcHg7XFxufVxcbn1cXG5cXG4uc2F2ZWQtcmVjaXBlcy1idG4ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxufVxcblxcbi5zYXZlZC1pbmdyZWRpZW50cy1idG4ge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkYmFja2dyb3VuZDtcXG4gIGdyaWQtYXJlYTogYnV0dG9uMjtcXG59XFxuXFxuLmluZy1wYW4tYnRuIHtcXG4gIG1hcmdpbjogMSUgMCU7XFxuICBwYWRkaW5nOiAxcHggNnB4IDVweCAwcHg7XFxuICAvLyBAZXh0ZW5kIC5uYXYtYnRuO1xcbn1cXG5cXG4vKiBCQU5ORVIgSU1BR0UqL1xcbi5iYW5uZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjUpLCByZ2JhKDAsMCwwLC41KSksdXJsKFxcXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1xcXCIpO1xcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gIGhlaWdodDogOWVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG5cXG4gICAgaDEge1xcbiAgICAgIGNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbi53ZWxjb21lLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLXRvcDogMyU7XFxuXFxuICAgIGgxIHtcXG4gICAgICBjb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4vKiBGSUxURVIgU0lERUJBUiAqL1xcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShyb3csIGNlbnRlcik7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53cmFwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luOiAycHg7XFxufVxcblxcbi8qIFJFQ0lQRSBDQVJEIFNFQ1RJT04gKi9cXG5tYWluIHtcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KHJvdywgY2VudGVyKTtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMWVtO1xcbiAgXFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEzJTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkIHtcXG4gIEBpbmNsdWRlIGdyaWREaXNwbGF5KDJmciAxZnIsIDFmciAxZnIgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInRpdGxlIHRpdGxlXFxcIlxcbiAgXFxcImZvb2QgZm9vZFxcXCJcXG4gIFxcXCJ0YWdzIGFwcGxlXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBAaW5jbHVkZSBib3JkZXJTdHlsaW5nKDJweCBzb2xpZCAkYmFja2dyb3VuZCwgN3B4LCBub25lKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMThlbTtcXG4gIG1hcmdpbjogMiU7XFxuICBwYWRkaW5nOiAxLjUlO1xcbiAgd2lkdGg6IDE1ZW07XFxuICBtYXJnaW46IDFlbTtcXG5cXG4gICY6aG92ZXIgLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguOHMgZWFzZSk7XFxuICB9XFxuXFxuICAmOmhvdmVyIC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC41cyBlYXNlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4gICY6aG92ZXIgaDMge1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICRiYWNrZ3JvdW5kO1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguOHMgZWFzZSk7XFxufVxcbn1cXG5cXG4udGFncyB7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgxZnIgMWZyLCAxZnIgMWZyKTtcXG4gIGdyaWQtYXJlYTogdGFncztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uYXBwbGUtY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC1hcmVhOiBhcHBsZTtcXG59XFxuXFxuLmNhcmQtYXBwbGUtaWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHdpZHRoOiAzZW07XFxufVxcblxcbi5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbiguOHMgZWFzZSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogZm9vZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXh0IHtcXG4gIGJhY2tncm91bmQ6ICRib3JkZXItZm9udDtcXG4gIGNvbG9yOiAkdGV4dC1iYWNrZ3JvdW5kOztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMCU7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC41cyBlYXNlKTtcXG59XFxuXFxuXFxuLyogQlVUVE9OUyAqL1xcbi5maWx0ZXItYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItZm9udDtcXG4gIEBpbmNsdWRlIGJvcmRlclN0eWxpbmcoMCwgMyUsIG5vbmUpO1xcbiAgY29sb3I6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJGZvbnQ7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0QzhBNDtcXG4gICAgfVxcbn1cXG5cXG4gIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICAgIEBleHRlbmQgLmZpbHRlci1idG47XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgfVxcblxcbiAgLnNob3ctYWxsLWJ0biB7XFxuICAgIEBleHRlbmQgLmZpbHRlci1idG47XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIG1hcmdpbi10b3A6IDElO1xcbiAgfVxcblxcbi8qIFBBTlRSWSBMSVNUICovXFxuLmRyb3AtbWVudSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIG1hcmdpbi1sZWZ0OiA4MSU7XFxuICBtYXJnaW4tdG9wOiA3JTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxOCU7XFxuICB6LWluZGV4OiAzO1xcblxcbiAgaDIge1xcbiAgICBjb2xvcjogJGJvcmRlci1mb250O1xcbiAgICBtYXJnaW46IDAlO1xcbiAgfVxcbn1cXG5cXG4ucGFudHJ5LWxpc3Qge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIFJFQ0lQRSBJTlNUUlVDVElPTlMgKi9cXG4ucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiAkdGV4dC1iYWNrZ3JvdW5kO1xcbiAgQGluY2x1ZGUgYm9yZGVyU3R5bGluZygzcHggc29saWQgJGJhY2tncm91bmQsIDElLCAxcHggMXB4IDExNXB4IGJsYWNrKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDE1JTtcXG4gIHRvcDogMTUlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuXFxuICBoNCB7XFxuICAgIGJhY2tncm91bmQ6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICAgIGNvbG9yOiAkYm9yZGVyLWZvbnQ7XFxuICB9XFxuXFxuICBwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgfVxcblxcbiAgb2wge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgfVxcbn1cXG5cXG4jZXhpdC1yZWNpcGUtYnRuIHtcXG4gIGJhY2tncm91bmQ6ICR0ZXh0LWJhY2tncm91bmQ7XFxuICBAaW5jbHVkZSBib3JkZXJTdHlsaW5nKDJweCBkb3VibGUgJGJvcmRlci1mb250LCAyJSwgbm9uZSk7XFxuICBjb2xvcjogJGJvcmRlci1mb250O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4zcyBlYXNlKTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MgZWFzZSk7XFxuICB9XFxufVxcblxcbiNyZWNpcGUtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XFxuICBjb2xvcjogJHRleHQtYmFja2dyb3VuZDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjphbHBoYShvcGFjaXR5PTUwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6JHByaW1hcnktY29sb3I7XFxuICBoZWlnaHQ6MTAwJTtcXG4gIGxlZnQ6MDtcXG4gIG9wYWNpdHk6MC41O1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6MDtcXG4gIHdpZHRoOjEwMCU7XFxuICB6LWluZGV4OjEwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbmJvZHkge1xcbiAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMWZyIDFmciwgbm9uZSk7XFxuICBmb250LWZhbWlseTogJGZvbnQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcImFzaWRlIGltYWdlXFxcIlxcbiAgICBcXFwiYXNpZGUgaW1hZ2VcXFwiXFxuICAgIFxcXCJtYWluIG1haW5cXFwiO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoNGZyIDFmciAxZnIsbm9uZSk7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJmcmVzaCBidXR0b24gYnV0dG9uMlxcXCJcXG4gIFxcXCJzZWFyY2ggc2VhcmNoIHNlYXJjaFxcXCI7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG5hc2lkZSB7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4ud3JhcCB7XFxuICBoZWlnaHQ6IDRlbTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5pbmctcGFuLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHdpZHRoOjUwJTtcXG59XFxuXFxuLmRyb3AtbWVudSB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luLXRvcDogMjUlO1xcbiAgfVxcblxcbmgxIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICB3aWR0aDogODUlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYW5uZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA3ZW07XFxufVxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxZnIgMWZyIDFmciwgbm9uZSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiZnJlc2ggZnJlc2ggZnJlc2hcXFwiIFxcbiAgICBcXFwibm9uZSBidXR0b24gYnV0dG9uMlxcXCJcXG4gICAgXFxcInNlYXJjaCBzZWFyY2ggc2VhcmNoXFxcIjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZm9udC1zaXplOiAyLjhlbTtcXG4gIH1cXG5cXG4gIC5teS1wYW50cnktYnRuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA5NiU7XFxuICB9XFxuXFxuICAuc2F2ZWQtcmVjaXBlcy1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU3JTtcXG4gIH1cXG5cXG4gIC5zYXZlZC1pbmdyZWRpZW50cy1idG4ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXYtYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IG5vbmU7XFxuICB9XFxuXFxuICAucmVjaXBlLWNhcmQge1xcbiAgICB3aWR0aDogMjBlbTtcXG4gIH1cXG5cXG4gICNyZWNpcGUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbiBcXG59XCIsXCIkcHJpbWFyeS1jb2xvcjogIzVCNzg5NDtcXG4kdGV4dC1iYWNrZ3JvdW5kOiB3aGl0ZTtcXG4kZm9udDogXFxcIlF1aWNrc2FuZFxcXCIsXFxuc2Fucy1zZXJpZjtcXG4kYm9yZGVyLWZvbnQ6ICMzNTk1Njc7XFxuJGJhY2tncm91bmQ6ICNDNEVCNjc7XFxuXFxuXFxuXFxuQG1peGluIHRyYW5zaXRpb24oJHZhbHVlKSB7XFxuICB0cmFuc2l0aW9uOiAkdmFsdWU7XFxufVxcblxcbkBtaXhpbiBncmlkRGlzcGxheSgkY29sdW1ucywgJHJvd3MpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICRjb2x1bW5zO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAkcm93cztcXG59XFxuXFxuQG1peGluIGZsZXhEaXNwbGF5KCRkaXJlY3Rpb24sICRqdXN0aWZ5KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbn1cXG5cXG5AbWl4aW4gYm9yZGVyU3R5bGluZygkYm9yZGVyLCAkcmFkaXVzLCAkc2hhZG93KSB7XFxuICBib3JkZXI6ICRib3JkZXI7XFxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xcbiAgYm94LXNoYWRvdzogJHNoYWRvdztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IGdldERhdGEgPSBkYXRhc2V0ID0+IHtcbiAgbGV0IGRhdGEgPSBbXTtcbiAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvJHtkYXRhc2V0fWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICByZXN1bHQuZm9yRWFjaChlYWNoUmVzdWx0ID0+IHtcbiAgICAgICAgZGF0YS5wdXNoKGVhY2hSZXN1bHQpXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xuICByZXR1cm4gZGF0YTtcbn0gXG5cbi8vIGV4cG9ydCBjb25zdCBzZW5kRGF0YSA9IGRhdGFUb1NlbmQgPT4ge1xuLy8gICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbi8vICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2VuZClcbi8vICAgfTtcblxuLy8gICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXNlcnNcIiwgcmVxdWVzdE9wdGlvbnMpXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbi8vICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4vLyAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBnZXREYXRhIGZyb20gJy4uL0FQSUNhbGxzJztcblxuY29uc3QgYXBpQ2FsbCA9ICdpbmdyZWRpZW50cyc7XG5cblxubGV0IGluZ3JlZGllbnRzRGF0YTtcblxuaW5ncmVkaWVudHNEYXRhID0gZ2V0RGF0YShhcGlDYWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5ncmVkaWVudHNEYXRhOyIsImltcG9ydCBnZXREYXRhIGZyb20gJy4uL0FQSUNhbGxzJztcblxuY29uc3QgYXBpQ2FsbCA9ICdyZWNpcGVzJztcblxubGV0IHJlY2lwZURhdGE7XG5cbnJlY2lwZURhdGEgPSBnZXREYXRhKGFwaUNhbGwpO1xuXG5leHBvcnQgZGVmYXVsdCByZWNpcGVEYXRhOyIsImltcG9ydCBnZXREYXRhIGZyb20gJy4uL0FQSUNhbGxzJztcblxuY29uc3QgYXBpQ2FsbCA9ICd1c2Vycyc7XG5sZXQgdXNlcnM7XG5cbnVzZXJzID0gZ2V0RGF0YShhcGlDYWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcnM7IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5sZXQgZG9tVXBkYXRlcyA9IHtcblxuICB3ZWxjb21lVXNlcihjdXJyZW50VXNlcikge1xuICAgIGxldCBmaXJzdE5hbWUgPSBjdXJyZW50VXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXTtcbiAgICBsZXQgd2VsY29tZU1zZyA9IGBcbiAgICA8YXJ0aWNsZSBjbGFzcz1cIndlbGNvbWUtbXNnXCI+XG4gICAgICA8aDE+V2VsY29tZSAke2ZpcnN0TmFtZX0hPC9oMT5cbiAgICA8L2FydGljbGU+YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbm5lci1pbWFnZVwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsXG4gICAgICB3ZWxjb21lTXNnKTtcbiAgfSxcbiAgXG4gIC8vIENyZWF0ZSBDYXJkcyBhbmQgVGFnIExpc3Qgb25sb2FkIC8vIFxuICBjcmVhdGVDYXJkVGFncyh0YWdzKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgbGV0IG5ld1RhZyA9IGA8aDQ+JHt0YWd9PC9oND5gO1xuICAgICAgcmVzdWx0ICs9IG5ld1RhZztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGNyZWF0ZUNhcmQocmVjaXBlLCBhcHBsZURpc3BsYXllZCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbGV0IGNhcmRIdG1sID0gYFxuICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1jYXJkXCIgaWQ9JHtyZWNpcGUuaWR9PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwidGl0bGUtY29udGFpbmVyXCJcbiAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCIgbWF4bGVuZ3RoPVwiNDBcIj4ke3RoaXMuc2hvcnRlblJlY2lwZU5hbWUocmVjaXBlKX08L2gzPlxuICAgIDwvc2VjdGlvbj4gIFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FyZC1waG90by1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPSR7cmVjaXBlLmltYWdlfSBjbGFzcz1cImNhcmQtcGhvdG8tcHJldmlld1wiIGFsdD1cIiR7cmVjaXBlLm5hbWV9IHJlY2lwZVwiIHRpdGxlPVwiJHtyZWNpcGUubmFtZX0gcmVjaXBlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJDbGljayBmb3IgaW5zdHJ1Y3Rpb25zIGJhbm5lclwiPkNsaWNrIGZvciBJbnN0cnVjdGlvbnM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBhcmlhLWxhYmVsPVwiVHlwZSBvZiByZWNpcGVcIiBjbGFzcz1cInRhZ3NcIj5cbiAgICAgICR7dGhpcy5jcmVhdGVDYXJkVGFncyhyZWNpcGUudGFncyl9XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYXBwbGUtY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGFyaWEtbGFiZWw9XCJDbGljayB0byBmYXZvcml0ZSByZWNpcGVcIiBzcmM9XCIuL2ltYWdlcy8ke2FwcGxlRGlzcGxheWVkfS5wbmdcIiBhbHQ9XCJ1bmZpbGxlZCBhcHBsZSBpY29uXCIgY2xhc3M9XCJjYXJkLWFwcGxlLWljb25cIj5cbiAgICA8L3NlY3Rpb24+ICBcbiAgPC9hcnRpY2xlPmBcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gY2FyZEh0bWw7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgfSxcblxuICBjbGVhck1haW5DYXJkU2VjdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgbW9kYWwgPWBcbiAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWluc3RydWN0aW9uc1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJteS1yZWNpcGVzLWJhbm5lclwiPlxuICAgICAgPGgxPk15IFJlY2lwZXM8L2gxPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNob3ctYWxsLWJ0blwiPlNob3cgQWxsIFJlY2lwZXM8L2J1dHRvbj5cbiAgICA8L2Rpdj5gXG4gICAgXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmlubmVySFRNTCArPSBtb2RhbDtcbiAgICByZXR1cm4gbWFpbjtcbiAgfSxcbiAgXG4gIHNob3J0ZW5SZWNpcGVOYW1lKHJlY2lwZSkge1xuICAgIGxldCBzaG9ydFJlY2lwZU5hbWUgPSByZWNpcGUubmFtZTtcbiAgICBpZiAoc2hvcnRSZWNpcGVOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICBzaG9ydFJlY2lwZU5hbWUgPSBzaG9ydFJlY2lwZU5hbWUuc3Vic3RyaW5nKDAsIDQwKSArIFwiLi4uXCI7XG4gICAgfVxuICAgIHJldHVybiBzaG9ydFJlY2lwZU5hbWU7XG4gIH0sXG5cbiAgY3JlYXRlTGlzdFRhZ3ModGFncykge1xuICAgIGxldCB0YWdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWctbGlzdFwiKTtcbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGxldCB0YWdIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2VkLXRhZ1wiIGlkPVwiJHt0YWd9XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiJHt0YWd9XCI+JHt0aGlzLmNhcGl0YWxpemUodGFnKX08L2xhYmVsPjwvbGk+YDtcbiAgICAgIHRhZ0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRhZ0h0bWwpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNhcGl0YWxpemUod29yZHMpIHtcbiAgICByZXR1cm4gd29yZHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgfSxcblxuICBzaG93U2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcywgdXNlcikge1xuICAgIHRoaXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuY2xlYXJNYWluQ2FyZFNlY3Rpb24oKSlcbiAgICBmb3VuZFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgdXNlci5pc0Zhdm9yaXRlZChyZWNpcGUpID8gdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgXCJhcHBsZS1sb2dvXCIpIDogdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgXCJhcHBsZS1sb2dvLW91dGxpbmVcIik7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0Q2FyZElkKCkge1xuICAgIHJldHVybiBwYXJzZUludChldmVudC50YXJnZXQuY2xvc2VzdChcIi5yZWNpcGUtY2FyZFwiKS5pZClcbiAgfSxcblxuICBmaWxsQXBwbGUoKSB7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9IFwiLi9pbWFnZXMvYXBwbGUtbG9nby5wbmdcIjtcbiAgfSxcblxuICByZW1vdmVBcHBsZSgpIHtcbiAgICBldmVudC50YXJnZXQuc3JjID0gXCIuL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCI7XG4gIH0sXG5cbiAgLy9SZWNpcGUgSW5zdHJ1Y3Rpb25zLy9cbiAgY3JlYXRlSW5zdHJ1Y3Rpb25zVGl0bGUocmVjaXBlLCBpbmdyZWRpZW50cykge1xuICAgIGxldCBmdWxsUmVjaXBlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlLWluc3RydWN0aW9uc1wiKTtcblxuICAgIGxldCByZWNpcGVUaXRsZSA9IGBcbiAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJFeGl0IHJlY2lwZVwiIGlkPVwiZXhpdC1yZWNpcGUtYnRuXCI+WDwvYnV0dG9uPlxuICAgIDxoMyBpZD1cInJlY2lwZS10aXRsZVwiPiR7cmVjaXBlLm5hbWV9PC9oMz5cbiAgICA8aDQ+SW5ncmVkaWVudHM8L2g0PlxuICAgIDxwPiR7aW5ncmVkaWVudHN9PC9wPmBcbiAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgcmVjaXBlVGl0bGUpO1xuICB9LFxuXG4gIGNyZWF0ZUluc3RydWN0aW9uc0ltYWdlKHJlY2lwZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVjaXBlLXRpdGxlXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyZWNpcGUuaW1hZ2V9KWA7XG4gIH0sXG5cbiAgY3JlYXRlSW5zdHJ1Y3Rpb25zTGlzdChpbnN0cnVjdGlvbnMpIHtcbiAgICBsZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgbGV0IGluc3RydWN0aW9uc0xpc3QgPSBcIlwiO1xuICAgIGluc3RydWN0aW9ucy5mb3JFYWNoKHN0ZXAgPT4gaW5zdHJ1Y3Rpb25zTGlzdCArPSBgPGxpPiR7c3RlcC5pbnN0cnVjdGlvbn08L2xpPmApO1xuICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxoND5JbnN0cnVjdGlvbnM8L2g0PlwiKTtcbiAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYDxvbD4ke2luc3RydWN0aW9uc0xpc3R9PC9vbD5gKTtcbiAgfSxcblxuICBjcmVhdGVFc3RpbWF0ZWRQcmljZShyZWNpcGUsIGluZ3JlZGllbnRzKSB7XG4gICAgbGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxoND5Fc3RpbWF0ZWQgQ29zdDwvaDQ+XCIpXG4gICAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8aDQ+JHtyZWNpcGUuY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KGluZ3JlZGllbnRzKX08L2g0PmApO1xuXG4gIH0sXG5cbiAgZXhpdFJlY2lwZSgpIHtcbiAgICBsZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgd2hpbGUgKGZ1bGxSZWNpcGVJbmZvLmZpcnN0Q2hpbGQgJiZcbiAgICBmdWxsUmVjaXBlSW5mby5yZW1vdmVDaGlsZChmdWxsUmVjaXBlSW5mby5maXJzdENoaWxkKSk7XG4gICAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5yZW1vdmUoKTtcbiAgfSxcblxuICAvL1NlYXJjaCBiYXIgaW5wdXQgZG9tIHVwZGF0ZXNcbiAgZGlzcGxheVNlYXJjaEVycm9yKCkge1xuICAgIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSAnV0FUIERBIEZVSyBZT1UgRE9JTj8hPyEnO1xuICAgIGNvbnN0IHJlc3VsdCA9IHNlYXJjaElucHV0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgY2xlYXJBbGxGaWVsZHMoKSB7XG4gICAgdGhpcy5jbGVhckZpZWxkKCk7XG4gICAgdGhpcy5jbGVhckNoZWNrZWRCb3hlcygpO1xuICB9LFxuXG4gIGNsZWFyRmllbGQoKSB7XG4gICAgbGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtaW5wdXRcIik7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgfSxcblxuICBjbGVhckNoZWNrZWRCb3hlcygpIHtcbiAgICBsZXQgY2hlY2tlZEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2VkLXRhZ1wiKTtcbiAgICBsZXQgYXJyYXlDaGVja2VkQm94ZXMgPSBBcnJheS5mcm9tKGNoZWNrZWRCb3hlcylcbiAgICBhcnJheUNoZWNrZWRCb3hlcy5mb3JFYWNoKGJveCA9PiB7XG4gICAgICBib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pXG4gIH0sXG5cbiAgY3JlYXRlQWxsUmVjaXBlcyhyZWNpcGVzKSB7XG4gICAgIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgbGV0IGRvbVJlY2lwZSA9IFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmVjaXBlLmlkfWApO1xuICAgICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vUGFudHJ5Ly9cbiAgZGlzcGxheVBhbnRyeUluZm8ocGFudHJ5KSB7XG4gICAgcGFudHJ5LmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgaW5ncmVkaWVudEh0bWwgPSBgPGxpPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInBhbnRyeS1jaGVja2JveFwiIGlkPVwiJHtpbmdyZWRpZW50Lm5hbWV9XCI+XG4gICAgPGxhYmVsIGZvcj1cIiR7aW5ncmVkaWVudC5uYW1lfVwiPiR7aW5ncmVkaWVudC5uYW1lfSwgJHtpbmdyZWRpZW50LmNvdW50fTwvbGFiZWw+PC9saT5gO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYW50cnktbGlzdFwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaW5ncmVkaWVudEh0bWwpO1xuICAgIH0pO1xuICB9LCBcblxuICBmb3JtYXROdW1iZXIobnVtYmVyKSB7XG4gICAgY29uc3Qgc3RyaW5nZWROdW0gPSBudW1iZXIudG9TdHJpbmcoKTtcbiAgICBsZXQgaW5kZXg7XG4gICAgbGV0IGFmdGVyUGVyaW9kO1xuXG4gICAgaWYgKHN0cmluZ2VkTnVtLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGluZGV4ID0gc3RyaW5nZWROdW0uaW5kZXhPZignLicpO1xuICAgICAgYWZ0ZXJQZXJpb2QgPSBzdHJpbmdlZE51bS5zbGljZShpbmRleCArIDEpO1xuICAgIH1cbiAgICBpZiAoYWZ0ZXJQZXJpb2QgJiYgYWZ0ZXJQZXJpb2QubGVuZ3RoID4gMikge1xuICAgICAgYWZ0ZXJQZXJpb2QgPSBhZnRlclBlcmlvZC50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmdlZE51bS5zbGljZSgwLCBpbmRleCArIDEpLmNvbmNhdChhZnRlclBlcmlvZCkpIHx8IG51bWJlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcHBsZS1sb2dvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Nvb2tib29rLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFyY2gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2Vhc29uaW5nLnBuZ1wiOyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZ3JlZGllbnRzUmVwbyB7XG4gIGNvbnN0cnVjdG9yKGluZ3JlZGllbnRzKSB7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xuICB9XG5cbiAgZ2V0UmVjaXBlSWRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGZvdW5kSW5ncmVkaWVudCA9IHRoaXMuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmIChpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5pZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZm91bmRJbmdyZWRpZW50ID8gZm91bmRJbmdyZWRpZW50LmlkIDogMDtcbiAgfVxuXG4gIGdldFJlY2lwZU5hbWVCeUlkKGlkKSB7XG4gICAgY29uc3QgZm91bmRJbmdyZWRpZW50ID0gdGhpcy5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKGluZ3JlZGllbnQuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZvdW5kSW5ncmVkaWVudCA/IGZvdW5kSW5ncmVkaWVudC5uYW1lIDogXCJcIjtcbiAgfVxufVxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFudHJ5IHtcbiAgY29uc3RydWN0b3IocGFudHJ5RGF0YSkge1xuICAgIHRoaXMuaXRlbXMgPSBwYW50cnlEYXRhO1xuICAgIHRoaXMuZm9yUmVjaXBlID0gW107XG4gICAgdGhpcy5ncm9jZXJ5TGlzdCA9IFtdO1xuICB9XG5cbiAgdGFrZVN0b2NrKHJlY2lwZSkge1xuICAgIHRoaXMuY2hlY2tQYW50cnkocmVjaXBlKTtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZCAmJiBpdGVtLmFtb3VudCA+IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSB7XG4gICAgICAgICAgdGhpcy5mb3JSZWNpcGUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtLmluZ3JlZGllbnQgPT09IGluZ3JlZGllbnQuaWQgJiYgaXRlbS5hbW91bnQgPCBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkge1xuICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7XG4gICAgICAgICAgICBpbmdyZWRpZW50OiBpdGVtLmluZ3JlZGllbnQsXG4gICAgICAgICAgICBhbW91bnQ6IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gaXRlbS5hbW91bnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tQYW50cnkocmVjaXBlKSB7XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgbmV3SXRlbXMgPSB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmluZ3JlZGllbnQgPT09IGluZ3JlZGllbnQuaWQpO1xuXG4gICAgICBpZiAoIW5ld0l0ZW1zKSB7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7XG4gICAgICAgICAgaW5ncmVkaWVudDogaW5ncmVkaWVudC5pZCxcbiAgICAgICAgICBhbW91bnQ6IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNhbk1ha2UocmVjaXBlKSB7XG4gICAgdGhpcy50YWtlU3RvY2socmVjaXBlKTtcbiAgICBpZiAodGhpcy5ncm9jZXJ5TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5ncm9jZXJ5TGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmdyZWRpZW50LmlkID09PSBpdGVtLmluZ3JlZGllbnQpIHtcbiAgICAgICAgICBsZXQgbmV3QW1vdW50ID0gaXRlbS5hbW91bnQgLSBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudDtcbiAgICAgICAgICBpZiAobmV3QW1vdW50ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpdGVtLmFtb3VudCA9IG5ld0Ftb3VudDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlUG9zdEJvZHkodXNlciwgaW5ncmVkaWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInVzZXJJRFwiOiB1c2VyLmlkLFxuICAgICAgXCJpbmdyZWRpZW50SURcIjogaW5ncmVkaWVudC5pZCxcbiAgICAgIFwiaW5ncmVkaWVudE1vZGlmaWNhdGlvblwiOiAtaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnRcbiAgICB9XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjaXBlUmVwbyB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZXMpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSByZWNpcGVzLm1hcChyZWNpcGUgPT4gbmV3IFJlY2lwZShyZWNpcGUpKTtcbiAgfVxuXG4gIHJldHVybkFsbFRhZ3MoKSB7XG4gICAgbGV0IHRhZ3MgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgcmVjaXBlLnRhZ3MuZmlsdGVyKHRhZyA9PiB7XG4gICAgICAgIGlmICghdGFncy5pbmNsdWRlcyh0YWcpKSB7XG4gICAgICAgICAgdGFncy5wdXNoKHRhZyk7XG4gICAgICAgIH0gXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncy5zb3J0KCk7XG4gIH1cblxuICBzZWFyY2hSZWNpcGVzQnlJbmdyZWRpZW50KGluZ3JlZGllbnRJZCkge1xuICAgIGNvbnN0IGZpbHRlcmVkUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoaW5ncmVkaWVudElkID09PSBpbmdyZWRpZW50LmlkICYmICFmaWx0ZXJlZFJlY2lwZXMuaW5jbHVkZXMocmVjaXBlLm5hbWUpKSB7XG4gICAgICAgICAgZmlsdGVyZWRSZWNpcGVzLnB1c2gocmVjaXBlLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRSZWNpcGVzO1xuICB9XG5cbiAgZmlsdGVyTGlzdEJ5VGFnKGxpc3QsIHRhZykge1xuICAgIHJldHVybiBsaXN0LmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKSk7XG4gIH1cblxuICBmaWx0ZXJMaXN0QnlJbmdyZWRpZW50KGxpc3QsIGluZ3JlZGllbnRJZCkgeyAgICAgICAgXG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKChmaWx0ZXJlZCwgcmVjaXBlKSA9PiB7XG4gICAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKGluZ3JlZGllbnQuaWQgPT09IGluZ3JlZGllbnRJZCkge1xuICAgICAgICAgIGZpbHRlcmVkLnB1c2gocmVjaXBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBmaWx0ZXJMaXN0QnlOYW1lKGxpc3QsIG5hbWUpIHtcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5uYW1lLmluY2x1ZGVzKG5hbWUpKTtcbiAgfVxuXG5cbiAgZmlsdGVyTGlzdEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gaWQpO1xuICB9XG59XG5cbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZUluZ3JlZGllbnRzQ29zdChpbmdyZWRpZW50RGF0YSkge1xuICAgIGNvbnN0IGNvc3RJbkNlbnRzID0gdGhpcy5pbmdyZWRpZW50cy5yZWR1Y2UoKHRvdGFsQ29zdCwgcmVjaXBlSW5ncmVkaWVudCkgPT4ge1xuICAgICAgaW5ncmVkaWVudERhdGEuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKGluZ3JlZGllbnQuaWQgPT09IHJlY2lwZUluZ3JlZGllbnQuaWQpIHtcbiAgICAgICAgICBsZXQgaW5ncmVkaWVudFRvdGFsID0gaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIHJlY2lwZUluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50O1xuICAgICAgICAgIHRvdGFsQ29zdCArPSBpbmdyZWRpZW50VG90YWw7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG90YWxDb3N0O1xuICAgIH0sIDApO1xuICAgIGxldCBjb3N0ID0gY29zdEluQ2VudHMgKiAuMDE7XG4gICAgcmV0dXJuIGNvc3QudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KTtcbiAgfVxuXG4gIHJldHVybkluc3RydWN0aW9ucyhyZWNpcGUpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluc3RydWN0aW9ucy5tYXAoc3RlcCA9PiBzdGVwLmluc3RydWN0aW9uKTsgICAgXG4gIH1cbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHVzZXJzIGZyb20gJy4vZGF0YS91c2Vycy1kYXRhLmpzJztcbmltcG9ydCByZWNpcGVEYXRhIGZyb20gICcuL2RhdGEvcmVjaXBlLWRhdGEnO1xuaW1wb3J0IGluZ3JlZGllbnRzRGF0YSBmcm9tICcuL2RhdGEvaW5ncmVkaWVudC1kYXRhJztcblxuLy8gaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2FwcGxlLWxvZ28ucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvc2VhcmNoLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tib29rLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3NlYXNvbmluZy5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nJztcblxuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgUmVjaXBlUmVwbyBmcm9tICcuL3JlY2lwZS1yZXBvJ1xuaW1wb3J0IEluZ3JlZGllbnRzUmVwbyBmcm9tICcuL2luZ3JlZGllbnQtcmVwbydcblxubGV0IGFsbFJlY2lwZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctYWxsLWJ0blwiKTtcbmxldCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlci1idG5cIik7XG5sZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG5sZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xubGV0IG1lbnVPcGVuID0gZmFsc2U7XG5sZXQgcGFudHJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1wYW50cnktYnRuXCIpO1xubGV0IHNhdmVkUmVjaXBlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZWQtcmVjaXBlcy1idG5cIik7XG5sZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnRuXCIpO1xubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcbmxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xubGV0IHNob3dQYW50cnlSZWNpcGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0blwiKTtcblxubGV0IHVzZXI7XG5sZXQgcmVjaXBlUmVwbztcbmxldCByZWNpcGVzID0gW107XG5sZXQgaW5ncmVkaWVudHNSZXBvOyAgXG5cbmNvbnN0IGluaXRpYXRlRGF0YSA9ICgpID0+IHtcbiAgdXNlciA9IG5ldyBVc2VyKHVzZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVzZXJzLmxlbmd0aCldKTtcbiAgcmVjaXBlUmVwbyA9IG5ldyBSZWNpcGVSZXBvKHJlY2lwZURhdGEpO1xuICBpbmdyZWRpZW50c1JlcG8gPSBuZXcgSW5ncmVkaWVudHNSZXBvKGluZ3JlZGllbnRzRGF0YSk7XG4gIGNyZWF0ZUNhcmRzKCk7XG4gIGRpc3BsYXlUYWdMaXN0KCk7XG4gIGRvbVVwZGF0ZXMud2VsY29tZVVzZXIodXNlcilcbiAgZmluZFBhbnRyeUluZm8oKTtcbiAgc2hvd0FsbFJlY2lwZXMocmVjaXBlcylcbn1cblxuLy8gQ1JFQVRFIFJFQ0lQRSBDQVJEU1xuZnVuY3Rpb24gY3JlYXRlQ2FyZHMoKSB7IFxuICBkb21VcGRhdGVzLmNsZWFyTWFpbkNhcmRTZWN0aW9uKCk7XG4gIGRvbVVwZGF0ZXMuc2hvd1NlbGVjdGVkUmVjaXBlcyhyZWNpcGVSZXBvLnJlY2lwZXMsIHVzZXIpO1xufVxuXG4vLyBGSUxURVIgQlkgUkVDSVBFIFRBR1NcbmZ1bmN0aW9uIGRpc3BsYXlUYWdMaXN0KCkge1xuICBsZXQgdGFncyA9IHJlY2lwZVJlcG8ucmV0dXJuQWxsVGFncygpXG4gIGRvbVVwZGF0ZXMuY3JlYXRlTGlzdFRhZ3ModGFncyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGVja2VkQm94ZXMoKSB7XG4gIGNvbnN0IHRhZ0NoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrZWQtdGFnXCIpO1xuICBjb25zdCBjaGVja2JveEluZm8gPSBBcnJheS5mcm9tKHRhZ0NoZWNrYm94ZXMpXG4gIGNvbnN0IHNlbGVjdGVkVGFncyA9IGNoZWNrYm94SW5mby5maWx0ZXIoYm94ID0+IHtcbiAgICByZXR1cm4gYm94LmNoZWNrZWQ7XG4gIH0pXG4gIGNvbnN0IHNlbGVjdGVkVGFnTmFtZXMgPSBzZWxlY3RlZFRhZ3MubWFwKHRhZyA9PiB0YWcuaWQpO1xuICBmaW5kVGFnZ2VkUmVjaXBlcyhzZWxlY3RlZFRhZ05hbWVzKTtcbn1cblxuY29uc3QgZmluZFRhZ2dlZFJlY2lwZXMgPSBzZWxlY3RlZCA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9IFtdO1xuICBzZWxlY3RlZC5mb3JFYWNoKHRhZyA9PiB7XG4gICAgY29uc3QgZm91bmRSZWNpcGUgPSByZWNpcGVSZXBvLmZpbHRlckxpc3RCeVRhZyhyZWNpcGVSZXBvLnJlY2lwZXMsIHRhZyk7XG4gICAgZm91bmRSZWNpcGUuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgY29uc3QgdGFnTWF0Y2ggPSBmaWx0ZXJlZFJlc3VsdHMuZmluZChyZXN1bHQgPT4gcmVjaXBlLmlkID09PSByZXN1bHQuaWQpO1xuICAgICAgaWYgKCF0YWdNYXRjaCkge1xuICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChyZWNpcGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSkgICBcbiAgaWYgKGZpbHRlcmVkUmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgZG9tVXBkYXRlcy5zaG93U2VsZWN0ZWRSZWNpcGVzKGZpbHRlcmVkUmVzdWx0cywgdXNlcik7XG4gIH1cbn1cblxuLy8gRkFWT1JJVEUgUkVDSVBFIEZVTkNUSU9OQUxJVFlcbmZ1bmN0aW9uIGFsbENsaWNrc0luTWFpbihldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjYXJkLWFwcGxlLWljb25cIikge1xuICAgIGFkZFRvTXlSZWNpcGVzKCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImV4aXQtcmVjaXBlLWJ0blwiKSB7XG4gICAgZG9tVXBkYXRlcy5leGl0UmVjaXBlKCk7XG4gIH0gZWxzZSBpZiAoaXNEZXNjZW5kYW50KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnJlY2lwZS1jYXJkXCIpLCBldmVudC50YXJnZXQpKSB7XG4gICAgb3BlblJlY2lwZUluZm8oZXZlbnQpO1xuICB9XG59XG5cbmNvbnN0IGFkZFRvU2F2ZWREb20gPSByZWNpcGUgPT4ge1xuICBkb21VcGRhdGVzLmZpbGxBcHBsZSgpO1xuICB1c2VyLnNhdmVSZWNpcGUodXNlci5mYXZvcml0ZVJlY2lwZXMsIHJlY2lwZSk7XG59XG5cbmNvbnN0IHJlbW92ZUZyb21TYXZlZERvbSA9IHJlY2lwZSA9PiB7XG4gIGFsZXJ0KCdZb3UgaGF2ZSByZW1vdmVkIGEgcmVjaXBlIGZyb20gTXkgUmVjaXBlcyEnKTtcbiAgZG9tVXBkYXRlcy5yZW1vdmVBcHBsZSgpO1xuICB1c2VyLnJlbW92ZVJlY2lwZSh1c2VyLmZhdm9yaXRlUmVjaXBlcywgcmVjaXBlKTtcbiAgY3JlYXRlQ2FyZHMoKTtcbiAgc2hvd1dlbGNvbWVCYW5uZXIoKTtcbn1cblxuY29uc3QgYWRkVG9NeVJlY2lwZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRJZCA9IGRvbVVwZGF0ZXMuZ2V0Q2FyZElkKCk7XG4gIGNvbnN0IHJlY2lwZSA9IHJlY2lwZVJlcG8uZmlsdGVyTGlzdEJ5SWQoY2FyZElkKTtcblxuICBpZiAoIXVzZXIuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICBhZGRUb1NhdmVkRG9tKHJlY2lwZSk7XG4gIH0gZWxzZSBpZiAodXNlci5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgIHJlbW92ZUZyb21TYXZlZERvbShyZWNpcGUpO1xuICB9IFxufVxuXG5mdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICBsZXQgbm9kZSA9IGNoaWxkO1xuICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd1NhdmVkUmVjaXBlcygpIHtcbiAgY29uc29sZS5sb2coc2F2ZWRSZWNpcGVzQnRuKVxuICB1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGggPiAwID8gKFxuICAgIGRvbVVwZGF0ZXMuc2hvd1NlbGVjdGVkUmVjaXBlcyh1c2VyLmZhdm9yaXRlUmVjaXBlcywgdXNlciksIFxuICAgIHNob3dNeVJlY2lwZXNCYW5uZXIoKVxuICAgKSA6IGNyZWF0ZUNhcmRzKCk7XG59XG5cbi8vIENSRUFURSBSRUNJUEUgSU5TVFJVQ1RJT05TXG5jb25zdCBvcGVuUmVjaXBlSW5mbyA9IGV2ZW50ID0+IHsgXG4gIGZ1bGxSZWNpcGVJbmZvLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiOyBcbiAgY29uc3QgcmVjaXBlSWQgPSBwYXJzZUludChldmVudC5wYXRoLmZpbmQoZSA9PiBlLmlkKS5pZCk7ICAgIFxuICBjb25zdCByZWNpcGUgPSByZWNpcGVSZXBvLmZpbHRlckxpc3RCeUlkKHJlY2lwZUlkKTsgIFxuICBleHBhbmRSZWNpcGVDYXJkKHJlY2lwZSk7ICBcbn1cblxuY29uc3QgZ2VuZXJhdGVJbmdyZWRpZW50cyA9IHJlY2lwZSA9PiB7IFxuICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IHtcbiAgICBjb25zdCBuYW1lID0gaW5ncmVkaWVudHNSZXBvLmdldFJlY2lwZU5hbWVCeUlkKGluZ3JlZGllbnQuaWQpO1xuICAgIHJldHVybiBgJHtkb21VcGRhdGVzLmNhcGl0YWxpemUobmFtZSl9ICgke2RvbVVwZGF0ZXMuZm9ybWF0TnVtYmVyKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KX0gJHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9KWA7XG4gIH0pLmpvaW4oJywgJyk7XG59XG5cbmNvbnN0IGV4cGFuZFJlY2lwZUNhcmQgPSByZWNpcGUgPT4geyAgXG4gIGxldCBmdWxsUmVjaXBlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlLWluc3RydWN0aW9uc1wiKTtcbiAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgXCI8c2VjdGlvbiBpZD0nb3ZlcmxheSc+PC9zZWN0aW9uPlwiKTtcbiAgZG9tVXBkYXRlcy5jcmVhdGVJbnN0cnVjdGlvbnNUaXRsZShyZWNpcGUsIGdlbmVyYXRlSW5ncmVkaWVudHMocmVjaXBlKSk7XG4gIGRvbVVwZGF0ZXMuY3JlYXRlSW5zdHJ1Y3Rpb25zSW1hZ2UocmVjaXBlKTtcbiAgZG9tVXBkYXRlcy5jcmVhdGVJbnN0cnVjdGlvbnNMaXN0KHJlY2lwZS5pbnN0cnVjdGlvbnMpO1xuICBkb21VcGRhdGVzLmNyZWF0ZUVzdGltYXRlZFByaWNlKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKTtcbiAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7IFxufVxuXG4vLyBUT0dHTEUgRElTUExBWVMgLy8gXG5mdW5jdGlvbiBzaG93TXlSZWNpcGVzQmFubmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWUtbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1yZWNpcGVzLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBzaG93V2VsY29tZUJhbm5lcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktcmVjaXBlcy1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG4vLyBTRUFSQ0ggUkVDSVBFU1xuY29uc3Qgc2VhcmNoUmVjaXBlcyA9ICgpID0+IHtcbiAgbGV0IGlucHV0ID0gc2VhcmNoSW5wdXQudmFsdWU7ICBcblxuICBpbnB1dCA9IGlucHV0LnRyaW0oKTtcbiAgaW5wdXQgPSBkb21VcGRhdGVzLmNhcGl0YWxpemUoaW5wdXQpO1xuICB0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnID8gKFxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVNlYXJjaEVycm9yKCksXG4gICAgZG9tVXBkYXRlcy5jbGVhckZpZWxkKClcbiAgKSA6IGRvbVVwZGF0ZXMuc2hvd1NlbGVjdGVkUmVjaXBlcyhmaW5kUmVjaXBlTWF0Y2hlcyhpbnB1dCksIHVzZXIpO1xufVxuXG5jb25zdCBmaW5kUmVjaXBlTWF0Y2hlcyA9IGlucHV0ID0+IHtcbiAgbGV0IG5hbWVNYXRjaGVzO1xuICBsZXQgaWRNYXRjaGVzO1xuICBsZXQgaW5ncmVkaWVudElkO1xuICBsZXQgcmVjaXBlTWF0Y2hlcztcblxuICBpbmdyZWRpZW50SWQgPSBpbmdyZWRpZW50c1JlcG8uZ2V0UmVjaXBlSWRCeU5hbWUoaW5wdXQpO1xuICBuYW1lTWF0Y2hlcyA9IHJlY2lwZVJlcG8uZmlsdGVyTGlzdEJ5TmFtZShyZWNpcGVSZXBvLnJlY2lwZXMsIGlucHV0KTtcbiAgaWRNYXRjaGVzID0gcmVjaXBlUmVwby5maWx0ZXJMaXN0QnlJbmdyZWRpZW50KHJlY2lwZVJlcG8ucmVjaXBlcywgaW5ncmVkaWVudElkKTtcbiAgcmVjaXBlTWF0Y2hlcyA9IFsuLi5uYW1lTWF0Y2hlc107XG4gIGlkTWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICBjb25zdCBpc1JlY2lwZUZvdW5kID0gcmVjaXBlTWF0Y2hlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IG1hdGNoLmlkKTtcbiAgICBpZiAoIWlzUmVjaXBlRm91bmQpIHtcbiAgICAgIHJlY2lwZU1hdGNoZXMgPSBbLi4ucmVjaXBlTWF0Y2hlcywgbWF0Y2hdO1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlY2lwZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIHByZXNzRW50ZXJTZWFyY2goZXZlbnQpIHsgXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHNlYXJjaFJlY2lwZXMoKTtcbiAgZG9tVXBkYXRlcy5jbGVhckFsbEZpZWxkcygpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkgeyAgXG4gIHZhciBtZW51RHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtbWVudVwiKTtcbiAgbWVudU9wZW4gPSAhbWVudU9wZW47XG4gIGlmIChtZW51T3Blbikge1xuICAgIG1lbnVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2Uge1xuICAgIG1lbnVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FsbFJlY2lwZXMoKSB7XG4gIGNyZWF0ZUNhcmRzKCk7XG4gIHNob3dXZWxjb21lQmFubmVyKCk7XG59XG5cbi8vIENSRUFURSBBTkQgVVNFIFBBTlRSWSBcblxuZnVuY3Rpb24gZmluZFBhbnRyeUluZm8oKSB7ICAgXG4gIGxldCBpbmdyZWRpZW50UmVwbyA9IG5ldyBJbmdyZWRpZW50c1JlcG8oaW5ncmVkaWVudHNEYXRhKTtcbiAgbGV0IHBhbnRyeUluZm8gPSB1c2VyLnBhbnRyeS5pdGVtcy5yZWR1Y2UoKGFjYywgaW5ncmVkaWVudCkgPT4ge1xuICAgIGxldCBvdXRwdXRPYmplY3QgPSB7XG4gICAgICBuYW1lOiBpbmdyZWRpZW50UmVwby5nZXRSZWNpcGVOYW1lQnlJZChpbmdyZWRpZW50LmluZ3JlZGllbnQpLFxuICAgICAgY291bnQ6IGluZ3JlZGllbnQuYW1vdW50XG4gICAgfVxuICAgIGFjYy5wdXNoKG91dHB1dE9iamVjdCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICBkb21VcGRhdGVzLmRpc3BsYXlQYW50cnlJbmZvKHBhbnRyeUluZm8uc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSkpOyBcbn1cblxuZnVuY3Rpb24gZmluZENoZWNrZWRQYW50cnlCb3hlcygpIHtcbiAgbGV0IHBhbnRyeUNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhbnRyeS1jaGVja2JveFwiKTtcbiAgbGV0IHBhbnRyeUNoZWNrYm94SW5mbyA9IEFycmF5LmZyb20ocGFudHJ5Q2hlY2tib3hlcylcbiAgbGV0IHNlbGVjdGVkSW5ncmVkaWVudHMgPSBwYW50cnlDaGVja2JveEluZm8uZmlsdGVyKGJveCA9PiB7XG4gICAgcmV0dXJuIGJveC5jaGVja2VkO1xuICB9KVxuICBzaG93QWxsUmVjaXBlcygpO1xuICBpZiAoc2VsZWN0ZWRJbmdyZWRpZW50cy5sZW5ndGggPiAwKSB7XG4gICAgZmluZFJlY2lwZXNXaXRoQ2hlY2tlZEluZ3JlZGllbnRzKHNlbGVjdGVkSW5ncmVkaWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWNpcGVzV2l0aENoZWNrZWRJbmdyZWRpZW50cyhzZWxlY3RlZCkge1xuICBsZXQgcmVjaXBlQ2hlY2tlciA9IChhcnIsIHRhcmdldCkgPT4gdGFyZ2V0LmV2ZXJ5KHYgPT4gYXJyLmluY2x1ZGVzKHYpKTsgXG4gIGxldCBpbmdyZWRpZW50TmFtZXMgPSBzZWxlY3RlZC5tYXAoaXRlbSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH0pXG4gIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4geyBcbiAgICBsZXQgYWxsUmVjaXBlSW5ncmVkaWVudHMgPSBbXTtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGFsbFJlY2lwZUluZ3JlZGllbnRzLnB1c2goaW5ncmVkaWVudC5uYW1lKTtcbiAgICB9KTtcbiAgICBpZiAoIXJlY2lwZUNoZWNrZXIoYWxsUmVjaXBlSW5ncmVkaWVudHMsIGluZ3JlZGllbnROYW1lcykpIHtcbiAgICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgICBkb21SZWNpcGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXRpYXRlRGF0YSk7XG5hbGxSZWNpcGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWxsUmVjaXBlcyk7XG5maWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbmRDaGVja2VkQm94ZXMpO1xubWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWxsQ2xpY2tzSW5NYWluKTtcbnBhbnRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTWVudSk7XG5zYXZlZFJlY2lwZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTYXZlZFJlY2lwZXMpO1xuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hSZWNpcGVzKTtcbnNob3dQYW50cnlSZWNpcGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaW5kQ2hlY2tlZFBhbnRyeUJveGVzKTtcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBwcmVzc0VudGVyU2VhcmNoKTsiLCJpbXBvcnQgUGFudHJ5IGZyb20gJy4vcGFudHJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJEYXRhKSB7XG4gICAgdGhpcy5pZCA9IHVzZXJEYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSBuZXcgUGFudHJ5KHVzZXJEYXRhLnBhbnRyeSlcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgc2F2ZVJlY2lwZShsaXN0LCByZWNpcGUpIHtcbiAgICBsaXN0LnB1c2gocmVjaXBlKTtcbiAgfSAgXG5cbiAgcmVtb3ZlUmVjaXBlKGxpc3QsIHJlY2lwZSkge1xuICAgIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHJlY2lwZSk7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcmV0dXJuRmlyc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUuc3BsaXQoJyAnKVswXTtcbiAgfVxuXG4gIGlzRmF2b3JpdGVkKHJlY2lwZSkge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maW5kKGZhdlJlY2lwZSA9PiByZWNpcGUuaWQgPT09IGZhdlJlY2lwZS5pZCk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==