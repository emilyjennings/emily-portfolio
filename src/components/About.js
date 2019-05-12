import React, { Component } from 'react';
import $ from 'jquery'

import { Link } from "react-router-dom";


export default class About extends Component {

//changes what the subtitle and title say depending on page
  changeHeader = () => {
    $('.navtitle').text("About Emily")
    $('.navsubtitle, .navsubtitlestick').text("100% Authentic.")
    $('.navsubtitle, .navsubtitlestick').show()

  }

//cool scroll effect for the image
  parallaxBackground = () => {
    $(window).scroll(function(){
      $(".story, .dcpic, .event-image").css("background-position", "0% "  + (($(window).scrollTop() / 20) + 20) + "%");
      $("#abroad, #college, #teaching, #jeju, #philly, #dc").css("background-position", "0% "  + (($(window).scrollTop() / 20)) + "%");
    });
  }

  backgroundChange = () => {
    $("body").css({
      'background-color': '#262c2d',
      'background-image':
        `none`
    });

  }

//Timeline div fades in on scroll
timelineFadeIn = () => {
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop()
    if (scrollTop > 30) {
      $('.timeline, .more').animate({
        opacity: '1',
      }, 3000)
    };
  });
}


  componentDidMount(){
    {this.changeHeader()}
    {this.parallaxBackground()}
    {this.timelineFadeIn()}
    {this.backgroundChange()}
  }


  render() {
    return (
      <div className="aboutpage">
        <div className="story">I am a human being that likes to do good for others.</div>

        <div className="more">A little more about me</div>
        <div className="timeline">

          <div className="dcpic"></div>
          <div className="beginning">I grew up in the suburbs of DC.</div>


          <div className="row">
            <div className="event-image" id="abroad"></div>
            <div className="event">In my teens, I had the opportunity to live in Ukraine, South Africa and New Zealand.</div>
          </div>

          <div className="row">
            <div className="event-image" id="college"></div>
            <div className="event">In Dunedin, New Zealand at the University of Otago, I studied philosophy.</div>
          </div>

          <div className="row">
            <div className="event-image" id="teaching"></div>
            <div className="event">A few years later, I got into teaching. I loved it.</div>
          </div>

          <div className="row">
            <div className="event-image" id="jeju"></div>
            <div className="event">I moved to Korea to teach ESL in 2011. I did that for 5 years in the beautiful island of Jeju.</div>
          </div>

          <div className="row">
            <div className="event-image" id="philly"></div>
            <div className="event">Back in the states in 2016, I worked at a coding bootcamp in Philly. I started learning to code.</div>
          </div>

          <div className="row">
            <div className="event-image" id="dc"></div>
            <div className="event">In 2018, I moved back to DC and studied software engineering on my own while working full time.</div>
          </div>

          <div className="coding"></div>
          <div className="end">And here we are in 2019: I made this website from scratch.</div>

        </div>

        <div className="why-title">My 'why'</div>
        <div className="why">
          <div className="why-text">I am drawn toward helping others. I like to lift others up. Empathy is a strength I have which allows me to consider all sides of every story and do the right thing. I love to make connections with others and to hear new stories, which is why I enjoy travel and cultures. And I believe that my tech skills will allow me to enhance human connections and help the world come together to make great change in the environment and society.</div>
        </div>


      </div>
    );
  };


}
