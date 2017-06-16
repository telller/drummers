import OurBlog from '../ourBlog/ourBlog.jsx'
import Footer from '../footer/footer.jsx'
import Header from '../header/header.jsx'
import React, { Component } from 'react'
import './blog.styl'

class Blog extends Component {
  render () {
    return (
      <div id='blog'>
        <Header />
        <OurBlog />
        <Footer />
      </div>
    )
  }
}

export default Blog
