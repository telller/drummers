import React, { Component } from 'react'
import './ourContacts.styl'

export default class OurContacts extends Component {
  render () {
    return (
      <div id='ourContacts'>
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
                <p><a className='our_site' href='#'>info@website.info</a></p>
              </li>
            </ul>
          </div>
          <form action='#'>
            <h3>Зв'язатись з нами</h3>
            <p className='question'>Задайте нам питання, залиште повідомлення нижче</p>
            <div className='flex_input'>
              <input className='short input' type='text' required placeholder="Ім'я" />
              <input className='short' type='tel' required placeholder='Телефон' />
            </div>
            <p><input type='text' required placeholder='Тема' /></p>
            <textarea required placeholder='Ваше повідомлення' />
            <input type='submit' value='Відправити повідомленя' />
          </form>
        </section>
      </div>
    )
  }
}
