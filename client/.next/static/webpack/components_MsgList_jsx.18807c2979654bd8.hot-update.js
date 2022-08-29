"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_MsgList_jsx",{

/***/ "./components/MsgItem.jsx":
/*!********************************!*\
  !*** ./components/MsgItem.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\nvar _this = undefined;\n\n\nvar MsgItem = function(param) {\n    var id = param.id, userId = param.userId, timestamp = param.timestamp, text = param.text, onUpdate = param.onUpdate, onDelete = param.onDelete, isEditing = param.isEditing, startEdit = param.startEdit, myId = param.myId;\n    console.log(userId, myId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString(\"ko-KR\", {\n                            year: \"numeric\",\n                            month: \"numeric\",\n                            day: \"numeric\",\n                            hour: \"2-digit\",\n                            minute: \"2-digit\",\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id\n                }, void 0, false, {\n                    fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false) : text,\n            myId === userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages__buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onDelete,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\nvar _c;\n$RefreshReg$(_c, \"MsgItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBa0M7QUFFbEMsSUFBTUMsT0FBTyxHQUFHLGdCQVVWO1FBVEpDLEVBQUUsU0FBRkEsRUFBRSxFQUNGQyxNQUFNLFNBQU5BLE1BQU0sRUFDTkMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsUUFBUSxTQUFSQSxRQUFRLEVBQ1JDLFNBQVMsU0FBVEEsU0FBUyxFQUNUQyxTQUFTLFNBQVRBLFNBQVMsRUFDVEMsSUFBSSxTQUFKQSxJQUFJO0lBRUpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxNQUFNLEVBQUVPLElBQUksQ0FBQyxDQUFDO0lBQzFCLHFCQUNFLDhEQUFDRyxJQUFFO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7OzBCQUM1Qiw4REFBQ0MsSUFBRTs7b0JBQ0FaLE1BQU07b0JBQUUsR0FBRztrQ0FDWiw4REFBQ2EsS0FBRztrQ0FDRCxJQUFJQyxJQUFJLENBQUNiLFNBQVMsQ0FBQyxDQUFDYyxjQUFjLENBQUMsT0FBTyxFQUFFOzRCQUMzQ0MsSUFBSSxFQUFFLFNBQVM7NEJBQ2ZDLEtBQUssRUFBRSxTQUFTOzRCQUNoQkMsR0FBRyxFQUFFLFNBQVM7NEJBQ2RDLElBQUksRUFBRSxTQUFTOzRCQUNmQyxNQUFNLEVBQUUsU0FBUzs0QkFDakJDLE1BQU0sRUFBRSxJQUFJO3lCQUNiLENBQUM7Ozs7OzZCQUNFOzs7Ozs7cUJBQ0g7WUFFSmhCLFNBQVMsaUJBQ1I7MEJBQ0UsNEVBQUNSLGlEQUFRO29CQUFDeUIsTUFBTSxFQUFFbkIsUUFBUTtvQkFBRUQsSUFBSSxFQUFFQSxJQUFJO29CQUFFSCxFQUFFLEVBQUVBLEVBQUU7Ozs7O3lCQUFJOzZCQUNqRCxHQUVIRyxJQUFJO1lBR0xLLElBQUksS0FBS1AsTUFBTSxrQkFDZCw4REFBQ3VCLEtBQUc7Z0JBQUNaLFNBQVMsRUFBQyxtQkFBbUI7O2tDQUNoQyw4REFBQ2EsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFbkIsU0FBUztrQ0FBRSxJQUFFOzs7Ozs2QkFBUztrQ0FDdkMsOERBQUNrQixRQUFNO3dCQUFDQyxPQUFPLEVBQUVyQixRQUFRO2tDQUFFLElBQUU7Ozs7OzZCQUFTOzs7Ozs7cUJBQ2xDOzs7Ozs7YUFFTCxDQUNMO0NBQ0g7QUE1Q0tOLEtBQUFBLE9BQU87QUE4Q2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0l0ZW0uanN4PzQ3NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XG5cbmNvbnN0IE1zZ0l0ZW0gPSAoe1xuICBpZCxcbiAgdXNlcklkLFxuICB0aW1lc3RhbXAsXG4gIHRleHQsXG4gIG9uVXBkYXRlLFxuICBvbkRlbGV0ZSxcbiAgaXNFZGl0aW5nLFxuICBzdGFydEVkaXQsXG4gIG15SWQsXG59KSA9PiB7XG4gIGNvbnNvbGUubG9nKHVzZXJJZCwgbXlJZCk7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XG4gICAgICA8aDM+XG4gICAgICAgIHt1c2VySWR9e1wiIFwifVxuICAgICAgICA8c3ViPlxuICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKFwia28tS1JcIiwge1xuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBtb250aDogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvaDM+XG5cbiAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICB0ZXh0XG4gICAgICApfVxuXG4gICAgICB7bXlJZCA9PT0gdXNlcklkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtO1xuIl0sIm5hbWVzIjpbIk1zZ0lucHV0IiwiTXNnSXRlbSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIm9uVXBkYXRlIiwib25EZWxldGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJteUlkIiwiY29uc29sZSIsImxvZyIsImxpIiwiY2xhc3NOYW1lIiwiaDMiLCJzdWIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwibXV0YXRlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.jsx\n"));

/***/ })

});