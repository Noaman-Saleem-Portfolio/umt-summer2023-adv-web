import React from "react";
import "./Things.css";
const Things = () => {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);
  return (
    <div>
      <button>Add Item</button>
      {thingsArray.map((thing) => {
        return <p>{thing}</p>;
      })}
    </div>
  );
};

export default Things;
