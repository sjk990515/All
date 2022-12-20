// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);
  return (
    <div>
      <p>{number}</p>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
