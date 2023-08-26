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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nconst url = \"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&dates=2020-01-01,2023-08-17&ordering=-added\");\nfunction Search() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameData, setGameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleInputChange = (e)=>{\n        setUserInput(e.target.value);\n    };\n    // This function displays the 3 most related game titles in the search area\n    const handleSearch = async (e)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        let slug = userInput.split(\" \").join(\"-\").toLowerCase();\n        if (e.key === \"Enter\") {\n            await axios.get(\"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&search=\").concat(slug, \"&page_size=3\")).then((response)=>{\n                setGameData(response.data.results);\n                console.log(response.data);\n            }).catch((error)=>{\n                console.log(error.response.data);\n            });\n            setUserInput(\"\");\n        }\n    };\n    /* This functions takes certain game data and sends it to the backend as a user favorite game to be called back in the future and tied to that particular user in future login sessions */ const addFavorites = async (id)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        const user_id = state.user.user_id;\n        const single_game = gameData.filter((item)=>item.id == id);\n        console.log(single_game);\n        const gameInfo = {\n            game_title: single_game[0].name,\n            rawg_id: single_game[0].id,\n            user: state.user,\n            game_image_url: single_game\n        };\n        gameInfo.user_id = user_id;\n        console.log(gameInfo);\n        const header = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        axios.post(\"http://127.0.0.1:8000/api/add-to-favorites/\", gameInfo, header).then((response)=>{\n            console.log(\"Successfully added to favorite games\", response.data);\n        }).catch((error)=>{\n            console.error(\"Error posting data:\", error.response);\n        });\n    };\n    if (gameData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"search\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Choose your adventure\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 68,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"search text-center\",\n                    placeholder: \"Search for a game...\",\n                    value: userInput,\n                    onChange: handleInputChange,\n                    onKeyDown: handleSearch,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"search\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Share the Loot!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search text-center\",\n                            placeholder: \"Search for a game...\",\n                            value: userInput,\n                            onChange: handleInputChange,\n                            onKeyDown: handleSearch,\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gamesContainer container-fluid\",\n                    children: gameData.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card col-3 m-1 border rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"card-img-top img-fluid\",\n                                        src: game.background_image,\n                                        alt: game.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-body\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"card-title text-center\",\n                                            children: game.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-group list-group-flush\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Overall Rating: \",\n                                                    game.rating\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Release Date: \",\n                                                    game.released\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: (e)=>addFavorites(game.id),\n                                                    children: \"Add this game to your favorites!\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 69\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                lineNumber: 82,\n                                columnNumber: 29\n                            }, this)\n                        }, game.id, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 74,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Search, \"XBLlHptglH9eoJtdCxqyfQwCN48=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEJBRTFKLDhEQUFDUDtvQkFBSUcsV0FBVTs4QkFDVnhDLFNBQVM2QyxHQUFHLENBQUNDLENBQUFBLHFCQUNWLDhEQUFDVDs0QkFBSUcsV0FBVTtzQ0FDWCw0RUFBQ0g7Z0NBQUlHLFdBQVU7O2tEQUNYLDhEQUFDTzt3Q0FBSVAsV0FBVTt3Q0FBeUJRLEtBQUtGLEtBQUtHLGdCQUFnQjt3Q0FBRUMsS0FBS0osS0FBS2YsSUFBSTs7Ozs7O2tEQUNsRiw4REFBQ007d0NBQUlHLFdBQVU7a0RBQ1gsNEVBQUNXOzRDQUFHWCxXQUFVO3NEQUEwQk0sS0FBS2YsSUFBSTs7Ozs7Ozs7Ozs7a0RBRXJELDhEQUFDcUI7d0NBQUdaLFdBQVU7OzBEQUNWLDhEQUFDYTtnREFBR2IsV0FBVTs7b0RBQWtCO29EQUFpQk0sS0FBS1EsTUFBTTs7Ozs7OzswREFDNUQsOERBQUNEO2dEQUFHYixXQUFVOztvREFBa0I7b0RBQWVNLEtBQUtTLFFBQVE7Ozs7Ozs7MERBQzVELDhEQUFDRjtnREFBR2IsV0FBVTswREFBa0IsNEVBQUNnQjtvREFBT0MsU0FBUyxDQUFDdEQsSUFBSW1CLGFBQWF3QixLQUFLdkIsRUFBRTs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBVHJDdUIsS0FBS3ZCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQi9FO0FBQ0o7R0F0RndCNUI7O1FBQ01OLGdFQUFjQTs7O0tBRHBCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2guanM/M2FhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gJy4uL3NlcnZpY2VzL2F1dGguaGVhZGVycyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IEFQSUtFWSA9ICc3NTIyNjFiZGRjMTA0YmU3ODYwZjE2MTI0ZDYxNjI1NSc7XHJcbmNvbnN0IHVybCA9IGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9JHtBUElLRVl9JmRhdGVzPTIwMjAtMDEtMDEsMjAyMy0wOC0xNyZvcmRlcmluZz0tYWRkZWRgO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlR2xvYmFsU3RhdGUoKVxyXG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2dhbWVEYXRhLCBzZXRHYW1lRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gZGlzcGxheXMgdGhlIDMgbW9zdCByZWxhdGVkIGdhbWUgdGl0bGVzIGluIHRoZSBzZWFyY2ggYXJlYVxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbiAgICAgICAgbGV0IHNsdWcgPSB1c2VySW5wdXQuc3BsaXQoJyAnKS5qb2luKCctJykudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/a2V5PSR7QVBJS0VZfSZzZWFyY2g9JHtzbHVnfSZwYWdlX3NpemU9M2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZURhdGEocmVzcG9uc2UuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFVzZXJJbnB1dChcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogVGhpcyBmdW5jdGlvbnMgdGFrZXMgY2VydGFpbiBnYW1lIGRhdGEgYW5kIHNlbmRzIGl0IHRvIHRoZSBiYWNrZW5kIGFzIGEgdXNlciBmYXZvcml0ZSBnYW1lIHRvIGJlIGNhbGxlZCBiYWNrIGluIHRoZSBmdXR1cmUgYW5kIHRpZWQgdG8gdGhhdCBwYXJ0aWN1bGFyIHVzZXIgaW4gZnV0dXJlIGxvZ2luIHNlc3Npb25zICovXHJcblxyXG4gICAgY29uc3QgYWRkRmF2b3JpdGVzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWQ7XHJcbiAgICAgICAgY29uc3Qgc2luZ2xlX2dhbWUgPSBnYW1lRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT0gaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNpbmdsZV9nYW1lKTtcclxuICAgICAgICBjb25zdCBnYW1lSW5mbyA9IHtcclxuICAgICAgICAgICAgZ2FtZV90aXRsZTogc2luZ2xlX2dhbWVbMF0ubmFtZSxcclxuICAgICAgICAgICAgcmF3Z19pZDogc2luZ2xlX2dhbWVbMF0uaWQsXHJcbiAgICAgICAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgIGdhbWVfaW1hZ2VfdXJsOiBzaW5nbGVfZ2FtZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2FtZUluZm8udXNlcl9pZCA9IHVzZXJfaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZUluZm8pO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGF1dGhIZWFkZXIoKTtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FkZC10by1mYXZvcml0ZXMvJywgZ2FtZUluZm8sIGhlYWRlcilcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgYWRkZWQgdG8gZmF2b3JpdGUgZ2FtZXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvc3RpbmcgZGF0YTonLCBlcnJvci5yZXNwb25zZSlcclxuICAgICAgICB9KSBcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5DaG9vc2UgeW91ciBhZHZlbnR1cmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2ggdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBnYW1lLi4uXCIgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleURvd249e2hhbmRsZVNlYXJjaH0gdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaGFyZSB0aGUgTG9vdCE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2ggdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBnYW1lLi4uXCIgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleURvd249e2hhbmRsZVNlYXJjaH0gdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVzQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lRGF0YS5tYXAoZ2FtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtMyBtLTEgYm9yZGVyIHJvdW5kZWRcIiBrZXk9e2dhbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBpbWctZmx1aWRcIiBzcmM9e2dhbWUuYmFja2dyb3VuZF9pbWFnZX0gYWx0PXtnYW1lLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXJcIj57Z2FtZS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+T3ZlcmFsbCBSYXRpbmc6IHtnYW1lLnJhdGluZ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+UmVsZWFzZSBEYXRlOiB7Z2FtZS5yZWxlYXNlZH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+PGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmFkZEZhdm9yaXRlcyhnYW1lLmlkKX0+QWRkIHRoaXMgZ2FtZSB0byB5b3VyIGZhdm9yaXRlcyE8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZUdsb2JhbFN0YXRlIiwidXNlUm91dGVyIiwiYXV0aEhlYWRlciIsImF4aW9zIiwiQVBJS0VZIiwidXJsIiwiU2VhcmNoIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImdhbWVEYXRhIiwic2V0R2FtZURhdGEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaCIsInJlcXVpcmUiLCJzbHVnIiwic3BsaXQiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJrZXkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiYWRkRmF2b3JpdGVzIiwiaWQiLCJ1c2VyX2lkIiwidXNlciIsInNpbmdsZV9nYW1lIiwiZmlsdGVyIiwiaXRlbSIsImdhbWVJbmZvIiwiZ2FtZV90aXRsZSIsIm5hbWUiLCJyYXdnX2lkIiwiZ2FtZV9pbWFnZV91cmwiLCJoZWFkZXIiLCJwb3N0IiwibGVuZ3RoIiwiZGl2IiwiaDIiLCJpbnB1dCIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJ0eXBlIiwibWFwIiwiZ2FtZSIsImltZyIsInNyYyIsImJhY2tncm91bmRfaW1hZ2UiLCJhbHQiLCJoNCIsInVsIiwibGkiLCJyYXRpbmciLCJyZWxlYXNlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Search.js\n"));

/***/ })

});