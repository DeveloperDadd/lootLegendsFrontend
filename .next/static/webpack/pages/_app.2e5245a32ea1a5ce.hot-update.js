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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n/* harmony import */ var _pages_slug_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/[slug]/page */ \"./src/pages/[slug]/page.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nfunction Search() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameData, setGameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [slug, setSlug] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleInputChange = (e)=>{\n        setUserInput(e.target.value);\n    };\n    // This function displays the 3 most related game titles in the search area\n    const handleSearch = async (e)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        let slug = userInput.split(\" \").join(\"-\").toLowerCase();\n        setSlug(slug);\n        if (e.key === \"Enter\") {\n            await axios.get(\"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&search=\").concat(slug, \"&page_size=3\")).then((response)=>{\n                setGameData(response.data.results);\n                console.log(response.data.results[0].id);\n            }).catch((error)=>{\n                console.log(error.response.data);\n            });\n            setUserInput(\"\");\n        }\n    };\n    /* This functions takes certain game data and sends it to the backend as a user favorite game to be called back in the future and tied to that particular user in future login sessions */ const addFavorites = async (id)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        const user_id = state.user.user_id;\n        const single_game = gameData.filter((item)=>item.id == id);\n        console.log(single_game);\n        const gameInfo = {\n            game_title: single_game[0].name,\n            rawg_id: single_game[0].id,\n            game_image_url: single_game[0].background_image,\n            genre: single_game[0].genres[0]\n        };\n        gameInfo.user_id = user_id;\n        console.log(gameInfo);\n        const header = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        axios.post(\"http://127.0.0.1:8000/api/add-to-favorites/\", gameInfo, header).then((response)=>{\n            console.log(\"Successfully added to favorite games\", response.data);\n        }).catch((error)=>{\n            console.error(\"Error posting data:\", error.response);\n        });\n    };\n    if (gameData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"search\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Choose your adventure\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"search text-center\",\n                    placeholder: \"Search for a game...\",\n                    value: userInput,\n                    onChange: handleInputChange,\n                    onKeyDown: handleSearch,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"search\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Share the Loot!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search text-center\",\n                            placeholder: \"Search for a game...\",\n                            value: userInput,\n                            onChange: handleInputChange,\n                            onKeyDown: handleSearch,\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gamesContainer container-fluid\",\n                    children: gameData.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card col-3 m-1 border rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"card-img-top img-fluid popup-link\",\n                                        src: game.background_image,\n                                        alt: game.name,\n                                        href: \"#\",\n                                        onClick: (e)=>handlePopUp\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"popup-window\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: game.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                id: \"close-button\",\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-body\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"../pages/[slug]/page\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"card-title text-center\",\n                                                children: game.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 71\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-group list-group-flush\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Overall Rating: \",\n                                                    game.rating\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Release Date: \",\n                                                    game.released\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: (e)=>addFavorites(game.id),\n                                                    children: \"Add this game to your favorites!\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 69\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                lineNumber: 84,\n                                columnNumber: 29\n                            }, this)\n                        }, game.id, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Search, \"0aEmqbXt3EmS2rA/JtDDI6+BM2I=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSzdCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5Qi9FO0FBQ0o7R0FqR3dCM0I7O1FBQ1FOLGdFQUFjQTtRQUkzQkMsc0RBQVNBOzs7S0FMSksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzPzNhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLmhlYWRlcnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBHYW1lUGFnZSBmcm9tICcuLi9wYWdlcy9bc2x1Z10vcGFnZSdcclxuXHJcbmNvbnN0IEFQSUtFWSA9ICc3NTIyNjFiZGRjMTA0YmU3ODYwZjE2MTI0ZDYxNjI1NSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKVxyXG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2dhbWVEYXRhLCBzZXRHYW1lRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGRpc3BsYXlzIHRoZSAzIG1vc3QgcmVsYXRlZCBnYW1lIHRpdGxlcyBpbiB0aGUgc2VhcmNoIGFyZWFcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG4gICAgICAgIGxldCBzbHVnID0gdXNlcklucHV0LnNwbGl0KCcgJykuam9pbignLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgc2V0U2x1ZyhzbHVnKTtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9JHtBUElLRVl9JnNlYXJjaD0ke3NsdWd9JnBhZ2Vfc2l6ZT0zYClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1lRGF0YShyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucmVzdWx0c1swXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRVc2VySW5wdXQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiBUaGlzIGZ1bmN0aW9ucyB0YWtlcyBjZXJ0YWluIGdhbWUgZGF0YSBhbmQgc2VuZHMgaXQgdG8gdGhlIGJhY2tlbmQgYXMgYSB1c2VyIGZhdm9yaXRlIGdhbWUgdG8gYmUgY2FsbGVkIGJhY2sgaW4gdGhlIGZ1dHVyZSBhbmQgdGllZCB0byB0aGF0IHBhcnRpY3VsYXIgdXNlciBpbiBmdXR1cmUgbG9naW4gc2Vzc2lvbnMgKi9cclxuXHJcbiAgICBjb25zdCBhZGRGYXZvcml0ZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbiAgICAgICAgY29uc3QgdXNlcl9pZCA9IHN0YXRlLnVzZXIudXNlcl9pZDtcclxuICAgICAgICBjb25zdCBzaW5nbGVfZ2FtZSA9IGdhbWVEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PSBpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2luZ2xlX2dhbWUpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVJbmZvID0ge1xyXG4gICAgICAgICAgICBnYW1lX3RpdGxlOiBzaW5nbGVfZ2FtZVswXS5uYW1lLFxyXG4gICAgICAgICAgICByYXdnX2lkOiBzaW5nbGVfZ2FtZVswXS5pZCxcclxuICAgICAgICAgICAgZ2FtZV9pbWFnZV91cmw6IHNpbmdsZV9nYW1lWzBdLmJhY2tncm91bmRfaW1hZ2UsXHJcbiAgICAgICAgICAgIGdlbnJlOiBzaW5nbGVfZ2FtZVswXS5nZW5yZXNbMF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGdhbWVJbmZvLnVzZXJfaWQgPSB1c2VyX2lkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWVJbmZvKTtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBhdXRoSGVhZGVyKCk7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9hZGQtdG8tZmF2b3JpdGVzLycsIGdhbWVJbmZvLCBoZWFkZXIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgYWRkZWQgdG8gZmF2b3JpdGUgZ2FtZXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvc3RpbmcgZGF0YTonLCBlcnJvci5yZXNwb25zZSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkNob29zZSB5b3VyIGFkdmVudHVyZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoIHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgZ2FtZS4uLlwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+U2hhcmUgdGhlIExvb3QhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoIHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgZ2FtZS4uLlwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lc0NvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZURhdGEubWFwKGdhbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTMgbS0xIGJvcmRlciByb3VuZGVkXCIga2V5PXtnYW1lLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBpbWctZmx1aWQgcG9wdXAtbGlua1wiIHNyYz17Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfSBhbHQ9e2dhbWUubmFtZX0gaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUG9wVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLXdpbmRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2dhbWUubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1idXR0b25cIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIuLi9wYWdlcy9bc2x1Z10vcGFnZVwiPjxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyXCI+e2dhbWUubmFtZX08L2g0PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5PdmVyYWxsIFJhdGluZzoge2dhbWUucmF0aW5nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5SZWxlYXNlIERhdGU6IHtnYW1lLnJlbGVhc2VkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj48YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBhZGRGYXZvcml0ZXMoZ2FtZS5pZCl9PkFkZCB0aGlzIGdhbWUgdG8geW91ciBmYXZvcml0ZXMhPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZUdsb2JhbFN0YXRlIiwidXNlUm91dGVyIiwiYXV0aEhlYWRlciIsImF4aW9zIiwiR2FtZVBhZ2UiLCJBUElLRVkiLCJTZWFyY2giLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiZ2FtZURhdGEiLCJzZXRHYW1lRGF0YSIsInNsdWciLCJzZXRTbHVnIiwicm91dGVyIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJyZXF1aXJlIiwic3BsaXQiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJrZXkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImNhdGNoIiwiZXJyb3IiLCJhZGRGYXZvcml0ZXMiLCJ1c2VyX2lkIiwidXNlciIsInNpbmdsZV9nYW1lIiwiZmlsdGVyIiwiaXRlbSIsImdhbWVJbmZvIiwiZ2FtZV90aXRsZSIsIm5hbWUiLCJyYXdnX2lkIiwiZ2FtZV9pbWFnZV91cmwiLCJiYWNrZ3JvdW5kX2ltYWdlIiwiZ2VucmUiLCJnZW5yZXMiLCJoZWFkZXIiLCJwb3N0IiwibGVuZ3RoIiwiZGl2IiwiaDIiLCJpbnB1dCIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJ0eXBlIiwibWFwIiwiZ2FtZSIsImltZyIsInNyYyIsImFsdCIsImhyZWYiLCJvbkNsaWNrIiwiaGFuZGxlUG9wVXAiLCJoMSIsInAiLCJidXR0b24iLCJoNCIsInVsIiwibGkiLCJyYXRpbmciLCJyZWxlYXNlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Search.js\n"));

/***/ })

});