import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import MainContainer from './containers/MainContainer'
import About from './components/About'
import History from './components/History'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Katie from './components/Katie'
import Home from './components/Home'



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

          <Route exact path="/" component={Home} />
          <Route exact path="/growth" component={Projects} />
          <Route exact path="/authenticity" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/empathy" component={History} />
          <Route exact path="/katie" component={Katie} />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
