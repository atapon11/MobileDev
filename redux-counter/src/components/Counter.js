import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../reducers/counterReducer";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amout, setAmout] = useState(0);
  const value = Number(amout) || 0;

  const resetAll = () => {
    setAmout(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>{" "}
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <br/>
      <input
        type="text"
        name="amout"
        value={amout}
        onChange={(e) => setAmout(e.target.value)}
      />
      
      <div>
        <button
          onClick={() => {
            dispatch(incrementByAmount(value));
          }}
        >
          ADD AMOUNT
        </button>{" "}
        <button onClick={resetAll}>RESET</button>
      </div>
    </section>
  );
};

export default Counter;
