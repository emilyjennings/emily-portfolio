import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import register from '../img/register.png'
import katie from '../img/katie-paints-portraits.png'

export default class Katie extends Component {

  setProject = () => {

  }

  changeHeader = () => {
    $('.navsubtitle').text("project")
  }

  render() {
    const clicked = this.props.clicked;
    debugger
    return (
      <div className="showpage">
        {clicked}
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
