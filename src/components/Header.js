import React, { Component } from 'react';
import $ from 'jquery'

import NavLinks from './NavLinks'
import { Link } from "react-router-dom";

export default class Header extends Component {

  scrollFade = () => {
    $(window).scroll(function(){
      $(".navbar").css("opacity", 1 - $(window).scrollTop() / 250);
    });
  }

  navStick = () => {
    $(window).scroll(function(){
      $(".navstick").css("opacity", 0 + $(window).scrollTop() / 250)
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
            <NavLinks />
            <Link to="/"><div className="navsubtitlestick"></div></Link>
          </div>
          <Link to="/"><div className="navsubtitle"></div></Link>
        </div>
    );
  }

}
