import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

export default class Contact extends Component {

  state = {
  }

  changeHeader = () => {
    $('.navsubtitle').text("Get to know my 'why'")
  }


  render() {
    return (
      <div className="gallery">

      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
