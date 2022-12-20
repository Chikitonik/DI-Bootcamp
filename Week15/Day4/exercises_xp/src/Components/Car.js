import React from "react";
import Garage from "./Garage";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.props;
  }
  render() {
    return (
      <>
        <div>
          This car is {this.state.color} {this.state.model}
        </div>
        <Garage size="small" />
      </>
    );
  }
}

export default Car;
