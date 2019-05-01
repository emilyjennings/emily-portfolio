import React, { Component } from 'react';
import $ from 'jquery'
import { Link } from "react-router-dom";

class ProjectShow extends Component {

  changeHeader = () => {
    $('.navtitle').text(this.props.cards[this.props.index].title)
    $('.navlinks').hide()
  }

  render() {
    const cards = this.props.cards
    const index = this.props.index
    return (
      <div className="projectshowborder">
        <div className="projectborder">
          <div className="showimg"><img src={cards[index].image} /></div>
          <div className="desc-cont"><div className="desc">{cards[index].desc}</div></div>
        </div>
        <div className="buttons">
          <div className="link"><a href={cards[index].link}>Try it out</a></div>
          <div className="github"><a href={cards[index].github}>See the code</a></div>
          <div className="goback" onClick={() => window.location.reload()}>Go Back</div>
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default ProjectShow
