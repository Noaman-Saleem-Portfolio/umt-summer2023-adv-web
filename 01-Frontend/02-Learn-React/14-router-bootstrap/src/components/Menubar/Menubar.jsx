import React from "react";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  return (
    <nav class="navbar navbar-expand-lg  bg-primary" data-bs-theme="dark" >
      <div class="container">
        <a class="navbar-brand">
          Brand Logo
        </a>
       
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/books">
                Books
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/contact">
                Contact
              </NavLink>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
