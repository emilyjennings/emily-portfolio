import React, { Component } from 'react';
import $ from 'jquery'

import Footer from '../components/Footer.js'
import Header from '../components/Header'
import GalleryCards from '../components/GalleryCards'


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
