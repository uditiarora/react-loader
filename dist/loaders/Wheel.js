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
        global.Wheel = mod.exports;
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

    var Wheel = function Wheel(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'L1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', height: props.height, width: props.width, x: '0px', y: '0px', viewBox: '0 0 100 100', 'enable-background': 'new 0 0 100 100', xmlSpace: 'preserve' },
            _react2.default.createElement(
                'circle',
                { fill: 'none', stroke: props.color, 'stroke-width': '6', 'stroke-miterlimit': '15', 'stroke-dasharray': '14.2472,14.2472', cx: '50', cy: '50', r: '47' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    attributeType: 'XML',
                    type: 'rotate',
                    dur: '5s',
                    from: '0 50 50',
                    to: '360 50 50',
                    repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'circle',
                { fill: 'none', stroke: props.color, 'stroke-width': '1', 'stroke-miterlimit': '10', 'stroke-dasharray': '10,10', cx: '50', cy: '50', r: '39' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    attributeType: 'XML',
                    type: 'rotate',
                    dur: '5s',
                    from: '0 50 50',
                    to: '-360 50 50',
                    repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'g',
                { fill: props.color },
                _react2.default.createElement(
                    'rect',
                    { x: '30', y: '35', width: '5', height: '30' },
                    _react2.default.createElement('animateTransform', {
                        attributeName: 'transform',
                        dur: '1s',
                        type: 'translate',
                        values: '0 5 ; 0 -5; 0 5',
                        repeatCount: 'indefinite',
                        begin: '0.1' })
                ),
                _react2.default.createElement(
                    'rect',
                    { x: '40', y: '35', width: '5', height: '30' },
                    _react2.default.createElement('animateTransform', {
                        attributeName: 'transform',
                        dur: '1s',
                        type: 'translate',
                        values: '0 5 ; 0 -5; 0 5',
                        repeatCount: 'indefinite',
                        begin: '0.2' })
                ),
                _react2.default.createElement(
                    'rect',
                    { x: '50', y: '35', width: '5', height: '30' },
                    _react2.default.createElement('animateTransform', {
                        attributeName: 'transform',
                        dur: '1s',
                        type: 'translate',
                        values: '0 5 ; 0 -5; 0 5',
                        repeatCount: 'indefinite',
                        begin: '0.3' })
                ),
                _react2.default.createElement(
                    'rect',
                    { x: '60', y: '35', width: '5', height: '30' },
                    _react2.default.createElement('animateTransform', {
                        attributeName: 'transform',
                        dur: '1s',
                        type: 'translate',
                        values: '0 5 ; 0 -5; 0 5',
                        repeatCount: 'indefinite',
                        begin: '0.4' })
                ),
                _react2.default.createElement(
                    'rect',
                    { x: '70', y: '35', width: '5', height: '30' },
                    _react2.default.createElement('animateTransform', {
                        attributeName: 'transform',
                        dur: '1s',
                        type: 'translate',
                        values: '0 5 ; 0 -5; 0 5',
                        repeatCount: 'indefinite',
                        begin: '0.5' })
                )
            )
        );
    };

    exports.default = Wheel;

    Wheel.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    Wheel.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "wheel-loading"
    };
});