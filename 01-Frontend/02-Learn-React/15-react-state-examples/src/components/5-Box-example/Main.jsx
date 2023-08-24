import React from "react";
import boxes from "./boxes";

import "./Box.css";

const Main = () => {
  const [squares, setSquares] = React.useState(boxes);

  return (
    <main>
      {squares.map((square) => {
        return (
          <div
            className="box"
            // Hint --> onClick event will run a call back function
            // That will be passed as onClick={() => yourFunction(square.id)} instead of onClick={yourFunction(square.id)}
            // We are passing the square.id in order to recognise which bax was clicked

            style={{ backgroundColor: square.on ? "#222222" : "transparent" }}
          ></div>
        );
      })}
    </main>
  );
};

export default Main;
