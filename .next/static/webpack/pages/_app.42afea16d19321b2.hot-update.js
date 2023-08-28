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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nfunction Search() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameData, setGameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleInputChange = (e)=>{\n        setUserInput(e.target.value);\n    };\n    // This function displays the 3 most related game titles in the search area\n    const handleSearch = async (e)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        let slug = userInput.split(\" \").join(\"-\").toLowerCase();\n        if (e.key === \"Enter\") {\n            await axios.get(\"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&search=\").concat(slug, \"&page_size=3\")).then((response)=>{\n                setGameData(response.data.results);\n                console.log(response.data);\n            }).catch((error)=>{\n                console.log(error.response.data);\n            });\n            setUserInput(\"\");\n        }\n    };\n    /* This functions takes certain game data and sends it to the backend as a user favorite game to be called back in the future and tied to that particular user in future login sessions */ const addFavorites = async (id)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        const user_id = state.user.user_id;\n        const single_game = gameData.filter((item)=>item.id == id);\n        console.log(single_game);\n        const gameInfo = {\n            game_title: single_game[0].name,\n            rawg_id: single_game[0].id,\n            game_image_url: single_game[0].background_image,\n            genre: single_game[0].genres[0]\n        };\n        gameInfo.user_id = user_id;\n        console.log(gameInfo);\n        const header = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        axios.post(\"http://127.0.0.1:8000/api/add-to-favorites/\", gameInfo, header).then((response)=>{\n            console.log(\"Successfully added to favorite games\", response.data);\n        }).catch((error)=>{\n            console.error(\"Error posting data:\", error.response);\n        });\n    };\n    if (gameData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"search\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Choose your adventure\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 70,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"search text-center\",\n                    placeholder: \"Search for a game...\",\n                    value: userInput,\n                    onChange: handleInputChange,\n                    onKeyDown: handleSearch,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 71,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"search\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Share the Loot!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search text-center\",\n                            placeholder: \"Search for a game...\",\n                            value: userInput,\n                            onChange: handleInputChange,\n                            onKeyDown: handleSearch,\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gamesContainer container-fluid\",\n                    children: gameData.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card col-3 m-1 border rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: {\n                                            pathname: \"../pages/[slug]/page\",\n                                            query: {\n                                                slug: game.slug,\n                                                gameData: JSON.stringify(game)\n                                            }\n                                        },\n                                        as: \"../pages/\".concat(game.slug, \"/page\"),\n                                        passHref: true,\n                                        style: {\n                                            textDecoration: \"none\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"card-img-top img-fluid\",\n                                                src: game.background_image,\n                                                alt: game.name,\n                                                onClick: ()=>router.push({\n                                                        pathname: \"/game/[slug]/page\",\n                                                        query: {\n                                                            slug: game.slug\n                                                        }\n                                                    }, \"/game/$\")\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    className: \"card-title text-center\",\n                                                    children: game.name\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-group list-group-flush\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Overall Rating: \",\n                                                    game.rating\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: [\n                                                    \"Release Date: \",\n                                                    game.released\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"list-group-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: (e)=>addFavorites(game.id),\n                                                    children: \"Add this game to your favorites!\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 69\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                                lineNumber: 84,\n                                columnNumber: 29\n                            }, this)\n                        }, game.id, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Search.js\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Search, \"XBLlHptglH9eoJtdCxqyfQwCN48=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLMUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztJQTBCL0U7QUFDSjtHQWxHd0I1Qjs7UUFDTUwsZ0VBQWNBOzs7S0FEcEJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qcz8zYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSAnLi4vc2VydmljZXMvYXV0aC5oZWFkZXJzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcbmNvbnN0IEFQSUtFWSA9ICc3NTIyNjFiZGRjMTA0YmU3ODYwZjE2MTI0ZDYxNjI1NSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUdsb2JhbFN0YXRlKClcclxuICAgIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtnYW1lRGF0YSwgc2V0R2FtZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGRpc3BsYXlzIHRoZSAzIG1vc3QgcmVsYXRlZCBnYW1lIHRpdGxlcyBpbiB0aGUgc2VhcmNoIGFyZWFcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG4gICAgICAgIGxldCBzbHVnID0gdXNlcklucHV0LnNwbGl0KCcgJykuam9pbignLScpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnJhd2cuaW8vYXBpL2dhbWVzP2tleT0ke0FQSUtFWX0mc2VhcmNoPSR7c2x1Z30mcGFnZV9zaXplPTNgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVEYXRhKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRVc2VySW5wdXQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgIFxyXG4gICAgLyogVGhpcyBmdW5jdGlvbnMgdGFrZXMgY2VydGFpbiBnYW1lIGRhdGEgYW5kIHNlbmRzIGl0IHRvIHRoZSBiYWNrZW5kIGFzIGEgdXNlciBmYXZvcml0ZSBnYW1lIHRvIGJlIGNhbGxlZCBiYWNrIGluIHRoZSBmdXR1cmUgYW5kIHRpZWQgdG8gdGhhdCBwYXJ0aWN1bGFyIHVzZXIgaW4gZnV0dXJlIGxvZ2luIHNlc3Npb25zICovXHJcblxyXG4gICAgY29uc3QgYWRkRmF2b3JpdGVzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWQ7XHJcbiAgICAgICAgY29uc3Qgc2luZ2xlX2dhbWUgPSBnYW1lRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT0gaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNpbmdsZV9nYW1lKTtcclxuICAgICAgICBjb25zdCBnYW1lSW5mbyA9IHtcclxuICAgICAgICAgICAgZ2FtZV90aXRsZTogc2luZ2xlX2dhbWVbMF0ubmFtZSxcclxuICAgICAgICAgICAgcmF3Z19pZDogc2luZ2xlX2dhbWVbMF0uaWQsXHJcbiAgICAgICAgICAgIGdhbWVfaW1hZ2VfdXJsOiBzaW5nbGVfZ2FtZVswXS5iYWNrZ3JvdW5kX2ltYWdlLFxyXG4gICAgICAgICAgICBnZW5yZTogc2luZ2xlX2dhbWVbMF0uZ2VucmVzWzBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBnYW1lSW5mby51c2VyX2lkID0gdXNlcl9pZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lSW5mbyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYXV0aEhlYWRlcigpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYWRkLXRvLWZhdm9yaXRlcy8nLCBnYW1lSW5mbywgaGVhZGVyKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBhZGRlZCB0byBmYXZvcml0ZSBnYW1lcycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcG9zdGluZyBkYXRhOicsIGVycm9yLnJlc3BvbnNlKVxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoZ2FtZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5DaG9vc2UgeW91ciBhZHZlbnR1cmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2ggdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBnYW1lLi4uXCIgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleURvd249e2hhbmRsZVNlYXJjaH0gdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaGFyZSB0aGUgTG9vdCE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2ggdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBnYW1lLi4uXCIgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleURvd249e2hhbmRsZVNlYXJjaH0gdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVzQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lRGF0YS5tYXAoZ2FtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtMyBtLTEgYm9yZGVyIHJvdW5kZWRcIiBrZXk9e2dhbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcuLi9wYWdlcy9bc2x1Z10vcGFnZScsIHF1ZXJ5OiB7IHNsdWc6IGdhbWUuc2x1ZywgZ2FtZURhdGE6IEpTT04uc3RyaW5naWZ5KGdhbWUpIH0sfX1hcz17YC4uL3BhZ2VzLyR7Z2FtZS5zbHVnfS9wYWdlYH1wYXNzSHJlZiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgaW1nLWZsdWlkXCIgc3JjPXtnYW1lLmJhY2tncm91bmRfaW1hZ2V9IGFsdD17Z2FtZS5uYW1lfSBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9nYW1lL1tzbHVnXS9wYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgc2x1ZzogZ2FtZS5zbHVnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL2dhbWUvJGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXJcIj57Z2FtZS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+T3ZlcmFsbCBSYXRpbmc6IHtnYW1lLnJhdGluZ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+UmVsZWFzZSBEYXRlOiB7Z2FtZS5yZWxlYXNlZH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+PGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmFkZEZhdm9yaXRlcyhnYW1lLmlkKX0+QWRkIHRoaXMgZ2FtZSB0byB5b3VyIGZhdm9yaXRlcyE8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlR2xvYmFsU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhdXRoSGVhZGVyIiwiYXhpb3MiLCJBUElLRVkiLCJTZWFyY2giLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiZ2FtZURhdGEiLCJzZXRHYW1lRGF0YSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2VhcmNoIiwicmVxdWlyZSIsInNsdWciLCJzcGxpdCIsImpvaW4iLCJ0b0xvd2VyQ2FzZSIsImtleSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJhZGRGYXZvcml0ZXMiLCJpZCIsInVzZXJfaWQiLCJ1c2VyIiwic2luZ2xlX2dhbWUiLCJmaWx0ZXIiLCJpdGVtIiwiZ2FtZUluZm8iLCJnYW1lX3RpdGxlIiwibmFtZSIsInJhd2dfaWQiLCJnYW1lX2ltYWdlX3VybCIsImJhY2tncm91bmRfaW1hZ2UiLCJnZW5yZSIsImdlbnJlcyIsImhlYWRlciIsInBvc3QiLCJsZW5ndGgiLCJkaXYiLCJoMiIsImlucHV0IiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInR5cGUiLCJtYXAiLCJnYW1lIiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiYXMiLCJwYXNzSHJlZiIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJpbWciLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwicm91dGVyIiwicHVzaCIsImg0IiwidWwiLCJsaSIsInJhdGluZyIsInJlbGVhc2VkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Search.js\n"));

/***/ })

});