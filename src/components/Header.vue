<template lang="html">
  <div class="myheader">
      {{title}}
  </div>
</template>

<script>
export default {
  data:function(){
    return {
    }
  },
  props:['title']
}
</script>

<style lang="sass">

.myheader
  width: 100%
  height: 45px
  background-color: #f00
  text-align: center
  line-height: 45px
  color: #fff
  position: fixed
  top: 0
  z-index: 10
</style>
