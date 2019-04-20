import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import register from '../img/register.png'
import katie from '../img/katie-paints-portraits.png'

export default class Katie extends Component {

  changeHeader = () => {
    $('.navsubtitle').text("project")
  }

  render() {
    debugger
    const clicked = this.props.clicked;
    return (
      <div className="showpage">
        this
        {clicked}
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
