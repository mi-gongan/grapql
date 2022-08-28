"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_MsgList_jsx";
exports.ids = ["components_MsgList_jsx"];
exports.modules = {

/***/ "./components/MsgInput.jsx":
/*!*********************************!*\
  !*** ./components/MsgInput.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MsgInput = ({ mutate , text =\"\" , id =undefined  })=>{\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const text = textRef.current.value;\n        textRef.current.value = \"\";\n        mutate(text, id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                defaultValue: text,\n                placeholder: \"내용을 입력하세요.\"\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgInput.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgInput.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgInput.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQStCO0FBRS9CLE1BQU1DLFFBQVEsR0FBRyxDQUFDLEVBQUVDLE1BQU0sR0FBRUMsSUFBSSxFQUFHLEVBQUUsR0FBRUMsRUFBRSxFQUFHQyxTQUFTLEdBQUUsR0FBSztJQUMxRCxNQUFNQyxPQUFPLEdBQUdOLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRTVCLE1BQU1PLFFBQVEsR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDdEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJELENBQUMsQ0FBQ0UsZUFBZSxFQUFFLENBQUM7UUFDcEIsTUFBTVAsSUFBSSxHQUFHRyxPQUFPLENBQUNLLE9BQU8sQ0FBQ0MsS0FBSztRQUNsQ04sT0FBTyxDQUFDSyxPQUFPLENBQUNDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDM0JWLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxFQUFFLENBQUMsQ0FBQztLQUNsQjtJQUVELHFCQUNFLDhEQUFDUyxNQUFJO1FBQUNDLFNBQVMsRUFBQyxpQkFBaUI7UUFBQ1AsUUFBUSxFQUFFQSxRQUFROzswQkFDbEQsOERBQUNRLFVBQVE7Z0JBQ1BDLEdBQUcsRUFBRVYsT0FBTztnQkFDWlcsWUFBWSxFQUFFZCxJQUFJO2dCQUNsQmUsV0FBVyxFQUFDLFlBQVk7Ozs7O3lCQUN4QjswQkFDRiw4REFBQ0MsUUFBTTtnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7MEJBQUMsSUFBRTs7Ozs7eUJBQVM7Ozs7OztpQkFDNUIsQ0FDUDtDQUNIO0FBRUQsaUVBQWVuQixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzeD85MzAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgdGV4dCA9IFwiXCIsIGlkID0gdW5kZWZpbmVkIH0pID0+IHtcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcbiAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICAgIG11dGF0ZSh0ZXh0LCBpZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHJlZj17dGV4dFJlZn1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZXh0fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIuuCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsImZvcm0iLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsInJlZiIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgInput.jsx\n");

/***/ }),

