import React, { Component } from 'react'
import './product.styl'
import {Link} from 'react-router'



export default class Product extends Component {
  constructor(props){
    super(props)

  }
  render () {

    return (
      <div className='container' id='product'>
        <div className='row similar_products center-xs'>
          {
            this.props.products.map(item => {
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
    )
  }
}
