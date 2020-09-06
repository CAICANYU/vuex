<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index"
              :todo="todo"  :index="index"/>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import TodoItem from './TodoItem.vue'
  import storageUtils from "../utils/storageUtils";

  export default {
    // 声明接收标签属性
    // props: ['todos', 'deleteTodo'], // 会成为当前组件对象的属性, 可以在模板中直接访问, 也可以通过this来访问
    computed:{
      ...mapState(['todos'])
    },
    watch:{
      todos:{
            deep: true, // 深度监视
            /*handler: function (val) {
              // 将数据(json)保存到localStorage
              // localStorage.setItem('todos_key', JSON.stringify(val))
              storageUtils.saveTodos(val)
            }*/
            // handler的值应该是一个函数, 且函数应该要有一个形参(接收todos最新的值)
            handler: storageUtils.saveTodos,
            /*handler: function  (todos) {
              localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
            }*/
      }
    },
    components: {
      TodoItem
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
