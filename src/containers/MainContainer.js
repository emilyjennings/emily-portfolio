import React, { Component } from 'react';
import $ from 'jquery'

import Footer from '../components/Footer.js'
import Header from '../components/Header'


export default class MainContainer extends Component {

  render() {
    return(
      <div className="main">
        <Header />
        <Footer />
      </div>
    )
  }


}
