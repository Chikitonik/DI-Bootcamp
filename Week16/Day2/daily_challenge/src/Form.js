import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
    if (["nutsFree", "lactoseFree", "vegan"].includes(name)) {
      this.setState({ [name]: event.target.checked });
      console.log("this.state.nutsFree", this.state.nutsFree);
    }
  };
  render() {
    return (
      <>
        <div className="header">Sample form</div>
        <form className="form" onChange={this.handleChange}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName} //this is the standard
          ></input>
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
          ></input>
          <br />
          <input type="number" name="age" placeholder="Age"></input>
          <br />
          <br />
          <input type="radio" name="gender" value="Male" />
          Male
          <br />
          <input type="radio" name="gender" value="Female" />
          Female
          <br />
          <br />
          <label>Select your destination</label>
          <br />
          <select name="destination">
            <option value>-- Please Choose a destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brasil">Brasil</option>
          </select>
          <br />
          <br />
          <label>Dietary restrictions:</label>
          <br />
          <div>
            <input type="checkbox" name="nutsFree" />
            Nuts free
            <br />
            <input type="checkbox" name="lactoseFree" />
            Lactose free
            <br />
            <input type="checkbox" name="vegan" />
            Vegan
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div className="entered-information">
          <h3>Entered information:</h3>
          <p>
            Your name: {this.state.firstName} {this.state.lastName}
          </p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>
            Your destination:
            {this.state.destination === "true" ? "" : this.state.destination}
          </p>
          <p>Your dietary restrictions:</p>

          <p>**Nuts free :{this.state.nutsFree ? "Yes" : "No"}</p>
          <p>**Lactose free : {this.state.lactoseFree ? "Yes" : "No"}</p>
          <p>**Vegan meal : {this.state.vegan ? "Yes" : "No"}</p>
        </div>
      </>
    );
  }
}

export default Form;
