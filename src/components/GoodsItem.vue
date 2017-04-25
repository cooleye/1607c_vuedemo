<template >

      <div class="goods-item">
          <div class="title">{{title}}</div>
          <div class="price">{{countPrice | currency("￥")}}</div>
          <div class="control">
              <div>
                  <span class="button"  @click="minus">-</span>  <span>{{num}}</span>   <span class="button" @click="add">+</span>
              </div>
          </div>
      </div>

</template>

<script>
export default {
  data: function(){
    return {
        num: this.$props.number,
        pri: this.$props.price,
        ids: this.$props.id
    }
  },
  props:['title','price','number','id'],
  methods:{
    minus: function(){

        if(this.num >= 1){
          this.num--;
          this.$emit('minus-event',this.id,this.price*this.num)
        }
    },
    add: function(){
        this.num++;
        this.$emit('add-event',this.id,this.price*this.num)
    }
  },
  computed:{
    countPrice: function(){
      return (this.pri * this.num)
    }
  },
  filters:{
    currency: function(ele,arg){
        return arg + ele.toFixed(2)
    }
  }
}
</script>

<style lang="sass">


.goods-item
  width: 100%
  height: 60px
  display: flex
  background-color: #fff
  margin-bottom: 1px
  padding-top: 40px
  div
    flex: 1


.goods-item
  div
    div
      .button
        width: 40px
        height: 20px
        border: solid 1px #ccc
        display: inline-block

</style>
