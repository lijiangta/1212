<template>
    <div class="wrapper" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    export default {
      name:"Scroll",
      data(){
        return{
            scroll:null
        }
      },
      mounted() {
        //1.实例化bScroll
        //let scroll = this.$refs.scroll;
        this.scroll = new BScroll(this.$refs.scroll,{
          click:true,
          probeType:3,
          pullUpLoad:true
        })
        //2.监听滚动
        this.scroll.on("scroll",(pos)=>{
          //console.log("x:"+`${pos.x}`+"y:"+`${pos.y}`)
          this.$emit("scroll",pos)
        })
        //3.上拉加载更多
        this.scroll.on("pullingUp",()=>{
          console.log("上拉加载更多");
          //用于表示完成一次上拉加载更多
          this.scroll.finishPullUp();
          this.$emit("pullingUp");
        })

        /*this.scroll.scrollHeight=10000000;
        this.scroll.refresh();*/
      },
      methods:{
        scrollTo(x,y,easing){
          return this.scroll.scrollTo(x,y,easing);
        },
        finishPullUp(){
          return this.scroll.finishPullUp();
        }
      }
    }
</script>

<style scoped>
    .wrapper{
        overflow: hidden;
    }
</style>