import "./App.css";
import { Component } from "react";
import superheroes from "./superheroes.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      cardDesk: superheroes.superheroes,
      score: 0,
      maxScore: 0,
    };
  }
  handleClick = (event) => {
    const id = parseInt(event.target.id || event.target.parentElement.id);
    let cardDesk = this.state.cardDesk.map((element) => {
      if (element.id === id) {
        if (!element.clicked) {
          this.setState((prevState) => ({
            score: prevState.score + 1,
          }));
          if (this.state.score + 1 > this.state.maxScore) {
            this.setState({
              maxScore: this.state.score + 1,
            });
          }
          return { ...element, clicked: true };
        } else {
          this.setState({
            score: 0,
          });
          cardDesk = this.state.cardDesk.map((element) => {
            return (element.clicked = false);
          });
        }
      }
      return element;
    });
    cardDesk = cardDesk.sort((a, b) => 0.5 - Math.random());
    this.setState({
      cardDesk: cardDesk,
    });
  };
  render() {
    return (
      <>
        <h1>Superheroes Memory Game</h1>
        <h2>
          Score: {this.state.score} Top score: {this.state.maxScore}
        </h2>
        <h3>
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
        <div className="cardDesk">
          {this.state.cardDesk.map((value) => {
            return (
              <div
                className="card"
                key={value.id}
                id={value.id}
                onClick={this.handleClick}
              >
                <div
                  className="image"
                  style={{ backgroundImage: `url(${value.image})` }}
                ></div>
                <div>Name: {value.name}</div>
                <div>Occupation: {value.occupation}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
