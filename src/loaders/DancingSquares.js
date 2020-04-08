import React from 'react'
import PropTypes from 'prop-types'

const DancingSquares = (props) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="none" x="0px" y="0px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xmlSpace="preserve" width={props.width} height={props.height}>

		<rect fill={props.color} width="15" height="15">
      <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="2.5" values="0,0;15,0;15,15;0,15;0,0;" repeatCount="indefinite"/>
		</rect>	

		<rect x="15" fill={props.color} width="15" height="15">
      <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="2.5" values="0,0;0,15;-15,15;-15,0;0,0;" repeatCount="indefinite"/>
		</rect>	
      
		<rect x="15" y="15" fill={props.color} width="15" height="15">
      <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="2.5" values="0,0;-15,0;-15,-15;0,-15;0,0;" repeatCount="indefinite"/>
		</rect>	

		<rect y="15" fill={props.color} width="15" height="15">
      <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="2.5" values="0,0;0,-15;15,-15;15,0;0,0;" repeatCount="indefinite"/>
		</rect>
    </svg>
)
export default DancingSquares;
DancingSquares.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};
DancingSquares.defaultProps = {
  height: 100,
  width: 100,
  color: "#f76c6c",
  label: "Squares-loading"
};

