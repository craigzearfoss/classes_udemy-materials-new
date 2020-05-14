import React from "react";
import ReactDOM from "react-dom";

/*
// Sample 1: destructruing inside of themfunction
function People() {
  const friends = [
    { name: "john", job: "developer", age: 23, company: "people" },
    { name: "bob", job: "designer", age: 21, company: "facebook" },
    { name: "susy", job: "artist", age: 26, company: "google" },
  ];
  return (
    <section>
      <Person person={friends[0]} />
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = (props) => {
  const { name, job, age, company } = props.person;

  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};
*/

/*
// Sample 2: destructuring in the parameters list
function People() {
  const friends = [
    { name: "john", job: "developer", age: 23, company: "people" },
    { name: "bob", job: "designer", age: 21, company: "facebook" },
    { name: "susy", job: "artist", age: 26, company: "google" },
  ];
  return (
    <section>
      <Person person={friends[0]} />
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = ({ person: { name, job, age, company } }) => {
  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};
*/

// Sample 3: Children
function People() {
  const friends = [
    { name: "john", job: "developer", age: 23, company: "people" },
    { name: "bob", job: "designer", age: 21, company: "facebook" },
    { name: "susy", job: "artist", age: 26, company: "google" },
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <h1>some heading</h1>
        <p>some other info</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

//const Person = ({ children, person: { name, job, age, company } }) => {
const Person = (props) => {
  const { name, job, age, company } = props.person;
  const { children } = props;
  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

ReactDOM.render(<People />, document.getElementById("root"));
