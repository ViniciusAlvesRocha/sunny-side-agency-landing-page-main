import React from 'react';
import MilkBottles from '../../images/desktop/image-gallery-milkbottles.jpg';
import Orange from '../../images/desktop/image-gallery-orange.jpg';
import Cone from '../../images/desktop/image-gallery-cone.jpg';
import SugarCubes from '../../images/desktop/image-gallery-sugarcubes.jpg';
import "./RowBottom.css";

function RowBottom() {
  return(
    <div className="row-bottom">
      <img src={ MilkBottles } alt="milk boattles"/>
      <img src={ Orange } alt="orange boattles"/>
      <img src={ Cone } alt="cone" />
      <img src={ SugarCubes } alt="sugar cubes" />
    </div>
  );
}

export default RowBottom;