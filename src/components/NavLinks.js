import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavLinks extends Component {

  render() {
    return (
      <div className="navlinks">
        <Link to="/about">Authenticity</Link>
        <Link to="/projects">Growth</Link>
        <Link to="/contact">Empathy</Link>
      </div>
    );
  }

}
