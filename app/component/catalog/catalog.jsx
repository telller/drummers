import React, { Component } from 'react'
import './catalog.styl'

export default class Catalog extends Component {
  render () {
    return (
      <div id='catalog'>
        <h2 className='title'>Каталог товарів</h2>
        <div className='line' />
        <section className='content_item top'>
          <article className='goods'>
            <img src='#' alt='img1' />
            <h3>Гідравлічне обладнання</h3>
            <button className='catalog'>Каталог товарів</button>
            <ul className='goods_item'>
              <li><a href='#'>гідравлічні насоси</a></li>
              <li><a href='#'>гідравлічне обладнання</a></li>
              <li><a href='#'>шланги</a></li>
              <li><a href='#'>трубки</a></li>
              <li><a href='#'>компресори</a></li>
              <li><a href='#'>запчастини до гідравліки</a></li>
              <li><a href='#'>форсунки</a></li>
              <li><a href='#'>корпуси до редукторів</a></li>
              <li><a href='#'>редуктори</a></li>
              <li><a href='#'>насоси</a></li>
            </ul>
          </article>
          <article className='goods'>
            <img src='#' alt='img2' />
            <h3>Металообробні станки</h3>
            <button className='catalog'>Каталог товарів</button>
            <ul className='goods_item'>
              <li><a href='#'>станки DELLA</a></li>
              <li><a href='#'>станки FOX</a></li>
              <li><a href='#'>станки METALFULL</a></li>
              <li><a href='#'>дробильні станки</a></li>
              <li><a href='#'>гравіровочні станки</a></li>
              <li><a href='#'>відбивочні станки FELL</a></li>
              <li><a href='#'>станки CAT</a></li>
            </ul>
          </article>
          <article className='goods'>
            <img src='#' alt='img3' />
            <h3>Запчастини для авто</h3>
            <button className='catalog'>Каталог товарів</button>
            <ul className='goods_item'>
              <li><a href='#'>запчастини до двигуна</a></li>
              <li><a href='#'>запчастини до ПК</a></li>
              <li><a href='#'>диски та шини</a></li>
              <li><a href='#'>форсунки</a></li>
              <li><a href='#'>корпуса</a></li>
              <li><a href='#'>авто метизи</a></li>
              <li><a href='#'>автомагнітоли</a></li>
            </ul>
          </article>
        </section>
        <h2 className='title'>Каталог послуг</h2>
        <div className='line' />
        <section className='content_item'>
          <article>
            <img src='#' alt='img4' />
            <h3>Ремонт гідрообладнання</h3>
            <button className='catalog'>Каталог послуг</button>
          </article>
          <article>
            <img src='#' alt='img4' />
            <h3>Ремонт гідрошлангів</h3>
            <button className='catalog'>Каталог послуг</button>
          </article>
          <article>
            <img src='#' alt='img4' />
            <h3>Ремонт паливної апаратури </h3>
            <button className='catalog'>Каталог послуг</button>
          </article>
        </section>
        <div className='grand_auto'>
          <img src='#' alt='logo' />
          <div className='grand_info'>
            <h2>Найнижчі ціни - найкраща якість</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud exercitation</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
        </div>
      </div>
    )
  }
}
