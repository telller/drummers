import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import './content.styl'

class Content extends Component {
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
      <div id='content'>
        <section className='content_item'>
          <article className='goods'>
            <a href='#'><img className='bg_color' alt='img1' width={245} src={this.props.main.media_catalog1.url}/></a>
            <a href='#' className='title_link'><h3 className='goods_title'>Гідравлічне обладнання</h3></a>
            <a href='#'><button className='catalog'>Каталог товарів</button></a>
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
            <a href='#'><img className='bg_color' alt='img2' width={245} src={this.props.main.media_catalog2.url}/></a>
            <a href='#' className='title_link'><h3 className='goods_title'>Металообробні станки</h3></a>
            <a href='#'><button className='catalog'>Каталог товарів</button></a>
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
            <a href='#'><img className='bg_color' alt='img3' width={245} src={this.props.main.media_catalog3.url}/></a>
            <a href='#' className='title_link'><h3 className='goods_title'>Запчастини для авто</h3></a>
            <a href='#'><button className='catalog'>Каталог товарів</button></a>
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
          <article className='question goods'>
            <h3 className='item_title'>Є ПИТАННЯ?</h3>
            <p>Залиште заявку на консультацію з фахівцем або зателефонуйте нам <span>(050) 313 55 12</span></p>
            <button className='consultation' onClick={this.handleModal}><img className='phone' alt='phone' height={20} src={this.props.main.media_phone.url} />Отримати консультацію</button>
          </article>
          <article className='contacts goods'>
            <h3 className='item_title'>КОНТАКТИ</h3>
            <ul className='contacts_list'>
              <li className='contacts_item location'>
                <p className='contacts_txt'>Головний офіс</p>
                <p className='contacts_txt'>м.Житомир вул Промислова 12</p>
              </li>
              <li className='contacts_item phone_of'>
                <p className='contacts_txt'>Телефони офісу</p>
                <p className='contacts_txt'>050 313 55 12, 095 567 42 85</p>
              </li>
              <li className='contacts_item mail'>
                <p className='contacts_txt'><a className='our_site' href='#'>info@website.info</a></p>
              </li>
            </ul>
          </article>
        </section>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title'>Замовити зворотній дзвінок</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className='question'>Залиште повідомлення нижче - ми вам зателефонуємо</p>
            <form action='#'>
              <div className='flex_input'>
                <input className='short input' type='text' required placeholder="Ім'я" />
                <input className='short' type='tel' required placeholder='Телефон' />
              </div>
              <p><input type='text' required placeholder='Тема' /></p>
              <textarea required placeholder='Ваше повідомлення' />
              <input type='submit' value='Відправити повідомленя' />
            </form>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { main: state.main, router: state.router }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)
