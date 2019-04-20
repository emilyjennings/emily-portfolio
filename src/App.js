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

  state = {
    clicked: ""
  }

  setProject = () => {
    this.setState({clicked: this.props.clicked})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <MainContainer />

          <Route exact path="/" component={Home} />
          <Route exact path="/authenticity" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/empathy" component={History} />
          <Route exact path="/katie"
          render={(props) => < Katie {...props} displayProject={this.props.clicked} />}
          />
          <Route exact path="/projects" component={Projects} />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
