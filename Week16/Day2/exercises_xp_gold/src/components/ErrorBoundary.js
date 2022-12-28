import React from "react";
import Modal from "./Modal";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error) {
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          {this.props.children}
          <Modal>
            <h2>Something went wrong...</h2>
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </Modal>
        </>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
