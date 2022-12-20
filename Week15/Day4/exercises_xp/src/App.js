import Car from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

const carinfo = { name: "Ford", model: "Mustang", color: "red" };

function App() {
  return (
    <>
      <Car props={carinfo} />
      <Events />
      <Phone />
      <Color />
    </>
  );
}

export default App;
