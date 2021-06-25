import React, {Component} from 'react';

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
      <img scr={require("../images/snake_plant.png")} alt={common_name}></img>
      <h3>{common_name}</h3>
      <p>{care_instructions}</p>
      <button onClick={this.handleDelete}>
        X
      </button>
    </div>
    );
  };
};

export default Plant;