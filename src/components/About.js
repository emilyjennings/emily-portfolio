import React, { Component } from 'react';
import $ from 'jquery'

export default class About extends Component {

  changeHeader = () => {
    $('.navtitle').text("About Emily")
    $('.navsubtitle, .navsubtitlestick').text("100% Authentic.")
    $('.navsubtitle, .navsubtitlestick').show()
  }


  render() {
    return (
      <div className="aboutpage">
        <div className="clearfix">
          <div className="story">In 2019 I became a software engineer.</div>
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
