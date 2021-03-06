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
        global.Clock = mod.exports;
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

    var Clock = function Clock(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'L2', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', height: props.height, width: props.width, x: '0px', y: '0px',
                viewBox: '0 0 100 100', 'enable-background': 'new 0 0 100 100', xmlSpace: 'preserve' },
            _react2.default.createElement('circle', { fill: 'none', stroke: props.color, 'stroke-width': '4', 'stroke-miterlimit': '10', cx: '50', cy: '50', r: '48' }),
            _react2.default.createElement(
                'line',
                { fill: 'none', 'stroke-linecap': 'round', stroke: props.color, 'stroke-width': '4', 'stroke-miterlimit': '10', x1: '50', y1: '50', x2: '85', y2: '50.5' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    dur: '2s',
                    type: 'rotate',
                    from: '0 50 50',
                    to: '360 50 50',
                    repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'line',
                { fill: 'none', 'stroke-linecap': 'round', stroke: props.color, 'stroke-width': '4', 'stroke-miterlimit': '10', x1: '50', y1: '50', x2: '49.5', y2: '74' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    dur: '15s',
                    type: 'rotate',
                    from: '0 50 50',
                    to: '360 50 50',
                    repeatCount: 'indefinite' })
            )
        );
    };
    exports.default = Clock;

    Clock.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    Clock.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "clock-loading"
    };
});