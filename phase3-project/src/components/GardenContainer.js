import React from 'react';
import Garden from './Garden';

export default function GardenContainer(props) {

    let arrayOfGardens = props.gardens.map(garden => {
        return <Garden key={garden.id} garden={garden} deletePlantFromState={props.deletePlantFromState} />
    })

    return (
    <article className="container" id="home-page">
        <h2>Garden</h2>
        {arrayOfGardens}
        <button className="login">sign out</button>
    </article>
    )
};
