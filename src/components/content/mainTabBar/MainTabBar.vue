<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <!--1.跟着示意图划分-->
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <!--2.添加active状态下图片-->
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopCar">
        <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar"
  import TabBarItem from "../../common/tabbar/TabBarItem";
  export default {
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
