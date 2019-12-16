<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if ="!isActived" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
<!--    //要想给一个插槽动态绑定一个class那就需要在slot后面??-->
   <!-- <slot :class="{active:isTrue}" name="item-text"></slot>-->
    <!--这样子做到我想到的效果-->
    <!--<div :class="{active:isActived}">
      <slot name="item-text"></slot>
    </div>-->
    <!--这样封装还不彻底应为文字的颜色还是写死的-->
    <div :style="styleActived">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    data(){
      return {
        isTrue:true,
        //itemRouter:"/home"
      }
    },
    props:{
      path:String,
      textStyle:{
        type:String,
        default:"var(--color-high-text)"
      }
    },
    computed:{
      //这样不能封装不彻底
      isActived(){
        //return true
        //通过$route找对应的活跃组件
        return this.$route.path.indexOf(this.path) !== -1
        //通过$router找对应活跃的组件(不能？？)
      },
      styleActived(){
        return this.isActived ? {color:this.textStyle} : {};
      }

    },
    methods:{
      itemClick(){
        this.isTrue = !this.isTrue;
        //console.info("-------")
        //this.$router.push(this.itemRouter);   //第一次插入路由正确，第二次插入相同路由出错！！！
        //console.info(this.$router)
        //console.info(this.path);
        //console.info(this.$router);
        //完善出来的路由添加（还有警告待解决）
        if(this.$route.matched[0].path!==this.path){
          //console.info(this.$route.matched[0].path);
          this.$router.replace(this.path)
          //this.path=this.$route.matched[0].path;
        }
      },
    },
/*    beforeRouteLeave(to,from,next){
      if(to.matched[0].path!==this.path){
        this.$router.replace(this.path)
      }
      next();
    }*/
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;

    text-align: center;
    line-height: 22px;
  }

  .tab-bar-item img{
    width:22px;
    height: 22px;
  }

  .active{
     color: red;
   }
</style>
