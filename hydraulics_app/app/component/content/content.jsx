import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import WooCommerce from '../../connect-woocom-api'
import {Link} from 'react-router'
import ContactForm from '../contactForm/contactForm.jsx'
import './content.styl'

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      categories: []
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
  componentDidMount () {
    WooCommerce.getAsync('products/categories?per_page=99').then(result => {
      this.setState({
        categories: JSON.parse(result.toJSON().body)
      })
    })
  }
  render () {
    return (
      <div id='content'>
        <section className='content_item'>
          <article className='goods'>
            <Link to='/products/46' ><img className='bg_color' alt='img1' width={245} src={this.props.main.media_catalog1.url} /></Link>
            <Link to='/products/46' className='goods_title'><h3>Гідравлічне обладнання</h3></Link>
            <Link to='/products/46'><button className='catalog'>Каталог товарів</button></Link>
            <ul className='goods_item'>
              {
                this.state.categories.map((item, index) => {
                  if (item.parent === 46) {
                    return <li key={index}><Link to={'/products/' + item.id}>{item.name}</Link></li>
                  }
                })
              }
            </ul>
          </article>
          <article className='goods'>
            <Link to='/products/56'><img className='bg_color' alt='img2' width={245} src={this.props.main.media_catalog2.url}/></Link>
            <Link to='/products/56' className='goods_title'><h3>Металообробні станки</h3></Link>
            <Link to='/products/56'><button className='catalog'>Каталог товарів</button></Link>
            <ul className='goods_item'>
              {
                this.state.categories.map((item, index) => {
                  if (item.parent === 56) {
                    return <li key={index}><Link to={'/products/' + item.id}>{item.name}</Link></li>
                  }
                })
              }
            </ul>
          </article>
          <article className='goods'>
            <Link to='/products/64'><img className='bg_color' alt='img3' width={245} src={this.props.main.media_catalog3.url}/></Link>
            <Link to='/products/64' className='goods_title'><h3>Запчастини для авто</h3></Link>
            <Link to='/products/64'><button className='catalog'>Каталог товарів</button></Link>
            <ul className='goods_item'>
              {
                this.state.categories.map((item, index) => {
                  if (item.parent === 64) {
                    return <li key={index}><Link to={'/products/' + item.id}>{item.name}</Link></li>
                  }
                })
              }
            </ul>
          </article>
        </section>
        <section className='content_item bottom'>
          <article className='question goods'>
            <h3 className='item_title'>Є ПИТАННЯ?</h3>
            <p>Залиште заявку на консультацію з фахівцем або зателефонуйте нам <span>{this.props.main.contact_one_phone}</span></p>
            <button className='consultation' onClick={this.handleModal}><img className='phone' alt='phone' height={20} src={this.props.main.media_phone.url} />Отримати консультацію</button>
          </article>
          <article className='contacts goods'>
            <h3 className='item_title'>КОНТАКТИ</h3>
            <ul className='contacts_list'>
              <li className='contacts_item location'>
                <p className='contacts_txt'>Головний офіс</p>
                <p className='contacts_txt'>{this.props.main.contact_location}м.Житомир вул Промислова 12</p>
              </li>
              <li className='contacts_item phone_of'>
                <p className='contacts_txt'>Телефони офісу</p>
                <p className='contacts_txt'>{this.props.main.contact_one_phone + ', ' + this.props.main.contact_two_phone}</p>
              </li>
              <li className='contacts_item mail'>
                <p className='contacts_txt'><a className='our_site' href={'mailto:' + this.props.main.contact_email}>{this.props.main.contact_email}</a></p>
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
            <ContactForm close={() => this.close()} />
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
