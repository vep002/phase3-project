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
  console.log(e)
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
  .then(res=> res.json())
  .then ((potentialUser) => {
    if (potentialUser.error) {
      alert(potentialUser.error)
    } else {
      this.props.setUser(potentialUser)
    }
  })
}

// handleSignUp = (e) => {
//   e.preventDefault()
//   fetch ("http://localhost:9393/signup", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify({
//       username: this.state.username,
//       password: this.state.password
//     })
//   })
//   .then(res=>res.json())
//   .then((newUser) => {
//     if (newUser.error) {
//       alert(newUser.error)
//     } else {
//       this.props.setUser(newUser)
//       this.props.addUser(newUser)
//     }
//   })
// }

  render (){
    return(
  <article className="container">
    <section className="login">
        <h2>log in</h2>
        <div className="login">
            <label for="username">username: </label>
            <input id="username"placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} ></input>
            <br />
            <label for="pwd">password: </label>
            <input id="pwd" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} ></input>
            <br />
            <button className="login"type="submit" onClick={this.handleSubmit}>log in</button>
        </div>
    </section>
    <section className="signup">
        <h2>sign up</h2>
        <div>
            <label for="new-username">username: </label>
            <input id="new-username"placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} ></input>
            <br />
            <label for="new-pwd">password: </label>
            <input id="new-pwd" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} ></input>
            <br />
            <button className="login" type="submit">sign up</button>
        </div>
    </section>
  </article>
    )}
}
export default Login;