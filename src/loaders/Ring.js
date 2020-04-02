import React from 'react'
import PropTypes from 'prop-types'

const Ring = (props) => (
    <svg version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  height={props.height} width={props.width}  x="0px" y="0px"
    viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
        <circle fill="none" stroke={props.color} stroke-width="4" cx="50" cy="50" r="44" style={{opacity:0.5}}/>
        <circle fill={props.color} stroke="none" stroke-width="3" cx="8" cy="54" r="6" >
            <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite" />
            
        </circle>
    </svg>
)
export default Ring;
Ring.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    color: PropTypes.string,
    label: PropTypes.string
  };
Ring.defaultProps = {
    height: 100,
    width: 100,
    color: "#64ffda",
    label: "ring-loading"
};