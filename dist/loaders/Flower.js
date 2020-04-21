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
        global.Flower = mod.exports;
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

    var Flower = function Flower(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', height: props.height,
                width: props.width,
                fill: props.color,
                stroke: props.color,
                viewBox: '0 0 320 320',
                'stroke-linecap': 'round',
                xmlns: 'http://www.w3.org/2000/svg'
            },
            _react2.default.createElement(
                'defs',
                null,
                _react2.default.createElement(
                    'path',
                    { id: 'r1' },
                    _react2.default.createElement('animate', { id: 'p1', attributeName: 'd', values: 'm160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0', dur: '6s', repeatCount: 'indefinite' }),
                    _react2.default.createElement('animate', { attributeName: 'stroke-width', values: '0;4;4;4;0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin' })
                ),
                _react2.default.createElement(
                    'path',
                    { id: 'r2' },
                    _react2.default.createElement('animate', { attributeName: 'd', values: 'm160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+1s' }),
                    _react2.default.createElement('animate', { attributeName: 'stroke-width', values: '0;4;4;4;0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+1s' })
                ),
                _react2.default.createElement(
                    'path',
                    { id: 'r3' },
                    _react2.default.createElement('animate', { attributeName: 'd', values: 'm160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+2s' }),
                    _react2.default.createElement('animate', { attributeName: 'stroke-width', values: '0;4;4;4;0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+2s' })
                ),
                _react2.default.createElement(
                    'path',
                    { id: 'r4' },
                    _react2.default.createElement('animate', { id: 'p1', attributeName: 'd', values: 'm160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+3s' }),
                    _react2.default.createElement('animate', { attributeName: 'stroke-width', values: '0;4;4;4;0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+3s' })
                ),
                _react2.default.createElement(
                    'path',
                    { id: 'r5' },
                    _react2.default.createElement('animate', { attributeName: 'd', values: 'm160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+4s' }),
                    _react2.default.createElement('animate', { attributeName: 'stroke-width', values: '0;4;4;4;0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+4s' })
                ),
                _react2.default.createElement(
                    'path',
                    { id: 'r6' },
                    _react2.default.createElement('animate', { attributeName: 'd', values: 'm160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+5s' }),
                    _react2.default.createElement('animate', { attributeName: 'stroke-width', values: '0;4;4;4;0', dur: '6s', repeatCount: 'indefinite', begin: 'p1.begin+5s' })
                )
            ),
            _react2.default.createElement('use', { xlinkHref: '#r1' }),
            _react2.default.createElement('use', { xlinkHref: '#r1', transform: 'rotate(60 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r1', transform: 'rotate(120 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r1', transform: 'rotate(180 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r1', transform: 'rotate(240 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r1', transform: 'rotate(300 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r2', transform: 'rotate(30 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r2', transform: 'rotate(90 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r2', transform: 'rotate(150 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r2', transform: 'rotate(210 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r2', transform: 'rotate(270 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r2', transform: 'rotate(330 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r3' }),
            _react2.default.createElement('use', { xlinkHref: '#r3', transform: 'rotate(60 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r3', transform: 'rotate(120 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r3', transform: 'rotate(180 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r3', transform: 'rotate(240 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r3', transform: 'rotate(300 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r4', transform: 'rotate(30 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r4', transform: 'rotate(90 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r4', transform: 'rotate(150 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r4', transform: 'rotate(210 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r4', transform: 'rotate(270 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r4', transform: 'rotate(330 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r5' }),
            _react2.default.createElement('use', { xlinkHref: '#r5', transform: 'rotate(60 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r5', transform: 'rotate(120 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r5', transform: 'rotate(180 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r5', transform: 'rotate(240 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r5', transform: 'rotate(300 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r6', transform: 'rotate(30 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r6', transform: 'rotate(90 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r6', transform: 'rotate(150 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r6', transform: 'rotate(210 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r6', transform: 'rotate(270 160 160)' }),
            _react2.default.createElement('use', { xlinkHref: '#r6', transform: 'rotate(330 160 160)' })
        );
    };

    exports.default = Flower;

    Flower.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };

    Flower.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "Hexagons-loading"
    };
});