import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';



export default class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skills: {
        Ruby: {
          level: 4,
          leveltitle: "still new but pretty good",
          title: "Ruby",
          icon: "devicon-ruby-plain",
          id: "ruby"
        },
        Rails: {
          level: 4,
          leveltitle: "getting the hang of it",
          title: "Rails",
          icon: "devicon-rails-plain",
          id: "rails"
        },
        JavaScript: {
          level: 5,
          leveltitle: "comfortable",
          title: "JavaScript",
          icon: "devicon-javascript-plain",
          id: "javascript"
        },
        React: {
          level: 4,
          leveltitle: "love it, getting better",
          title: "React",
          icon: "devicon-react-original",
          id: "react"
        },
        css: {
          level: 7,
          leveltitle: "know my way around",
          title: "CSS",
          icon: "devicon-css3-plain",
          id: "css"
        },
        jQuery: {
          level: 6,
          leveltitle: "pretty good",
          title: "jQuery",
          icon: "devicon-jquery-plain",
          id: "jquery"
        },
      },
      unskills: {
        Korean: {
          level: 6,
          leveltitle: "speak it at home",
          title: "Korean",
          icon: "",
          id: "korean"
        },
        Networking: {
          level: 10,
          leveltitle: "I just like meeting people",
          title: "Networking",
          icon: "",
          id: "networking"
        },
        Sewing: {
          level: 7,
          leveltitle: "I make outfits from scratch",
          title: "Sewing",
          icon: "",
          id: "sewing"
        },
      },
      softskills: {
        Empathy: {
          level: 9,
          leveltitle: "my stength",
          title: "Empathy",
          icon: "",
          id: "empathy"
        },
        Planning: {
          level: 7,
          leveltitle: "lessons, programs and projects",
          title: "Planning",
          icon: "",
          id: "planning"
        },
        Creativity: {
          level: 10,
          leveltitle: "I just love putting a new spin on things",
          title: "Creativity",
          icon: "",
          id: "creativity"
        },

      }
    }
  }

  //How can I get the level and use that to determine the bar height?
  //Had trouble figuring out how to insert html instead of a string of text
  skillLevelMeasure = (level) => {
    let unit = ">"
    return unit.repeat(level)
  }


//Couldn't yet figure out how the divs can have different names with interpolation in the jquery selectors
  // skillUp = (level, id) => {
  //   switch(level) {
  //     case 4:
  //       $(".level-block-").animate({
  //         width: "+=30px"
  //       }, 2000)
  //       break;
  //     case 5:
  //       $(".level-block").animate({
  //         width: "+=40px"
  //       }, 2000)
  //       break;
  //     default:
  //       $(".level-block").animate({
  //         width: "+=90px"
  //       }, 2000)
  //
  //   }
  //
  // }
  //


  displayDevSkill = () => {
    return Object.values(this.state.skills).map(skill =>
      <div className="skill">
        <Fade><div className="skill-level">{this.skillLevelMeasure(skill.level)}</div></Fade>
        <div className="skill-leveltitle">{skill.leveltitle}</div>
        <div className="skill-title" id={skill.id}>{skill.title}</div>
        <i className={skill.icon}></i>
      </div>
    )
  }

  displaySoftSkill = () => {
    return Object.values(this.state.softskills).map(skill =>

        <div className="skill">
          <div className={"skill-level-" + skill.level}></div>
          <div className="skill-title" id={skill.id}>{skill.title}</div>
          <div className="skill-level-title">{skill.leveltitle}</div>
        </div>
      )
  }

  displayUnusualSkill = () => {
    return Object.values(this.state.unskills).map(skill =>

        <div className="skill">
          <div className={"skill-level-" + skill.level}></div>
          <div className="skill-title" id={skill.id}>{skill.title}</div>
          <div className="skill-level-title">{skill.leveltitle}</div>
        </div>
      )
  }

  backgroundChange = () => {
    $('body').css({
      'background-color': '#e6f7ee',
      'background-image':
        `radial-gradient(#35CDD1 6%, transparent 0),
        radial-gradient(#35CDD1 6%, transparent 0)`,
      'background-size': '30px 30px',
      'background-position': '0 0, 15px 15px',
    })
  }

  changeHeader = () => {
    $('.navtitle').text("Skills")
    $('.navsubtitle, .navsubtitlestick').text("What I can do")
    $('.navsubtitle, .navsubtitlestick').show()
    $('.navlinks').show()
  }

  componentDidMount() {
    {this.backgroundChange()}
    {this.changeHeader()}
  }

  render() {
    return (
      <div className="skills">
        <div className="skillbox">

          <div class="skill-label">Tech Skills</div>
          <div className="skills-container">
            {this.displayDevSkill()}
          </div>

          <div class="skill-label">Soft Skills</div>
          <div className="skills-container">
            {this.displaySoftSkill()}
          </div>

          <div class="skill-label">Weird Skills</div>
          <div className="skills-container">
            {this.displayUnusualSkill()}
          </div>

        </div>
        <div className="space"></div>
      </div>
    );
  }

}
