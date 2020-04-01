import React from 'react'
import PropTypes from 'prop-types'

const Clock = (props) => (
    
    <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={props.height} width={props.width}  x="0px" y="0px"
    viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
        <circle fill="none" stroke={props.color} stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"/>
        <line fill="none" stroke-linecap="round" stroke={props.color} stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
        <animateTransform 
            attributeName="transform" 
            dur="2s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite" />
        </line>
        <line fill="none" stroke-linecap="round" stroke={props.color} stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
        <animateTransform 
            attributeName="transform" 
            dur="15s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite" />
        </line>
    </svg>
)
export default Clock;
Clock.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};
Clock.defaultProps = {
  height: 100,
  width: 100,
  color: "#64ffda",
  label: "clock-loading"
};