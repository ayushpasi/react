import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, addByValue } from "../counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(increment);
  return (
    <div>
      <p>Counter {count}</p>
      <button
        style={{ background: "lightblue", color: "red" }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        style={{ background: "lightblue", color: "red" }}
        onClick={() => dispatch(addByValue(5))}
      >
        AddByFive
      </button>
    </div>
  );
};

export default Counter;
