webpackHotUpdate("static/development/pages/index.js",{

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: getTasks, firestore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");



var config = {
  apiKey: "AIzaSyDJ1GmtIfb8MeId15e7RYyK2KNVh9dYG-8",
  authDomain: "todoapp-56c16.firebaseapp.com",
  databaseURL: "https://todoapp-56c16.firebaseio.com",
  projectId: "todoapp-56c16",
  storageBucket: "todoapp-56c16.appspot.com",
  messagingSenderId: "856215311931",
  appId: "1:856215311931:web:9ef5b7b87ba3059ba66e1e",
  measurementId: "G-FYF01N4R29"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(config);
}

var getTasks = function getTasks() {
  var lang,
      snapshots,
      posts,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lang = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'en';
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(firestore.collection("tasks").get());

        case 3:
          snapshots = _context.sent;
          posts = snapshots.docs.map(function (doc) {
            var data = doc.data();
            return data;
          });
          return _context.abrupt("return", posts);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};
var firestore = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ })

})
//# sourceMappingURL=index.js.3d4d1a67ffd07cee7a6f.hot-update.js.map