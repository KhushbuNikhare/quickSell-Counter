import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [num, setNum] = useState();
  const [maxVal, setMaxVal] = useState();

  const decNum = () => {
    if (num) {
      setNum(+num - 1);
    } else {
      setNum(1 - 1);
    }
  };

  const incNum = () => {
    if (num) {
      setNum(+num + 1);
    } else {
      setNum(1 + 1);
    }
  };

  const inputNum = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="counter">
      <button className="l-btn" onClick={decNum}>
        -
      </button>
      <h1>
        <input type="text" value={num} onChange={inputNum} />
      </h1>
      <button className="r-btn" onClick={incNum}>
        +
      </button>
    </div>
  );
};

export default Counter;
