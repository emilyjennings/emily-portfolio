import React, { Component } from 'react';


export default class BottomLinks extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="bottom-wrapper">
        <div className="bottom">
          <div className="row-left">
            <div className="bottom-link"><a href="https://drive.google.com/file/d/1NpJu_3fS0LiS4zt-FisdtYUKYA2cJ0rM/view?usp=sharing">Resume</a></div>
          </div>
          <div className="row-right">
            <div className="bottom-link"><a href="https://emily-jennings-blog.herokuapp.com/posts">Blog</a></div>
          </div>
          <div className="mobile-row">
            <div className="bottom-link-left"><a href="https://drive.google.com/file/d/1NpJu_3fS0LiS4zt-FisdtYUKYA2cJ0rM/view?usp=sharing">Resume</a></div>
            <div className="bottom-link-right"><a href="https://emilyjennings.github.io/blog/">Blog</a></div>
          </div>
        </div>
      </div>
    );
  }

}
