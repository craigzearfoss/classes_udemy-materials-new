import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="John" job="Developer" />
      <Person img="22" name="Bob" job="Designer">
        <p>
          lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
        </p>
      </Person>
      <Person img="56" name="David" job="The Boss" />
    </section>
  );
};

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className="person">
      <img src={url} alt="person image" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
