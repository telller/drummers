import React, { Component } from 'react'
import './product.styl'
import {Link} from 'react-router'



export default class Product extends Component {
  constructor(props){
    super(props)

  }
  render () {
    console.log(this.props.products);

    return (
      <div className='container' id='product'>

        {/* <div className='black_line' /> */}
        <div className='row similar_products center-xs'>
          {
            this.props.products.map(item => {
              console.log(item.id);
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

          {/* <article>
            <img src='#' alt='pic2' />
            <div>
              <h3>Гідроклапан РВ-43-5 (ISO 78)</h3>
              <h4>780 грн</h4>
              <button className='look'>Переглянути товар</button>
            </div>
          </article>
          <article>
            <img src='#' alt='pic2' />
            <div>
              <h3>Гідроклапан РВ-43-2 (ISO 56)</h3>
              <h4>475 грн</h4>
              <button className='look'>Переглянути товар</button>
            </div>
          </article> */}
        </div>
      </div>
    )
  }
}
