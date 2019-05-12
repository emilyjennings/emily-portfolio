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
