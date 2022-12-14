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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Musics),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Musics({ data , pesquisa  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"GET\",\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"pesquisa\",\n                        placeholder: \"Procurar m\\xfasica:\",\n                        defaultValue: pesquisa\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 5,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"\\uD83D\\uDD0D\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 6,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 4,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.response.docs.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"30px\"\n                        },\n                        children: [\n                            \" Nome da m\\xfasica: \",\n                            m.title,\n                            \" | Artista/Banda: \",\n                            m.band\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 48\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\n//<img src={m.Poster}></img>\nasync function getServerSideProps(context) {\n    const { pesquisa  } = context.query;\n    const res = await fetch(`https://api.vagalume.com.br/search.mus?apikey=62cd865060c7451036501ec5b9f85d90&q=` + pesquisa);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n} //api : https://api.vagalume.com.br/search.mus?apikey=62cd865060c7451036501ec5b9f85d90&q=love&limit=10\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxPQUFPLEVBQUNDLEtBQUksRUFBRUMsU0FBUSxFQUFDLEVBQUM7SUFDNUMscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7Z0JBQUtDLFFBQU87Z0JBQU1DLE9BQU87b0JBQUNDLGNBQWM7Z0JBQU07O2tDQUMzQyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLE1BQUs7d0JBQVdDLGFBQVk7d0JBQW1CQyxjQUFjVjs7Ozs7O2tDQUNoRiw4REFBQ007d0JBQU1DLE1BQUs7d0JBQVNJLE9BQU07Ozs7Ozs7Ozs7OzswQkFHL0IsOERBQUNWOzBCQUNJRixLQUFLYSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGtCQUFNLDhEQUFDZDt3QkFBSUcsT0FBTzs0QkFBQ0MsY0FBYTt3QkFBTTs7NEJBQUc7NEJBQWtCVSxFQUFFQyxLQUFLOzRCQUFDOzRCQUFtQkQsRUFBRUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJJLENBQUM7QUFFRCw0QkFBNEI7QUFFckIsZUFBZUMsbUJBQW1CQyxPQUFPLEVBQUM7SUFFN0MsTUFBTSxFQUFDbkIsU0FBUSxFQUFDLEdBQUdtQixRQUFRQyxLQUFLO0lBQ2hDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLGlGQUFpRixDQUFDLEdBQUd0QjtJQUU5RyxNQUFNRCxPQUFPLE1BQU1zQixJQUFJRSxJQUFJO0lBQ3ZCLE9BQU87UUFDSEMsT0FBTztZQUNIekI7UUFDSjtJQUNKO0FBQ1IsQ0FBQyxDQUdELHNHQUFzRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVzaWNzKHtkYXRhLCBwZXNxdWlzYX0pe1xyXG4gICAgcmV0dXJuICggICAgXHJcbiAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJHRVRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwZXNxdWlzYVwiIHBsYWNlaG9sZGVyPVwiUHJvY3VyYXIgbcO6c2ljYTpcIiBkZWZhdWx0VmFsdWU9e3Blc3F1aXNhfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIiYjMTI4MjY5O1wiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgICAgIHtkYXRhLnJlc3BvbnNlLmRvY3MubWFwKChtKSA9PiA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwifX0+IE5vbWUgZGEgbcO6c2ljYToge20udGl0bGV9IHwgQXJ0aXN0YS9CYW5kYToge20uYmFuZH08L2Rpdj4pfSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICkgICAgXHJcbn1cclxuXHJcbi8vPGltZyBzcmM9e20uUG9zdGVyfT48L2ltZz5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcblxyXG4gICAgY29uc3Qge3Blc3F1aXNhfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudmFnYWx1bWUuY29tLmJyL3NlYXJjaC5tdXM/YXBpa2V5PTYyY2Q4NjUwNjBjNzQ1MTAzNjUwMWVjNWI5Zjg1ZDkwJnE9YCArIHBlc3F1aXNhKVxyXG4gIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCkgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7ICBcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG59XHJcblxyXG5cclxuLy9hcGkgOiBodHRwczovL2FwaS52YWdhbHVtZS5jb20uYnIvc2VhcmNoLm11cz9hcGlrZXk9NjJjZDg2NTA2MGM3NDUxMDM2NTAxZWM1YjlmODVkOTAmcT1sb3ZlJmxpbWl0PTEwIl0sIm5hbWVzIjpbIk11c2ljcyIsImRhdGEiLCJwZXNxdWlzYSIsImRpdiIsImZvcm0iLCJtZXRob2QiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwicmVzcG9uc2UiLCJkb2NzIiwibWFwIiwibSIsInRpdGxlIiwiYmFuZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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