import React, {Component} from 'react';

class Login extends Component {

state = {
  username: "",
  password: ""
}

handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  fetch("http://localhost:9393/login", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password
    })
  })
  .then(res => res.json())
  .then ((potentialUser) => {
    if (potentialUser.error) {
      alert(potentialUser.error)
    } else {
      this.props.setUser(potentialUser)
    }
  })
}

render (){
  return(
  <article className="container" onSubmit={this.handleSubmit}>
    <section className="login">
        <h2>log in</h2>
        <form className="login">
            <label>username: </label>
            <input id="username" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} ></input>
            <br />
            <label>password: </label>
            <input id="pwd" name="password" type="password" value={this.state.password} onChange={this.handleChange} ></input>
            <br />
            <input className="login" type="submit" value="login"/>
        </form>
    </section>
  </article>
  )}
}

export default Login;