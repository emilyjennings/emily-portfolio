import React, { Component } from 'react';
import NavLinks from './NavLinks'
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import $ from 'jquery'


export default class Footer extends Component {

  scrollTop = () => {
    $(".top").click(function(event){
      $("html").animate({ scrollTop: 0 }, "slow")
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

  componentDidMount() {
    {this.scrollTop()}
  }

  render() {
    return (
        <div className="emily">
          <div className="socialmedia">
            <a href="https://twitter.com/Phillylosophy"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/emily-jennings-profile/"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/emilyjennings"><i class="fab fa-github"></i></a>
          </div>
          <Link to="/">Designed and Created by Emily</Link>
          <ScrollAnimation animateIn='fadeIn'>
            <div className="top">
              <button id="top">&#8593;</button>
            </div>
          </ScrollAnimation>
        </div>
    );
  }

}
