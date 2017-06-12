import React, { Component } from 'react'
import './about.styl'

export default class About extends Component {
    render() {
        return (
            <div id="about">
                <header>
                  <img src="#" alt="Logo"/>
                  <nav>
                    <ul className="menu">
                      <li className="menu_item"><a className="menu_link" href="#">Головна</a></li>
                      <li className="menu_item"><a className="menu_link" href="#">Каталог товарів</a></li>
                      <li className="menu_item"><a className="menu_link" href="#">Про нас</a></li>
                      <li className="menu_item"><a className="menu_link" href="#">Контакти</a></li>
                    </ul>
                  </nav>
                  <button className="cole">Замовити дзвінок</button>
                  <ul className="contact">
                    <li className="contact_item">050 313 55 12</li>
                    <li className="contact_item">095 432 44 67</li>
                  </ul>
                </header>
                <section>
                  <div className="title">
                    <h1>Найнижча ціна - найкраща якість</h1>
                    <p>на гідравлічне обладнання та металообробні станки в Україні</p>
                  </div>
                  <button className="catalog">Каталог товарів</button>
                  <ul>
                    <li><a className="check" href="#"></a></li>
                    <li><a className="check" href="#"></a></li>
                    <li><a className="check" href="#"></a></li>
                    <li><a className="check" href="#"></a></li>
                  </ul>
                </section>
            </div>
        )
    }
}
