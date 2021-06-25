import React, {Component} from 'react';
import PlantImg from '../images/plant.png';

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
    let {name} = this.props.plant
    return (
    <div className="plant">
      <img scr={this.props.image} alt={name}></img> 
      <h3>{name}</h3>
      <p>{this.props.care_instructions}</p>
      <button onClick={this.handleDelete}>
        X
      </button>
    </div>
    );
  };
};

export default Plant;