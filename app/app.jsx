import CatalogProduct from './component/catalogProduct/catalogProduct.jsx'
import OurContacts from './component/ourContacts/ourContacts.jsx'
import ContactForm from './component/contactForm/contactForm.jsx'
import Contacts from './component/contacts/contacts.jsx'
import {Router, Route, hashHistory} from 'react-router'
import OurBlog from './component/ourBlog/ourBlog.jsx'
import AboutUs from './component/aboutUs/aboutUs.jsx'
import Product from './component/product/product.jsx'
import Catalog from './component/catalog/catalog.jsx'
import Content from './component/content/content.jsx'
import Footer from './component/footer/footer.jsx'
import Header from './component/header/header.jsx'
import About from './component/about/about.jsx'
import Home from './component/home/home.jsx'
import Blog from './component/blog/blog.jsx'
import Map from './component/map/map.jsx'
import We from './component/we/we.jsx'
import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/catalogProduct' component={CatalogProduct} />
        <Route path='/blog' component={Blog} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/contactForm' component={ContactForm} />
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
