import React, { Component } from 'react'
import './home.styl'

export default class Home extends Component {
    render () {
        return (
            <div id="home">
                <section className="map">
                  <img src="#" alt="map"/>
                </section>
                <footer>
                  <img src="#" alt="logo" />
                  <div>
                    <ul className="contacts_footer">
                      <li>
                        <p>Головний офіс</p>
                        <p>м.Житомир вул Промислова 12</p>
                      </li>
                      <li>
                        <p>Телефони офісу</p>
                        <p>050 313 55 12, 095 567 42 85</p>
                      </li>
                      <li>
                        <p>info@website.info</p>
                      </li>
                    </ul>
                  </div>
                  <div className="social">
                    <a href="#" className="link twit"></a>
                    <a href="#" className="link inst"></a>
                    <a href="#" className="link fb"></a>
                  </div>
                </footer>

            </div>
        )
    }
}
