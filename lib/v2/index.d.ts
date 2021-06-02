import Vue from 'vue'
declare const isVue2: boolean
declare const isVue3: boolean
declare const Vue2: Vue | undefined
declare const version: string
/** 
 * @deprecated To avoid bringing in all the tree-shakable modules, this API has been deprecated. Use `Vue2` or named exports instead.
 * Refer to https://github.com/vueuse/vue-demi/issues/41
 */
declare const V: Vue

/**VCA-EXPORTS**/
export * from '@vue/composition-api'
/**VCA-EXPORTS**/

export {
  V as Vue,
  Vue2,
  isVue2,
  isVue3,
  version,
}
