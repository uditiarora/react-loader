import React from 'react'
import PropTypes from 'prop-types'

const MultipleRings = (props) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width={props.width} height={props.height} viewBox="0 0 200 200" enable-background="new 0 0 200 200" xmlSpace="preserve">
    <g>
        <path fill="none" stroke={props.color} stroke-width="3" stroke-miterlimit="10" d="M138.768,100c0,21.411-17.356,38.768-38.768,38.768
            c-21.411,0-38.768-17.356-38.768-38.768c0-21.411,17.357-38.768,38.768-38.768"/>
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite"/>
    </g>
    <g>
        <path fill="none" stroke={props.color} stroke-width="3" stroke-miterlimit="10" d="M132.605,100c0,18.008-14.598,32.605-32.605,32.605
            c-18.007,0-32.605-14.598-32.605-32.605c0-18.007,14.598-32.605,32.605-32.605"/>
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite"/>
    </g>
    <g>
        <path fill="none" stroke={props.color} stroke-width="3" stroke-miterlimit="10" d="M126.502,100c0,14.638-11.864,26.502-26.502,26.502
            c-14.636,0-26.501-11.864-26.501-26.502c0-14.636,11.865-26.501,26.501-26.501"/>
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="2s" repeatCount="indefinite"/>
    </g>
    <g>
        <path fill="none" stroke={props.color} stroke-width="3" stroke-miterlimit="10" d="M120.494,100c0,11.32-9.174,20.494-20.494,20.494
            c-11.319,0-20.495-9.174-20.495-20.494c0-11.319,9.176-20.495,20.495-20.495"/>
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="1s" repeatCount="indefinite"/>
    </g>
</svg>
)
export default MultipleRings;
MultipleRings.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};
MultipleRings.defaultProps = {
  height: 100,
  width: 100,
  color: "#f76c6c",
  label: "simple-loading"
};