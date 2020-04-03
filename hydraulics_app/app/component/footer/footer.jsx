import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import WP from '../../connect'
import {Link} from 'react-router'
import WooCommerce from '../../connect-woocom-api'

import './footer.styl'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: [],
      emailValue: ''
    }
  }
  componentDidMount(){
    WooCommerce.getAsync('products/categories?per_page=99').then(result => {
      this.setState({
        categories: JSON.parse(result.toJSON().body)
      })
    })
  }
  openNewTab(url) {
    window.open(url,'_blank')
  }
  hendleSubscribingEmail({target}){
    this.setState({
      emailValue: target.value
    })
  }
  sendEmail(event){
    WP.users().create({
      username: this.state.emailValue,
      email: this.state.emailValue,
      password: this.state.emailValue
    })
    event.preventDefault()
  }
  render () {
    return (
      <footer id='footer'>
        <div className='main_ftr'>
          <div className='logo_ftr'>
            <img className='logo_img' alt='logo' width={100} src={this.props.main.media_logo1.url} />
            <p>продаж гідравлічного обладнання, металообробних станків, автозапчастин, ремонт гідроциліндрів, гідрошлангів, паливної арматури та ін.</p>
          </div>
          <div className='rubric'>
            <h4 className='titel'>Рубрики</h4>
            <ul className='rubric_list'>
              {
                this.state.categories.map((item, index) => {
                  if ((item.parent === 0 || item.parent === 72) && item.id !== 72 ) {
                    return <li key={index}><Link to={'/products/'+ item.id}>{item.name}</Link></li>
                  }
                })
              }

              {/* <li><Link to='/blog'>Блог</Link></li> */}
              <li><Link to='/about'>Про нас</Link></li>
            </ul>
          </div>
          <div className='contact_ftr'>
            <h4 className='titel'>Контакти</h4>
            <ul className='contact_list'>
              <li>
                <p>Головний офіс</p>
                <p>{this.props.main.contact_location}</p>
              </li>
              <li>
                <p>Телефони офісу</p>
                <p>{this.props.main.contact_one_phone}, {this.props.main.contact_two_phone}</p>
              </li>
              <li>
                <p><a href='' className='our_site'>{this.props.main.contact_email}</a></p>
              </li>
            </ul>
          </div>
        </div>
        <div className='sub_ftr'>
          <form onSubmit={event => this.sendEmail(event)} className='controls' action=''>
            <input onChange={(event) => this.hendleSubscribingEmail(event)} className='controls_text' type='email' required placeholder='Введіть email, отримуйте новини' />
            <input className='controls_submit' type='submit' value='&#62;' />
          </form>
          <div className='social'>
            <ul className='social_list'>
              <li className={this.props.main.contact_url_fb ? '' : 'hidden'} onClick={() => this.openNewTab(this.props.main.contact_url_fb)}><a className='link' /><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
              <li className={this.props.main.contact_url_twit ? '' : 'hidden'} onClick={() => this.openNewTab(this.props.main.contact_url_twit)}><a className='link' /><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
              <li className={this.props.main.contact_url_inst ? '' : 'hidden'} onClick={() => this.openNewTab(this.props.main.contact_url_inst)}><a className='link' /><i className="fa fa-instagram" aria-hidden="true"></i></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
Footer.propTypes = {
  main: PropTypes.object
}

const mapStateToProps = state => {
  return { main: state.main, router: state.router, blog: state.blog }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
