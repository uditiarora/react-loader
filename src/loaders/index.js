import React from 'react'
import Rectangles from './Rectangles'
import './loader.css'
import Flower from './Flower';
import HexagonRipple from './HexagonRipple';
const HelloWorld = (props) => {
  return(
    <div className="loader">
      <div className="inside">
        <Rectangles>
        </Rectangles>
      </div>     
    </div>
    );
  
}
export default HelloWorld