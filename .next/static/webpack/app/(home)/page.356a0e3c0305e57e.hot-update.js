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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Data fetching in React.js\n// doesn`t automatically cache the fetched data\n// CSR fetched the data in Client so, user can steal a look in browser (CSR is not secure)\n// even if data fetching is not finished, user can see the website\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst URL = \"https://nomad-movies.nomadcoders.workers.dev/movies\";\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getMovies = async ()=>{\n        const response = await fetch(URL);\n        const json = await response.json();\n        setMovies(json);\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isLoading ? \"Loading...\" : JSON.stringify(movies)\n    }, void 0, false, {\n        fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/app/(home)/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n} //////////////////////////\n // data fetching in Next.js\n // SSR\n // automatically caches the fetched data\n // fetch the data in Server so, user can`t steal a look in browser (SSR is secure)\n // after data fetching is finished, user can see the website \n /*\nconst URL = \"https://nomad-movies.nomadcoders.workers.dev/movies\"\n\nasync function getMovies() {\n    await new Promise((resolve) => setTimeout(resolve, 3000));\n    const response = await fetch(URL); \n    const json = await response.json();\n    return json;\n}\n\nexport default async function Home() {\n    const movies = await getMovies();\n    return <div>{JSON.stringify(movies)}</div>\n} \n*/ \n_s(Home, \"BLz+Dza675Lqh5QFvDsUJLyjzvs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRCQUE0QjtBQUU1QiwrQ0FBK0M7QUFDL0MsMEZBQTBGO0FBQzFGLGtFQUFrRTs7O0FBR3RCO0FBRTVDLE1BQU1FLE1BQU07QUFFRyxTQUFTQzs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDLE1BQU1PLFlBQVk7UUFDZCxNQUFNQyxXQUFXLE1BQU1DLE1BQU1SO1FBQzdCLE1BQU1TLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtRQUNoQ0osVUFBVUk7UUFDVk4sYUFBYTtJQUNqQjtJQUVBTCxnREFBU0EsQ0FBQztRQUNOUTtJQUNKLEdBQUUsRUFBRTtJQUVKLHFCQUNJLDhEQUFDSTtrQkFDSVIsWUFBWSxlQUFlUyxLQUFLQyxTQUFTLENBQUNSOzs7Ozs7QUFHdkQsRUFJQSwwQkFBMEI7Q0FHMUIsMkJBQTJCO0NBRTNCLE1BQU07Q0FDTix3Q0FBd0M7Q0FDeEMsa0ZBQWtGO0NBQ2xGLDZEQUE2RDtDQUU3RDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtHQWhEd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oaG9tZSkvcGFnZS50c3g/MjUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEYXRhIGZldGNoaW5nIGluIFJlYWN0LmpzXG5cbi8vIGRvZXNuYHQgYXV0b21hdGljYWxseSBjYWNoZSB0aGUgZmV0Y2hlZCBkYXRhXG4vLyBDU1IgZmV0Y2hlZCB0aGUgZGF0YSBpbiBDbGllbnQgc28sIHVzZXIgY2FuIHN0ZWFsIGEgbG9vayBpbiBicm93c2VyIChDU1IgaXMgbm90IHNlY3VyZSlcbi8vIGV2ZW4gaWYgZGF0YSBmZXRjaGluZyBpcyBub3QgZmluaXNoZWQsIHVzZXIgY2FuIHNlZSB0aGUgd2Vic2l0ZVxuXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBVUkwgPSBcImh0dHBzOi8vbm9tYWQtbW92aWVzLm5vbWFkY29kZXJzLndvcmtlcnMuZGV2L21vdmllc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBnZXRNb3ZpZXMgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpOyBcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0TW92aWVzKGpzb24pO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBnZXRNb3ZpZXMoKTtcbiAgICB9LFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IEpTT04uc3RyaW5naWZ5KG1vdmllcyl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0gXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8vIGRhdGEgZmV0Y2hpbmcgaW4gTmV4dC5qc1xuXG4vLyBTU1Jcbi8vIGF1dG9tYXRpY2FsbHkgY2FjaGVzIHRoZSBmZXRjaGVkIGRhdGFcbi8vIGZldGNoIHRoZSBkYXRhIGluIFNlcnZlciBzbywgdXNlciBjYW5gdCBzdGVhbCBhIGxvb2sgaW4gYnJvd3NlciAoU1NSIGlzIHNlY3VyZSlcbi8vIGFmdGVyIGRhdGEgZmV0Y2hpbmcgaXMgZmluaXNoZWQsIHVzZXIgY2FuIHNlZSB0aGUgd2Vic2l0ZSBcblxuLypcbmNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9ub21hZC1tb3ZpZXMubm9tYWRjb2RlcnMud29ya2Vycy5kZXYvbW92aWVzXCJcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TW92aWVzKCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMDApKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7IFxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XG4gICAgcmV0dXJuIDxkaXY+e0pTT04uc3RyaW5naWZ5KG1vdmllcyl9PC9kaXY+XG59IFxuKi8iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVUkwiLCJIb21lIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibW92aWVzIiwic2V0TW92aWVzIiwiZ2V0TW92aWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});