/***/ "./components/MsgItem.jsx":
/*!********************************!*\
  !*** ./components/MsgItem.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n\n\nconst MsgItem = ({ id , userId , timestamp , text , onUpdate , onDelete , isEditing , startEdit ,  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString(\"ko-KR\", {\n                            year: \"numeric\",\n                            month: \"numeric\",\n                            day: \"numeric\",\n                            hour: \"2-digit\",\n                            minute: \"2-digit\",\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id\n                }, void 0, false, {\n                    fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false) : text,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages__buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onDelete,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgItem.jsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFrQztBQUVsQyxNQUFNQyxPQUFPLEdBQUcsQ0FBQyxFQUNmQyxFQUFFLEdBQ0ZDLE1BQU0sR0FDTkMsU0FBUyxHQUNUQyxJQUFJLEdBQ0pDLFFBQVEsR0FDUkMsUUFBUSxHQUNSQyxTQUFTLEdBQ1RDLFNBQVMsS0FDVixpQkFDQyw4REFBQ0MsSUFBRTtRQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzswQkFDNUIsOERBQUNDLElBQUU7O29CQUNBVCxNQUFNO29CQUFFLEdBQUc7a0NBQ1osOERBQUNVLEtBQUc7a0NBQ0QsSUFBSUMsSUFBSSxDQUFDVixTQUFTLENBQUMsQ0FBQ1csY0FBYyxDQUFDLE9BQU8sRUFBRTs0QkFDM0NDLElBQUksRUFBRSxTQUFTOzRCQUNmQyxLQUFLLEVBQUUsU0FBUzs0QkFDaEJDLEdBQUcsRUFBRSxTQUFTOzRCQUNkQyxJQUFJLEVBQUUsU0FBUzs0QkFDZkMsTUFBTSxFQUFFLFNBQVM7NEJBQ2pCQyxNQUFNLEVBQUUsSUFBSTt5QkFDYixDQUFDOzs7OztpQ0FDRTs7Ozs7O3lCQUNIO1lBRUpiLFNBQVMsaUJBQ1I7MEJBQ0UsNEVBQUNSLGlEQUFRO29CQUFDc0IsTUFBTSxFQUFFaEIsUUFBUTtvQkFBRUQsSUFBSSxFQUFFQSxJQUFJO29CQUFFSCxFQUFFLEVBQUVBLEVBQUU7Ozs7OzZCQUFJOzZCQUNqRCxHQUVIRyxJQUFJOzBCQUdOLDhEQUFDa0IsS0FBRztnQkFBQ1osU0FBUyxFQUFDLG1CQUFtQjs7a0NBQ2hDLDhEQUFDYSxRQUFNO3dCQUFDQyxPQUFPLEVBQUVoQixTQUFTO2tDQUFFLElBQUU7Ozs7O2lDQUFTO2tDQUN2Qyw4REFBQ2UsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFbEIsUUFBUTtrQ0FBRSxJQUFFOzs7OztpQ0FBUzs7Ozs7O3lCQUNsQzs7Ozs7O2lCQUNIO0FBR1AsaUVBQWVOLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qc3g/NDc2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcblxuY29uc3QgTXNnSXRlbSA9ICh7XG4gIGlkLFxuICB1c2VySWQsXG4gIHRpbWVzdGFtcCxcbiAgdGV4dCxcbiAgb25VcGRhdGUsXG4gIG9uRGVsZXRlLFxuICBpc0VkaXRpbmcsXG4gIHN0YXJ0RWRpdCxcbn0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XG4gICAgPGgzPlxuICAgICAge3VzZXJJZH17XCIgXCJ9XG4gICAgICA8c3ViPlxuICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZyhcImtvLUtSXCIsIHtcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtb250aDogXCJudW1lcmljXCIsXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICA8L3N1Yj5cbiAgICA8L2gzPlxuXG4gICAge2lzRWRpdGluZyA/IChcbiAgICAgIDw+XG4gICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uVXBkYXRlfSB0ZXh0PXt0ZXh0fSBpZD17aWR9IC8+XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgdGV4dFxuICAgICl9XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XG4iXSwibmFtZXMiOlsiTXNnSW5wdXQiLCJNc2dJdGVtIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0Iiwib25VcGRhdGUiLCJvbkRlbGV0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsImxpIiwiY2xhc3NOYW1lIiwiaDMiLCJzdWIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwibXV0YXRlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.jsx\n");

/***/ }),

