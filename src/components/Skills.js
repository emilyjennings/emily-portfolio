import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Zoom from 'react-reveal/Zoom';



export default class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skills: {
        Ruby: {
          level: 3,
          leveltitle: "still new but pretty good",
          title: "Ruby",
          icon: "devicon-ruby-plain",
          id: "ruby"
        },
        Rails: {
          level: 3,
          leveltitle: "getting the hang of it",
          title: "Rails",
          icon: "devicon-rails-plain",
          id: "rails"
        },
        JavaScript: {
          level: 3,
          leveltitle: "been doing it for 2+ years",
          title: "JavaScript",
          icon: "devicon-javascript-plain",
          id: "javascript"
        },
      }
    }
  }

  displaySkill = () => {
    return Object.values(this.state.skills).map(skill =>
      <Zoom>
        <div className="skill">
          <div className="skill-title" id={skill.id}>{skill.title}</div>
          <div className="skill-level-title">{skill.leveltitle}</div>
          <div className="skill-level">{skill.level}</div>
          <i className={skill.icon}></i>
        </div>
      </Zoom>)
  }

  backgroundChange = () => {
    $('body').css({
      'background-color': '#C4EFDA',
      'background-image':
        `radial-gradient(#35CDD1 6%, transparent 0),
        radial-gradient(#35CDD1 6%, transparent 0)`,
      'background-size': '30px 30px',
      'background-position': '0 0, 15px 15px',
    })
  }


  componentDidMount() {
    {this.backgroundChange()}
  }

  render() {
    return (
      <div className="skills">
        <div class="skills-summary">I’m a junior engineer but a mid-career professional. Programming is a passion that I discovered in the past few years, and I’m addicted. I’ve been a teacher, a philosopher, an event planner, an admissions manager, volunteered with non-profits, and lived abroad. Now I’m here to build great tech to make the world a nicer place to live, to have fun doing it, and to learn a ton.</div>
        <div className="skill-label">My skills</div>
        <div className="skills-container">
          {this.displaySkill()}
        </div>
        <div className="space"></div>
      </div>
    );
  }

}
