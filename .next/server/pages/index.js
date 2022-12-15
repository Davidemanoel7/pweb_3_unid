"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ News)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction News() {\n    //console.log(data)\n    const { data , error , pesquisa  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`https://www.tabnews.com.br/api/v1/contents`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"GET\",\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"pesquisa\",\n                        placeholder: \"Procurar noticia:\",\n                        defaultValue: pesquisa\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"\\uD83D\\uDD0D\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: `${m.owner_username}/${m.slug}`,\n                            children: m.title\n                        }, `${m.owner_username}/${m.slug}`, false, {\n                            fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 36\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 31\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n//<img src={m.Poster}></img>\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n} /*\r\nexport async function getServerSideProps(context){\r\n    const {pesquisa} = context.query;\r\n    const res = await fetch(`https://www.tabnews.com.br/api/v1/contents`)\r\n  \r\n    const data = await res.json()  \r\n        return {\r\n            props: {  \r\n                data\r\n            }\r\n        }  \r\n}\r\n*/ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBd0I7QUFFVCxTQUFTQyxPQUFNO0lBQzFCLG1CQUFtQjtJQUVuQixNQUFNLEVBQUNDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUMsR0FBR0osK0NBQU1BLENBQUMsQ0FBQywwQ0FBMEMsQ0FBQyxFQUFFSztJQUVyRixJQUFJRixPQUFPLHFCQUFPLDhEQUFDRztrQkFBSTs7Ozs7O0lBQ3ZCLElBQUksQ0FBQ0osTUFBTSxxQkFBTyw4REFBQ0k7a0JBQUk7Ozs7OztJQUN2QixxQkFDSSw4REFBQ0E7OzBCQUVHLDhEQUFDQztnQkFBS0MsUUFBTztnQkFBTUMsT0FBTztvQkFBQ0MsY0FBYztnQkFBTTs7a0NBQzNDLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsTUFBSzt3QkFBV0MsYUFBWTt3QkFBb0JDLGNBQWNYOzs7Ozs7a0NBQ2pGLDhEQUFDTzt3QkFBTUMsTUFBSzt3QkFBU0ksT0FBTTs7Ozs7Ozs7Ozs7OzBCQUcvQiw4REFBQ1Y7MEJBQ0NKLEtBQUtlLEdBQUcsQ0FBQyxDQUFDQyxrQkFBTSw4REFBQ1o7a0NBQUksNEVBQUNhOzRCQUF3Q0MsTUFBTSxDQUFDLEVBQUVGLEVBQUVHLGNBQWMsQ0FBQyxDQUFDLEVBQUVILEVBQUVJLElBQUksQ0FBQyxDQUFDO3NDQUFHSixFQUFFSyxLQUFLOzJCQUFoRixDQUFDLEVBQUVMLEVBQUVHLGNBQWMsQ0FBQyxDQUFDLEVBQUVILEVBQUVJLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUUsQ0FBQztBQUVELDRCQUE0QjtBQUc1QixlQUFlakIsUUFBUW1CLEdBQUcsRUFBRTtJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYLEVBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpe1xyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgcGVzcXVpc2F9ID0gdXNlU1dSKGBodHRwczovL3d3dy50YWJuZXdzLmNvbS5ici9hcGkvdjEvY29udGVudHNgLCBmZXRjaGVyKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgICAgIDxkaXY+ICBcclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIkdFVFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBlc3F1aXNhXCIgcGxhY2Vob2xkZXI9XCJQcm9jdXJhciBub3RpY2lhOlwiIGRlZmF1bHRWYWx1ZT17cGVzcXVpc2F9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiJiMxMjgyNjk7XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICB7IGRhdGEubWFwKChtKSA9PiA8ZGl2PjxhIGtleT17YCR7bS5vd25lcl91c2VybmFtZX0vJHttLnNsdWd9YH0gaHJlZj17YCR7bS5vd25lcl91c2VybmFtZX0vJHttLnNsdWd9YH0+e20udGl0bGV9PC9hPjwvZGl2Pil9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICkgICAgXHJcbn1cclxuXHJcbi8vPGltZyBzcmM9e20uUG9zdGVyfT48L2ltZz5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn1cclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcbiAgICBjb25zdCB7cGVzcXVpc2F9ID0gY29udGV4dC5xdWVyeTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50YWJuZXdzLmNvbS5ici9hcGkvdjEvY29udGVudHNgKVxyXG4gIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCkgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7ICBcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG59XHJcbiovIl0sIm5hbWVzIjpbInVzZVNXUiIsIk5ld3MiLCJkYXRhIiwiZXJyb3IiLCJwZXNxdWlzYSIsImZldGNoZXIiLCJkaXYiLCJmb3JtIiwibWV0aG9kIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsIm1hcCIsIm0iLCJhIiwiaHJlZiIsIm93bmVyX3VzZXJuYW1lIiwic2x1ZyIsInRpdGxlIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();