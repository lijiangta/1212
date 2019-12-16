<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabBar"
}
</script>

<style scoped>
  @import url("../../../assets/css/base.css");

  #tab-bar{
    display: flex;
    background-color: #F6F6F6;

    /*position: relative;*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(2,2,2,0.2);
  }
</style>
