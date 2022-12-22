import { Component } from "react";
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, bookData: "", message: "" };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(() => ({
      bookData: {
        title: event.target.bookTitle.value,
        author: event.target.bookAuthor.value,
        genre: event.target.bookGenre.value,
        yearPublished: event.target.bookYearPublished.value,
      },
      message: "data sent!",
    }));
  };
  render() {
    if (this.state.bookData)
      console.log("this.state.bookData :>> ", this.state.bookData);
    return (
      <>
        <h1>New Book</h1>
        <p>{this.state.message}</p>
        <form onSubmit={this.handleSubmit}>
          <label for="bookTitle">Title</label>
          <input type="text" name="bookTitle"></input>
          <br></br>
          <label for="bookAuthor">Author</label>
          <input type="text" name="bookAuthor"></input>
          <br></br>
          <label for="bookGenre">Genre</label>
          <input type="text" name="bookGenre"></input>
          <br></br>
          <label for="bookYearPublished">Year Published</label>
          <input type="text" name="bookYearPublished"></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </>
    );
  }
}

export default Book;
