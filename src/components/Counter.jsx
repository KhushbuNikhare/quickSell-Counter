import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [num, setNum] = useState("");
  const [maxVal, setMaxVal] = useState("");

  const decNum = () => {
    if (num > 0) setNum(num - 1);
  };

  const incNum = () => {
    if (maxVal) {
      if (+num < maxVal) setNum(+num + 1);
    }
    if (!maxVal) {
      if (+num < 1000) setNum(+num + 1);
    }
  };

  return (
    <>
      <div className="counter">
        <button className="l-btn" onClick={decNum}>
          -
        </button>

        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <button className="r-btn" onClick={incNum}>
          +
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Max Value"
          value={maxVal}
          onChange={(e) => setMaxVal(e.target.value)}
        />
      </div>
    </>
  );
};

export default Counter;
