(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Rectangles', './Flower', './HexagonRipple', './DancingSquares', './InfintePlug', './Wheel', './Clock', './Ring', './ThreeDots', './ThreeJumpingDots', './Square', './ThreeRings', './Bars', './Simple', './Compass', './MultipleRings', './FallingBars', './Loading', './Ripples', './BallTriangle'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Rectangles'), require('./Flower'), require('./HexagonRipple'), require('./DancingSquares'), require('./InfintePlug'), require('./Wheel'), require('./Clock'), require('./Ring'), require('./ThreeDots'), require('./ThreeJumpingDots'), require('./Square'), require('./ThreeRings'), require('./Bars'), require('./Simple'), require('./Compass'), require('./MultipleRings'), require('./FallingBars'), require('./Loading'), require('./Ripples'), require('./BallTriangle'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Rectangles, global.Flower, global.HexagonRipple, global.DancingSquares, global.InfintePlug, global.Wheel, global.Clock, global.Ring, global.ThreeDots, global.ThreeJumpingDots, global.Square, global.ThreeRings, global.Bars, global.Simple, global.Compass, global.MultipleRings, global.FallingBars, global.Loading, global.Ripples, global.BallTriangle);
    global.index = mod.exports;
  }
})(this, function (exports, _Rectangles, _Flower, _HexagonRipple, _DancingSquares, _InfintePlug, _Wheel, _Clock, _Ring, _ThreeDots, _ThreeJumpingDots, _Square, _ThreeRings, _Bars, _Simple, _Compass, _MultipleRings, _FallingBars, _Loading, _Ripples, _BallTriangle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Rectangles2 = _interopRequireDefault(_Rectangles);

  var _Flower2 = _interopRequireDefault(_Flower);

  var _HexagonRipple2 = _interopRequireDefault(_HexagonRipple);

  var _DancingSquares2 = _interopRequireDefault(_DancingSquares);

  var _InfintePlug2 = _interopRequireDefault(_InfintePlug);

  var _Wheel2 = _interopRequireDefault(_Wheel);

  var _Clock2 = _interopRequireDefault(_Clock);

  var _Ring2 = _interopRequireDefault(_Ring);

  var _ThreeDots2 = _interopRequireDefault(_ThreeDots);

  var _ThreeJumpingDots2 = _interopRequireDefault(_ThreeJumpingDots);

  var _Square2 = _interopRequireDefault(_Square);

  var _ThreeRings2 = _interopRequireDefault(_ThreeRings);

  var _Bars2 = _interopRequireDefault(_Bars);

  var _Simple2 = _interopRequireDefault(_Simple);

  var _Compass2 = _interopRequireDefault(_Compass);

  var _MultipleRings2 = _interopRequireDefault(_MultipleRings);

  var _FallingBars2 = _interopRequireDefault(_FallingBars);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Ripples2 = _interopRequireDefault(_Ripples);

  var _BallTriangle2 = _interopRequireDefault(_BallTriangle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Spinner = {
    BallTriangle: _BallTriangle2.default,
    Bars: _Bars2.default,
    Clock: _Clock2.default,
    Compass: _Compass2.default,
    DancingSquares: _DancingSquares2.default,
    FallingBars: _FallingBars2.default,
    Flower: _Flower2.default,
    HexagonRipple: _HexagonRipple2.default,
    InfinitePlug: _InfintePlug2.default,
    Loading: _Loading2.default,
    MultipleRings: _MultipleRings2.default,
    Rectangles: _Rectangles2.default,
    Ring: _Ring2.default,
    Ripples: _Ripples2.default,
    Simple: _Simple2.default,
    Square: _Square2.default,
    ThreeDots: _ThreeDots2.default,
    ThreeJumpingDots: _ThreeJumpingDots2.default,
    ThreeRings: _ThreeRings2.default,
    Wheel: _Wheel2.default

  };
  exports.default = Spinner;
});