import { Component } from "react";

class Events extends Component {
  constructor(props) {
    super();
    this.state = props;
    this.isToggleOn = true;
  }

  clickMe = () => {
    alert("I was clicked");
  };

  enterPressed = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  changeState = () => {
    this.isToggleOn
      ? this.setState((state) => (this.isToggleOn = false))
      : this.setState((state) => (this.isToggleOn = true));
  };

  render() {
    return (
      <>
        <button onClick={this.clickMe}>Click me </button>
        <br></br>
        <input
          type="text"
          placeholder="Press the ENTER key"
          onKeyDown={this.enterPressed}
        ></input>
        <br></br>
        <button onClick={this.changeState}>
          {this.isToggleOn ? "ON" : "OFF"}
        </button>
        <br></br>
      </>
    );
  }
}

export default Events;
