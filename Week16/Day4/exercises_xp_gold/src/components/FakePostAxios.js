import { Component } from "react";
import axios from "axios";

class FakePostAxios extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", email: "" };
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState(() => ({ [event.target.name]: event.target.value }));
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.post(
      "https://jsonplaceholder.typicode.com/users/",
      JSON.stringify({
        userId: this.state.userId,
        title: this.state.title,
        body: this.state.body,
      })
    );
    console.log("resp".data, resp.data);
  };
  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="userId"
          value={this.state.userId}
        ></input>
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
        ></input>
        <br />
        <input
          type="text"
          name="body"
          placeholder="body"
          value={this.state.body}
        ></input>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default FakePostAxios;
