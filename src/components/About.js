import React, { Component } from 'react';
import $ from 'jquery'

export default class About extends Component {

  changeHeader = () => {
    $('.navtitle').text("About Emily")
    $('.navsubtitle, .navsubtitlestick').text("100% Authentic.")
    $('.navsubtitle, .navsubtitlestick').show()
  }

  parallaxBackground = () => {
    $(window).scroll(function(){
      $(".story, .origin-image").css("background-position", "0% "  + (($(window).scrollTop() / 20) + 20) + "%");
    });
  }

  backgroundChange = () => {
    $(window).scroll(function(){
      if ($(window).scrollTop() > 30) {
        $("body").animate({
          'background-color': '#C4EFDA',
          'background-image':
            `radial-gradient(#35CDD1 6%, transparent 0),
            radial-gradient(#35CDD1 6%, transparent 0)`,
          'background-size': '30px 30px',
          'background-position': '0 0, 15px 15px'

        });
      }
    });
  }

  test = () => {
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 180) {
        $('.app').animate({
          'background-color': 'blue',
        }, 1000)
      };
    });
  }

  componentDidMount(){
    {this.changeHeader()}
    {this.parallaxBackground()}
    {this.test()}
  }


  render() {
    return (
      <div className="aboutpage">
        <div className="story">In 2019 I became a software engineer.</div>
        <div className="timeline-title">Before that<span id="1">.</span><span id="2">.</span><span id="3">.</span></div>
        <div className="timeline"></div>

        <div className="skills">
          <div className="skill-text">My skills</div>
          <div className="skills-container">
            <div className="skill-names">
              <div className="skill-1">Ruby on Rails</div>
              <div className="skill-2">Vanilla JavaScript</div>
              <div className="skill-3">React</div>
              <div className="skill-4">jQuery</div>
              <div className="skill-5">HTML/CSS</div>
            </div>
            <div className="skill-levels">
              <div className="skill-1-l">Ruby on Rails</div>
              <div className="skill-2-l">Vanilla JavaScript</div>
              <div className="skill-3-l">React</div>
              <div className="skill-4-l">jQuery</div>
              <div className="skill-5-l">HTML/CSS</div>
            </div>
          </div>
        </div>
      </div>
    );
  };


}
