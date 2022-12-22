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
      errorMessage: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(() => ({
      errorMessage: "",
    }));
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const emailAddress = event.target.emailAddress.value;
    if (
      firstName === "" ||
      lastName === "" ||
      phoneNumber === "" ||
      emailAddress === ""
    ) {
      this.setState(() => ({
        errorMessage: "some data didn't input",
      }));
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      this.setState(() => ({
        errorMessage: "Please enter a 10-digit phone number",
      }));
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(emailAddress)) {
      this.setState(() => ({
        errorMessage: "Please enter a valid email address",
      }));
    } else {
      this.setState(() => ({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
      }));
    }
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
              <div class="text-danger">{this.state.errorMessage}&emsp;</div>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                ></input>
                <br></br>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                ></input>
                <br></br>
                <input
                  type="text"
                  name="phoneNumber"
                  // pattern="[0-9]{10}"
                  // title="Please enter a 10-digit phone number"
                  placeholder="Phone number"
                ></input>
                <br></br>
                <input
                  type="text"
                  name="emailAddress"
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  // title="Please enter a valid email address"
                  placeholder="Email address"
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
