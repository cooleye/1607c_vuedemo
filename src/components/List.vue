<template lang="html">
    <div>
        <my-header :title="title"></my-header>

        <div class="content">
            <ul>
                <li v-for="item in users">
                  <div><img :src="item.avatar_url"/></div>
                  <div><h2>{{item.login}}</h2></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MyHeader from './Header'
var axios = require('axios')

export default {
  data:function(){
    return{
      title:'分类',
      products:[
        {id:0,name:'milk',price:12},
        {id:1,name:'milk1',price:132},
        {id:2,name:'milk2',price:122},
        {id:3,name:'milk3',price:152},
        {id:4,name:'milk4',price:152}
      ],
      users:[]
    }
  },
  components:{
    'my-header':MyHeader
  },
  mounted:function(){

    var id = this.$route.params.id;
    var name = this.$route.params.name;
    console.log('id:' + id)
    console.log('name:' + name)


    var that = this;
    if(localStorage.users){
      that.users = JSON.parse(localStorage.users);
    }else {
      axios.get('https://api.github.com/users')
      .then(function (response) {
        return response.data
      })
      .then(function(json){
          localStorage.users = JSON.stringify(json)
          that.users = json;
      })
      .catch(function (error) {
        console.log(error);
      });
    }


  }
}
</script>

<style lang="sass">

h1,h2,h3,h4,h5,h6
  margin: 0
  padding: 0


.content
  margin-top: 45px

ul
  list-style-type: none
  padding: 0
  width: 100%
  margin: 0
  li
    display: flex
    width: 100%
    height: 100px
    background-color: #fff
    margin-top: 5px
    line-height: 100px
    div
      flex: 1
    img
      width: 100px
      height: 100px
</style>
