import { Component } from "react";

class FakePostFetch extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", email: "" };
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState(() => ({ [event.target.name]: event.target.value }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state.user, email: this.state.email }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="user"
          value={this.state.user}
        ></input>
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
        ></input>
        <br />
        <input type="submit" value="Add user"></input>
      </form>
    );
  }
}

export default FakePostFetch;
