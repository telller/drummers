import Content from '../content/content.jsx'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import React, { Component } from 'react'
import About from '../about/about.jsx'
import Map from '../map/map.jsx'
import './home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home'>
        <Header />
        <About />
        <Content />
        <Map />
        <Footer />
      </div>
    )
  }
}

export default Home
