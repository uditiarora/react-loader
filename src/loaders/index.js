import React from 'react'
import Rectangles from './Rectangles'
import './loader.css'
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