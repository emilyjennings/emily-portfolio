import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import MainContainer from './containers/MainContainer'
import About from './components/About'
import Projects from './components/About'
import History from './components/History'
import Contact from './components/Contact'
import GalleryCards from './components/GalleryCards'
import Katie from './components/Katie'



class App extends Component {

  displayShowImage = (clicked) => {
    return(
      <div className="showpage">
        clicked
      </div>
    )
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
          <Route exact path="/katie" component={Katie} />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
