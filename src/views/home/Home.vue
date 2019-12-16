<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!--错误写法-->
      <!--<slot to="left">左</slot>
      <slot to="center">中</slot>
      <slot to="right">右</slot>-->
      <!--正确写法-->
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll ref="scroll" class="content" @scroll="scroll" @pullingUp="pullingUp">
      <!--<swiper :result="banners"></swiper>-->
      <swiper1 :result="banners"></swiper1>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control ref="tabControl" :result="['流行','新款','精选']" class="tab-control" @tabControlClick="homeTabControlClick"></tab-control>
      <!--会导致图片脱离标准流-->
      <!--<div class="wrap">
        <div class="content">-->
      <goods-list ref="goodsList" :goodsList="goodsTypeList"></goods-list>
      <!--  </div>
      </div>-->
    </scroll>
    <tab-control ref="tabControl1" :result="['流行','新款','精选']" class="tab-control1" @tabControlClick="homeTabControlClick" v-show="isBackTop"></tab-control>
    <back-top @click.native="backTop" v-if="isBackTop"></back-top>
    <!--<div class="backTop">
      <img src="~assets/img/common/top.png" alt="">
    </div>-->
  </div>
</template>

<script>
  import {getHomeMultidata,getHomeGoods} from "network/home";

  import NavBar from "components/common/navbar/NavBar";
  import Swiper from "components/common/swiper/Swiper";
  import Swiper1 from "components/common/swiper/Swiper1";
  import TabControl from "components/common/tabcontrol/TabControl";
  import BackTop from "components/common/backtop/BackTop"

  import GoodsList from "components/content/goods/GoodsList";
  import scroll from "components/content/scroll/Scroll"

  import RecommendView from "./childrenComponents/RecommendView";
  import FeatureView from "./childrenComponents/FeatureView";

  /*import BScroll from "better-scroll"*/

  export default {
    name:"home",
    components: {
      NavBar,
      Swiper,
      Swiper1,
      TabControl,
      BackTop,
      GoodsList,
      scroll,
      FeatureView,
      RecommendView,
    },
    data(){
      return{
        result:null,
        banners: [],
        recommends: [],
        homegoods: {
          pop:{page:0,list:[],type:"pop"},
          new:{page:0,list:[],type:"new"},
          feature:{page:0,list:[],type:"sell"}
        },
        goodsTypeList:[],
        currentType:"pop",
/*        currentType1:{
          type:String,
          default:"pop"
        },*/
        isBackTop:false,
      }
    },
    computed:{
      scrollHeight(){
        return this.$refs.scroll.$el.clientHeight
      },
    },
    created() {
      //this.currentType = "pop";
      //1.请求所有data
      this.getHomeMultidata();
      // getHomeMultidata().then(result=>{
      //   console.log(result);
      //   this.result = result;
      //   this.banners  = result.data.data.banner.list;
      //   this.recommends = result.data.data.recommend.list;
      // }).catch(error=>{
      //   console.log(error)
      // })

      //2.请求home的goods
      //2.1请求pop
      this.getHomeGoods("pop");
      //2.1请求new
      this.getHomeGoods("new");
      //2.1请求feature
      this.getHomeGoods("feature");
      // getHomeGoods("pop",this.homegoods.pop.page).then(result=>{
      //   //2.page应该是动态变化的
      //   //如何保证每次请求后页面加一
      //   this.homegoods.pop.page+=1;
      //   //1.假设是将所有的数据都是放在一个result对象里面
      //   //那岂不是每次你发送过去都是一个页面所有需要展示的数据
      //   //那样你每次请求时数据量岂不是太大了？
      //   //console.log(result);
      //   //this.homegoods.pop.list = result.data.data.list;
      //   //console.log(this.homegoods.pop.list);
      //   //3.问题来了如果向上面一样覆盖原有的数组对象元素，怎么可能一直添加新元素（在不删除原有元素的基础上）
      //   this.homegoods.pop.list.push(...result.data.data.list);
      // }).catch(error=>{
      //   console.log(error)
      // })
      /*console.log(this.homegoods.pop);
      let good1 = this.homegoods.pop;
      switch (this.currentType) {
        case "pop": good1 = this.homegoods.pop;
          break;
        case "new": good1 = this.homegoods.new;
          break;
        case "feature": good1 = this.homegoods.feature;
          break;
      }
      this.goodsTypeList = good1.list*/
    },
    beforeMount(){
      //this.goodsTypeList=this.homegoods.pop.list;
    },
    mounted() {
      if(this.$el.clientWidth<800){
        console.log("我小于800px"+"该如何解决bs从pc页面直接切换到手机页面时候的不能滚动问题");
      }
      // console.log(this.$el.clientWidth)

      //console.info(this.currentType1)
      switch (this.currentType) {
        case "pop": this.goodsTypeList = this.homegoods.pop.list;
          break;
        case "new": this.goodsTypeList = this.homegoods.new.list;
          break;
        case "feature": this.goodsTypeList = this.homegoods.feature.list;
          break;
        default:this.goodsTypeList = this.homegoods.pop.list;
          break
      }
      this.$bus.$on("itemImgLoad",()=>{
        //console.log("home加载图片");
        //console.log(this.$refs.scroll.scroll)
        this.$refs.scroll.scroll.refresh();
      })

      /*//1.使用betterScroll实例
      BScroll(".wrap",{
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
      })*/
      //this.pullingUp();
    },
    updated(){
      // console.log(this.homegoods.pop);
      // // let good1 = this.homegoods.pop;
      // switch (this.currentType) {
      //   case "pop": this.goodsTypeList = this.homegoods.pop.list;
      //     break;
      //   case "new": this.goodsTypeList = this.homegoods.new.list;
      //     break;
      //   case "feature": this.goodsTypeList = this.homegoods.feature.list;
      //     break;
      // }
      /*switch (this.currentType) {
        case "pop": this.getHomeGoods(this.homegoods.pop);
          break;
        case "new": this.getHomeGoods(this.homegoods.new);
          break;
        case "feature": this.getHomeGoods(this.homegoods.feature);
          break;
      }*/
    },
    methods:{
      /**
       * 网络请求
       **/
      getHomeMultidata(){
        getHomeMultidata().then(result=>{
          //console.log(result);
          this.result = result;
          this.banners  = result.data.data.banner.list;
          this.recommends = result.data.data.recommend.list;
        }).catch(error=>{
          console.log(error)
        })
      },
      getHomeGoods(goodType){
        //4.为了保证请求时候的页码不多一故此封装函数
        let good = this.homegoods.pop;
        switch (goodType) {
          case "pop": good = this.homegoods.pop;
            break;
          case "new": good = this.homegoods.new;
            break;
          case "feature": good = this.homegoods.feature;
                          goodType="sell";
            break;
        }
        //console.info(good)
        good.page+=1;
        console.log(good.page);
        //getHomeGoods(good.type,good.page).then(result=>{
          getHomeGoods(goodType,good.page).then(result=>{
          //2.page应该是动态变化的
          //如何保证每次请求后页面加一
          //this.homegoods.pop.page+=1;
          //1.假设是将所有的数据都是放在一个result对象里面
          //那岂不是每次你发送过去都是一个页面所有需要展示的数据
          //那样你每次请求时数据量岂不是太大了？
          //console.log(result);
          //this.homegoods.pop.list = result.data.data.list;
          //console.log(this.homegoods.pop.list);
          //3.问题来了如果向上面一样覆盖原有的数组对象元素，怎么可能一直添加新元素（在不删除原有元素的基础上）
          good.list.push(...result.data.data.list);
        }).catch(error=>{
          console.log(error)
        })
      },

      /**
       * 父子组件事件
       **/
      homeTabControlClick(index){
        //console.info(index)
        /*this.tabControlIndex = parseInt(index);
        if(this.tabControlIndex===0){
          this.goodsTypeList = this.homegoods.pop.list
        }else if(this.tabControlIndex===1){
          this.goodsTypeList = this.homegoods.new.list
        }else if(this.tabControlIndex===2){
          this.goodsTypeList = this.homegoods.feature.list
        }*/
        console.info("homeTabControlClick被点击")
        if(index===0){
          //this.$refs.tabControl.index = index;
          this.currentType = "pop";
          this.goodsTypeList=this.homegoods.pop.list
        }else if(index===1){
          //this.$refs.tabControl.index = index;
          this.currentType = "new";
          this.goodsTypeList=this.homegoods.new.list
        }else if(index===2){
          //this.$refs.tabControl.index = index;
          this.currentType = "feature";
          this.goodsTypeList=this.homegoods.feature.list
        }
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControl1.currentIndex = index;
        //this.$refs.tabControl1.currentIndex = index;
        //this.goodsTypeList=this.homegoods[this.currentType].list;
      },

      goodsListImgLoad(){
        console.log("home加载图片");
        console.log(this.$refs.scroll.scroll)
        this.$refs.scroll.scroll.refresh();
      },

      scroll(position){
/*        console.log(this.$nextTick());
        this.$nextTick(()=>{
          this.$children.scroll.refresh();
        })*/
        //console.info(position)
        //console.log(this.$refs.scroll);
        //console.log(this.$refs.scroll.$el.clientHeight);
        //let height = parseInt(this.$refs.scroll.$el.clientHeight)
        //console.info(-position.y>this.scrollHeight)
        this.isBackTop = -position.y>this.scrollHeight
      },
      pullingUp(){
        /*if(this.currentType==="pop"){
          this.goodsTypeList[currentType].page+=1;
        }else if(this.currentType==="new"){
          this.goodsTypeList.new.page+=1;
        }else if(this.currentType==="feature"){
          this.goodsTypeList.feature.page+=1;
        }*/
        //console.log(this.homegoods.pop.page);
        //this.homegoods.pop.page+=1;
        console.log(this.currentType);
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.finishPullUp();

        //console.log(this.$refs.scroll.scroll)
        console.info("home中的上拉加载滚动")
      },

      /**
       * 原生事件
       * */
      backTop(){
        //console.log("backTop滚动")
        this.$refs.scroll.scrollTo(0,500,50)
      }
    }
    /*beforeRouteLeave(to,from,next){
      next();
    }*/
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: sticky;
    top: 0;
  }

  .tab-control{
    background-color: var(--color-background);
    /*position: sticky;*/
  }

  .tab-control1{
    background-color: var(--color-background);
    width: 100vw;
    position: absolute;
    top: 44px;
    left: 0;
  }

/*  .wrap{
    height: 60vh;
    position: absolute;
    left: 0;
    bottom: 0;
  }*/
  .content{
    position:absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 48px;
  }
  /*.backTop{
    position:absolute;
    bottom: 49px;
    right: 5px;
  }

  .backTop>img{
    width:40px;
    height: 40px;
  }*/
</style>
