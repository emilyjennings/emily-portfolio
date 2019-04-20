import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import Katie from './Katie'

import register from '../img/register.png'
import katie from '../img/katie-paints-portraits.png'

export default class Projects extends Component {

  state = {
    cards: {
      registeryourkid: {
        link: 'https://obscure-river-92932.herokuapp.com/',
        desc: "A Ruby on Rails app to help parents register their kids for art classes",
        github: "https://github.com/emilyjennings/register-your-kid",
        url: "/register",
        image: register,
        title: 'Register Your Kid',
        name: 'register'
      },
      katiepaintsportraits: {
        link: 'https://katie-paints-portraits.herokuapp.com/',
        desc: "A simple art gallery site for my daughter's art teacher to showcase ands sell her art",
        github: "https://github.com/emilyjennings/katies-art",
        url: "/katie",
        image: katie,
        title: 'Katie Paints Portraits',
        name: 'katie'
      }
    },
    clicked: ""
  }


//changes the subtitle
  changeHeader = () => {
    $('.navsubtitle').text("Stuff I Made")
  }

// needs to be used in refactor
  handleClickImage = event => {
      event.preventDefault()
      this.props.setProject(this.state.clicked)
  }

  // Used to render the gallery images
  displayCards = () => {
    return Object.values(this.state.cards).map(card =>
      <div className="clearfix">
        <Link to={card.url} onClick={event => this.setState({clicked: event.currentTarget.id})}><div className="cardborder" onClick={this.handleClickImage} id={card.name}>
          <div className="imageborder">
            <img src={card.image} alt="" />
          </div>
          <div className="caption">{card.title}</div>
        </div></Link>
      </div>)
  }

//I want the cards to float in - later
  // slideLeft = () => {
  //     $("body").click(function(){
  //       $(".cardborder").slideUp(8000);
  //     });
  // }

  componentDidMount(){
    {this.changeHeader()}
  }

  render() {
    return (
      <div>
        {this.displayCards()}
      </div>
    );
  };


}
