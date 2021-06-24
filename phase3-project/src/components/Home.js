import React, {Component} from 'react';
import Plant from '../components/Plant';

class Home extends Component {

    // 4.b) Creating the Plant component, which takes in the garden array prop, maps over it and for each plant in the array, creates a Plant component, which renders below and gets plant information passed down as a prop. See Plant.js for next step
arrayOfPlants = this.props.garden.map(plant => {
        return <Plant key={plant.id} plant={plant}/>
      })

render (){

    return (
    <article className="container" id="home-page">
        <h2>username's garden</h2>
        <section className="garden">
        {arrayOfPlants}
            <button className="add-plant">add new plant</button>
        </section>
        <button class="login">sign out</button>
    </article>
     )}
};

export default Home;