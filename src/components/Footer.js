import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
            <a href="https://twitter.com/Phillylosophy"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="https://www.linkedin.com/in/emily-jennings-profile/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="https://github.com/emilyjennings"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          </div>
          <Link to="/about">Designed and Created by Emily</Link>
            <div className="top">
              <button id="top"><FontAwesomeIcon icon={'arrow-up'} /></button>
            </div>
        </div>
    );
  }

}
