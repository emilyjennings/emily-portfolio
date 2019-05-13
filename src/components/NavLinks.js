import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavLinks extends Component {

  render() {
    return (
      <div className="navlinks">
        <Link to="/about" id="a"><FontAwesomeIcon icon={'user-astronaut'} /><p>about me</p></Link>
        <Link to="/projects" id="g"><FontAwesomeIcon icon={'seedling'} /><p>dev work</p></Link>
        <Link to="/contact" id="e"><FontAwesomeIcon icon={'hand-holding-heart'} /><p>connect</p></Link>
      </div>
    );
  }

}
