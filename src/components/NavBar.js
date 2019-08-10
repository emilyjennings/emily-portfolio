import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

export default class NavBar extends Component {

  scrollTop = () => {
      $(window).scrollTop(0);
  }

  render() {
    return (
      <div>
        <button className="hamburger">&#9776;</button>
        <div className="mobile-navlinks">
          <Link to="/about" onClick={() => this.scrollTop()}>About</Link>
          <Link to="/projects" onClick={() => this.scrollTop()}>Projects</Link>
          <Link to="/contact" onClick={() => this.scrollTop()}>Contact</Link>
          <Link to="/skills" onClick={() => this.scrollTop()}>Skills</Link>
          <a href="https://emily-jennings-blog.herokuapp.com/posts">Blog</a>
          <Link to="/" onClick={() => this.scrollTop()}>Home</Link>
          <Link to="" className="cross">x</Link>
        </div>
      </div>
    );
  }

}
