import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import MainContainer from './containers/MainContainer'
import About from './components/About'
import Projects from './components/About'
import History from './components/History'
import Contact from './components/Contact'
import GalleryCards from './components/GalleryCards'



class App extends Component {
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
}

export default App;
