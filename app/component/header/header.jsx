import React, { Component } from 'react'
import './header.styl'

export default class Header extends Component {
  render () {
    return (
      <header id='header'>
        <img src='#' alt='Logo' />
        <nav>
          <ul className='menu'>
            <li className='menu_item'><a className='menu_link' href='#'>Головна</a></li>
            <li className='menu_item'><a className='menu_link' href='#'>Каталог товарів</a></li>
            <li className='menu_item'><a className='menu_link' href='#'>Про нас</a></li>
            <li className='menu_item'><a className='menu_link' href='#'>Контакти</a></li>
          </ul>
        </nav>
        <button className='cole'>Замовити дзвінок</button>
        <ul className='contact'>
          <li className='contact_item'>050 313 55 12</li>
          <li className='contact_item'>095 432 44 67</li>
        </ul>
      </header>
    )
  }
}
