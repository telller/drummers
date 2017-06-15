import Contacts from './component/contacts/contacts.jsx'
import {Router, Route, hashHistory} from 'react-router'
import Product from './component/product/product.jsx'
import Catalog from './component/catalog/catalog.jsx'
import Content from './component/content/content.jsx'
import AboutUs from './component/aboutUs/aboutUs.jsx'
import Footer from './component/footer/footer.jsx'
import Header from './component/header/header.jsx'
import About from './component/about/about.jsx'
import Blog from './component/blog/blog.jsx'
import Map from './component/map/map.jsx'
import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Header} />
        <Route path='/Product' component={Product} />
      </Router>
      // <div id='app'>
      //   <Header />
      //   <About />
      //   <Content />
      //   <Map />
      //   <Footer />
      //   <AboutUs />
      //   <Catalog />
      //   <Blog />
      //   <Contacts />
      //   <Map />
      //   <Product />
      // </div>
    )
  }
}
