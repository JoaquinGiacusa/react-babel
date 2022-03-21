import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  render() {
    return (
      <button style={{ backgroundColor: "aqua" }}>{this.props.children}</button>
    );
  }
}

export { Button };
