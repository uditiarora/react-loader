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
        global.Ring = mod.exports;
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

    var Ring = function Ring(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'L3', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', height: props.height, width: props.width, x: '0px', y: '0px',
                viewBox: '0 0 100 100', 'enable-background': 'new 0 0 0 0', xmlSpace: 'preserve' },
            _react2.default.createElement('circle', { fill: 'none', stroke: props.color, 'stroke-width': '4', cx: '50', cy: '50', r: '44', style: { opacity: 0.5 } }),
            _react2.default.createElement(
                'circle',
                { fill: props.color, stroke: 'none', 'stroke-width': '3', cx: '8', cy: '54', r: '6' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    dur: '2s',
                    type: 'rotate',
                    from: '0 50 48',
                    to: '360 50 52',
                    repeatCount: 'indefinite' })
            )
        );
    };
    exports.default = Ring;

    Ring.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    Ring.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "ring-loading"
    };
});