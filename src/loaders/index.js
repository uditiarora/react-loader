import React from 'react'
import Rectangles from './Rectangles'
import './loader.css'
import Flower from './Flower';
import HexagonRipple from './HexagonRipple';
import DancingSquares from './DancingSquares';
import InfinitePlug from './InfintePlug';
import Wheel from './Wheel';
import Clock from './Clock';
const HelloWorld = (props) => {
  return(
    <div className="loader">
      <div className="inside">
        <Clock />
      </div>     
    </div>
    );
  
}
export default HelloWorld