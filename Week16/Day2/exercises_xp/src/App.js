import React from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import Color from "./components/Color";

function App() {
  return (
    <>
      <h3>This is an example of error boundaries in React 16.</h3>
      <h3>
        Click on the numbers to increase the counters. The counter is programmed
        to throw when it reaches 5. This simulates a JavaScript error in a
        component.
      </h3>
      <hr />
      <p>
        These two counters are inside the same error boundary. If one crashes,
        the error boundary will replace both of them.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        Counter without boundary. If it crashed, the blank page will appeared
      </p>
      <BuggyCounter />
      <hr />
      <Color />
    </>
  );
}

export default App;
