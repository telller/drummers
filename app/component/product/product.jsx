import React, { Component } from 'react'
import './product.styl'

export default class Product extends Component {
  render () {
    return (
      <div id='product'>
        <div className='product_page'>
          <h2>Гідроклапан РВ-54-2 (ISO 66)</h2>
          <div className='black_line' />
          <img src='#' alt='pic1' />
          <div className='description'>
            <h3>Гідроклапан РВ-54-2 (ISO 66)</h3>
            <h4>540 грн*</h4>
            <p className='remark'>*ціна станом на 15 червня 2017. Для уточнення правильної ціни зателефонуйте до офісу компанії</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia de</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <h2>Схожі товари</h2>
        <div className='black_line' />
        <section className='similar_products'>
          <article>
            <img src='#' alt='pic2' />
            <div>
              <h3>Гідроклапан РВ-64-2 (ISO 66)</h3>
              <h4>620 грн</h4>
              <button className='look'>Переглянути товар</button>
            </div>
          </article>
          <article>
            <img src='#' alt='pic2' />
            <div>
              <h3>Гідроклапан РВ-43-5 (ISO 78)</h3>
              <h4>780 грн</h4>
              <button className='look'>Переглянути товар</button>
            </div>
          </article>
          <article>
            <img src='#' alt='pic2' />
            <div>
              <h3>Гідроклапан РВ-43-2 (ISO 56)</h3>
              <h4>475 грн</h4>
              <button className='look'>Переглянути товар</button>
            </div>
          </article>
        </section>
      </div>
    )
  }
}
