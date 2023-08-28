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

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction About() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"about-container bg-dark p-5 rounded\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"About Loot Legends: Uniting Gamers, Forging Legends\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"At Loot Legends, our passion for gaming knows no bounds. We've built a vibrant and inclusive online sanctuary that brings together gamers from all walks of life, united by their love for virtual adventures, strategic battles, and the pursuit of epic loot. Our journey began with a simple yet powerful idea: to create a space where players could connect, share, and thrive within a community that understands and celebrates the essence of gaming.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Endless Adventures, Shared Triumphs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"With an extensive selection of over 100 games, Loot Legends offers a limitless playground for exploration and conquest. Our platform is designed to cater to every gaming preference, providing a hub where you can discover new titles, discuss strategies, and engage in unforgettable adventures with like-minded players. Forge alliances for raids, participate in fierce PvP battles, or simply share your most triumphant loot moments—the possibilities are as diverse as our community.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Empowering Connections\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"At the heart of Loot Legends lies the power of connection. Through our intuitive interface, players can effortlessly find allies to embark on quests, partake in dungeons, or explore virtual realms. Our platform encourages you to discover new friends who share your interests, fostering relationships that extend beyond the pixels on the screen. The bonds formed within our community are as genuine as they are enduring, proving that gaming has the ability to unite souls across borders and backgrounds.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Celebrating Victories, Amplifying Stories\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Every achievement in gaming deserves to be celebrated. Loot Legends provides a space for you to share your proudest moments, be it a hard-fought victory, a rare loot find, or a particularly creative gameplay clip. Our platform allows you to showcase your skills, inspire others, and amplify the stories that make gaming an unforgettable journey.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Vision for the Future\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"As we continue to evolve, Loot Legends remains committed to enhancing the gaming experience for each member of our community. We're dedicated to refining our platform, offering innovative features, and creating events that bring our Legends closer together. Our vision is to be the go-to hub where gamers of all kinds can find their tribe, evolve their skills, and make lasting memories.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Join the Legends\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loot Legends is more than a destination; it's a movement driven by the collective passion of gamers who believe in the power of connection and shared experiences. Whether you're a casual player, a competitive champion, or anything in between, you're invited to join our community of Legends. Let's embark on this epic journey together, where every game is a story waiting to be told, and every victory is a testament to the spirit of camaraderie that defines Loot Legends. Join us today and be a part of the legacy.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n        lineNumber: 26,\n        columnNumber: 13\n    }, this);\n}\n_s(About, \"KdCZHTfh7Nvnuc11Zxcd64wd9Q8=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0M7QUFDcUI7QUFFekMsU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0gsb0VBQWNBO0lBRTFDRixnREFBU0EsQ0FBQztRQUNSLG9EQUFvRDtRQUNwRCxNQUFNTSwwQkFBMEI7WUFDOUIsTUFBTUMsV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1lBQ3RDLElBQUlGLFVBQVU7Z0JBQ1osTUFBTUcsT0FBT1Qsc0RBQVNBLENBQUNNO2dCQUN2QkksUUFBUUMsR0FBRyxDQUFDLGNBQWNGO2dCQUMxQkwsU0FBUztvQkFDTFEsTUFBTTtvQkFDTkMsU0FBU0o7Z0JBQ2I7WUFDRjtRQUNGO1FBRUFKO0lBRUYsR0FBRyxFQUFFO0lBRUgscUJBQVEsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNyQiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDTiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDRDswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDswQkFBRTs7Ozs7OzBCQUVILDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDswQkFBRTs7Ozs7Ozs7Ozs7O0FBRUo7R0F4Q3FCZjs7UUFDTUQsZ0VBQWNBOzs7S0FEcEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC5qcz9mZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRnVuY3Rpb24gdG8gcmV0cmlldmUgdXNlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgY29uc3QgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGp3dERlY29kZSh1c2VyRGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB1c2VyKTsgXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX1VTRVInLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB1c2VyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIFxyXG4gIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImFib3V0LWNvbnRhaW5lciBiZy1kYXJrIHAtNSByb3VuZGVkXCI+XHJcbiAgICAgIDxoMT5BYm91dCBMb290IExlZ2VuZHM6IFVuaXRpbmcgR2FtZXJzLCBGb3JnaW5nIExlZ2VuZHM8L2gxPlxyXG4gICAgPHA+QXQgTG9vdCBMZWdlbmRzLCBvdXIgcGFzc2lvbiBmb3IgZ2FtaW5nIGtub3dzIG5vIGJvdW5kcy4gV2UndmUgYnVpbHQgYSB2aWJyYW50IGFuZCBpbmNsdXNpdmUgb25saW5lIHNhbmN0dWFyeSB0aGF0IGJyaW5ncyB0b2dldGhlciBnYW1lcnMgZnJvbSBhbGwgd2Fsa3Mgb2YgbGlmZSwgdW5pdGVkIGJ5IHRoZWlyIGxvdmUgZm9yIHZpcnR1YWwgYWR2ZW50dXJlcywgc3RyYXRlZ2ljIGJhdHRsZXMsIGFuZCB0aGUgcHVyc3VpdCBvZiBlcGljIGxvb3QuIE91ciBqb3VybmV5IGJlZ2FuIHdpdGggYSBzaW1wbGUgeWV0IHBvd2VyZnVsIGlkZWE6IHRvIGNyZWF0ZSBhIHNwYWNlIHdoZXJlIHBsYXllcnMgY291bGQgY29ubmVjdCwgc2hhcmUsIGFuZCB0aHJpdmUgd2l0aGluIGEgY29tbXVuaXR5IHRoYXQgdW5kZXJzdGFuZHMgYW5kIGNlbGVicmF0ZXMgdGhlIGVzc2VuY2Ugb2YgZ2FtaW5nLjwvcD5cclxuXHJcbiAgICA8aDI+RW5kbGVzcyBBZHZlbnR1cmVzLCBTaGFyZWQgVHJpdW1waHM8L2gyPlxyXG4gICAgPHA+V2l0aCBhbiBleHRlbnNpdmUgc2VsZWN0aW9uIG9mIG92ZXIgMTAwIGdhbWVzLCBMb290IExlZ2VuZHMgb2ZmZXJzIGEgbGltaXRsZXNzIHBsYXlncm91bmQgZm9yIGV4cGxvcmF0aW9uIGFuZCBjb25xdWVzdC4gT3VyIHBsYXRmb3JtIGlzIGRlc2lnbmVkIHRvIGNhdGVyIHRvIGV2ZXJ5IGdhbWluZyBwcmVmZXJlbmNlLCBwcm92aWRpbmcgYSBodWIgd2hlcmUgeW91IGNhbiBkaXNjb3ZlciBuZXcgdGl0bGVzLCBkaXNjdXNzIHN0cmF0ZWdpZXMsIGFuZCBlbmdhZ2UgaW4gdW5mb3JnZXR0YWJsZSBhZHZlbnR1cmVzIHdpdGggbGlrZS1taW5kZWQgcGxheWVycy4gRm9yZ2UgYWxsaWFuY2VzIGZvciByYWlkcywgcGFydGljaXBhdGUgaW4gZmllcmNlIFB2UCBiYXR0bGVzLCBvciBzaW1wbHkgc2hhcmUgeW91ciBtb3N0IHRyaXVtcGhhbnQgbG9vdCBtb21lbnRz4oCUdGhlIHBvc3NpYmlsaXRpZXMgYXJlIGFzIGRpdmVyc2UgYXMgb3VyIGNvbW11bml0eS48L3A+XHJcblxyXG4gICAgPGgyPkVtcG93ZXJpbmcgQ29ubmVjdGlvbnM8L2gyPlxyXG4gICAgPHA+QXQgdGhlIGhlYXJ0IG9mIExvb3QgTGVnZW5kcyBsaWVzIHRoZSBwb3dlciBvZiBjb25uZWN0aW9uLiBUaHJvdWdoIG91ciBpbnR1aXRpdmUgaW50ZXJmYWNlLCBwbGF5ZXJzIGNhbiBlZmZvcnRsZXNzbHkgZmluZCBhbGxpZXMgdG8gZW1iYXJrIG9uIHF1ZXN0cywgcGFydGFrZSBpbiBkdW5nZW9ucywgb3IgZXhwbG9yZSB2aXJ0dWFsIHJlYWxtcy4gT3VyIHBsYXRmb3JtIGVuY291cmFnZXMgeW91IHRvIGRpc2NvdmVyIG5ldyBmcmllbmRzIHdobyBzaGFyZSB5b3VyIGludGVyZXN0cywgZm9zdGVyaW5nIHJlbGF0aW9uc2hpcHMgdGhhdCBleHRlbmQgYmV5b25kIHRoZSBwaXhlbHMgb24gdGhlIHNjcmVlbi4gVGhlIGJvbmRzIGZvcm1lZCB3aXRoaW4gb3VyIGNvbW11bml0eSBhcmUgYXMgZ2VudWluZSBhcyB0aGV5IGFyZSBlbmR1cmluZywgcHJvdmluZyB0aGF0IGdhbWluZyBoYXMgdGhlIGFiaWxpdHkgdG8gdW5pdGUgc291bHMgYWNyb3NzIGJvcmRlcnMgYW5kIGJhY2tncm91bmRzLjwvcD5cclxuXHJcbiAgICA8aDI+Q2VsZWJyYXRpbmcgVmljdG9yaWVzLCBBbXBsaWZ5aW5nIFN0b3JpZXM8L2gyPlxyXG4gICAgPHA+RXZlcnkgYWNoaWV2ZW1lbnQgaW4gZ2FtaW5nIGRlc2VydmVzIHRvIGJlIGNlbGVicmF0ZWQuIExvb3QgTGVnZW5kcyBwcm92aWRlcyBhIHNwYWNlIGZvciB5b3UgdG8gc2hhcmUgeW91ciBwcm91ZGVzdCBtb21lbnRzLCBiZSBpdCBhIGhhcmQtZm91Z2h0IHZpY3RvcnksIGEgcmFyZSBsb290IGZpbmQsIG9yIGEgcGFydGljdWxhcmx5IGNyZWF0aXZlIGdhbWVwbGF5IGNsaXAuIE91ciBwbGF0Zm9ybSBhbGxvd3MgeW91IHRvIHNob3djYXNlIHlvdXIgc2tpbGxzLCBpbnNwaXJlIG90aGVycywgYW5kIGFtcGxpZnkgdGhlIHN0b3JpZXMgdGhhdCBtYWtlIGdhbWluZyBhbiB1bmZvcmdldHRhYmxlIGpvdXJuZXkuPC9wPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8aDI+T3VyIFZpc2lvbiBmb3IgdGhlIEZ1dHVyZTwvaDI+XHJcbiAgICA8cD5BcyB3ZSBjb250aW51ZSB0byBldm9sdmUsIExvb3QgTGVnZW5kcyByZW1haW5zIGNvbW1pdHRlZCB0byBlbmhhbmNpbmcgdGhlIGdhbWluZyBleHBlcmllbmNlIGZvciBlYWNoIG1lbWJlciBvZiBvdXIgY29tbXVuaXR5LiBXZSdyZSBkZWRpY2F0ZWQgdG8gcmVmaW5pbmcgb3VyIHBsYXRmb3JtLCBvZmZlcmluZyBpbm5vdmF0aXZlIGZlYXR1cmVzLCBhbmQgY3JlYXRpbmcgZXZlbnRzIHRoYXQgYnJpbmcgb3VyIExlZ2VuZHMgY2xvc2VyIHRvZ2V0aGVyLiBPdXIgdmlzaW9uIGlzIHRvIGJlIHRoZSBnby10byBodWIgd2hlcmUgZ2FtZXJzIG9mIGFsbCBraW5kcyBjYW4gZmluZCB0aGVpciB0cmliZSwgZXZvbHZlIHRoZWlyIHNraWxscywgYW5kIG1ha2UgbGFzdGluZyBtZW1vcmllcy48L3A+XHJcblxyXG4gICAgPGgyPkpvaW4gdGhlIExlZ2VuZHM8L2gyPlxyXG4gICAgPHA+TG9vdCBMZWdlbmRzIGlzIG1vcmUgdGhhbiBhIGRlc3RpbmF0aW9uOyBpdCdzIGEgbW92ZW1lbnQgZHJpdmVuIGJ5IHRoZSBjb2xsZWN0aXZlIHBhc3Npb24gb2YgZ2FtZXJzIHdobyBiZWxpZXZlIGluIHRoZSBwb3dlciBvZiBjb25uZWN0aW9uIGFuZCBzaGFyZWQgZXhwZXJpZW5jZXMuIFdoZXRoZXIgeW91J3JlIGEgY2FzdWFsIHBsYXllciwgYSBjb21wZXRpdGl2ZSBjaGFtcGlvbiwgb3IgYW55dGhpbmcgaW4gYmV0d2VlbiwgeW91J3JlIGludml0ZWQgdG8gam9pbiBvdXIgY29tbXVuaXR5IG9mIExlZ2VuZHMuIExldCdzIGVtYmFyayBvbiB0aGlzIGVwaWMgam91cm5leSB0b2dldGhlciwgd2hlcmUgZXZlcnkgZ2FtZSBpcyBhIHN0b3J5IHdhaXRpbmcgdG8gYmUgdG9sZCwgYW5kIGV2ZXJ5IHZpY3RvcnkgaXMgYSB0ZXN0YW1lbnQgdG8gdGhlIHNwaXJpdCBvZiBjYW1hcmFkZXJpZSB0aGF0IGRlZmluZXMgTG9vdCBMZWdlbmRzLiBKb2luIHVzIHRvZGF5IGFuZCBiZSBhIHBhcnQgb2YgdGhlIGxlZ2FjeS48L3A+XHJcbiAgPC9kaXY+XHJcbiAgKX0iXSwibmFtZXMiOlsidXNlRWZmZWN0Iiwiand0RGVjb2RlIiwidXNlR2xvYmFsU3RhdGUiLCJBYm91dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJoMiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});