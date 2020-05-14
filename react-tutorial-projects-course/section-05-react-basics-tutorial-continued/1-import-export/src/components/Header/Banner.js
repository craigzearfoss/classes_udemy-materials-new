import React from "react";
import { name } from "../../data";

/* Sample Export 1
export default function Banner() {
  return (
    <div>
      <h1>Hello from Banner {name}</h1>
    </div>
  );
}
*/

// Sample Export 2
function Banner() {
  return (
    <div>
      <h1>Hello from Banner {name}</h1>
    </div>
  );
}

export default Banner;
