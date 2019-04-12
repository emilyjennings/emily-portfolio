import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import register from '../img/register.png'

export default class GalleryCards extends Component {

  state = {
    cards: {
      registeryourkid: {
        link: 'https://obscure-river-92932.herokuapp.com/',
        desc: "Register Your Kid, a Ruby on Rails app to help parents register their kids for art classes",
        github: "https://github.com/emilyjennings/register-your-kid",
        url: "/register",
        image: register,
      },
    }
  }

  changeHeader = () => {
    $('.navsubtitle').text("home")
  }

  // handleClickImage = (image) => {
  //   this.props.displayShowImage(image)
  // }

  // Used to render the gallery images
  displayCards = () => {
    return Object.values(this.state.cards).map(card =>
      <div className="clearfix">
        <Link to={card.url}><div className="cardborder">
          <div className="imageborder">
            <img src={card.image} alt="" />
          </div>
          <div className="caption">{card.desc}</div>
          <div className="github">{card.github}</div>
          <div className="link">{card.link}</div>
        </div></Link>
      </div>)
  }




  render() {
    return (
      <div className="gallery">
        {this.displayCards()}
        <div className="noimage">
          <h2>Don't see what you're looking for? Let's talk.</h2>
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
