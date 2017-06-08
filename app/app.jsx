import Content from './component/content/content.jsx'
import About from './component/about/about.jsx'
import Home from './component/home/home.jsx'
import React, { Component } from 'react'
import './app.styl'

class App extends Component {
  render () {
    return (
      <div id='app'>
        <About />
        <Content />
        <Home />
      </div>
    )
  }
}

export default App
