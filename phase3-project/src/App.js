import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter, Link} from 'react-router-dom';

//App components
import Header from './components/Header';
import Login from './components/Login';
import NewPlantForm from './components/NewPlantForm'
import Home from './components/Home';



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
}

// addUser = (user) => {

// }

addPlantToGarden = (newPlant) => {
  // 3.a) finding the garden that includes the newly added plant 
  let gardenThatContainsThePlant = this.state.gardens.find(garden => {
    return garden.id === newPlant.garden_id
  })
  // 3.b) adding the new plant to the garden's plant array NOTE: MAY NEED TO CHECK IF THIS CODE IS CORRECT
  let newArrayOfPlants = [...gardenThatContainsThePlant.plants, newPlant]
  // 3.c) Creating a copy of the garden array and adding in the new plant array which included the newly added plant
  let copyOfGarden = {
    ...gardenThatContainsThePlant,
    plants: newArrayOfPlants
  }
  // 3.d) Creating a copy of all gardens associated with the user, mapping over gardens saved in state and see if the id of the garden saved in state matches the id of the garden we just updated with the new plant. If they do match, returning the updated garden's plant array. If they don't match, returning the original garden's plant array.
  let theCopyOfAllGardens = this.state.gardens.map(garden => {
    if(garden.id === copyOfGarden.id){
      return copyOfGarden
    } else {
      return garden
    }
  })
  // 3.e) Finally, setting the state of gardens to be the copyofallgardens, which gets passed down as props to new plant form and home
  this.setState({
    gardens: theCopyOfAllGardens
  })
}
// 4.a) Creating the Home component, which is a user's garden, sending down the garden as props. See Home.js for next step.
arrayOfGardens = this.state.gardens.map(garden => {
  return <Home key={garden.id} garden={garden}/>
})

render(){
  return(
  <section className="body">
    <Header />
    <BrowserRouter>
      <Route exact path="/login">
        <Login setUser= {this.setUser}/>
      </Route>
      <Route exact path="/form">
      <NewPlantForm gardens={this.state.gardens} addPlantToGarden={this.addPlantToGarden}/>
      </Route>
      <Route exact path="/home">
      {arrayOfGardens}
      </Route>
    </BrowserRouter>
  </section>
)}
};

export default App;