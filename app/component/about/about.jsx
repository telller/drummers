import { Carousel } from 'react-bootstrap'
import React, { Component } from 'react'
import {Link} from 'react-router'
import './about.styl'

export default class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      interval: 0
    }
  }
  render () {
    return (
      <div id='about'>
        <Carousel interval={this.state.interval}>
          <Carousel.Item>
            <img height={500} alt='img1' src='./app/component/img/c.jpg' />
            <Carousel.Caption className='caption_item'>
              <h1 className='caption_title'>Найнижча ціна - найкраща якість</h1>
              <p className='caption_text'>на гідравлічне обладнання та металообробні станки в Україні</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt='img3' src='./app/component/img/cl0.jpg' />
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt='img2' src='./app/component/img/cl.jpg' />
          </Carousel.Item>
          <Carousel.Item>
            <img height={500} alt='img3' src='./app/component/img/cl.jpg' />
          </Carousel.Item>
        </Carousel>
        <Link to='/catalogProduct'><button className='catalog'>Каталог товарів</button></Link>
      </div>
    )
  }
}
