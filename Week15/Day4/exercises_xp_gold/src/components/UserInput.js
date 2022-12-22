import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const emailAddress = event.target.emailAddress.value;

    this.setState(() => ({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    }));
  };
  handleReset = () => {
    this.setState(() => ({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
    }));
  };
  render() {
    if (this.state.firstName === "") {
      return (
        <>
          <div class="row">
            <div
              style={{
                backgroundColor: "rgb(211, 211, 211)",
                borderRadius: "10%",
              }}
              class="col-md-4 mx-auto mt-1 text-center p-5 "
            >
              <div class="h3">Welcome!</div>
              <div>Please provide your information below</div>
              <br></br>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                ></input>
                <br></br>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  required
                ></input>
                <br></br>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  required
                ></input>
                <br></br>
                <input
                  type="text"
                  name="emailAddress"
                  placeholder="Email address"
                  required
                ></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
              </form>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div class="row">
            <div
              style={{
                backgroundColor: "rgb(211, 211, 211)",
                borderRadius: "10%",
              }}
              class="col-md-4 mx-auto mt-1 text-center p-5 "
            >
              <div>
                {this.state.lastName}, {this.state.firstName}
              </div>
              <br></br>
              <div>
                {this.state.phoneNumber} | {this.state.emailAddress}
              </div>
              <br></br>
              <button onClick={this.handleReset}>Reset</button>
            </div>
          </div>
        </>
      );
    }
  }
}

export default UserInput;
