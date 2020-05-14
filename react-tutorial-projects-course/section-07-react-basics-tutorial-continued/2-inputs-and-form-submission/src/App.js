import React, { Component } from "react";
import "./App.css";

/* Controlled Inputs
class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };
  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (firstName.length > 0 && lastName.length > 0) {
      const person = ` ${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: "",
      });
    }
  };
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h1>people</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}
*/

// Uncontrolled Inputs
class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.refs.myName;
    const nameValue = name.value;

    const email = this.email.value;

    const text = this.refs.myText;
    text.getElementsByClassName.color = "red";
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName" />
          <input type="email" ref={(orange) => (this.email = orange)} />
          <buton type="sibmit">submit</buton>
        </form>
        <p ref="myText">hello world</p>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return <Form />;
  }
}

export default App;
