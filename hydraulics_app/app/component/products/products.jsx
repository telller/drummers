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
      products: []
    }
  }
  componentDidMount(){
    WooCommerce.getAsync('products?category=' + this.props.params.category).then(result => {
      this.setState({
        products: JSON.parse(result.toJSON().body)
      })
    })
    //console.log(this.props);
  }
  render () {
    return (
      <div id='products'>
        <Header />
        <Product products={this.state.products} />
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
