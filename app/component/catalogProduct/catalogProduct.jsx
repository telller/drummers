import React, { Component } from 'react'
import Header from '../header/header.jsx'
import Catalog from '../catalog/catalog.jsx'
import Footer from '../footer/footer.jsx'
import './catalogProduct.styl'

class CatalogProduct extends Component {
  render () {
    return (
      <div id='catalogProduct'>
        <Header />
        <Catalog />
        <Footer />
      </div>
    )
  }
}

export default CatalogProduct
