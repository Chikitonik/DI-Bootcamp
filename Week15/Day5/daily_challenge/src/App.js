import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, result: 0 };
  }

  handlerSubmit(event) {
    event.preventDefault();
    this.setState({
      result: eval(
        event.target.form.number1.value +
          event.target.form.operation.value +
          event.target.form.number2.value
      ),
    });
  }
  render() {
    return (
      <>
        <div
          style={{
            width: "600px",
            height: "200px",
            border: "1px solid",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <h3>Input 2 numbers and choose operation</h3>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <input type="number" name="number1" required></input>
              <select name="operation">
                <option value="+">addition</option>
                <option value="-">substraction</option>
                <option value="*">mutiplication</option>
                <option value="/">division</option>
              </select>
              <input type="number" name="number2" required></input>
            </div>
            <input
              type="submit"
              value="run"
              onClick={(event) => this.handlerSubmit(event)}
            ></input>
          </form>
          <div
            style={{
              minWidth: "100px",
              backgroundColor: "lightgreen",
              textAlign: "center",
              marginTop: "10px",
              fontSize: "20px",
            }}
          >
            {Math.round(this.state.result * 100) / 100}
          </div>
        </div>
      </>
    );
  }
}
export default App;
