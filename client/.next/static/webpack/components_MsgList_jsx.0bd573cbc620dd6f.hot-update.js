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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"../node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar MsgList = function() {\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(), _query = ref.query, _userId = _query.userId, userId = _userId === void 0 ? \"\" : _userId;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), msgs = ref1[0], setMsgs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), editingId = ref2[0], setEditingId = ref2[1];\n    var onCreate = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"post\", \"/messages\", {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error(\"something wrong\");\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onUpdate = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error(\"something wrong\");\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receviedId;\n            return _Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(userId);\n                        _ctx.next = 3;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n                            userId: userId\n                        });\n                    case 3:\n                        receviedId = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receviedId;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(msgs);\n                            newMsgs.splice(targetIndex, 1);\n                            return newMsgs;\n                        });\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var getMessages = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var msgs;\n            return _Users_kim_inbeom_React_graphql_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"get\", \"/messages\");\n                    case 2:\n                        msgs = _ctx.sent;\n                        setMsgs(msgs);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getMessages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, x), {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }), x.id, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"RodVuEFUkKY6d70hcvrF+U3Lupk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUV6QixTQUFTLEtBQUt1QixDQUFDLENBQUNoQixFQUFFO3dCQUM3Qm1CLElBQUksRUFBRTdCLE1BQU07d0JBTlAwQixDQUFDLENBQUNoQixFQUFFOzs7OzZCQU9UO2lCQUNILENBQUM7Ozs7O3FCQUNDOztvQkFDSixDQUNIO0NBQ0g7R0F0RUtaLE9BQU87O1FBR1BGLGtEQUFTOzs7QUFIVEUsS0FBQUEsT0FBTztBQXdFYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qc3g/YjU3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2ZldGNoZXJcIjtcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9IFwiXCIgfSxcbiAgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInBvc3RcIiwgXCIvbWVzc2FnZXNcIiwgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwdXRcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcihcInNvbWV0aGluZyB3cm9uZ1wiKTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2codXNlcklkKTtcbiAgICBjb25zdCByZWNldmllZElkID0gYXdhaXQgZmV0Y2hlcihcImRlbGV0ZVwiLCBgL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgdXNlcklkLFxuICAgIH0pO1xuXG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2V2aWVkSWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG5cbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoXCJnZXRcIiwgXCIvbWVzc2FnZXNcIik7XG4gICAgc2V0TXNncyhtc2dzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1lc3NhZ2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicmVjZXZpZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlcyIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n"));

/***/ })

});