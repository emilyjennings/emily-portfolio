import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <button className="hamburger">&#9776;</button>
        <div className="mobile-navlinks">
          <Link to="/about" onClick={() => this.props.scrollTop()}>About</Link>
          <Link to="/projects" onClick={() => this.props.scrollTop()}>Projects</Link>
          <Link to="/contact" onClick={() => this.props.scrollTop()}>Contact</Link>
          <Link to="/skills" onClick={() => this.props.scrollTop()}>Skills</Link>
          <Link to="/" onClick={() => this.props.scrollTop()}>Home</Link>
          <Link to="" className="cross">x</Link>
        </div>
      </div>
    );
  }

}
