
import React, {Component} from 'react';

class NewPlantForm extends Component{

    state = {
        plantArr: [],
        plant_id: 0,
        quantity: 0,
        garden_id: 0
    }

// This fetches plant data from the backend, making it available for a user 
// to select a plant to add to their garden. See the render function below 
// for the steps involved in adding a plant to a user's garden

componentDidMount() {
    fetch("http://localhost:9393/plants")
    .then((r) => r.json())
    .then((plantsArray) => {
        this.setState({
            plantArr: plantsArray,
            plant_id: plantsArray[0].id
        })
    });
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()

    // 2.a) A Post request is sent to the /plants resource on the backend

    fetch("http://localhost:9393/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

    // 2.b) the body of the POST request includes plant_id, garden_id, 
    // and quantity (all in state, set from the previous step. 
    // See backend for next step.)

      body: JSON.stringify({
       plant_id: this.state.plant_id,
       quantity: this.state.quantity,
       garden_id:this.state.garden_id
      })
    })

    // 2.g) Recieves new plant information from the backend and runs a
    // function to add the plant to the users garden on the front end 
    // (passed down as props from App.js). See App.js for next steps.

    .then(res=> res.json())
    .then ((newPlant) => {
      this.props.addPlantToGarden(newPlant)
    })
}


render () {
    return(
    <article className="container" id="plant-form">

        {/* 1.d) User submits the form, which sets off the POST request,
        see handleSubmit above for next steps  */}

        <form className="add-plant" onSubmit={this.handleSubmit}>
        <h2>add a plant to your garden</h2>
            <label for="plant-name">plant name: </label>

            {/* 1.a) User selects the name of the plant they want to
            add to their garden, this in turn sets the state.plant_id 
            of this component to the matching plant_id */}

            <select 
                id="plant-name"
                placeholder="plant name" 
                name="plant_id" 
                value={this.state.plant_id} 
                onChange={this.handleChange}>
                {this.state.plantArr.map((plant)=>{
                    return (
                    <option 
                        key={plant.id} value={plant.id} >{plant.common_name}
                    </option>
                    )
                })}
            </select>
            <br />
            <label for="garden-name">garden name: </label>

            {/* 1.b) User selects the name of the garden they want to add
            the plant to (if they have more than one, if they only have 
            one, that is the only option). The garden information is passed 
            down from App.js through props. This in turn sets the state.garden_id
            of this component to the matching garden_id */}

            <select 
                id="garden-name"
                placeholder="garden name" 
                name="garden_id" 
                value={this.state.garden_id} 
                onChange={this.handleChange}>
                {this.props.gardens.map((garden)=>{
                    return (
                    <option 
                        key={garden.id} value={garden.id} >{garden.name}
                    </option>
                    )
                })}
            </select>
            <br />
            <label for="quantity">quantity: </label>

            {/* 1.c) User inputs how many plants to add. This sets the 
            state.quantity of this component to whatever number is selected here. */}

            <input 
                id="quantity"
                type="number" 
                min="1" 
                max="50"
                name="quantity" 
                onChange={this.handleChange} 
                value={this.state.quantity}>
            </input>
        </form>
        <input class="add-plant" type="submit" value="add new plant" />    
    </article>
    )}
};

export default NewPlantForm;