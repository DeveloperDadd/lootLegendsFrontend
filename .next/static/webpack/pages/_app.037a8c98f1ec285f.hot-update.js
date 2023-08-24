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

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nconst url = \"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&dates=2020-01-01,2023-08-17&ordering=-added\");\nfunction Search() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameData, setGameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleInputChange = (e)=>{\n        setUserInput(e.target.value);\n    };\n    // This function displays the 3 most related game titles in the search area\n    const handleSearch = async (e)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        let slug = userInput.split(\" \").join(\"-\").toLowerCase();\n        if (e.key === \"Enter\") {\n            await axios.get(\"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&search=\").concat(slug, \"&page_size=3\")).then((response)=>{\n                setGameData(response.data.results);\n                console.log(response.data);\n            }).catch((error)=>{\n                console.log(\"Fail!\");\n            });\n            setUserInput(\"\");\n        }\n    };\n    /* This functions takes certain game data and sends it to the backend as a user favorite game to be called back in the future and tied to that particular user in future login sessions */ const addFavorites = async (e)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        const user_id = state.user.user_id;\n        const gameInfo = {\n            game: gameData.name,\n            user_id: user_id\n        };\n        axios.post(\"http://127.0.0.1/8000/api/add-to-favorites/\", gameInfo).then((response)=>{\n            console.log(\"Successfully added to favorite games\", response.data);\n        }).catch((error)=>{\n            console.error(\"Error posting data:\", error);\n        });\n    };\n    if (gameData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"search\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Choose your adventure\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 60,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"search text-center\",\n                    placeholder: \"Search for a game...\",\n                    value: userInput,\n                    onChange: handleInputChange,\n                    onKeyDown: handleSearch,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 61,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"search\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Share the Loot!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search text-center\",\n                            placeholder: \"Search for a game...\",\n                            value: userInput,\n                            onChange: handleInputChange,\n                            onKeyDown: handleSearch,\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gamesContainer container-fluid\",\n                    children: gameData.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card col-3 m-1 border rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"card-img-top img-fluid\",\n                                        src: game.background_image,\n                                        alt: game.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-body\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"card-title text-center\",\n                                            children: game.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-group list-group-flush\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Overall Rating: \",\n                                                    game.rating\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Release Date: \",\n                                                    game.released\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: addFavorites,\n                                                    children: \"Add this game to your favorites!\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 69\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                lineNumber: 74,\n                                columnNumber: 29\n                            }, this)\n                        }, game.id, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 66,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Search, \"XBLlHptglH9eoJtdCxqyfQwCN48=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTs7MERBQ1YsOERBQUNZO2dEQUFHWixXQUFVOztvREFBa0I7b0RBQWlCUixLQUFLcUIsTUFBTTs7Ozs7OzswREFDNUQsOERBQUNEO2dEQUFHWixXQUFVOztvREFBa0I7b0RBQWVSLEtBQUtzQixRQUFROzs7Ozs7OzBEQUM1RCw4REFBQ0Y7Z0RBQUdaLFdBQVU7MERBQWtCLDRFQUFDZTtvREFBT0MsU0FBUzVCOzhEQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFUdkJJLEtBQUtLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQi9FO0FBQ0o7R0FoRndCckM7O1FBQ01KLGdFQUFjQTs7O0tBRHBCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2guanM/M2FhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5jb25zdCBBUElLRVkgPSAnNzUyMjYxYmRkYzEwNGJlNzg2MGYxNjEyNGQ2MTYyNTUnO1xyXG5jb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/a2V5PSR7QVBJS0VZfSZkYXRlcz0yMDIwLTAxLTAxLDIwMjMtMDgtMTcmb3JkZXJpbmc9LWFkZGVkYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUdsb2JhbFN0YXRlKClcclxuICAgIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtnYW1lRGF0YSwgc2V0R2FtZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGRpc3BsYXlzIHRoZSAzIG1vc3QgcmVsYXRlZCBnYW1lIHRpdGxlcyBpbiB0aGUgc2VhcmNoIGFyZWFcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG4gICAgICAgIGxldCBzbHVnID0gdXNlcklucHV0LnNwbGl0KCcgJykuam9pbignLScpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnJhd2cuaW8vYXBpL2dhbWVzP2tleT0ke0FQSUtFWX0mc2VhcmNoPSR7c2x1Z30mcGFnZV9zaXplPTNgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVEYXRhKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbCEnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRVc2VySW5wdXQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFRoaXMgZnVuY3Rpb25zIHRha2VzIGNlcnRhaW4gZ2FtZSBkYXRhIGFuZCBzZW5kcyBpdCB0byB0aGUgYmFja2VuZCBhcyBhIHVzZXIgZmF2b3JpdGUgZ2FtZSB0byBiZSBjYWxsZWQgYmFjayBpbiB0aGUgZnV0dXJlIGFuZCB0aWVkIHRvIHRoYXQgcGFydGljdWxhciB1c2VyIGluIGZ1dHVyZSBsb2dpbiBzZXNzaW9ucyAqL1xyXG5cclxuICAgIGNvbnN0IGFkZEZhdm9yaXRlcyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWQ7XHJcbiAgICAgICAgY29uc3QgZ2FtZUluZm8gPSB7XHJcbiAgICAgICAgICAgIGdhbWU6IGdhbWVEYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xLzgwMDAvYXBpL2FkZC10by1mYXZvcml0ZXMvJywgZ2FtZUluZm8pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIGZhdm9yaXRlIGdhbWVzJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwb3N0aW5nIGRhdGE6JywgZXJyb3IpXHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2hvb3NlIHlvdXIgYWR2ZW50dXJlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoIHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgZ2FtZS4uLlwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+U2hhcmUgdGhlIExvb3QhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoIHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgZ2FtZS4uLlwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lc0NvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZURhdGEubWFwKGdhbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTMgbS0xIGJvcmRlciByb3VuZGVkXCIga2V5PXtnYW1lLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgaW1nLWZsdWlkXCIgc3JjPXtnYW1lLmJhY2tncm91bmRfaW1hZ2V9IGFsdD17Z2FtZS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyXCI+e2dhbWUubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPk92ZXJhbGwgUmF0aW5nOiB7Z2FtZS5yYXRpbmd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlJlbGVhc2UgRGF0ZToge2dhbWUucmVsZWFzZWR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPjxidXR0b24gb25DbGljaz17YWRkRmF2b3JpdGVzfT5BZGQgdGhpcyBnYW1lIHRvIHlvdXIgZmF2b3JpdGVzITwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlR2xvYmFsU3RhdGUiLCJ1c2VSb3V0ZXIiLCJBUElLRVkiLCJ1cmwiLCJTZWFyY2giLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiZ2FtZURhdGEiLCJzZXRHYW1lRGF0YSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2VhcmNoIiwiYXhpb3MiLCJyZXF1aXJlIiwic2x1ZyIsInNwbGl0Iiwiam9pbiIsInRvTG93ZXJDYXNlIiwia2V5IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImFkZEZhdm9yaXRlcyIsInVzZXJfaWQiLCJ1c2VyIiwiZ2FtZUluZm8iLCJnYW1lIiwibmFtZSIsInBvc3QiLCJsZW5ndGgiLCJkaXYiLCJpZCIsImgyIiwiaW5wdXQiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwidHlwZSIsIm1hcCIsImltZyIsInNyYyIsImJhY2tncm91bmRfaW1hZ2UiLCJhbHQiLCJoNCIsInVsIiwibGkiLCJyYXRpbmciLCJyZWxlYXNlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Search.js\n"));

/***/ })

});