import React from 'react'
import { NavLink } from 'react-router-dom'

const Menubar = () => {
  return (
    <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
    </ul>
  )
}

export default Menubar