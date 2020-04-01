import React from 'react'
import Rectangles from './Rectangles'
import './loader.css'
import Flower from './Flower';
import HexagonRipple from './HexagonRipple';
import DancingSquares from './DancingSquares';
import InfinitePlug from './InfintePlug';
const HelloWorld = (props) => {
  return(
    <div className="loader">
      <div className="inside">
        <InfinitePlug>
        </InfinitePlug>
      </div>     
    </div>
    );
  
}
export default HelloWorld