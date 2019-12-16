<template>
    <div class="goods-list" >
        <!--莫名报错标签不可使用-->
        <!--<goods-list-item v-for="item in goodsList" :goodItem="item"></goods-list-item>-->
        <!--<div class="content">-->
            <good-list-item v-for="item in goodsList" :goodItem="item"></good-list-item>
        <!--</div>-->
        <!--{{goodsList}}-->
    </div>
</template>

<script>
    import GoodListItem from "./GoodListItem";

    /*import BScroll from 'better-scroll'*/
    export default {
      name:"GoodList",
      components:{
        GoodListItem
      },
      props:{
        goodsList:{
          type:Array,
          default(){
            return []
          }
        }
      },
      created() {

      },
      methods:{

      }
      /*mounted() {
        //1.使用betterScroll实例
        BScroll(".warp",{
          probeType:3,
          pullUpLoad: true
        });
        //2.进行实时滚动监听
        BScroll.on("scroll",(pos)=>{
          console.log("实时监听滚动:"+`x:${pos.x}y:${pos.y}`);
        })

        //3.上拉加载更多
        BScroll.on("pullingUp",()=>{
          console.log("上拉加载更多");
        })
      }*/
    }

</script>

<style scoped>
    @import "../../../assets/css/base.css";

    .goods-list-box {
        width: 100%;
    }

    .goods-list-box p {
        font-size: 15px;
        padding-left: 10px;
        margin-top: 10px;
    }

    .goods-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }

    /*不该在组建中又直接使用其他插件，万一以后失效了，或者不维护了呢？？？*/
/*    .warp{
        height: 40vh;
    }
    .content{
        width: 100%;
    }*/
</style>