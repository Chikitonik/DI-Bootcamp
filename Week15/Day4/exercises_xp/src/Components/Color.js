import { Component } from "react";
class Color extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  componentDidMount() {
    this.setState({ favoriteColor: "red" });
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }
  changeToBlue = () => {
    this.setState({ favoriteColor: "blue" });
  };
  render() {
    return (
      <>
        <p>My favorite color is {this.state.favoriteColor}</p>
        <button onClick={this.changeToBlue}>change to blue</button>
      </>
    );
  }
}

export default Color;
