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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nvar __N_SSP = true;\nfunction News() {\n    _s();\n    //console.log(data)\n    const { data , error , pesquisa  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://www.tabnews.com.br/api/v1/contents\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"GET\",\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"pesquisa\",\n                        placeholder: \"Procurar noticia:\",\n                        defaultValue: pesquisa\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"\\uD83D\\uDD0D\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: m.slug,\n                            children: m.title\n                        }, m.owner_username, false, {\n                            fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 36\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 31\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_s(News, \"0FhuJGajXT5mGh5UYT88+6GQXOU=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = News;\n//<img src={m.Poster}></img>\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3Qjs7QUFFVCxTQUFTQyxPQUFNOztJQUMxQixtQkFBbUI7SUFFbkIsTUFBTSxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFDLEdBQUdKLCtDQUFNQSxDQUFFLDhDQUE2Q0s7SUFFckYsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0c7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNKLE1BQU0scUJBQU8sOERBQUNJO2tCQUFJOzs7Ozs7SUFDdkIscUJBQ0ksOERBQUNBOzswQkFFRyw4REFBQ0M7Z0JBQUtDLFFBQU87Z0JBQU1DLE9BQU87b0JBQUNDLGNBQWM7Z0JBQU07O2tDQUMzQyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLE1BQUs7d0JBQVdDLGFBQVk7d0JBQW9CQyxjQUFjWDs7Ozs7O2tDQUNqRiw4REFBQ087d0JBQU1DLE1BQUs7d0JBQVNJLE9BQU07Ozs7Ozs7Ozs7OzswQkFHL0IsOERBQUNWOzBCQUNDSixLQUFLZSxHQUFHLENBQUMsQ0FBQ0Msa0JBQU0sOERBQUNaO2tDQUFJLDRFQUFDYTs0QkFBeUJDLE1BQU1GLEVBQUVHLElBQUk7c0NBQUdILEVBQUVJLEtBQUs7MkJBQXhDSixFQUFFSyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0QsQ0FBQztHQXJCdUJ0Qjs7UUFHWUQsMkNBQU1BOzs7S0FIbEJDO0FBdUJ4Qiw0QkFBNEI7QUFHNUIsZUFBZUksUUFBUW1CLEdBQUcsRUFBRTtJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKCl7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yLCBwZXNxdWlzYX0gPSB1c2VTV1IoYGh0dHBzOi8vd3d3LnRhYm5ld3MuY29tLmJyL2FwaS92MS9jb250ZW50c2AsIGZldGNoZXIpXHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PlxyXG4gICAgcmV0dXJuICggICAgXHJcbiAgICAgICAgPGRpdj4gIFxyXG5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiR0VUXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGVzcXVpc2FcIiBwbGFjZWhvbGRlcj1cIlByb2N1cmFyIG5vdGljaWE6XCIgZGVmYXVsdFZhbHVlPXtwZXNxdWlzYX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCImIzEyODI2OTtcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICAgIHsgZGF0YS5tYXAoKG0pID0+IDxkaXY+PGEga2V5PXttLm93bmVyX3VzZXJuYW1lfSBocmVmPXttLnNsdWd9PnttLnRpdGxlfTwvYT48L2Rpdj4pfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICApICAgIFxyXG59XHJcblxyXG4vLzxpbWcgc3JjPXttLlBvc3Rlcn0+PC9pbWc+XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBqc29uO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuICAgIGNvbnN0IHtwZXNxdWlzYX0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LnRhYm5ld3MuY29tLmJyL2FwaS92MS9jb250ZW50c2ApXHJcbiAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKSAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgIFxyXG4gICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIk5ld3MiLCJkYXRhIiwiZXJyb3IiLCJwZXNxdWlzYSIsImZldGNoZXIiLCJkaXYiLCJmb3JtIiwibWV0aG9kIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsIm1hcCIsIm0iLCJhIiwiaHJlZiIsInNsdWciLCJ0aXRsZSIsIm93bmVyX3VzZXJuYW1lIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});