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

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faLightbulb, faSchool, faGlobeAsia, faPencilRuler, faBabyCarriage, faHandHoldingHeart, faSeedling, faUserAstronaut, faArrowUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faLinkedin, faGithub, faLaptopCode, faLightbulb, faSchool, faGlobeAsia, faPencilRuler, faBabyCarriage, faHandHoldingHeart, faSeedling, faArrowUp, faUserAstronaut, faAngleDoubleDown)

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Footer />
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
