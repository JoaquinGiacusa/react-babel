import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>Hola {this.state.counter}</h2>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById("hello-example"));
