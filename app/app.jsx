import React, { Component } from 'react'
import './app.styl'
import About from './component/about/about.jsx'
import Content from './component/content/content.jsx'
import Home from './component/home/home.jsx'

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <About/>
                <Content/>
                <Home/>
            </div>
        )
    }
}
