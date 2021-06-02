var Vue = require('vue')
var VueCompositionAPI = require('@vue/composition-api')

Object.keys(VueCompositionAPI).forEach(function(key) {
  exports[key] = undefined
})

exports.Vue = Vue
exports.Vue2 = Vue
exports.isVue2 = true
exports.isVue3 = false
exports.version = Vue.version
