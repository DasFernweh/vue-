/*
 * @Author: 穆鑫怡
 * @Date: 2019-07-12 14:31:48
 * @Last Modified by: 穆鑫怡
 * @Last Modified time: 2019-07-12 14:36:48
 */

import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering,
})

// object.defineProperty作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  },
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext,
})

Vue.version = '__VERSION__'

export default Vue
