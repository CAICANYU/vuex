/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

import './base.css'

/*
store作用过程。
1、设置属性状态state,
2、组件通过dispatch方法，‘key’，data调用actions里的回调函数
3、actions通过commit触发mutations,从而改变state
4、getters是用来计算属性变化的，类似于compute
 */

// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),//render渲染函数，
  store,
  // components: {App}, // 映射组件标签
  // template: '<App/>' // 指定需要渲染到页面的模板
})
