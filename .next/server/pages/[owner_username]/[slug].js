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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ News)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction News() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { owner_username , slug  } = router.query;\n    console.log(owner_username);\n    console.log(slug);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`https://www.tabnews.com.br/api/v1/contents/${owner_username}/${slug}\r\n    `, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 13,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: [\n                            \"T\\xedtulo da noticia: \",\n                            data.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 18,\n                        columnNumber: 66\n                    }, this),\n                    \" Prel\\xfadio: \",\n                    data.body,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 18,\n                        columnNumber: 94\n                    }, this),\n                    \" Autor do artigo: \",\n                    data.owner_username,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 18,\n                        columnNumber: 138\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            data.tabcoins,\n                            \"  Updated in \",\n                            data.updated_at\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: data.source_url,\n                        target: \"_blank\",\n                        children: \" Noticia completa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"../\",\n                children: \"P\\xe1gina inicial\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\[owner_username]\\\\[slug].js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bb3duZXJfdXNlcm5hbWVdL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUNhO0FBRXRCLFNBQVNFLE9BQU07SUFDMUIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ0csZUFBYyxFQUFFQyxLQUFJLEVBQUMsR0FBR0YsT0FBT0csS0FBSztJQUMzQ0MsUUFBUUMsR0FBRyxDQUFDSjtJQUNaRyxRQUFRQyxHQUFHLENBQUNIO0lBRVosTUFBTSxFQUFDSSxLQUFJLEVBQUVDLE1BQUssRUFBQyxHQUFHViwrQ0FBTUEsQ0FBQyxDQUFDLDJDQUEyQyxFQUFFSSxlQUFlLENBQUMsRUFBRUMsS0FBSztJQUdsRyxJQUFJSyxPQUFPO2tCQUFZOzs7Ozs7SUFDdkIsSUFBSSxDQUFDRDtrQkFBa0I7Ozs7OztJQUN2Qjs7Ozs7OzRCQUdvQjs0QkFBb0JBLEtBQUtLLEtBQUs7Ozs7Ozs7b0JBQVU7Ozs7OztvQkFBTTtvQkFBWUwsS0FBS08sSUFBSTtvQkFBQzs7Ozs7O29CQUFNO29CQUFtQlAsS0FBS0wsY0FBYztrQ0FBQzs7Ozs7Ozs0QkFDckhLLEtBQUtTOzRCQUFTOzRCQUFjVCxLQUFLVSxVQUFVOzs7Ozs7Ozs7Ozs7O3dCQUU1Q0UsTUFBTVosSUFBQUEsNkRBQUthLElBQVU7d0JBQUVDLFFBQU87a0NBQVM7Ozs7Ozs7Ozs7Ozs7Z0JBRTNDRixNQUFLOzBCQUFNOzs7Ozs7Ozs7Ozs7QUFHMUIsQ0FBQztBQUVEO0lBQ0ksTUFBTUksTUFBTSxNQUFNQyxNQUFNRjtJQUN4QixNQUFNRyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBT0E7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL1tvd25lcl91c2VybmFtZV0vW3NsdWddLmpzP2RhYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MoKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge293bmVyX3VzZXJuYW1lLCBzbHVnfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKG93bmVyX3VzZXJuYW1lKVxyXG4gICAgY29uc29sZS5sb2coc2x1ZylcclxuXHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGBodHRwczovL3d3dy50YWJuZXdzLmNvbS5ici9hcGkvdjEvY29udGVudHMvJHtvd25lcl91c2VybmFtZX0vJHtzbHVnfVxyXG4gICAgYCwgIGZldGNoZXIpOyBcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlTDrXR1bG8gZGEgbm90aWNpYToge2RhdGEudGl0bGV9PC9zdHJvbmc+IDxici8+IFByZWzDumRpbzoge2RhdGEuYm9keX0gPGJyLz4gQXV0b3IgZG8gYXJ0aWdvOiB7ZGF0YS5vd25lcl91c2VybmFtZX08YnIvPlxyXG4gICAgICAgICAgICAgICAgPHA+e2RhdGEudGFiY29pbnN9ICBVcGRhdGVkIGluIHtkYXRhLnVwZGF0ZWRfYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5zb3VyY2VfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj4gTm90aWNpYSBjb21wbGV0YTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy4uLyc+UMOhZ2luYSBpbmljaWFsPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSAgICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBqc29uO1xyXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVJvdXRlciIsIk5ld3MiLCJyb3V0ZXIiLCJvd25lcl91c2VybmFtZSIsInNsdWciLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiZGl2Iiwic3Ryb25nIiwidGl0bGUiLCJiciIsImJvZHkiLCJwIiwidGFiY29pbnMiLCJ1cGRhdGVkX2F0IiwiYSIsImhyZWYiLCJzb3VyY2VfdXJsIiwidGFyZ2V0IiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[owner_username]/[slug].js\n");

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