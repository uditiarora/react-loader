import React from 'react'
import Rectangles from './Rectangles'
import './loader.css'
import Flower from './Flower';
import HexagonRipple from './HexagonRipple';
import DancingSquares from './DancingSquares';
import InfinitePlug from './InfintePlug';
import Wheel from './Wheel';
import Clock from './Clock';
import Ring from './Ring';
import ThreeDots from './ThreeDots'
import ThreeJumpingDots from './ThreeJumpingDots';
import Square from './Square';
const HelloWorld = (props) => {
  return(
    <div className="loader">
      <div className="inside">
        <Square />
      </div>     
    </div>
    );
  
}
export default HelloWorld