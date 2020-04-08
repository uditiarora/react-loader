import React from 'react'
import PropTypes from 'prop-types'

const ThreeDots = (props) => (
    <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={props.height} width={props.width} x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
        <circle fill={props.color} stroke="none" cx="6" cy="50" r="6">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"/>    
        </circle>
        <circle fill={props.color} stroke="none" cx="26" cy="50" r="6">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.2"/>       
        </circle>
        <circle fill={props.color} stroke="none" cx="46" cy="50" r="6">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.3"/>     
        </circle>
    </svg>
)

export default ThreeDots;
ThreeDots.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};
ThreeDots.defaultProps = {
  height: 100,
  width: 100,
  color: "#f76c6c",
  label: "dots-loading"
};