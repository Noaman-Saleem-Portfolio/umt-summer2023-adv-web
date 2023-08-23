import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName);
  console.log(lastName);

  //   const handleChange = (event) => {
  //     // console.log("first name is being entered!");
  //     // console.log(event);
  //     setFirstName(event.target.value);
  //   };
  const handleFirstNameChange = (event) => {
    // console.log("first name is being entered!");
    // console.log(event);
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    // console.log("last name is being entered!");
    // console.log(event);
    setLastName(event.target.value);
  };
  return (
    <>
      <h1>Contact Book</h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
      </form>
    </>
  );
};

export default Form;
