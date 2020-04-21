(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.Ripples = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Ripples = function Ripples(props) {
    return _react2.default.createElement(
      'svg',
      {
        width: props.width,
        height: props.height,
        viewBox: '0 0 44 44',
        xmlns: 'http://www.w3.org/2000/svg',
        stroke: props.color,
        'aria-label': props.label
      },
      _react2.default.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', strokeWidth: '1' },
        _react2.default.createElement(
          'circle',
          { cx: '22', cy: '22', r: '1' },
          _react2.default.createElement('animate', {
            attributeName: 'r',
            begin: '0s',
            dur: '1.8s',
            values: '1; 20',
            calcMode: 'spline',
            keyTimes: '0; 1',
            keySplines: '0.165, 0.84, 0.44, 1',
            repeatCount: 'indefinite'
          }),
          _react2.default.createElement('animate', {
            attributeName: 'strokeOpacity',
            begin: '0s',
            dur: '1.8s',
            values: '1; 0',
            calcMode: 'spline',
            keyTimes: '0; 1',
            keySplines: '0.3, 0.61, 0.355, 1',
            repeatCount: 'indefinite'
          })
        ),
        _react2.default.createElement(
          'circle',
          { cx: '22', cy: '22', r: '1' },
          _react2.default.createElement('animate', {
            attributeName: 'r',
            begin: '0.2s',
            dur: '1.8s',
            values: '1; 20',
            calcMode: 'spline',
            keyTimes: '0; 1',
            keySplines: '0.165, 0.84, 0.44, 1',
            repeatCount: 'indefinite'
          }),
          _react2.default.createElement('animate', {
            attributeName: 'strokeOpacity',
            begin: '0.2s',
            dur: '1.8s',
            values: '1; 0',
            calcMode: 'spline',
            keyTimes: '0; 1',
            keySplines: '0.3, 0.61, 0.355, 1',
            repeatCount: 'indefinite'
          })
        ),
        _react2.default.createElement(
          'circle',
          { cx: '22', cy: '22', r: '1' },
          _react2.default.createElement('animate', {
            attributeName: 'r',
            begin: '0.4s',
            dur: '1.8s',
            values: '1; 20',
            calcMode: 'spline',
            keyTimes: '0; 1',
            keySplines: '0.165, 0.84, 0.44, 1',
            repeatCount: 'indefinite'
          }),
          _react2.default.createElement('animate', {
            attributeName: 'strokeOpacity',
            begin: '0.4s',
            dur: '1.8s',
            values: '1; 0',
            calcMode: 'spline',
            keyTimes: '0; 1',
            keySplines: '0.3, 0.61, 0.355, 1',
            repeatCount: 'indefinite'
          })
        ),
        _react2.default.createElement(
          'circle',
          { cx: '22', cy: '22', r: '1' },
          _react2.default.createElement('animate', {
            attributeName: 'r',
            begin: '0.6s',
            dur: '1.8s',
            values: '1; 20',
            calcMode: 'spline',
            keyTimes: '0; 1',
            keySplines: '0.165, 0.84, 0.44, 1',
            repeatCount: 'indefinite'
          }),
          _react2.default.createElement('animate', {
            attributeName: 'strokeOpacity',
            begin: '0.6s',
            dur: '1.8s',
            values: '1; 0',
            calcMode: 'spline',
            keyTimes: '0; 1',
            keySplines: '0.3, 0.61, 0.355, 1',
            repeatCount: 'indefinite'
          })
        )
      )
    );
  };

  exports.default = Ripples;

  Ripples.propTypes = {
    height: _propTypes2.default.number,
    width: _propTypes2.default.number,
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };
  Ripples.defaultProps = {
    height: 100,
    width: 100,
    color: "#f76c6c",
    label: "ripples-loading"
  };
});