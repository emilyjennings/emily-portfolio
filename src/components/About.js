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


  render() {
    return (
      <div className="aboutpage">
        <div className="story">In 2019 I became a software engineer.</div>
        <div className="origin">
          <div className="origin-text">
            <p>From: D.C.</p>
            <p>Lived in:</p>
            <p>
              <ul>
                <li>Korea, 2011-2016</li>
                <li>New Zealand, 2002-2007</li>
                <li>Ukraine, 1998</li>
              </ul>
            </p>
          </div>
          <div className="origin-image"></div>
        </div>

        <div className="mapbox">

        </div>

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

  componentDidMount(){
    {this.changeHeader()}
    {this.parallaxBackground()}
  }


}
