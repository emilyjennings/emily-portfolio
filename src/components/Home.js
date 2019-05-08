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
        $('.homeimage').animate({
          opacity: 1,
          top: '100px',
          width: '60%'
        }, 1000)
        $('.homecaption').animate({
          opacity: 1,
        }, 4000, function(){
          $('.homecaption, .homeimage, .homeimage img').fadeOut("slow")
          $('.homecaption').hide()
          $('.tiles, .tile').animate({
              opacity: 1,
            }, 2000)
          $('#okay').animate({
            opacity: 1,
          }, 3000, function(){
            $('#me').animate({
              opacity: 1,
            }, 2000)
          })
        })
      }
    });
  }


  fadeButtons = () => {
    setInterval(function(){
      $('a#a').fadeIn(1000, function(){
        $('a#g').fadeIn(1000, function(){
          $('a#e').fadeIn(1000, function(){
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
        <div className="homeimage">
          <img src={profile} alt=" "/>
        </div>

        <div className="homecaption">I made this.</div>
        <div className="homecaptionlast"><span id="okay">It's okay if you don't like my fonts.</span><span id="me"> This is me.</span></div>

        < Tiles />
      </div>
    );
  };


}
