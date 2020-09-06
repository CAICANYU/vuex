/*
包含多个基于state的getter计算属性函数的对象
 */
export default {
  //总数量
  totalCount(state){
    return state.todos.length;
  },
  completeCount(state){
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0)
  },
  isAllSelect(state,getters){
    return getters.totalCount===getters.completeCount && state.todos.length>0
  }
}
