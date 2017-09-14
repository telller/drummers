import React, { Component } from 'react'
import WooCommerce from '../../connect-woocom-api'
import ReactHtmlParser from 'react-html-parser'
import Footer from '../footer/footer.jsx'
import Header from '../header/header.jsx'
import {Link} from 'react-router'


export default class SingleProduct extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: null,
      products: []
    }
  }
  componentWillMount(){
    WooCommerce.getAsync('products/' + this.props.params.id).then(result => {
      this.setState({
        product: JSON.parse(result.toJSON().body)
      })
      WooCommerce.getAsync('products?category=' + JSON.parse(result.toJSON().body).categories[0].id + '&per_page=4').then(data => {
        this.setState({
          products: JSON.parse(data.toJSON().body).filter(item => JSON.parse(result.toJSON().body).id !== item.id)
        })
      })
    })
  }
  componentWillReceiveProps(nexProps){
    WooCommerce.getAsync('products/' + nexProps.params.id).then(result => {
      this.setState({
        product: JSON.parse(result.toJSON().body)
      })
      WooCommerce.getAsync('products?category=' + JSON.parse(result.toJSON().body).categories[0].id + '&per_page=4').then(data => {
        this.setState({
          products: JSON.parse(data.toJSON().body).filter(item => JSON.parse(result.toJSON().body).id !== item.id)
        })
      })
    })
  }
  render () {
    console.log(this.state.products);
    return (
      <div>
        <Header />

        <div className='container' id='product'>
          <div className='product_page'>
            <h2>{this.state.product && this.state.product.name}</h2>
            <div className='black_line'></div>
            <img src={this.state.product && this.state.product.images[0].src} alt='pic1' />
            <div className='description'>
              <h3>{this.state.product && this.state.product.name}</h3>
              <h4> {this.state.product && this.state.product.regular_price + ' грн*'}</h4>
              {/* <p className='remark'>*ціна станом на 15 червня 2017. Для уточнення правильної ціни зателефонуйте до офісу компанії</p> */}
              <div>
                {this.state.product && ReactHtmlParser(this.state.product.description)}
              </div>
            </div>
          </div>
          <h2>Схожі товари</h2>
          <div className='black_line' ></div>
          <div className='row similar_products center-xs'>
            {
              this.state.products && this.state.products.map(item => {
                return (
                  <div key={item.id} className='col-xs-6 col-sm-4 col-md-3'>
                    <article>
                      <img src={item.images[0].src} alt='pic2' />
                      <div>
                        <h4>{item.name}</h4>
                        <h5>{item.regular_price + ' грн'}</h5>
                      </div>
                      <Link to={'/product/' + item.id} className='look'>Переглянути товар</Link>
                    </article>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
