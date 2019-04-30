import React, { Component } from 'react';
import $ from 'jquery'
import { Link } from "react-router-dom";

export default class NavLinks extends Component {

  render() {
    return (
      <div className="navlinks" id="navstickline">
          <Link to="/about">Authenticity</Link>
          <Link to="/projects">Growth</Link>
          <Link to="/contact">Empathy</Link>
      </div>
    );
  }

}
