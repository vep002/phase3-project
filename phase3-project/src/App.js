import React from 'react';

//App components
import Header from './components/Header';
import Login from './components/Login';
import NewPlantForm from './components/NewPlantForm'
import Home from './components/Home';

const App = () => (
  <section className="body">
    <Header />
    {/* <Login /> */}
    {/* <NewPlantForm /> */}
    <Home />
  </section>
);

export default App;