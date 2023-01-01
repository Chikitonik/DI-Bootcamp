import { Component } from "react";
import data from "./data.json";
import { v4 } from "uuid";

export default class Example3 extends Component {
  render() {
    return (
      <div key={v4()}>
        {data.Experiences.map((element) => {
          return (
            <div key={v4()}>
              <img src={element.logo}></img>
              <h5>{element.companyName}</h5>
              {element.roles.map((role) => {
                return (
                  <div key={v4()}>
                    <p>{role.title}</p>
                    <p>
                      {role.startDate} {role.location}
                    </p>
                    <p>{role.description}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
