import React, { Component } from 'react';
import $ from 'jquery'

export default class Tiles extends Component {

  componentDidMount(){
    {this.hoverTile()}
  }

  hoverTile = () => {
    $('#tile-1').mouseover(function(){
      $('.tile-1-text').toggle()
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

  render() {
    return (
      <div className="tile-container">
        <div className="tiles">
          <div className="tile" id="tile-1">
            <div className="tile-1-title">Coding</div>
            <div className="tile-1-text">I'm addicted</div>
          </div>
          <div className="tile" id="tile-2">
            <div className="tile-2-title">Philosophy</div>
            <div className="tile-2-text">Has led to all this</div>
          </div>
          <div className="tile" id="tile-3">
            <div className="tile-3-title">Teaching</div>
            <div className="tile-3-text">I taught Korean kids</div>
          </div>
          <div className="tile" id="tile-4">
            <div className="tile-4-title">Adventure</div>
            <div className="tile-4-text">New experiences are my jam</div>
          </div>
          <div className="tile" id="tile-5">
            <div className="tile-5-title">Creative</div>
            <div className="tile-5-text">Sewing, writing, designing</div>
          </div>
          <div className="tile" id="tile-6">
            <div className="tile-6-title">Mom</div>
            <div className="tile-6-text">I've never been stronger</div>
          </div>
        </div>
      </div>
    );
  };


}
