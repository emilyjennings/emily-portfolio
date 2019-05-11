import React, { Component } from 'react';
import $ from 'jquery'

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
      $(".story, .origin-image").css("background-position", "0% "  + (($(window).scrollTop() / 20) + 20) + "%");
      // $("body").css("background-position", (($(window).scrollTop() / 200)) + "%" + (($(window).scrollTop() / 200)) + "%" );
    });
  }

  backgroundChange = () => {
    $("body").css({
      'background-color': '#262c2d',
      'background-image':
        'none'

    });
  }

//Timeline div fades in on scroll
timelineFadeIn = () => {
  $(window).scroll(function(){
    if ($(window).scrollTop() > 10) {
      $(".timeline").animate({
        opacity: 1
      }, 1000);
    } else if ($(window).scrollTop() < 10) {
      $(".timeline").animate({
        opacity: 0
      }, 1000);
    }
  });
}

//makes the line for the timeline get larger
  lineGrow = () => {
    $(window).scroll(function(){
      $(".line").css("height", ($(window).scrollTop() / 1.3) - 120)
    })
    // $(window).scroll(function(){
    //   $(".line").css("height", $(window).scrollTop() / 2)
    // });
  }

  componentDidMount(){
    {this.changeHeader()}
    {this.parallaxBackground()}
    // {this.backgroundChange()}
    {this.timelineFadeIn()}
    {this.lineGrow()}
    {this.backgroundChange()}
  }


  render() {
    return (
      <div className="aboutpage">
        <div className="story">I am a human being that likes to do good for others.</div>

        <div className="line"></div>

        <div className="timeline">
          <div className="row">
            <div className="event" id="youth">I grew up in the suburbs of DC</div>
            <div className="event-image"><img src="./img/adventure.JPG" alt="" /></div>
          </div>
          <div className="row">
            <div className="event" id="school">In high school I was an exchange student in Ukraine and South Africa for long periods</div>
            <div className="event-image"><img src="./img/adventure.JPG" alt="" /></div>
          </div>
          <div className="row"></div>
          <div className="event" id="college">I decided to go to college abroad and ended up in Dunedin, New Zealand at the University of Otago. I studied philosophy.</div>
          <div className="event" id="youth">After working at some dead-end jobs in DC, I realized I wanted to try teaching. I taught middle school English in North Carolina for one year.</div>
          <div className="event" id="jeju">I then moved to Korea to teach ESL. I did that for five years in the beautiful island of Jeju.</div>
          <div className="event" id="philly">Back in the states, I worked at a coding bootcamp in Philly.</div>
          <div className="event" id="dc">I moved back to DC, studied software engineering on my own while working, and now I'm a software engineer.</div>
        </div>

        <div className="bottomlinks"></div>

      </div>
    );
  };


}

// <div className="skills">
//   <div className="skill-text">My skills</div>
//   <div className="skills-container">
//     <div className="skill-names">
//       <div className="skill-1">Ruby on Rails</div>
//       <div className="skill-2">Vanilla JavaScript</div>
//       <div className="skill-3">React</div>
//       <div className="skill-4">jQuery</div>
//       <div className="skill-5">HTML/CSS</div>
//     </div>
//     <div className="skill-levels">
//       <div className="skill-1-l">Ruby on Rails</div>
//       <div className="skill-2-l">Vanilla JavaScript</div>
//       <div className="skill-3-l">React</div>
//       <div className="skill-4-l">jQuery</div>
//       <div className="skill-5-l">HTML/CSS</div>
//     </div>
//   </div>
// </div>
