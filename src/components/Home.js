import React, { Component } from 'react';
import $ from 'jquery'

import profile from './img/profile.jpg'
import Tiles from './Tiles'
import BottomLinks from './BottomLinks'

export default class Home extends Component {

  changeHeader = () => {
    $('.navtitle').text("Hi, I'm Emily")
    $('.navsubtitle, a#e, a#a, a#g').hide()
    $('.navsubtitlestick').text("This is me")
    $('.bottom-navbar').show()
  }

  backgroundChange = () => {
    $("body").css({
      'background-color': '#262c2d',
      'background-image':
        `radial-gradient(#35CDD1 3%, transparent 0),
        radial-gradient(#35CDD1 3%, transparent 0)`,
      'background-size': '30px 30px',
      'background-position': '0 0, 15px 15px'
    });
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

//Not in use - for the bottons fading in
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
    {this.backgroundChange()}
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
