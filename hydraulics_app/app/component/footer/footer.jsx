import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import WooCommerce from '../../connect-woocom-api'

import './footer.styl'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: []
    }
  }
  componentDidMount(){
    WooCommerce.getAsync('products/categories?per_page=99').then(result => {
      this.setState({
        categories: JSON.parse(result.toJSON().body)
      })
    })
  }
  facebook(purl, ptitle, pimg) {
    this.state.url = ('http://www.facebook.com/sharer.php?s=100' + '&title=' + encodeURIComponent(ptitle) + '&u=' + encodeURIComponent(purl) + '&picture=' + encodeURIComponent(pimg))
    window.open(this.state.url,'','toolbar=0,status=0,width=626,height=436');
  }
  twitter(purl, ptitle) {
    this.state.url = 'http://twitter.com/share?' + 'text=' + encodeURIComponent(ptitle) + '&url=' + encodeURIComponent(purl) + '&counturl=' + encodeURIComponent(purl)
    window.open(this.state.url,'','toolbar=0,status=0,width=626,height=436');
  }
  googleplus(purl, ptitle) {
    this.state.url = 'https://plus.google.com/share?' + 'text=' + encodeURIComponent(ptitle) + '&url=' + encodeURIComponent(purl) + '&counturl=' + encodeURIComponent(purl)
    window.open(this.state.url,'','toolbar=0,status=0,width=626,height=436');
  }
  render () {
    console.log(this.state.categories);
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
              {/* <li><Link to='/catalogproduct'>Гідравлічне обладнання</Link></li>
              <li><Link to='/catalogProduct'>Металообробні станки</Link></li>
              <li><Link to='/catalogProduct'>Автозапчастини</Link></li>
              <li><Link to='/catalogProduct'>Ремонт гідроциліндрів</Link></li>
              <li><Link to='/catalogProduct'>Ремонт гідрошлангів</Link></li>
              <li><Link to='/catalogProduct'>Ремонт паливної арматури</Link></li> */}
              <li><Link to='/blog'>Блог</Link></li>
              <li><Link to='/aboutus'>Про нас</Link></li>
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
              <li><a onClick={() => this.facebook(this.props.blog.description, this.props.blog.url, this.props.main.media_carousel1)} className='link' /><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
              <li><a onClick={() => this.twitter(this.props.blog.description, this.props.blog.url)} className='link' /><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
              <li><a onClick={() => this.googleplus(this.props.blog.description, this.props.blog.url)} className='link' /><i className="fa fa-instagram" aria-hidden="true"></i></li>
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
