import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import ProjectShow from './ProjectShow'

import register from '../img/register.png'
import katie from '../img/katie-paints-portraits.png'
import marvel from '../img/marvel.png'
import nasa from '../img/nasastuff2.png'
import philosophy from '../img/philosophy.png'

export default class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: {
        0: {
          index: 0,
          link: 'https://obscure-river-92932.herokuapp.com/',
          desc: "A Ruby on Rails app to help parents register their kids for art classes",
          github: "https://github.com/emilyjennings/register-your-kid",
          url: "/register",
          image: register,
          title: 'Register Your Kid',
        },
        1: {
          index: 1,
          link: 'https://katie-paints-portraits.herokuapp.com/',
          desc: "A simple art gallery site for my daughter's art teacher to showcase ands sell her art",
          github: "https://github.com/emilyjennings/katies-art",
          url: "/katie",
          image: katie,
          title: 'Katie Paints Portraits',
        },
        2: {
          index: 2,
          link: 'https://marvel-combat-arena.herokuapp.com/',
          desc: 'Marvel Text Combat Arena calls the Marvel API in Rails and gives you the winning character based on user input parameters and the data results in the API call. A thrilling game and great way to pass hours away!',
          github: 'https://github.com/emilyjennings/marvel-combat-arena',
          url: "/marvel",
          image: marvel,
          title: 'Marvel Combat Arena',
        },
        3: {
          index: 3,
          link: "https://nasa-stuff.herokuapp.com/",
          desc: 'A React app that I am still building on, NASA stuff searches the universe...ahem...NASA API to display images the user queries.',
          github: "https://github.com/emilyjennings/nasa-stuff-react-project",
          url: "/nasa",
          image: nasa,
          title: 'NASA stuff',
        },
        4: {
          index: 4,
          link: "https://nasa-stuff.herokuapp.com/",
          desc: 'This Sinatra project allows users to log in and submit thought experiment stories as part of a community. I made this because I have a strong interest and academic background in philosophy and one of my favorite parts of studying it was considering thought experiments to illustrate a point/argument. This was made in memory of Josh Parsons, my Master\'\s thesis supervisor and friend, Josh Parsons.',
          github: "https://github.com/emilyjennings/Philosophy-Thought-Experiments-Sinatra-Project",
          url: "/philosophy",
          image: philosophy,
          title: 'Philosophy Thought Experiments',
        },
      },
      index: null,
    }
  };


//changes the subtitle
  changeHeader = () => {
      $('.navsubtitle').text("Stuff I Made")
  }

  handleClick = (index) => {
    this.setState({index: index})
  }

// to pass props so that the project show page knows which one was clicked
  // handleClickImage = (card) => {
  //   )
  // }

  // Used to render the gallery images
  displayCards = () => {
    return Object.values(this.state.cards).map(card =>
      <div className="clearfix">
          <div className="cardborder" id={card.name} onClick={() => this.handleClick(card.index)}>
            <div className="imageborder">
              <img src={card.image} alt="" />
            </div>
            <div className="caption">{card.title}</div>
          </div>
      </div>)
  }

  componentDidMount(){
    {this.changeHeader()}
  }

  render() {
    return (
      <div>
        {this.state.index != null ? <ProjectShow index={this.state.index} cards={this.state.cards} /> : this.displayCards()}
      </div>
    );
  };


}
