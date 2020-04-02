import React from 'react'
import PropTypes from 'prop-types'

const Compass = (props) => (
    <svg class="preloader" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={props.width} height={props.height} version="1.1" fill = {props.color}
viewBox="0 0 7500 7500"
 xmlnsXlink="http://www.w3.org/1999/xlink">
 
  <g id="arrows">
    <animateTransform attributeName="transform" type="rotate" from="0 3750 3750" to="360 3750 3750" dur="1.5s" repeatCount="indefinite"/>
   <polygon class="north" points="4417,1268 4494,2617 4563,3966 3750,3750 2937,3534 3674,2401 "/>
   <polygon class="south" points="3083,6232 3006,4883 2937,3534 3750,3750 4563,3966 3826,5099 "/>
  </g>
  <path class="border" d="M3750 0c1035,0 1972,420 2655,1095 675,682 1095,1620 1095,2655 0,1035 -420,1972 -1095,2655 -682,675 -1620,1095 -2655,1095 -1035,0 -1972,-420 -2655,-1095 -675,-682 -1095,-1620 -1095,-2655 0,-1035 420,-1972 1095,-2655 682,-675 1620,-1095 2655,-1095zm0 909l-170 -350c-817,43 -1547,393 -2088,933 -540,541 -890,1271 -933,2088l350 170 -350 170c43,817 393,1547 933,2088 541,540 1271,890 2088,933l170 -350 170 350c817,-43 1547,-393 2088,-933 540,-541 890,-1271 933,-2088l-350 -170 350 -170c-43,-817 -393,-1547 -933,-2088 -541,-540 -1271,-890 -2088,-933l-170 350z"/>
</svg>
)
export default Compass;
Compass.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};
Compass.defaultProps = {
  height: 100,
  width: 100,
  color: "#64ffda",
  label: "compass-loading"
};
