import React, { Component } from 'react';
import $ from 'jquery'
import Typed from 'typed.js'

import Tiles from '../components/Tiles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Home extends Component {

  changeHeader = () => {
    $('.navtitle').text("Hi, I'm Emily")
    $('.navsubtitle, a#e, a#a, a#g').hide()
    $('.navsubtitlestick').text("This is me")
    $('.navlinks').show()
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

  scrolldown = () => {
    $('.scrolldown').animate({
      bottom: '60px',
    }, 500, function(){
      $('.scrolldown').animate({
        bottom: '40px',
      }, 500, function(){
        $('.scrolldown').animate({
          bottom: '60px',
        }, 500, function(){
          $('.scrolldown').animate({
            bottom: '40px',
          }, 500, function(){
            $('.scrolldown').animate({
              bottom: '60px',
            }, 500, function(){
              $('.scrolldown').animate({
                bottom: '40px',
              }, 500, function(){
                $('.scrolldown').animate({
                  bottom: '60px',
                }, 500, function(){
                  $('.scrolldown').animate({
                    bottom: '40px',
                  }, 500)
                })
              })
            })
          })
        })
      })
    })
    $(window).scroll(function(){
      $(".scrolldown").css("opacity", (1 / $(window).scrollTop() - 1))
    });

  }

  typedSentenceAnimation = () => {
     var typed = new Typed('#me', {
       strings: ["This is me", "and other stuff"],
       stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
     });
  }


  componentDidMount(){
    {this.changeHeader()}
    {this.scrollFadeText()}
    {this.fadeButtons()}
    {this.backgroundChange()}
    {this.scrolldown()}
  }

  render() {
    return (
      <div className="home">
        <div className="homecaptionlast"><span id="okay">It's okay if you don't like my fonts.</span><span id="me"> This is me.</span></div>

        < Tiles />

        <div className="scrolldown">< FontAwesomeIcon icon={'angle-double-down'} /></div>
      </div>
    );
  };


}
