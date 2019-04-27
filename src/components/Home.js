import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import profile from './img/profile.jpg'

export default class Home extends Component {

  state = {
  }

  changeHeader = () => {
    $('.navtitle').text("Emily")
    $('.navsubtitle').text("Adventurer, Engineer, Mom")
  }


  render() {
    return (
      <div className="home">
        <img src={profile} />

      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
