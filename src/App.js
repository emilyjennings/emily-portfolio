import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery'

import './App.css';

import MainContainer from './containers/MainContainer'
import About from './components/About'
import Projects from './components/About'
import History from './components/History'
import Contact from './components/Contact'
import GalleryCards from './components/GalleryCards'



class App extends Component {
  slideLeft = () => {
    $(document).ready(function(){
      $(".app").click(function(){
        $(".cardborder").slideUp(8000);
      });
    });
  }

  hoverFancy = () => {
    $( ".navbar" ).hover(
      function() {
        $( '.navbar' ).css({
          "border": "1px dotted red"
        });
      }, function() {
        $( '.navbar' ).css({
          "border": "1px solid red"
        });
      }
    );
  }


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <MainContainer />

          <Route exact path="/" component={GalleryCards} />
          <Route exact path="/authenticity" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/growth" component={Projects} />
          <Route exact path="/empathy" component={History} />

        </div>
      </BrowserRouter>
    );
  }


    componentDidMount(){
      {this.slideLeft()}
    }
}

export default App;
