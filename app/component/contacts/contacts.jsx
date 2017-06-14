import React, { Component } from 'react'
import './contacts.styl'

export default class Contacts extends Component {
  render () {
    return (
      <div id='contacts'>
        <section className='flex_contacts'>
          <div>
            <h2>Контакти</h2>
            <ul className='contacts_list'>
              <li>
                <p>Головний офіс</p>
                <p>м.Житомир вул Промислова 12</p>
              </li>
              <li>
                <p>Телефони офісу</p>
                <p>050 313 55 12,</p>
                <p>095 567 42 85</p>
              </li>
              <li>
                <p>info@website.info</p>
              </li>
            </ul>
          </div>
          <form action='#'>
            <h3>Зв'язатись з нами</h3>
            <p className='question'>Задайте нам питання, залиште повідомлення нижче</p>
            <div className='flex_input'>
              <input className='short input' type='text' placeholder="  Ім'я" />
              <input className='short' type='tel' placeholder='  Телефон' />
            </div>
            <p><input type='text' placeholder='  Тема' /></p>
            <textarea placeholder=' Ваше повідомлення' />
            <input type='submit' value='Відправити повідомленя' />
          </form>
        </section>
        <section className='google_map'>
          <img src='#' alt='Google map' />
        </section>
      </div>
    )
  }
}
