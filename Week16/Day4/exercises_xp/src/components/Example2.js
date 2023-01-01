import { Component } from "react";
import data from "./data.json";
import { v4 } from "uuid";

export default class Example2 extends Component {
  render() {
    return (
      <>
        {data.Skills.map((element) => {
          return (
            <div key={v4()}>
              <h5 key={v4()}>{element.Area}</h5>
              {element.SkillSet.map((skill) => {
                return <li key={v4()}>{skill.Name}</li>;
              })}
            </div>
          );
        })}
      </>
    );
  }
}
