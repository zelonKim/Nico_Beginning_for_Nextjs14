"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./app/(home)/page.tsx":
/*!*****************************!*\
  !*** ./app/(home)/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Data fetching in React.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst URL = \"https://nomad-movies.nomadcoders.workers.dev/movies\";\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getMovies = async ()=>{\n        const response = await fetch(URL); // React.js \n        const json = await response.json();\n        setMovies(json);\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isLoading ? \"Loading...\" : JSON.stringify(movies)\n    }, void 0, false, {\n        fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/app/(home)/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n} //////////////////////////\n // data fetching in Next.js\n /* \nconst URL = \"https://nomad-movies.nomadcoders.workers.dev/movies\"\n\nasync function getMovies() {\n    const response = await fetch(URL); // Next.js automatically caches the fetched data\n    const json = await response.json();\n    return json;\n}\n\nexport default async function Home() {\n    const movies = await getMovies();\n    return <div>{JSON.stringify(movies)}</div>\n} \n*/ \n_s(Home, \"BLz+Dza675Lqh5QFvDsUJLyjzvs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRCQUE0Qjs7O0FBRWdCO0FBRTVDLE1BQU1FLE1BQU07QUFFRyxTQUFTQzs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDLE1BQU1PLFlBQVk7UUFDZCxNQUFNQyxXQUFXLE1BQU1DLE1BQU1SLE1BQU0sWUFBWTtRQUMvQyxNQUFNUyxPQUFPLE1BQU1GLFNBQVNFLElBQUk7UUFDaENKLFVBQVVJO1FBQ1ZOLGFBQWE7SUFDakI7SUFFQUwsZ0RBQVNBLENBQUM7UUFDTlE7SUFDSixHQUFFLEVBQUU7SUFFSixxQkFDSSw4REFBQ0k7a0JBQ0lSLFlBQVksZUFBZVMsS0FBS0MsU0FBUyxDQUFDUjs7Ozs7O0FBR3ZELEVBR0EsMEJBQTBCO0NBRzFCLDJCQUEyQjtDQUMzQjs7Ozs7Ozs7Ozs7OztBQWFBO0dBeEN3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhob21lKS9wYWdlLnRzeD8yNTM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIERhdGEgZmV0Y2hpbmcgaW4gUmVhY3QuanNcblwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9ub21hZC1tb3ZpZXMubm9tYWRjb2RlcnMud29ya2Vycy5kZXYvbW92aWVzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGdldE1vdmllcyA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7IC8vIFJlYWN0LmpzIFxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRNb3ZpZXMoanNvbik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICAgIGdldE1vdmllcygpO1xuICAgIH0sW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogSlNPTi5zdHJpbmdpZnkobW92aWVzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuLy8gZGF0YSBmZXRjaGluZyBpbiBOZXh0LmpzXG4vKiBcbmNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9ub21hZC1tb3ZpZXMubm9tYWRjb2RlcnMud29ya2Vycy5kZXYvbW92aWVzXCJcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TW92aWVzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTsgLy8gTmV4dC5qcyBhdXRvbWF0aWNhbGx5IGNhY2hlcyB0aGUgZmV0Y2hlZCBkYXRhXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBnZXRNb3ZpZXMoKTtcbiAgICByZXR1cm4gPGRpdj57SlNPTi5zdHJpbmdpZnkobW92aWVzKX08L2Rpdj5cbn0gXG4qLyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVSTCIsIkhvbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJnZXRNb3ZpZXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImRpdiIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});