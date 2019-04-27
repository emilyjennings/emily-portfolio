import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

export default class About extends Component {

  state = {
  }

  changeHeader = () => {
    $('.navsubtitle').text("100% Authentic.")
  }


  render() {
    return (
      <div className="aboutpage">
        <div className="homecaption">In 2019 I became the person I was always meant to be.</div>
        <div className="homecaption">I became a software engineer.</div>
        <div className="homecaption">And suddenly, everything seemed right.</div>
        <div className="homecaption">I realized I no longer needed to emphasize parts of me I wouldn't normally emphasize in order to become something I am not naturally.</div>
        <div className="homecaption">I'm a person who does the unexpected. I move myself past percieved boundaries. So here I am, a female programmer who never got a computer science degree.</div>
        <div className="homecaption">What have I been and what personas come with me into this new career?</div>
        <div className="homecaption">I was a teacher. (Still am?)</div>
        <div className="homecaption">I taught ESL in korea for five years.</div>
        <div className="homecaption">I am a mom.</div>
        <div className="homecaption">In fact, my motherhood is almost certainly the catalyst for me to become a programmer. I found a new purpose and everything about my perspective on life changed. I also watched every episode of Silicon Valley while on maternity leave in Korea, and learned for the first time what coding is.</div>
        <div className="homecaption">I'm creative.</div>
        <div className="homecaption">I love taking an end goal and making up a really interesting new way to get there. I am visually creative as well as strategically. For years I honed my skills planning lessons for my students of all ages, figuring out ways to 'trick' them into learning through fun.</div>
        <div className="homecaption">I'm a philosopher.</div>
        <div className="homecaption">My advanced degree in philosophy follows me in whatever I do. I ask questions. I apply logic. I enjoy new perspectives. I think deeply and critically about things. Daily, I ponder metaphysical questions of reality. And even in my dissertation back in 2004, I was writing about artiifical intelligence in computers.</div>
        <div className="homecaption">And all of these things contribute to my coding projects. I want to help people, but in a different way than I did when I was a teacher. Being a teacher helped me experience who needs help the most. I want to be a great philosopher/programmer and get better and better at logic to make computers so incredible things. I want to make a meaningful life for my family where I am happy in my career, where I help strangers every day. I want to be the role model that did the impossible and changed careers in my thirties to something I finally discovered as my calling.</div>
        <div className="homecaption">This is all the truth, this is all me. Take it or leave it.</div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
