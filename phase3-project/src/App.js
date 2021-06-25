import React, {Component} from 'react';
import {Switch, withRouter, Route, Link} from 'react-router-dom';

//App components
import Header from './components/Header';
import Login from './components/Login';
import GardenContainer from './components/GardenContainer';

class App extends Component {

state = {
  id: 0,
  username:"",
  gardens: []
}  

setUser = (user) => {
  this.setState({
    id: user.id,
    username: user.username,
    gardens: user.gardens
  })
  this.props.history.push("/gardens")
}

deletePlantFromState = (plant) => {
  let gardenThatContainsThePlant = this.state.gardens.find(garden => {
    return garden.id === plant.garden_id
  })

  let newArrayOfPlants = gardenThatContainsThePlant.plants.filter(plantObj =>{
    return plantObj.id !==plant.id
  })

  let copyOfGarden = {
    ...gardenThatContainsThePlant,
    plants: newArrayOfPlants
  }

  let theCopyOfAllGardens = this.state.gardens.map(garden => {
    if(garden.id === copyOfGarden.id) {
      return copyOfGarden
    } else {
      return garden
    }
  })

  this.setState({
    gardens: theCopyOfAllGardens
  })
}

addPlantToGarden = (newPlant) => {
  // 3.a) find the garden that includes the newly added plant 

  let gardenThatContainsThePlant = this.state.gardens.find(garden => {
    return garden.id === newPlant.garden_id
  })

  // 3.b) add the new plant to the garden's plant array 
  
  let newArrayOfPlants = [...gardenThatContainsThePlant.plants, newPlant]

  // 3.c) create a copy of the garden array and add in 
  // the new plant array which includes the newly added plant

  let copyOfGarden = {
    ...gardenThatContainsThePlant,
    plants: newArrayOfPlants
  }

  // 3.d) create a copy of all gardens associated with the user, 
  // map over gardens saved in state, & see if the id of the garden 
  // saved in state matches the id of the garden we just updated 
  // with the new plant. 
  // If they do match, return the updated garden's plant array. 
  // If they don't match, returning the original garden's plant array.

  let theCopyOfAllGardens = this.state.gardens.map(garden => {
    if(garden.id === copyOfGarden.id){
      return copyOfGarden
    } else {
      return garden
    }
  })

  // 3.e) Finally, set the state of gardens to be the copyOfAllGardens,
  // which gets passed down as props to new plant form and home

  this.setState({
    gardens: theCopyOfAllGardens
  })
}

// 4.a) Create the GardenContainer component, which is a user's garden, 
// sending down the garden as props. See GardenContainer.js for next step.

arrayOfGardens = this.state.gardens.map(garden => {
  return <GardenContainer key={garden.id} garden={garden}/>
})

decideWhichGardenToRender = (routerProps) => {
  //return value will be rendered to page
  let whatUserTypedInURL = routerProps.match.params.id
  let foundGarden = this.state.gardens.find(garden => {
    return garden.id === parseInt(whatUserTypedInURL)
  })

  if(foundGarden){
    return <GardenContainer 
              course={foundGarden} 
              deletePlantFromState={this.deletePlantFromState} 
          />
  } else {
    return <p>404 No garden found</p>
  }
}

render(){
  return(
  <section className="body">
    <Header />

      <Link to="/login">Login</Link>
      <Link to="/gardens">Gardens</Link>

      <Switch>
      <Route exact path="/login">
        <Login setUser={this.setUser} />
      </Route>
      <Route exact path="/gardens">
        <GardenContainer garden={this.state.gardens} deletePlantFromState={this.deletePlantFromState} addPlantToGarden={this.addPlantToGarden} />
      </Route>
      <Route exact path="/gardens/:id" render={this.decideWhichGardenToRender} />
    </Switch>
  </section>
)}
};

export default withRouter(App);