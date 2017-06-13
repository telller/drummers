import React, { Component } from 'react'
import './aboutUs.styl'

export default class AboutUs extends Component {
  render () {
    return (
      <div id='aboutUs'>
        <div className='foto'>
          <img src='#' alt='Our photo' />
        </div>
        <div className='info'>
          <h3 className='title'>Про нас</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Excepteur sint occaecat cupidataborum ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, in voluptate velit esse</p>

        </div>
      </div>
    )
  }
}
