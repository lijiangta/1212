<template>
    <div class="show-item">
        <slot name="item"></slot>
    </div>
</template>

<script>
    export default {
      name:"SwiperItem",
    }
</script>

<style scoped>
    .show-item{
        float: left;
        width: 100vw;
        height: 20vh;
    }

    .show-item *{
        width: 100%;
        height: 20vh;
    }
</style>