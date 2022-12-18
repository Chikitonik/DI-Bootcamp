// import logo from './logo.svg';
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import image4 from "./img/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div style={{ width: "600px" }}>
      <Carousel>
        <div>
          <img src={image1} alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src={image2} alt="Hong Kong" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src={image3} alt="Hong Kong" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src={image4} alt="Hong Kong" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
