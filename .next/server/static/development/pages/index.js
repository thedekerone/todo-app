module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./GlobalStyles.js":
/*!*************************!*\
  !*** ./GlobalStyles.js ***!
  \*************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size:62.5%;
}
body{
    font-family: 'Nunito', sans-serif;
    font-size:1.4rem;
}
`;

/***/ }),

/***/ "./components/Task/index.js":
/*!**********************************!*\
  !*** ./components/Task/index.js ***!
  \**********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_container_TaskContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/container/TaskContext */ "./components/utilities/container/TaskContext.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/Task/style.js");
var _jsxFileName = "C:\\Users\\dekker\\Documents\\todo-app\\components\\Task\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Task = ({
  title = "",
  note = "",
  category = "",
  date = ""
}) => {
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__["TaskDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, title), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(date, "YYYY-MM-DD").format())), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__["CheckBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/Task/style.js":
/*!**********************************!*\
  !*** ./components/Task/style.js ***!
  \**********************************/
/*! exports provided: Container, CheckBox, TaskDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return CheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDescription", function() { return TaskDescription; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/style */ "./components/utilities/style.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_utilities_style__WEBPACK_IMPORTED_MODULE_1__["DefaultContainer"]).withConfig({
  displayName: "style__Container",
  componentId: "ag5osf-0"
})(["display:flex;justify-content:space-between;align-items:center;padding:1rem;"]);
const CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__CheckBox",
  componentId: "ag5osf-1"
})(["width:20px;height:20px;border-radius:4px;padding:2px;border:2px solid black;"]);
const TaskDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__TaskDescription",
  componentId: "ag5osf-2"
})(["display:flex;flex-direction:column;justify-content:space-between;"]);

/***/ }),

/***/ "./components/TaskCreater/index.js":
/*!*****************************************!*\
  !*** ./components/TaskCreater/index.js ***!
  \*****************************************/
/*! exports provided: TaskCreater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreater", function() { return TaskCreater; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/TaskCreater/style.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_container_TaskContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/container/TaskContext */ "./components/utilities/container/TaskContext.js");
var _jsxFileName = "C:\\Users\\dekker\\Documents\\todo-app\\components\\TaskCreater\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TaskCreater = () => {
  const {
    state,
    setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utilities_container_TaskContext__WEBPACK_IMPORTED_MODULE_5__["TaskContext"]); // const [state, setState] = useState({
  //   task: "",
  //   date: "",
  //   category: "",
  //   // remind: false,
  //   note: "",
  // });

  const handleSubmit = event => {
    event.preventDefault();
    const {
      category,
      note,
      date,
      title
    } = event.currentTarget;
    setState([...state, {
      category: category.value,
      note: note.value,
      date: date.value,
      title: title.value
    }]);
    category.value = "";
    note.value = "";
    date.value = "";
    title.value = "";
  };

  const defaultDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).format("YYYY-MM-DD");
  console.log(defaultDate);
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "New Text"), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    placeholder: "What are you planning?",
    name: "title",
    id: "title",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["TaskOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegBell"], {
    color: "blue",
    size: "18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "date",
    defaultValue: defaultDate,
    name: "date",
    id: "date",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["TaskOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegStickyNote"], {
    color: "grey",
    size: "18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    name: "note",
    id: "note",
    placeholder: "Add note",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["TaskOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoTag"], {
    color: "grey",
    size: "18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    name: "category",
    id: "category",
    placeholder: "Category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["ButtonContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "Create"))));
};

/***/ }),

/***/ "./components/TaskCreater/style.js":
/*!*****************************************!*\
  !*** ./components/TaskCreater/style.js ***!
  \*****************************************/
