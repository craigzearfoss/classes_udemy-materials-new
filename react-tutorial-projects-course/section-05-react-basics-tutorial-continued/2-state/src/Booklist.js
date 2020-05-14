import React, { Component } from "react";
import Book from "./Book";
import booksData from "./BookData";

export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
    };
  }

  // state = {
  //
  //}

  handleDelete = (id) => {
    console.log(`i'm from parent component`);

    console.log(this.state.books);
    const sortedBooks = this.state.books.filter((item) => item.id !== id);
    this.setState({ books: sortedBooks });
  };

  // Note that you need a key for each item which should be unique.
  render() {
    return (
      <section>
        <h3>This is out Boolist</h3>
        {this.state.books.map((item, index) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
