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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nfunction Search() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameData, setGameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleInputChange = (e)=>{\n        setUserInput(e.target.value);\n    };\n    // This function displays the 3 most related game titles in the search area\n    const handleSearch = async (e)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        let slug = userInput.split(\" \").join(\"-\").toLowerCase();\n        if (e.key === \"Enter\") {\n            await axios.get(\"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&search=\").concat(slug, \"&page_size=3\")).then((response)=>{\n                setGameData(response.data.results);\n                console.log(response.data);\n            }).catch((error)=>{\n                console.log(error.response.data);\n            });\n            setUserInput(\"\");\n        }\n    };\n    /* This functions takes certain game data and sends it to the backend as a user favorite game to be called back in the future and tied to that particular user in future login sessions */ const addFavorites = async (id)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        const user_id = state.user.user_id;\n        const single_game = gameData.filter((item)=>item.id == id);\n        console.log(single_game);\n        const gameInfo = {\n            game_title: single_game[0].name,\n            rawg_id: single_game[0].id,\n            game_image_url: single_game[0].background_image,\n            genre: single_game[0].genres[0]\n        };\n        gameInfo.user_id = user_id;\n        console.log(gameInfo);\n        const header = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        axios.post(\"http://127.0.0.1:8000/api/add-to-favorites/\", gameInfo, header).then((response)=>{\n            console.log(\"Successfully added to favorite games\", response.data);\n        }).catch((error)=>{\n            console.error(\"Error posting data:\", error.response);\n        });\n    };\n    if (gameData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"search\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Choose your adventure\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 68,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"search text-center\",\n                    placeholder: \"Search for a game...\",\n                    value: userInput,\n                    onChange: handleInputChange,\n                    onKeyDown: handleSearch,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"search\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Share the Loot!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search text-center\",\n                            placeholder: \"Search for a game...\",\n                            value: userInput,\n                            onChange: handleInputChange,\n                            onKeyDown: handleSearch,\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gamesContainer container-fluid\",\n                    children: gameData.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card col-3 m-1 border rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: {\n                                            pathname: \"../pages/[slug]/page\",\n                                            query: {\n                                                slug: game.slug,\n                                                gameData: JSON.stringify(game)\n                                            }\n                                        },\n                                        as: \"../pages/\".concat(game.slug, \"/page\"),\n                                        passHref: true,\n                                        style: {\n                                            textDecoration: \"none\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"card-img-top img-fluid\",\n                                                src: game.background_image,\n                                                alt: game.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    className: \"card-title text-center\",\n                                                    children: game.name\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-group list-group-flush\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Overall Rating: \",\n                                                    game.rating\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Release Date: \",\n                                                    game.released\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: (e)=>addFavorites(game.id),\n                                                    children: \"Add this game to your favorites!\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 69\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                lineNumber: 82,\n                                columnNumber: 29\n                            }, this)\n                        }, game.id, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 74,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Search, \"XBLlHptglH9eoJtdCxqyfQwCN48=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bXBvbmVudHMvU2VhcmNoLmpzPzNhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLmhlYWRlcnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuY29uc3QgQVBJS0VZID0gJzc1MjI2MWJkZGMxMDRiZTc4NjBmMTYxMjRkNjE2MjU1JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlR2xvYmFsU3RhdGUoKVxyXG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2dhbWVEYXRhLCBzZXRHYW1lRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gZGlzcGxheXMgdGhlIDMgbW9zdCByZWxhdGVkIGdhbWUgdGl0bGVzIGluIHRoZSBzZWFyY2ggYXJlYVxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbiAgICAgICAgbGV0IHNsdWcgPSB1c2VySW5wdXQuc3BsaXQoJyAnKS5qb2luKCctJykudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/a2V5PSR7QVBJS0VZfSZzZWFyY2g9JHtzbHVnfSZwYWdlX3NpemU9M2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZURhdGEocmVzcG9uc2UuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFVzZXJJbnB1dChcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIC8qIFRoaXMgZnVuY3Rpb25zIHRha2VzIGNlcnRhaW4gZ2FtZSBkYXRhIGFuZCBzZW5kcyBpdCB0byB0aGUgYmFja2VuZCBhcyBhIHVzZXIgZmF2b3JpdGUgZ2FtZSB0byBiZSBjYWxsZWQgYmFjayBpbiB0aGUgZnV0dXJlIGFuZCB0aWVkIHRvIHRoYXQgcGFydGljdWxhciB1c2VyIGluIGZ1dHVyZSBsb2dpbiBzZXNzaW9ucyAqL1xyXG5cclxuICAgIGNvbnN0IGFkZEZhdm9yaXRlcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuICAgICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkO1xyXG4gICAgICAgIGNvbnN0IHNpbmdsZV9nYW1lID0gZ2FtZURhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09IGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaW5nbGVfZ2FtZSk7XHJcbiAgICAgICAgY29uc3QgZ2FtZUluZm8gPSB7XHJcbiAgICAgICAgICAgIGdhbWVfdGl0bGU6IHNpbmdsZV9nYW1lWzBdLm5hbWUsXHJcbiAgICAgICAgICAgIHJhd2dfaWQ6IHNpbmdsZV9nYW1lWzBdLmlkLFxyXG4gICAgICAgICAgICBnYW1lX2ltYWdlX3VybDogc2luZ2xlX2dhbWVbMF0uYmFja2dyb3VuZF9pbWFnZSxcclxuICAgICAgICAgICAgZ2VucmU6IHNpbmdsZV9nYW1lWzBdLmdlbnJlc1swXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2FtZUluZm8udXNlcl9pZCA9IHVzZXJfaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZUluZm8pO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGF1dGhIZWFkZXIoKTtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FkZC10by1mYXZvcml0ZXMvJywgZ2FtZUluZm8sIGhlYWRlcilcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgYWRkZWQgdG8gZmF2b3JpdGUgZ2FtZXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvc3RpbmcgZGF0YTonLCBlcnJvci5yZXNwb25zZSlcclxuICAgICAgICB9KSBcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5DaG9vc2UgeW91ciBhZHZlbnR1cmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2ggdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBnYW1lLi4uXCIgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleURvd249e2hhbmRsZVNlYXJjaH0gdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaGFyZSB0aGUgTG9vdCE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2ggdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBnYW1lLi4uXCIgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleURvd249e2hhbmRsZVNlYXJjaH0gdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVzQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lRGF0YS5tYXAoZ2FtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtMyBtLTEgYm9yZGVyIHJvdW5kZWRcIiBrZXk9e2dhbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcuLi9wYWdlcy9bc2x1Z10vcGFnZScsIHF1ZXJ5OiB7IHNsdWc6IGdhbWUuc2x1ZywgZ2FtZURhdGE6IEpTT04uc3RyaW5naWZ5KGdhbWUpIH0sfX1hcz17YC4uL3BhZ2VzLyR7Z2FtZS5zbHVnfS9wYWdlYH1wYXNzSHJlZiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgaW1nLWZsdWlkXCIgc3JjPXtnYW1lLmJhY2tncm91bmRfaW1hZ2V9IGFsdD17Z2FtZS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyXCI+e2dhbWUubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPk92ZXJhbGwgUmF0aW5nOiB7Z2FtZS5yYXRpbmd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlJlbGVhc2UgRGF0ZToge2dhbWUucmVsZWFzZWR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPjxidXR0b24gb25DbGljaz17KGUpPT5hZGRGYXZvcml0ZXMoZ2FtZS5pZCl9PkFkZCB0aGlzIGdhbWUgdG8geW91ciBmYXZvcml0ZXMhPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZUdsb2JhbFN0YXRlIiwidXNlUm91dGVyIiwiYXV0aEhlYWRlciIsImF4aW9zIiwiQVBJS0VZIiwiU2VhcmNoIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImdhbWVEYXRhIiwic2V0R2FtZURhdGEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaCIsInJlcXVpcmUiLCJzbHVnIiwic3BsaXQiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJrZXkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiYWRkRmF2b3JpdGVzIiwiaWQiLCJ1c2VyX2lkIiwidXNlciIsInNpbmdsZV9nYW1lIiwiZmlsdGVyIiwiaXRlbSIsImdhbWVJbmZvIiwiZ2FtZV90aXRsZSIsIm5hbWUiLCJyYXdnX2lkIiwiZ2FtZV9pbWFnZV91cmwiLCJiYWNrZ3JvdW5kX2ltYWdlIiwiZ2VucmUiLCJnZW5yZXMiLCJoZWFkZXIiLCJwb3N0IiwibGVuZ3RoIiwiZGl2IiwiaDIiLCJpbnB1dCIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJ0eXBlIiwibWFwIiwiZ2FtZSIsImhyZWYiLCJwYXRobmFtZSIsInF1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFzIiwicGFzc0hyZWYiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiaW1nIiwic3JjIiwiYWx0IiwiaDQiLCJ1bCIsImxpIiwicmF0aW5nIiwicmVsZWFzZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Search.js\n"));

/***/ })

});