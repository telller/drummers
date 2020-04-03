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
      postFilters: [],
      tags: [],
      count: 1,
      loadMoreButtonVisible: true,
      searchValue: '',
      loaderVisible: true
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
      '11': 'грудня'
    }
    return moment(date).date() + ' ' + months[moment(date).month()]
  }
  componentDidMount () {
    WP.posts().perPage(6).page(this.state.count).then(data => {
      this.setState({
        posts: data,
        postFilters: data,
        loaderVisible: false
      }, () => WP.posts().perPage(6).page(this.state.count + 1).then(data).catch(err => {
        this.setState({
          loadMoreButtonVisible: false
        })
      }))
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
  loadMore(){
    this.setState({count: this.state.count + 1},
      () => WP.posts().perPage(6).page(this.state.count).then(data => {
        this.setState({
          posts: this.state.posts.concat(data),
          postFilters: this.state.posts.concat(data)
        }, () => WP.posts().perPage(6).page(this.state.count + 1).then(data).catch(err => {
          this.setState({
            loadMoreButtonVisible: false
          })
        })
      )
      }).catch(err => {
        this.setState({
          loadMoreButtonVisible: false
        })
      })
    )
  }
  searchposts(event){
    event.preventDefault()
    let string = this.state.searchValue
    let postFilters = this.state.posts.filter((item) =>
      {if (~item.title.rendered.toLowerCase().indexOf(this.state.searchValue.toLowerCase())){
        return item
      }}
    )
    this.setState({ postFilters})
  }
  render () {
    return (
      <div id='ourBlog'>
        <div className='flex'>
          <h1>Блог</h1>

          <form onSubmit={(event) => this.searchposts(event)}>
            <input onChange={(event) => this.setState({searchValue: event.target.value})} className='search_field' type='search' placeholder='Пошук' />
            <button onClick={(event) => this.searchposts(event)}  className='search'><img className='searh_btn' height={24} src={this.props.main.media_search.url} /></button>
          </form>
        </div>
        <img className={this.state.loaderVisible ? 'loader' : 'loader hidden'} src={this.props.main.media_loader.url} />
        {this.state.postFilters.map((el, key) => <BlogItem key={key} el={el} tags={this.state.tags} /> )}
        <button className={this.state.loadMoreButtonVisible && !this.state.loaderVisible ? 'blog_button_load_more' : 'blog_button_load_more hidden'} onClick={() => this.loadMore()}>Завантажити більше</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { main: state.main, router: state.router, blog: state.blog }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(OurBlog)
