import { Component } from "react";
class ApiCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, customers: null };
  }
  async componentDidMount() {
    //   "http://localhost:3001" run previously from react-backend
    const customers = await fetch("/customers", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));

    // console.log("customers", customers);
    this.setState(() => ({
      customers: customers,
    }));
  }
  render() {
    if (this.state.customers) {
      return (
        <>
          <h4>Customers</h4>
          {this.state.customers.map((element) => {
            return (
              <li key={element.id}>
                {element.firstName} {element.lastName}
              </li>
            );
          })}
        </>
      );
    } else return "Loading";
  }
}

export default ApiCustomers;
