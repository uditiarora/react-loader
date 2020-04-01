import React from 'react'
import Rectangles from './Rectangles'
import './loader.css'
import Flower from './Flower';
import HexagonRipple from './HexagonRipple';
import DancingSquares from './DancingSquares';
const HelloWorld = (props) => {
  return(
    <div className="loader">
      <div className="inside">
        <DancingSquares>
        </DancingSquares>
      </div>     
    </div>
    );
  
}
export default HelloWorld