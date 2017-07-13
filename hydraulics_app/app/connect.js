import { editor } from './users'

const WPAPI = require('wpapi')
const WP = new WPAPI({
  endpoint: `http://${location.hostname}/wp-json`,
  username: (editor().username),
  password: (editor().password)
})

export default WP
