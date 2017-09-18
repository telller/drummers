import WooCommerce from '../../connect-woocom-api'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import './catalog.styl'

class Catalog extends Component {
  constructor () {
    super()
    this.state = {
      categories: []
    }
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
      <div id='catalog'>
        <h2 className='title'>Каталог товарів</h2>
        <div className='line' />
        <section className='content_item top'>
          <article className='goods'>
            <Link to='/products/46' ><img className='bg_color' alt='img1' width={245} src={this.props.main.media_catalog1.url} /></Link>
            <Link to='/products/46' className='title_link'><h3>Гідравлічне обладнання</h3></Link>
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
            <Link to='/products/56' className='title_link'><h3>Металообробні станки</h3></Link>
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
            <Link to='/products/64' className='title_link'><h3>Запчастини для авто</h3></Link>
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
        <h2 className='title'>Каталог послуг</h2>
        <div className='line' />
        <section className='content_item'>
          <article>
            <Link to='/products/73'><img className='bg_color' alt='img4' width={245} src={this.props.main.media_catalog4.url}/></Link>
            <Link to='/products/73' className='title_link'><h3>Ремонт гідрообладнання</h3></Link>
            <Link to='/products/73'><button className='catalog'>Каталог послуг</button></Link>
          </article>
          <article>
            <Link to='/products/74'><img className='bg_color' alt='img5' width={245} src={this.props.main.media_catalog5.url}/></Link>
            <Link to='/products/74' className='title_link'><h3>Ремонт гідрошлангів</h3></Link>
            <Link to='/products/74'><button className='catalog'>Каталог послуг</button></Link>
          </article>
          <article>
            <Link to='/products/75'><img className='bg_color' alt='img6' width={245} src={this.props.main.media_catalog6.url}/></Link>
            <Link to='/products/75' className='title_link'><h3>Ремонт паливної апаратури </h3></Link>
            <Link to='/products/75'><button className='catalog'>Каталог послуг</button></Link>
          </article>
        </section>
        <div className='grand_auto'>
          <img width={150} src={this.props.main.media_logo.url} alt='logo' />
          <div className='grand_info'>
            <h2>Найнижчі ціни - найкраща якість</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud exercitation</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
