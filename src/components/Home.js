import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import profile from './img/profile.jpg'

export default class Home extends Component {

  state = {
  }

  changeHeader = () => {
    $('.navsubtitle').text("Adventurer, Builder, Mom")
  }


  render() {
    return (
      <div className="home">
        <img src={profile} />
        <div className="homecaption">Born to be alive.</div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
