import { Component } from "react";
class ApiUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, users: null };
  }
  async componentDidMount() {
    //   "http://localhost:3001" run previously from react-backend
    const users = await fetch("/users", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));

    // console.log("users", users);
    this.setState(() => ({
      users: users,
    }));
  }
  render() {
    if (this.state.users) {
      return (
        <>
          <h4>Users</h4>
          {this.state.users.map((element) => {
            return <li key={element.id}>{element.username}</li>;
          })}
        </>
      );
    } else return "Loading";
  }
}

export default ApiUsers;
