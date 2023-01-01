import { Component } from "react";
import data from "./data.json";
import { v4 } from "uuid";

export default class Example1 extends Component {
  render() {
    return (
      <ul>
        {data.SocialMedias.map((element) => {
          return <li key={v4()}>{element}</li>;
        })}
      </ul>
    );
  }
}
