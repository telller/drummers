import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ContactForm from '../contactForm/contactForm.jsx'
import {Link} from 'react-router'
import './header.styl'


class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.handleModal = this.handleModal.bind(this)
    this.close = this.close.bind(this)
  }
  handleModal () {
    this.setState({showModal: true})
  }
  close () {
    this.setState({showModal: false})
  }
  open () {
    this.setState({showModal: true})
  }
  render () {
    return (
      <header id='header'>
        <div className='wrapper'>
          <Link to='/' className='logo'><img className='logo' width={100} src={this.props.main.media_logo.url} alt='Logo' /></Link>
          <div className='conteiner'>
            <nav>
              <ul className='menu'>
                <li className='menu_item'><Link className='menu_link' to='/' activeClassName='active'>Головна</Link></li>
                <li className='menu_item'><Link className='menu_link' to='/catalog' activeClassName='active'>Каталог товарів</Link></li>
                <li className='menu_item'><Link className='menu_link' to='/about' activeClassName='active'>Про нас</Link></li>
                <li className='menu_item'><Link className='menu_link' to='/blog' activeClassName='active'>Блог</Link></li>
                <li className='menu_item'><Link className='menu_link' to='/contacts' activeClassName='active'>Контакти</Link></li>
              </ul>
            </nav>
            <button className='cole' onClick={this.handleModal}><img className='phone' alt='phone' height={20} src={this.props.main.media_phone.url} />Замовити дзвінок</button>
          </div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title'>Замовити зворотній дзвінок</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className='question'>Залиште повідомлення нижче - ми вам зателефонуємо</p>
              <ContactForm close={this.close} />
            </Modal.Body>
            <Modal.Footer />
          </Modal>
          <ul className='contact'>
            <li>Телефони офісу:</li>
            <li className='contact_item'>{this.props.main.contact_one_phone}</li>
            <li className='contact_item'>{this.props.main.contact_two_phone}</li>
          </ul>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  main: PropTypes.object
}
const mapStateToProps = state => {
  return { main: state.main, router: state.router }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
