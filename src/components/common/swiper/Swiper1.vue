<template>
    <div class="swiper" ref="swiper">
        <div v-for="(item,index) in result" class="swiper-item-class" :class="{active:index===swiper1CurrentIndex}">
            <img :src="item.image" alt="">
        </div>
        <div class="swiper-index">
            <span v-for="(item,index) in result"></span>
        </div>
    </div>
</template>

<script>
  export default {
    name:"Swiper1",
    props:{
      result:{
        type:Array,
        /*default:[]*/
        default() {
          return [];
        }
      },
      currentIndex:{
        type:Number,
        default() {
          return 0;
        }
      }
    },
    data(){
      return{
        swiper1Result:this.result,
        swiper1CurrentIndex:this.currentIndex
      }
    },
    computed:{

      /*setCurrentIndex:function () {
        return this.currentIndex;
      },
      resultData:{
        set:function () {

        },
        get:function () {
          return result.length
        }
      }*/
    },
   /* beforeCreate(){
      this.swiper1Result=this.result;
      this.swiperCurrentIndex=this.currentIndex
    },*/
    created(){
      /*setTimeout(function () {
        let a = this.setCurrentIndex;
      },1000)*/
      // this.currentIndex+=1;
      // console.log(this.currentIndex);
      // setInterval(function () {
      //   // let a = this.currentIndex.default;
      //   // a+=1;
      //   // console.log(this.currentIndex);
      // },1000)
      /*setTimeout(function abc() {
        this.setCurrentIndex;
        console.log(this.currentIndex)
        setTimeout(abc,1000)
      },1000)*/
    },
    /*beforeMount(){
      this.swiper1Result=this.result;
      this.swiperCurrentIndex=this.currentIndex
    },*/
    mounted(){
      // this.swiper1Result=this.result
      // this.swiper1CurrentIndex=this.currentIndex
      /*this.swiper1Result=this.result;
      this.swiperCurrentIndex=this.currentIndex*/
      let me = this;
      //console.info(me)
      setTimeout(function abc() {
        //console.log("我在swiper里面")
        // me.currentIndex++
        //me.currentIndex<me.resultData.get:me.currentIndex++:me.currentIndex--;
        //console.log(me.currentIndex)
        //console.info(me)
        console.log(me.swiper1CurrentIndex);
        //0<=me.swiperCurrentIndex&&me.swiperCurrentIndex<me.swiper1Result.length?me.swiperCurrentIndex++:me.swiperCurrentIndex--
        0<=me.swiper1CurrentIndex&&me.swiper1CurrentIndex<=2?me.swiper1CurrentIndex++:me.swiper1CurrentIndex--;
        setTimeout(abc,5000)
      },5000)
      // this.currentIndex+=1;
      // console.log(this.currentIndex);
      //let swiperImgs = this.$refs.swiper.children
      //console.log(swiperImgs.item(0));
      //2.获取swiper下面的所有img
      //let imgs = swiper.getElementsByName("img");
      //console.log(imgs);
      //使当前的img获得active类
      //swiperImgs[this.currentIndex].addClass("active");
      //console.log(swiperImgs[this.currentIndex]);
      //swiperImgs[this.currentIndex].classList.add("active");
      //this.currentIndex+=1;
      /*setInterval(function(){
        //1.获取需要当前显示图片
        let swiper = this.$refs.swiper
        //2.获取swiper下面的所有img

        let imgs = swiper.querySelector("img");
        console.info(imgs)
        //使当前的img获得active类
        imgs[this.currentIndex].addClass("active");
        this.currentIndex+=1;
        //setTimeout(arguments.callee,1000)
      },1000)*/
    },
    /*updated(){
      this.swiper1Result=this.result;
      this.swiperCurrentIndex=this.currentIndex
    },*/
    methods:{
      setTime(){
        setInterval(function(){
          //1.获取需要当前显示图片
          let swiper = this.$refs.swiper.$el
          //2.获取swiper下面的所有img
          let imgs = swiper.querySelector("img");
          //使当前的img获得active类
          imgs[this.currentIndex].addClass("active");
          this.currentIndex+=1;
          //setTimeout(arguments.callee,1000)
        },1000)
      },
      /*setCurrentIndex(index) {
        this.currentIndex +=1;
        return index===this.currentIndex
      }*/
    },
  }
</script>

<style scoped>
    .swiper{
        position: relative;
        width: 100%;
        height: 20vh;
    }

    .swiper-item-class{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .swiper-item-class>img{
        width: 100vw;
        height: 20vh;
    }

    .swiper-index{
        position: absolute;
        bottom:20px;
        left:calc(50vw - 160px/2);
    }

    .swiper-index>span{
        margin-left: 20px;
        float: left;
        display: block;
        width: 20px;
        height: 20px;
        border: 1px solid red;
    }

    .active{
        opacity: 1;
        transition: opacity .5s;
    }
</style>