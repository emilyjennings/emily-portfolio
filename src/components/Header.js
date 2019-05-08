import React, { Component } from 'react';
import $ from 'jquery'

import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import { Link } from "react-router-dom";

export default class Header extends Component {

  scrollFade = () => {
    $(window).scroll(function(){
      $(".navbar, .navbar hr").css("opacity", 1 - $(window).scrollTop() / 150);
    });
  }

  navStick = () => {
    $(window).scroll(function(){
      $(".navstick, .hamburger").css("opacity", 0 + $(window).scrollTop() / 250)
      $(".navstick").css("width", $(window).scrollTop() * 4)
    });
  }

  hamMenu = () => {
    //hides the hamburger menu at first until clicked
    $(".mobile-navlinks").hide();
    $(".hamburger").click(function(){
      $(".mobile-navlinks").slideToggle("slow", function(){
        $(".mobile-navlinks").show();
        $(".cross").show();
        $(".hamburger").fadeOut()
      });
    });

    //on click, the menu displays
    $(".cross").click(function(event){
      event.preventDefault();
      if ($(".cross").is(":visible")){
        $(".mobile-navlinks").slideToggle("slow", function(){
          $(".hamburger").fadeIn()
        });
      }
    });
  }

  //scrolls to top when clicked
  top = () => {
    $("button.top").click(function(event){
       $(window).scrollTop(0);
    });
  }

  componentDidMount(){
    {this.top()}
    {this.navStick()}
    {this.scrollFade()}
    {this.hamMenu()}
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
            <MobileNav />
            <Link to="/"><div className="navsubtitlestick"></div></Link>
            <button className="top">&#8593;</button>
          </div>

          <Link to="/"><div className="navsubtitle"></div></Link>
        </div>
    );
  }

}
