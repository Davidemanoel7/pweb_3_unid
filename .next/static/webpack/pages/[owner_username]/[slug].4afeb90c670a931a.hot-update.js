"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[owner_username]/[slug]",{

/***/ "./pages/[owner_username]/[slug].js":
/*!******************************************!*\
  !*** ./pages/[owner_username]/[slug].js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction News() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { owner_username , slug  } = router.query;\n    console.log(owner_username);\n    console.log(slug);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://www.tabnews.com.br/api/v1/contents/\".concat(owner_username, \"/\").concat(slug, \"\\n    \"), fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 13,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: [\n                            \"T\\xedtulo da noticia: \",\n                            m.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    \" Autor do artigo: \",\n                    m.owner_username,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 18,\n                        columnNumber: 98\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            data.tabcoins,\n                            \"  Updated in \",\n                            data.updated_at\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: m.source_url,\n                        target: \"_blank\",\n                        children: \" Noticia completa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"index/\",\n                children: \"P\\xe1gina inicial\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(News, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = News;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bb3duZXJfdXNlcm5hbWVdL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBd0I7QUFDYTtBQUV0QixTQUFTRSxPQUFNOztJQUMxQixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTSxFQUFDRyxlQUFjLEVBQUVDLEtBQUksRUFBQyxHQUFHRixPQUFPRyxLQUFLO0lBQzNDQyxRQUFRQyxHQUFHLENBQUNKO0lBQ1pHLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixNQUFNLEVBQUNJLEtBQUksRUFBRUMsTUFBSyxFQUFDLEdBQUdWLCtDQUFNQSxDQUFDLDhDQUFnRUssT0FBbEJELGdCQUFlLEtBQVEsT0FBTEMsTUFBSyxXQUM5Rk07SUFFSixJQUFJRCxPQUFPLHFCQUFPLDhEQUFDRTtrQkFBSTs7Ozs7O0lBQ3ZCLElBQUksQ0FBQ0gsTUFBTSxxQkFBTyw4REFBQ0c7a0JBQUk7Ozs7OztJQUN2QixxQkFDSSw4REFBQ0E7OzBCQUNHLDhEQUFDQTs7a0NBQ0csOERBQUNDOzs0QkFBTzs0QkFBb0JDLEVBQUVDLEtBQUs7Ozs7Ozs7b0JBQVU7b0JBQW1CRCxFQUFFVixjQUFjO2tDQUFDLDhEQUFDWTs7Ozs7a0NBQ2xGLDhEQUFDQzs7NEJBQUdSLEtBQUtTLFFBQVE7NEJBQUM7NEJBQWNULEtBQUtVLFVBQVU7Ozs7Ozs7a0NBQy9DLDhEQUFDRjs7Ozs7a0NBQ0QsOERBQUNHO3dCQUFFQyxNQUFNUCxFQUFFUSxVQUFVO3dCQUFFQyxRQUFPO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRTNDLDhEQUFDSDtnQkFBRUMsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBRzdCLENBQUM7R0F0QnVCbkI7O1FBQ0xELGtEQUFTQTtRQUtGRCwyQ0FBTUE7OztLQU5SRTtBQXdCeEIsZUFBZVMsUUFBUWEsR0FBRyxFQUFFO0lBQ3hCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUY7SUFDeEIsTUFBTUcsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU9BO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW293bmVyX3VzZXJuYW1lXS9bc2x1Z10uanM/ZGFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7b3duZXJfdXNlcm5hbWUsIHNsdWd9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cob3duZXJfdXNlcm5hbWUpXHJcbiAgICBjb25zb2xlLmxvZyhzbHVnKVxyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoYGh0dHBzOi8vd3d3LnRhYm5ld3MuY29tLmJyL2FwaS92MS9jb250ZW50cy8ke293bmVyX3VzZXJuYW1lfS8ke3NsdWd9XHJcbiAgICBgLCAgZmV0Y2hlcik7IFxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VMOtdHVsbyBkYSBub3RpY2lhOiB7bS50aXRsZX08L3N0cm9uZz4gQXV0b3IgZG8gYXJ0aWdvOiB7bS5vd25lcl91c2VybmFtZX08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLnRhYmNvaW5zfSAgVXBkYXRlZCBpbiB7ZGF0YS51cGRhdGVkX2F0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e20uc291cmNlX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+IE5vdGljaWEgY29tcGxldGE8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPSdpbmRleC8nPlDDoWdpbmEgaW5pY2lhbDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgICAgXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJOZXdzIiwicm91dGVyIiwib3duZXJfdXNlcm5hbWUiLCJzbHVnIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImRpdiIsInN0cm9uZyIsIm0iLCJ0aXRsZSIsImJyIiwicCIsInRhYmNvaW5zIiwidXBkYXRlZF9hdCIsImEiLCJocmVmIiwic291cmNlX3VybCIsInRhcmdldCIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[owner_username]/[slug].js\n"));

/***/ })

});