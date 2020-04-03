import React, { Component } from 'react'
import './ourContacts.styl'
import PropTypes from 'prop-types'

export default class OurContacts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      theme: '',
      message: '',
      url: this.props.url + '/wp-content/themes/hydraulics/hydraulics_app/app/sendEmail.php'
    }
  }
  onSubmitForm (event) {
    event.preventDefault()
    console.log('sas')
    let xhr = new XMLHttpRequest()
    let params = 'project_name=' + encodeURIComponent('Hydraulics') +
     '&admin_email=' + encodeURIComponent(this.props.admin_email) +
     '&form_subject=' + encodeURIComponent(this.state.theme) +
     '&my_name=' + encodeURIComponent(this.state.name) +
     '&my_phone=' + encodeURIComponent(this.state.phone) +
     '&message=' + encodeURIComponent(this.state.message)

    xhr.open('POST', this.state.url, false)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    xhr.send(params)
    if (xhr.status !== 200) {
      console.log(xhr.status + ': ' + xhr.statusText)
    } else {
      console.log(xhr.responseText)
    }
    document.getElementById('send_email_form').reset()
    this.setState({
      name: '',
      phone: '',
      theme: '',
      message: ''
    })
  }
  heandleName (event) {
    this.setState({name: event.target.value})
  }
  heandlePhone (event) {
    this.setState({phone: event.target.value})
  }
  heandleTheme (event) {
    this.setState({theme: event.target.value})
  }
  heandleMessage (event) {
    this.setState({message: event.target.value})
  }

  render () {
    return (
      <div id='ourContacts'>
        <section className='flex_contacts'>
          <div>
            <h2>Контакти</h2>
            <ul className='contacts_list'>
              <li className='location'>
                <p>Головний офіс</p>
                <p>{this.props.location}</p>
              </li>
              <li className='phone_of'>
                <p>Телефони офiсу</p>
                <p>{this.props.oneNumber},</p>
                <p>{this.props.twoNumber}</p>
              </li>
              <li className='mail'>
                <p><a className='our_site' href='#'>{this.props.email}</a></p>
              </li>
            </ul>
          </div>
          <form onSubmit={event => this.onSubmitForm(event)} id='send_email_form' action='#'>
            <h3>Зв'язатись з нами</h3>
            <p className='question'>Задайте нам питання, залиште повідомлення нижче</p>
            <div className='flex_input'>
              <input value={this.state.name} onChange={event => this.heandleName(event)} className='short input' type='text' required placeholder="Ім'я" />
              <input value={this.state.phone} onChange={event => this.heandlePhone(event)} className='short' type='tel' required placeholder='Телефон' />
            </div>
            <p><input value={this.state.theme} onChange={event => this.heandleTheme(event)} type='text' required placeholder='Тема' /></p>
            <textarea value={this.state.message} onChange={event => this.heandleMessage(event)} required placeholder='Ваше повідомлення' />
            <input type='submit' value='Відправити повідомлення' />
          </form>
        </section>
      </div>
    )
  }
}
OurContacts.propTypes = {
  location: PropTypes.string,
  oneNumber: PropTypes.string,
  twoNumber: PropTypes.string,
  email: PropTypes.string,
  url: PropTypes.string,
  admin_email: PropTypes.string
}
