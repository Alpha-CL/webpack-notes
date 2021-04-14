"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var A = /*#__PURE__*/function () {
  function A() {
    var b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    (0, _classCallCheck2.default)(this, A);
    this.prop1 = 1;

    this.method2 = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
    };

    this.prop2 = b;
  }

  (0, _createClass2.default)(A, [{
    key: "method1",
    value: function method1() {}
  }], [{
    key: "method3",
    value: function method3() {}
  }, {
    key: "method4",
    value: function method4() {}
  }]);
  return A;
}();

function B() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(3);
    });
  });
}

function C() {
  return _C.apply(this, arguments);
}

function _C() {
  _C = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var b, c;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return B();

          case 2:
            b = _context.sent;
            _context.next = 5;
            return B();

          case 5:
            c = _context.sent;
            return _context.abrupt("return", b + c);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _C.apply(this, arguments);
}

B().then(function (data) {});
