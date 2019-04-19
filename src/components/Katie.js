import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import register from '../img/register.png'
import katie from '../img/katie-paints-portraits.png'

export default class Katie extends Component {

  state = {
    cards: {
      registeryourkid: {
        link: 'https://obscure-river-92932.herokuapp.com/',
        desc: "A Ruby on Rails app to help parents register their kids for art classes",
        github: "https://github.com/emilyjennings/register-your-kid",
        url: "/register",
        image: register,
        title: 'Register Your Kid'
      },
      katiepaintsportraits: {
        link: 'https://katie-paints-portraits.herokuapp.com/',
        desc: "A simple art gallery site for my daughter's art teacher to showcase ands sell her art",
        github: "https://github.com/emilyjennings/katies-art",
        url: "/katie",
        image: katie,
        title: 'Katie Paints Portraits'
      }
    }
  }

  changeHeader = () => {
    $('.navsubtitle').text(this.state.cards.katiepaintsportraits.title)
  }

  render() {
    return (
      <div className="showpage">
        <img src={this.state.cards.katiepaintsportraits.image} />
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
