# `@eunjae-lee/vue-demi`

This is a fork of [vue-demi](https://github.com/vueuse/vue-demi).

The original version intends two use cases:

1. Vue2 + composition api
2. Vue3

However, this fork removes the composition api. It is useful when your library doesn't use any composition api but still need to check vue version and use different APIs accordingly.

```js
import { isVue3, h } from 'vue-demi';

...

render(createElement) {
  return (isVue3 ? h : createElement)(...)
}
```

In case of Vue 2, this forked `vue-demi` will export all the Vue3-only APIs as `undefined`, such as `h`, `createApp`, `defineComponent`, and so on.

## import from `vue` vs `vue-demi`?

When to import from `vue` and when to import from `vue-demi`?

- If you need access to `isVue3`, `isVue2`, `Vue2`, or `version`, then they all are in `vue-demi`.
- If you need Vue3-only APIs, import them from `vue-demi` along with `isVue3` variable. If it's used with Vue3, the APIs will work. If with Vue2, they will be `undefined`.
- Other than that, keep your imports from `vue`.
