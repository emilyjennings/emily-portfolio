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
        $('.homecaption').animate({
          opacity: 1,
        }, 1000, function(){
          $('.homecaption2').animate({
            opacity: 1,
          }, 2000, function(){
            $('.homecaption3').animate({
              opacity: 1,
            }, 4000, function(){
              $(".homeimage").animate({opacity: 0}, 1000)
              $('.homecaption3, .homecaption2, .homecaption, .homecaptions').fadeOut("slow")
              $('.tiles, .tile, .homecaption4').animate({
                  opacity: 1,
                }, 1000)
            })
          })
        });
      }
    });
  }

  // scrollImageSize = () => {
  //   $(window).scroll(function(){
  //     $(".homeimage").css(
  //       "margin-top", $(window).scrollTop() * -0.4,
  //     );
  //     $(".homeimage").css(
  //       "margin-left", $(window).scrollTop() / 5,
  //     );
  //     $(".homeimage").css("width", "400" + $(window).scrollTop() * 100 + "px");
  //     $(".homeimage").css("max-width", "1500px");
  //
  //   });
  // }

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
    // {this.scrollImageSize()}
  }

  render() {
    return (
      <div className="home">
        <div className="homeimage">
          <img src={profile} alt=" "/><img src={profile} alt=" "/>
        </div>
        <div className="homecaptions">
          <div className="homecaption">I spent a year and a half with a small child and a full time job learning to code.</div>
          <div className="homecaption2">It was exhausting and wonderful.</div>
          <div className="homecaption3">At this point, I think I deserve to make this website however I like.</div>
        </div>
        < Tiles />
        <div className="homecaption4">It's okay if you don't like my fonts. This is me.</div>
      </div>
    );
  };


}
