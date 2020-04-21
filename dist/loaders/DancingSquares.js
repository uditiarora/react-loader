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
        global.DancingSquares = mod.exports;
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

    var DancingSquares = function DancingSquares(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', stroke: 'none', x: '0px', y: '0px', viewBox: '0 0 30 30', 'enable-background': 'new 0 0 30 30', xmlSpace: 'preserve', width: props.width, height: props.height },
            _react2.default.createElement(
                'rect',
                { fill: props.color, width: '15', height: '15' },
                _react2.default.createElement('animateTransform', { attributeName: 'transform', attributeType: 'XML', type: 'translate', dur: '2.5', values: '0,0;15,0;15,15;0,15;0,0;', repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'rect',
                { x: '15', fill: props.color, width: '15', height: '15' },
                _react2.default.createElement('animateTransform', { attributeName: 'transform', attributeType: 'XML', type: 'translate', dur: '2.5', values: '0,0;0,15;-15,15;-15,0;0,0;', repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'rect',
                { x: '15', y: '15', fill: props.color, width: '15', height: '15' },
                _react2.default.createElement('animateTransform', { attributeName: 'transform', attributeType: 'XML', type: 'translate', dur: '2.5', values: '0,0;-15,0;-15,-15;0,-15;0,0;', repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'rect',
                { y: '15', fill: props.color, width: '15', height: '15' },
                _react2.default.createElement('animateTransform', { attributeName: 'transform', attributeType: 'XML', type: 'translate', dur: '2.5', values: '0,0;0,-15;15,-15;15,0;0,0;', repeatCount: 'indefinite' })
            )
        );
    };
    exports.default = DancingSquares;

    DancingSquares.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    DancingSquares.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "Squares-loading"
    };
});