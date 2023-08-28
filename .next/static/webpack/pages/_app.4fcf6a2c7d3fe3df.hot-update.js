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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nfunction Search() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameData, setGameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleInputChange = (e)=>{\n        setUserInput(e.target.value);\n    };\n    // This function displays the 3 most related game titles in the search area\n    const handleSearch = async (e)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        let slug = userInput.split(\" \").join(\"-\").toLowerCase();\n        if (e.key === \"Enter\") {\n            await axios.get(\"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&search=\").concat(slug, \"&page_size=3\")).then((response)=>{\n                setGameData(response.data.results);\n                console.log(response.data);\n            }).catch((error)=>{\n                console.log(error.response.data);\n            });\n            setUserInput(\"\");\n        }\n    };\n    /* This functions takes certain game data and sends it to the backend as a user favorite game to be called back in the future and tied to that particular user in future login sessions */ const addFavorites = async (id)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        const user_id = state.user.user_id;\n        const single_game = gameData.filter((item)=>item.id == id);\n        console.log(single_game);\n        const gameInfo = {\n            game_title: single_game[0].name,\n            rawg_id: single_game[0].id,\n            game_image_url: single_game[0].background_image,\n            genre: single_game[0].genres[0]\n        };\n        gameInfo.user_id = user_id;\n        console.log(gameInfo);\n        const header = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        axios.post(\"http://127.0.0.1:8000/api/add-to-favorites/\", gameInfo, header).then((response)=>{\n            console.log(\"Successfully added to favorite games\", response.data);\n        }).catch((error)=>{\n            console.error(\"Error posting data:\", error.response);\n        });\n    };\n    if (gameData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"search\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Choose your adventure\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 70,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"search text-center\",\n                    placeholder: \"Search for a game...\",\n                    value: userInput,\n                    onChange: handleInputChange,\n                    onKeyDown: handleSearch,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 71,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"search\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Share the Loot!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search text-center\",\n                            placeholder: \"Search for a game...\",\n                            value: userInput,\n                            onChange: handleInputChange,\n                            onKeyDown: handleSearch,\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gamesContainer container-fluid\",\n                    children: gameData.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card col-3 m-1 border rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"..pages/[slug/\",\n                                        as: \"../pages/\".concat(game.slug, \"/page\"),\n                                        passHref: true,\n                                        style: {\n                                            textDecoration: \"none\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"card-img-top img-fluid\",\n                                                src: game.background_image,\n                                                alt: game.name,\n                                                onClick: ()=>router.push({\n                                                        pathname: \"../pages/[slug]/page\",\n                                                        query: {\n                                                            slug: game.slug\n                                                        }\n                                                    }, \"/game/\".concat(game.slug, \"/page\"), {\n                                                        shallow: true,\n                                                        state: {\n                                                            gameData: JSON.stringify(game)\n                                                        }\n                                                    })\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    className: \"card-title text-center\",\n                                                    children: game.name\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 97,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-group list-group-flush\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Overall Rating: \",\n                                                    game.rating\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Release Date: \",\n                                                    game.released\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: (e)=>addFavorites(game.id),\n                                                    children: \"Add this game to your favorites!\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 69\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 104,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                lineNumber: 84,\n                                columnNumber: 29\n                            }, this)\n                        }, game.id, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Search, \"XBLlHptglH9eoJtdCxqyfQwCN48=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFyQnJDMEIsS0FBSzFCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2Qi9FO0FBQ0o7R0FyR3dCNUI7O1FBQ01MLGdFQUFjQTs7O0tBRHBCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2guanM/M2FhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gJy4uL3NlcnZpY2VzL2F1dGguaGVhZGVycyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5jb25zdCBBUElLRVkgPSAnNzUyMjYxYmRkYzEwNGJlNzg2MGYxNjEyNGQ2MTYyNTUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VHbG9iYWxTdGF0ZSgpXHJcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZ2FtZURhdGEsIHNldEdhbWVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBkaXNwbGF5cyB0aGUgMyBtb3N0IHJlbGF0ZWQgZ2FtZSB0aXRsZXMgaW4gdGhlIHNlYXJjaCBhcmVhXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuICAgICAgICBsZXQgc2x1ZyA9IHVzZXJJbnB1dC5zcGxpdCgnICcpLmpvaW4oJy0nKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9JHtBUElLRVl9JnNlYXJjaD0ke3NsdWd9JnBhZ2Vfc2l6ZT0zYClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1lRGF0YShyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0VXNlcklucHV0KFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICBcclxuICAgIC8qIFRoaXMgZnVuY3Rpb25zIHRha2VzIGNlcnRhaW4gZ2FtZSBkYXRhIGFuZCBzZW5kcyBpdCB0byB0aGUgYmFja2VuZCBhcyBhIHVzZXIgZmF2b3JpdGUgZ2FtZSB0byBiZSBjYWxsZWQgYmFjayBpbiB0aGUgZnV0dXJlIGFuZCB0aWVkIHRvIHRoYXQgcGFydGljdWxhciB1c2VyIGluIGZ1dHVyZSBsb2dpbiBzZXNzaW9ucyAqL1xyXG5cclxuICAgIGNvbnN0IGFkZEZhdm9yaXRlcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuICAgICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkO1xyXG4gICAgICAgIGNvbnN0IHNpbmdsZV9nYW1lID0gZ2FtZURhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09IGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaW5nbGVfZ2FtZSk7XHJcbiAgICAgICAgY29uc3QgZ2FtZUluZm8gPSB7XHJcbiAgICAgICAgICAgIGdhbWVfdGl0bGU6IHNpbmdsZV9nYW1lWzBdLm5hbWUsXHJcbiAgICAgICAgICAgIHJhd2dfaWQ6IHNpbmdsZV9nYW1lWzBdLmlkLFxyXG4gICAgICAgICAgICBnYW1lX2ltYWdlX3VybDogc2luZ2xlX2dhbWVbMF0uYmFja2dyb3VuZF9pbWFnZSxcclxuICAgICAgICAgICAgZ2VucmU6IHNpbmdsZV9nYW1lWzBdLmdlbnJlc1swXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2FtZUluZm8udXNlcl9pZCA9IHVzZXJfaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZUluZm8pO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGF1dGhIZWFkZXIoKTtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FkZC10by1mYXZvcml0ZXMvJywgZ2FtZUluZm8sIGhlYWRlcilcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgYWRkZWQgdG8gZmF2b3JpdGUgZ2FtZXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvc3RpbmcgZGF0YTonLCBlcnJvci5yZXNwb25zZSlcclxuICAgICAgICB9KSBcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKGdhbWVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2hvb3NlIHlvdXIgYWR2ZW50dXJlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoIHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgZ2FtZS4uLlwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+U2hhcmUgdGhlIExvb3QhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoIHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgZ2FtZS4uLlwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lc0NvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZURhdGEubWFwKGdhbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTMgbS0xIGJvcmRlciByb3VuZGVkXCIga2V5PXtnYW1lLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLi5wYWdlcy9bc2x1Zy8nfWFzPXtgLi4vcGFnZXMvJHtnYW1lLnNsdWd9L3BhZ2VgfXBhc3NIcmVmIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBpbWctZmx1aWRcIiBzcmM9e2dhbWUuYmFja2dyb3VuZF9pbWFnZX0gYWx0PXtnYW1lLm5hbWV9IG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnLi4vcGFnZXMvW3NsdWddL3BhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBzbHVnOiBnYW1lLnNsdWcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvZ2FtZS8ke2dhbWUuc2x1Z30vcGFnZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzaGFsbG93OiB0cnVlLCBzdGF0ZTogeyBnYW1lRGF0YTogSlNPTi5zdHJpbmdpZnkoZ2FtZSkgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlclwiPntnYW1lLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5PdmVyYWxsIFJhdGluZzoge2dhbWUucmF0aW5nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5SZWxlYXNlIERhdGU6IHtnYW1lLnJlbGVhc2VkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj48YnV0dG9uIG9uQ2xpY2s9eyhlKT0+YWRkRmF2b3JpdGVzKGdhbWUuaWQpfT5BZGQgdGhpcyBnYW1lIHRvIHlvdXIgZmF2b3JpdGVzITwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VHbG9iYWxTdGF0ZSIsInVzZVJvdXRlciIsImF1dGhIZWFkZXIiLCJheGlvcyIsIkFQSUtFWSIsIlNlYXJjaCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJnYW1lRGF0YSIsInNldEdhbWVEYXRhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJyZXF1aXJlIiwic2x1ZyIsInNwbGl0Iiwiam9pbiIsInRvTG93ZXJDYXNlIiwia2V5IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImFkZEZhdm9yaXRlcyIsImlkIiwidXNlcl9pZCIsInVzZXIiLCJzaW5nbGVfZ2FtZSIsImZpbHRlciIsIml0ZW0iLCJnYW1lSW5mbyIsImdhbWVfdGl0bGUiLCJuYW1lIiwicmF3Z19pZCIsImdhbWVfaW1hZ2VfdXJsIiwiYmFja2dyb3VuZF9pbWFnZSIsImdlbnJlIiwiZ2VucmVzIiwiaGVhZGVyIiwicG9zdCIsImxlbmd0aCIsImRpdiIsImgyIiwiaW5wdXQiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwidHlwZSIsIm1hcCIsImdhbWUiLCJocmVmIiwiYXMiLCJwYXNzSHJlZiIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJpbWciLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwicm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJzaGFsbG93IiwiSlNPTiIsInN0cmluZ2lmeSIsImg0IiwidWwiLCJsaSIsInJhdGluZyIsInJlbGVhc2VkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Search.js\n"));

/***/ })

});