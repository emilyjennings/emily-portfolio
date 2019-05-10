import React, { Component } from 'react';
import $ from 'jquery'

import profile from './img/profile.jpg'
import Tiles from './Tiles'

export default class Home extends Component {

  changeHeader = () => {
    $('.navtitle').text("Hi, I'm Emily")
    $('.navsubtitle, a#e, a#a, a#g').hide()
    $('.navsubtitlestick').text("This is me")
  }

  scrollFadeText = () => {
    $(window).scroll(function(){
      if ($(window).scrollTop() > 200) {
        $('#okay').animate({
          opacity: 1,
        }, 1000, function(){
          $('#me').animate({
            opacity: 1,
          }, 2000)
        })
      }
    });
  }

  fadeButtons = () => {
    setInterval(function(){
      $('a#a').fadeIn(0, function(){
        $('a#g').fadeIn(0, function(){
          $('a#e').fadeIn(0, function(){
          });
        });
      });
    });
  }

  componentDidMount(){
    {this.changeHeader()}
    {this.scrollFadeText()}
    {this.fadeButtons()}
  }

  render() {
    return (
      <div className="home">
        <div className="homecaptionlast"><span id="okay">It's okay if you don't like my fonts.</span><span id="me"> This is me.</span></div>

        < Tiles />
      </div>
    );
  };


}
