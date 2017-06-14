import React, { Component } from 'react'
import './app.styl'
import About from './component/about/about.jsx'
import Content from './component/content/content.jsx'
import Map from './component/map/map.jsx'
import Header from './component/header/header.jsx'
import Footer from './component/footer/footer.jsx'
import AboutUs from './component/aboutUs/aboutUs.jsx'
import Catalog from './component/catalog/catalog.jsx'
import Blog from './component/blog/blog.jsx'
import Contacts from './component/contacts/contacts.jsx'

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <Header />
        <About />
        <Content />
        <Map />
        <Footer />
        <AboutUs />
        <Catalog />
        <Blog />
        <Contacts />
      </div>
    )
  }
}
