import './products.styl'
import {connect} from 'react-redux'
import React, { Component } from 'react'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Product from '../product/product.jsx'
import WooCommerce from '../../connect-woocom-api'



class Products extends Component {
  constructor(props){
    super(props)
    this.state ={
      products: [],
      loaderVisible: true,
      count: 1,
      loadMoreButtonVisible: true
    }
  }
  componentDidMount(){
    WooCommerce.getAsync('products?category=' + this.props.params.category + '&per_page=20&page=' + this.state.count).then(result => {
      if (JSON.parse(result.toJSON().body).length !== 20) {
        this.setState({
          loadMoreButtonVisible: false
        })
      }
      this.setState({
        products: JSON.parse(result.toJSON().body),
        loaderVisible: false
      }, () => WooCommerce.getAsync('products?category=' + this.props.params.category + '&per_page=20&page=' + this.state.count+1).then(result => {
        if (JSON.parse(result.toJSON().body).length === 0) {
          this.setState({
            loadMoreButtonVisible: false
          })
        }
      })
    )
    })
  }
  componentWillReceiveProps(nextProps) {
    WooCommerce.getAsync('products?category=' + nextProps.params.category + '&per_page=20&page=' + this.state.count).then(result => {
      if (JSON.parse(result.toJSON().body).length !== 20) {
        this.setState({
          loadMoreButtonVisible: false
        })
      }
      this.setState({
        products: JSON.parse(result.toJSON().body),
        loaderVisible: false
      }, () => WooCommerce.getAsync('products?category=' + nextProps.params.category + '&per_page=20&page=' + this.state.count+1).then(result => {
        if (JSON.parse(result.toJSON().body).length === 0) {
          this.setState({
            loadMoreButtonVisible: false
          })
        }
      })
    )
    })
  }
  loadMore(){
    this.setState({count: this.state.count + 1},
      () => WooCommerce.getAsync('products?category=' + this.props.params.category + '&per_page=20&page=' + this.state.count).then(result => {
        this.setState({
          products: this.state.products.concat(JSON.parse(result.toJSON().body)),
        }, () => WooCommerce.getAsync('products?category=' + this.props.params.category + '&per_page=20&page=' + this.state.count+1).then(result => {
          if (JSON.parse(result.toJSON().body).length === 0) {
            this.setState({
              loadMoreButtonVisible: false
            })
          }
        })
      )
      }).catch(err => {
        this.setState({
          loadMoreButtonVisible: false
        })
      })
    )
  }
  render () {
    return (
      <div id='products'>
        <Header />
        <img className={this.state.loaderVisible ? 'loader' : 'loader hidden'} src={this.props.main.media_loader.url} />
        <Product className={this.state.loaderVisible ? 'hidden' : ''} products={this.state.products} />

        <button className={this.state.loadMoreButtonVisible && !this.state.loaderVisible ? 'blog_button_load_more' : 'blog_button_load_more hidden'} onClick={() => this.loadMore()}>Завантажити більше</button>
        <Footer />
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
export default connect(mapStateToProps, mapDispatchToProps)(Products)
