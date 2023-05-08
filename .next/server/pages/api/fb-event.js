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
exports.id = "pages/api/fb-event";
exports.ids = ["pages/api/fb-event"];
exports.modules = {

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./src/pages/api/fb-event.js":
/*!***********************************!*\
  !*** ./src/pages/api/fb-event.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FbEvent)\n/* harmony export */ });\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction FbEvent(req, res) {\n    const { method , headers: { referer  } , body: { eventName , eventID , user  }  } = req;\n    if (method !== \"POST\") {\n        return res.status(405).send({\n            message: \"Only POST request allowed\"\n        });\n    }\n    const { createHash  } = __webpack_require__(/*! crypto */ \"crypto\");\n    const hash = (string)=>createHash(\"SHA256\").update(string).digest(\"hex\");\n    const url = `https://graph.facebook.com/v14.0/${process.env.PIXEL}/events?access_token=${process.env.FB_CAPI_TOKEN}`;\n    const payload = {\n        data: [\n            {\n                event_name: eventName,\n                event_id: eventID,\n                event_time: Math.floor(Date.now() / 1000),\n                action_source: \"website\",\n                event_source_url: referer,\n                user_data: {\n                    fbc: (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(\"_fbc\", {\n                        req,\n                        res\n                    }),\n                    fbp: (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(\"_fbp\", {\n                        req,\n                        res\n                    }),\n                    em: [\n                        hash(user.em)\n                    ],\n                    ph: [\n                        hash(user.ph)\n                    ],\n                    client_user_agent: req.headers[\"user-agent\"]\n                }\n            }, \n        ],\n        test_event_code: \"TEST17584\"\n    };\n    return fetch(url, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(payload)\n    }).then((response)=>response.json()).then((result)=>{\n        res.status(200).json(result);\n    }).catch((error)=>console.log(\"error\", error));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ZiLWV2ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUUxQixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU0sRUFDSkMsTUFBTSxHQUNOQyxPQUFPLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEdBQ3BCQyxJQUFJLEVBQUUsRUFBRUMsU0FBUyxHQUFFQyxPQUFPLEdBQUVDLElBQUksR0FBRSxHQUNuQyxHQUFHUixHQUFHO0lBRVAsSUFBSUUsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNyQixPQUFPRCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBQywyQkFBMkI7U0FBQyxDQUFDO0tBQ25FO0lBRUQsTUFBTSxFQUFFQyxVQUFVLEdBQUUsR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBQ3hDLE1BQU1DLElBQUksR0FBRyxDQUFDQyxNQUFNLEdBQUtILFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQ0ksTUFBTSxDQUFDRCxNQUFNLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUUxRSxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRUYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLGFBQWEsQ0FBQyxDQUFDO0lBRXBILE1BQU1DLE9BQU8sR0FBRztRQUNkQyxJQUFJLEVBQUU7WUFDSjtnQkFDRUMsVUFBVSxFQUFFbkIsU0FBUztnQkFDckJvQixRQUFRLEVBQUVuQixPQUFPO2dCQUNqQm9CLFVBQVUsRUFBRUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUN6Q0MsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCQyxnQkFBZ0IsRUFBRTdCLE9BQU87Z0JBQ3pCOEIsU0FBUyxFQUFFO29CQUNUQyxHQUFHLEVBQUVyQyx1REFBUyxDQUFDLE1BQU0sRUFBRTt3QkFBQ0UsR0FBRzt3QkFBRUMsR0FBRztxQkFBQyxDQUFDO29CQUNsQ21DLEdBQUcsRUFBRXRDLHVEQUFTLENBQUMsTUFBTSxFQUFFO3dCQUFDRSxHQUFHO3dCQUFFQyxHQUFHO3FCQUFDLENBQUM7b0JBQ2xDb0MsRUFBRSxFQUFFO3dCQUFDdkIsSUFBSSxDQUFDTixJQUFJLENBQUM2QixFQUFFLENBQUM7cUJBQUM7b0JBQ25CQyxFQUFFLEVBQUU7d0JBQUN4QixJQUFJLENBQUNOLElBQUksQ0FBQzhCLEVBQUUsQ0FBQztxQkFBQztvQkFDbkJDLGlCQUFpQixFQUFFdkMsR0FBRyxDQUFDRyxPQUFPLENBQUMsWUFBWSxDQUFDO2lCQUM3QzthQUNGO1NBQ0Y7UUFDRHFDLGVBQWUsRUFBRSxXQUFXO0tBQzdCO0lBRUQsT0FBT0MsS0FBSyxDQUFDdkIsR0FBRyxFQUFFO1FBQ2hCaEIsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQUMsY0FBYyxFQUFFLGtCQUFrQjtTQUFDO1FBQzdDRSxJQUFJLEVBQUVxQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3BCLE9BQU8sQ0FBQztLQUM5QixDQUFDLENBQ0NxQixJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDRyxDQUFBQSxNQUFNLEdBQUk7UUFDZDlDLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDcUMsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztLQUM5QixDQUFDLENBQ0RDLEtBQUssQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVGLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udHJzLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL2FwaS9mYi1ldmVudC5qcz9hZGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZiRXZlbnQocmVxLCByZXMpIHtcbiAgY29uc3Qge1xuICAgIG1ldGhvZCxcbiAgICBoZWFkZXJzOiB7IHJlZmVyZXIgfSxcbiAgICBib2R5OiB7IGV2ZW50TmFtZSwgZXZlbnRJRCwgdXNlciB9XG4gIH0gPSByZXE7XG5cbiAgaWYgKG1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5zZW5kKHttZXNzYWdlOidPbmx5IFBPU1QgcmVxdWVzdCBhbGxvd2VkJ30pXG4gIH1cblxuICBjb25zdCB7IGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICBjb25zdCBoYXNoID0gKHN0cmluZykgPT4gY3JlYXRlSGFzaCgnU0hBMjU2JykudXBkYXRlKHN0cmluZykuZGlnZXN0KCdoZXgnKTtcblxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjE0LjAvJHtwcm9jZXNzLmVudi5QSVhFTH0vZXZlbnRzP2FjY2Vzc190b2tlbj0ke3Byb2Nlc3MuZW52LkZCX0NBUElfVE9LRU59YFxuXG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgZGF0YTogW1xuICAgICAge1xuICAgICAgICBldmVudF9uYW1lOiBldmVudE5hbWUsXG4gICAgICAgIGV2ZW50X2lkOiBldmVudElELFxuICAgICAgICBldmVudF90aW1lOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgYWN0aW9uX3NvdXJjZTogJ3dlYnNpdGUnLFxuICAgICAgICBldmVudF9zb3VyY2VfdXJsOiByZWZlcmVyLFxuICAgICAgICB1c2VyX2RhdGE6IHtcbiAgICAgICAgICBmYmM6IGdldENvb2tpZSgnX2ZiYycsIHtyZXEsIHJlc30pLFxuICAgICAgICAgIGZicDogZ2V0Q29va2llKCdfZmJwJywge3JlcSwgcmVzfSksXG4gICAgICAgICAgZW06IFtoYXNoKHVzZXIuZW0pXSxcbiAgICAgICAgICBwaDogW2hhc2godXNlci5waCldLFxuICAgICAgICAgIGNsaWVudF91c2VyX2FnZW50OiByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHRlc3RfZXZlbnRfY29kZTogJ1RFU1QxNzU4NCcsXG4gIH1cblxuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufSJdLCJuYW1lcyI6WyJnZXRDb29raWUiLCJGYkV2ZW50IiwicmVxIiwicmVzIiwibWV0aG9kIiwiaGVhZGVycyIsInJlZmVyZXIiLCJib2R5IiwiZXZlbnROYW1lIiwiZXZlbnRJRCIsInVzZXIiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImNyZWF0ZUhhc2giLCJyZXF1aXJlIiwiaGFzaCIsInN0cmluZyIsInVwZGF0ZSIsImRpZ2VzdCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJQSVhFTCIsIkZCX0NBUElfVE9LRU4iLCJwYXlsb2FkIiwiZGF0YSIsImV2ZW50X25hbWUiLCJldmVudF9pZCIsImV2ZW50X3RpbWUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiYWN0aW9uX3NvdXJjZSIsImV2ZW50X3NvdXJjZV91cmwiLCJ1c2VyX2RhdGEiLCJmYmMiLCJmYnAiLCJlbSIsInBoIiwiY2xpZW50X3VzZXJfYWdlbnQiLCJ0ZXN0X2V2ZW50X2NvZGUiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/fb-event.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/fb-event.js"));
module.exports = __webpack_exports__;

})();