import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        margin: "20px",
        color: "red",
      }}
    >
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          increment();
        }}
        style={{ margin: "0 5px" }}
      >
        increment
      </button>

      <button
        onClick={() => {
          decrement();
        }}
        style={{ margin: "0 5px" }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          reset();
        }}
        style={{ margin: "0 5px" }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
