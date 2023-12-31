const {
  defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({

  lintOnSave: false,

  publicPath: process.env.NODE_ENV === 'production'
  ? ''
  : '/'

})