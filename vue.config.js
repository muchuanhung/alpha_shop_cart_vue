// ./vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/alpha_shop_cart_vue/'
    : '/'
}