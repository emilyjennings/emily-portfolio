import React, { Component } from 'react';
import $ from 'jquery'

import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';


export default class About extends Component {

//changes what the subtitle and title say depending on page
  changeHeader = () => {
    $('.navtitle').text("About Emily")
    $('.navsubtitle, .navsubtitlestick').text("100% Authentic.")
    $('.navsubtitle, .navsubtitlestick').show()
    $('.navlinks').show()
  }

//cool scroll effect for the images
  parallaxBackground = () => {
    $(window).scroll(function(){
      $(".story, .dcpic, .event-image").css("background-position", "0% "  + (($(window).scrollTop() / 20) + 20) + "%");
      $("#abroad, #college, #teaching, #jeju, #philly, #dc").css("background-position", "0% "  + (($(window).scrollTop() / 20)) + "%");
    });
  }

// Makes the background get or lose polka dots
  backgroundChange = () => {
    $("body").css({
      'background-color': '#262c2d',
      'background-image':
        `none`
    });

  }

//Timeline div fades in on scroll
  elementsFadeIn = () => {
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 30) {
        $('.timeline, .more').animate({
          opacity: '1',
        }, 2000)
      };
      // if (scrollTop > 3300) {
      //   $('.why, .why-title').animate({
      //     opacity: '1',
      //   }, 2000)
      // };
    });
  }



  componentDidMount(){
    {this.changeHeader()}
    {this.parallaxBackground()}
    {this.elementsFadeIn()}
    {this.backgroundChange()}
  }


  render() {
    return (
      <div className="aboutpage">

        <div className="story">I am a human being that likes to do good for others.</div>


        <div className="more">A little more about me</div>
        <div className="timeline">

          <Zoom>
            <div className="dcpic"></div>
            <div className="beginning">I was a DC suburbs kid in the 80s. I liked animals, drawing pictures, and playing with my dad's Apple Macintosh computer.</div>
          </Zoom>

          <Zoom>
            <div className="row">
              <div className="event-image" id="abroad"></div>
              <div className="event">In my teens, I had the opportunity to live in Ukraine, South Africa and Brazil with host families. I learned first-hand about wealth disparity and what makes us all the same.</div>
            </div>
          </Zoom>

          <Zoom>
            <div className="row">
              <div className="event-image" id="college"></div>
              <div className="event">At the University of Otago in Dunedin, New Zealand, I philosophized mostly at philosophy department happy hours. I wrote a dissertation on the possibility of artificial intelligence.</div>
            </div>
          </Zoom>

          <Zoom>
            <div className="row">
              <div className="event-image" id="teaching"></div>
              <div className="event">A few years later, I got into teaching. I loved it. I always wanted to do right by my students and make the best use of their time to gain skills for the real world.</div>
            </div>
          </Zoom>

          <Zoom>
            <div className="row">
              <div className="event-image" id="jeju"></div>
              <div className="event">I moved to Korea to teach ESL in 2011. I did that for 5 years in the beautiful island of Jeju. I designed fun and wacky lessons plans and I hiked the island's many trails. I watched every episode of HBO's Silicon Valley on maternity leave.</div>
            </div>
          </Zoom>

          <Zoom>
            <div className="row">
              <div className="event-image" id="philly"></div>
              <div className="event">Back in the states in 2016, I decided not to be in the classroom anymore. I wanted to get into tech. I worked at a coding bootcamp in Philly, using my b ackground in education to help people change their lives. I started learning to code.</div>
            </div>
          </Zoom>

          <Zoom>
            <div className="row">
              <div className="event-image" id="dc"></div>
              <div className="event">In 2018, I moved back to DC and worked at yet another coding bootcamp. By then, I had realized I wanted to be like the people I was helping and that programming was my calling. So, I studied software engineering on my own while working full time. With a toddler.</div>
            </div>
          </Zoom>

          <Zoom>
            <div className="coding"></div>
            <div className="end">And here we are in 2019: I made this website from scratch. I am a Ruby on Rails and React programmer. Never been happier.</div>
          </Zoom>

        </div>

        <Zoom>
          <div className="why-title">My 'why'</div>
          <div className="why">
            <div className="why-text">I am drawn toward helping others. I like to lift others up. Empathy is a strength I have which allows me to consider all sides of every story and do the right thing. I love to make connections with others and to hear new stories, which is why I enjoy travel and cultures. And I believe that my tech skills will allow me to enhance human connections and help the world come together to make great change in the environment and society.</div>
          </div>
        </Zoom>

        <div className="space"></div>

      </div>
    );
  };


}
