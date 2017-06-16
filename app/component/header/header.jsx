import React, { Component } from 'react'
import './header.styl'
import {Link} from 'react-router'

export default class Header extends Component {
  render () {
    return (
      <header id='header'>
        <div className='wrapper'>
          <Link to='/' className='logo'><img className='logo' src='#' alt='Logo' /></Link>
          <nav>
            <ul className='menu'>
              <li className='menu_item'><Link className='menu_link' to='/' activeClassName='active'>Головна</Link></li>
              <li className='menu_item'><Link className='menu_link' to='/catalogProduct' activeClassName='active'>Каталог товарів</Link></li>
              <li className='menu_item'><Link className='menu_link' to='/aboutUs' activeClassName='active'>Про нас</Link></li>
              <li className='menu_item'><Link className='menu_link' to='/blog' activeClassName='active'>Блог</Link></li>
              <li className='menu_item'><Link className='menu_link' to='/contacts' activeClassName='active'>Контакти</Link></li>
            </ul>
          </nav>
          <Link to='/contactForm'><button className='cole'>Замовити дзвінок</button></Link>
          <ul className='contact'>
            <li className='contact_item'>050 313 55 12</li>
            <li className='contact_item'>095 432 44 67</li>
          </ul>
        </div>
      </header>
    )
  }
}
