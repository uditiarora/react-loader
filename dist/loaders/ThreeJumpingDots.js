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
        global.ThreeJumpingDots = mod.exports;
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

    var ThreeJumpingDots = function ThreeJumpingDots(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'L5', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', height: props.height, width: props.width, x: '0px', y: '0px',
                viewBox: '0 0 100 100', 'enable-background': 'new 0 0 0 0', xmlSpace: 'preserve' },
            _react2.default.createElement(
                'circle',
                { fill: props.color, stroke: 'none', cx: '6', cy: '50', r: '6' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    dur: '1s',
                    type: 'translate',
                    values: '0 15 ; 0 -15; 0 15',
                    repeatCount: 'indefinite',
                    begin: '0.1' })
            ),
            _react2.default.createElement(
                'circle',
                { fill: props.color, stroke: 'none', cx: '30', cy: '50', r: '6' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    dur: '1s',
                    type: 'translate',
                    values: '0 10 ; 0 -10; 0 10',
                    repeatCount: 'indefinite',
                    begin: '0.2' })
            ),
            _react2.default.createElement(
                'circle',
                { fill: props.color, stroke: 'none', cx: '54', cy: '50', r: '6' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    dur: '1s',
                    type: 'translate',
                    values: '0 5 ; 0 -5; 0 5',
                    repeatCount: 'indefinite',
                    begin: '0.3' })
            )
        );
    };
    exports.default = ThreeJumpingDots;

    ThreeJumpingDots.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    ThreeJumpingDots.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "dots-loading"
    };
});