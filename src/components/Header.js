import React, { Component } from 'react';
import $ from 'jquery'

import NavLinks from './NavLinks'
import { Link } from "react-router-dom";

export default class Header extends Component {

  navStick = () => {

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 130) {
        $(".navbar").css(
          {
            "width": "100%",
            "height": "60px",
            "margin": "0",
            "text-align": "left",
            "border-radius": "0",
          }
        )
        $(".navtitle").css(
          {
            "font-size": "20px",
            "display" : "inline-block",
          }
        )
        $('.navlinks a').css(
          {
            "font-size": "15px",
          }
        )
        $('hr').css(
          {
            "display": "none",
          }
        )
      } else if (scrollTop <= 130) {
        $(".navbar").css(
          {
            "height": "230px",
            "text-align": "center",
            "width": "60%",
            "margin": "20px 20%",
            "border-radius": "20px",
          }
        )
        $(".navtitle").css(
          {
            "font-size": "60px",
          }
        )
        $('hr').css(
          {
            "display": "block",
          }
        )
      }
    });
  }

  componentDidMount(){
    {this.navStick()}
  }

  render() {
    return (
        <div className="headercontainer">
          <div className="navbar">
            <Link to="/"><div className="navtitle">Hi, I'm Emily</div></Link>
            <hr></hr>
            <NavLinks />
          </div>
        </div>
    );
  }

}
