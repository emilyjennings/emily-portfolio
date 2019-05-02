import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavLinks extends Component {

  render() {
    return (
      <div className="navlinks">
        <Link to="/about" id="a">Authenticity</Link>
        <Link to="/projects" id="g">Growth</Link>
        <Link to="/contact" id="e">Empathy</Link>
      </div>
    );
  }

}
