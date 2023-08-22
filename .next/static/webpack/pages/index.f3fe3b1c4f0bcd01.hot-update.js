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

/***/ "./src/components/Browse.js":
/*!**********************************!*\
  !*** ./src/components/Browse.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Browse; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nconst url = \"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&dates=2020-01-01,2023-08-17&ordering=-added\");\nfunction Browse() {\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        axios.get(url).then((response)=>{\n            setGames(response.data.results);\n            console.log(response.data);\n        }).catch((error)=>{\n            console.log(\"Error fetching data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"browse\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"browseHead\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Choose your adventure\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"search\",\n                        placeholder: \"Don't see your game below? Search by title here!\",\n                        onChange: (event)=>{\n                            setSearch(event.target.value.toLowerCase());\n                        },\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gamesContainer container-fluid\",\n                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card col-3 m-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img-top img-fluid\",\n                                    src: game.background_image,\n                                    alt: game.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"card-title text-center\",\n                                        children: game.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"list-group list-group-flush\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"list-group-item\",\n                                            children: [\n                                                \"Overall Rating: \",\n                                                game.rating\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"list-group-item\",\n                                            children: [\n                                                \"Release Date : \",\n                                                game.released\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"list-group-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                children: \"Add this game to your favorites!\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 65\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Browse, \"CaJJNEOdxY+9C3mzZW6hPAIvMrs=\");\n_c = Browse;\n;\nvar _c;\n$RefreshReg$(_c, \"Browse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ccm93c2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDZjtBQUMyQjtBQUNaO0FBRTVDLE1BQU1NLFNBQVM7QUFDZixNQUFNQyxNQUFNLHFDQUE0QyxPQUFQRCxRQUFPO0FBR3pDLFNBQVNFOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVcsUUFBUUMsbUJBQU9BLENBQUM7UUFFdEJELE1BQU1FLEdBQUcsQ0FBQ1IsS0FDTFMsSUFBSSxDQUFDQyxDQUFBQTtZQUNGUCxTQUFTTyxTQUFTQyxJQUFJLENBQUNDLE9BQU87WUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0osU0FBU0MsSUFBSTtRQUM3QixHQUNDSSxLQUFLLENBQUNDLENBQUFBO1lBQ0hILFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JFO1FBQ3hDO0lBQ1IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNmLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUFNSCxXQUFVO3dCQUFTSSxhQUFZO3dCQUFtREMsVUFBVSxDQUFDQzs0QkFBV25CLFVBQVVtQixNQUFNQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsV0FBVzt3QkFBRzt3QkFBR0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV0Syw4REFBQ1Q7Z0JBQUlELFdBQVU7MEJBQ1ZoQixNQUFNMkIsR0FBRyxDQUFDQyxDQUFBQSxxQkFDUCw4REFBQ1g7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDWCw4REFBQ2E7b0NBQUliLFdBQVU7b0NBQXlCYyxLQUFLRixLQUFLRyxnQkFBZ0I7b0NBQUVDLEtBQUtKLEtBQUtLLElBQUk7Ozs7Ozs4Q0FDbEYsOERBQUNoQjtvQ0FBSUQsV0FBVTs4Q0FDWCw0RUFBQ2tCO3dDQUFHbEIsV0FBVTtrREFBMEJZLEtBQUtLLElBQUk7Ozs7Ozs7Ozs7OzhDQUVyRCw4REFBQ0U7b0NBQUduQixXQUFVOztzREFDViw4REFBQ29COzRDQUFHcEIsV0FBVTs7Z0RBQWtCO2dEQUFpQlksS0FBS1MsTUFBTTs7Ozs7OztzREFDNUQsOERBQUNEOzRDQUFHcEIsV0FBVTs7Z0RBQWtCO2dEQUFnQlksS0FBS1UsUUFBUTs7Ozs7OztzREFDN0QsOERBQUNGOzRDQUFHcEIsV0FBVTtzREFBa0IsNEVBQUN1QjtnREFBRUMsTUFBSzswREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzVFO0dBN0N3QnpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jyb3dzZS5qcz8zMzYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmNvbnN0IEFQSUtFWSA9ICc3NTIyNjFiZGRjMTA0YmU3ODYwZjE2MTI0ZDYxNjI1NSc7XHJcbmNvbnN0IHVybCA9IGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9JHtBUElLRVl9JmRhdGVzPTIwMjAtMDEtMDEsMjAyMy0wOC0xNyZvcmRlcmluZz0tYWRkZWRgO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyb3dzZSgpIHtcclxuICAgIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZXMocmVzcG9uc2UuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pOyAgXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJyb3dzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZUhlYWRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5DaG9vc2UgeW91ciBhZHZlbnR1cmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiRG9uJ3Qgc2VlIHlvdXIgZ2FtZSBiZWxvdz8gU2VhcmNoIGJ5IHRpdGxlIGhlcmUhXCIgb25DaGFuZ2U9eyhldmVudCkgPT4ge3NldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSl9fSB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVzQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAge2dhbWVzLm1hcChnYW1lID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTMgbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBpbWctZmx1aWRcIiBzcmM9e2dhbWUuYmFja2dyb3VuZF9pbWFnZX0gYWx0PXtnYW1lLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyXCI+e2dhbWUubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPk92ZXJhbGwgUmF0aW5nOiB7Z2FtZS5yYXRpbmd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+UmVsZWFzZSBEYXRlIDoge2dhbWUucmVsZWFzZWR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+PGEgaHJlZj1cIiNcIj5BZGQgdGhpcyBnYW1lIHRvIHlvdXIgZmF2b3JpdGVzITwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VHbG9iYWxTdGF0ZSIsInVzZVJvdXRlciIsIkFQSUtFWSIsInVybCIsIkJyb3dzZSIsImdhbWVzIiwic2V0R2FtZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJheGlvcyIsInJlcXVpcmUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwidHlwZSIsIm1hcCIsImdhbWUiLCJpbWciLCJzcmMiLCJiYWNrZ3JvdW5kX2ltYWdlIiwiYWx0IiwibmFtZSIsImg0IiwidWwiLCJsaSIsInJhdGluZyIsInJlbGVhc2VkIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Browse.js\n"));

/***/ })

});