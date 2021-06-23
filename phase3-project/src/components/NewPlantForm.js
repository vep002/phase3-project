import React from 'react';

const NewPlantForm = () => (
    <article className="container" id="plant-form">
        <section className="add-plant">
        <h2>add a plant to your garden</h2>
            <label for="plant-name">plant name: </label>
            <input id="plant-name"placeholder="username"></input>
            <br />
            <label for="quantity">quantity: </label>
            <input id="quantity"type="number" min="1" max="50"></input>
        </section>
        <button class="add-plant">add new plant</button>
    </article>
);

export default NewPlantForm;