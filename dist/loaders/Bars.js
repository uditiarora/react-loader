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
        global.Bars = mod.exports;
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

    var Bars = function Bars(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'L9', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', height: props.height, width: props.width, x: '0px', y: '0px',
                viewBox: '0 0 100 100', 'enable-background': 'new 0 0 0 0', xmlSpace: 'preserve' },
            _react2.default.createElement(
                'rect',
                { x: '20', y: '50', width: '4', height: '10', fill: props.color },
                _react2.default.createElement('animateTransform', { attributeType: 'xml',
                    attributeName: 'transform', type: 'translate',
                    values: '0 0; 0 20; 0 0',
                    begin: '0', dur: '0.6s', repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'rect',
                { x: '30', y: '50', width: '4', height: '10', fill: props.color },
                _react2.default.createElement('animateTransform', { attributeType: 'xml',
                    attributeName: 'transform', type: 'translate',
                    values: '0 0; 0 20; 0 0',
                    begin: '0.2s', dur: '0.6s', repeatCount: 'indefinite' })
            ),
            _react2.default.createElement(
                'rect',
                { x: '40', y: '50', width: '4', height: '10', fill: props.color },
                _react2.default.createElement('animateTransform', { attributeType: 'xml',
                    attributeName: 'transform', type: 'translate',
                    values: '0 0; 0 20; 0 0',
                    begin: '0.4s', dur: '0.6s', repeatCount: 'indefinite' })
            )
        );
    };
    exports.default = Bars;

    Bars.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    Bars.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "bars-loading"
    };
});