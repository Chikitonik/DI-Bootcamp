import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, visible: "false" };
  }
  closeModal = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <>
        {this.state.visible && (
          <div
            className="modalBackground"
            style={{
              position: "fixed",
              display: "flex",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              background: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="modalBody"
              style={{
                padding: "10px",
                background: "white",
                border: "radius 5px",
              }}
            >
              {this.props.children}
              <br />
              <button onClick={this.closeModal}>Close</button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
