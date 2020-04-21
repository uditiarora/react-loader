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
        global.FallingBars = mod.exports;
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

    var FallingBars = function FallingBars(props) {
        return _react2.default.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', width: props.width, height: props.height },
            _react2.default.createElement(
                'rect',
                { y: '25', width: '10', height: '50', rx: '4', ry: '4', fill: props.color },
                _react2.default.createElement('animate', { attributeName: 'x', values: '10;100', dur: '1.2s', repeatCount: 'indefinite' }),
                _react2.default.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', from: '0 10 70', to: '-60 100 70', dur: '1.2s', repeatCount: 'indefinite' }),
                _react2.default.createElement('animate', { attributeName: 'opacity', values: '0;1;0', dur: '1.2s', repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'rect',
                { y: '25', width: '10', height: '50', rx: '4', ry: '4', fill: props.color },
                _react2.default.createElement('animate', { attributeName: 'x', values: '10;100', dur: '1.2s', begin: '0.4s', repeatCount: 'indefinite' }),
                _react2.default.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', from: '0 10 70', to: '-60 100 70', dur: '1.2s', begin: '0.4s', repeatCount: 'indefinite' }),
                _react2.default.createElement('animate', { attributeName: 'opacity', values: '0;1;0', dur: '1.2s', begin: '0.4s', repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'rect',
                { y: '25', width: '10', height: '50', rx: '4', ry: '4', fill: props.color },
                _react2.default.createElement('animate', { attributeName: 'x', values: '10;100', dur: '1.2s', begin: '0.8s', repeatCount: 'indefinite' }),
                _react2.default.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', from: '0 10 70', to: '-60 100 70', dur: '1.2s', begin: '0.8s', repeatCount: 'indefinite' }),
                _react2.default.createElement('animate', { attributeName: 'opacity', values: '0;1;0', dur: '1.2s', begin: '0.8s', repeatCount: 'indefinite' })
            )
        );
    };

    exports.default = FallingBars;

    FallingBars.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    FallingBars.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "bars-loading"
    };
});