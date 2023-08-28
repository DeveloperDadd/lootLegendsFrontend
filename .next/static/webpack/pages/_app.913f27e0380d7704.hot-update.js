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

/***/ "./src/components/Browse.js":
/*!**********************************!*\
  !*** ./src/components/Browse.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Browse; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst APIKEY = \"752261bddc104be7860f16124d616255\";\nconst url = \"https://api.rawg.io/api/games?key=\".concat(APIKEY, \"&dates=2020-01-01,2023-08-17&ordering=-added&page_size=9\");\n\nfunction Browse() {\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        axios.get(url).then((response)=>{\n            setGames(response.data.results);\n            console.log(response.data);\n        }).catch((error)=>{\n            console.log(\"Error fetching data:\", error);\n        });\n    }, []);\n    const addFavorites = async (id)=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        const user_id = state.user.user_id;\n        const single_game = games.filter((item)=>item.id == id);\n        console.log(single_game);\n        const gameInfo = {\n            game_title: single_game[0].name,\n            rawg_id: single_game[0].id,\n            game_image_url: single_game[0].background_image,\n            genre: single_game[0].genres[0]\n        };\n        gameInfo.user_id = user_id;\n        console.log(gameInfo);\n        const header = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        axios.post(\"http://127.0.0.1:8000/api/add-to-favorites/\", gameInfo, header).then((response)=>{\n            console.log(\"Successfully added to favorite games\", response.data);\n        }).catch((error)=>{\n            console.error(\"Error posting data:\", error.response);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gamesContainer container-fluid\",\n        children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card col-xs m-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"card-img-top img-fluid\",\n                            src: game.background_image,\n                            alt: game.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                            lineNumber: 53,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"card-title text-center\",\n                                children: game.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                lineNumber: 55,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                            lineNumber: 54,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-group list-group-flush\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"list-group-item\",\n                                    children: [\n                                        \"Overall Rating: \",\n                                        game.rating\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"list-group-item\",\n                                    children: [\n                                        \"Release Date : \",\n                                        game.released\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"list-group-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: (e)=>addFavorites(game.id),\n                                        children: \"Add this game to your favorites!\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 61\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                            lineNumber: 57,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                    lineNumber: 52,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n                lineNumber: 51,\n                columnNumber: 21\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\components\\\\Browse.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Browse, \"mtY4R2kr846bBbJTxqr4OW/jx5o=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = Browse;\nvar _c;\n$RefreshReg$(_c, \"Browse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ccm93c2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ1k7QUFDeEQsTUFBTUksU0FBUztBQUNmLE1BQU1DLE1BQU0scUNBQTRDLE9BQVBELFFBQU87QUFDTjtBQUVuQyxTQUFTRzs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxFQUFDUyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHUixvRUFBY0E7SUFDekNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVUsUUFBUUMsbUJBQU9BLENBQUM7UUFFdEJELE1BQU1FLEdBQUcsQ0FBQ1QsS0FDTFUsSUFBSSxDQUFDQyxDQUFBQTtZQUNGUCxTQUFTTyxTQUFTQyxJQUFJLENBQUNDLE9BQU87WUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0osU0FBU0MsSUFBSTtRQUM3QixHQUNDSSxLQUFLLENBQUNDLENBQUFBO1lBQ0hILFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JFO1FBQ3hDO0lBQ1IsR0FBRyxFQUFFO0lBR0wsTUFBTUMsZUFBZSxPQUFPQztRQUN4QixNQUFNWixRQUFRQyxtQkFBT0EsQ0FBQztRQUN0QixNQUFNWSxVQUFVZixNQUFNZ0IsSUFBSSxDQUFDRCxPQUFPO1FBQ2xDLE1BQU1FLGNBQWNuQixNQUFNb0IsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtMLEVBQUUsSUFBSUE7UUFDdERMLFFBQVFDLEdBQUcsQ0FBQ087UUFDWixNQUFNRyxXQUFXO1lBQ2JDLFlBQVlKLFdBQVcsQ0FBQyxFQUFFLENBQUNLLElBQUk7WUFDL0JDLFNBQVNOLFdBQVcsQ0FBQyxFQUFFLENBQUNILEVBQUU7WUFDMUJVLGdCQUFnQlAsV0FBVyxDQUFDLEVBQUUsQ0FBQ1EsZ0JBQWdCO1lBQy9DQyxPQUFPVCxXQUFXLENBQUMsRUFBRSxDQUFDVSxNQUFNLENBQUMsRUFBRTtRQUNuQztRQUNBUCxTQUFTTCxPQUFPLEdBQUdBO1FBQ25CTixRQUFRQyxHQUFHLENBQUNVO1FBQ1osTUFBTVEsU0FBU2hDLGtFQUFVQTtRQUN6Qk0sTUFBTTJCLElBQUksQ0FBQywrQ0FBK0NULFVBQVVRLFFBQ25FdkIsSUFBSSxDQUFDQyxDQUFBQTtZQUNGRyxRQUFRQyxHQUFHLENBQUMsd0NBQXdDSixTQUFTQyxJQUFJO1FBQ3JFLEdBQ0NJLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDSEgsUUFBUUcsS0FBSyxDQUFDLHVCQUF1QkEsTUFBTU4sUUFBUTtRQUN2RDtJQUNKO0lBRUEscUJBQ0ksOERBQUN3QjtRQUFJQyxXQUFVO2tCQUNOakMsTUFBTWtDLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1AsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFJSCxXQUFVOzRCQUF5QkksS0FBS0YsS0FBS1IsZ0JBQWdCOzRCQUFFVyxLQUFLSCxLQUFLWCxJQUFJOzs7Ozs7c0NBQ2xGLDhEQUFDUTs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ007Z0NBQUdOLFdBQVU7MENBQTBCRSxLQUFLWCxJQUFJOzs7Ozs7Ozs7OztzQ0FFckQsOERBQUNnQjs0QkFBR1AsV0FBVTs7OENBQ2QsOERBQUNRO29DQUFHUixXQUFVOzt3Q0FBa0I7d0NBQWlCRSxLQUFLTyxNQUFNOzs7Ozs7OzhDQUM1RCw4REFBQ0Q7b0NBQUdSLFdBQVU7O3dDQUFrQjt3Q0FBZ0JFLEtBQUtRLFFBQVE7Ozs7Ozs7OENBQzdELDhEQUFDRjtvQ0FBR1IsV0FBVTs4Q0FBa0IsNEVBQUNXO3dDQUFPQyxTQUFTLENBQUNDLElBQUkvQixhQUFhb0IsS0FBS25CLEVBQUU7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RztHQTFEdUJqQjs7UUFFT0osZ0VBQWNBOzs7S0FGckJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jyb3dzZS5qcz8zMzYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xyXG5jb25zdCBBUElLRVkgPSAnNzUyMjYxYmRkYzEwNGJlNzg2MGYxNjEyNGQ2MTYyNTUnO1xyXG5jb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/a2V5PSR7QVBJS0VZfSZkYXRlcz0yMDIwLTAxLTAxLDIwMjMtMDgtMTcmb3JkZXJpbmc9LWFkZGVkJnBhZ2Vfc2l6ZT05YDtcclxuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSAnLi4vc2VydmljZXMvYXV0aC5oZWFkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyb3dzZSgpIHtcclxuICAgIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuICAgICAgICBheGlvcy5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lcyhyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7ICBcclxuXHJcblxyXG4gICAgY29uc3QgYWRkRmF2b3JpdGVzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWQ7XHJcbiAgICAgICAgY29uc3Qgc2luZ2xlX2dhbWUgPSBnYW1lcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT0gaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNpbmdsZV9nYW1lKTtcclxuICAgICAgICBjb25zdCBnYW1lSW5mbyA9IHtcclxuICAgICAgICAgICAgZ2FtZV90aXRsZTogc2luZ2xlX2dhbWVbMF0ubmFtZSxcclxuICAgICAgICAgICAgcmF3Z19pZDogc2luZ2xlX2dhbWVbMF0uaWQsXHJcbiAgICAgICAgICAgIGdhbWVfaW1hZ2VfdXJsOiBzaW5nbGVfZ2FtZVswXS5iYWNrZ3JvdW5kX2ltYWdlLFxyXG4gICAgICAgICAgICBnZW5yZTogc2luZ2xlX2dhbWVbMF0uZ2VucmVzWzBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBnYW1lSW5mby51c2VyX2lkID0gdXNlcl9pZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lSW5mbyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYXV0aEhlYWRlcigpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYWRkLXRvLWZhdm9yaXRlcy8nLCBnYW1lSW5mbywgaGVhZGVyKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBhZGRlZCB0byBmYXZvcml0ZSBnYW1lcycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcG9zdGluZyBkYXRhOicsIGVycm9yLnJlc3BvbnNlKVxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lc0NvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIHtnYW1lcy5tYXAoZ2FtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC14cyBtLTFcIj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIGltZy1mbHVpZFwiIHNyYz17Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfSBhbHQ9e2dhbWUubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXJcIj57Z2FtZS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5PdmVyYWxsIFJhdGluZzoge2dhbWUucmF0aW5nfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+UmVsZWFzZSBEYXRlIDoge2dhbWUucmVsZWFzZWR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj48YnV0dG9uIG9uQ2xpY2s9eyhlKT0+YWRkRmF2b3JpdGVzKGdhbWUuaWQpfT5BZGQgdGhpcyBnYW1lIHRvIHlvdXIgZmF2b3JpdGVzITwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuKX0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUdsb2JhbFN0YXRlIiwiQVBJS0VZIiwidXJsIiwiYXV0aEhlYWRlciIsIkJyb3dzZSIsImdhbWVzIiwic2V0R2FtZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXhpb3MiLCJyZXF1aXJlIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImFkZEZhdm9yaXRlcyIsImlkIiwidXNlcl9pZCIsInVzZXIiLCJzaW5nbGVfZ2FtZSIsImZpbHRlciIsIml0ZW0iLCJnYW1lSW5mbyIsImdhbWVfdGl0bGUiLCJuYW1lIiwicmF3Z19pZCIsImdhbWVfaW1hZ2VfdXJsIiwiYmFja2dyb3VuZF9pbWFnZSIsImdlbnJlIiwiZ2VucmVzIiwiaGVhZGVyIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImdhbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoNCIsInVsIiwibGkiLCJyYXRpbmciLCJyZWxlYXNlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Browse.js\n"));

/***/ })

});