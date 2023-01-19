import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementAsync())}>
          Increment async
        </button>
        <button onClick={() => dispatch(incrementIfOdd())}>
          Increment If Odd
        </button>
      </div>
    </div>
  );
}
