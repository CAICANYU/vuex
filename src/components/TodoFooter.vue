<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
<!--          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}-->
          <span>已完成{{completeCount}}</span> / 全部{{totalCount}}
        </span>
    <button class="btn btn-danger" v-show="totalCount" @click="deleteAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {

    computed: {
      ...mapGetters(['totalCount','completeCount']),
      // completeSize () {
      //   return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0)
      // },

      checkAll: {
        get () { // 决定是否勾选
          return this.$store.getters.isAllSelect
        },

        set (value) {// 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
          // this.selectAll(value)
          this.$store.dispatch('selectAllTodos',value)
        }

      },
    },

    methods: {
      ...mapActions(['deleteAllCompleted']),
      // deleteAllCompleted () {
      //   if(window.confirm('确定清除已完成的吗?')) {
      //     // this.deleteCompleteTodos()
      //     this.$store.dispatch('deleteAllCompleted')
      //   }
      // }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
