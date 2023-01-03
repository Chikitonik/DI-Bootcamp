import { Component } from "react";

class GetRes extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, text: null };
  }

  async componentDidMount() {
    const text = await fetch("/hello", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));

    this.setState(() => ({
      text: text[0].text,
    }));
  }

  render() {
    return <>{this.state.text}</>;
  }
}

export default GetRes;
