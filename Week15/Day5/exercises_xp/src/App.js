import React, { useState, useMemo } from "react";
import quotes from "./QuotesDatabase";
import "animate.css";

let currentColor = "blue";

const App = () => {
  // State variables to store the current quote and the animation class
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [animationClass, setAnimationClass] = useState("");
  // Memoized function that returns the JSX elements to render
  const renderElements = useMemo(() => {
    // Event handler for the button click event
    const handlerButtonClick = () => {
      // Set the animation class to trigger the animation
      setAnimationClass("animate__animated animate__fadeInDown");
      // Generate a new random quote
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      // Make sure the new quote is different from the current quote
      while (randomQuote === currentQuote) {
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      }
      // Update the current quote state
      setCurrentQuote(randomQuote);
      // Generate random color
      currentColor = "#";
      for (let i = 0; i < 6; i++) {
        currentColor += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
      }
    };
    // Function to reset the animation class after the animation has finished
    const resetAnimation = () => {
      setAnimationClass("");
    };

    // Return the JSX elements
    return (
      <>
        <style>{`body {background-color: ${currentColor}}`} </style>
        <div
          style={{
            border: "1px solid",
            width: "600px",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            margin: "50px 0 0 50px",
            color: currentColor,
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          {/* Quote text with the animation class and the onAnimationEnd event handler */}
          <h2 className={animationClass} onAnimationEnd={resetAnimation}>
            "{currentQuote.quote}"
          </h2>
          <br />
          {/* Quote author */}
          <p style={{ alignSelf: "flex-end", fontStyle: "italic" }}>
            -{currentQuote.author === "" ? "Unknown" : currentQuote.author}-
          </p>
          <br />
          {/* Button with the click event handler */}
          <button
            style={{
              width: "100px",
              height: "25px",
              alignSelf: "flex-end",
              color: "white",
              backgroundColor: currentColor,
              textShadow: "0px 0px 5px #000000",
              border: "1px solid black",
              borderRadius: "5px",
            }}
            onClick={handlerButtonClick}
          >
            New quote
          </button>
        </div>
      </>
    );
  }, [currentQuote, animationClass]);

  return renderElements;
};

export default App;
