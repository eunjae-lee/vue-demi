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

export {
  V as Vue,
  Vue2,
  isVue2,
  isVue3,
  version,
}

/**VCA-EXPORTS**/
export const computed: undefined;
export const createApp: undefined;
export const createRef: undefined;
export const customRef: undefined;
export const defineAsyncComponent: undefined;
export const defineComponent: undefined;
export const del: undefined;
export const getCurrentInstance: undefined;
export const h: undefined;
export const inject: undefined;
export const isRaw: undefined;
export const isReactive: undefined;
export const isReadonly: undefined;
export const isRef: undefined;
export const markRaw: undefined;
export const nextTick: undefined;
export const onActivated: undefined;
export const onBeforeMount: undefined;
export const onBeforeUnmount: undefined;
export const onBeforeUpdate: undefined;
export const onDeactivated: undefined;
export const onErrorCaptured: undefined;
export const onMounted: undefined;
export const onServerPrefetch: undefined;
export const onUnmounted: undefined;
export const onUpdated: undefined;
export const provide: undefined;
export const proxyRefs: undefined;
export const reactive: undefined;
export const readonly: undefined;
export const ref: undefined;
export const set: undefined;
export const shallowReactive: undefined;
export const shallowReadonly: undefined;
export const shallowRef: undefined;
export const toRaw: undefined;
export const toRef: undefined;
export const toRefs: undefined;
export const triggerRef: undefined;
export const unref: undefined;
export const useCSSModule: undefined;
export const useCssModule: undefined;
export const warn: undefined;
export const watch: undefined;
export const watchEffect: undefined;
/**VCA-EXPORTS**/
