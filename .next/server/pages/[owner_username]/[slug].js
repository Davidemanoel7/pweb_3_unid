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
exports.id = "pages/[owner_username]/[slug]";
exports.ids = ["pages/[owner_username]/[slug]"];
exports.modules = {

/***/ "./pages/[owner_username]/[slug].js":
/*!******************************************!*\
  !*** ./pages/[owner_username]/[slug].js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ News)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction News() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { owner_username , slug  } = router.query;\n    console.log(owner_username);\n    console.log(slug);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`https://www.tabnews.com.br/api/v1/contents/${owner_username}/${slug}`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 16,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: [\n                        \"T\\xedtulo da noticia: \",\n                        data.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                    lineNumber: 20,\n                    columnNumber: 66\n                }, this),\n                \" Prel\\xfadio: \",\n                data.body,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                    lineNumber: 20,\n                    columnNumber: 94\n                }, this),\n                \" Autor do artigo: \",\n                data.owner_username,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                    lineNumber: 20,\n                    columnNumber: 138\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        data.tabcoins,\n                        \"  Updated in \",\n                        data.updated_at\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    variant: \"contained\",\n                    href: data.source_url,\n                    target: \"_blank\",\n                    children: \"Noticia completa\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    variant: \"contained\",\n                    href: \"../\",\n                    children: \"P\\xe1gina inicial\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                    lineNumber: 23,\n                    columnNumber: 110\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bb3duZXJfdXNlcm5hbWVdL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBQ2E7QUFDSztBQUczQixTQUFTRyxPQUFNO0lBQzFCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUNJLGVBQWMsRUFBRUMsS0FBSSxFQUFDLEdBQUdGLE9BQU9HLEtBQUs7SUFDM0NDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWkcsUUFBUUMsR0FBRyxDQUFDSDtJQUVaLE1BQU0sRUFBQ0ksS0FBSSxFQUFFQyxNQUFLLEVBQUMsR0FBR1gsK0NBQU1BLENBQUMsQ0FBQywyQ0FBMkMsRUFBRUssZUFBZSxDQUFDLEVBQUVDLEtBQUssQ0FBQyxFQUNoR007SUFFSCxJQUFJRCxPQUFPLHFCQUFPLDhEQUFDRTtrQkFBSTs7Ozs7O0lBQ3ZCLElBQUksQ0FBQ0gsTUFBTSxxQkFBTyw4REFBQ0c7a0JBQUk7Ozs7OztJQUN2QixxQkFDSSw4REFBQ0E7a0JBQ0csNEVBQUNBOzs4QkFDRyw4REFBQ0M7O3dCQUFPO3dCQUFvQkosS0FBS0ssS0FBSzs7Ozs7OztnQkFBVTs4QkFBQyw4REFBQ0M7Ozs7O2dCQUFJO2dCQUFZTixLQUFLTyxJQUFJO2dCQUFDOzhCQUFDLDhEQUFDRDs7Ozs7Z0JBQUk7Z0JBQW1CTixLQUFLTCxjQUFjOzhCQUFDLDhEQUFDVzs7Ozs7OEJBQzFILDhEQUFDRTs7d0JBQUdSLEtBQUtTLFFBQVE7d0JBQUM7d0JBQWNULEtBQUtVLFVBQVU7Ozs7Ozs7OEJBQy9DLDhEQUFDRjs7Ozs7OEJBQ0QsOERBQUNoQiw2REFBTUE7b0JBQUNtQixTQUFRO29CQUFZQyxNQUFNWixLQUFLYSxVQUFVO29CQUFFQyxRQUFPOzhCQUFTOzs7Ozs7Z0JBQXlCOzhCQUFDLDhEQUFDdEIsNkRBQU1BO29CQUFDbUIsU0FBUTtvQkFBWUMsTUFBSzs4QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEosQ0FBQztBQUVELGVBQWVWLFFBQVFhLEdBQUcsRUFBRTtJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvW293bmVyX3VzZXJuYW1lXS9bc2x1Z10uanM/ZGFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKCl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtvd25lcl91c2VybmFtZSwgc2x1Z30gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhvd25lcl91c2VybmFtZSlcclxuICAgIGNvbnNvbGUubG9nKHNsdWcpXHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihgaHR0cHM6Ly93d3cudGFibmV3cy5jb20uYnIvYXBpL3YxL2NvbnRlbnRzLyR7b3duZXJfdXNlcm5hbWV9LyR7c2x1Z31gXHJcbiAgICAsICBmZXRjaGVyKTsgXHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Uw610dWxvIGRhIG5vdGljaWE6IHtkYXRhLnRpdGxlfTwvc3Ryb25nPiA8YnIvPiBQcmVsw7pkaW86IHtkYXRhLmJvZHl9IDxici8+IEF1dG9yIGRvIGFydGlnbzoge2RhdGEub3duZXJfdXNlcm5hbWV9PGJyLz5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLnRhYmNvaW5zfSAgVXBkYXRlZCBpbiB7ZGF0YS51cGRhdGVkX2F0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGhyZWY9e2RhdGEuc291cmNlX3VybH0gdGFyZ2V0PSdfYmxhbmsnPk5vdGljaWEgY29tcGxldGE8L0J1dHRvbj4gPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgaHJlZj0nLi4vJz5Qw6FnaW5hIGluaWNpYWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiTmV3cyIsInJvdXRlciIsIm93bmVyX3VzZXJuYW1lIiwic2x1ZyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImZldGNoZXIiLCJkaXYiLCJzdHJvbmciLCJ0aXRsZSIsImJyIiwiYm9keSIsInAiLCJ0YWJjb2lucyIsInVwZGF0ZWRfYXQiLCJ2YXJpYW50IiwiaHJlZiIsInNvdXJjZV91cmwiLCJ0YXJnZXQiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[owner_username]/[slug].js\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[owner_username]/[slug].js"));
module.exports = __webpack_exports__;

})();