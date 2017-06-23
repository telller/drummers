import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './about.styl'

export default class About extends Component {
  render () {
    return (
      <div id='about'>
        <Carousel>
          <Carousel.Item>
            <img height={500} alt='img1' src='../img/hw.jpg' />
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt='900x500' src='/assets/carousel.png' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt='900x500' src='/assets/carousel.png' />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

// <section>
//   <div className='title'>
//     <h1>Найнижча ціна - найкраща якість</h1>
//     <p>на гідравлічне обладнання та металообробні станки в Україні</p>
//   </div>
//   <button className='catalog'>Каталог товарів</button>
//   <ul>
//     <li><a className='check' href='#' /></li>
//     <li><a className='check' href='#' /></li>
//     <li><a className='check' href='#' /></li>
//     <li><a className='check' href='#' /></li>
//   </ul>
// </section>
