import React, { Component } from 'react';
import $ from 'jquery'

import profile from './img/profile.jpg'

export default class Home extends Component {

  changeHeader = () => {
    $('.navtitle').text("Hi, I'm Emily")
    $('.navsubtitle, .navsubtitlestick').hide()
  }

  scrollFade = () => {
    $(window).scroll(function(){
      var scrollBottom = $(window).height() - $(window).scrollTop();
      if (scrollBottom < 10) {
        $(".homecaption2").animate({'opacity':'1'},5000)
      }
    });
  }

  componentDidMount(){
    {this.changeHeader()}
    {this.scrollFade()}
  }

  render() {
    return (
      <div className="home">
        <img src={profile} alt=" "/>
        <div class="homecaption">I spent a year and a half with a small child and a full time job teaching myself to code. I think I deserve to make this website however I like.</div>
        <div class="homecaption2">It's okay if you don't like my fonts. This is me.</div>
      </div>
    );
  };


}
