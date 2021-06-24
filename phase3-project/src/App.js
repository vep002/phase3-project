import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

//App components
import Header from './components/Header';
import Login from './components/Login';
import NewPlantForm from './components/NewPlantForm'
import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <section className="body">
      <Header />
      <Route exact path="/" component={Login}/>
      <Route path="/home" component={Home} />
      <Route path="/new-plant-form" component={NewPlantForm} />

    </section>
  </BrowserRouter>
);

export default App;