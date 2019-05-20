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
          <Link to="/skills">Skills</Link>
          <Link to="/">Home</Link>
          <Link to="" className="cross">x</Link>
        </div>
      </div>
    );
  }

}
