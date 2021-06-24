import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <article className="container">
    <section className="login">
        <h2>log in</h2>
        <div className="login">
            <label for="username">username: </label>
            <input id="username"placeholder="username"></input>
            <br />
            <label for="pwd">password: </label>
            <input id="pwd" placeholder="password" type="password"></input>
            <br />
            <button className="login"type="submit"><NavLink to="/home">log in</NavLink></button>
        </div>
    </section>
    {/* <section className="signup">
        <h2>sign up</h2>
        <div>
            <label for="new-username">username: </label>
            <input id="new-username"placeholder="username"></input>
            <br />
            <label for="new-pwd">password: </label>
            <input id="new-pwd" placeholder="password" type="password"></input>
            <br />
            <button className="login" type="submit">sign up</button>
        </div>
    </section> */}
  </article>
);

export default Login;