import { Component } from "react";

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, Php: 0, Python: 0, JavaScript: 0, Java: 0 };
  }
  handleClick = (event) => {
    const key = event.target.id;
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  };
  render() {
    return (
      <div>
        <h3>Vote your language</h3>
        {Object.entries(this.state).map(([key, val]) => (
          <div
            key={key}
            style={{
              backgroundColor: "rgb(153,255,187)",
              width: "220px",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "3px",
              border: "1px solid",
              margin: "3px",
            }}
          >
            <div style={{ width: "50px", textAlign: "center" }}> {val} </div>
            <div style={{ width: "80px" }}>{key} </div>
            <div
              id={key}
              style={{ cursor: "pointer", color: "green" }}
              onClick={this.handleClick}
            >
              Click here
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Languages;
