import React from "react";

import "./Student.css";

import user from "./images/user.png";
import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";

const Student = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  return (
    <main>
      <article className="card">
        <img src={user} className="card--image" />
        <div className="card--info">
          <img src={starIcon} className="card--favorite" />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default Student;
