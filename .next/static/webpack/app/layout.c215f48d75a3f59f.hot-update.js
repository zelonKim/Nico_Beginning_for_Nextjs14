"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Navigation() {\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: styles.back,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/components/navigation.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 17\n                        }, this),\n                        \" \",\n                        path === \"/\" ? \"☝\\uD83C\\uDFFC\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/components/navigation.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/about-us\",\n                            children: \"About Us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/components/navigation.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        }, this),\n                        \" \",\n                        path === \"/about-us\" ? \"☝\\uD83C\\uDFFC\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/components/navigation.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setCount((c)=>c + 1),\n                        children: [\n                            \" \",\n                            count,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/components/navigation.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/components/navigation.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/components/navigation.tsx\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/components/navigation.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"oCqggaKV0V4/xbA2FxB6ELQWfR8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNkI7QUFDaUI7QUFDYjtBQUlsQixTQUFTRzs7SUFDcEIsTUFBTUMsT0FBT0gsNERBQVdBO0lBQ3hCLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVuQyxxQkFDQSw4REFBQ0s7UUFBSUMsV0FBV0MsT0FBT0MsSUFBSTtrQkFDdkIsNEVBQUNDOzs4QkFDRyw4REFBQ0M7O3NDQUNHLDhEQUFDWixpREFBSUE7NEJBQUNhLE1BQUs7c0NBQUk7Ozs7Ozt3QkFBVzt3QkFBRVQsU0FBUyxNQUFNLGtCQUFPOzs7Ozs7OzhCQUV0RCw4REFBQ1E7O3NDQUNHLDhEQUFDWixpREFBSUE7NEJBQUNhLE1BQUs7c0NBQVk7Ozs7Ozt3QkFBZTt3QkFBRVQsU0FBUyxjQUFjLGtCQUFPOzs7Ozs7OzhCQUUxRSw4REFBQ1E7OEJBQ0csNEVBQUNFO3dCQUFPQyxTQUFTLElBQU1ULFNBQVMsQ0FBQ1UsSUFBTUEsSUFBRTs7NEJBQUk7NEJBQUVYOzRCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRTtHQW5Cd0JGOztRQUNQRix3REFBV0E7OztLQURKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24udHN4P2VkZGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL25hdmlnYXRpb24ubW9kdWxlLmNzc1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKTsgXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrfT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz4ge3BhdGggPT09IFwiL1wiID8gXCLimJ3wn4+8XCI6IFwiXCJ9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQtdXNcIj5BYm91dCBVczwvTGluaz4ge3BhdGggPT09IFwiL2Fib3V0LXVzXCIgPyBcIuKYnfCfj7xcIjogXCJcIn1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudCgoYykgPT4gYysxKX0+IHtjb3VudH0gPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwicGF0aCIsImNvdW50Iiwic2V0Q291bnQiLCJuYXYiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJiYWNrIiwidWwiLCJsaSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navigation.tsx\n"));

/***/ })

});