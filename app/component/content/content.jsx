import React, { Component } from 'react'
import './content.styl'

export default class Content extends Component {
  render () {
    return (
      <div id='content'>
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
        <section className='content_item bottom'>
          <article className='question'>
            <h3>Є ПИТАННЯ?</h3>
            <p>Залиште заявку на консультацію з фахівцем або зателефонуйте нам <span>(050) 313 55 12</span></p>
            <button className='consultation'>Отримати консультацію</button>
          </article>
          <article className='contacts'>
            <h3>КОНТАКТИ</h3>
            <ul className='contacts_list'>
              <li>
                <p>Головний офіс</p>
                <p>м.Житомир вул Промислова 12</p>
              </li>
              <li>
                <p>Телефони офісу</p>
                <p>050 313 55 12, 095 567 42 85</p>
              </li>
              <li>
                <p><a className='our_site' href='#'>info@website.info</a></p>
              </li>
            </ul>
          </article>
        </section>
      </div>
    )
  }
}
