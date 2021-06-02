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

/**VCA-EXPORTS**/
exports.computed = undefined;
exports.createApp = undefined;
exports.createRef = undefined;
exports.customRef = undefined;
exports.defineAsyncComponent = undefined;
exports.defineComponent = undefined;
exports.del = undefined;
exports.getCurrentInstance = undefined;
exports.h = undefined;
exports.inject = undefined;
exports.isRaw = undefined;
exports.isReactive = undefined;
exports.isReadonly = undefined;
exports.isRef = undefined;
exports.markRaw = undefined;
exports.nextTick = undefined;
exports.onActivated = undefined;
exports.onBeforeMount = undefined;
exports.onBeforeUnmount = undefined;
exports.onBeforeUpdate = undefined;
exports.onDeactivated = undefined;
exports.onErrorCaptured = undefined;
exports.onMounted = undefined;
exports.onServerPrefetch = undefined;
exports.onUnmounted = undefined;
exports.onUpdated = undefined;
exports.provide = undefined;
exports.proxyRefs = undefined;
exports.reactive = undefined;
exports.readonly = undefined;
exports.ref = undefined;
exports.set = undefined;
exports.shallowReactive = undefined;
exports.shallowReadonly = undefined;
exports.shallowRef = undefined;
exports.toRaw = undefined;
exports.toRef = undefined;
exports.toRefs = undefined;
exports.triggerRef = undefined;
exports.unref = undefined;
exports.useCSSModule = undefined;
exports.useCssModule = undefined;
exports.warn = undefined;
exports.watch = undefined;
exports.watchEffect = undefined;
/**VCA-EXPORTS**/
