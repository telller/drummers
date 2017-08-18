import React, { Component } from 'react'
import './map.styl'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative',
    color: 'black',
    textAlign: 'center',
    fontSize: 8,
    height: 25,
    width: 25,
    border: '4px solid #DE0400',
    borderRadius: '50%',
    top: -20,
    left: -30
  }}>
    {text}
  </div>
)

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      center: {lat: 50.24, lng: 28.74},
      zoom: 13,
      scrollwheel: false,
      key: 'AIzaSyAnKaOR-VousyT9cpPaq8NiJpGpvM5fQJM'
    }
  }
  render () {
    return (
      <div id='map'>
        <GoogleMapReact defaultCenter={this.state.center} defaultZoom={this.state.zoom} apiKey={this.state.key} options={this.state}>
          <AnyReactComponent
            lat={50.237100}
            lng={28.736621}
            text={'Grand Auto'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
