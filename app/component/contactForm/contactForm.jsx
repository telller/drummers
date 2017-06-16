import React, { Component } from 'react'
import './contactForm.styl'

export default class ContactForm extends Component {
  render () {
    return (
      <div id='contactForm'>
        <form action='#'>
          <h3>Зв'язатись з нами</h3>
          <p className='question'>Задайте нам питання, залиште повідомлення нижче</p>
          <div className='flex_input'>
            <input className='short input' type='text' required placeholder="  Ім'я" />
            <input className='short' type='tel' required placeholder='  Телефон' />
          </div>
          <p><input type='text' required placeholder='  Тема' /></p>
          <textarea required placeholder=' Ваше повідомлення' />
          <input type='submit' value='Відправити повідомленя' />
        </form>
      </div>
    )
  }
}
