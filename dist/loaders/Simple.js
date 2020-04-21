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
        global.Simple = mod.exports;
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

    var Simple = function Simple(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'L9', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: props.width, height: props.height, x: '0px', y: '0px',
                viewBox: '0 0 100 100', 'enable-background': 'new 0 0 0 0', xmlSpace: 'preserve' },
            _react2.default.createElement(
                'path',
                { fill: props.color, d: 'M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50' },
                _react2.default.createElement('animateTransform', {
                    attributeName: 'transform',
                    attributeType: 'XML',
                    type: 'rotate',
                    dur: '1s',
                    from: '0 50 50',
                    to: '360 50 50',
                    repeatCount: 'indefinite' })
            )
        );
    };
    exports.default = Simple;

    Simple.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    Simple.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "simple-loading"
    };
});