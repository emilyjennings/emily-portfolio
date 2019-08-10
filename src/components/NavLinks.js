import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'

export default class NavLinks extends Component {

  constructor(props) {
    super(props);
  }

  scrollTop = () => {
      $(window).scrollTop(0);
  }

  render() {
    return (
      <div className="navlinks">
        <Link to="/about" id="a" onClick={() => this.scrollTop()}><FontAwesomeIcon icon={'user-astronaut'} /><p>about me</p></Link>
        <Link to="/projects" id="g" onClick={() => this.scrollTop()}><FontAwesomeIcon icon={'seedling'} /><p>dev work</p></Link>
        <Link to="/contact" id="e" onClick={() => this.scrollTop()}><FontAwesomeIcon icon={'hand-holding-heart'} /><p>connect</p></Link>
      </div>
    );
  }

}
