import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavLinks extends Component {

  render() {
    return (
      <div className="navlinks">
        <Link to="/about" id="a"><FontAwesomeIcon icon={'lock-open'} /></Link>
        <Link to="/projects" id="g"><FontAwesomeIcon icon={'seedling'} /></Link>
        <Link to="/contact" id="e"><FontAwesomeIcon icon={'hand-holding-heart'} /></Link>
      </div>
    );
  }

}
