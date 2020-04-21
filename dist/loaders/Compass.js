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
    global.Compass = mod.exports;
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

  var Compass = function Compass(props) {
    return _react2.default.createElement(
      'svg',
      { 'class': 'preloader', xmlns: 'http://www.w3.org/2000/svg', xmlSpace: 'preserve', width: props.width, height: props.height, version: '1.1', fill: props.color,
        viewBox: '0 0 7500 7500',
        xmlnsXlink: 'http://www.w3.org/1999/xlink' },
      _react2.default.createElement(
        'g',
        { id: 'arrows' },
        _react2.default.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', from: '0 3750 3750', to: '360 3750 3750', dur: '1.5s', repeatCount: 'indefinite' }),
        _react2.default.createElement('polygon', { 'class': 'north', points: '4417,1268 4494,2617 4563,3966 3750,3750 2937,3534 3674,2401 ' }),
        _react2.default.createElement('polygon', { 'class': 'south', points: '3083,6232 3006,4883 2937,3534 3750,3750 4563,3966 3826,5099 ' })
      ),
      _react2.default.createElement('path', { 'class': 'border', d: 'M3750 0c1035,0 1972,420 2655,1095 675,682 1095,1620 1095,2655 0,1035 -420,1972 -1095,2655 -682,675 -1620,1095 -2655,1095 -1035,0 -1972,-420 -2655,-1095 -675,-682 -1095,-1620 -1095,-2655 0,-1035 420,-1972 1095,-2655 682,-675 1620,-1095 2655,-1095zm0 909l-170 -350c-817,43 -1547,393 -2088,933 -540,541 -890,1271 -933,2088l350 170 -350 170c43,817 393,1547 933,2088 541,540 1271,890 2088,933l170 -350 170 350c817,-43 1547,-393 2088,-933 540,-541 890,-1271 933,-2088l-350 -170 350 -170c-43,-817 -393,-1547 -933,-2088 -541,-540 -1271,-890 -2088,-933l-170 350z' })
    );
  };
  exports.default = Compass;

  Compass.propTypes = {
    height: _propTypes2.default.number,
    width: _propTypes2.default.number,
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };
  Compass.defaultProps = {
    height: 100,
    width: 100,
    color: "#f76c6c",
    label: "compass-loading"
  };
});