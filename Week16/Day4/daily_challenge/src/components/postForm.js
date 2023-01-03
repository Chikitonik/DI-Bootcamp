import { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, request: "" };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const request = await fetch("/world", {
      method: "POST",
      //   mode: "no-cors",
      body: JSON.stringify({ text: event.target.requestText.value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));

    this.setState(() => ({ request: request[0].text }));
  };
  render() {
    return (
      <>
        <h3>Post to server:</h3>
        <form action="post" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="text to the server"
            name="requestText"
          ></input>
          <input type="submit"></input>
        </form>
        <>{this.state.request}</>
      </>
    );
  }
}
