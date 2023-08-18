import React from "react";

const Contact = () => {
  return (
    <div className="contact-section container mt-5">
      <form style={{width:"50%",margin:"0 auto"}}>
        <div class="mb-3">
          <label for="First Name" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="First Name"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="Last Name" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="Last Name"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Do you want to receive updates in your Email
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
