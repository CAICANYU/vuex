<template>
  <div>
    <p>click {{count}} times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">偶数才加</button>
    <button @click="incrementAsync">隔一秒才加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
    // evenOrOdd(){
    //   return this.$store.getters.evenOrOdd
    // },
  },
  methods:{
    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync']),
    // increment(){
    //   //同构vuex去增加
    //   this.$store.dispatch('increment') //触发store中的action
    // },
    // decrement(){
    //   this.$store.dispatch('decrement') //触发store中的action
    // },
    // incrementIfOdd(){
    //   this.$store.dispatch('incrementIfOdd') //触发store中的action
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync') //触发store中的action
    // },
  }
}
</script>

<style>

</style>
