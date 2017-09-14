import { Router, Route, browserHistory } from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import store from './store'
import React from 'react'
require('es6-object-assign').polyfill()

import CatalogProduct from './component/catalogProduct/catalogProduct.jsx'
import ContactForm from './component/contactForm/contactForm.jsx'
import Contacts from './component/contacts/contacts.jsx'
import AboutUs from './component/aboutUs/aboutUs.jsx'
import Home from './component/home/home.jsx'
import Blog from './component/blog/blog.jsx'
import Products from './component/products/products.jsx'
import SingleProduct from './component/singleProduct/singleProduct.jsx'


const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Home} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/catalogproduct' component={CatalogProduct} />
      <Route path='/blogposts' component={Blog} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/products/:category' component={Products} />
      <Route path='/product/:id' component={SingleProduct} />
      <Route path='/contactform' component={ContactForm} />
      <Route path='*' component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
