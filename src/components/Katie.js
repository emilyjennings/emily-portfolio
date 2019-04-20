import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'
import { PropTypes } from 'react'

import Projects from './Projects'

class Katie extends Component {

  changeHeader = () => {
    $('.navsubtitle').text("project page")
  }

  render() {
    return (
      <div>
        <h1>{this.props.projectclicked}</h1>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Katie
