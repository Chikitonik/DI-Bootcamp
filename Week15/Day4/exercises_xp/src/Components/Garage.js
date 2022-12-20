import React from "react";

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <>
        <div>Who lives in my {this.state.size} Garage?</div>
      </>
    );
  }
}

export default Garage;
