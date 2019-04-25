import React, { Component } from 'react';
import $ from 'jquery'

import register from '../img/register.png'
import katie from '../img/katie-paints-portraits.png'

class ProjectShow extends Component {



  changeHeader = () => {
    $('.navtitle').text("Projects")
    $('.navsubtitle').text(this.props.cards[this.props.index].title)
  }

  render() {
    const cards = this.props.cards
    const index = this.props.index
    return (
      <div className="projectshowborder">
        <div className="showimg"><img src={cards[index].image} /></div>
        <div className="desc">{cards[index].desc}</div>
        <div className="link"><a href={cards[index].link}>Try it out</a></div>
        <div className="github"><a href={cards[index].github}>See the code</a></div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default ProjectShow
