import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BottomLinks from './BottomLinks'


export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollTop : "",
      windowHeight: ""
    }
  }

  scrollTop = () => {
    $(".top").click(function(event){
      $(window).scrollTop(0);
    });

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 180) {
        $('.top').animate({
          opacity: '1',
        }, 1000)
      };
    });
  }

  footerShow = () => {
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop < 900) {
        $(".bottom-navbar").css("opacity", ($(window).scrollTop() - 300))
        $(".bottom-navbar").css("height", $(window).scrollTop() / 20)
        $(".row-left").css("padding-left", ($(window).scrollTop() / 4) + "px")
        $(".row-right").css("padding-right", ($(window).scrollTop() / 4) + "px")
      }
    });
  }

  componentDidMount() {
    {this.scrollTop()}
    {this.footerShow()}
  }

  render() {
    return (
      <div className="footer-wrapper">
        <div className="emily">
          <div className="socialmedia">
            <a href="https://twitter.com/Phillylosophy"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="https://www.linkedin.com/in/emily-jennings-profile/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="https://github.com/emilyjennings"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          </div>
          <Link to="/about">Designed and Created by Emily</Link>
        </div>
        <div className="bottom-navbar">
          < BottomLinks />
        </div>
      </div>
    );
  }

}
