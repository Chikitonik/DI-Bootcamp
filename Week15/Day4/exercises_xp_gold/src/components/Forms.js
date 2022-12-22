import { Component } from "react";

class Forms extends Component {
  constructor(proms) {
    super(proms);
    this.state = {
      ...proms,
      username: "",
      username2: "",
      username3: "",
    };
  }
  handleChange = (event) => {
    this.setState(() => ({
      username: event.target.value,
    }));
  };
  handleChange2 = (event) => {
    this.username2 = event.target.value;
  };
  handleChange3 = (event) => {
    this.username3 = event.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(() => ({
      username2: this.username2,
    }));
  };
  handleSubmit3 = (event) => {
    event.preventDefault();
    this.setState(() => ({
      username3: this.username3,
    }));
  };

  render() {
    return (
      <>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input type="text" name="name" onChange={this.handleChange}></input>
        <h1>Hello {this.state.username2}</h1>
        <p>Enter your name and press enter</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange2}></input>
        </form>
        <h1>Hello {this.state.username3}</h1>
        <p>Enter your name and press enter or the button</p>
        <form onSubmit={this.handleSubmit3}>
          <input type="text" name="name" onChange={this.handleChange3}></input>
          <input type="submit"></input>
        </form>
      </>
    );
  }
}

export default Forms;
