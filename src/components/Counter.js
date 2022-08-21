import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actionCreators from "./redux";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const myState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="btn-group my-5" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(actionCreators.decrementCounter(1))}
        >
          Decrement
        </button>
        <input type="text" value={myState} />
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch(actionCreators.incrementCounter(1))}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
