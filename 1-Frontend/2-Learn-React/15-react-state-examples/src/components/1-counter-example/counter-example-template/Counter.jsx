import React from "react";

import "./Counter.css";

const Counter = () => {
  return (
    <div className="counter-div">
      <div className="counter">
        <div className="number">12</div>
      </div>
      <div className="buttons">
        <button className="btn">+</button>
        <button className="btn btn1">-</button>
      </div>
    </div>
  );
};

export default Counter;
