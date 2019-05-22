import React, { Component } from 'react';
import $ from 'jquery'

import ProjectShow from './ProjectShow'
import Zoom from 'react-reveal/Zoom';


import register from '../img/register.png'
import katie from '../img/katie-paints-portraits.png'
import marvel from '../img/marvel.png'
import nasa from '../img/nasastuff2.png'
import philosophy from '../img/philosophy.png'
import quote from '../img/quote.png'
import emilyjennings from '../img/emilyjennings.png'
import blog from '../img/blog.png'
import thisisemily from '../img/thisisemily.png'

export default class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: {
        0: {
          index: 0,
          link: 'https://obscure-river-92932.herokuapp.com/',
          desc: "A Ruby on Rails app to help parents register their kids for art classes, Register Your Kid was my first Ruby app. The most difficult parts of this project were incorporating omniauth for github login, and making nested forms work.",
          github: "https://github.com/emilyjennings/register-your-kid",
          url: "/register",
          image: register,
          title: 'Register Your Kid',
          created: 'December 2018 - February 2019',
        },
        1: {
          index: 1,
          link: 'https://katie-paints-portraits.herokuapp.com/',
          desc: "A simple art gallery site for my daughter's art teacher to showcase ands sell her art. The challenge here was finding a way to create a serverless contact form, and I implemented EmailJS for that. I worked closely with Katie, the 'client', to determine her needs and desires for the design of this site. It was my first time purchasing a domain name and deploying via Heroku for someone else. I figured out the most economical way for her to host a site, using a free Heroku app on my account with dynos that don't sleep through an add-on that checks status at regular intervals.",
          github: "https://github.com/emilyjennings/katies-art",
          url: "/katie",
          image: katie,
          title: 'Katie Paints Portraits',
          created: 'April 2019',
        },
        2: {
          index: 2,
          link: 'https://marvel-combat-arena.herokuapp.com/',
          desc: 'Marvel Text Combat Arena calls the Marvel API in Rails and gives you the winning character based on user input parameters and the data results in the API call. A thrilling game and great way to pass hours away!',
          github: 'https://github.com/emilyjennings/marvel-combat-arena',
          url: "/marvel",
          image: marvel,
          title: 'Marvel Combat Arena',
          created: 'January 2018',
        },
        3: {
          index: 3,
          link: "https://nasa-stuff.herokuapp.com/",
          desc: 'A React app, NASA stuff searches the universe...ahem...NASA API to display images the user queries. Users can also play a fun game that challenges them to identify astronomical objects by image.',
          github: "https://github.com/emilyjennings/nasa-stuff-react-project",
          url: "/nasa",
          image: nasa,
          title: 'NASA Stuff',
          created: 'February 2019',
        },
        4: {
          index: 4,
          link: "https://emily-jennings-blog.herokuapp.com/",
          desc: 'I created this blog site for personal use and to practice Ruby on Rails. I was tired of making Ruby apps that no one would ever really use - I wanted a practical project. I used associations to make a dynamic experience for users to log in with authentication, create posts, and to allow comments and category tags.',
          github: "https://github.com/emilyjennings/emily-blog",
          url: "/blog",
          image: blog,
          title: 'My Blog',
          created: 'April 2019',
        },
        5: {
          index: 5,
          link: "https://www.youtube.com/embed/eRu55RbndkU",
          desc: 'This Sinatra project allows users to log in and submit philosophical thought experiment stories as part of a community. I made this because I have a strong interest and academic background in philosophy and one of my favorite parts of studying it was considering thought experiments to illustrate a point/argument. This was made in memory of my Master\'\s thesis supervisor and friend, Josh Parsons.',
          github: "https://github.com/emilyjennings/Philosophy-Thought-Experiments-Sinatra-Project",
          url: "/philosophy",
          image: philosophy,
          title: 'Philosophy Experiments',
          created: 'November 2018',
        },
        6: {
          index: 6,
          link: "https://www.youtube.com/embed/ereSf1HHi9Q",
          desc: 'This is a game I made as a CLI Ruby Gem project that asks you to guess the author of a quote scraped from another website!',
          github: "https://github.com/emilyjennings/Quote_Guesser",
          url: "/quoteguesser",
          image: quote,
          title: 'Quote Guesser',
          created: 'September 2018',
        },
        7: {
          index: 7,
          link: "https://emilyjennings.github.io",
          desc: 'This was my first creation that I made as the final project for a front end course I did in Fall 2017, and I had been iterating on it ever since until I created this site as my new portfolio.',
          github: "https://github.com/emilyjennings/emilyjennings.github.io",
          url: "/emilyjennings",
          image: emilyjennings,
          title: 'Emily Jennings Portfolio',
          created: 'December 2017 - April 2019',
        },
        8: {
          index: 8,
          link: "/",
          desc: 'I made this site from scratch to showcase my skills and communicate my personality. I used extensive css animations and tricks, as well as React functionality and jQuery.',
          github: "https://github.com/emilyjennings/emily-portfolio",
          url: "/thisisemily",
          image: thisisemily,
          title: 'This is Emily (This site)',
          created: 'April 2019 - May 2019',
        },
      },
      index: null,
    }
  };


//changes the subtitle
  changeHeader = () => {
    $('.navtitle').text("Stuff I Made")
    $('.navsubtitle, .navsubtitlestick').text("Projects")
    $('.navsubtitle, .navsubtitlestick').show()
    $('.navlinks').show()
  }

//sets the state so the selected card can be sent to the projecshow component

  handleClick = (index) => {
    this.setState({index: index})
    $(window).scrollTop(0);
  }

//makes the background change style

  backgroundChange = () => {
    $("body").css({
      'background-color': '#262c2d',
      'background-image':
        `none`,
    });
  }

  // Used to render the gallery images
  displayCards = () => {
    return Object.values(this.state.cards).map(card =>
      <Zoom>
        <div className="cardborder" id={card.name} onClick={() => this.handleClick(card.index)}>
          <div className="imageborder">
            <img src={card.image} alt="" />
          </div>
          <div className="caption" onClick={() => this.handleClick(card.index)}>{card.title}</div>
        </div>
      </Zoom>)
  }

  componentDidMount(){
    {this.changeHeader()}
    {this.backgroundChange()}
  }

  render() {
    return (
      <div>
        <div className="projectspage">
            {this.state.index != null ? <ProjectShow index={this.state.index} cards={this.state.cards} /> : this.displayCards()}
        </div>
        <div className="space">
        </div>
      </div>
    );
  };



}
