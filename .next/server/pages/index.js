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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stack */ \"@mui/material/Stack\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Skeleton */ \"@mui/material/Skeleton\");\n/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Modal */ \"@mui/material/Modal\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n//Skeleton\n\n//modal\n\n\nfunction Home() {\n    const { data , error , pesquisa  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`https://www.tabnews.com.br/api/v1/contents`, fetcher);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7___default()), {\n            spacing: 1,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    variant: \"rectangular\",\n                    width: \"100%\",\n                    height: 80\n                }, void 0, false, {\n                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    variant: \"rectangular\",\n                    width: \"100%\",\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    variant: \"rectangular\",\n                    width: \"100%\",\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    variant: \"rectangular\",\n                    width: \"100%\",\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    variant: \"rectangular\",\n                    width: \"100%\",\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    variant: \"rectangular\",\n                    width: \"100%\",\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"GET\",\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        type: \"text\",\n                        label: \"Pesquise por autor\",\n                        variant: \"outlined\",\n                        defaultValue: pesquisa\n                    }, void 0, false, {\n                        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"\\uD83D\\uDD0D\"\n                        }, void 0, false, {\n                            fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            data.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    spacing: \"10px\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        onClick: handleOpen,\n                        sx: {\n                            maxWidth: \"100%\",\n                            margin: \"8px 2vh\",\n                            display: \"block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    gutterBottom: true,\n                                    variant: \"h5\",\n                                    component: \"div\",\n                                    children: m.title\n                                }, void 0, false, {\n                                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 41\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    variant: \"body1\",\n                                    color: \"text.primary\",\n                                    children: m.owner_username\n                                }, void 0, false, {\n                                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 41\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    children: [\n                                        m.title,\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 41\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 41\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    variant: \"contained\",\n                                    size: \"small\",\n                                    href: `/selectednews/${m.owner_username}__${m.slug}`,\n                                    children: \"Ver mais\"\n                                }, `${m.owner_username}/${m.slug}`, false, {\n                                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 41\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 37\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 25\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/david/Documentos/Workspace/pweb_3_unid/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsRUFBRTtJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XG5cbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuLy9Ta2VsZXRvblxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2tlbGV0b24nO1xuXG4vL21vZGFsXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Nb2RhbCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgcGVzcXVpc2F9ID0gdXNlU1dSKGBodHRwczovL3d3dy50YWJuZXdzLmNvbS5ici9hcGkvdjEvY29udGVudHNgLCBmZXRjaGVyKVxuXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7XG5cblxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG4gICAgaWYgKCFkYXRhKSByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0YW5ndWxhclwiIHdpZHRoPXsnMTAwJSd9IGhlaWdodD17ODB9IC8+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0YW5ndWxhclwiIHdpZHRoPXsnMTAwJSd9IGhlaWdodD17MTAwfSAvPlxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdGFuZ3VsYXJcIiB3aWR0aD17JzEwMCUnfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3Rhbmd1bGFyXCIgd2lkdGg9eycxMDAlJ30gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0YW5ndWxhclwiIHdpZHRoPXsnMTAwJSd9IGhlaWdodD17MTAwfSAvPlxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdGFuZ3VsYXJcIiB3aWR0aD17JzEwMCUnfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgcmV0dXJuICggICAgXG4gICAgICAgIDxkaXY+ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiR0VUXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiUGVzcXVpc2UgcG9yIGF1dG9yXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgZGVmYXVsdFZhbHVlPXtwZXNxdWlzYX0vPlxuICAgICAgICAgICAgICAgIDxCdXR0b24+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIiYjMTI4MjY5O1wiPjwvaW5wdXQ+PC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIHsoZGF0YS5tYXAoKG0pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCIxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgb25DbGljaz17aGFuZGxlT3Blbn0gc3g9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCBtYXJnaW46IFwiOHB4IDJ2aFwiLCBkaXNwbGF5OiBcImJsb2NrXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQucHJpbWFyeVwiPnttLm93bmVyX3VzZXJuYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttLnRpdGxlfS4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJzbWFsbFwiIGtleT17YCR7bS5vd25lcl91c2VybmFtZX0vJHttLnNsdWd9YH0gaHJlZj17YC9zZWxlY3RlZG5ld3MvJHttLm93bmVyX3VzZXJuYW1lfV9fJHttLnNsdWd9YH0+VmVyIG1haXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+IFxuICAgIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBqc29uO1xufSAiXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiU3RhY2siLCJUZXh0RmllbGQiLCJTa2VsZXRvbiIsIk1vZGFsIiwiQm94IiwiSG9tZSIsImRhdGEiLCJlcnJvciIsInBlc3F1aXNhIiwiZmV0Y2hlciIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiZGl2Iiwic3BhY2luZyIsInZhcmlhbnQiLCJ3aWR0aCIsImhlaWdodCIsImZvcm0iLCJtZXRob2QiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJsYWJlbCIsImRlZmF1bHRWYWx1ZSIsImlucHV0IiwidmFsdWUiLCJtYXAiLCJtIiwib25DbGljayIsInN4IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZ3V0dGVyQm90dG9tIiwiY29tcG9uZW50IiwidGl0bGUiLCJjb2xvciIsIm93bmVyX3VzZXJuYW1lIiwiYnIiLCJzaXplIiwiaHJlZiIsInNsdWciLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

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

/***/ "@mui/material/Modal":
/*!**************************************!*\
  !*** external "@mui/material/Modal" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ "@mui/material/Skeleton":
/*!*****************************************!*\
  !*** external "@mui/material/Skeleton" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Skeleton");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

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