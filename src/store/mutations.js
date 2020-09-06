/*
包含多个由action触发直接更新状态的方法的对象
 */
import {ADD_TODO, REMOVE_TODO, UPDATE_ALL_TODOS,DELETE_DONE,RECEIVE_TODOS} from './types'
export default {
  [ADD_TODO](state,{todo}){
    state.todos.unshift(todo)
  },
  [REMOVE_TODO](state,{index}){
    state.todos.splice(index, 1)
  },
  [UPDATE_ALL_TODOS](state,{value}){
    state.todos.forEach(todo=>todo.complete = value)
  },
  [DELETE_DONE](state){
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [RECEIVE_TODOS](state, {todos}){
    state.todos = todos;
  },

}
