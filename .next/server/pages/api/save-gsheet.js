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
exports.id = "pages/api/save-gsheet";
exports.ids = ["pages/api/save-gsheet"];
exports.modules = {

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "(api)/./src/pages/api/save-gsheet.js":
/*!**************************************!*\
  !*** ./src/pages/api/save-gsheet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SaveGsheet)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SaveGsheet(req, res) {\n    const { method , body  } = req;\n    if (method !== \"POST\") {\n        return res.status(405).send({\n            message: \"Only POST request allowed\"\n        });\n    }\n    const auth = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.GoogleAuth({\n        credentials: {\n            client_email: process.env.GOOGLE_CLIENT_EMAIL,\n            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, \"\\n\")\n        },\n        scopes: [\n            \"https://www.googleapis.com/auth/drive\",\n            \"https://www.googleapis.com/auth/drive.file\",\n            \"https://www.googleapis.com/auth/spreadsheets\", \n        ]\n    });\n    const sheets = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n        auth,\n        version: \"v4\"\n    });\n    return sheets.spreadsheets.values.append({\n        spreadsheetId: process.env.GOOGLE_SHEET_ID,\n        range: \"A1:E1\",\n        valueInputOption: \"USER_ENTERED\",\n        requestBody: {\n            values: [\n                Object.keys(body).map((key)=>body[key])\n            ]\n        }\n    }).then((r)=>res.status(200).json({\n            data: r.data\n        })).catch((err)=>{\n        res.status(500).send({\n            message: \"Something went wrong\",\n            err\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NhdmUtZ3NoZWV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUVyQixTQUFTQyxVQUFVLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzNDLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxJQUFJLEdBQUUsR0FBR0gsR0FBRztJQUU1QixJQUFJRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3JCLE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLDJCQUEyQjtTQUFFLENBQUMsQ0FBQztLQUN2RTtJQUVELE1BQU1DLElBQUksR0FBRyxJQUFJVCw4REFBc0IsQ0FBQztRQUN0Q1csV0FBVyxFQUFFO1lBQ1hDLFlBQVksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQjtZQUM3Q0MsV0FBVyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csa0JBQWtCLEVBQUVDLE9BQU8sU0FBUyxJQUFJLENBQUM7U0FDbkU7UUFDREMsTUFBTSxFQUFFO1lBQ04sdUNBQXVDO1lBQ3ZDLDRDQUE0QztZQUM1Qyw4Q0FBOEM7U0FDL0M7S0FDRixDQUFDO0lBQ0YsTUFBTUMsTUFBTSxHQUFHcEIscURBQWEsQ0FBQztRQUMzQlMsSUFBSTtRQUNKWSxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFFRixPQUFPRCxNQUFNLENBQUNFLFlBQVksQ0FBQ0MsTUFBTSxDQUM5QkMsTUFBTSxDQUFDO1FBQ05DLGFBQWEsRUFBRVosT0FBTyxDQUFDQyxHQUFHLENBQUNZLGVBQWU7UUFDMUNDLEtBQUssRUFBRSxPQUFPO1FBQ2RDLGdCQUFnQixFQUFFLGNBQWM7UUFDaENDLFdBQVcsRUFBRTtZQUNYTixNQUFNLEVBQUU7Z0JBQUNPLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMUIsSUFBSSxDQUFDLENBQUMyQixHQUFHLENBQUMsQ0FBQ0MsR0FBRyxHQUFLNUIsSUFBSSxDQUFDNEIsR0FBRyxDQUFDLENBQUM7YUFBQztTQUNwRDtLQUNGLENBQUMsQ0FDREMsSUFBSSxDQUFDLENBQUNDLENBQUMsR0FBS2hDLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOEIsSUFBSSxDQUFDO1lBQUVDLElBQUksRUFBRUYsQ0FBQyxDQUFDRSxJQUFJO1NBQUUsQ0FBQyxDQUFDLENBQ25EQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1FBQ2RwQyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxzQkFBc0I7WUFBRStCLEdBQUc7U0FBRSxDQUFDLENBQUM7S0FDaEUsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udHJzLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL2FwaS9zYXZlLWdzaGVldC5qcz9mNjc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdvb2dsZSB9IGZyb20gXCJnb29nbGVhcGlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmVHc2hlZXQocmVxLCByZXMpIHtcbiAgY29uc3QgeyBtZXRob2QsIGJvZHkgfSA9IHJlcTtcblxuICBpZiAobWV0aG9kICE9PSBcIlBPU1RcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuc2VuZCh7IG1lc3NhZ2U6IFwiT25seSBQT1NUIHJlcXVlc3QgYWxsb3dlZFwiIH0pO1xuICB9XG5cbiAgY29uc3QgYXV0aCA9IG5ldyBnb29nbGUuYXV0aC5Hb29nbGVBdXRoKHtcbiAgICBjcmVkZW50aWFsczoge1xuICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0VNQUlMLFxuICAgICAgcHJpdmF0ZV9rZXk6IHByb2Nlc3MuZW52LkdPT0dMRV9QUklWQVRFX0tFWT8ucmVwbGFjZSgvXFxcXG4vZywgXCJcXG5cIiksXG4gICAgfSxcbiAgICBzY29wZXM6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZVwiLFxuICAgICAgXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLmZpbGVcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHNcIixcbiAgICBdLFxuICB9KTtcbiAgY29uc3Qgc2hlZXRzID0gZ29vZ2xlLnNoZWV0cyh7XG4gICAgYXV0aCxcbiAgICB2ZXJzaW9uOiBcInY0XCIsXG4gIH0pO1xuXG4gIHJldHVybiBzaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlc1xuICAgIC5hcHBlbmQoe1xuICAgICAgc3ByZWFkc2hlZXRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX1NIRUVUX0lELFxuICAgICAgcmFuZ2U6IFwiQTE6RTFcIixcbiAgICAgIHZhbHVlSW5wdXRPcHRpb246IFwiVVNFUl9FTlRFUkVEXCIsXG4gICAgICByZXF1ZXN0Qm9keToge1xuICAgICAgICB2YWx1ZXM6IFtPYmplY3Qua2V5cyhib2R5KS5tYXAoKGtleSkgPT4gYm9keVtrZXldKV0sXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oKHIpID0+IHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogci5kYXRhIH0pKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiwgZXJyIH0pO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImdvb2dsZSIsIlNhdmVHc2hlZXQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5Iiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJhdXRoIiwiR29vZ2xlQXV0aCIsImNyZWRlbnRpYWxzIiwiY2xpZW50X2VtYWlsIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfRU1BSUwiLCJwcml2YXRlX2tleSIsIkdPT0dMRV9QUklWQVRFX0tFWSIsInJlcGxhY2UiLCJzY29wZXMiLCJzaGVldHMiLCJ2ZXJzaW9uIiwic3ByZWFkc2hlZXRzIiwidmFsdWVzIiwiYXBwZW5kIiwic3ByZWFkc2hlZXRJZCIsIkdPT0dMRV9TSEVFVF9JRCIsInJhbmdlIiwidmFsdWVJbnB1dE9wdGlvbiIsInJlcXVlc3RCb2R5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInRoZW4iLCJyIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/save-gsheet.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/save-gsheet.js"));
module.exports = __webpack_exports__;

})();