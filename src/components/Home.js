import React, { Component } from 'react';
import $ from 'jquery'

import ScrollAnimation from 'react-animate-on-scroll';

import profile from './img/profile.jpg'

export default class Home extends Component {

  changeHeader = () => {
    $('.navtitle').text("Hi, I'm Emily")
  }

  componentDidMount(){
    {this.changeHeader()}
  }

  render() {
    return (
      <div className="home">
        <img src={profile} alt=" "/>
          <div class="homecaption">I spent a year and a half with a small child and a full time job teaching myself to code. I deserve to make this representation of me as wacky and wild as I deem necessary.</div>
        <ScrollAnimation animateIn='fadeIn'>
          <div class="homecaption2">This is me, world. This is real.</div>
        </ScrollAnimation>
      </div>
    );
  };


}