/***/ "./components/MsgList.jsx":
/*!********************************!*\
  !*** ./components/MsgList.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserIds = [\n    \"roy\",\n    \"jay\"\n];\nconst getRandomUserId = ()=>UserIds[Math.round(Math.random())];\nconst originalMsgs = Array(50).fill(0).map((_, i)=>({\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: `${50 - i} mock text`\n    }));\nconst MsgList = ()=>{\n    const { 0: msgs , 1: setMsgs  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs);\n    const { 0: editingId , 1: setEditingId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: `${msgs.length + 1} ${text}`\n        };\n        setMsgs([\n            newMsg,\n            ...msgs\n        ]);\n    };\n    const onUpdate = (text, id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, {\n                ...msgs[targetIndex],\n                text\n            });\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const onDelete = (id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const doneEdit = ()=>setEditingId(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        onDelete: ()=>onDelete(x.id),\n                        startEdit: ()=>setEditingId(x.id),\n                        isEditing: editingId === x.id\n                    }, x.id, false, {\n                        fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/kim-inbeom/React/graphql/client/components/MsgList.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFnQztBQUNFO0FBQ0Q7QUFFakMsTUFBTUcsT0FBTyxHQUFHO0lBQUMsS0FBSztJQUFFLEtBQUs7Q0FBQztBQUM5QixNQUFNQyxlQUFlLEdBQUcsSUFBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRWhFLE1BQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUMzQkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQQyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUssQ0FBQztRQUNkQyxFQUFFLEVBQUUsRUFBRSxHQUFHRCxDQUFDO1FBQ1ZFLE1BQU0sRUFBRVgsZUFBZSxFQUFFO1FBQ3pCWSxTQUFTLEVBQUUsYUFBYSxHQUFHLENBQUMsRUFBRSxHQUFHSCxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUMvQ0ksSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUdKLENBQUMsQ0FBQyxVQUFVLENBQUM7S0FDNUIsQ0FBQyxDQUFDO0FBRUwsTUFBTUssT0FBTyxHQUFHLElBQU07SUFDcEIsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSWxCLCtDQUFRLENBQUNNLFlBQVksQ0FBQztJQUM5QyxNQUFNLEtBQUNhLFNBQVMsTUFBRUMsWUFBWSxNQUFJcEIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFaEQsTUFBTXFCLFFBQVEsR0FBRyxDQUFDTixJQUFJLEdBQUs7UUFDekIsTUFBTU8sTUFBTSxHQUFHO1lBQ2JWLEVBQUUsRUFBRUssSUFBSSxDQUFDTSxNQUFNLEdBQUcsQ0FBQztZQUNuQlYsTUFBTSxFQUFFWCxlQUFlLEVBQUU7WUFDekJZLFNBQVMsRUFBRVUsSUFBSSxDQUFDQyxHQUFHLEVBQUU7WUFDckJWLElBQUksRUFBRSxDQUFDLEVBQUVFLElBQUksQ0FBQ00sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUVSLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBQ0RHLE9BQU8sQ0FBQztZQUFDSSxNQUFNO2VBQUtMLElBQUk7U0FBQyxDQUFDLENBQUM7S0FDNUI7SUFFRCxNQUFNUyxRQUFRLEdBQUcsQ0FBQ1gsSUFBSSxFQUFFSCxFQUFFLEdBQUs7UUFDN0JNLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLEdBQUs7WUFDaEIsTUFBTVUsV0FBVyxHQUFHVixJQUFJLENBQUNXLFNBQVMsQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ2pCLEVBQUUsS0FBS0EsRUFBRSxDQUFDO1lBQzFELElBQUllLFdBQVcsR0FBRyxDQUFDLEVBQUUsT0FBT1YsSUFBSSxDQUFDO1lBQ2pDLE1BQU1hLE9BQU8sR0FBRzttQkFBSWIsSUFBSTthQUFDO1lBQ3pCYSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0osV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFDN0IsR0FBR1YsSUFBSSxDQUFDVSxXQUFXLENBQUM7Z0JBQ3BCWixJQUFJO2FBQ0wsQ0FBQyxDQUFDO1lBQ0gsT0FBT2UsT0FBTyxDQUFDO1NBQ2hCLENBQUMsQ0FBQztRQUNIRSxRQUFRLEVBQUUsQ0FBQztLQUNaO0lBRUQsTUFBTUMsUUFBUSxHQUFHLENBQUNyQixFQUFFLEdBQUs7UUFDdkJNLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLEdBQUs7WUFDaEIsTUFBTVUsV0FBVyxHQUFHVixJQUFJLENBQUNXLFNBQVMsQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ2pCLEVBQUUsS0FBS0EsRUFBRSxDQUFDO1lBQzFELElBQUllLFdBQVcsR0FBRyxDQUFDLEVBQUUsT0FBT1YsSUFBSSxDQUFDO1lBQ2pDLE1BQU1hLE9BQU8sR0FBRzttQkFBSWIsSUFBSTthQUFDO1lBQ3pCYSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0osV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU9HLE9BQU8sQ0FBQztTQUNoQixDQUFDLENBQUM7S0FDSjtJQUVELE1BQU1FLFFBQVEsR0FBRyxJQUFNWixZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3pDLHFCQUNFOzswQkFDRSw4REFBQ3JCLGlEQUFRO2dCQUFDbUMsTUFBTSxFQUFFYixRQUFROzs7Ozt5QkFBSTswQkFDOUIsOERBQUNjLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzBCQUNyQm5CLElBQUksQ0FBQ1IsR0FBRyxDQUFDLENBQUM0QixDQUFDLGlCQUNWLDhEQUFDdkMsZ0RBQU87d0JBRUwsR0FBR3VDLENBQUM7d0JBQ0xYLFFBQVEsRUFBRUEsUUFBUTt3QkFDbEJPLFFBQVEsRUFBRSxJQUFNQSxRQUFRLENBQUNJLENBQUMsQ0FBQ3pCLEVBQUUsQ0FBQzt3QkFDOUIwQixTQUFTLEVBQUUsSUFBTWxCLFlBQVksQ0FBQ2lCLENBQUMsQ0FBQ3pCLEVBQUUsQ0FBQzt3QkFDbkMyQixTQUFTLEVBQUVwQixTQUFTLEtBQUtrQixDQUFDLENBQUN6QixFQUFFO3VCQUx4QnlCLENBQUMsQ0FBQ3pCLEVBQUU7Ozs7aUNBTVQsQ0FDRjs7Ozs7eUJBQ0M7O29CQUNKLENBQ0g7Q0FDSDtBQUVELGlFQUFlSSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanN4P2I1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBVc2VySWRzID0gW1wicm95XCIsIFwiamF5XCJdO1xuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcblxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXG4gIC5maWxsKDApXG4gIC5tYXAoKF8sIGkpID0+ICh7XG4gICAgaWQ6IDUwIC0gaSxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbiAgfSkpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MoW25ld01zZywgLi4ubXNnc10pO1xuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwidXNlU3RhdGUiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJtdXRhdGUiLCJ1bCIsImNsYXNzTmFtZSIsIngiLCJzdGFydEVkaXQiLCJpc0VkaXRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ })

};
;