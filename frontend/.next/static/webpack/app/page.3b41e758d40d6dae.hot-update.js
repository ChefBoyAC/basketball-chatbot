"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/QueryForm.js":
/*!**************************!*\
  !*** ./app/QueryForm.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QueryForm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryForm.css */ \"(app-pages-browser)/./app/QueryForm.css\");\n//components/QueryForm.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction QueryForm() {\n    _s();\n    //track getter and setter states\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //Wait for response before continuing\n    const handleSubmit = async (e)=>{\n        //Cancel event\n        e.preventDefault();\n        if (!query) return;\n        //Add user's query to the chat\n        setMessages((prev)=>[\n                ...prev,\n                {\n                    text: query,\n                    type: \"user\"\n                }\n            ]);\n        setQuery(\"\");\n        setLoading(true);\n        try {\n            //Send asynch HTTP requests to REST endpoint\n            const response = await fetch(\"http://localhost:5000/query\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query\n                })\n            });\n            if (!response.body || !response.body.getReader) {\n                const data = await response.json();\n                setMessages((prev)=>[\n                        ...prev,\n                        {\n                            text: data.response,\n                            type: \"bot\"\n                        }\n                    ]);\n                return;\n            }\n            const reader = response.body.getReader();\n            const decoder = new TextDecoder();\n            let done = false;\n            let fullResponse = \"\";\n            while(!done){\n                const { value, done: doneReading } = await reader.read();\n                done = doneReading;\n                let chunk = decoder.decode(value);\n                chunk = chunk.replace(/data:/g, \"\");\n                fullResponse += chunk;\n            }\n            //Add the full response in singular bubble\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        text: fullResponse.replace(\"\\\\s{2,}\", \" \").trim(),\n                        type: \"bot\"\n                    }\n                ]);\n        } catch (error) {\n            console.error(\"Error fetching the response:\", error.response ? error.response.data : error.message);\n            setResponse(\"There was an error processing your request.\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chatContainerRef.current) {\n            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;\n        }\n    }, [\n        messages,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"chatbot-ui\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"chatbot-container\",\n            ref: chatContainerRef,\n            children: [\n                messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"message \".concat(msg.type),\n                        children: msg.text\n                    }, index, false, {\n                        fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                        lineNumber: 85,\n                        columnNumber: 25\n                    }, this)),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"chatbot-loading\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"loading-dot\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                            lineNumber: 91,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"loading-dot\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                            lineNumber: 92,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"loading-dot\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                            lineNumber: 93,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                    lineNumber: 90,\n                    columnNumber: 29\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"chatbot-content\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"chatbot-form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: query,\n                                onChange: (e)=>setQuery(e.target.value),\n                                placeholder: \"Type your message...\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                                lineNumber: 105,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n            lineNumber: 83,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aaronchanner/Desktop/MLC/basketball-chatbot/frontend/app/QueryForm.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryForm, \"WZxlD0vvUE9WZB6+xiQA4UNQYqk=\");\n_c = QueryForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QueryForm);\nvar _c;\n$RefreshReg$(_c, \"QueryForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0M7Ozs7O2dCQUliM0MseUJBQ08sOERBQUNzQztvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7OEJBRy9CLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0s7d0JBQUtDLFVBQVV4Qzt3QkFBY2tDLFdBQVU7OzBDQUNwQyw4REFBQ087Z0NBQ0dwQyxNQUFLO2dDQUNMZSxPQUFPN0I7Z0NBQ1BtRCxVQUFVLENBQUN6QyxJQUFNVCxTQUFTUyxFQUFFMEMsTUFBTSxDQUFDdkIsS0FBSztnQ0FDeEN3QixhQUFZO2dDQUNaQyxRQUFROzs7Ozs7MENBRVosOERBQUNDO2dDQUFPekMsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5QztHQXhHU2Y7S0FBQUE7QUEwR1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1F1ZXJ5Rm9ybS5qcz8wY2FlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY29tcG9uZW50cy9RdWVyeUZvcm0uanNcblxuXCJ1c2UgY2xpZW50XCI7IFxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1F1ZXJ5Rm9ybS5jc3MnOyBcblxuXG5mdW5jdGlvbiBRdWVyeUZvcm0oKSB7XG4gICAgLy90cmFjayBnZXR0ZXIgYW5kIHNldHRlciBzdGF0ZXNcbiAgICBjb25zdFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0W3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3RbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3RbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBjaGF0Q29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgLy9XYWl0IGZvciByZXNwb25zZSBiZWZvcmUgY29udGludWluZ1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIC8vQ2FuY2VsIGV2ZW50XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIXF1ZXJ5KSByZXR1cm47IFxuXG4gICAgICAgIC8vQWRkIHVzZXIncyBxdWVyeSB0byB0aGUgY2hhdFxuICAgICAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCB7dGV4dDogcXVlcnksIHR5cGU6ICd1c2VyJ31dKTtcbiAgICAgICAgc2V0UXVlcnkoJycpOyBcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTsgXG5cbiAgICAgICAgdHJ5XG4gICAgICAgIHsgIFxuICAgICAgICAgICAgLy9TZW5kIGFzeW5jaCBIVFRQIHJlcXVlc3RzIHRvIFJFU1QgZW5kcG9pbnRcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9xdWVyeScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtxdWVyeX0pXG4gICAgICAgICAgICB9KTsgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5ib2R5IHx8ICFyZXNwb25zZS5ib2R5LmdldFJlYWRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwgeyB0ZXh0OiBkYXRhLnJlc3BvbnNlLCB0eXBlOiAnYm90JyB9XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICBcbiAgICAgICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgZnVsbFJlc3BvbnNlID0gJyc7XG4gICAgXG4gICAgICAgICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lOiBkb25lUmVhZGluZyB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgICAgICAgICBkb25lID0gZG9uZVJlYWRpbmc7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rID0gZGVjb2Rlci5kZWNvZGUodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgY2h1bmsgPSBjaHVuay5yZXBsYWNlKC9kYXRhOi9nLCcnKTsgXG5cbiAgICAgICAgICAgICAgICBmdWxsUmVzcG9uc2UgKz0gY2h1bms7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vQWRkIHRoZSBmdWxsIHJlc3BvbnNlIGluIHNpbmd1bGFyIGJ1YmJsZVxuICAgICAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwge3RleHQ6IGZ1bGxSZXNwb25zZS5yZXBsYWNlKFwiXFxcXHN7Mix9XCIsIFwiIFwiKS50cmltKCksIHR5cGU6ICdib3QnfV0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0aGUgcmVzcG9uc2U6JywgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICBzZXRSZXNwb25zZSgnVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LicpO1xuICAgICAgICB9IGZpbmFsbHkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTsgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgaWYoY2hhdENvbnRhaW5lclJlZi5jdXJyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGF0Q29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB9LCBbbWVzc2FnZXMsbG9hZGluZ10pOyBcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Ym90LXVpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjaGF0Ym90LWNvbnRhaW5lcicgcmVmPXtjaGF0Q29udGFpbmVyUmVmfT5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2BtZXNzYWdlICR7bXNnLnR5cGV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21zZy50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Ym90LWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWRvdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctZG90XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1kb3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXRib3QtY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nY2hhdGJvdC1mb3JtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICApOyBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlcnlGb3JtOyAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlF1ZXJ5Rm9ybSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY2hhdENvbnRhaW5lclJlZiIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXYiLCJ0ZXh0IiwidHlwZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UmVhZGVyIiwiZGF0YSIsImpzb24iLCJyZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJkb25lIiwiZnVsbFJlc3BvbnNlIiwidmFsdWUiLCJkb25lUmVhZGluZyIsInJlYWQiLCJjaHVuayIsImRlY29kZSIsInJlcGxhY2UiLCJ0cmltIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJtYXAiLCJtc2ciLCJpbmRleCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/QueryForm.js\n"));

/***/ })

});