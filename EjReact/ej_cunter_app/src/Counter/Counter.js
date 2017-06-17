import React, { Component } from "react";
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    const {initialValue} = this.props;

    this.state = {
      value: initialValue
    };
  }

  increase() {
    this.setState(prevState => ({
      ...prevState,
      value: prevState.value + 1
    }));
  }
  decrease() {
    this.setState(prevState => ({
      ...prevState,
      value: prevState.value - 1
    }));
  }

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <button onClick={() => this.increase()}>+</button>
        <div>{value}</div>
        <button onClick={() => this.decrease()}>-</button>
      </div>
    );
  }
}

export default Counter;