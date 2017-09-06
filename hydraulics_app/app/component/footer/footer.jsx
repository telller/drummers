import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import './footer.styl'

class Footer extends Component {
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
              <li><Link to='/catalogProduct'>Гідравлічне обладнання</Link></li>
              <li><Link to='/catalogProduct'>Металообробні станки</Link></li>
              <li><Link to='/catalogProduct'>Автозапчастини</Link></li>
              <li><Link to='/catalogProduct'>Ремонт гідроциліндрів</Link></li>
              <li><Link to='/catalogProduct'>Ремонт гідрошлангів</Link></li>
              <li><Link to='/catalogProduct'>Ремонт паливної арматури</Link></li>
              <li><Link to='/blog'>Блог</Link></li>
              <li><Link to='/aboutUs'>Про нас</Link></li>
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
                <p><a href='#' className='our_site'>{this.props.main.contact_email}</a></p>
              </li>
            </ul>
          </div>
        </div>
        <div className='sub_ftr'>
          <form className='controls' action=''>
            <input className='controls_text' type='text' required placeholder='Введіть email, отримуйте новини' />
            <input className='controls_submit' type='submit' value='&#62;' />
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
Footer.propTypes = {
  main: PropTypes.object
}

const mapStateToProps = state => {
  return { main: state.main, router: state.router }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
