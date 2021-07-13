import React, {Component} from 'react';
import PlantImg from '../images/plant.png'

class Plant extends Component {

  handleDelete = () => {
    fetch(`http://localhost:9393/plants/${this.props.plant.id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then((deletedPlant) => {
            this.props.deletePlantFromState(this.props.plant)
        })
  }

  // 4.c) taking the plant info passed as props and 
  // generating plant content.

  render() {
    let {common_name, care_instructions, image} = this.props.plant
    return (
    <div className="plant">
      <img src={PlantImg} alt="plant"></img>
      <div className="plant-details">
        <h3>{common_name}</h3>
        <p>{care_instructions}</p>
      </div>
      <button onClick={this.handleDelete}>
        X
      </button>
    </div>
    );
  };
};

export default Plant;