import React, { Component } from 'react'
import {connect} from 'react-redux'
import './we.styl'

class We extends Component {
  render () {
    return (
      <div id='we'>
        <div className='foto'>
          <img height={400} src={this.props.main.media_ourFoto.url} alt='Our photo' />
        </div>
        <div className='info'>
          <h2 className='title'>{this.props.main.about_us_heading}</h2>
          <p>{this.props.main.about_us_textarea}</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(We)
