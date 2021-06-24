import React from 'react';
import PlantImg from '../images/plant.png';

// 4.c) taking the plant info passed as props and generating plant content.
const Plant = (props) => (
  <div className="plant">
    <img scr={props.image} alt="Drawing of Houseplant"></img> 
    <h3>{props.common_name}</h3>
    <p>{props.care_instructions}</p>
    <button>X</button>
  </div>
);

export default Plant;