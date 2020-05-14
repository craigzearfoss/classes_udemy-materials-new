import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always returns JSX
function Greeting() {
  return <h1>this is john and this is my first react component.</h1>;
}
// three arguments - element, propsObject, children

ReactDOM.render(<Greeting />, document.getElementById("root"));
