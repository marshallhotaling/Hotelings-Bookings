/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n}\n\n\n.hidden{\n  display:none\n}\n\n.userItems{\n  position: fixed;\n  top:150px;\n  left: 640px;\n  background-color: rgba(210, 215, 211,0.25);\n  padding:50px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n}\n.nameLabel{\n  display:block;\n  font-weight: bold;\n  font-size: 40px;\n\n}\n.userNInput{\n  margin-left: 20px;\n  height: 30px;\n  width: 350px;\n  display:inline-block;\n}\n.paswordLabel{\n  display:block;\n  font-weight: bold;\n  font-size: 40px;\n  margin-top: 28px;\n}\n.userPInput{\n  margin-left: 25px;\n  height: 30px;\n  width: 350px;\n  display:inline-block;\n}\n.enterUserButton{\n  margin-top: 50px;\n  height: 60px;\n  width: 562px;\n  background-color: cornflowerblue;\n  font-size: 30px;\n\n}\n.titleLabel{\n  position: fixed;\n  top:10px;\n  display: inline-block;\n  text-align: center;\n}\n.title{\n  font-size: 100px;\n}\n\n.dashBoard{\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n.menu{\n  text-align: center;\n  display:inline-block;\n  border-right:3px solid #000;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 200px;\n  padding: 20px;\n}\n.mainPage{\n  display: inline-block;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 240px;\n  right: 0;\n  padding: 20px;\n}\n.homeButton{\n  padding-top: 10px;\n  font-size: 30px;\n  display: block;\n  width: 200px;\n  height: 50px;\n  background-color: cornflowerblue;\n  margin-top: 10px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n.logOutButton{\n  display: block;\n  padding-top: 10px;\n  font-size: 30px;\n  width: 200px;\n  height: 50px;\n  background-color: cornflowerblue;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.currentButton {\n  display:block;\n  padding-top: 10px;\n  font-size: 30px;\n  width: 200px;\n  height: 50px;\n  background-color: cornflowerblue;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n.BookingButton{\n  display:block;\n  padding-top: 10px;\n  font-size: 30px;\n  width: 200px;\n  height: 50px;\n  background-color: cornflowerblue;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n.currrentHeading{\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n.currentTotal{\n  display: block;\n  text-align: right;\n  font-size: 50px;\n  padding-right: 100px;\n  border-bottom:3px solid #000;\n}\n.currentBookingsData{\n  margin-top: 40px;\n  display: block;\n  font-size: 50px;\n}\n.currentDate{\n  width: 400px;\n  display: inline-block;\n}\n.currentDate2{\n  cursor: pointer;\n  width: 400px;\n  display: inline-block;\n}\n.currentRoomNumber{\n  width: 400px;\n  display: inline-block;\n}\n.currentRoomNumber2{\n  cursor: pointer;\n  width: 400px;\n  display: inline-block;\n}\n.currentPrice{\n  width: 250px;\n  display: inline-block;\n}\n.currentPrice2{\n  cursor: pointer;\n  width: 250px;\n  display: inline-block;\n}\n.historyHeading{\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n.historyTotal{\n  display: block;\n  text-align: right;\n  font-size: 50px;\n  padding-right: 100px;\n  border-bottom:3px solid #000;\n}\n.historyBookingsData{\n  margin-top: 40px;\n  display: block;\n  font-size: 50px;\n}\n.historyDate{\n  width: 400px;\n  display: inline-block;\n}\n.historyRoomNumber{\n  width: 400px;\n  display: inline-block;\n}\n.historyPrice{\n  width: 250px;\n  display: inline-block;\n}\n\n.homePage{\n\n}\n.homeWelcomeHeading{\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n\n.bookingPage{\n\n}\n.bookingHeading{\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n.bookingFilterOPtions{\n  display: block;\n  font-size: 50px;\n  padding-right: 100px;\n  border-bottom:3px solid #000;\n}\n#bookedDate{\n  font-size: 25px;\n  width: 200px;\n  height: 40px;\n  background-color: lightgray;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n\n.dataSubmit{\n  width: 100px;\n  height: 40px;\n  background-color: lightgray;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  margin-bottom: 20px;\n  margin-left: 20px;\n}\n.availabilityRoomNumber{\n  margin-top: 40px;\n  display: block;\n  font-size: 50px;\n}\n.availabilityDate{\n  width: 250px;\n  display: inline-block;\n}\n.availabilityRoomNumber{\n  width: 400px;\n  display: inline-block;\n}\n/*.{*/\n/*  width: 250px;*/\n/*  display: inline-block;*/\n/*}*/\n.availabilityData{\n  display: block;\n  font-size: 50px;\n}\n.dataSeporator{\n  border-bottom:3px solid #000;\n}\n.currentAvailData{\n  margin-top: 20px;\n  font-size: 30px;\n  overflow-y: scroll;\n  height: 400px;\n}\n.currentData{\n  margin-top: 20px;\n  font-size: 30px;\n  overflow-y: scroll;\n  height: 400px;\n}\n.currentBookingsPage {\n  overflow-y: auto;\n}\n.alertNoRooms {\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n#roomType{\n  font-size: 25px;\n  width: 200px;\n  height: 40px;\n  background-color: lightgray;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  margin-bottom: 20px;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["\nbody {\n  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n}\n\n\n.hidden{\n  display:none\n}\n\n.userItems{\n  position: fixed;\n  top:150px;\n  left: 640px;\n  background-color: rgba(210, 215, 211,0.25);\n  padding:50px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n}\n.nameLabel{\n  display:block;\n  font-weight: bold;\n  font-size: 40px;\n\n}\n.userNInput{\n  margin-left: 20px;\n  height: 30px;\n  width: 350px;\n  display:inline-block;\n}\n.paswordLabel{\n  display:block;\n  font-weight: bold;\n  font-size: 40px;\n  margin-top: 28px;\n}\n.userPInput{\n  margin-left: 25px;\n  height: 30px;\n  width: 350px;\n  display:inline-block;\n}\n.enterUserButton{\n  margin-top: 50px;\n  height: 60px;\n  width: 562px;\n  background-color: cornflowerblue;\n  font-size: 30px;\n\n}\n.titleLabel{\n  position: fixed;\n  top:10px;\n  display: inline-block;\n  text-align: center;\n}\n.title{\n  font-size: 100px;\n}\n\n.dashBoard{\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n.menu{\n  text-align: center;\n  display:inline-block;\n  border-right:3px solid #000;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 200px;\n  padding: 20px;\n}\n.mainPage{\n  display: inline-block;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 240px;\n  right: 0;\n  padding: 20px;\n}\n.homeButton{\n  padding-top: 10px;\n  font-size: 30px;\n  display: block;\n  width: 200px;\n  height: 50px;\n  background-color: cornflowerblue;\n  margin-top: 10px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n.logOutButton{\n  display: block;\n  padding-top: 10px;\n  font-size: 30px;\n  width: 200px;\n  height: 50px;\n  background-color: cornflowerblue;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.currentButton {\n  display:block;\n  padding-top: 10px;\n  font-size: 30px;\n  width: 200px;\n  height: 50px;\n  background-color: cornflowerblue;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n.BookingButton{\n  display:block;\n  padding-top: 10px;\n  font-size: 30px;\n  width: 200px;\n  height: 50px;\n  background-color: cornflowerblue;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n.currrentHeading{\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n.currentTotal{\n  display: block;\n  text-align: right;\n  font-size: 50px;\n  padding-right: 100px;\n  border-bottom:3px solid #000;\n}\n.currentBookingsData{\n  margin-top: 40px;\n  display: block;\n  font-size: 50px;\n}\n.currentDate{\n  width: 400px;\n  display: inline-block;\n}\n.currentDate2{\n  cursor: pointer;\n  width: 400px;\n  display: inline-block;\n}\n.currentRoomNumber{\n  width: 400px;\n  display: inline-block;\n}\n.currentRoomNumber2{\n  cursor: pointer;\n  width: 400px;\n  display: inline-block;\n}\n.currentPrice{\n  width: 250px;\n  display: inline-block;\n}\n.currentPrice2{\n  cursor: pointer;\n  width: 250px;\n  display: inline-block;\n}\n.historyHeading{\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n.historyTotal{\n  display: block;\n  text-align: right;\n  font-size: 50px;\n  padding-right: 100px;\n  border-bottom:3px solid #000;\n}\n.historyBookingsData{\n  margin-top: 40px;\n  display: block;\n  font-size: 50px;\n}\n.historyDate{\n  width: 400px;\n  display: inline-block;\n}\n.historyRoomNumber{\n  width: 400px;\n  display: inline-block;\n}\n.historyPrice{\n  width: 250px;\n  display: inline-block;\n}\n\n.homePage{\n\n}\n.homeWelcomeHeading{\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n\n.bookingPage{\n\n}\n.bookingHeading{\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n.bookingFilterOPtions{\n  display: block;\n  font-size: 50px;\n  padding-right: 100px;\n  border-bottom:3px solid #000;\n}\n#bookedDate{\n  font-size: 25px;\n  width: 200px;\n  height: 40px;\n  background-color: lightgray;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n\n.dataSubmit{\n  width: 100px;\n  height: 40px;\n  background-color: lightgray;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  margin-bottom: 20px;\n  margin-left: 20px;\n}\n.availabilityRoomNumber{\n  margin-top: 40px;\n  display: block;\n  font-size: 50px;\n}\n.availabilityDate{\n  width: 250px;\n  display: inline-block;\n}\n.availabilityRoomNumber{\n  width: 400px;\n  display: inline-block;\n}\n/*.{*/\n/*  width: 250px;*/\n/*  display: inline-block;*/\n/*}*/\n.availabilityData{\n  display: block;\n  font-size: 50px;\n}\n.dataSeporator{\n  border-bottom:3px solid #000;\n}\n.currentAvailData{\n  margin-top: 20px;\n  font-size: 30px;\n  overflow-y: scroll;\n  height: 400px;\n}\n.currentData{\n  margin-top: 20px;\n  font-size: 30px;\n  overflow-y: scroll;\n  height: 400px;\n}\n.currentBookingsPage {\n  overflow-y: auto;\n}\n.alertNoRooms {\n  display:block;\n  text-align: center;\n  font-size: 100px;\n}\n#roomType{\n  font-size: 25px;\n  width: 200px;\n  height: 40px;\n  background-color: lightgray;\n  margin-top: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  margin-bottom: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



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
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   user: () => (/* binding */ user)
/* harmony export */ });
/* harmony import */ var _calls_fetchCustomers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _sharedFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);




