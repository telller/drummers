import { Carousel } from 'react-bootstrap'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import './about.styl'

class About extends Component {
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
            <img className='streth' height={568} alt='img1' src={this.props.main.media_carousel1.url} />
            <Carousel.Caption className='caption_item'>
              <h1 className='caption_title'>Найнижча ціна - найкраща якість</h1>
              <p className='caption_text'>на гідравлічне обладнання та металообробні станки в Україні</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='streth' height={568} alt='img3' src={this.props.main.media_carousel2.url} />
            <Carousel.Caption className='caption_item'>
              <h1 className='caption_title'>Широкий вибір металообробних станків FOX</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='streth' height={568} alt='img2' src={this.props.main.media_carousel3.url} />
            <Carousel.Caption className='caption_item'>
              <h1 className='caption_title'>Якісні автозапчастини від виробника</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Link to='/catalog'><button className='catalog'>Каталог товарів</button></Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(About)
