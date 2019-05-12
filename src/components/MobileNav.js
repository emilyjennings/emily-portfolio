import React, { Component } from 'react';
import $ from 'jquery'
import { Link } from "react-router-dom";

export default class MobileNav extends Component {

  render() {
    return (
      <div>
        <button className="hamburger">&#9776;</button>
        <div className="mobile-navlinks">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://drive.google.com/file/d/1NpJu_3fS0LiS4zt-FisdtYUKYA2cJ0rM/view">Resume</a>
          <Link to="" className="cross">x</Link>
        </div>
      </div>
    );
  }

}
