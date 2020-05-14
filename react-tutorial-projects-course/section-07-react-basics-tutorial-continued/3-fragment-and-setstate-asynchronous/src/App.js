import React, { Component } from "react";
import "./App.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  /*
  handleIncrease = () => {
    console.log("called first :", this.state.count);

    this.setState({
      count: this.state.count + 1,
    });
    console.log("called second :", this.state.count);
    // this.setState() is asynchronous so the count is not updated before the second console.log executes.
    // This results in the output:
    //  called first :0
    //  called second :0

  };
  */

  handleIncrease = () => {
    console.log("called first :", this.state.count);

    // note the this.setState() is asynchronous so the count is not updated before the second console.log executes
    this.setState({
      count: this.state.count + 1,
    });

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log("called second :", this.state.count)
    );

    console.log("called third :", this.state.count);
    // Note you can pass a callback function as the second parameter to setState() when you need to be sure that is has updated.
    // This results in the output:
    //  called first :0
    //  called third :0
    //  called second :`
  };

  handleDecrease = () => {
    console.log("called first :", this.state.count);

    // pass function instead of state object when you are concerned about the values and want to wait for them the update.
    this.setState((state, props) => {
      return { count: state.count - 1 };
    });

    console.log("called second :", this.state.count);
  };

  render() {
    return (
      <>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button className="button" onClick={this.handleDecrease}>
            decrease
          </button>
          <span style={{ margin: "1rem" }}>count : {this.state.count}</span>
          <button className="button" onClick={this.handleIncrease}>
            increase
          </button>
        </div>
      </>
    );
  }
}

class App extends Component {
  render() {
    return <Counter amount="2" />;
  }
}

export default App;
