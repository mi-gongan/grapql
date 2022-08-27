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

/***/ "./components/MsgList.jsx":
/*!********************************!*\
  !*** ./components/MsgList.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"../node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar UserIds = [\n    \"roy\",\n    \"jay\"\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\nvar originalMsgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    };\n});\nvar MsgList = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs), msgs = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs.length + 1, \" \").concat(text)\n        };\n        originalMsgs.unshift(newMsg);\n    };\n    var onUpdate = function(text, id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n            newMsgs.splice(targetIndex, 1, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, msgs[targetIndex]), {\n                text: text\n            }));\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, x), {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id\n                    }), x.id, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"98aREoWYavyOBv5xOQhoiAi3TBY=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T1gsSUFBSSxDQUFDO1lBQ2pDLElBQU1jLE9BQU8sR0FBSSxxRkFBR2QsSUFBSSxDQUFKQTtZQUNwQmMsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPRyxPQUFPLENBQUM7U0FDaEIsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxJQUFNRSxRQUFRLEdBQUc7ZUFBTWIsWUFBWSxDQUFDLElBQUksQ0FBQztLQUFBO0lBQ3pDLHFCQUNFOzswQkFDRSw4REFBQ3JCLGlEQUFRO2dCQUFDb0MsTUFBTSxFQUFFZCxRQUFROzs7OztxQkFBSTswQkFDOUIsOERBQUNlLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzBCQUNyQnBCLElBQUksQ0FBQ1IsR0FBRyxDQUFDLFNBQUM2QixDQUFDO3lDQUNWLDhEQUFDeEMsZ0RBQU8sMEtBRUZ3QyxDQUFDO3dCQUNMWCxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCTyxRQUFRLEVBQUU7bUNBQU1BLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDMUIsRUFBRSxDQUFDO3lCQUFBO3dCQUM5QjJCLFNBQVMsRUFBRTttQ0FBTW5CLFlBQVksQ0FBQ2tCLENBQUMsQ0FBQzFCLEVBQUUsQ0FBQzt5QkFBQTt3QkFDbkM0QixTQUFTLEVBQUVyQixTQUFTLEtBQUttQixDQUFDLENBQUMxQixFQUFFO3dCQUx4QjBCLENBQUMsQ0FBQzFCLEVBQUU7Ozs7NkJBTVQ7aUJBQ0gsQ0FBQzs7Ozs7cUJBQ0M7O29CQUNKLENBQ0g7Q0FDSDtHQXhES0ksT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBMERiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzeD9iNTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVXNlcklkcyA9IFtcInJveVwiLCBcImpheVwiXTtcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5cbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuICAuZmlsbCgwKVxuICAubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXG4gIH0pKTtcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxuICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXG4gICAgfTtcbiAgICBvcmlnaW5hbE1zZ3MudW5zaGlmdChuZXdNc2cpO1xuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwidXNlU3RhdGUiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJ1bnNoaWZ0Iiwib25VcGRhdGUiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n"));

/***/ })

});