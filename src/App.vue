<template>
  <div id="app">

    <ul  class="nav">
      <li>
        <router-link to="/home">home</router-link>
      </li>
      <li>
        <router-link to="/list">list</router-link>
      </li>
      <li>
        <router-link to="/cart">购物车</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'app'
}
</script>

<style lang="sass">

html,body
  width: 100%
  height: 100%

body
  background-color: #eee
  padding: 0
  margin: 0
  overflow-x: hidden
  overflow-y: scroll

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50



.nav
  padding: 0
  margin: 0
  width: 100%
  height: 45px
  list-style: none
  position: fixed
  bottom: 0
  left: 0
  background-color: #fff
  display: flex
  li
    flex: 1
    text-align: center
    line-height: 45px
    padding: 0
    margin: 0
    a
      display: block
      width: 100%
      height: 100%
      text-decoration: none
      color: #666
    .active
      background-color: #f00
      color: #fff



</style>
