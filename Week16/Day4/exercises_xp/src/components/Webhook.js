import { Component } from "react";
import axios from "axios";

export default class Webhook extends Component {
  async handleButton() {
    console.log(
      await axios.post(
        "https://webhook.site/12132ec5-967d-4fb5-9263-6a45a57754dc",
        // mode: "no-cors",
        JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27,
        })
      )
    );
  }

  render() {
    return <button onClick={this.handleButton}>Press to post some data</button>;
  }
}
