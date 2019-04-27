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
        <div class="caption">I spent a year and a half with a small child and a full time job teaching myself to code. I deserve to make this representation of me as wacky and wild as I deem necessary.</div>
        <div class="caption">This is me, world. This is real.</div>

      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
