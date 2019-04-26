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
        <div className="homecaption">Until I found my true calling in programming, I was always trying to be something I wasn't. Now I feel set free. That's why this website is unapologetically me. I get to pick whatever colors, images, and designs I think look cool, and say anything I want. World: this is the real me.</div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
