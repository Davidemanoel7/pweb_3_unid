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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction Home() {\n    const { data , error , pesquisa  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`https://www.tabnews.com.br/api/v1/contents`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"GET\",\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"pesquisa\",\n                        placeholder: \"Procurar noticia:\",\n                        defaultValue: pesquisa\n                    }, void 0, false, {\n                        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"\\uD83D\\uDD0D\"\n                    }, void 0, false, {\n                        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            data.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    sx: {\n                        maxWidth: \"90%\",\n                        margin: \"8px 2vh\",\n                        display: \"block\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                gutterBottom: true,\n                                variant: \"h5\",\n                                component: \"div\",\n                                children: m.title\n                            }, void 0, false, {\n                                fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                lineNumber: 27,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                variant: \"body1\",\n                                color: \"text.primary\",\n                                children: m.owner_username\n                            }, void 0, false, {\n                                fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                variant: \"body2\",\n                                color: \"text.secondary\",\n                                children: [\n                                    m.title,\n                                    \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                variant: \"contained\",\n                                size: \"small\",\n                                href: `/selectednews/${m.owner_username}__${m.slug}`,\n                                children: \"Ver mais\"\n                            }, `${m.owner_username}/${m.slug}`, false, {\n                                fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 37\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 33\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 25\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBQ007QUFHWTtBQUNKO0FBQ2M7QUFDRjtBQUVuQyxTQUFTTSxPQUFNO0lBQzFCLE1BQU0sRUFBQ0MsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBQyxHQUFHVCwrQ0FBTUEsQ0FBQyxDQUFDLDBDQUEwQyxDQUFDLEVBQUVVO0lBR3JGLElBQUlGLE9BQU8scUJBQU8sOERBQUNHO2tCQUFJOzs7Ozs7SUFDdkIsSUFBSSxDQUFDSixNQUFNLHFCQUFPLDhEQUFDSTtrQkFBSTs7Ozs7O0lBQ3ZCLHFCQUNJLDhEQUFDQTs7MEJBRUcsOERBQUNDO2dCQUFLQyxRQUFPO2dCQUFNQyxPQUFPO29CQUFDQyxjQUFjO2dCQUFNOztrQ0FDM0MsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxNQUFLO3dCQUFXQyxhQUFZO3dCQUFvQkMsY0FBY1g7Ozs7OztrQ0FDakYsOERBQUNPO3dCQUFNQyxNQUFLO3dCQUFTSSxPQUFNOzs7Ozs7Ozs7Ozs7WUFHN0JkLEtBQUtlLEdBQUcsQ0FBQyxDQUFDQyxrQkFDQSw4REFBQ3BCLDJEQUFJQTtvQkFBQ3FCLElBQUk7d0JBQUVDLFVBQVU7d0JBQU9DLFFBQVE7d0JBQVdDLFNBQVM7b0JBQU87OEJBQ3hELDRFQUFDdkIsa0VBQVdBOzswQ0FDUiw4REFBQ0MsaUVBQVVBO2dDQUFDdUIsWUFBWTtnQ0FBQ0MsU0FBUTtnQ0FBS0MsV0FBVTswQ0FDM0NQLEVBQUVRLEtBQUs7Ozs7OzswQ0FFWiw4REFBQzFCLGlFQUFVQTtnQ0FBQ3dCLFNBQVE7Z0NBQVFHLE9BQU07MENBQWdCVCxFQUFFVSxjQUFjOzs7Ozs7MENBQ2xFLDhEQUFDNUIsaUVBQVVBO2dDQUFDd0IsU0FBUTtnQ0FBUUcsT0FBTTs7b0NBQzdCVCxFQUFFUSxLQUFLO29DQUFDOzs7Ozs7OzBDQUViLDhEQUFDRzs7Ozs7MENBQ0QsOERBQUNoQyw2REFBTUE7Z0NBQUMyQixTQUFRO2dDQUFZTSxNQUFLO2dDQUE4Q0MsTUFBTSxDQUFDLGNBQWMsRUFBRWIsRUFBRVUsY0FBYyxDQUFDLEVBQUUsRUFBRVYsRUFBRWMsSUFBSSxDQUFDLENBQUM7MENBQUU7K0JBQXZGLENBQUMsRUFBRWQsRUFBRVUsY0FBYyxDQUFDLENBQUMsRUFBRVYsRUFBRWMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakgsQ0FBQztBQUVELGVBQWUzQixRQUFRNEIsR0FBRyxFQUFFO0lBQ3hCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUY7SUFDeEIsTUFBTUcsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU9BO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgcGVzcXVpc2F9ID0gdXNlU1dSKGBodHRwczovL3d3dy50YWJuZXdzLmNvbS5ici9hcGkvdjEvY29udGVudHNgLCBmZXRjaGVyKVxuXG5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PlxuICAgIHJldHVybiAoICAgIFxuICAgICAgICA8ZGl2PiAgXG5cbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIkdFVFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwZXNxdWlzYVwiIHBsYWNlaG9sZGVyPVwiUHJvY3VyYXIgbm90aWNpYTpcIiBkZWZhdWx0VmFsdWU9e3Blc3F1aXNhfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCImIzEyODI2OTtcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICB7KGRhdGEubWFwKChtKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IG1heFdpZHRoOiBcIjkwJVwiLCBtYXJnaW46IFwiOHB4IDJ2aFwiLCBkaXNwbGF5OiBcImJsb2NrXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnByaW1hcnlcIj57bS5vd25lcl91c2VybmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge20udGl0bGV9Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cInNtYWxsXCIga2V5PXtgJHttLm93bmVyX3VzZXJuYW1lfS8ke20uc2x1Z31gfSBocmVmPXtgL3NlbGVjdGVkbmV3cy8ke20ub3duZXJfdXNlcm5hbWV9X18ke20uc2x1Z31gfT5WZXIgbWFpczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PiBcbiAgICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJIb21lIiwiZGF0YSIsImVycm9yIiwicGVzcXVpc2EiLCJmZXRjaGVyIiwiZGl2IiwiZm9ybSIsIm1ldGhvZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJtYXAiLCJtIiwic3giLCJtYXhXaWR0aCIsIm1hcmdpbiIsImRpc3BsYXkiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50IiwidGl0bGUiLCJjb2xvciIsIm93bmVyX3VzZXJuYW1lIiwiYnIiLCJzaXplIiwiaHJlZiIsInNsdWciLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardContent":
/*!********************************************!*\
  !*** external "@mui/material/CardContent" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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