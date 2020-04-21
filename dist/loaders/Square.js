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
        global.Square = mod.exports;
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

    var Square = function Square(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'L6', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', height: props.height, width: props.width, x: '0px', y: '0px',
                viewBox: '0 0 100 100', 'enable-background': 'new 0 0 100 100', xmlSpace: 'preserve' },
            _react2.default.createElement(
                'rect',
                { fill: 'none', stroke: props.color, 'stroke-width': '4', x: '25', y: '25', width: '50', height: '50' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    dur: '0.5s',
                    from: '0 50 50',
                    to: '180 50 50',
                    type: 'rotate',
                    id: 'strokeBox',
                    attributeType: 'XML',
                    begin: 'rectBox.end' })
            ),
            _react2.default.createElement(
                'rect',
                { x: '27', y: '27', fill: props.color, width: '46', height: '50' },
                _react2.default.createElement('animate', {
                    attributeName: 'height',
                    dur: '1.3s',
                    attributeType: 'XML',
                    from: '50',
                    to: '0',
                    id: 'rectBox',
                    fill: 'freeze',
                    begin: '0s;strokeBox.end' })
            )
        );
    };
    exports.default = Square;

    Square.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    Square.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "ring-loading"
    };
});