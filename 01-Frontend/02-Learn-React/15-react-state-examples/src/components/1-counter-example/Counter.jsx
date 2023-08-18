import React, { useState } from "react";

import "./Counter.css";

const Counter = () => {
  //   console.log(`Counter component rendered`);
  let [number, setNumber] = useState(144);

  const increment = () => {
    // console.log("+ clicked");
    // setNumber(number++);
    // setNumber((prevNumber) => {
    //   //   console.log(`prevNumber = ${prevNumber}`);
    //   return prevNumber + 1;
    // });
    setNumber((prevNumber) => prevNumber + 1);
  };
  return (
    <div className="counter-div">
      <div className="counter">
        <div className="number">{number}</div>
      </div>
      <div className="buttons">
        <button className="btn" onClick={increment}>
          +
        </button>
        <button className="btn btn1">-</button>
      </div>
    </div>
  );
};

export default Counter;
