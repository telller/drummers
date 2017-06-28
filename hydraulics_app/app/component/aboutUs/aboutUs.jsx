import Footer from '../footer/footer.jsx'
import Header from '../header/header.jsx'
import React, { Component } from 'react'
import We from '../we/we.jsx'
import './aboutUs.styl'

class AboutUs extends Component {
  render () {
    return (
      <div id='aboutUs'>
        <Header />
        <We />
        <Footer />
      </div>
    )
  }
}

export default AboutUs
