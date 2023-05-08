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
exports.id = "pages/api/send-mail";
exports.ids = ["pages/api/send-mail"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./info.js":
/*!*****************!*\
  !*** ./info.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"info\": () => (/* binding */ info)\n/* harmony export */ });\nconst info = {\n    legalName: \"Antonio Lozano\",\n    companyName: \"S&IW Copacker\",\n    description: \"Sachets y Toallitas Individuales\",\n    email: {\n        sender: \"info@notoriovs.com\",\n        recipients: [\n            \"info+siw@notoriovs.com\",\n            \"antonio@siwcopacker.com\"\n        ],\n        subject: \"Nuevo prospecto SIW\"\n    },\n    phoneNumber: \"+523339680005\",\n    whatsapp: {\n        value: \"+523339680005\",\n        message: \"Hola! Me interesa un proyecto de sachets\"\n    },\n    social: {\n        facebook: \"siwcopacker\",\n        instagram: \"siwcopacker\"\n    },\n    address: {\n        address: \"CALLE GORRION #1390\",\n        col: \"OCHO DE JULIO 1A Y 2A SECCION\",\n        cp: \"44910\",\n        city: \"GUADALAJARA\",\n        state: \"JALISCO\"\n    },\n    privacyNotice: \"/aviso-privacidad\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxJQUFJLEdBQUc7SUFDbEJDLFNBQVMsRUFBRSxnQkFBZ0I7SUFDM0JDLFdBQVcsRUFBRSxlQUFlO0lBQzVCQyxXQUFXLEVBQUUsa0NBQWtDO0lBQy9DQyxLQUFLLEVBQUU7UUFDTEMsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QkMsVUFBVSxFQUFFO1lBQUMsd0JBQXdCO1lBQUUseUJBQXlCO1NBQUM7UUFDakVDLE9BQU8sRUFBRSxxQkFBcUI7S0FDL0I7SUFDREMsV0FBVyxFQUFFLGVBQWU7SUFDNUJDLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsZUFBZTtRQUN0QkMsT0FBTyxFQUFFLDBDQUEwQztLQUNwRDtJQUNEQyxNQUFNLEVBQUU7UUFDTkMsUUFBUSxFQUFFLGFBQWE7UUFDdkJDLFNBQVMsRUFBRSxhQUFhO0tBQ3pCO0lBQ0RDLE9BQU8sRUFBRTtRQUNQQSxPQUFPLEVBQUUscUJBQXFCO1FBQzlCQyxHQUFHLEVBQUUsK0JBQStCO1FBQ3BDQyxFQUFFLEVBQUUsT0FBTztRQUNYQyxJQUFJLEVBQUUsYUFBYTtRQUNuQkMsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDREMsYUFBYSxFQUFFLG1CQUFtQjtDQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnRycy10ZW1wbGF0ZS8uL2luZm8uanM/OTQ0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5mbyA9IHtcbiAgbGVnYWxOYW1lOiBcIkFudG9uaW8gTG96YW5vXCIsXG4gIGNvbXBhbnlOYW1lOiBcIlMmSVcgQ29wYWNrZXJcIixcbiAgZGVzY3JpcHRpb246IFwiU2FjaGV0cyB5IFRvYWxsaXRhcyBJbmRpdmlkdWFsZXNcIixcbiAgZW1haWw6IHtcbiAgICBzZW5kZXI6IFwiaW5mb0Bub3RvcmlvdnMuY29tXCIsXG4gICAgcmVjaXBpZW50czogW1wiaW5mbytzaXdAbm90b3Jpb3ZzLmNvbVwiLCBcImFudG9uaW9Ac2l3Y29wYWNrZXIuY29tXCJdLFxuICAgIHN1YmplY3Q6IFwiTnVldm8gcHJvc3BlY3RvIFNJV1wiLFxuICB9LFxuICBwaG9uZU51bWJlcjogXCIrNTIzMzM5NjgwMDA1XCIsXG4gIHdoYXRzYXBwOiB7XG4gICAgdmFsdWU6IFwiKzUyMzMzOTY4MDAwNVwiLFxuICAgIG1lc3NhZ2U6IFwiSG9sYSEgTWUgaW50ZXJlc2EgdW4gcHJveWVjdG8gZGUgc2FjaGV0c1wiLFxuICB9LFxuICBzb2NpYWw6IHtcbiAgICBmYWNlYm9vazogXCJzaXdjb3BhY2tlclwiLFxuICAgIGluc3RhZ3JhbTogXCJzaXdjb3BhY2tlclwiLFxuICB9LFxuICBhZGRyZXNzOiB7XG4gICAgYWRkcmVzczogXCJDQUxMRSBHT1JSSU9OICMxMzkwXCIsXG4gICAgY29sOiBcIk9DSE8gREUgSlVMSU8gMUEgWSAyQSBTRUNDSU9OXCIsXG4gICAgY3A6IFwiNDQ5MTBcIixcbiAgICBjaXR5OiBcIkdVQURBTEFKQVJBXCIsXG4gICAgc3RhdGU6IFwiSkFMSVNDT1wiLFxuICB9LFxuICBwcml2YWN5Tm90aWNlOiBcIi9hdmlzby1wcml2YWNpZGFkXCIsXG59O1xuIl0sIm5hbWVzIjpbImluZm8iLCJsZWdhbE5hbWUiLCJjb21wYW55TmFtZSIsImRlc2NyaXB0aW9uIiwiZW1haWwiLCJzZW5kZXIiLCJyZWNpcGllbnRzIiwic3ViamVjdCIsInBob25lTnVtYmVyIiwid2hhdHNhcHAiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJzb2NpYWwiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsImFkZHJlc3MiLCJjb2wiLCJjcCIsImNpdHkiLCJzdGF0ZSIsInByaXZhY3lOb3RpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./info.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/send-mail.js":
/*!************************************!*\
  !*** ./src/pages/api/send-mail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SendMail)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../info */ \"(api)/./info.js\");\n\n\nfunction SendMail(req, res) {\n    const { method , body  } = req;\n    if (method !== \"POST\") {\n        return res.status(405).send({\n            message: \"Only POST request allowed\"\n        });\n    }\n    _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.SENDGRID_API_KEY);\n    const msgBody = `\n    <strong>${_info__WEBPACK_IMPORTED_MODULE_1__.info.email.subject}</strong>\n    <br/><br/>\n    ${Object.keys(body).map((key)=>`<div>${key}: ${body[key]}</div>`)}\n    <br/>\n    ${body.phone && `<a href=\"https://wa.me/+52${body.phone.replace(/\\+52|[()\\s-]/g, \"\") ?? \"\"}\">Enviar whatsapp</a>`}\n  `;\n    const msg = {\n        to: _info__WEBPACK_IMPORTED_MODULE_1__.info.email.recipients,\n        from: _info__WEBPACK_IMPORTED_MODULE_1__.info.email.sender,\n        subject: _info__WEBPACK_IMPORTED_MODULE_1__.info.email.subject,\n        html: msgBody\n    };\n    return _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send(msg).then((r)=>res.status(r[0].statusCode).json({\n            message: \"Email Sent\",\n            body\n        })).catch((error)=>{\n        console.log(\"Something failed\", error);\n        res.status(error.code).json(error.response.body);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlbmQtbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBQ0M7QUFHdEIsU0FBU0UsUUFBUSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN6QyxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsSUFBSSxHQUFFLEdBQUdILEdBQUc7SUFFNUIsSUFBSUUsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNyQixPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBQywyQkFBMkI7U0FBQyxDQUFDO0tBQ25FO0lBRURULCtEQUFnQixDQUFDVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUM7SUFFOUMsTUFBTUMsT0FBTyxHQUFHLENBQUM7WUFDUCxFQUFFYixxREFBa0IsQ0FBQzs7SUFFN0IsRUFBRWdCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWixJQUFJLENBQUMsQ0FBQ2EsR0FBRyxDQUFDLENBQUNDLEdBQUcsR0FBSyxDQUFDLEtBQUssRUFBRUEsR0FBRyxDQUFDLEVBQUUsRUFBRWQsSUFBSSxDQUFDYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztJQUVwRSxFQUFFZCxJQUFJLENBQUNlLEtBQUssSUFDWixDQUFDLDBCQUEwQixFQUFFZixJQUFJLENBQUNlLEtBQUssQ0FBQ0MsT0FBTyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQ2hHO0VBQ0gsQ0FBQztJQUNELE1BQU1DLEdBQUcsR0FBRztRQUNWQyxFQUFFLEVBQUV2Qix3REFBcUI7UUFDekJ5QixJQUFJLEVBQUV6QixvREFBaUI7UUFDdkJlLE9BQU8sRUFBRWYscURBQWtCO1FBQzNCMkIsSUFBSSxFQUFFZCxPQUFPO0tBQ2Q7SUFFRCxPQUFPZCwwREFBVyxDQUFDdUIsR0FBRyxDQUFDLENBQ3BCTSxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxHQUFLMUIsR0FBRyxDQUFDRyxNQUFNLENBQUN1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDNUN2QixPQUFPLEVBQUUsWUFBWTtZQUNyQkgsSUFBSTtTQUNMLENBQUMsQ0FBQyxDQUNGMkIsS0FBSyxDQUFDLENBQUNDLEtBQUssR0FBSztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVGLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDOUIsR0FBRyxDQUFDRyxNQUFNLENBQUMyQixLQUFLLENBQUNHLElBQUksQ0FBQyxDQUFDTCxJQUFJLENBQUNFLEtBQUssQ0FBQ0ksUUFBUSxDQUFDaEMsSUFBSSxDQUFDLENBQUM7S0FDbEQsQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnRycy10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9hcGkvc2VuZC1tYWlsLmpzP2ZmODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNnTWFpbCBmcm9tICdAc2VuZGdyaWQvbWFpbCc7XG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi4vLi4vLi4vaW5mbyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VuZE1haWwocmVxLCByZXMpIHtcbiAgY29uc3QgeyBtZXRob2QsIGJvZHkgfSA9IHJlcTtcblxuICBpZiAobWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLnNlbmQoe21lc3NhZ2U6J09ubHkgUE9TVCByZXF1ZXN0IGFsbG93ZWQnfSlcbiAgfVxuXG4gIHNnTWFpbC5zZXRBcGlLZXkocHJvY2Vzcy5lbnYuU0VOREdSSURfQVBJX0tFWSlcblxuICBjb25zdCBtc2dCb2R5ID0gYFxuICAgIDxzdHJvbmc+JHtpbmZvLmVtYWlsLnN1YmplY3R9PC9zdHJvbmc+XG4gICAgPGJyLz48YnIvPlxuICAgICR7T2JqZWN0LmtleXMoYm9keSkubWFwKChrZXkpID0+IGA8ZGl2PiR7a2V5fTogJHtib2R5W2tleV19PC9kaXY+YCl9XG4gICAgPGJyLz5cbiAgICAke2JvZHkucGhvbmUgJiZcbiAgICBgPGEgaHJlZj1cImh0dHBzOi8vd2EubWUvKzUyJHtib2R5LnBob25lLnJlcGxhY2UoL1xcKzUyfFsoKVxccy1dL2csICcnKSA/PyAnJ31cIj5FbnZpYXIgd2hhdHNhcHA8L2E+YFxuICAgIH1cbiAgYFxuICBjb25zdCBtc2cgPSB7XG4gICAgdG86IGluZm8uZW1haWwucmVjaXBpZW50cyxcbiAgICBmcm9tOiBpbmZvLmVtYWlsLnNlbmRlcixcbiAgICBzdWJqZWN0OiBpbmZvLmVtYWlsLnN1YmplY3QsXG4gICAgaHRtbDogbXNnQm9keSxcbiAgfVxuXG4gIHJldHVybiBzZ01haWwuc2VuZChtc2cpXG4gICAgLnRoZW4oKHIpID0+IHJlcy5zdGF0dXMoclswXS5zdGF0dXNDb2RlKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6ICdFbWFpbCBTZW50JyxcbiAgICAgIGJvZHksXG4gICAgfSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyBmYWlsZWQnLCBlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKGVycm9yLmNvZGUpLmpzb24oZXJyb3IucmVzcG9uc2UuYm9keSk7XG4gICAgfSlcbn0iXSwibmFtZXMiOlsic2dNYWlsIiwiaW5mbyIsIlNlbmRNYWlsIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlNFTkRHUklEX0FQSV9LRVkiLCJtc2dCb2R5IiwiZW1haWwiLCJzdWJqZWN0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInBob25lIiwicmVwbGFjZSIsIm1zZyIsInRvIiwicmVjaXBpZW50cyIsImZyb20iLCJzZW5kZXIiLCJodG1sIiwidGhlbiIsInIiLCJzdGF0dXNDb2RlIiwianNvbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/send-mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/send-mail.js"));
module.exports = __webpack_exports__;

})();