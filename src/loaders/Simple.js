import React from 'react'
import PropTypes from 'prop-types'

const Simple = (props) => (
    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width= {props.width} height={props.height} x="0px" y="0px"
    viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
        <path fill={props.color} d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
        <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            dur="1s" 
            from="0 50 50"
            to="360 50 50" 
            repeatCount="indefinite" />
    </path>
    </svg>

)
export default Simple;
Simple.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};
Simple.defaultProps = {
  height: 100,
  width: 100,
  color: "#64ffda",
  label: "simple-loading"
};