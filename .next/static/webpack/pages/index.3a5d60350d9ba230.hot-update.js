"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nvar __N_SSP = true;\nfunction News() {\n    _s();\n    //console.log(data)\n    const { data , error , pesquisa  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://www.tabnews.com.br/api/v1/contents\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"GET\",\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"pesquisa\",\n                        placeholder: \"Procurar noticia:\",\n                        defaultValue: pesquisa\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"\\uD83D\\uDD0D\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"m.slug}\",\n                            children: m.title\n                        }, \"\".concat(m.owner_username, \"/\").concat(m.slug), false, {\n                            fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 36\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 31\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_s(News, \"0FhuJGajXT5mGh5UYT88+6GQXOU=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = News;\n//<img src={m.Poster}></img>\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3Qjs7QUFFVCxTQUFTQyxPQUFNOztJQUMxQixtQkFBbUI7SUFFbkIsTUFBTSxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFDLEdBQUdKLCtDQUFNQSxDQUFFLDhDQUE2Q0s7SUFFckYsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0c7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNKLE1BQU0scUJBQU8sOERBQUNJO2tCQUFJOzs7Ozs7SUFDdkIscUJBQ0ksOERBQUNBOzswQkFFRyw4REFBQ0M7Z0JBQUtDLFFBQU87Z0JBQU1DLE9BQU87b0JBQUNDLGNBQWM7Z0JBQU07O2tDQUMzQyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLE1BQUs7d0JBQVdDLGFBQVk7d0JBQW9CQyxjQUFjWDs7Ozs7O2tDQUNqRiw4REFBQ087d0JBQU1DLE1BQUs7d0JBQVNJLE9BQU07Ozs7Ozs7Ozs7OzswQkFHL0IsOERBQUNWOzBCQUNDSixLQUFLZSxHQUFHLENBQUMsQ0FBQ0Msa0JBQU0sOERBQUNaO2tDQUFJLDRFQUFDYTs0QkFBd0NDLE1BQU87c0NBQVdGLEVBQUVHLEtBQUs7MkJBQTFELEdBQXVCSCxPQUFwQkEsRUFBRUksY0FBYyxFQUFDLEtBQVUsT0FBUEosRUFBRUssSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hFLENBQUM7R0FyQnVCdEI7O1FBR1lELDJDQUFNQTs7O0tBSGxCQztBQXVCeEIsNEJBQTRCO0FBRzVCLGVBQWVJLFFBQVFtQixHQUFHLEVBQUU7SUFDeEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNRjtJQUN4QixNQUFNRyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBT0E7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpe1xyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgcGVzcXVpc2F9ID0gdXNlU1dSKGBodHRwczovL3d3dy50YWJuZXdzLmNvbS5ici9hcGkvdjEvY29udGVudHNgLCBmZXRjaGVyKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgICAgIDxkaXY+ICBcclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIkdFVFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBlc3F1aXNhXCIgcGxhY2Vob2xkZXI9XCJQcm9jdXJhciBub3RpY2lhOlwiIGRlZmF1bHRWYWx1ZT17cGVzcXVpc2F9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiJiMxMjgyNjk7XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICB7IGRhdGEubWFwKChtKSA9PiA8ZGl2PjxhIGtleT17YCR7bS5vd25lcl91c2VybmFtZX0vJHttLnNsdWd9YH0gaHJlZj17YG0uc2x1Z31gfT57bS50aXRsZX08L2E+PC9kaXY+KX0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgKSAgICBcclxufVxyXG5cclxuLy88aW1nIHNyYz17bS5Qb3N0ZXJ9PjwvaW1nPlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcbiAgICBjb25zdCB7cGVzcXVpc2F9ID0gY29udGV4dC5xdWVyeTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50YWJuZXdzLmNvbS5ici9hcGkvdjEvY29udGVudHNgKVxyXG4gIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCkgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7ICBcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJOZXdzIiwiZGF0YSIsImVycm9yIiwicGVzcXVpc2EiLCJmZXRjaGVyIiwiZGl2IiwiZm9ybSIsIm1ldGhvZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJtYXAiLCJtIiwiYSIsImhyZWYiLCJ0aXRsZSIsIm93bmVyX3VzZXJuYW1lIiwic2x1ZyIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});