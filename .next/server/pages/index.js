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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ News)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction News() {\n    //console.log(data)\n    const { data , error , pesquisa  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`https://www.tabnews.com.br/api/v1/contents`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"GET\",\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"pesquisa\",\n                        placeholder: \"Procurar noticia:\",\n                        defaultValue: pesquisa\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"\\uD83D\\uDD0D\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            data.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    sx: {\n                        maxWidth: \"90%\",\n                        margin: \"8px 2vh\",\n                        display: \"block\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    gutterBottom: true,\n                                    variant: \"h5\",\n                                    component: \"div\",\n                                    children: m.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    variant: \"body1\",\n                                    color: \"text.primary\",\n                                    children: m.owner_username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    children: m.slug\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                            lineNumber: 26,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            variant: \"contained\",\n                            size: \"small\",\n                            href: `${m.owner_username}/${m.slug}`,\n                            children: \"Ver mais\"\n                        }, `${m.owner_username}/${m.slug}`, false, {\n                            fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 25\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\pweb_3_unid\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n} /*\r\nexport async function getServerSideProps(context){\r\n    const {pesquisa} = context.query;\r\n    const res = await fetch(`https://www.tabnews.com.br/api/v1/contents`)\r\n  \r\n    const data = await res.json()  \r\n        return {\r\n            props: {  \r\n                data\r\n            }\r\n        }  \r\n}\r\n*/ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBRWtCO0FBQ0o7QUFDYztBQUNBO0FBQ0Y7QUFFbkMsU0FBU00sT0FBTTtJQUMxQixtQkFBbUI7SUFFbkIsTUFBTSxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFDLEdBQUdULCtDQUFNQSxDQUFDLENBQUMsMENBQTBDLENBQUMsRUFBRVU7SUFFckYsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0c7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNKLE1BQU0scUJBQU8sOERBQUNJO2tCQUFJOzs7Ozs7SUFDdkIscUJBQ0ksOERBQUNBOzswQkFFRyw4REFBQ0M7Z0JBQUtDLFFBQU87Z0JBQU1DLE9BQU87b0JBQUNDLGNBQWM7Z0JBQU07O2tDQUMzQyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLE1BQUs7d0JBQVdDLGFBQVk7d0JBQW9CQyxjQUFjWDs7Ozs7O2tDQUNqRiw4REFBQ087d0JBQU1DLE1BQUs7d0JBQVNJLE9BQU07Ozs7Ozs7Ozs7OztZQUc3QmQsS0FBS2UsR0FBRyxDQUFDLENBQUNDLGtCQUNBLDhEQUFDckIsMkRBQUlBO29CQUFDc0IsSUFBSTt3QkFBRUMsVUFBVTt3QkFBT0MsUUFBUTt3QkFBV0MsU0FBUztvQkFBTzs7c0NBQ3hELDhEQUFDdkIsa0VBQVdBOzs4Q0FDUiw4REFBQ0MsaUVBQVVBO29DQUFDdUIsWUFBWTtvQ0FBQ0MsU0FBUTtvQ0FBS0MsV0FBVTs4Q0FDM0NQLEVBQUVRLEtBQUs7Ozs7Ozs4Q0FFWiw4REFBQzFCLGlFQUFVQTtvQ0FBQ3dCLFNBQVE7b0NBQVFHLE9BQU07OENBQWdCVCxFQUFFVSxjQUFjOzs7Ozs7OENBQ2xFLDhEQUFDNUIsaUVBQVVBO29DQUFDd0IsU0FBUTtvQ0FBUUcsT0FBTTs4Q0FDN0JULEVBQUVXLElBQUk7Ozs7Ozs7Ozs7OztzQ0FHZiw4REFBQ2pDLDZEQUFNQTs0QkFBQzRCLFNBQVE7NEJBQVlNLE1BQUs7NEJBQThDQyxNQUFNLENBQUMsRUFBRWIsRUFBRVUsY0FBYyxDQUFDLENBQUMsRUFBRVYsRUFBRVcsSUFBSSxDQUFDLENBQUM7c0NBQUU7MkJBQXhFLENBQUMsRUFBRVgsRUFBRVUsY0FBYyxDQUFDLENBQUMsRUFBRVYsRUFBRVcsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdHLENBQUM7QUFFRCxlQUFleEIsUUFBUTJCLEdBQUcsRUFBRTtJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYLEVBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpe1xyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgcGVzcXVpc2F9ID0gdXNlU1dSKGBodHRwczovL3d3dy50YWJuZXdzLmNvbS5ici9hcGkvdjEvY29udGVudHNgLCBmZXRjaGVyKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgICAgIDxkaXY+ICBcclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIkdFVFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBlc3F1aXNhXCIgcGxhY2Vob2xkZXI9XCJQcm9jdXJhciBub3RpY2lhOlwiIGRlZmF1bHRWYWx1ZT17cGVzcXVpc2F9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiJiMxMjgyNjk7XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgeyhkYXRhLm1hcCgobSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IG1heFdpZHRoOiBcIjkwJVwiLCBtYXJnaW46IFwiOHB4IDJ2aFwiLCBkaXNwbGF5OiBcImJsb2NrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5wcmltYXJ5XCI+e20ub3duZXJfdXNlcm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5zbHVnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwic21hbGxcIiBrZXk9e2Ake20ub3duZXJfdXNlcm5hbWV9LyR7bS5zbHVnfWB9IGhyZWY9e2Ake20ub3duZXJfdXNlcm5hbWV9LyR7bS5zbHVnfWB9PlZlciBtYWlzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICkgICAgXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufVxyXG5cclxuXHJcblxyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xyXG4gICAgY29uc3Qge3Blc3F1aXNhfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGFibmV3cy5jb20uYnIvYXBpL3YxL2NvbnRlbnRzYClcclxuICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogeyAgXHJcbiAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxufVxyXG4qL1xyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiTmV3cyIsImRhdGEiLCJlcnJvciIsInBlc3F1aXNhIiwiZmV0Y2hlciIsImRpdiIsImZvcm0iLCJtZXRob2QiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwibWFwIiwibSIsInN4IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsImNvbXBvbmVudCIsInRpdGxlIiwiY29sb3IiLCJvd25lcl91c2VybmFtZSIsInNsdWciLCJzaXplIiwiaHJlZiIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

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