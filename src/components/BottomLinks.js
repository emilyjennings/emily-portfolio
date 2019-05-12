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
            <div className="bottom-link"><Link to="https://drive.google.com/file/d/1NpJu_3fS0LiS4zt-FisdtYUKYA2cJ0rM/view?usp=sharing">Resume</Link></div>
            <div className="bottom-link"><Link to="https://emily-jennings-blog.herokuapp.com/">Blog</Link></div>
          </div>
          <div className="row-right">
            <div className="bottom-link"><Link to="/contact">Contact</Link></div>
            <div className="bottom-link"><a href="https://emilyjennings.github.io/about/mymap.html">Map me</a></div>
          </div>
        </div>
      </div>
    );
  }

}
