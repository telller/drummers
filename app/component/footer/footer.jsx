import React, { Component } from 'react'
import './footer.styl'

export default class Footer extends Component {
  render () {
    return (
      <footer id='footer'>
        <div className='main_ftr'>
          <div className='logo_ftr'>
            <img src='#' alt='logo' />
            <p>продаж гідравлічного обладнання, металообробних станків, автозапчастин, ремонт гідроциліндрів, гідрошлангів, паливної арматури та ін.</p>
          </div>
          <div className='rubric'>
            <h4 className='titel'>Рубрики</h4>
            <ul className='rubric_list'>
              <li><a href='#'>Гідравлічне обладнання</a></li>
              <li><a href='#'>Металообробні станки</a></li>
              <li><a href='#'>Автозапчастини</a></li>
              <li><a href='#'>Ремонт гідроциліндрів</a></li>
              <li><a href='#'>Ремонт гідрошлангів</a></li>
              <li><a href='#'>Ремонт паливної арматури</a></li>
              <li><a href='#'>Блог</a></li>
              <li><a href='#'>Про нас</a></li>
            </ul>
          </div>
          <div className='contact_ftr'>
            <h4 className='titel'>Контакти</h4>
            <ul className='contact_list'>
              <li>
                <p>Головний офіс</p>
                <p>м.Житомир вул Промислова 12</p>
              </li>
              <li>
                <p>Телефони офісу</p>
                <p>050 313 55 12, 095 567 42 85</p>
              </li>
              <li>
                <p>info@website.info</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='sub_ftr'>
          <form className='controls' action=''>
            <input type='text' required placeholder='   Введіть email, отримуйте новини' />
            <input type='submit' value='&#62;' />
          </form>
          <div className='social'>
            <ul className='social_list'>
              <li><a href='#' className='link fb' /></li>
              <li><a href='#' className='link twit' /></li>
              <li><a href='#' className='link goodle' /></li>
              <li><a href='#' className='link inst' /></li>
              <li><a href='#' className='link dot' /></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
