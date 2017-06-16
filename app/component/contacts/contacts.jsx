import OurContacts from '../ourContacts/ourContacts.jsx'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import React, { Component } from 'react'
import Map from '../map/map.jsx'
import './contacts.styl'

class Contacts extends Component {
  render () {
    return (
      <div id='contacts'>
        <Header />
        <OurContacts />
        <Map />
        <Footer />
      </div>
    )
  }
}

export default Contacts
