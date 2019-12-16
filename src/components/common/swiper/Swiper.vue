<template>
    <div class="swiper">
        <div class="swiper-content">
            <swiper-item v-for="item in result">
                <img :src="item.image" alt="" slot="item">
            </swiper-item>
        </div>
    </div>
</template>

<script>
  import SwiperItem from "./SwiperItem";
 export default {
   name:"Swiper",
   components: {SwiperItem},
   props:{
     result:{
       type:Array,
       /*default:[]*/
       default() {
         return [];
       }
     }
   },
 }
</script>

<style scoped>
    .swiper{
        width: 100vw;
    }

    .swiper-content{
        display: flex;
    }

    .swiper-content img{
        flex: 1;
    }

</style>