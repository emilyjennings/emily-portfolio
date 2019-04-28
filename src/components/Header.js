
import React, { Component } from 'react';
import $ from 'jquery'

import NavLinks from './NavLinks'
import { Link } from "react-router-dom";

export default class Header extends Component {

  navStick = () => {
    $(".navbar").hide()

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 130) {
        $(".navbar").show()
      } else if (scrollTop <= 130) {
        $(".navbar").hide()
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
          <div className="navsubtitle"></div>
        </div>
    );
  }

}
