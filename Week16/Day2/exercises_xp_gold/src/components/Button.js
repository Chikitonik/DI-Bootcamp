import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, isError: false };
  }
  handleClick = () => {
    this.setState({ isError: true });
  };
  render() {
    if (this.state.isError) {
      throw new Error();
    }
    return <button onClick={this.handleClick}>Occur an error</button>;
  }
}

export default Button;
