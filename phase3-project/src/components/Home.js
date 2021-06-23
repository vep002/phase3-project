import React from 'react';
import Plant from '../components/Plant';

const Home = () => (
    <article className="container" id="home-page">
        <h2>username's garden</h2>
        <section className="garden">
            <Plant />
            <Plant />
            <Plant />
            <button className="add-plant">add new plant</button>
        </section>
        <button class="login">sign out</button>
    </article>
);

export default Home;