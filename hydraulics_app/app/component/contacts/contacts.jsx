import OurContacts from '../ourContacts/ourContacts.jsx'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Map from '../map/map.jsx'
import './contacts.styl'

class Contacts extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div id='contacts'>
        <Header />
        <OurContacts
          oneNumber={this.props.main.contact_one_phone}
          twoNumber={this.props.main.contact_two_phone}
          email={this.props.main.contact_email}
          location={this.props.main.contact_location}
          admin_email='dimonsuper010@gmail.com'
          url={this.props.blog.url}
        />
        <Map />
        <Footer />
      </div>
    )
  }
}

Contacts.propTypes = {
  main: PropTypes.object,
  blog: PropTypes.object
}

const mapStateToProps = state => {
  return { main: state.main, blog: state.blog }
}

const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
