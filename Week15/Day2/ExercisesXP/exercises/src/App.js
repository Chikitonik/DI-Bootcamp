// import logo from "./logo.svg";
import "./App.css";
import "./UserFavoriteAnimals";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise4 from "./Exercise4";
import "./Exercise4.css";

const myElement = <h1>I love JSX!</h1>;
const sum = 5 + 5;
const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {myElement}
        <p>React is {sum} times better with JSX</p>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals colors={user.favAnimals} />
      </header>
      <Exercise4 />
    </div>
  );
}

export default App;
