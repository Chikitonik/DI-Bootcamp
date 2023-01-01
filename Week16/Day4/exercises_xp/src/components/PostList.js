import { Component } from "react";
import data from "./posts.json";
import { v4 } from "uuid";

export default class PostList extends Component {
  render() {
    return (
      <>
        {data.map((element) => {
          return (
            <div key={v4()}>
              <h4 key={v4()}>{element.title}</h4>
              <p key={v4()}>{element.content}</p>
            </div>
          );
        })}
      </>
    );
  }
}
