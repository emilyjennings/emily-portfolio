import React, { Component } from 'react';
import $ from 'jquery'

import NavLinks from '../components/NavLinks'
import NavBar from '../components/NavBar'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Header extends Component {

  scrollFade = () => {
    $(window).scroll(function(){
      $(".navbar, hr").css("opacity", 1 - $(window).scrollTop() / 150);
      if ($(window).scrollTop() > 400) {
        $(".navbar, hr").css("display", "none");
      } else if ($(window).scrollTop() < 400) {
        $(".navbar, hr").css("display", "block");      }
    });
  }

  navStick = () => {
    $(window).scroll(function(){
      $(".navstick, .hamburger").css("opacity", 0 + $(window).scrollTop() / 250)
      $(".navstick").css("width", $(window).scrollTop() * 4)
    });
  }

  componentDidMount(){
    {this.navStick()}
    {this.scrollFade()}
  }

  render() {
    return (
        <div className="headercontainer">

          <div className="navbar">
            <Link to="/"><div className="navtitle">Hi, I'm Emily</div></Link>
            <hr></hr>
            <NavLinks />
          </div>

          <div className="navstick">
            <NavBar />
            <Link to="/"><div className="navsubtitlestick"></div></Link>
            <button className="top">
              <FontAwesomeIcon icon={'hand-point-up'} />
            </button>
          </div>

          <Link to="/"><div className="navsubtitle"></div></Link>
        </div>
    );
  }

}
