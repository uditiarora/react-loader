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
        global.InfintePlug = mod.exports;
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

    var InfinitePlug = function InfinitePlug(props) {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'preloader', x: '0px', y: '0px', width: props.width, height: props.height, viewBox: '0 0 240 120' },
            _react2.default.createElement(
                'path',
                { id: 'loop-normal', fill: 'none', stroke: props.color, strokeWidth: '12', 'class': 'st1', d: 'M120.5,60.5L146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5\r L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0z' },
                _react2.default.createElement('animate', { attributeName: 'stroke-dasharray', attributeType: 'XML',
                    from: '500, 50', to: '450 50',
                    begin: '0s', dur: '2s',
                    repeatCount: 'indefinite' }),
                _react2.default.createElement('animate', { attributeName: 'stroke-dashoffset', attributeType: 'XML',
                    from: '-40', to: '-540',
                    begin: '0s', dur: '2s',
                    repeatCount: 'indefinite' })
            ),
            _react2.default.createElement('path', { id: 'loop-offset', display: 'none', d: 'M146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5\r L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0L120.5,60.5\r L146.48,87.02z' }),
            _react2.default.createElement('path', { id: 'socket', fill: props.color, d: 'M7.5,0c0,8.28-6.72,15-15,15l0-30C0.78-15,7.5-8.28,7.5,0z' }),
            _react2.default.createElement('path', { id: 'plug', fill: props.color, d: 'M0,9l15,0l0-5H0v-8.5l15,0l0-5H0V-15c-8.29,0-15,6.71-15,15c0,8.28,6.71,15,15,15V9z' }),
            _react2.default.createElement(
                'animateMotion',
                {
                    xlinkHref: '#plug',
                    dur: '2s',
                    rotate: 'auto',
                    repeatCount: 'indefinite',
                    calcMode: 'linear',
                    keyTimes: '0;1',

                    keySplines: '0.42, 0, 0.58, 1' },
                _react2.default.createElement('mpath', { xlinkHref: '#loop-normal' })
            ),
            _react2.default.createElement(
                'animateMotion',
                {
                    xlinkHref: '#socket',
                    dur: '2s',
                    rotate: 'auto',
                    repeatCount: 'indefinite',
                    calcMode: 'linear',
                    keyTimes: '0;1',
                    keySplines: '0.42, 0, 0.58, 1' },
                _react2.default.createElement('mpath', { xlinkHref: '#loop-offset' })
            )
        );
    };
    exports.default = InfinitePlug;

    InfinitePlug.propTypes = {
        height: _propTypes2.default.number,
        width: _propTypes2.default.number,
        color: _propTypes2.default.string,
        label: _propTypes2.default.string
    };
    InfinitePlug.defaultProps = {
        height: 100,
        width: 100,
        color: "#f76c6c",
        label: "Socket-loading"
    };
});