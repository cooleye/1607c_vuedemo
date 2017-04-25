<template>
  <div class="hello">
    <my-header :title="title"></my-header>

  </div>
</template>

<script>

import MyHeader from './Header'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'首页',
    }
  },
  components:{
    'my-header':MyHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
