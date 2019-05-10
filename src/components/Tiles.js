import React, { Component } from 'react';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Tiles extends Component {

  componentDidMount(){
    {this.tileFadeIn()}
    {this.hoverTile()}
  }

  hoverTile = () => {
    $('#tile-1').mouseover(function(){
      $('.tile-1-text').show()
    }).mouseout(function(){
      $('.tile-1-text').hide()
    })

    $('#tile-2').mouseover(function(){
      $('.tile-2-text').toggle()
    }).mouseout(function(){
      $('.tile-2-text').hide()
    })

    $('#tile-3').mouseover(function(){
      $('.tile-3-text').toggle()
    }).mouseout(function(){
      $('.tile-3-text').hide()
    })

    $('#tile-4').mouseover(function(){
      $('.tile-4-text').toggle()
    }).mouseout(function(){
      $('.tile-4-text').hide()
    })

    $('#tile-5').mouseover(function(){
      $('.tile-5-text').toggle()
    }).mouseout(function(){
      $('.tile-5-text').hide()
    })

    $('#tile-6').mouseover(function(){
      $('.tile-6-text').toggle()
    }).mouseout(function(){
      $('.tile-6-text').hide()
    })
  }

  tileFadeIn = () => {
    $('#tile-1, #tile-2, #tile-3, #tile-4, #tile-5, #tile-6').hide()
    setInterval(function(){
      $('#tile-1').fadeIn(1000, function(){
        $('#tile-2').fadeIn(100, function(){
          $('#tile-3').fadeIn(80, function(){
            $('#tile-4').fadeIn(50, function(){
              $('#tile-5').fadeIn(50, function(){
                $('#tile-6').fadeIn(30, function(){
                });
              });
            });
          });
        });
      });
    });
  }

  render() {
    return (
      <div className="tile-container">
        <div className="tiles">
          <div className="tile" id="tile-1">
            <div className="tile-1-title">Coding</div>
            <div className="tile-1-text"><FontAwesomeIcon icon={'laptop-code'} /><br></br>Love</div>
          </div>
          <div className="tile" id="tile-2">
            <div className="tile-2-title">Philosophy</div>
            <div className="tile-2-text"><FontAwesomeIcon icon={'lightbulb'} /><br></br>My training</div>
          </div>
          <div className="tile" id="tile-3">
            <div className="tile-3-title">Teaching</div>
            <div className="tile-3-text"><FontAwesomeIcon icon={'school'} /><br></br>In Korea</div>
          </div>
          <div className="tile" id="tile-4">
            <div className="tile-4-title">Adventure</div>
            <div className="tile-4-text"><FontAwesomeIcon icon={'globe-asia'} /><br></br>New ideas</div>
          </div>
          <div className="tile" id="tile-5">
            <div className="tile-5-title">Creative</div>
            <div className="tile-5-text"><FontAwesomeIcon icon={'pencil-ruler'} /><br></br>Solutions</div>
          </div>
          <div className="tile" id="tile-6">
            <div className="tile-6-title">Mom</div>
            <div className="tile-6-text"><FontAwesomeIcon icon={'baby-carriage'} /><br></br>Strength</div>
          </div>
        </div>
      </div>
    );
  };


}