var user = {};
var loginButon = document.querySelector(".enterUserButton");
var loginPage = document.querySelector(".loginPage");
var loginInput = document.querySelector(".userNInput")
var dashBoard = document.querySelector(".dashBoard")
var homePage = document.querySelector(".homePage")
var userPInput = document.querySelector(".userPInput")

loginButon.addEventListener('click', showMainPage);

function showMainPage() {
  checkHasUser(loginInput.value, userPInput.value);
}

function checkHasUser(name, password) {
  if (name === "" || password === "") {
    alert("username or password is incorrect ");
    return false;
  }
  // get numbers from username string
  const idNumber = (0,_sharedFunctions_js__WEBPACK_IMPORTED_MODULE_1__.seperateNumber)(name)
  // remove numbers from username
  const username = (0,_sharedFunctions_js__WEBPACK_IMPORTED_MODULE_1__.seperateName)(name, idNumber)
  // check for password match
  if (password !== "overlook2021" ) {
    alert("username or password is incorrect ");
    return false;
  }
  //check if user exists in DB
  Promise.all([
    (0,_calls_fetchCustomers_js__WEBPACK_IMPORTED_MODULE_0__.customerData)(),
  ])
    .then(data => {

      const doesHaveUser = (0,_sharedFunctions_js__WEBPACK_IMPORTED_MODULE_1__.hasUser)(data, username)
      if (doesHaveUser !== false) {
        user = doesHaveUser[0]
        loginPage.classList.add('hidden');
        dashBoard.classList.remove('hidden');
        homePage.classList.remove('hidden');
      }
    })
    .catch(err => console.log(err));
}

