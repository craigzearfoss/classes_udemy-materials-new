import React from "react";

/* Import Sample 1
import { name, age, person } from "./data";

const App = () => (
  <section>
    <p>this is my content</p>
    <p>{name}</p>
    <p>{age}</p>
    <p>
      {person.name} {person.age}
    </p>
  </section>
);
*/

/* Import Sample 2
import * as data from "./data";
const App = () => (
  <section>
    <p>this is my content</p>
    <p>{data.name}</p>
    <p>{data.age}</p>
    <p>
      {data.person.name} {data.person.age}
    </p>
  </section>
);
*/

/*
// Import Sample 3
import { name, age, person } from "./data";
import Banner from "./components/Header/Banner";
const App = () => (
  <section>
    <Banner />
    <p>this is my content</p>
    <p>{name}</p>
    <p>{age}</p>
    <p>
      {person.name} {person.age}
    </p>
  </section>
);

*/

// Sample Import 3 (class)
import { name, age, person } from "./data";
import Banner from "./components/Header/Banner";
class App extends React.Component {
  render() {
    return (
      <section>
        <Banner />
        <p>this is my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>
          {person.name} {person.age}
        </p>
      </section>
    );
  }
}

export default App;
