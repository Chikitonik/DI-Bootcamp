import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span> Your age: {count}</span>
      </div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          age Down
        </button>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          age Up
        </button>
      </div>
    </div>
  );
}
