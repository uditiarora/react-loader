import React from 'react'
import Rectangles from './Rectangles'
import './loader.css'
import HexagonRipple from './HexagonRipple';
const HelloWorld = (props) => {
  return(
    <div className="loader">
      <div className="inside">
        <HexagonRipple>
        </HexagonRipple>
      </div>     
    </div>
    );
  
}
export default HelloWorld