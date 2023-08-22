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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Browse; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nconst url = \"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&dates=2020-01-01,2023-08-17&ordering=-added\");\nfunction Browse() {\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameData, setGameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        axios.get(url).then((response)=>{\n            setGames(response.data.results);\n            console.log(response.data);\n        }).catch((error)=>{\n            console.log(\"Error fetching data:\", error);\n        });\n    }, []);\n    const handleInputChange = (e)=>{\n        setUserInput(e.target.value);\n    };\n    const handleSearch = async (e)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"browse\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"browseHead\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Choose your adventure\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"search\",\n                        placeholder: \"Search for a game...\",\n                        value: userInput,\n                        onChange: handleInputChange,\n                        onKeyDown: handleSearch,\n                        onChange: getSearchValue,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gamesContainer container-fluid\",\n                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card col-3 m-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"card-img-top img-fluid\",\n                                    src: game.background_image,\n                                    alt: game.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"card-title text-center\",\n                                        children: game.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"list-group list-group-flush\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"list-group-item\",\n                                            children: [\n                                                \"Overall Rating: \",\n                                                game.rating\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"list-group-item\",\n                                            children: [\n                                                \"Release Date : \",\n                                                game.released\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"list-group-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                children: \"Add this game to your favorites!\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 65\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(Browse, \"uJGYNAxnA7pDF5kcKsse2Ny/FS8=\");\n_c = Browse;\n;\nvar _c;\n$RefreshReg$(_c, \"Browse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ccm93c2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDZjtBQUMyQjtBQUNaO0FBRTVDLE1BQU1NLFNBQVM7QUFDZixNQUFNQyxNQUFNLHFDQUE0QyxPQUFQRCxRQUFPO0FBR3pDLFNBQVNFOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1hLFFBQVFDLG1CQUFPQSxDQUFDO1FBRXRCRCxNQUFNRSxHQUFHLENBQUNWLEtBQ0xXLElBQUksQ0FBQ0MsQ0FBQUE7WUFDRlQsU0FBU1MsU0FBU0MsSUFBSSxDQUFDQyxPQUFPO1lBQzlCQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNDLElBQUk7UUFDN0IsR0FDQ0ksS0FBSyxDQUFDQyxDQUFBQTtZQUNISCxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRTtRQUN4QztJQUNSLEdBQUcsRUFBRTtJQUVMLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QmYsYUFBYWUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQy9CO0lBRUEsTUFBTUMsZUFBZSxPQUFNSCxLQUUzQjtJQUVBLHFCQUNJLDhEQUFDSTtRQUFRQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDRTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBTUgsV0FBVTt3QkFBU0ksYUFBWTt3QkFBdUJQLE9BQU9sQjt3QkFBVzBCLFVBQVVYO3dCQUFtQlksV0FBV1I7d0JBQWNPLFVBQVVFO3dCQUFnQkMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Syw4REFBQ1A7Z0JBQUlELFdBQVU7MEJBQ1Z2QixNQUFNZ0MsR0FBRyxDQUFDQyxDQUFBQSxxQkFDUCw4REFBQ1Q7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDWCw4REFBQ1c7b0NBQUlYLFdBQVU7b0NBQXlCWSxLQUFLRixLQUFLRyxnQkFBZ0I7b0NBQUVDLEtBQUtKLEtBQUtLLElBQUk7Ozs7Ozs4Q0FDbEYsOERBQUNkO29DQUFJRCxXQUFVOzhDQUNYLDRFQUFDZ0I7d0NBQUdoQixXQUFVO2tEQUEwQlUsS0FBS0ssSUFBSTs7Ozs7Ozs7Ozs7OENBRXJELDhEQUFDRTtvQ0FBR2pCLFdBQVU7O3NEQUNWLDhEQUFDa0I7NENBQUdsQixXQUFVOztnREFBa0I7Z0RBQWlCVSxLQUFLUyxNQUFNOzs7Ozs7O3NEQUM1RCw4REFBQ0Q7NENBQUdsQixXQUFVOztnREFBa0I7Z0RBQWdCVSxLQUFLVSxRQUFROzs7Ozs7O3NEQUM3RCw4REFBQ0Y7NENBQUdsQixXQUFVO3NEQUFrQiw0RUFBQ3FCO2dEQUFFQyxNQUFLOzBEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXNUU7R0F0RHdCOUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnJvd3NlLmpzPzMzNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgQVBJS0VZID0gJzc1MjI2MWJkZGMxMDRiZTc4NjBmMTYxMjRkNjE2MjU1JztcclxuY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnJhd2cuaW8vYXBpL2dhbWVzP2tleT0ke0FQSUtFWX0mZGF0ZXM9MjAyMC0wMS0wMSwyMDIzLTA4LTE3Jm9yZGVyaW5nPS1hZGRlZGA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJvd3NlKCkge1xyXG4gICAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZ2FtZURhdGEsIHNldEdhbWVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuICAgICAgICBheGlvcy5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lcyhyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7ICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJicm93c2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VIZWFkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q2hvb3NlIHlvdXIgYWR2ZW50dXJlPC9oMj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBnYW1lLi4uXCIgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleURvd249e2hhbmRsZVNlYXJjaH0gb25DaGFuZ2U9e2dldFNlYXJjaFZhbHVlfSB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVzQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAge2dhbWVzLm1hcChnYW1lID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTMgbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBpbWctZmx1aWRcIiBzcmM9e2dhbWUuYmFja2dyb3VuZF9pbWFnZX0gYWx0PXtnYW1lLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyXCI+e2dhbWUubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPk92ZXJhbGwgUmF0aW5nOiB7Z2FtZS5yYXRpbmd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+UmVsZWFzZSBEYXRlIDoge2dhbWUucmVsZWFzZWR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+PGEgaHJlZj1cIiNcIj5BZGQgdGhpcyBnYW1lIHRvIHlvdXIgZmF2b3JpdGVzITwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VHbG9iYWxTdGF0ZSIsInVzZVJvdXRlciIsIkFQSUtFWSIsInVybCIsIkJyb3dzZSIsImdhbWVzIiwic2V0R2FtZXMiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJnYW1lRGF0YSIsInNldEdhbWVEYXRhIiwiYXhpb3MiLCJyZXF1aXJlIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2VhcmNoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiZ2V0U2VhcmNoVmFsdWUiLCJ0eXBlIiwibWFwIiwiZ2FtZSIsImltZyIsInNyYyIsImJhY2tncm91bmRfaW1hZ2UiLCJhbHQiLCJuYW1lIiwiaDQiLCJ1bCIsImxpIiwicmF0aW5nIiwicmVsZWFzZWQiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Browse.js\n"));

/***/ })

});