import React from "react";
import axios from "axios";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, todosList: "" };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const text = { text: event.target.taskText.value };
      text.text = text.text.replace(/'/g, "''"); // per the SQL standard, quotes are delimited by doubling them
      const response = await axios.post("http://localhost:3001/", text);
      const tasks = response.data;
      this.setState({ todosList: tasks[0].tasks });
    } catch (error) {
      console.error(error);
    }
    event.target.taskText.value = "";
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:3001/");
      const tasks = response.data;
      this.setState({ todosList: tasks[0].tasks });
    } catch (error) {
      console.error(error);
    }
  }

  deleteTask = async (event) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/${event.target.id}`
      );
      const tasks = response.data;
      this.setState({ todosList: tasks[0].tasks });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="container">
        <h1>TODO'S</h1>
        <ul>
          {this.state.todosList !== "" &&
            this.state.todosList.map((item) => {
              return (
                <li
                  className="taskLineFromDB"
                  id={item.task_id}
                  key={item.task_id}
                  onClick={this.deleteTask}
                >
                  {item.task_text}
                </li>
              );
            })}
        </ul>
        <p>Add a new todo:</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="taskText" placeholder="task text"></input>
        </form>
      </div>
    );
  }
}
