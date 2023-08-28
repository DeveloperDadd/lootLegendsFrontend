"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Button(param) {\n    let { onPageChange } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const goAbout = (e)=>{\n        e.preventDefault();\n        router.push(\"/about\");\n    };\n    const goLogin = (e)=>{\n        e.preventDefault();\n        router.push(\"/login\");\n    };\n    const goHome = (e)=>{\n        e.preventDefault();\n        router.push(\"/home\");\n    };\n    const goDashboard = (e)=>{\n        e.preventDefault();\n        router.push(\"/dashboard\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/about\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"About Us\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                    lineNumber: 32,\n                    columnNumber: 33\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                    lineNumber: 33,\n                    columnNumber: 33\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"icon\",\n                    src: \"https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/house-solid.svg\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                    lineNumber: 34,\n                    columnNumber: 28\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropdown\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/dashboard\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        onClick: goDashboard,\n                        className: \"icon dropdown-toggle\",\n                        src: \"https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/user-solid.svg\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                        lineNumber: 37,\n                        columnNumber: 37\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Button.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Button, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDMkI7QUFDWjtBQUc3QixTQUFTSSxPQUFPLEtBQWM7UUFBZCxFQUFDQyxZQUFZLEVBQUMsR0FBZDs7SUFDM0IsTUFBTUMsU0FBU0gsMERBQVNBO0lBRXhCLE1BQU1JLFVBQVUsQ0FBQ0M7UUFDYkEsRUFBRUMsY0FBYztRQUNoQkgsT0FBT0ksSUFBSSxDQUFDO0lBQ2hCO0lBRUEsTUFBTUMsVUFBVSxDQUFDSDtRQUNiQSxFQUFFQyxjQUFjO1FBQ2hCSCxPQUFPSSxJQUFJLENBQUM7SUFDaEI7SUFFQSxNQUFNRSxTQUFTLENBQUNKO1FBQ1pBLEVBQUVDLGNBQWM7UUFDaEJILE9BQU9JLElBQUksQ0FBQztJQUNoQjtJQUVBLE1BQU1HLGNBQWMsQ0FBQ0w7UUFDakJBLEVBQUVDLGNBQWM7UUFDaEJILE9BQU9JLElBQUksQ0FBQztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ2Qsa0RBQUlBO2dCQUFDZSxNQUFLOzBCQUFTLDRFQUFDQzs4QkFBTzs7Ozs7Ozs7Ozs7MEJBQzVCLDhEQUFDaEIsa0RBQUlBO2dCQUFDZSxNQUFLOzBCQUFTLDRFQUFDQzs4QkFBTzs7Ozs7Ozs7Ozs7MEJBQzVCLDhEQUFDaEIsa0RBQUlBO2dCQUFDZSxNQUFLOzBCQUFJLDRFQUFDRTtvQkFBSUgsV0FBVTtvQkFBT0ksS0FBSTs7Ozs7Ozs7Ozs7MEJBQ3pDLDhEQUFDQztnQkFBSUwsV0FBVTswQkFFZiw0RUFBQ2Qsa0RBQUlBO29CQUFDZSxNQUFLOzhCQUFhLDRFQUFDRTt3QkFBSUcsU0FBU1I7d0JBQWFFLFdBQVU7d0JBQXVCSSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBHO0dBcEN3QmY7O1FBQ0xELHNEQUFTQTs7O0tBREpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qcz81MGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oe29uUGFnZUNoYW5nZX0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICBjb25zdCBnb0Fib3V0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9hYm91dCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBnb0xvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdvSG9tZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdvRGFzaGJvYXJkID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YnV0dG9uPkFib3V0IFVzPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRGV2ZWxvcGVyRGFkZC9sb290TGVnZW5kc0Zyb250ZW5kL2M3ZTY1NzMzN2MyNDI1OGU3MmEzYTNkM2Q1Y2Q5OGU0MTZmMTM0ZGUvc3JjL2ltYWdlcy9ob3VzZS1zb2xpZC5zdmdcIiAvPjwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj48aW1nIG9uQ2xpY2s9e2dvRGFzaGJvYXJkfSBjbGFzc05hbWU9XCJpY29uIGRyb3Bkb3duLXRvZ2dsZVwiIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9EZXZlbG9wZXJEYWRkL2xvb3RMZWdlbmRzRnJvbnRlbmQvYzdlNjU3MzM3YzI0MjU4ZTcyYTNhM2QzZDVjZDk4ZTQxNmYxMzRkZS9zcmMvaW1hZ2VzL3VzZXItc29saWQuc3ZnXCIgLz48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VHbG9iYWxTdGF0ZSIsInVzZVJvdXRlciIsIkJ1dHRvbiIsIm9uUGFnZUNoYW5nZSIsInJvdXRlciIsImdvQWJvdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZ29Mb2dpbiIsImdvSG9tZSIsImdvRGFzaGJvYXJkIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImJ1dHRvbiIsImltZyIsInNyYyIsImRpdiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Button.js\n"));

/***/ })

});