webpackHotUpdate("static/development/pages/login.js",{

/***/ "./services/rest_service.ts":
/*!**********************************!*\
  !*** ./services/rest_service.ts ***!
  \**********************************/
/*! exports provided: postLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postLogin", function() { return postLogin; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./services/error.ts");




var postLogin =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(inputs) {
    var data, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = new URLSearchParams(inputs);
            _context.next = 3;
            return post("/login", data)["catch"](_error__WEBPACK_IMPORTED_MODULE_3__["catchAxiosError"]);

          case 3:
            res = _context.sent;
            console.log('==========', res);

            if (!res.error) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.error);

          case 7:
            if (!(res.data && res.data.token)) {
              _context.next = 10;
              break;
            }

            alert("this is my token: (".concat(res.data.token, ")"));
            return _context.abrupt("return");

          case 10:
            return _context.abrupt("return", "Something unexpected happened!");

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postLogin(_x) {
    return _ref.apply(this, arguments);
  };
}(); // a base configuration we can extend from

var baseConfig = {
  baseURL: "http://localhost:5000"
};

var post = function post(url, data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data, baseConfig)["catch"](_error__WEBPACK_IMPORTED_MODULE_3__["catchAxiosError"]);
};

/***/ })

})
//# sourceMappingURL=login.js.fa8ed73ece74ccf66728.hot-update.js.map