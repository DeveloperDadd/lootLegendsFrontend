"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About */ \"./src/pages/About.js\");\n/* harmony import */ var _login_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/index */ \"./src/pages/login/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\");\n    const handlePageChange = (newPage)=>{\n        if (currentPage !== newPage) {\n            setCurrentPage(newPage);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_7__.GlobalStateProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"maxContainer container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onPageChange: handlePageChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\App.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                currentPage === \"home\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\App.js\",\n                    lineNumber: 22,\n                    columnNumber: 36\n                }, this),\n                currentPage === \"about\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_About__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\App.js\",\n                    lineNumber: 23,\n                    columnNumber: 37\n                }, this),\n                currentPage === \"login\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\App.js\",\n                    lineNumber: 24,\n                    columnNumber: 37\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\App.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\App.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"KLlrbvIFn6o4dTsrFf/Szg7G3bM=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNoQjtBQUNFO0FBQ007QUFDVztBQUNnQjtBQUU5QyxTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1TLG1CQUFtQixDQUFDQztRQUN0QixJQUFJSCxnQkFBZ0JHLFNBQVM7WUFDM0JGLGVBQWVFO1FBQ2pCO0lBQ0Y7SUFFRixxQkFDQSw4REFBQ0wscUVBQW1CQTtrQkFDbEIsNEVBQUNNO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDWCwwREFBTUE7b0JBQUNZLGNBQWNKOzs7Ozs7Z0JBQ3JCRixnQkFBZ0Isd0JBQVUsOERBQUNMLDZDQUFJQTs7Ozs7Z0JBQy9CSyxnQkFBZ0IseUJBQVcsOERBQUNKLDhDQUFLQTs7Ozs7Z0JBQ2pDSSxnQkFBZ0IseUJBQVcsOERBQUNILG9EQUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQztHQW5Cd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9BcHAuanM/NjE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luL2luZGV4JztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCB7IEdsb2JhbFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoJ2hvbWUnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKG5ld1BhZ2UpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgIT09IG5ld1BhZ2UpIHtcclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8R2xvYmFsU3RhdGVQcm92aWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21heENvbnRhaW5lciBjb250YWluZXItZmx1aWQnPlxyXG4gICAgICAgIDxOYXZiYXIgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfSAvPlxyXG4gICAgICAgIHtjdXJyZW50UGFnZSA9PT0gJ2hvbWUnICYmIDxIb21lIC8+fVxyXG4gICAgICAgIHtjdXJyZW50UGFnZSA9PT0gJ2Fib3V0JyAmJiA8QWJvdXQgLz59XHJcbiAgICAgICAge2N1cnJlbnRQYWdlID09PSAnbG9naW4nICYmIDxMb2dpbiAvPn1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9HbG9iYWxTdGF0ZVByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJIb21lIiwiQWJvdXQiLCJMb2dpbiIsIkdsb2JhbFN0YXRlUHJvdmlkZXIiLCJBcHAiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaGFuZGxlUGFnZUNoYW5nZSIsIm5ld1BhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJvblBhZ2VDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/App.js\n"));

/***/ })

});