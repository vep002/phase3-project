import React from 'react';
import Garden from './Garden';
import {Link} from 'react-router-dom'

export default function GardenContainer(props) {

    let arrayOfGardens = props.garden.map(garden => {
        return <Garden key={garden.id} garden={garden} deletePlantFromState={props.deletePlantFromState} addPlantToGarden={props.addPlantToGarden} gardens={props.garden}/>
    })
    return (
    <article className="container" id="home-page">
        <h2>Garden</h2>
        {arrayOfGardens}
        <button className="login"><Link to={"/login"}>sign out</Link></button>
    </article>
    )
};
