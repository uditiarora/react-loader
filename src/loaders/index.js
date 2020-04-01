import React from 'react'
import Rectangles from './Rectangles'
import './loader.css'
import Flower from './Flower';
import HexagonRipple from './HexagonRipple';
import DancingSquares from './DancingSquares';
import InfinitePlug from './InfintePlug';
import Wheel from './Wheel';
const HelloWorld = (props) => {
  return(
    <div className="loader">
      <div className="inside">
        <Wheel />
      </div>     
    </div>
    );
  
}
export default HelloWorld