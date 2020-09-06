/*
保护多个对应事件的回调函数的对象
接收组件通知触发mutation调用的间接状态的方法的对象
 */
import {ADD_TODO,REMOVE_TODO,UPDATE_ALL_TODOS,DELETE_DONE,RECEIVE_TODOS} from './types'
import storageUtils from "../utils/storageUtils";

export default {
  //添加todo
  addTodo({commit},todo) {
    //提交对mutation的请求
    commit(ADD_TODO, {todo})
  },
  //删除todo
  deleteItem({commit},index) {
    //提交对mutation的请求
    commit(REMOVE_TODO, {index})
  },
  //全选或不全选
  selectAllTodos({commit},value) {
    //提交对mutation的请求
    commit(UPDATE_ALL_TODOS, {value})
  },
  //删除所有已选择的
  deleteAllCompleted({commit}){
    commit(DELETE_DONE)
  },
  //异步获取todos并更新
  reqTodos({commit}){
    //模拟
    setTimeout(()=>{
      //获取todos
      const todos = storageUtils.readTodos();
      //提交mutation
      commit(RECEIVE_TODOS,{todos})
    },1000)
  }
}
