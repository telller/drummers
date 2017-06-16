import React, { Component } from 'react'
import './about.styl'

export default class About extends Component {
  render () {
    return (
      <div id='about'>
        <section>
          <div className='title'>
            <h1>Найнижча ціна - найкраща якість</h1>
            <p>на гідравлічне обладнання та металообробні станки в Україні</p>
          </div>
          <button className='catalog'>Каталог товарів</button>
          <ul>
            <li><a className='check' href='#' /></li>
            <li><a className='check' href='#' /></li>
            <li><a className='check' href='#' /></li>
            <li><a className='check' href='#' /></li>
          </ul>
        </section>
      </div>
    )
  }
}
