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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Data fetching in React.js\n// CSR doesn`t automatically cache the fetched data\n// CSR fetched the data in Client so, user can steal a look in browser (CSR is not secure)\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst URL = \"https://nomad-movies.nomadcoders.workers.dev/movies\";\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getMovies = async ()=>{\n        const response = await fetch(URL);\n        const json = await response.json();\n        setMovies(json);\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isLoading ? \"Loading...\" : JSON.stringify(movies)\n    }, void 0, false, {\n        fileName: \"/Users/gimseongjin/Nico_Beginning_Nextjs14/app/(home)/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n} //////////////////////////\n // data fetching in Next.js\n // SSR automatically caches the fetched data\n // SSR fetched the data in Server so, user can`t steal a look in browser (SSR is secure)\n // user can see the web\n /*\nconst URL = \"https://nomad-movies.nomadcoders.workers.dev/movies\"\n\nasync function getMovies() {\n    await new Promise((resolve) => setTimeout(resolve, 3000));\n    const response = await fetch(URL); \n    const json = await response.json();\n    return json;\n}\n\nexport default async function Home() {\n    const movies = await getMovies();\n    return <div>{JSON.stringify(movies)}</div>\n} \n*/ \n_s(Home, \"BLz+Dza675Lqh5QFvDsUJLyjzvs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRCQUE0QjtBQUU1QixtREFBbUQ7QUFDbkQsMEZBQTBGOzs7QUFHOUM7QUFFNUMsTUFBTUUsTUFBTTtBQUVHLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkMsTUFBTU8sWUFBWTtRQUNkLE1BQU1DLFdBQVcsTUFBTUMsTUFBTVI7UUFDN0IsTUFBTVMsT0FBTyxNQUFNRixTQUFTRSxJQUFJO1FBQ2hDSixVQUFVSTtRQUNWTixhQUFhO0lBQ2pCO0lBRUFMLGdEQUFTQSxDQUFDO1FBQ05RO0lBQ0osR0FBRSxFQUFFO0lBRUoscUJBQ0ksOERBQUNJO2tCQUNJUixZQUFZLGVBQWVTLEtBQUtDLFNBQVMsQ0FBQ1I7Ozs7OztBQUd2RCxFQUlBLDBCQUEwQjtDQUcxQiwyQkFBMkI7Q0FFM0IsNENBQTRDO0NBQzVDLHdGQUF3RjtDQUN4Rix1QkFBdUI7Q0FDdkI7Ozs7Ozs7Ozs7Ozs7O0FBY0E7R0E5Q3dCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGhvbWUpL3BhZ2UudHN4PzI1MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGF0YSBmZXRjaGluZyBpbiBSZWFjdC5qc1xuXG4vLyBDU1IgZG9lc25gdCBhdXRvbWF0aWNhbGx5IGNhY2hlIHRoZSBmZXRjaGVkIGRhdGFcbi8vIENTUiBmZXRjaGVkIHRoZSBkYXRhIGluIENsaWVudCBzbywgdXNlciBjYW4gc3RlYWwgYSBsb29rIGluIGJyb3dzZXIgKENTUiBpcyBub3Qgc2VjdXJlKVxuXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBVUkwgPSBcImh0dHBzOi8vbm9tYWQtbW92aWVzLm5vbWFkY29kZXJzLndvcmtlcnMuZGV2L21vdmllc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBnZXRNb3ZpZXMgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpOyBcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0TW92aWVzKGpzb24pO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBnZXRNb3ZpZXMoKTtcbiAgICB9LFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IEpTT04uc3RyaW5naWZ5KG1vdmllcyl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0gXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8vIGRhdGEgZmV0Y2hpbmcgaW4gTmV4dC5qc1xuXG4vLyBTU1IgYXV0b21hdGljYWxseSBjYWNoZXMgdGhlIGZldGNoZWQgZGF0YVxuLy8gU1NSIGZldGNoZWQgdGhlIGRhdGEgaW4gU2VydmVyIHNvLCB1c2VyIGNhbmB0IHN0ZWFsIGEgbG9vayBpbiBicm93c2VyIChTU1IgaXMgc2VjdXJlKVxuLy8gdXNlciBjYW4gc2VlIHRoZSB3ZWJcbi8qXG5jb25zdCBVUkwgPSBcImh0dHBzOi8vbm9tYWQtbW92aWVzLm5vbWFkY29kZXJzLndvcmtlcnMuZGV2L21vdmllc1wiXG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1vdmllcygpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpOyBcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IG1vdmllcyA9IGF3YWl0IGdldE1vdmllcygpO1xuICAgIHJldHVybiA8ZGl2PntKU09OLnN0cmluZ2lmeShtb3ZpZXMpfTwvZGl2PlxufSBcbiovIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVVJMIiwiSG9tZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1vdmllcyIsInNldE1vdmllcyIsImdldE1vdmllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});