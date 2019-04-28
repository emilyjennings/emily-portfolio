import React, { Component } from 'react';
import $ from 'jquery'

import NavLinks from './NavLinks'
import { Link } from "react-router-dom";

export default class Header extends Component {

//changing the navbar to a long thin line when scrolled
  navStick = () => {

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop >= 140) {
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
            "display" : "none",
          }
        )
        $('.navlinks a').css(
          {
            "font-size": "15px",
            "display": "inline-block",
          }
        )
        $('hr').css(
          {
            "display": "none",
          }
        )
      } else if (scrollTop < 140){
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
            "display": "block",
          }
        )
        $('hr').css(
          {
            "display": "block",
            "margin-top": "10px",
            "margin-bottom": "20px",
          }
        )
        $('.navlinks a').css(
          {
            "font-size": "20px",
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
