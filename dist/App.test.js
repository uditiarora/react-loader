(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', '@testing-library/react', './App'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('@testing-library/react'), require('./App'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.react, global.App);
    global.AppTest = mod.exports;
  }
})(this, function (_react, _react3, _App) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _App2 = _interopRequireDefault(_App);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders learn react link', function () {
    var _render = (0, _react3.render)(_react2.default.createElement(_App2.default, null)),
        getByText = _render.getByText;

    var linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});