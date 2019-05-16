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
          leveltitle: "been doing it for a couple years",
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
          level: 6,
          leveltitle: "know my way around",
          title: "CSS",
          icon: "devicon-css3-plain",
          id: "css"
        },
        git: {
          level: 3,
          leveltitle: "need to learn more",
          title: "Git",
          icon: "devicon-git-plain",
          id: "git"
        },
        Github: {
          level: 3,
          leveltitle: "still learning",
          title: "Github",
          icon: "devicon-github-plain",
          id: "github"
        },
        Heroku: {
          level: 3,
          leveltitle: "got some skills",
          title: "Heroku",
          icon: "devicon-heroku-original",
          id: "heroku"
        },
        jQuery: {
          level: 6,
          leveltitle: "pretty good",
          title: "jQuery",
          icon: "devicon-jquery-plain",
          id: "jquery"
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
