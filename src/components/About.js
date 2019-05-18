import React, { Component } from 'react';
import $ from 'jquery'

import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeline: {
        childhood: {
          title: "little",
          id: "dcpic",
          text: "College Park, Maryland is my hometown. When I was little, I liked animals, drawing pictures, and playing with my dad's Apple Macintosh computer.",
        },
        teens: {
          title: "travel",
          id: "abroad",
          text: "In my teens, I had the opportunity to live in Ukraine, South Africa and Brazil with host families. I learned first-hand about wealth disparity and what makes us all the same.",
        },
        college: {
          title: "college",
          id: "college",
          text: "At the University of Otago in Dunedin, New Zealand, I philosophized mostly at philosophy department happy hours. I wrote a dissertation on the possibility of artificial intelligence.",
        },
        between: {
          title: "New Zealand",
          id: "between",
          text: "I was also a singer in an 80s cover band, in the debating society, and the Taekwondo club. These things shaped my life."
        },
        teaching: {
          title: "teaching",
          id: "teaching",
          text: "A few years later, I got into teaching. I loved it. I always wanted to do right by my students and make the best use of their time to gain skills for the real world."
        },
        jeju: {
          title: 'Jeju',
          id: 'jeju',
          text: "I moved to Korea to teach ESL in 2011. I did that for 5 years in the beautiful island of Jeju. I designed fun and wacky lessons plans and I hiked the island's many trails. I watched every episode of HBO's Silicon Valley on maternity leave.",
        },
        philly: {
          title: "Philly",
          id: "philly",
          text: "Back in the states in 2016, I wanted to get into tech. I worked at a coding bootcamp in Philly, using my background in education to help people change their lives. I started learning to code.",
        },
        dc: {
          title: "DC",
          id: "dc",
          text: "In 2018, I moved back to DC and worked at yet another coding bootcamp. By then, I had realized I wanted to be like the people I was helping and that programming was my calling. So, I studied software engineering on my own while working full time. With a toddler.",
        },
        coding: {
          title: "Coding",
          id: "coding",
          text: "And here we are in 2019: I made this website from scratch. I am a Ruby on Rails and React programmer. Never been happier.",
        }
      }
    }
  }

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
      $("#dcpic").css("background-position", "0% "  + (($(window).scrollTop() / 20) + 10) + "%");
      $("#abroad, #college, #teaching, .story, #coding").css("background-position", "50% "  + (($(window).scrollTop() / 20)) + "%");
      $("#jeju").css("background-position", "0% "  + (($(window).scrollTop() / 60)) + "%");
      $("#between, #dc, #philly").css("background-position", "50% "  + (($(window).scrollTop() / 60)) + "%");
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
    });
  }

  displayTimeline = () => {
    return Object.values(this.state.timeline).map(item =>
      <Zoom>
        <div className="row">
          <div className="event-title">{item.title}</div>
          <div className="event-image" id={item.id}></div>
          <div className="event">{item.text}</div>
        </div>
      </Zoom>)
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

        <div className="story">I like to build things and help others.</div>
        <div className="more">A little more about me</div>
        <div className="timeline">
          {this.displayTimeline()}
        </div>

        <Zoom>
          <div className="why-title">My 'why'</div>
          <div className="why">
            <div className="why-text">I am drawn toward helping others. I like to lift others up. Empathy is a strength I have which allows me to consider all sides of every story and do the right thing. I love to make connections with others and to hear new stories, which is why I enjoy travel and cultures. And I believe that my tech skills will allow me to enhance human connections and help the world come together to make great change in the environment and society.</div>
          </div>
        </Zoom>

        <Zoom>
          <div className="regrets">I am not ashamed</div>
          <div className="timeline" id="regrets">
            I could have studied computer science in college. But would I have enjoyed programming as much as I now do? I doubt it. The richness of experiences has led me here and now I love to build. I have a desire and the perspective to want to help global society. I don't think I could be as good a programmer without that.
          </div>
        </Zoom>


        <Zoom>
          <div className="personality-title">How I Operate</div>
          <div className="personality">
            <div className="personality-box">I don't give up. I could have stopped learning, I could have gone to sleep early or watched Netflix many nights, but instead I kept going to see it to the end.</div>
            <div className="arrow"><FontAwesomeIcon icon="chevron-right"/></div>
            <div className="personality-box">I come back to the problem over and over</div>
            <div className="arrow"><FontAwesomeIcon icon="chevron-right"/></div>
            <div className="personality-box">I find the solution through research and conversations</div>
          </div>
        </Zoom>

        <div className="space"></div>

      </div>
    );
  };


}
