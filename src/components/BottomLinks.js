import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'


export default class BottomLinks extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="bottom-wrapper">
        <div className="bottom">
          <div className="row-left">
            <div className="bottom-link"><a href="">Thank you for visiting</a></div>
          </div>
          <div className="row-right">
            <div className="bottom-link"><a href="">Let me know what you think</a></div>
          </div>
        </div>
      </div>
    );
  }

}
