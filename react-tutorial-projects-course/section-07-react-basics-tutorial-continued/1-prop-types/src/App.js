import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

/* First example
const Person = ({ img, name, age, info }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age: {age}</h4>
      <p>info: {info}</p>
    </article>
  );
};
Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
};
Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/men/1.jpg",
  name: "james doe",
  age: 34,
  info: "default info about person",
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/10.jpg",
        name: "john",
        age: 24,
      },
      {
        id: 2,
        //img: "https://randomuser.me/api/portraits/men/34.jpg",
        //name: "bob",
        age: 27,
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/men/54.jpg",
        name: "peter",
        age: 27,
        info: "some info about peter",
      },
    ],
  };
  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person
            key={person.id}
            img={person.img}
            name={person.name}
            age={person.age}
            info={person.info}
          />
        ))}
      </section>
    );
  }
}

class App extends Component {
  render() {
    return <PersonList />;
  }
}
*/

const Person = ({ person: { img, name, age, info } }) => {
  //const { img, name, age, info } = props.person
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age: {age}</h4>
      <p>info: {info || "default info about the person"}</p>
    </article>
  );
};
Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
  }),
};
Person.defaultProps = {
  person: {
    info: "some info about the person",
  },
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/10.jpg",
        name: "john",
        age: 24,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/men/34.jpg",
        name: "bob",
        age: 27,
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/men/54.jpg",
        name: "peter",
        age: 27,
        info: "some info about peter",
      },
    ],
  };
  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </section>
    );
  }
}

class App extends Component {
  render() {
    return <PersonList />;
  }
}

export default App;
