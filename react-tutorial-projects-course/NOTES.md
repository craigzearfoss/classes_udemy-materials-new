# React Tutorial and Projects Course

- Udemy
- Instructor: John Smilga
- Completed

---

### Dev Environment Setup
- node
- web browser
- text edit (Visual Studio Code)
- React Developer Tools

### Visual Studio Setup
- Extensions
  - Bracket Pair Colorizer
  - ES7 React/Redux/GraphQL/React-Native snippets
  - Highlight Matching Tag
  - indent-rainbow
  - Live Server
  - Prettier - Code formatter
  - Preview on Web Server (similar to Live Server)
  - vscode-styled-components

### NPM Commands
- **npm init** 
  - Creates a package.json file to list dependencies.
- **npm install *\<package name>* --save**
  - Install a package locally (default) and save package to package.json.
- **sudo npm installl *\<package name>* -g**
  - Install package globally. (Can access anywhere on the machine.)
- **npm install *\<package name>* --save-dev**
  - Use package only for development.

- The npm dependencies are installed in the *node_modules* directtory.

### create-react-app
- Sets up a React applications.
- Comes with tools like Babel and Webpack pre-configured.
```
npx create-react-app my-app
cd my-app
npm start
```

### Babel
- A JavaScript compiler that converts ES6 JavaScript to regular JavaScript that can run in any browser.

### Webpack
- A module bundler used for:
  - Bundling resources
  - Watching for changes
  - Re-running a task
  - Runnng Babel transpilation

### Installing create-react-app
```
sudo npm install -g create-react-app
create-react-app tutorial
npm start
```

### create-react-app Folder Structure
```
   + build - the application built for production; everything is minified
   + node_modules - where all of the dependencies are kept
   + public
   |   + index.html - app entry point where you hook up the JavaScript
   |   + .gitignore - specifies what files are ignored in source control
   |
   + src
       + App.css
       + App.js - container where you hook up all of your other components
       + index.css
       + index.js - JavaScript entry point with the document.getElementById('root')
     package.json - project management file
     README.md - markdown file
```

### import is an ES6 feature, not a React feature.

### JSX Rules
- Must always return something, even if it's just an empty element.
- Everything must be contains in a single element.
  - You can use *\<React.Fragement> ... \</React.Fragment>* if you want to avoid multiple nesting divs.
    - React.Fragments can be shortened to *\<> ... \</>*.
- Instead of the HTML attribute **class** you must use **className** because *class* is a reserved JavaScript word.
- All HTML attributes must be written in camel case because you are actually writing JavaScript, not HTML.
- All HTML elements must have closing tags, even if they are self closing like *\<img src="" />*.
- If you do not add the parentheses around the **return** value you must make sure that the opening element is on the same line as **return**.
- JSX is compiled to a JavaScript function call.
  - What is happening behind the scenes:
```
function Greeting() {
  return React.createElement('div', {}, 'hello world')
}
```
- For inline styles keep in mind that you are writing JavaScript so the properties are camel-cased and the values should be in quotes.
```
<h1 style={{ fontSize: "2rem", color: "red" }}>The Wonky Donkey</h1>
```

### Destructuring
```
const person = {
  name: "john",
  age: 26
};
const { name } = person;
console.log(name);
// displays: john

```

### Modules
- A way of having separate files with separate information that can be shared.
- They can be imported and exported.
- There is only one default export per module.
- You can only access hings that are exported.

### Components
1. **Stateless** functional components (dumb)
   - You can use these when you don't require state or lifecycle methods
   - Probably better performance that class-based components 
   - If you are using Hooks you will probably be using functional components
2. **Class-based** components (smart)
   - Can have state and lifecycle methods
   - Syntactical sugar for constructor functions
   - Subclass of Component
     - Extends from Component class
     - Inherits functionality
       - *class App extends React.Component {*
         - or
       - *class App extends Component {*
         - If you use this syntax the import statement for React must be:
           - *import React, { Component } from 'react';*
   - Component class us used to tranfer from basic to ES6 class

### States
- Props are read only.
  - Within a class you use *this.props**.  Wihin a function you pass it down as an argument.
- We use **state** because we have special methods (like *this.setState*) that can mutate the state.
- Array methods include **filter**, **forEach**, **map** and **reduce**. (You will use these alot)
  - You can wrap the values returned in JSX.
- Do not mutate the state . **THE STATE IS IMMUTABLE.**
  - React is keeping track of the state behind the scenes where it runs the virtual DOM.
  - Use **this.setState({})** which does a shallow merge.
    - In **this.setState({})** you only affect the values of the properties that you specify.
### Constructor
- The **constructor** is the first method that gets run in a class.
- You must call *super(props)* in the constructor.
- You can bind data in the constructor.
- We can set the state in the constructor.
```
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
    };
  }
```

### Events
- In the element we are passing the reference so we write the method name without the parentheses.
- We have to bind the state inside of the method because it has it's own context.
```
export default class Book extends Component {
  constructor(props){
    super(props)
        this.state = {
      count: 1,
    };
this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("You clicked me");
    console.log(this.state.count);
  }
...
<button type="button" onClick={this.handleClick}>
```
- With the ES6 arrow function you don't need to bind the this context.
```
handleClick = () => {
    console.log("You clicked me");
    console.log(this.state.count);
}
```

### Prop Drilling
- Passing props and methods down to children.
- Redux or Context API allow you to get data straight from some kind of parent so you don't have to prop drill.

### prop-types
- Allows you to check that the props have the correct types.
- You could you TypeScript but prop-types is a React module.
- You can also specify default prop values and whether a prop is required.
```
npm install --save prop-types
```
- Example:
```
import PropTypes from "prop-types";
...
Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/men/1.jpg",
  name: "james doe",
  age: 34,
  info: "default info about person",
};
```
- If you are passing the props as an obect
  - You have to pass the propTypes as a **shape**.
  - You cannot use defaultProps so you have to use the "||" operator in the render method.
```
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

 ```

## Forms 
### Controlled Inputs
- There are values in state that reflect the form values.
```
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
```

### Uncontrolled Inputs
  - Work with a **ref** attribute.
  - **ref**s are not limited to forms
```
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
```

# Section 12: React Hooks
- Introduced in v16.8.0
- Only use functional components
- Most common hooks are 
  - **useState** - allows you to use and set states in functional components (No need to use this.setState().)
  - **useEffect** - runs a callback function after each render so it allows you to perform a side effect like data fetching and listening   
  for an event.
    - Has two parameters:
      1. A callback function that gets invoked after each render.
      2. An array that let's React know whether to run the callback function.
  - **useContext** - preferred method to work with context api instead of using render props.