/*! exports provided: Container, Form, TextInput, Header, ButtonContainer, Button, TaskOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskOption", function() { return TaskOption; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/style */ "./components/utilities/style.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_utilities_style__WEBPACK_IMPORTED_MODULE_1__["DefaultContainer"]).withConfig({
  displayName: "style__Container",
  componentId: "du6wo4-0"
})(["margin:8rem auto;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "style__Form",
  componentId: "du6wo4-1"
})(["width:100%;padding:0 2rem;"]);
const TextInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "style__TextInput",
  componentId: "du6wo4-2"
})(["background-color:white;color:blue;width:100%;padding:1rem;font-size:4rem;border:none;height:20rem;resize:none;border-bottom:1px solid grey;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "style__Header",
  componentId: "du6wo4-3"
})(["text-align:center;font-weight:600;font-size:2rem;"]);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ButtonContainer",
  componentId: "du6wo4-4"
})(["display:flex;justify-content:center;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "style__Button",
  componentId: "du6wo4-5"
})(["color:white;border:none;background-color:#000839;padding:1rem 0rem;width:100%;margin:3rem 0;font-size:2.2rem;border-radius:5px;"]);
const TaskOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_utilities_style__WEBPACK_IMPORTED_MODULE_1__["FlexContainer"]).withConfig({
  displayName: "style__TaskOption",
  componentId: "du6wo4-6"
})(["padding:0.8rem 2rem;margin-top:1.4rem;border-radius:5px;border:1px solid lightgray;& input{border:0;margin-left:1rem;width:100%;padding:1rem;}"]);

/***/ }),

/***/ "./components/TaskList/index.js":
/*!**************************************!*\
  !*** ./components/TaskList/index.js ***!
  \**************************************/
/*! exports provided: TaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return TaskList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_container_TaskContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/container/TaskContext */ "./components/utilities/container/TaskContext.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Task */ "./components/Task/index.js");
/* harmony import */ var _utilities_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/style */ "./components/utilities/style.js");
var _jsxFileName = "C:\\Users\\dekker\\Documents\\todo-app\\components\\TaskList\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TaskList = () => {
  const {
    state
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utilities_container_TaskContext__WEBPACK_IMPORTED_MODULE_1__["TaskContext"]);
  return __jsx(_utilities_style__WEBPACK_IMPORTED_MODULE_3__["DefaultContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, state.length !== 0 ? state.map(task => __jsx(_Task__WEBPACK_IMPORTED_MODULE_2__["Task"], {
    title: task.title,
    date: task.date,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  })) : __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "There isn't any task"));
};

/***/ }),

/***/ "./components/utilities/container/TaskContext.js":
/*!*******************************************************!*\
  !*** ./components/utilities/container/TaskContext.js ***!
  \*******************************************************/
/*! exports provided: TaskContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskContext", function() { return TaskContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TaskContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null); // export const addTask = ({ date = "", task = "", note = "", category = "" }) => {
//   return null;
// };

/***/ }),

/***/ "./components/utilities/style.js":
/*!***************************************!*\
  !*** ./components/utilities/style.js ***!
  \***************************************/
/*! exports provided: FlexContainer, DefaultContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return FlexContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContainer", function() { return DefaultContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__FlexContainer",
  componentId: "f9mjsj-0"
})(["display:flex;align-items:center;"]);
const DefaultContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__DefaultContainer",
  componentId: "f9mjsj-1"
})(["margin:0 auto;max-width:500px;width:100%;"]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TaskCreater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TaskCreater */ "./components/TaskCreater/index.js");
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GlobalStyles */ "./GlobalStyles.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_utilities_container_TaskContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utilities/container/TaskContext */ "./components/utilities/container/TaskContext.js");
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Task */ "./components/Task/index.js");
/* harmony import */ var _components_TaskList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TaskList */ "./components/TaskList/index.js");
var _jsxFileName = "C:\\Users\\dekker\\Documents\\todo-app\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const index = () => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  return __jsx(_components_utilities_container_TaskContext__WEBPACK_IMPORTED_MODULE_4__["TaskContext"].Provider, {
    value: {
      state: state,
      setState: setState
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:300,400,600&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_components_TaskCreater__WEBPACK_IMPORTED_MODULE_1__["TaskCreater"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(_components_TaskList__WEBPACK_IMPORTED_MODULE_6__["TaskList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["GlobalStyle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dekker\Documents\todo-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/go":
/*!*********************************!*\
  !*** external "react-icons/go" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map