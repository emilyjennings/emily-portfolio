import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery'

import './App.css';

import Footer from './components/Footer'
import Header from './components/Header'

import About from './components/About'
import History from './components/History'
import Contact from './components/Contact'
import ProjectShow from './components/ProjectShow'
import Home from './components/Home'
import Projects from './components/Projects'


class App extends Component {

  top = () => {
    $("#top").click(function(event){
      $.scrollTo(0, 1000);
    });
  }

  componentDidMount(){
    {this.top()}
  }


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Footer />
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
