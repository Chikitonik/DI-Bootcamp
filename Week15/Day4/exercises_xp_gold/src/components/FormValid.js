import { Component } from "react";

class FormValid extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, userName: "", userAge: "", errorMessage: "" };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const age = event.target.userAge.value;
    if (isNaN(age) || age < 0) {
      this.setState(() => ({
        errorMessage: "this is not a number, or < 0",
      }));
    } else {
      this.setState(() => ({
        errorMessage: "",
        userName: event.target.userName.value,
        userAge: age,
      }));
    }
  };
  render() {
    return (
      <>
        <h1>
          Hello {this.state.userName} {this.state.userAge}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label for="userName">Input your name</label>
          <br></br>
          <input type="text" name="userName"></input>
          <br></br>
          <label for="userAge">Input your age</label>
          <br></br>
          <input type="number" name="userAge"></input>
          <p>{this.state.errorMessage}</p>
          <br></br>
          <input type="submit"></input>
        </form>
        <br></br>
        <textarea value="some text"></textarea>
        <br></br>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes" selected>
            Mercedes
          </option>
          <option value="audi">Audi</option>
        </select>
      </>
    );
  }
}

export default FormValid;
