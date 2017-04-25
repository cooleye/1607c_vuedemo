<template >

    <div>
        <my-header :title="title"></my-header>
        <div class="content">
            <template v-for="item in goods">
                <goods-item   @minus-event="change"  @add-event="change"  :id="item.id" :title="item.title"  :price="item.price"  :number="item.number"></goods-item>
            </template>
            <div class="totalPrice">总价：{{totalPrice.toFixed(2)}}</div>
        </div>
    </div>
</template>

<script>

var axios = require('axios')

import MyHeader from './Header'
import GoodsItem from './GoodsItem'

export default {
  data: function(){
      return {
        title: '购物车',
        goods:[],
        totalPrice:0,
        priceList:{}
      }
  },
  components:{
    MyHeader,GoodsItem
  },
  created: function(){

      var that = this;
      axios.get('/goods')
      .then(function(res){
          return res.data;
      })
      .then(function(data){
          that.goods = data.goods;
      })
  },
  methods:{

    change: function(id,price){

      this.priceList[id] = price;
      var total = 0;
      for(var p in this.priceList){
        total += this.priceList[p]
      }
      this.totalPrice = total;

    }
  }
}
</script>

<style lang="sass">

  .content
    width: 100%


  .totalPrice
    width: 100%
    height: 45px
    position: fixed
    bottom: 46px
    background-color: #fff
    line-height: 45px


</style>
