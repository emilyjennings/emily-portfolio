import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import MainContainer from './containers/MainContainer'
import About from './components/About'
import History from './components/History'
import Contact from './components/Contact'
import Katie from './components/Katie'
import Home from './components/Home'
import Projects from './components/Projects'



class App extends Component {

    state = {
      projectclicked: ""
    }

    setProject(value) {
      this.setState({
        projectclicked: value
      })
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
          <Route
          path="/projects"
          render={(props) => <Projects {...props} setProject={this.setProject}/>}
          />
          <Route
          path="/katie"
          render={(props) => <Katie {...props} projectclicked={this.state.projectclicked}/>}
          />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
