import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';



export default class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'skills': {
        Ruby: {
          level: 4,
          leveltitle: "still new to it but it's comfortable",
          title: "Ruby",
          icon: "devicon-ruby-plain",
          id: "ruby",
        },
        Rails: {
          level: 4,
          leveltitle: "made a few apps with it",
          title: "Rails",
          icon: "devicon-rails-plain",
          id: "rails"
        },
        JavaScript: {
          level: 5,
          leveltitle: "have used it for a couple years now",
          title: "JavaScript",
          icon: "devicon-javascript-plain",
          id: "javascript"
        },
        React: {
          level: 4,
          leveltitle: "love its organization, getting better at it",
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
          leveltitle: "pretty good at it for animations",
          title: "jQuery",
          icon: "devicon-jquery-plain",
          id: "jquery"
        },
        Python: {
          level: 1,
          leveltitle: "starting to learn it",
          title: "Python",
          icon: "devicon-python-plain",
          id: "python"
        },
      },
      unskills: {
        Korean: {
          level: 6,
          leveltitle: "speak it at home",
          title: "Korean",
          icon: "fas fa-globe-asia",
          id: "korean"
        },
        Networking: {
          level: 10,
          leveltitle: "I just like meeting people",
          title: "Networking",
          icon: "far fa-comments",
          id: "networking"
        },
        Sewing: {
          level: 7,
          leveltitle: "I make outfits from scratch",
          title: "Sewing",
          icon: "fas fa-cut",
          id: "sewing"
        },
        Programminginwild: {
          level: 7,
          leveltitle: "I can type with one hand while holding a small child",
          title: "Programming while parenting",
          icon: "fas fa-baby",
          id: "crazycoding"
        },
      },
      softskills: {
        Empathy: {
          level: 9,
          leveltitle: "my stength",
          title: "Empathy",
          icon: "fas fa-hand-holding-heart",
          id: "empathy"
        },
        Planning: {
          level: 7,
          leveltitle: "lessons, programs and projects",
          title: "Planning",
          icon: "fas fa-edit",
          id: "planning"
        },
        Creativity: {
          level: 10,
          leveltitle: "I just love putting a new spin on things",
          title: "Creativity",
          icon: "fas fa-pencil-ruler",
          id: "creativity"
        },

      }
    }
  }

  // I want to show skill levels through a number of stars or something
  // Had trouble figuring out how to insert html (like a symbol) instead of a string of text
  skillLevelMeasure = (level) => {
    let unit = "* "
    return unit.repeat(level)
  }



  displayDevSkill = () => {
    return Object.values(this.state.skills).map(skill =>
      <div className="skill">
        <i className={skill.icon} id="skillicon"></i>
        <div className="skill-title" id={skill.id}>{skill.title}</div>
        <div className="skill-leveltitle">{skill.leveltitle}</div>
        <div className="skill-level">{this.skillLevelMeasure(skill.level)}</div>
      </div>
    )
  }
  displaySoftSkill = () => {
    return Object.values(this.state.softskills).map(skill =>
      <div className="skill">
        <div className={skill.icon} id="skillicon"></div>
        <div className="skill-title" id={skill.id}>{skill.title}</div>
        <div className="skill-leveltitle">{skill.leveltitle}</div>
        <div className="skill-level">{this.skillLevelMeasure(skill.level)}</div>

      </div>
    )
  }
  displayWeirdSkill = () => {
    return Object.values(this.state.unskills).map(skill =>
      <div className="skill">
        <div className={skill.icon} id="skillicon"></div>
        <div className="skill-title" id={skill.id}>{skill.title}</div>
        <div className="skill-leveltitle">{skill.leveltitle}</div>
        <div className="skill-level">{this.skillLevelMeasure(skill.level)}</div>

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
          <div className="col">
            <div class="skill-label">Tech Skills</div>
            <div className="skills-container">
              {this.displayDevSkill()}
            </div>
          </div>

          <div className="col">
            <div class="skill-label">Soft Skills</div>
            <div className="skills-container">
              {this.displaySoftSkill()}
            </div>
          </div>

          <div className="col">
            <div class="skill-label">Unusual Skills</div>
            <div className="skills-container">
              {this.displayWeirdSkill()}
            </div>
          </div>

        </div>
        <div className="space"></div>
      </div>
    );
  }

}
