import React from 'react';
import PlantImg from '../images/plant.png';

const Plant = () => (
  <div className="plant">
    <img scr={PlantImg} alt="Drawing of Houseplant"></img> 
    <h3>Plant name</h3>
    <p>here are some care instructions for the plant!</p>
    <button>X</button>
  </div>
);

export default Plant;