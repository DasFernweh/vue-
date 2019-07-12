/*
 * @Author: 穆鑫怡
 * @Date: 2019-07-12 14:39:20
 * @Last Modified by: 穆鑫怡
 * @Last Modified time: 2019-07-12 14:42:52
 */
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue是一个用function实现的类，只能通过new Vue去实例化它
//在node中有全局变量progress表示当前的node进程。progress.env包含着关于系统环境的信息
// NODE_ENV是用户一个自定义的变量，判断是生产环境还是开发环境
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
