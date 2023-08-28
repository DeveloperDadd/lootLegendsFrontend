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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction About() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"about-container bg-dark p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"About Loot Legends: Uniting Gamers, Forging Legends\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"At Loot Legends, our passion for gaming knows no bounds. We've built a vibrant and inclusive online sanctuary that brings together gamers from all walks of life, united by their love for virtual adventures, strategic battles, and the pursuit of epic loot. Our journey began with a simple yet powerful idea: to create a space where players could connect, share, and thrive within a community that understands and celebrates the essence of gaming.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"A Community of Legends\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loot Legends is more than just a platform; it's a dynamic community where gaming enthusiasts can experience the thrill of camaraderie, teamwork, and victory. Our diverse community consists of players from around the globe, representing a wide spectrum of gaming genres and styles. Whether you're a seasoned raider, a competitive PvP champion, or an explorer seeking new horizons, you'll find your place among fellow Legends who share your passion.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Endless Adventures, Shared Triumphs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"With an extensive selection of over 100 games, Loot Legends offers a limitless playground for exploration and conquest. Our platform is designed to cater to every gaming preference, providing a hub where you can discover new titles, discuss strategies, and engage in unforgettable adventures with like-minded players. Forge alliances for raids, participate in fierce PvP battles, or simply share your most triumphant loot moments—the possibilities are as diverse as our community.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Empowering Connections\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"At the heart of Loot Legends lies the power of connection. Through our intuitive interface, players can effortlessly find allies to embark on quests, partake in dungeons, or explore virtual realms. Our platform encourages you to discover new friends who share your interests, fostering relationships that extend beyond the pixels on the screen. The bonds formed within our community are as genuine as they are enduring, proving that gaming has the ability to unite souls across borders and backgrounds.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Celebrating Victories, Amplifying Stories\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Every achievement in gaming deserves to be celebrated. Loot Legends provides a space for you to share your proudest moments, be it a hard-fought victory, a rare loot find, or a particularly creative gameplay clip. Our platform allows you to showcase your skills, inspire others, and amplify the stories that make gaming an unforgettable journey.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Vision for the Future\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"As we continue to evolve, Loot Legends remains committed to enhancing the gaming experience for each member of our community. We're dedicated to refining our platform, offering innovative features, and creating events that bring our Legends closer together. Our vision is to be the go-to hub where gamers of all kinds can find their tribe, evolve their skills, and make lasting memories.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Join the Legends\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loot Legends is more than a destination; it's a movement driven by the collective passion of gamers who believe in the power of connection and shared experiences. Whether you're a casual player, a competitive champion, or anything in between, you're invited to join our community of Legends. Let's embark on this epic journey together, where every game is a story waiting to be told, and every victory is a testament to the spirit of camaraderie that defines Loot Legends. Join us today and be a part of the legacy.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n        lineNumber: 26,\n        columnNumber: 13\n    }, this);\n}\n_s(About, \"KdCZHTfh7Nvnuc11Zxcd64wd9Q8=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0M7QUFDcUI7QUFFekMsU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0gsb0VBQWNBO0lBRTFDRixnREFBU0EsQ0FBQztRQUNSLG9EQUFvRDtRQUNwRCxNQUFNTSwwQkFBMEI7WUFDOUIsTUFBTUMsV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1lBQ3RDLElBQUlGLFVBQVU7Z0JBQ1osTUFBTUcsT0FBT1Qsc0RBQVNBLENBQUNNO2dCQUN2QkksUUFBUUMsR0FBRyxDQUFDLGNBQWNGO2dCQUMxQkwsU0FBUztvQkFDTFEsTUFBTTtvQkFDTkMsU0FBU0o7Z0JBQ2I7WUFDRjtRQUNGO1FBRUFKO0lBRUYsR0FBRyxFQUFFO0lBRUgscUJBQVEsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNyQiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDTiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7Ozs7Ozs7OztBQUVKO0dBM0NxQmY7O1FBQ01ELGdFQUFjQTs7O0tBRHBCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWJvdXQuanM/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZ1bmN0aW9uIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNvbnN0IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBqd3REZWNvZGUodXNlckRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGE6JywgdXNlcik7IFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogdXNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBcclxuICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJhYm91dC1jb250YWluZXIgYmctZGFyayBwLTRcIj5cclxuICAgICAgPGgxPkFib3V0IExvb3QgTGVnZW5kczogVW5pdGluZyBHYW1lcnMsIEZvcmdpbmcgTGVnZW5kczwvaDE+XHJcbiAgICA8cD5BdCBMb290IExlZ2VuZHMsIG91ciBwYXNzaW9uIGZvciBnYW1pbmcga25vd3Mgbm8gYm91bmRzLiBXZSd2ZSBidWlsdCBhIHZpYnJhbnQgYW5kIGluY2x1c2l2ZSBvbmxpbmUgc2FuY3R1YXJ5IHRoYXQgYnJpbmdzIHRvZ2V0aGVyIGdhbWVycyBmcm9tIGFsbCB3YWxrcyBvZiBsaWZlLCB1bml0ZWQgYnkgdGhlaXIgbG92ZSBmb3IgdmlydHVhbCBhZHZlbnR1cmVzLCBzdHJhdGVnaWMgYmF0dGxlcywgYW5kIHRoZSBwdXJzdWl0IG9mIGVwaWMgbG9vdC4gT3VyIGpvdXJuZXkgYmVnYW4gd2l0aCBhIHNpbXBsZSB5ZXQgcG93ZXJmdWwgaWRlYTogdG8gY3JlYXRlIGEgc3BhY2Ugd2hlcmUgcGxheWVycyBjb3VsZCBjb25uZWN0LCBzaGFyZSwgYW5kIHRocml2ZSB3aXRoaW4gYSBjb21tdW5pdHkgdGhhdCB1bmRlcnN0YW5kcyBhbmQgY2VsZWJyYXRlcyB0aGUgZXNzZW5jZSBvZiBnYW1pbmcuPC9wPlxyXG5cclxuICAgIDxoMj5BIENvbW11bml0eSBvZiBMZWdlbmRzPC9oMj5cclxuICAgIDxwPkxvb3QgTGVnZW5kcyBpcyBtb3JlIHRoYW4ganVzdCBhIHBsYXRmb3JtOyBpdCdzIGEgZHluYW1pYyBjb21tdW5pdHkgd2hlcmUgZ2FtaW5nIGVudGh1c2lhc3RzIGNhbiBleHBlcmllbmNlIHRoZSB0aHJpbGwgb2YgY2FtYXJhZGVyaWUsIHRlYW13b3JrLCBhbmQgdmljdG9yeS4gT3VyIGRpdmVyc2UgY29tbXVuaXR5IGNvbnNpc3RzIG9mIHBsYXllcnMgZnJvbSBhcm91bmQgdGhlIGdsb2JlLCByZXByZXNlbnRpbmcgYSB3aWRlIHNwZWN0cnVtIG9mIGdhbWluZyBnZW5yZXMgYW5kIHN0eWxlcy4gV2hldGhlciB5b3UncmUgYSBzZWFzb25lZCByYWlkZXIsIGEgY29tcGV0aXRpdmUgUHZQIGNoYW1waW9uLCBvciBhbiBleHBsb3JlciBzZWVraW5nIG5ldyBob3Jpem9ucywgeW91J2xsIGZpbmQgeW91ciBwbGFjZSBhbW9uZyBmZWxsb3cgTGVnZW5kcyB3aG8gc2hhcmUgeW91ciBwYXNzaW9uLjwvcD5cclxuXHJcbiAgICA8aDI+RW5kbGVzcyBBZHZlbnR1cmVzLCBTaGFyZWQgVHJpdW1waHM8L2gyPlxyXG4gICAgPHA+V2l0aCBhbiBleHRlbnNpdmUgc2VsZWN0aW9uIG9mIG92ZXIgMTAwIGdhbWVzLCBMb290IExlZ2VuZHMgb2ZmZXJzIGEgbGltaXRsZXNzIHBsYXlncm91bmQgZm9yIGV4cGxvcmF0aW9uIGFuZCBjb25xdWVzdC4gT3VyIHBsYXRmb3JtIGlzIGRlc2lnbmVkIHRvIGNhdGVyIHRvIGV2ZXJ5IGdhbWluZyBwcmVmZXJlbmNlLCBwcm92aWRpbmcgYSBodWIgd2hlcmUgeW91IGNhbiBkaXNjb3ZlciBuZXcgdGl0bGVzLCBkaXNjdXNzIHN0cmF0ZWdpZXMsIGFuZCBlbmdhZ2UgaW4gdW5mb3JnZXR0YWJsZSBhZHZlbnR1cmVzIHdpdGggbGlrZS1taW5kZWQgcGxheWVycy4gRm9yZ2UgYWxsaWFuY2VzIGZvciByYWlkcywgcGFydGljaXBhdGUgaW4gZmllcmNlIFB2UCBiYXR0bGVzLCBvciBzaW1wbHkgc2hhcmUgeW91ciBtb3N0IHRyaXVtcGhhbnQgbG9vdCBtb21lbnRz4oCUdGhlIHBvc3NpYmlsaXRpZXMgYXJlIGFzIGRpdmVyc2UgYXMgb3VyIGNvbW11bml0eS48L3A+XHJcblxyXG4gICAgPGgyPkVtcG93ZXJpbmcgQ29ubmVjdGlvbnM8L2gyPlxyXG4gICAgPHA+QXQgdGhlIGhlYXJ0IG9mIExvb3QgTGVnZW5kcyBsaWVzIHRoZSBwb3dlciBvZiBjb25uZWN0aW9uLiBUaHJvdWdoIG91ciBpbnR1aXRpdmUgaW50ZXJmYWNlLCBwbGF5ZXJzIGNhbiBlZmZvcnRsZXNzbHkgZmluZCBhbGxpZXMgdG8gZW1iYXJrIG9uIHF1ZXN0cywgcGFydGFrZSBpbiBkdW5nZW9ucywgb3IgZXhwbG9yZSB2aXJ0dWFsIHJlYWxtcy4gT3VyIHBsYXRmb3JtIGVuY291cmFnZXMgeW91IHRvIGRpc2NvdmVyIG5ldyBmcmllbmRzIHdobyBzaGFyZSB5b3VyIGludGVyZXN0cywgZm9zdGVyaW5nIHJlbGF0aW9uc2hpcHMgdGhhdCBleHRlbmQgYmV5b25kIHRoZSBwaXhlbHMgb24gdGhlIHNjcmVlbi4gVGhlIGJvbmRzIGZvcm1lZCB3aXRoaW4gb3VyIGNvbW11bml0eSBhcmUgYXMgZ2VudWluZSBhcyB0aGV5IGFyZSBlbmR1cmluZywgcHJvdmluZyB0aGF0IGdhbWluZyBoYXMgdGhlIGFiaWxpdHkgdG8gdW5pdGUgc291bHMgYWNyb3NzIGJvcmRlcnMgYW5kIGJhY2tncm91bmRzLjwvcD5cclxuXHJcbiAgICA8aDI+Q2VsZWJyYXRpbmcgVmljdG9yaWVzLCBBbXBsaWZ5aW5nIFN0b3JpZXM8L2gyPlxyXG4gICAgPHA+RXZlcnkgYWNoaWV2ZW1lbnQgaW4gZ2FtaW5nIGRlc2VydmVzIHRvIGJlIGNlbGVicmF0ZWQuIExvb3QgTGVnZW5kcyBwcm92aWRlcyBhIHNwYWNlIGZvciB5b3UgdG8gc2hhcmUgeW91ciBwcm91ZGVzdCBtb21lbnRzLCBiZSBpdCBhIGhhcmQtZm91Z2h0IHZpY3RvcnksIGEgcmFyZSBsb290IGZpbmQsIG9yIGEgcGFydGljdWxhcmx5IGNyZWF0aXZlIGdhbWVwbGF5IGNsaXAuIE91ciBwbGF0Zm9ybSBhbGxvd3MgeW91IHRvIHNob3djYXNlIHlvdXIgc2tpbGxzLCBpbnNwaXJlIG90aGVycywgYW5kIGFtcGxpZnkgdGhlIHN0b3JpZXMgdGhhdCBtYWtlIGdhbWluZyBhbiB1bmZvcmdldHRhYmxlIGpvdXJuZXkuPC9wPlxyXG5cclxuICAgIDxoMj5PdXIgVmlzaW9uIGZvciB0aGUgRnV0dXJlPC9oMj5cclxuICAgIDxwPkFzIHdlIGNvbnRpbnVlIHRvIGV2b2x2ZSwgTG9vdCBMZWdlbmRzIHJlbWFpbnMgY29tbWl0dGVkIHRvIGVuaGFuY2luZyB0aGUgZ2FtaW5nIGV4cGVyaWVuY2UgZm9yIGVhY2ggbWVtYmVyIG9mIG91ciBjb21tdW5pdHkuIFdlJ3JlIGRlZGljYXRlZCB0byByZWZpbmluZyBvdXIgcGxhdGZvcm0sIG9mZmVyaW5nIGlubm92YXRpdmUgZmVhdHVyZXMsIGFuZCBjcmVhdGluZyBldmVudHMgdGhhdCBicmluZyBvdXIgTGVnZW5kcyBjbG9zZXIgdG9nZXRoZXIuIE91ciB2aXNpb24gaXMgdG8gYmUgdGhlIGdvLXRvIGh1YiB3aGVyZSBnYW1lcnMgb2YgYWxsIGtpbmRzIGNhbiBmaW5kIHRoZWlyIHRyaWJlLCBldm9sdmUgdGhlaXIgc2tpbGxzLCBhbmQgbWFrZSBsYXN0aW5nIG1lbW9yaWVzLjwvcD5cclxuXHJcbiAgICA8aDI+Sm9pbiB0aGUgTGVnZW5kczwvaDI+XHJcbiAgICA8cD5Mb290IExlZ2VuZHMgaXMgbW9yZSB0aGFuIGEgZGVzdGluYXRpb247IGl0J3MgYSBtb3ZlbWVudCBkcml2ZW4gYnkgdGhlIGNvbGxlY3RpdmUgcGFzc2lvbiBvZiBnYW1lcnMgd2hvIGJlbGlldmUgaW4gdGhlIHBvd2VyIG9mIGNvbm5lY3Rpb24gYW5kIHNoYXJlZCBleHBlcmllbmNlcy4gV2hldGhlciB5b3UncmUgYSBjYXN1YWwgcGxheWVyLCBhIGNvbXBldGl0aXZlIGNoYW1waW9uLCBvciBhbnl0aGluZyBpbiBiZXR3ZWVuLCB5b3UncmUgaW52aXRlZCB0byBqb2luIG91ciBjb21tdW5pdHkgb2YgTGVnZW5kcy4gTGV0J3MgZW1iYXJrIG9uIHRoaXMgZXBpYyBqb3VybmV5IHRvZ2V0aGVyLCB3aGVyZSBldmVyeSBnYW1lIGlzIGEgc3Rvcnkgd2FpdGluZyB0byBiZSB0b2xkLCBhbmQgZXZlcnkgdmljdG9yeSBpcyBhIHRlc3RhbWVudCB0byB0aGUgc3Bpcml0IG9mIGNhbWFyYWRlcmllIHRoYXQgZGVmaW5lcyBMb290IExlZ2VuZHMuIEpvaW4gdXMgdG9kYXkgYW5kIGJlIGEgcGFydCBvZiB0aGUgbGVnYWN5LjwvcD5cclxuICA8L2Rpdj5cclxuICApfSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJqd3REZWNvZGUiLCJ1c2VHbG9iYWxTdGF0ZSIsIkFib3V0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});