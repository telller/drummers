import { admin } from './users'

const WPAPI = require('wpapi')
const WP = new WPAPI({
  endpoint: location.origin + '/wp-json',
  username: (admin().username),
  password: (admin().password)
})

export default WP
