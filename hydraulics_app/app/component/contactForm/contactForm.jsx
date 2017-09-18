import React, { Component } from 'react'
import {connect} from 'react-redux'
import './contactForm.styl'

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: `${window.blog.url}` + '/wp-content/themes/hydraulics/hydraulics_app/app/sendEmail.php',
      email: false,
      emailValue: '',
      name: false,
      nameValue: '',
      subject: false,
      subjectValue: '',
      message: false,
      messageValue: '',
      madalshow: false
    }
  }
  handleChangeEmail (event) {
    this.setState({
      emailValue: event.target.value
    })
    if (event.target.value !== '') {
      this.setState({
        email: true
      })
      return
    } else {
      this.setState({
        email: false
      })
      return
    }
  }
  handleChangeName (event) {
    this.setState({
      nameValue: event.target.value
    })
    if (event.target.value !== '') {
      this.setState({
        name: true
      })
    } else {
      this.setState({
        name: false
      })
    }
  }
  handleChangeSubject (event) {
    this.setState({
      subjectValue: event.target.value
    })
    if (event.target.value !== '') {
      this.setState({
        subject: true
      })
    } else {
      this.setState({
        subject: false
      })
    }
  }
  handleChangeMessage (event) {
    this.setState({
      messageValue: event.target.value
    })
    if (event.target.value !== '') {
      this.setState({
        message: true
      })
    } else {
      this.setState({
        message: false
      })
    }
  }
  sendEmail (event) {
    let xhr = new XMLHttpRequest()
    let params = 'project_name=' + encodeURIComponent('Hydraulics') +
     '&admin_email=' + encodeURIComponent(this.props.blog.admin_email) +
     '&form_subject=' + encodeURIComponent(this.state.subjectValue) +
     '&my_name=' + encodeURIComponent(this.state.nameValue) +
     '&my_email=' + encodeURIComponent(this.state.emailValue) +
     '&message=' + encodeURIComponent(this.state.messageValue)
    xhr.open('POST', this.state.url, false)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    xhr.send(params)
    if (xhr.status !== 200) {
      console.log(xhr.status + ': ' + xhr.statusText)
    } else {
      console.log(xhr.responseText)
    }
    this.setState({
      email: false,
      emailValue: '',
      name: false,
      nameValue: '',
      subject: false,
      subjectValue: '',
      message: false,
      messageValue: '',
      madalshow: true
    })
    this.props.close()
    event.preventDefault()
  }
  render () {
    return (
      <div id='contactForm'>
        <form onSubmit={event => this.sendEmail(event)}>
          <div className='flex_input'>
            <input onChange={event => this.handleChangeName(event)} className='short input' type='text' required placeholder="Ім'я" />
            <input onChange={event => this.handleChangeEmail(event)} className='short' type='tel' required placeholder='Телефон' />
          </div>
          <p><input onChange={event => this.handleChangeSubject(event)} type='text' required placeholder='Тема' /></p>
          <textarea onChange={event => this.handleChangeMessage(event)} required placeholder='Ваше повідомлення' />
          <input type='submit' value='Відправити повідомленя' />
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { main: state.main, router: state.router, blog: state.blog }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
