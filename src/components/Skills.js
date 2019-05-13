import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Skills extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="skills">
        <div class="skills-summary">I’m a junior engineer but a mid-career professional. Programming is a passion that I discovered in the past few years, and I’m addicted. I’ve been a teacher, a philosopher, an event planner, an admissions manager, volunteered with non-profits, and lived abroad. Now I’m here to build great tech to make the world a nicer place to live, to have fun doing it, and to learn a ton.</div>
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
    );
  }

}
