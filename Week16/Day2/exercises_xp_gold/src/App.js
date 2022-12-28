import ErrorBoundary from "./components/ErrorBoundary";
import Button from "./components/Button";

function App() {
  return (
    <ErrorBoundary>
      <Button />
    </ErrorBoundary>
  );
}

export default App;
