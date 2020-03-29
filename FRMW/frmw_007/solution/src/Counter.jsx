import React, { Component as C } from "react";
class Counter extends C {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        Лайкер <hr />
        <button onClick={this.props.onClickCallback}>
          <span role="img" aria-label="add">
            ➕
          </span>
        </button>{" "}
        <Stars length={this.props.stars} />
      </div>
    );
  }
}
const Stars = ({ length }) => (
  <span>
    {Array.from({ length }, (v, i) => ++i)
      .map(() => "⭐️")
      .join("")}
  </span>
);

export default Counter;
