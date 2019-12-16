<template>
    <div class="goods-list-item">
        <a :src="goodItem.link">
            <img :src="goodItem.show.img" alt="" @load="itemImgLoad">
            <div class="goods-info">
                <p>{{goodItem.title}}</p>
                <span class="collect">{{goodItem.cfav}}</span><span class="price">￥{{goodItem.price}}</span>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
      name:"GoodsListItem",
      props:{
        goodItem:{
          type:Object,
          default(){
            return{}
          }
        }
      },
      created(){

      },
      methods:{
        itemImgLoad(){
          //console.log("item加载图片");
          this.$bus.$emit("itemImgLoad")
        }
      }
    }
</script>

<style scoped>
    .goods-list-item {
        width: 48%;
        padding-bottom: 40px;
        position: relative;
        z-index: 1;
    }

    .goods-list-item img {
        width: 100%;
        border-radius: 5px;
    }

    .goods-info {
        font-size: 14px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 30px;
    }

    .goods-info .collect {
        position: relative;
    }

    .goods-info .collect::before {
        content: "";
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>