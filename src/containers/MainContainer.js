import React, { Component } from 'react';

import Footer from '../components/Footer.js'
import Header from '../components/Header'

export default class MainContainer extends Component {


  render() {
    return(
      <div classname="main">
        <Header />
        <Footer />
      </div>
    )
  }
}
