import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <p>Message: {this.props.message}</p>
        <button onClick={() => this.props.updateMessage("Hello from Child!")}>
          Update Message
        </button>
      </div>
    );
  }
}

class Parent extends Component {
  state = { message: "Hello from Parent!" };

  updateMessage = (newMessage) => {
    this.setState({ message: newMessage });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child message={this.state.message} updateMessage={this.updateMessage} />
      </div>
    );
  }
}

export default Parent;
