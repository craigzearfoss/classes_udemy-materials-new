import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: true,
    };
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  resetCount = () => {
    this.setState({
      count: 0,
    });
  };
  lowerCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  // Note that we don't need to use this. for the handleDelete because it was passed down as a prop.
  render() {
    const { img, title, author } = this.props.info;
    const checkInfo = (info) => {
      if (info === true) {
        return <p>Lorem ipsum dolor sit amet</p>;
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3>Title : {title}</h3>
          <h5>Author : {author}</h5>
          <h3>count: {this.state.count}</h3>
          <button type="button" onClick={this.addCount}>
            add count
          </button>
          <button type="button" onClick={this.resetCount}>
            reset count
          </button>
          <button type="button" onClick={this.lowerCount}>
            lower count
          </button>
          <button type="button" onClick={this.handleInfo}>
            toggle info
          </button>
          {/* and */}
          {/*this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet
            </p>
          )*/}
          {/* ternary */}
          {this.state.showInfo ? <p>Lorem ipsum dolor sit amet</p> : null}
          {/* function */}
          {checkInfo(this.state.showInfo)}
        </div>
      </article>
    );
  }
}
