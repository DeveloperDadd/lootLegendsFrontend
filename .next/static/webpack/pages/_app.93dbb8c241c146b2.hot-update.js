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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction About() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"about-container bg-dark p-5 rounded\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"About Loot Legends: Uniting Gamers, Forging Legends\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"At Loot Legends, our passion for gaming knows no bounds. We've built a vibrant and inclusive online sanctuary that brings together gamers from all walks of life, united by their love for virtual adventures, strategic battles, and the pursuit of epic loot. Our journey began with a simple yet powerful idea: to create a space where players could connect, share, and thrive within a community that understands and celebrates the essence of gaming.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"A Community of Legends\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loot Legends is more than just a platform; it's a dynamic community where gaming enthusiasts can experience the thrill of camaraderie, teamwork, and victory. Our diverse community consists of players from around the globe, representing a wide spectrum of gaming genres and styles. Whether you're a seasoned raider, a competitive PvP champion, or an explorer seeking new horizons, you'll find your place among fellow Legends who share your passion.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Endless Adventures, Shared Triumphs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"With an extensive selection of over 100 games, Loot Legends offers a limitless playground for exploration and conquest. Our platform is designed to cater to every gaming preference, providing a hub where you can discover new titles, discuss strategies, and engage in unforgettable adventures with like-minded players. Forge alliances for raids, participate in fierce PvP battles, or simply share your most triumphant loot moments—the possibilities are as diverse as our community.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Empowering Connections\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"At the heart of Loot Legends lies the power of connection. Through our intuitive interface, players can effortlessly find allies to embark on quests, partake in dungeons, or explore virtual realms. Our platform encourages you to discover new friends who share your interests, fostering relationships that extend beyond the pixels on the screen. The bonds formed within our community are as genuine as they are enduring, proving that gaming has the ability to unite souls across borders and backgrounds.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Celebrating Victories, Amplifying Stories\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Every achievement in gaming deserves to be celebrated. Loot Legends provides a space for you to share your proudest moments, be it a hard-fought victory, a rare loot find, or a particularly creative gameplay clip. Our platform allows you to showcase your skills, inspire others, and amplify the stories that make gaming an unforgettable journey.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Vision for the Future\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"As we continue to evolve, Loot Legends remains committed to enhancing the gaming experience for each member of our community. We're dedicated to refining our platform, offering innovative features, and creating events that bring our Legends closer together. Our vision is to be the go-to hub where gamers of all kinds can find their tribe, evolve their skills, and make lasting memories.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Join the Legends\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loot Legends is more than a destination; it's a movement driven by the collective passion of gamers who believe in the power of connection and shared experiences. Whether you're a casual player, a competitive champion, or anything in between, you're invited to join our community of Legends. Let's embark on this epic journey together, where every game is a story waiting to be told, and every victory is a testament to the spirit of camaraderie that defines Loot Legends. Join us today and be a part of the legacy.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Awesome Inc U Projects\\\\lootLegends\\\\lootLegendsFrontend\\\\src\\\\pages\\\\about.js\",\n        lineNumber: 26,\n        columnNumber: 13\n    }, this);\n}\n_s(About, \"KdCZHTfh7Nvnuc11Zxcd64wd9Q8=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0M7QUFDcUI7QUFFekMsU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0gsb0VBQWNBO0lBRTFDRixnREFBU0EsQ0FBQztRQUNSLG9EQUFvRDtRQUNwRCxNQUFNTSwwQkFBMEI7WUFDOUIsTUFBTUMsV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1lBQ3RDLElBQUlGLFVBQVU7Z0JBQ1osTUFBTUcsT0FBT1Qsc0RBQVNBLENBQUNNO2dCQUN2QkksUUFBUUMsR0FBRyxDQUFDLGNBQWNGO2dCQUMxQkwsU0FBUztvQkFDTFEsTUFBTTtvQkFDTkMsU0FBU0o7Z0JBQ2I7WUFDRjtRQUNGO1FBRUFKO0lBRUYsR0FBRyxFQUFFO0lBRUgscUJBQVEsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNyQiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDTiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQUU7Ozs7Ozs7Ozs7OztBQUVKO0dBM0NxQmY7O1FBQ01ELGdFQUFjQTs7O0tBRHBCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWJvdXQuanM/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZ1bmN0aW9uIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNvbnN0IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBqd3REZWNvZGUodXNlckRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGE6JywgdXNlcik7IFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogdXNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBcclxuICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJhYm91dC1jb250YWluZXIgYmctZGFyayBwLTUgcm91bmRlZFwiPlxyXG4gICAgICA8aDE+QWJvdXQgTG9vdCBMZWdlbmRzOiBVbml0aW5nIEdhbWVycywgRm9yZ2luZyBMZWdlbmRzPC9oMT5cclxuICAgIDxwPkF0IExvb3QgTGVnZW5kcywgb3VyIHBhc3Npb24gZm9yIGdhbWluZyBrbm93cyBubyBib3VuZHMuIFdlJ3ZlIGJ1aWx0IGEgdmlicmFudCBhbmQgaW5jbHVzaXZlIG9ubGluZSBzYW5jdHVhcnkgdGhhdCBicmluZ3MgdG9nZXRoZXIgZ2FtZXJzIGZyb20gYWxsIHdhbGtzIG9mIGxpZmUsIHVuaXRlZCBieSB0aGVpciBsb3ZlIGZvciB2aXJ0dWFsIGFkdmVudHVyZXMsIHN0cmF0ZWdpYyBiYXR0bGVzLCBhbmQgdGhlIHB1cnN1aXQgb2YgZXBpYyBsb290LiBPdXIgam91cm5leSBiZWdhbiB3aXRoIGEgc2ltcGxlIHlldCBwb3dlcmZ1bCBpZGVhOiB0byBjcmVhdGUgYSBzcGFjZSB3aGVyZSBwbGF5ZXJzIGNvdWxkIGNvbm5lY3QsIHNoYXJlLCBhbmQgdGhyaXZlIHdpdGhpbiBhIGNvbW11bml0eSB0aGF0IHVuZGVyc3RhbmRzIGFuZCBjZWxlYnJhdGVzIHRoZSBlc3NlbmNlIG9mIGdhbWluZy48L3A+XHJcblxyXG4gICAgPGgyPkEgQ29tbXVuaXR5IG9mIExlZ2VuZHM8L2gyPlxyXG4gICAgPHA+TG9vdCBMZWdlbmRzIGlzIG1vcmUgdGhhbiBqdXN0IGEgcGxhdGZvcm07IGl0J3MgYSBkeW5hbWljIGNvbW11bml0eSB3aGVyZSBnYW1pbmcgZW50aHVzaWFzdHMgY2FuIGV4cGVyaWVuY2UgdGhlIHRocmlsbCBvZiBjYW1hcmFkZXJpZSwgdGVhbXdvcmssIGFuZCB2aWN0b3J5LiBPdXIgZGl2ZXJzZSBjb21tdW5pdHkgY29uc2lzdHMgb2YgcGxheWVycyBmcm9tIGFyb3VuZCB0aGUgZ2xvYmUsIHJlcHJlc2VudGluZyBhIHdpZGUgc3BlY3RydW0gb2YgZ2FtaW5nIGdlbnJlcyBhbmQgc3R5bGVzLiBXaGV0aGVyIHlvdSdyZSBhIHNlYXNvbmVkIHJhaWRlciwgYSBjb21wZXRpdGl2ZSBQdlAgY2hhbXBpb24sIG9yIGFuIGV4cGxvcmVyIHNlZWtpbmcgbmV3IGhvcml6b25zLCB5b3UnbGwgZmluZCB5b3VyIHBsYWNlIGFtb25nIGZlbGxvdyBMZWdlbmRzIHdobyBzaGFyZSB5b3VyIHBhc3Npb24uPC9wPlxyXG5cclxuICAgIDxoMj5FbmRsZXNzIEFkdmVudHVyZXMsIFNoYXJlZCBUcml1bXBoczwvaDI+XHJcbiAgICA8cD5XaXRoIGFuIGV4dGVuc2l2ZSBzZWxlY3Rpb24gb2Ygb3ZlciAxMDAgZ2FtZXMsIExvb3QgTGVnZW5kcyBvZmZlcnMgYSBsaW1pdGxlc3MgcGxheWdyb3VuZCBmb3IgZXhwbG9yYXRpb24gYW5kIGNvbnF1ZXN0LiBPdXIgcGxhdGZvcm0gaXMgZGVzaWduZWQgdG8gY2F0ZXIgdG8gZXZlcnkgZ2FtaW5nIHByZWZlcmVuY2UsIHByb3ZpZGluZyBhIGh1YiB3aGVyZSB5b3UgY2FuIGRpc2NvdmVyIG5ldyB0aXRsZXMsIGRpc2N1c3Mgc3RyYXRlZ2llcywgYW5kIGVuZ2FnZSBpbiB1bmZvcmdldHRhYmxlIGFkdmVudHVyZXMgd2l0aCBsaWtlLW1pbmRlZCBwbGF5ZXJzLiBGb3JnZSBhbGxpYW5jZXMgZm9yIHJhaWRzLCBwYXJ0aWNpcGF0ZSBpbiBmaWVyY2UgUHZQIGJhdHRsZXMsIG9yIHNpbXBseSBzaGFyZSB5b3VyIG1vc3QgdHJpdW1waGFudCBsb290IG1vbWVudHPigJR0aGUgcG9zc2liaWxpdGllcyBhcmUgYXMgZGl2ZXJzZSBhcyBvdXIgY29tbXVuaXR5LjwvcD5cclxuXHJcbiAgICA8aDI+RW1wb3dlcmluZyBDb25uZWN0aW9uczwvaDI+XHJcbiAgICA8cD5BdCB0aGUgaGVhcnQgb2YgTG9vdCBMZWdlbmRzIGxpZXMgdGhlIHBvd2VyIG9mIGNvbm5lY3Rpb24uIFRocm91Z2ggb3VyIGludHVpdGl2ZSBpbnRlcmZhY2UsIHBsYXllcnMgY2FuIGVmZm9ydGxlc3NseSBmaW5kIGFsbGllcyB0byBlbWJhcmsgb24gcXVlc3RzLCBwYXJ0YWtlIGluIGR1bmdlb25zLCBvciBleHBsb3JlIHZpcnR1YWwgcmVhbG1zLiBPdXIgcGxhdGZvcm0gZW5jb3VyYWdlcyB5b3UgdG8gZGlzY292ZXIgbmV3IGZyaWVuZHMgd2hvIHNoYXJlIHlvdXIgaW50ZXJlc3RzLCBmb3N0ZXJpbmcgcmVsYXRpb25zaGlwcyB0aGF0IGV4dGVuZCBiZXlvbmQgdGhlIHBpeGVscyBvbiB0aGUgc2NyZWVuLiBUaGUgYm9uZHMgZm9ybWVkIHdpdGhpbiBvdXIgY29tbXVuaXR5IGFyZSBhcyBnZW51aW5lIGFzIHRoZXkgYXJlIGVuZHVyaW5nLCBwcm92aW5nIHRoYXQgZ2FtaW5nIGhhcyB0aGUgYWJpbGl0eSB0byB1bml0ZSBzb3VscyBhY3Jvc3MgYm9yZGVycyBhbmQgYmFja2dyb3VuZHMuPC9wPlxyXG5cclxuICAgIDxoMj5DZWxlYnJhdGluZyBWaWN0b3JpZXMsIEFtcGxpZnlpbmcgU3RvcmllczwvaDI+XHJcbiAgICA8cD5FdmVyeSBhY2hpZXZlbWVudCBpbiBnYW1pbmcgZGVzZXJ2ZXMgdG8gYmUgY2VsZWJyYXRlZC4gTG9vdCBMZWdlbmRzIHByb3ZpZGVzIGEgc3BhY2UgZm9yIHlvdSB0byBzaGFyZSB5b3VyIHByb3VkZXN0IG1vbWVudHMsIGJlIGl0IGEgaGFyZC1mb3VnaHQgdmljdG9yeSwgYSByYXJlIGxvb3QgZmluZCwgb3IgYSBwYXJ0aWN1bGFybHkgY3JlYXRpdmUgZ2FtZXBsYXkgY2xpcC4gT3VyIHBsYXRmb3JtIGFsbG93cyB5b3UgdG8gc2hvd2Nhc2UgeW91ciBza2lsbHMsIGluc3BpcmUgb3RoZXJzLCBhbmQgYW1wbGlmeSB0aGUgc3RvcmllcyB0aGF0IG1ha2UgZ2FtaW5nIGFuIHVuZm9yZ2V0dGFibGUgam91cm5leS48L3A+XHJcblxyXG4gICAgPGgyPk91ciBWaXNpb24gZm9yIHRoZSBGdXR1cmU8L2gyPlxyXG4gICAgPHA+QXMgd2UgY29udGludWUgdG8gZXZvbHZlLCBMb290IExlZ2VuZHMgcmVtYWlucyBjb21taXR0ZWQgdG8gZW5oYW5jaW5nIHRoZSBnYW1pbmcgZXhwZXJpZW5jZSBmb3IgZWFjaCBtZW1iZXIgb2Ygb3VyIGNvbW11bml0eS4gV2UncmUgZGVkaWNhdGVkIHRvIHJlZmluaW5nIG91ciBwbGF0Zm9ybSwgb2ZmZXJpbmcgaW5ub3ZhdGl2ZSBmZWF0dXJlcywgYW5kIGNyZWF0aW5nIGV2ZW50cyB0aGF0IGJyaW5nIG91ciBMZWdlbmRzIGNsb3NlciB0b2dldGhlci4gT3VyIHZpc2lvbiBpcyB0byBiZSB0aGUgZ28tdG8gaHViIHdoZXJlIGdhbWVycyBvZiBhbGwga2luZHMgY2FuIGZpbmQgdGhlaXIgdHJpYmUsIGV2b2x2ZSB0aGVpciBza2lsbHMsIGFuZCBtYWtlIGxhc3RpbmcgbWVtb3JpZXMuPC9wPlxyXG5cclxuICAgIDxoMj5Kb2luIHRoZSBMZWdlbmRzPC9oMj5cclxuICAgIDxwPkxvb3QgTGVnZW5kcyBpcyBtb3JlIHRoYW4gYSBkZXN0aW5hdGlvbjsgaXQncyBhIG1vdmVtZW50IGRyaXZlbiBieSB0aGUgY29sbGVjdGl2ZSBwYXNzaW9uIG9mIGdhbWVycyB3aG8gYmVsaWV2ZSBpbiB0aGUgcG93ZXIgb2YgY29ubmVjdGlvbiBhbmQgc2hhcmVkIGV4cGVyaWVuY2VzLiBXaGV0aGVyIHlvdSdyZSBhIGNhc3VhbCBwbGF5ZXIsIGEgY29tcGV0aXRpdmUgY2hhbXBpb24sIG9yIGFueXRoaW5nIGluIGJldHdlZW4sIHlvdSdyZSBpbnZpdGVkIHRvIGpvaW4gb3VyIGNvbW11bml0eSBvZiBMZWdlbmRzLiBMZXQncyBlbWJhcmsgb24gdGhpcyBlcGljIGpvdXJuZXkgdG9nZXRoZXIsIHdoZXJlIGV2ZXJ5IGdhbWUgaXMgYSBzdG9yeSB3YWl0aW5nIHRvIGJlIHRvbGQsIGFuZCBldmVyeSB2aWN0b3J5IGlzIGEgdGVzdGFtZW50IHRvIHRoZSBzcGlyaXQgb2YgY2FtYXJhZGVyaWUgdGhhdCBkZWZpbmVzIExvb3QgTGVnZW5kcy4gSm9pbiB1cyB0b2RheSBhbmQgYmUgYSBwYXJ0IG9mIHRoZSBsZWdhY3kuPC9wPlxyXG4gIDwvZGl2PlxyXG4gICl9Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImp3dERlY29kZSIsInVzZUdsb2JhbFN0YXRlIiwiQWJvdXQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UiLCJ1c2VyRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});