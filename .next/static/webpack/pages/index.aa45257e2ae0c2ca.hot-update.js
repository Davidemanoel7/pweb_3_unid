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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Musics; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSP = true;\nfunction Musics(param) {\n    let { data , pesquisa  } = param;\n    var _data_articles;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"GET\",\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"pesquisa\",\n                        placeholder: \"Procurar m\\xfasica:\",\n                        defaultValue: pesquisa\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 6,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"\\uD83D\\uDD0D\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 7,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: (_data_articles = data.articles) === null || _data_articles === void 0 ? void 0 : _data_articles.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"30px\"\n                        },\n                        children: [\n                            \" TItulo da noticia: \",\n                            m.title,\n                            \" | Autor do artigo: \",\n                            m.author\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 44\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, this);\n}\n_c = Musics;\nvar _c;\n$RefreshReg$(_c, \"Musics\");\n //api : https://api.vagalume.com.br/search.mus?apikey=62cd865060c7451036501ec5b9f85d90&q=love&limit=10\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWUsU0FBU0EsT0FBTyxLQUFnQixFQUFDO1FBQWpCLEVBQUNDLEtBQUksRUFBRUMsU0FBUSxFQUFDLEdBQWhCO1FBVWREO0lBVGJFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixxQkFDSSw4REFBQ0k7OzBCQUNHLDhEQUFDQztnQkFBS0MsUUFBTztnQkFBTUMsT0FBTztvQkFBQ0MsY0FBYztnQkFBTTs7a0NBQzNDLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsTUFBSzt3QkFBV0MsYUFBWTt3QkFBbUJDLGNBQWNaOzs7Ozs7a0NBQ2hGLDhEQUFDUTt3QkFBTUMsTUFBSzt3QkFBU0ksT0FBTTs7Ozs7Ozs7Ozs7OzBCQUcvQiw4REFBQ1Y7MEJBQ0lKLENBQUFBLGlCQUFBQSxLQUFLZSxRQUFRLGNBQWJmLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFlZ0IsSUFBSSxDQUFDQyxrQkFBTSw4REFBQ2I7d0JBQUlHLE9BQU87NEJBQUNDLGNBQWE7d0JBQU07OzRCQUFHOzRCQUFxQlMsRUFBRUMsS0FBSzs0QkFBQzs0QkFBcUJELEVBQUVFLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4SSxDQUFDO0tBZHVCcEI7OztDQWdDeEIsc0dBQXNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVzaWNzKHtkYXRhLCBwZXNxdWlzYX0pe1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiR0VUXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGVzcXVpc2FcIiBwbGFjZWhvbGRlcj1cIlByb2N1cmFyIG3DunNpY2E6XCIgZGVmYXVsdFZhbHVlPXtwZXNxdWlzYX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCImIzEyODI2OTtcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5hcnRpY2xlcz8ubWFwKChtKSA9PiA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwifX0+IFRJdHVsbyBkYSBub3RpY2lhOiB7bS50aXRsZX0gfCBBdXRvciBkbyBhcnRpZ286IHttLmF1dGhvcn08L2Rpdj4pfSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICkgICAgXHJcbn1cclxuXHJcbi8vPGltZyBzcmM9e20uUG9zdGVyfT48L2ltZz5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcbiAgICBcclxuICAgIGNvbnN0IHtwZXNxdWlzYX0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPSR7cGVzcXVpc2F9JnNvcnRCeT1wdWJsaXNoZWRBdCZhcGlLZXk9ODI5MTJhMTBjMmUxNDM2NTlkZjhiNjQ2OTljYjVkMzlgKVxyXG4gIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCkgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7ICBcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG59XHJcblxyXG5cclxuLy9hcGkgOiBodHRwczovL2FwaS52YWdhbHVtZS5jb20uYnIvc2VhcmNoLm11cz9hcGlrZXk9NjJjZDg2NTA2MGM3NDUxMDM2NTAxZWM1YjlmODVkOTAmcT1sb3ZlJmxpbWl0PTEwIl0sIm5hbWVzIjpbIk11c2ljcyIsImRhdGEiLCJwZXNxdWlzYSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJmb3JtIiwibWV0aG9kIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsImFydGljbGVzIiwibWFwIiwibSIsInRpdGxlIiwiYXV0aG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});