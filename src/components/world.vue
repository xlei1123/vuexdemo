<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p @click="goHello">我要去hello</p>
    <hr>
    <h2 @click="add">{{count}}</h2>
  
    
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {

  name: 'world',
  data () {
    return {
      msg: 'Welcome to World'
    }
  },
  computed: mapState([
      'count'
  ]),
  mounted(){
    // console.log(this.initializeData)
    // this.initializeData()
  },
  methods:{
    ...mapActions([
      'addCount','initializeData',
    ]),

    // 增加数值
    add(){
      this.addCount()
    },
    goHello(){
      this.$router.push('/hello')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
