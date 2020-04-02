import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import  Spinner  from "./loaders";

const componentNames = [
  "BallTriangle",
  "Bars",
  "Clock",
  "Compass",
  "DancingSquares",
  "FallingBars",
  "Flower",
  "HexagonRipple",
  "InfinitePlug",
  "Loading",
  "MultipleRings",
  "Rectangles",
  "Ring",
  "Ripples",
  "Simple",
  "Square",
  "ThreeDots",
  "ThreeJumpingDots",
  "ThreeRings",
  "Wheel"
];

function componentName(type) {
  if (componentNames.includes(type)) {
    return Spinner[type];
  }
  return Spinner.Simple;
}

/**
 * @return {null}
 */
export default function Loader(props) {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    let timer;
    if (props.timeout && props.timeout > 0) {
      timer = setTimeout(() => {
        setDisplay(false);
      }, props.timeout);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  if (!props.visible || props.visible === "false") {
    return null;
  }
  return display ? (
    <div aria-busy="true" className={props.className} style={props.style}>
      {React.createElement(componentName(props.type), { ...props })}
    </div>
  ) : null;
}

Loader.propTypes = {
  type: PropTypes.oneOf([...componentNames]),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  timeout: PropTypes.number
};

Loader.defaultProps = {
  type: "Simple",
  style: {},
  className: "",
  visible: true,
  timeout: 0
};
