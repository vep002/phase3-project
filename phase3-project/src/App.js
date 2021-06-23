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

render(){
  return(
  <section className="body">
    <Header />
    <BrowserRouter>
      <Route exact path="/login">
        <Login setUser= {this.setUser}/>
      </Route>
      <Route exact path="/form">
      <NewPlantForm />
      </Route>
      <Route exact path="/home">
      <Home />
      </Route>
    </BrowserRouter>
  </section>
)}
};

export default App;