// Enable this for testing flow without entering user each time
// checkHasUser('Ruth Ebert44', "overlook2021")

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerData: () => (/* binding */ customerData)
/* harmony export */ });
const customerData = () => {
  const data = fetch(
    `http://localhost:3001/api/v1/customers`
  )
    .then(response => {
      if (!response.ok) {
        // eslint-disable-next-line max-len
        throw new Error(`GET ERROR: Response not OK >>> STATUS ${response.status} - ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => data)
    // eslint-disable-next-line max-len
    .catch(error => alert(`GET ERROR >>> STATUS ${error.status} - ${error.statusText}`));
  return data;
};

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasRoomNumber: () => (/* binding */ hasRoomNumber),
/* harmony export */   hasUser: () => (/* binding */ hasUser),
/* harmony export */   seperateName: () => (/* binding */ seperateName),
/* harmony export */   seperateNumber: () => (/* binding */ seperateNumber)
/* harmony export */ });
function seperateName(name, numb) {
  return name.replace(numb, '');
}

function seperateNumber(name) {
  var numb = name.match(/\d/g);
  return numb.join("");
}

function hasUser(data, username) {
  const found = data[0].customers.filter((item) => {
    return item.name === username
  })

  if (found.length > 0) {
    return found;
  }
  return false
}

function hasRoomNumber(data, user) {
  const foundBookings = data[0].bookings.filter((item) => {
    return item.userID === user.id
  })
  if (foundBookings.length > 0) {

    return foundBookings
  }
  return false
}

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calls_fetchBookings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _calls_fetchRooms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _calls_postResurvation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _loginView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _sharedFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);






var rooms = []
var allTotals = 0
var historyBookingsPage = document.querySelector(".historyBookingsPage")
var currentBookingsPage = document.querySelector(".currentBookingsPage")
var logOutButton = document.querySelector(".logOutButton")
var currentButton = document.querySelector(".currentButton")
var loginPage = document.querySelector(".loginPage")
var dashBoard = document.querySelector(".dashBoard")
var BookingButton = document.querySelector(".BookingButton")
var bookingPage = document.querySelector(".bookingPage")
var homeButton = document.querySelector(".homeButton")
var homePage = document.querySelector(".homePage")
var loginInput = document.querySelector(".userNInput")
var currentData = document.querySelector(".currentData")
var currentTotal = document.querySelector(".currentTotal")
var roomTypeSelector = document.querySelector("#roomType")
var bookedDateInput = document.querySelector("#bookedDate")
var filterDataSubmit = document.querySelector(".dataSubmit")
var currentAvailData = document.querySelector(".currentAvailData")
var userPInput = document.querySelector(".userPInput")


homeButton.addEventListener('click', homeSwitch)
logOutButton.addEventListener('click', logOut);
currentButton.addEventListener("click", CurrentSwitch)
BookingButton.addEventListener("click", bookingSwitch)
filterDataSubmit.addEventListener('click', filterForRooms)

function logOut() {
  hideViews()
  loginPage.classList.remove('hidden');
  dashBoard.classList.add('hidden');
  userPInput.value = ''
  loginInput.value = ""
}

function CurrentSwitch() {
  allTotals = 0
  checkForBookings()
  hideViews()
  currentBookingsPage.classList.remove("hidden")
}

function bookingSwitch() {
  hideViews()
  bookingPage.classList.remove("hidden")
}

function homeSwitch() {
  hideViews()
  homePage.classList.remove("hidden")
}

function hideViews() {
  historyBookingsPage.classList.add("hidden")
  currentBookingsPage.classList.add("hidden")
  bookingPage.classList.add("hidden")
  homePage.classList.add("hidden")
}

function checkForBookings() {
  getAllRooms()
  Promise.all([
    (0,_calls_fetchBookings_js__WEBPACK_IMPORTED_MODULE_0__.bookingsData)(),
  ])
    .then(data => {
      var foundBookings = (0,_sharedFunctions__WEBPACK_IMPORTED_MODULE_4__.hasRoomNumber)(data, _loginView__WEBPACK_IMPORTED_MODULE_3__.user);

      currentData.innerHTML = ""

      const found = foundBookings.sort((a, b) => {
        return b.date - a.date
      })

      for (let i = 0; i < found.length; ++i) {
        const foundRoom = rooms.filter((item) => {
          return item.number === found[i].roomNumber
        })

        currentData.innerHTML += `<div tabindex=${i} class="dataSeporator"><label class="currentDate2">${found[i].date}</label> <label class="currentRoomNumber2">Room  ${found[i].roomNumber}</label> <label class="currentPrice2">$ ${foundRoom[0].costPerNight.toFixed(2)}</label></div> `
        allTotals += foundRoom[0].costPerNight


      }
      currentTotal.innerHTML = `Total: $ ${allTotals.toFixed(2)}`

      return foundBookings
    })
    .catch(err => console.log(err));
}

// this is to access the rooms data
function getAllRooms() {
  Promise.all([
    (0,_calls_fetchRooms_js__WEBPACK_IMPORTED_MODULE_1__.roomsData)(),
  ])
    .then(data => {
      rooms = data[0].rooms
      return rooms
    })
    .catch(err => console.log(err));
}

// post to the dattaBase
function selectedRoom(userId, roomNumber, year, month, day){
  const holder = {
    "userID": +userId,
    "date": year + '/' + month + '/' + day,
    "roomNumber": +roomNumber
  }
  //Here is where we use the post
  ;(0,_calls_postResurvation__WEBPACK_IMPORTED_MODULE_2__.postData)(holder).then(() => {
    alert(`Resurvation for Date of ${year + '/' + month + '/' + day} for Room ${roomNumber} Complete !!`)
    // then re fetched for bookings
    checkForBookings(_loginView__WEBPACK_IMPORTED_MODULE_3__.user)
  })
}

function filterForRooms() {
  const item = new Date(bookedDateInput.value)
  if(isNaN(item.getFullYear()) || isNaN(item.getMonth() + 1) || isNaN((item.getDate() + 1))){
    alert("need a proper date");
    return ;
  }
  var foundRoomType = [];

  if (roomTypeSelector.value === "allRoom") {
    foundRoomType = rooms
  } else {
    foundRoomType = rooms.filter((item) => {
      return item.roomType === roomTypeSelector.value
    })
  }
  currentAvailData.innerHTML = ''

  // comment this back to test for no rooms available
  // foundRoomType = []
  if (foundRoomType.length === 0) {
    currentAvailData.innerHTML = '<div class="alertNoRooms">We are so sorry, there are no rooms Available on that date.</div>'
  }

  for (let i = 0; i < foundRoomType.length; ++i) {
    var b=document.createElement('b')
    b.value=i
    b.onclick = function() {
      selectedRoom( `${_loginView__WEBPACK_IMPORTED_MODULE_3__.user.id}`, `${foundRoomType[i].number}`, `${item.getFullYear()}`, `${item.getMonth() + 1}`, `${item.getDate() + 1}`)
    }
    b.onkeypress = function() {
      selectedRoom( `${_loginView__WEBPACK_IMPORTED_MODULE_3__.user.id}`, `${foundRoomType[i].number}`, `${item.getFullYear()}`, `${item.getMonth() + 1}`, `${item.getDate() + 1}`)
    }
    b.innerHTML=`
<div tabindex=${i} class="dataSeporator">
<label class="currentDate2">Room ${foundRoomType[i].number}</label> 
<label class="currentRoomNumber2">${foundRoomType[i].bedSize}</label> 
<label class="currentPrice2">$ ${foundRoomType[i].costPerNight.toFixed(2)}</label> 
</div>
`
    currentAvailData.appendChild(b)
  }

}


checkForBookings()



/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bookingsData: () => (/* binding */ bookingsData)
/* harmony export */ });
const bookingsData = () => {
  const data = fetch(
    `http://localhost:3001/api/v1/bookings`
  )
    .then(response => {
      if (!response.ok) {
        // eslint-disable-next-line max-len
        throw new Error(`GET ERROR: Response not OK >>> STATUS ${response.status} - ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => data)
    // eslint-disable-next-line max-len
    .catch(error => alert(`GET ERROR >>> STATUS ${error.status} - ${error.statusText}`));
  return data;
};

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roomsData: () => (/* binding */ roomsData)
/* harmony export */ });
const roomsData = () => {
  const data = fetch(
    `http://localhost:3001/api/v1/rooms`
  )
    .then(response => {
      if (!response.ok) {
        // eslint-disable-next-line max-len
        throw new Error(`GET ERROR: Response not OK >>> STATUS ${response.status} - ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => data)
    // eslint-disable-next-line max-len
    .catch(error => alert(`GET ERROR >>> STATUS ${error.status} - ${error.statusText}`));
  return data;
};

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = (data) => {
  return fetch(`http://localhost:3001/api/v1/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.status !== 201) {
        throw new Error(`POST ERROR: Resource not created >>> STATUS ${response.status} - ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => data)
    .catch(error => alert(`POST ERROR >>> STATUS ${error.status} - ${error.statusText}`))
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _loginView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _mainDashView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file


// An example of how you tell webpack to use an image (also need to link to it in the index.html)





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map