import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import MainContainer from './containers/MainContainer'
import About from './components/About'
import History from './components/History'
import Contact from './components/Contact'
import ProjectShow from './components/ProjectShow'
import Home from './components/Home'
import Projects from './components/Projects'



class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <MainContainer />

          <Route exact path="/" component={Home} />
          <Route exact path="/authenticity" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/empathy" component={History} />
          <Route path="/projects" component={Projects} />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
