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

/***/ "./components/MsgList.jsx":
/*!********************************!*\
  !*** ./components/MsgList.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"../node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar UserIds = [\n    \"roy\",\n    \"jay\"\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\nvar originalMsgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    };\n});\nconsole.log(JSON.stringify(originalMsgs));\nvar MsgList = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs), msgs = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs.length + 1, \" \").concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs));\n        });\n    };\n    var onUpdate = function(text, id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n            newMsgs.splice(targetIndex, 1, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, msgs[targetIndex]), {\n                text: text\n            }));\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, x), {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id\n                    }), x.id, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"98aREoWYavyOBv5xOQhoiAi3TBY=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YjU3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFVzZXJJZHMgPSBbXCJyb3lcIiwgXCJqYXlcIl07XG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuXG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcbiAgLmZpbGwoMClcbiAgLm1hcCgoXywgaSkgPT4gKHtcbiAgICBpZDogNTAgLSBpLFxuICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwIC0gaSkgKiAxMDAwICogNjAsXG4gICAgdGV4dDogYCR7NTAgLSBpfSBtb2NrIHRleHRgLFxuICB9KSk7XG5cbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTXNncykpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZSA9IChpZCkgPT4ge1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICAgIHsuLi54fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVN0YXRlIiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJtdXRhdGUiLCJ1bCIsImNsYXNzTmFtZSIsIngiLCJzdGFydEVkaXQiLCJpc0VkaXRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n"));

/***/ })

});