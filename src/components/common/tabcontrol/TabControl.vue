<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item,index) in result" :key="index"
             @click="itemClick(index)">
            <span :class="{active:index===currentIndex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
      name:"TabControl",
      data(){
        return{
            currentIndex:0
        }
      },
      props:{
        result:{
          type:Array,
          default(){
            return []
          }
        }
      },
      methods:{
        itemClick(index){
          console.log("tabcontrol中点击tabcontrol");
          this.currentIndex = index;
          this.$emit("tabControlClick",index)
        }
      },
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        z-index: 9;
    }

    .tab-control-item{
        flex: 1;
    }

    .tab-control-item span{
        padding:5px;
    }

    .active{
        border-bottom: 3px var(--color-tint) solid;
    }
</style>