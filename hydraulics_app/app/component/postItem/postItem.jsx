import React, { Component } from 'react'
import {connect} from 'react-redux'
import WP from '../../connect'
import './postItem.styl'
import renderHTML from 'react-render-html'
import moment from 'moment'

class BlogItem extends Component {
  constructor () {
    super()
    this.state = {
      showPost: false
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
  render () {
    return (
      <div className='blog_item shadow'>
        <div className='labeles'>Поради</div>
        <p className='date'>{this.getDate(this.props.el.date)}</p>
        <div className='blog_title'>{this.props.el.title.rendered}</div>
        <div className='blog_text'>{this.state.showPost ? renderHTML(this.props.el.content.rendered) : renderHTML(this.props.el.excerpt.rendered)}</div>
        <div className='blog_link'>
          <a className='read' onClick={() => this.setState({showPost: !this.setState.showPost})}>Читати далі</a>
          <div className='hashtag'>{this.props.el.tags.map((el, key) => {
            let tag = el
            return (
              <div key={key}>{this.props.tags.map(el => {
                if (el.id === tag) {
                  return el.name
                }
              })}</div>
            )
          })}</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { main: state.main, router: state.router }
}

export default connect(mapStateToProps)(BlogItem)
