import React, { Component } from 'react'
import {connect} from 'react-redux'
import WP from '../../connect'
import './ourBlog.styl'
import renderHTML from 'react-render-html'
import moment from 'moment'
import BlogItem from '../postItem/postItem.jsx'

class OurBlog extends Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      tags: []
    }
  }
  getDate (date) {
    const months = {
      '0': 'січня',
      '1': 'лютого',
      '2': 'березня',
      '3': 'квітня',
      '4': 'травня',
      '5': 'червня',
      '6': 'липня',
      '7': 'серпня',
      '8': 'вересня',
      '9': 'жовтня',
      '10': 'листопада',
      '11': 'груденя'
    }
    return moment(date).date() + ' ' + months[moment(date).month()]
  }
  componentDidMount () {
    WP.posts().then(data => {
      this.setState({
        posts: data
      })
    }).catch(err => {
      console.error(err)
    })
    WP.tags().then(data => {
      this.setState({
        tags: data
      })
    }).catch(err => {
      console.error(err)
    })
  }
  render () {
    console.log('POSTS', this.state.posts)
    console.log('TAGS', this.state.tags)
    return (
      <div id='ourBlog'>
        <div className='flex'>
          <h1>Блог</h1>
          <form>
            <input type='search' placeholder='Пошук' />
            <button className='search'><img className='searh_btn' height={24} src={this.props.main.media_search.url} /></button>
          </form>
        </div>
        {this.state.posts.map((el, key) => <BlogItem key={key} el={el} tags={this.state.tags} /> )}


        {/* <div className='shadow'>
          <div><img width={'100%'} src={this.props.main.media_blog.url} alt='pic1' /></div>
          <div className='blog_item'>
            <div className='labeles'>Огляд</div>
            <p className='date'>26 травня</p>
            <h2 className='blog_title'>Гідравлічні клапани та їх різновиди</h2>
            <p className='blog_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
            <p className='blog_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <p className='blog_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
            <div className='blog_link'>
              <a className='read' href='#'>Читати далі</a>
              <div className='hashtag'>
                <a href='#'>#гідравліка</a>
                <a href='#'>#обладнання</a>
                <a href='#'>#огляд</a>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow'>
          <div>
            <iframe className='video' width='100%' height='400' src='https://www.youtube.com/embed/ZvUBGN4KoP0' frameBorder='0' allowFullScreen />
          </div>
          <div className='blog_item'>
            <div className='labeles'>Відео</div>
            <p className='date'>10 травня</p>
            <h2 className='blog_title'>Вибираємо редуктор для гідравлічного насосу</h2>
            <div className='blog_link'>
              <div className='hashtag'>
                <a href='#'>#гідравліка</a>
                <a href='#'>#обладнання</a>
                <a href='#'>#відео</a>
              </div>
            </div>
          </div>
        </div>
        <div className='blog_item shadow'>
          <div className='labeles'>Поради</div>
          <p className='date'>20 травня</p>
          <h2 className='blog_title'>Гідравлічне обладнання: як не розчаруватись у виборі?</h2>
          <p className='blog_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
          <p className='blog_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <p className='blog_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
          <div className='blog_link'>
            <a className='read' href='#'>Читати далі</a>
            <div className='hashtag'>
              <a href='#'>#гідравліка</a>
              <a href='#'>#обладнання</a>
              <a href='#'>#поради</a>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href='#'>1</a></li>
            <li><a href='#'>2</a></li>
            <li><a href='#'>3</a></li>
            <li><a href='#'>4</a></li>
            <li><a href='#'>5</a></li>
            <li><a href='#'>6</a></li>
            <li><a href='#'>7</a></li>
            <li><a href='#'>8</a></li>
          </ul>
        </nav> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(OurBlog)
