import { WooCommerceUser } from './users'

const WooCommerceAPI = require('woocommerce-api')
const WooCommerce = new WooCommerceAPI({
  url: `${window.blog.url}`,
  consumerKey: (WooCommerceUser().consumerKey),
  consumerSecret: (WooCommerceUser().consumerSecret),
  wpAPI: true,
  verifySsl: false,
  version: 'wc/v2'
})

export default WooCommerce
