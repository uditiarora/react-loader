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
import ThreeRings from './ThreeRings';
import Bars from './Bars';
import Simple from './Simple';
import Compass from './Compass';
import MultipleRings from './MultipleRings';
import FallingBars from './FallingBars';
const HelloWorld = (props) => {
  return(
    <div className="loader">
      <div className="inside">
        <FallingBars />
      </div>     
    </div>
    );
  
}
export default HelloWorld