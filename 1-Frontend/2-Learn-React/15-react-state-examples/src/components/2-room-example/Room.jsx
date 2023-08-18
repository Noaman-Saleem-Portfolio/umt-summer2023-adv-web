import React, { useState } from "react";

import "./Room.css";

const Room = () => {
  const [isLit, setIsLit] = useState(true);
  const [temperature, setTemperature] = useState(32);

  const toggleLight = () => {
    // setIsLit(!isLit);
    setIsLit((prev) => !prev);
  };

  const increaseTemp = () => {
    setTemperature((prev) => prev + 1);
  };
  return (
    <div className={`room ${isLit ? "light" : "dark"}`}>
      <p>The room is {isLit ? "Lit" : "Dark"}</p>
      <button onClick={toggleLight}>Toggle Light</button>

      <h1>{temperature} degree</h1>
      <button onClick={increaseTemp}>+ Temperature</button>
    </div>
  );
};

export default Room;
