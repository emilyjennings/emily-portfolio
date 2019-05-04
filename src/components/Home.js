import React, { Component } from 'react';
import $ from 'jquery'

import profile from './img/profile.jpg'

export default class Home extends Component {

  changeHeader = () => {
    $('.navtitle').text("Hi, I'm Emily")
    $('.navsubtitle, a#e, a#a, a#g').hide()
    $('.navsubtitlestick').text("This is me")
  }

  scrollFadeText = () => {
    $(window).scroll(function(){
      if ($(window).scrollTop() > 200) {
        $('.homecaption').animate({
          opacity: 1,
        }, 2000, function(){
          $('.homecaption2').animate({
            opacity: 1,
          }, 1500, function(){
            $('.homecaption3').animate({
              opacity: 1,
            }, 1500, function(){
              $('.homeimage, .homecaption, .homecaption2, .homecaption3').fadeOut("slow")
            })
          })
        });
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
          <img src={profile} alt=" "/><img src={profile} alt=" "/>
        </div>
        <div className="homecaptions">
          <div class="homecaption">I spent a year and a half with a small child and a full time job learning to code.</div>
          <div class="homecaption2">It was exhausting and wonderful.</div>
          <div class="homecaption3">At this point, I think I deserve to make this website however I like.</div>
          <div class="homecaption4">It's okay if you don't like my fonts. This is me.</div>
        </div>
      </div>
    );
  };


}
