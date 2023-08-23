import React, { useState } from "react";

import "./FormStateObject.css";

const FormStateObject = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  console.log(formData);

  const handleChange = (event) => {
    // console.log(event);

    setFormData((prev) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prev,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <>
      <h1>Contact Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
        />
        <br />
        <input
          type="checkbox"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
          id="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>

        <fieldset>
          <legend>Current employment status</legend>

          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            onChange={handleChange}
            checked={formData.employment === "unemployed"}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            onChange={handleChange}
            checked={formData.employment === "part-time"}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            onChange={handleChange}
            checked={formData.employment === "full-time"}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>

        <br />

        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <br />
        <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormStateObject;
