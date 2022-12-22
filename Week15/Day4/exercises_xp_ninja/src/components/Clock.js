import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, currentDate: new Date().toLocaleTimeString() };
  }
  tick() {
    this.setState(() => ({
      currentDate: new Date().toLocaleTimeString(),
    }));
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.currentDate}</h2>
      </>
    );
  }
}

export default Clock;
